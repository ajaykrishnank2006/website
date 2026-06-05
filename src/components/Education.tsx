"use client";

import { motion } from "framer-motion";
import { GraduationCap, MapPin, BookOpen, Calendar } from "lucide-react";

const coreSubjects = [
  "Artificial Intelligence Foundations",
  "Machine Learning & Deep Learning",
  "Computer Vision & NLP",
  "Python Programming & Libraries",
  "Data Structures & Algorithms",
  "Database Management Systems",
];

export default function Education() {
  return (
    <section id="education" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/3 right-10 z-[-1] h-[350px] w-[350px] rounded-full bg-cyber-cyan/5 blur-[90px] animate-pulse-slow" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col space-y-2 mb-16 text-center"
        >
          <h2 className="text-xs font-semibold uppercase tracking-widest text-cyber-cyan font-mono">
            / Academic Background
          </h2>
          <h3 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Education Timeline
          </h3>
        </motion.div>

        {/* Education Credential Card */}
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="group relative rounded-3xl glassmorphism-card p-8 border border-white/5 shadow-2xl hover:border-cyber-cyan/30"
          >
            {/* Glowing effect inside card */}
            <div className="absolute inset-0 rounded-3xl bg-transparent transition-all duration-500 group-hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] pointer-events-none z-[-1]" />

            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 pb-6 border-b border-white/5">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-cyber-cyan/10 border border-cyber-cyan/20 rounded-2xl">
                  <GraduationCap className="text-cyber-cyan" size={28} />
                </div>
                <div>
                  <h4 className="text-xl font-extrabold text-white tracking-tight">
                    Diploma in Artificial Intelligence and Machine Learning
                  </h4>
                  <p className="text-base text-zinc-300 font-semibold mt-1">
                    Malabar Polytechnic Campus
                  </p>
                  <p className="text-sm text-zinc-400 flex items-center gap-1.5 mt-1">
                    <MapPin size={14} className="text-zinc-500" /> Kerala, India
                  </p>
                </div>
              </div>
              <div className="flex md:flex-col items-center md:items-end gap-1.5 md:gap-1 text-sm text-cyber-cyan font-mono shrink-0">
                <Calendar size={14} />
                <span>Course Completion</span>
              </div>
            </div>

            <div className="pt-6">
              <h5 className="text-sm font-semibold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                <BookOpen size={16} className="text-cyber-purple" /> Core Academic Focus
              </h5>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {coreSubjects.map((subject, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.08 }}
                    className="flex items-center gap-2.5 text-sm text-zinc-400"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-cyber-purple shrink-0" />
                    <span>{subject}</span>
                  </motion.div>
                ))}
              </div>
            </div>

          </motion.div>
        </div>

      </div>
    </section>
  );
}
