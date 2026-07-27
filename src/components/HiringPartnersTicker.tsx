"use client";

import React from "react";
import Image from "next/image";
import { Building2 } from "lucide-react";
import LogoLoop, { LogoItem } from "./LogoLoop";

// Seamless transparent image logos without text or borders (Enlarged Size)
const partnerLogos: LogoItem[] = [
  {
    node: (
      <div className="flex items-center justify-center p-1 filter drop-shadow-md hover:scale-125 transition-transform cursor-pointer">
        <Image src="/react.png" alt="Hiring Partner 1" width={76} height={76} className="object-contain" />
      </div>
    ),
    title: "Partner 1",
  },
  {
    node: (
      <div className="flex items-center justify-center p-1 filter drop-shadow-md hover:scale-125 transition-transform cursor-pointer">
        <Image src="/react.png" alt="Hiring Partner 2" width={76} height={76} className="object-contain" />
      </div>
    ),
    title: "Partner 2",
  },
  {
    node: (
      <div className="flex items-center justify-center p-1 filter drop-shadow-md hover:scale-125 transition-transform cursor-pointer">
        <Image src="/react.png" alt="Hiring Partner 3" width={76} height={76} className="object-contain" />
      </div>
    ),
    title: "Partner 3",
  },
  {
    node: (
      <div className="flex items-center justify-center p-1 filter drop-shadow-md hover:scale-125 transition-transform cursor-pointer">
        <Image src="/react.png" alt="Hiring Partner 4" width={76} height={76} className="object-contain" />
      </div>
    ),
    title: "Partner 4",
  },
  {
    node: (
      <div className="flex items-center justify-center p-1 filter drop-shadow-md hover:scale-125 transition-transform cursor-pointer">
        <Image src="/react.png" alt="Hiring Partner 5" width={76} height={76} className="object-contain" />
      </div>
    ),
    title: "Partner 5",
  },
  {
    node: (
      <div className="flex items-center justify-center p-1 filter drop-shadow-md hover:scale-125 transition-transform cursor-pointer">
        <Image src="/react.png" alt="Hiring Partner 6" width={76} height={76} className="object-contain" />
      </div>
    ),
    title: "Partner 6",
  },
  {
    node: (
      <div className="flex items-center justify-center p-1 filter drop-shadow-md hover:scale-125 transition-transform cursor-pointer">
        <Image src="/react.png" alt="Hiring Partner 7" width={76} height={76} className="object-contain" />
      </div>
    ),
    title: "Partner 7",
  },
  {
    node: (
      <div className="flex items-center justify-center p-1 filter drop-shadow-md hover:scale-125 transition-transform cursor-pointer">
        <Image src="/react.png" alt="Hiring Partner 8" width={76} height={76} className="object-contain" />
      </div>
    ),
    title: "Partner 8",
  },
];

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
