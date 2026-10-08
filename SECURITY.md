# Security Checklist

This portfolio is a static Vercel site with one server-side contact function.

## Implemented

- Client-side API credentials removed from `index.html`
- Contact submissions now go through `/api/contact`
- Web3Forms credential is read from `WEB3FORMS_ACCESS_KEY`
- Server-side validation for name, email, message length and format
- Control-character stripping and newline-safe subject generation
- Honeypot bot protection
- Minimum form completion time check
- Best-effort IP rate limiting
- Same-origin HTTPS origin check
- JSON-only API requests
- Minimal API responses with `Cache-Control: no-store`
- CSP
- HSTS
- X-Content-Type-Options
- X-Frame-Options
- Referrer-Policy
- Permissions-Policy
- Cross-Origin-Opener-Policy
- Cross-Origin-Resource-Policy
- X-Permitted-Cross-Domain-Policies
- No database, authentication, password storage, file uploads or user records are used by this site
- No third-party JavaScript is required by the site

## Required before the contact form can send messages

1. Rotate the previously exposed Web3Forms access key.
2. Add the new value in Vercel as the Production environment variable:
   `WEB3FORMS_ACCESS_KEY`
3. Redeploy the project.

## Important

The old Web3Forms key appeared in earlier public Git history. Removing it from the current source does not erase old commits. After rotating the key, treat the old value as compromised.

For stronger production bot and rate-limit protection, add a Vercel Firewall rule for `/api/contact`.
