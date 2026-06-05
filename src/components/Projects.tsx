"use client";

import { motion } from "framer-motion";
import { Sparkles, Cpu, ShieldAlert, ArrowUpRight, CheckCircle2 } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Smart Study Assistant",
    category: "Mobile Application",
    icon: <Sparkles className="text-amber-400" size={22} />,
    tech: ["Flutter", "Firebase", "OpenAI API", "Riverpod"],
    features: [
      "AI-driven Question Answering chatbot",
      "Dynamic study summaries generation",
      "Tailored personalized study schedules",
    ],
    glowColor: "rgba(139, 92, 246, 0.25)", // Purple glow
    link: "https://github.com/ajaykrishnank2006/studybot",
  },
  {
    id: 2,
    title: "AI Chat Bot",
    category: "Web Application",
    icon: <Cpu className="text-cyber-cyan" size={22} />,
    tech: ["TypeScript", "React", "HTML", "CSS"],
    features: [
      "Interactive messaging chat interface",
      "Dynamic prompt response logic",
      "Responsive layout for desktop & mobile devices",
    ],
    glowColor: "rgba(6, 182, 212, 0.25)", // Cyan glow
    link: "https://github.com/ajaykrishnank2006/chat-bot",
  },
  {
    id: 3,
    title: "AI-Powered Android Game",
    category: "Mobile Development",
    icon: <ShieldAlert className="text-cyber-blue" size={22} />,
    tech: ["Kotlin", "Android Studio", "Google AI SDK"],
    features: [
      "Kotlin-native Android gameplay mechanics",
      "Integrated Gemini API/AI Studio template",
      "Intelligent dynamic interaction feedbacks",
    ],
    glowColor: "rgba(59, 130, 246, 0.25)", // Blue glow
    link: "https://github.com/ajaykrishnank2006/game",
  },
];

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring" as const, bounce: 0.2, duration: 0.8 } },
  };

  return (
    <section id="projects" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/4 left-1/2 z-[-1] h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-cyber-cyan/10 blur-[120px] animate-pulse-slow" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col space-y-2 text-center md:text-left"
          >
            <h2 className="text-xs font-semibold uppercase tracking-widest text-cyber-cyan font-mono">
              / Featured Works
            </h2>
            <h3 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Projects & Prototypes
            </h3>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-sm text-zinc-400 font-mono text-center md:text-right max-w-md"
          >
            Building products combining machine learning interfaces and high-performance native frontend code.
          </motion.p>
        </div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              className="group relative flex flex-col justify-between rounded-3xl glassmorphism-card p-7 border border-white/5 shadow-2xl h-full"
              style={{
                // Custom glow effect on card hover
                "--glow-color": project.glowColor,
              } as React.CSSProperties}
            >
              {/* Animated glowing border background */}
              <div className="absolute inset-0 rounded-3xl bg-transparent transition-all duration-500 group-hover:shadow-[0_0_35px_var(--glow-color)] pointer-events-none z-[-1]" />

              <div className="flex flex-col space-y-6">
                {/* Header */}
                <div className="flex items-center justify-between">
                  <div className="p-3 bg-white/5 border border-white/10 rounded-2xl">
                    {project.icon}
                  </div>
                  <span className="text-xs font-mono text-zinc-500 bg-white/5 border border-white/5 px-2.5 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>

                {/* Info */}
                <div className="flex flex-col space-y-2">
                  <h4 className="text-xl font-bold text-white tracking-tight group-hover:text-cyber-cyan transition-colors duration-300">
                    {project.title}
                  </h4>
                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] font-mono text-cyber-cyan bg-cyber-cyan/5 border border-cyber-cyan/10 px-2 py-0.5 rounded-md"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features List */}
                <ul className="space-y-2.5 pt-2 border-t border-white/5">
                  {project.features.map((feat, index) => (
                    <li key={index} className="flex items-start gap-2 text-xs text-zinc-400">
                      <CheckCircle2 size={13} className="text-cyber-cyan shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Footer CTA */}
              <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between">
                <span className="text-[11px] font-mono text-zinc-500">View code repository</span>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-white/5 border border-white/10 rounded-xl text-zinc-400 group-hover:text-white group-hover:bg-cyber-cyan/15 group-hover:border-cyber-cyan/30 transition-all duration-300"
                >
                  <ArrowUpRight size={16} />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
