import React from "react";

export default function DataEngineeringIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <img
      src="/icon/data-engineering.png"
      alt="Data Engineering Logo"
      className={`object-contain ${className}`}
    />
  );
}
