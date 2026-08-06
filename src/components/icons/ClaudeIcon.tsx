import React from "react";

export default function ClaudeIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <img
      src="/icon/claude-colour.png"
      alt="Claude AI Logo"
      className={`object-contain ${className}`}
    />
  );
}

