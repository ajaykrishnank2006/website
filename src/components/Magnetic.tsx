"use client";

import { useRef, useState, MouseEvent } from "react";
import { motion } from "framer-motion";

interface MagneticProps {
  children: React.ReactElement;
  range?: number; // Distance threshold to snap
  strength?: number; // Pull force
}

export default function Magnetic({ children, range = 60, strength = 0.35 }: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    
    // Calculate center of element
    const centerX = left + width / 2;
    const centerY = top + height / 2;

    // Calculate distance from center to mouse
    const distanceX = clientX - centerX;
    const distanceY = clientY - centerY;
    const distance = Math.hypot(distanceX, distanceY);

    if (distance < range) {
      // Pull element toward mouse
      setPosition({ x: distanceX * strength, y: distanceY * strength });
    } else {
      // Snap back to center
      setPosition({ x: 0, y: 0 });
    }
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className="inline-block"
    >
      {children}
    </motion.div>
  );
}
