"use client";

import React from "react";

interface ShinyTextProps {
  text: string;
  disabled?: boolean;
  speed?: number;
  className?: string;
  color?: string;
  shineColor?: string;
  spread?: number;
  direction?: "left" | "right";
  yoyo?: boolean;
  pauseOnHover?: boolean;
  delay?: number;
}

export default function ShinyText({
  text,
  disabled = false,
  speed = 2.5,
  className = "",
  color = "#ffffff",
  shineColor = "#f472b6",
  spread = 120,
  direction = "right",
  yoyo = false,
  pauseOnHover = false,
  delay = 0,
}: ShinyTextProps) {
  if (disabled) {
    return <span className={className} style={{ color }}>{text}</span>;
  }

  const animationIteration = yoyo ? "alternate" : "infinite";
  const animationName = direction === "right" ? "shiny-text-shimmer-right" : "shiny-text-shimmer-left";

  return (
    <span
      className={`inline-block relative bg-clip-text text-transparent bg-no-repeat transition-all ${
        pauseOnHover ? "hover:[animation-play-state:paused]" : ""
      } ${className}`}
      style={{
        backgroundImage: `linear-gradient(120deg, ${color} 0%, ${color} calc(50% - ${spread / 2}px), ${shineColor} 50%, ${color} calc(50% + ${spread / 2}px), ${color} 100%)`,
        backgroundSize: "200% 100%",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        animationName: animationName,
        animationDuration: `${speed}s`,
        animationTimingFunction: "linear",
        animationIterationCount: animationIteration,
        animationDelay: `${delay}s`,
      }}
    >
      {text}
      <style jsx global>{`
        @keyframes shiny-text-shimmer-right {
          0% {
            background-position: -100% 0;
          }
          100% {
            background-position: 100% 0;
          }
        }
        @keyframes shiny-text-shimmer-left {
          0% {
            background-position: 100% 0;
          }
          100% {
            background-position: -100% 0;
          }
        }
      `}</style>
    </span>
  );
}
