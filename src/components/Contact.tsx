"use client";

import { useState } from "react";
import { Mail, Send, CheckCircle } from "lucide-react";
import { motion as motionFramer, AnimatePresence } from "framer-motion";
import TextReveal from "./TextReveal";

const GithubIcon = ({ size = 20, className = "" }: { size?: number; className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ size = 20, className = "" }: { size?: number; className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const contactLinks = [
  {
    name: "Email Me",
    icon: <Mail className="text-cyber-cyan" size={20} />,
    value: "ajaykrishnank2024@gmail.com",
    href: "mailto:ajaykrishnank2024@gmail.com",
    label: "Direct Inquiries",
  },
  {
    name: "GitHub Profile",
    icon: <GithubIcon className="text-cyber-purple" size={20} />,
    value: "github.com/ajaykrishnank2006",
    href: "https://github.com/ajaykrishnank2006",
    label: "Open Source Projects",
  },
  {
    name: "LinkedIn Connect",
    icon: <LinkedinIcon className="text-cyber-blue" size={20} />,
    value: "linkedin.com/in/ajay-krishnan-k-1a37343a8",
    href: "https://www.linkedin.com/in/ajay-krishnan-k-1a37343a8",
    label: "Professional Networking",
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus("sending");
    
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "YOUR_ACCESS_KEY_HERE",
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `New Portfolio Message from ${formData.name}`,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        console.error("Web3Forms Error:", result);
        setStatus("idle");
        alert("Failed to send message: " + (result.message || "Please try again later."));
      }
    } catch (error) {
      console.error("Fetch Error:", error);
      setStatus("idle");
      alert("Network error. Please try again later or email directly.");
    }
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-1/4 right-1/4 z-[-1] h-[400px] w-[400px] rounded-full bg-cyber-purple/10 blur-[100px] animate-pulse-slow" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <motionFramer.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col space-y-2 mb-16 text-center"
        >
          <h2 className="text-xs font-semibold uppercase tracking-widest text-cyber-purple font-mono">
            / Let&apos;s Connect
          </h2>
          <h3 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            <TextReveal text="Get In Touch" />
          </h3>
        </motionFramer.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-5xl mx-auto">
          
          {/* Left Side: Contact details */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            <div className="flex flex-col space-y-6">
              <motionFramer.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-center lg:text-left"
              >
                <h4 className="text-xl font-bold text-white mb-2">Have a project in mind?</h4>
                <p className="text-sm text-zinc-400">
                  Whether you are a recruiter, startup founder, or looking for general collaboration, feel free to reach out. I will respond within 24 hours.
                </p>
              </motionFramer.div>

              <div className="flex flex-col gap-4">
                {contactLinks.map((link, idx) => (
                  <motionFramer.a
                    key={link.name}
                    href={link.href}
                    target={link.name !== "Email Me" ? "_blank" : undefined}
                    rel={link.name !== "Email Me" ? "noopener noreferrer" : undefined}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="flex items-center gap-4 p-4 rounded-2xl glassmorphism-card hover:border-cyber-cyan/35"
                  >
                    <div className="p-3 bg-white/5 border border-white/10 rounded-xl">
                      {link.icon}
                    </div>
                    <div>
                      <span className="text-xs text-zinc-500 font-mono block">{link.label}</span>
                      <span className="text-sm font-semibold text-white tracking-tight break-all">
                        {link.value}
                      </span>
                    </div>
                  </motionFramer.a>
                ))}
              </div>
            </div>
            
            <div className="hidden lg:block text-xs text-zinc-600 font-mono">
              © {new Date().getFullYear()} Ajay Krishnan. Designed with premium tech stack.
            </div>
          </div>

          {/* Right Side: Message Form */}
          <div className="lg:col-span-7">
            <motionFramer.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-3xl glassmorphism-card p-8 border border-white/5 shadow-2xl relative"
            >
              <h4 className="text-lg font-bold text-white mb-6">Send an Instant Message</h4>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="text-xs font-mono text-zinc-400 block mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    disabled={status !== "idle"}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyber-cyan transition-colors"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="text-xs font-mono text-zinc-400 block mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    disabled={status !== "idle"}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyber-cyan transition-colors"
                    placeholder="name@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="text-xs font-mono text-zinc-400 block mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    disabled={status !== "idle"}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyber-purple transition-colors resize-none"
                    placeholder="Hi Ajay, let's collaborate on..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={status !== "idle"}
                  className="w-full h-12 rounded-xl bg-gradient-to-r from-cyber-cyan to-cyber-purple text-black font-semibold flex items-center justify-center gap-2 transition-all duration-300 hover:opacity-90 active:scale-[0.98] cursor-pointer disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {status === "idle" && (
                    <>
                      Send Message <Send size={15} />
                    </>
                  )}
                  {status === "sending" && <span>Processing Transmission...</span>}
                  {status === "success" && (
                    <>
                      Message Transmitted <CheckCircle size={15} />
                    </>
                  )}
                </button>
              </form>

              {/* Success Backdrop Animation */}
              <AnimatePresence>
                {status === "success" && (
                  <motionFramer.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 rounded-3xl bg-black/90 flex flex-col items-center justify-center p-8 text-center"
                  >
                    <CheckCircle className="text-cyber-cyan mb-4 animate-bounce" size={48} />
                    <h5 className="text-xl font-bold text-white mb-2">Transmission Successful!</h5>
                    <p className="text-sm text-zinc-400 max-w-sm">
                      Your message was successfully compiled and transmitted. I will review it and reply as soon as possible.
                    </p>
                  </motionFramer.div>
                )}
              </AnimatePresence>
            </motionFramer.div>
          </div>

        </div>

        {/* Footer (Mobile Only) */}
        <div className="lg:hidden text-center mt-12 text-xs text-zinc-600 font-mono">
          © {new Date().getFullYear()} Ajay Krishnan. Designed with premium tech stack.
        </div>

      </div>
    </section>
  );
}
