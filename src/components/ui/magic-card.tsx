"use client";

import React, { useCallback } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";

export interface MagicCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  className?: string;
  gradientSize?: number;
  gradientColor?: string;
  gradientOpacity?: number;
  glowFrom?: string;
  glowTo?: string;
}

export function MagicCard({
  children,
  className = "",
  gradientSize = 260,
  glowFrom = "#7C3AED",
  glowTo = "#E01E6A",
  ...props
}: MagicCardProps) {
  const mouseX = useMotionValue(-gradientSize);
  const mouseY = useMotionValue(-gradientSize);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const { left, top } = e.currentTarget.getBoundingClientRect();
      mouseX.set(e.clientX - left);
      mouseY.set(e.clientY - top);
    },
    [mouseX, mouseY]
  );

  const handleMouseLeave = useCallback(() => {
    mouseX.set(-gradientSize);
    mouseY.set(-gradientSize);
  }, [mouseX, mouseY, gradientSize]);

  const roundedClass = className.includes("rounded-") ? "" : "rounded-3xl";

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`group relative ${roundedClass} border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 ${className}`}
      {...props}
    >
      {/* Radial Mouse Follower Glow Layer */}
      <motion.div
        className={`pointer-events-none absolute -inset-px ${roundedClass} opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-10`}
        style={{
          background: useMotionTemplate`
            radial-gradient(${gradientSize}px circle at ${mouseX}px ${mouseY}px, ${glowFrom}30, ${glowTo}20, transparent 80%)
          `,
        }}
      />

      {/* Subtle Hover Border Highlight */}
      <motion.div
        className={`pointer-events-none absolute -inset-px ${roundedClass} opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-10 border-2 border-purple-500/40 dark:border-purple-400/40`}
        style={{
          maskImage: useMotionTemplate`
            radial-gradient(${gradientSize}px circle at ${mouseX}px ${mouseY}px, black, transparent 80%)
          `,
          WebkitMaskImage: useMotionTemplate`
            radial-gradient(${gradientSize}px circle at ${mouseX}px ${mouseY}px, black, transparent 80%)
          `,
        }}
      />

      {/* Card Inner Content */}
      <div className="relative z-20 w-full h-full">
        {children}
      </div>
    </div>
  );
}

export default MagicCard;
