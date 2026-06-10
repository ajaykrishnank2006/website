"use client";

import { motion } from "framer-motion";
import { Building2, Calendar, CheckCircle2, Users } from "lucide-react";
import TextReveal from "./TextReveal";

const achievements = [
  "Reduced manual verification time by 40% through automation pipelines",
  "Engineered a signature verification model with 90%+ accuracy classification",
  "Improved fraud detection reliability by 30% using advanced image processing",
  "Collaborated in a fast-paced team environment to integrate systems",
];

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-0 z-[-1] h-[350px] w-[350px] rounded-full bg-cyber-purple/10 blur-[100px] animate-pulse-slow" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col space-y-2 mb-16 text-center lg:text-left"
        >
          <h2 className="text-xs font-semibold uppercase tracking-widest text-cyber-purple font-mono">
            / Professional Journey
          </h2>
          <h3 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            <TextReveal text="Where I've Contributed" />
          </h3>
        </motion.div>

        {/* Timeline Layout */}
        <div className="relative mx-auto max-w-3xl">
          {/* Vertical axis line */}
          <div className="absolute left-4 top-2 bottom-2 w-0.5 bg-gradient-to-b from-cyber-cyan via-cyber-purple to-transparent md:left-1/2 md:-translate-x-1/2" />

          {/* Internship Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="relative pl-12 md:pl-0 md:grid md:grid-cols-2 md:gap-8"
          >
            {/* Timeline center bullet */}
            <div className="absolute left-2.5 top-6 z-10 flex h-3 w-3 -translate-x-1/2 items-center justify-center rounded-full bg-cyber-cyan shadow-[0_0_12px_rgba(6,182,212,0.8)] md:left-1/2 md:translate-x-0" />

            {/* Date display (Left side for desktop) */}
            <div className="hidden md:flex md:flex-col md:items-end md:justify-center pr-8 text-right">
              <span className="text-sm font-mono text-cyber-cyan flex items-center gap-1.5 justify-end">
                <Calendar size={14} /> Internship Period
              </span>
              <h4 className="text-lg font-bold text-white mt-1">AI / ML Intern</h4>
              <p className="text-sm text-zinc-400">Linkmein Technologies Pvt. Ltd</p>
              <p className="text-xs text-zinc-500">Hyderabad (Remote/Hybrid)</p>
            </div>

            {/* Card Content (Right side for desktop) */}
            <div className="md:pl-8">
              <div className="glassmorphism-card p-6 rounded-2xl border border-white/5 shadow-2xl hover:border-cyber-purple/30">
                {/* Mobile Heading (Hidden on Desktop) */}
                <div className="flex flex-col space-y-1 mb-4 md:hidden">
                  <span className="text-xs font-mono text-cyber-cyan flex items-center gap-1">
                    <Calendar size={12} /> Internship Period
                  </span>
                  <h4 className="text-xl font-bold text-white">AI / ML Intern</h4>
                  <p className="text-sm text-zinc-400">Linkmein Technologies Pvt. Ltd, Hyderabad</p>
                </div>

                <div className="flex items-center gap-2 mb-4 pb-4 border-b border-white/5">
                  <div className="p-2 bg-cyber-purple/10 border border-cyber-purple/20 rounded-lg">
                    <Building2 className="text-cyber-purple" size={18} />
                  </div>
                  <div>
                    <h5 className="text-sm font-semibold text-white">Engineering Accomplishments</h5>
                    <p className="text-xs text-zinc-400">Impact & Optimization Metrics</p>
                  </div>
                </div>

                <ul className="space-y-3.5">
                  {achievements.map((achievement, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: 10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: idx * 0.1 }}
                      className="flex items-start gap-2.5 text-sm text-zinc-300 leading-relaxed"
                    >
                      <CheckCircle2 className="text-cyber-cyan shrink-0 mt-0.5" size={16} />
                      <span>{achievement}</span>
                    </motion.li>
                  ))}
                </ul>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-2 text-xs text-zinc-500 font-mono">
                  <Users size={12} />
                  <span>Collaborated with engineering & verification teams</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
