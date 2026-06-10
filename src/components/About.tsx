"use client";

import { motion } from "framer-motion";
import { Brain, Cpu, Smartphone, Flame } from "lucide-react";
import TextReveal from "./TextReveal";

const focusCards = [
  {
    icon: <Brain className="text-cyber-purple" size={24} />,
    title: "Artificial Intelligence",
    description: "Developing intelligent architectures, deep learning classifiers, and ML pipelines.",
  },
  {
    icon: <Cpu className="text-cyber-cyan" size={24} />,
    title: "Machine Learning",
    description: "Experienced with TensorFlow, Scikit-learn, computer vision, and predictive models.",
  },
  {
    icon: <Smartphone className="text-cyber-blue" size={24} />,
    title: "Flutter Development",
    description: "Building fast, high-performance, cross-platform Android & iOS applications.",
  },
  {
    icon: <Flame className="text-pink-500" size={24} />,
    title: "Emerging Tech",
    description: "Enthusiastic learner exploring LLM integrations, OpenAI APIs, and Google AI Studio.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Glow backdrop */}
      <div className="absolute top-1/2 right-0 z-[-1] h-[350px] w-[350px] -translate-y-1/2 rounded-full bg-cyber-blue/10 blur-[90px] animate-pulse-slow" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 items-center">
          
          {/* Left: Bio Info */}
          <div className="lg:col-span-5 flex flex-col space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="flex flex-col space-y-2"
            >
              <h2 className="text-xs font-semibold uppercase tracking-widest text-cyber-cyan font-mono">
                / Who I Am
              </h2>
              <h3 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                <TextReveal text="Engineering the Future with AI" />
              </h3>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-lg text-zinc-300 leading-relaxed"
            >
              Enthusiastic AI & Machine Learning Engineer with experience in intelligent systems, machine learning, Flutter development, Firebase, and AI-powered applications. Passionate about emerging technologies and building impactful solutions.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-sm text-zinc-400 font-mono"
            >
              Located in Kerala, India — open to working with global teams on complex engineering challenges.
            </motion.p>
          </div>

          {/* Right: Interactive Focus Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {focusCards.map((card, idx) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glassmorphism-card p-6 rounded-2xl flex flex-col space-y-4 hover:border-cyber-cyan/30"
              >
                <div className="p-3 bg-white/5 border border-white/10 rounded-xl w-fit">
                  {card.icon}
                </div>
                <h4 className="text-lg font-bold text-white tracking-tight">{card.title}</h4>
                <p className="text-sm text-zinc-400 leading-relaxed">{card.description}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
