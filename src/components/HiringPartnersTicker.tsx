"use client";

import React from "react";
import Image from "next/image";
import { Building2 } from "lucide-react";
import LogoLoop, { LogoItem } from "./LogoLoop";

const ReactLogoNode = () => (
  <div className="flex items-center justify-center p-2 filter drop-shadow-md hover:scale-125 transition-transform cursor-pointer">
    <svg className="w-14 h-14 sm:w-16 sm:h-16" viewBox="-11.5 -10.23174 23 20.46348" fill="none">
      <circle cx="0" cy="0" r="2.05" fill="#00D8FF" />
      <g stroke="#00D8FF" strokeWidth="1" fill="none">
        <ellipse rx="11" ry="4.2" />
        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
      </g>
    </svg>
  </div>
);

const partnerLogos: LogoItem[] = Array.from({ length: 12 }).map((_, idx) => ({
  node: <ReactLogoNode key={idx} />,
  title: `Hiring Partner ${idx + 1}`,
}));

export default function HiringPartnersTicker() {
  return (
    <section className="py-8 bg-slate-50/80 dark:bg-slate-900/60 border-y border-slate-200/80 dark:border-slate-800 overflow-hidden relative">
      
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-5 text-center">
        <p className="text-xs font-extrabold uppercase tracking-widest text-slate-500 dark:text-slate-400 flex items-center justify-center gap-2">
          <Building2 className="w-4 h-4 text-[#1E2B88] dark:text-purple-400" />
          Top MNCs & Hiring Partners
        </p>
      </div>

      {/* React Bits LogoLoop Component with Larger Pure Image Logos */}
      <div className="w-full relative">
        <LogoLoop
          logos={partnerLogos}
          speed={60}
          direction="left"
          logoHeight={76}
          gap={52}
          pauseOnHover={true}
          scaleOnHover={true}
          fadeOut={true}
          ariaLabel="JVM Institute Hiring Partner Logos"
        />
      </div>

    </section>
  );
}
