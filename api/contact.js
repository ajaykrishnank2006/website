const RATE_WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS_PER_WINDOW = 5;
const rateStore = globalThis.__contactRateStore || new Map();
globalThis.__contactRateStore = rateStore;

function json(res, status, body) {
  res.status(status).setHeader("Content-Type", "application/json; charset=utf-8");
  res.setHeader("Cache-Control", "no-store");
  return res.end(JSON.stringify(body));
}

function cleanText(value, max) {
  return String(value ?? "")
    .replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, "")
    .trim()
    .slice(0, max);
}

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i.test(value);
}

function getClientIp(req) {
  const forwarded = req.headers["x-forwarded-for"];
  return String(forwarded || req.socket?.remoteAddress || "unknown")
    .split(",")[0]
    .trim()
    .slice(0, 100);
}

function allowedOrigin(req) {
  const origin = String(req.headers.origin || "");
  if (!origin) return true;
  try {
    const url = new URL(origin);
    const host = String(req.headers.host || "").split(":")[0];
    return url.protocol === "https:" && url.hostname === host;
  } catch {
    return false;
  }
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return json(res, 405, { success: false, message: "Method not allowed." });
  }

  if (!allowedOrigin(req)) {
    return json(res, 403, { success: false, message: "Forbidden." });
  }

  const contentType = String(req.headers["content-type"] || "");
  if (!contentType.toLowerCase().includes("application/json")) {
    return json(res, 415, { success: false, message: "Unsupported content type." });
  }

  const ip = getClientIp(req);
  const now = Date.now();
  const recent = (rateStore.get(ip) || []).filter((time) => now - time < RATE_WINDOW_MS);

  if (recent.length >= MAX_REQUESTS_PER_WINDOW) {
    return json(res, 429, { success: false, message: "Too many requests. Please try again later." });
  }

  recent.push(now);
  rateStore.set(ip, recent);

  const body = req.body && typeof req.body === "object" ? req.body : {};

  // Honeypot. Real users never see or fill this field.
  if (cleanText(body.website, 200)) {
    return json(res, 400, { success: false, message: "Invalid submission." });
  }

  const name = cleanText(body.name, 80);
  const email = cleanText(body.email, 254);
  const message = cleanText(body.message, 4000);
  const formStart = Number(body.form_start);

  if (name.length < 2 || !isValidEmail(email) || message.length < 10) {
    return json(res, 400, { success: false, message: "Please provide valid form details." });
  }

  // Reject instant automated submissions while allowing normal fast submissions.
  if (!Number.isFinite(formStart) || now - formStart < 1200 || now - formStart > 24 * 60 * 60 * 1000) {
    return json(res, 400, { success: false, message: "Please wait a moment and try again." });
  }

  const accessKey = process.env.WEB3FORMS_ACCESS_KEY;
  if (!accessKey) {
    console.error("WEB3FORMS_ACCESS_KEY is not configured.");
    return json(res, 503, { success: false, message: "Contact service is temporarily unavailable." });
  }

  const subject = `New Portfolio Message from ${name.replace(/[\r\n]+/g, " ")}`;
  const payload = {
    access_key: accessKey,
    name,
    email,
    message,
    subject
  };

  try {
    const upstream = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(payload)
    });

    let result = {};
    try {
      result = await upstream.json();
    } catch {
      result = {};
    }

    if (!upstream.ok || !result.success) {
      console.error("Web3Forms submission failed:", upstream.status);
      return json(res, 502, { success: false, message: "Unable to send your message right now." });
    }

    // Return only the minimum needed by the browser.
    return json(res, 200, { success: true });
  } catch (error) {
    console.error("Contact upstream error:", error);
    return json(res, 502, { success: false, message: "Unable to send your message right now." });
  }
}
