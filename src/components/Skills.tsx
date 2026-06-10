"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TextReveal from "./TextReveal";
import { Brain, Smartphone, Code2, Wrench } from "lucide-react";

const skillCategories = [
  {
    id: "aiml",
    name: "AI & ML",
    icon: <Brain size={18} />,
    skills: ["Python", "TensorFlow", "Scikit-learn", "OpenCV", "NumPy", "Pandas"],
    color: "from-cyber-purple to-pink-500",
    glow: "rgba(139, 92, 246, 0.2)",
  },
  {
    id: "mobile",
    name: "Mobile Development",
    icon: <Smartphone size={18} />,
    skills: ["Flutter", "Firebase", "Android Development"],
    color: "from-cyber-cyan to-cyber-blue",
    glow: "rgba(6, 182, 212, 0.2)",
  },
  {
    id: "web",
    name: "Web Development",
    icon: <Code2 size={18} />,
    skills: ["React", "JavaScript", "HTML", "CSS", "Node.js"],
    color: "from-cyber-blue to-cyber-purple",
    glow: "rgba(59, 130, 246, 0.2)",
  },
  {
    id: "tools",
    name: "Tools & APIs",
    icon: <Wrench size={18} />,
    skills: ["GitHub", "VS Code", "Android Studio", "OpenAI API", "Google AI Studio"],
    color: "from-pink-500 to-amber-500",
    glow: "rgba(236, 72, 153, 0.2)",
  },
];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("aiml");

  const activeCategoryData = skillCategories.find((cat) => cat.id === activeCategory);

  return (
    <section id="skills" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-0 z-[-1] h-[400px] w-[400px] rounded-full bg-cyber-purple/5 blur-[100px] animate-pulse-slow" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col space-y-2 mb-16 text-center"
        >
          <h2 className="text-xs font-semibold uppercase tracking-widest text-cyber-purple font-mono">
            / Stack & Capabilities
          </h2>
          <h3 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            <TextReveal text="My Technical Arsenal" />
          </h3>
        </motion.div>

        {/* Tab Headers */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 max-w-2xl mx-auto">
          {skillCategories.map((category) => {
            const isActive = activeCategory === category.id;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`relative flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 border backdrop-blur-md cursor-pointer ${
                  isActive
                    ? "text-white border-transparent"
                    : "text-zinc-400 border-white/5 bg-white/5 hover:text-white hover:border-white/10"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeSkillTab"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-cyber-cyan/25 to-cyber-purple/25 border border-cyber-cyan/30 z-[-1]"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                {category.icon}
                {category.name}
              </button>
            );
          })}
        </div>

        {/* Tab Content Display */}
        <div className="relative mx-auto max-w-4xl min-h-[220px]">
          <AnimatePresence mode="wait">
            {activeCategoryData && (
              <motion.div
                key={activeCategoryData.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
              >
                {activeCategoryData.skills.map((skill, idx) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: idx * 0.05 }}
                    whileHover={{ scale: 1.03 }}
                    className="relative flex items-center justify-center p-5 rounded-2xl glassmorphism-card text-center select-none"
                    style={{
                      boxShadow: `0 4px 24px 0 rgba(0, 0, 0, 0.25), 0 0 10px ${activeCategoryData.glow}`,
                    }}
                  >
                    <span className="text-sm font-semibold tracking-tight text-white font-mono">
                      {skill}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
