"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, Mail, FileText } from "lucide-react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

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

// Dynamically import Scene3D to disable SSR type issues
const Scene3D = dynamic(() => import("./Scene3D"), {
  ssr: false,
  loading: () => <div className="h-full w-full animate-pulse bg-white/5 rounded-3xl" />,
});

const roles = ["AI & ML Engineer", "Flutter Developer", "Full-Stack Learner"];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const handleScrollToProjects = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const element = document.getElementById("projects");
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col justify-center overflow-hidden pt-20"
    >
      {/* Background radial glow */}
      <div className="absolute top-1/4 left-1/4 z-[-1] h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyber-purple/15 blur-[100px] animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 z-[-1] h-[400px] w-[400px] translate-x-1/2 translate-y-1/2 rounded-full bg-cyber-cyan/15 blur-[100px] animate-pulse-slow" style={{ animationDelay: "2s" }} />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 items-center">
          {/* Text Content */}
          <div className="lg:col-span-7 flex flex-col space-y-6 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center self-center lg:self-start space-x-2 rounded-full bg-white/5 border border-white/10 px-4 py-1.5 backdrop-blur-md"
            >
              <span className="flex h-2.5 w-2.5 rounded-full bg-cyber-cyan animate-pulse" />
              <span className="text-xs font-medium tracking-wide text-zinc-300">
                Available for Opportunities
              </span>
            </motion.div>

            {/* Name with text reveal */}
            <div className="overflow-hidden">
              <motion.h1
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl md:text-7xl"
              >
                AJAY{" "}
                <span className="bg-gradient-to-r from-cyber-cyan via-cyber-blue to-cyber-purple bg-clip-text text-transparent">
                  KRISHNAN
                </span>{" "}
                K
              </motion.h1>
            </div>

            {/* Role Rotation */}
            <div className="h-10 sm:h-12 overflow-hidden flex justify-center lg:justify-start">
              <motion.div
                key={roleIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="text-xl sm:text-2xl font-semibold text-zinc-400 font-mono tracking-tight"
              >
                {roles[roleIndex]}
              </motion.div>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mx-auto lg:mx-0 max-w-lg text-base sm:text-lg text-zinc-400 leading-relaxed"
            >
              Passionate about intelligent systems, machine learning, mobile development with Flutter, and building impact-driven technologies.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-4 pt-4"
            >
              <button
                onClick={handleScrollToProjects}
                className="group relative flex h-12 w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyber-cyan to-cyber-blue px-6 font-semibold text-black shadow-lg shadow-cyber-cyan/10 transition-all duration-300 hover:shadow-cyber-cyan/30 hover:scale-[1.02]"
              >
                View Projects
                <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 w-full sm:w-auto items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 font-semibold text-white backdrop-blur-md transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:scale-[1.02]"
              >
                <FileText size={18} className="text-cyber-cyan" />
                Download CV
              </a>
            </motion.div>

            {/* Social Icons (Hero footer) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex justify-center lg:justify-start space-x-5 pt-6 text-zinc-500"
            >
              <a
                href="https://github.com/ajaykrishnank2006"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors duration-200"
              >
                <GithubIcon size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/ajay-krishnan-k-1a37343a8"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors duration-200"
              >
                <LinkedinIcon size={20} />
              </a>
              <a
                href="mailto:ajaykrishnank2024@gmail.com"
                className="hover:text-white transition-colors duration-200"
              >
                <Mail size={20} />
              </a>
            </motion.div>
          </div>

          {/* 3D Canvas Shape */}
          <div className="lg:col-span-5 h-[350px] sm:h-[450px] lg:h-[550px] w-full flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative h-full w-full"
            >
              {/* Inner glowing ring backdrop */}
              <div className="absolute inset-0 m-auto h-[250px] w-[250px] rounded-full bg-cyber-purple/10 blur-[80px] z-[-1]" />
              <Scene3D />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
