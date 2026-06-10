"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import ParticlesBg from "@/components/ParticlesBg";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="relative flex flex-col min-h-screen bg-cyber-dark text-foreground overflow-x-hidden">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyber-cyan via-cyber-blue to-cyber-purple z-50"
        style={{ scaleX, transformOrigin: "0%" }}
      />

      {/* Background Cyber Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none z-0" />
      
      {/* Dynamic Interactive Particles */}
      <ParticlesBg />

      {/* Navigation Header */}
      <Navbar />

      <main className="relative z-10 flex-grow flex flex-col">
        {/* Sections */}
        <Hero />
        
        <div className="h-px bg-gradient-to-r from-transparent via-white/5 to-transparent my-4" />
        <About />
        
        <div className="h-px bg-gradient-to-r from-transparent via-white/5 to-transparent my-4" />
        <Experience />
        
        <div className="h-px bg-gradient-to-r from-transparent via-white/5 to-transparent my-4" />
        <Projects />
        
        <div className="h-px bg-gradient-to-r from-transparent via-white/5 to-transparent my-4" />
        <Skills />
        
        <div className="h-px bg-gradient-to-r from-transparent via-white/5 to-transparent my-4" />
        <Education />
        
        <div className="h-px bg-gradient-to-r from-transparent via-white/5 to-transparent my-4" />
        <Contact />
      </main>
    </div>
  );
}
