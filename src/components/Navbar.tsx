"use client";

import { useState, useEffect } from "react";
import { Menu, X, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Magnetic from "./Magnetic";

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

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Section tracking for active state
      const sections = navItems.map((item) => document.getElementById(item.href.substring(1)));
      const scrollPosition = window.scrollY + 200;

      for (let i = 0; i < sections.length; i++) {
        const section = sections[i];
        if (section) {
          const top = section.offsetTop;
          const height = section.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(navItems[i].href.substring(1));
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.substring(1);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setActiveSection(id);
      setIsOpen(false);
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled ? "py-4" : "py-6"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div
            className={`mx-auto flex max-w-5xl items-center justify-between px-6 py-3 transition-all duration-300 ${
              scrolled
                ? "glassmorphism rounded-full shadow-lg"
                : "bg-transparent border border-transparent"
            }`}
          >
            {/* Logo */}
            <a
              href="#home"
              onClick={(e) => handleLinkClick(e, "#home")}
              className="group flex items-center space-x-2 text-xl font-bold tracking-widest text-white"
            >
              <span className="bg-gradient-to-r from-cyber-cyan to-cyber-purple bg-clip-text text-transparent group-hover:opacity-85 transition-opacity">
                AK
              </span>
              <span className="text-xs text-cyber-cyan opacity-60 font-mono tracking-tighter">.dev</span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleLinkClick(e, item.href)}
                    className={`relative rounded-full px-4 py-1.5 text-sm font-medium transition-colors duration-200 ${
                      isActive ? "text-cyber-cyan" : "text-zinc-400 hover:text-white"
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="activeNav"
                        className="absolute inset-0 z-[-1] rounded-full bg-white/5 border border-white/10"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    {item.name}
                  </a>
                );
              })}
            </div>

            {/* Social Links (Desktop) */}
            <div className="hidden md:flex items-center space-x-4">
              <Magnetic>
                <a
                  href="https://github.com/ajaykrishnank2006"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-cyber-cyan transition-colors"
                >
                  <GithubIcon size={18} />
                </a>
              </Magnetic>
              <Magnetic>
                <a
                  href="https://www.linkedin.com/in/ajay-krishnan-k-1a37343a8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-cyber-purple transition-colors"
                >
                  <LinkedinIcon size={18} />
                </a>
              </Magnetic>
              <Magnetic>
                <a
                  href="mailto:ajaykrishnank2024@gmail.com"
                  className="text-zinc-400 hover:text-cyber-cyan transition-colors"
                >
                  <Mail size={18} />
                </a>
              </Magnetic>
            </div>

            {/* Mobile menu button */}
            <div className="flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-zinc-400 hover:text-white focus:outline-none"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-0 top-20 z-30 mx-4 rounded-3xl glassmorphism p-6 shadow-2xl md:hidden"
          >
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleLinkClick(e, item.href)}
                    className={`block rounded-lg px-4 py-2 text-base font-medium transition-colors ${
                      isActive
                        ? "bg-gradient-to-r from-cyber-cyan/15 to-cyber-purple/15 text-cyber-cyan border-l-2 border-cyber-cyan"
                        : "text-zinc-400 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    {item.name}
                  </a>
                );
              })}
              <div className="flex justify-center space-x-6 pt-4 border-t border-white/10">
                <a
                  href="https://github.com/ajaykrishnank2006"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-cyber-cyan transition-colors"
                >
                  <GithubIcon size={22} />
                </a>
                <a
                  href="https://www.linkedin.com/in/ajay-krishnan-k-1a37343a8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-cyber-purple transition-colors"
                >
                  <LinkedinIcon size={22} />
                </a>
                <a
                  href="mailto:ajaykrishnank2024@gmail.com"
                  className="text-zinc-400 hover:text-cyber-cyan transition-colors"
                >
                  <Mail size={22} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
