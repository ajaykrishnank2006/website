"use client";

import { useRef, useState, MouseEvent } from "react";

interface SpotlightCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
}

export default function SpotlightCard({
  children,
  className = "",
  glowColor = "rgba(139, 92, 246, 0.15)", // Default purple glow
}: SpotlightCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setCoords({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className={`group relative overflow-hidden rounded-3xl border border-white/5 bg-zinc-950/40 p-1 backdrop-blur-md transition-all duration-300 hover:border-white/10 ${className}`}
    >
      {/* Background dynamic spotlight glow */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: `radial-gradient(400px circle at ${coords.x}px ${coords.y}px, ${glowColor}, transparent 80%)`,
        }}
      />

      {/* Border dynamic spotlight glow (requires border-clip container) */}
      <div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 z-10"
        style={{
          background: `radial-gradient(200px circle at ${coords.x}px ${coords.y}px, rgba(255, 255, 255, 0.12), transparent 80%)`,
        }}
      />

      {/* Actual card content */}
      <div className="relative z-20 h-full w-full rounded-[22px] bg-zinc-950/80 p-6">
        {children}
      </div>
    </div>
  );
}
