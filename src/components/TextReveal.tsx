"use client";

import { motion, Variants } from "framer-motion";

interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
}

export default function TextReveal({ text, className = "", delay = 0 }: TextRevealProps) {
  // Split the text into characters
  const letters = Array.from(text);

  // Animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: (customDelay: number) => ({
      opacity: 1,
      transition: {
        staggerChildren: 0.03,
        delayChildren: customDelay,
      },
    }),
  };

  const childVariants: Variants = {
    hidden: {
      opacity: 0,
      y: "1.2em",
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 100,
      },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 100,
      },
    },
  };

  return (
    <span className="inline-block overflow-hidden py-1">
      <motion.span
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        custom={delay}
        className={`inline-block flex-wrap ${className}`}
      >
        {letters.map((char, index) => (
          <motion.span
            key={index}
            variants={childVariants}
            className="inline-block whitespace-pre"
          >
            {char}
          </motion.span>
        ))}
      </motion.span>
    </span>
  );
}
