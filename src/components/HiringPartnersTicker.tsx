"use client";

import React from "react";
import { Building2 } from "lucide-react";
import LogoLoop, { LogoItem } from "./LogoLoop";

// Dedicated MNC partner logos styled as clean brand logo elements
const partnerLogos: LogoItem[] = [
  {
    node: (
      <div className="flex items-center gap-2 bg-white dark:bg-slate-800/90 px-7 py-3 rounded-2xl border border-slate-200/90 dark:border-slate-700/80 shadow-xs hover:border-[#1E2B88] dark:hover:border-purple-400 transition-all cursor-pointer group">
        <span className="text-sm font-extrabold font-heading text-slate-800 dark:text-slate-200 group-hover:text-[#1E2B88] dark:group-hover:text-purple-300 tracking-wider">
          TCS
        </span>
      </div>
    ),
    title: "TATA Consultancy Services",
  },
  {
    node: (
      <div className="flex items-center gap-2 bg-white dark:bg-slate-800/90 px-7 py-3 rounded-2xl border border-slate-200/90 dark:border-slate-700/80 shadow-xs hover:border-[#1E2B88] dark:hover:border-purple-400 transition-all cursor-pointer group">
        <span className="text-sm font-extrabold font-heading text-slate-800 dark:text-slate-200 group-hover:text-[#1E2B88] dark:group-hover:text-purple-300 tracking-wider">
          INFOSYS
        </span>
      </div>
    ),
    title: "Infosys",
  },
  {
    node: (
      <div className="flex items-center gap-2 bg-white dark:bg-slate-800/90 px-7 py-3 rounded-2xl border border-slate-200/90 dark:border-slate-700/80 shadow-xs hover:border-[#1E2B88] dark:hover:border-purple-400 transition-all cursor-pointer group">
        <span className="text-sm font-extrabold font-heading text-slate-800 dark:text-slate-200 group-hover:text-[#1E2B88] dark:group-hover:text-purple-300 tracking-wider">
          WIPRO
        </span>
      </div>
    ),
    title: "Wipro",
  },
  {
    node: (
      <div className="flex items-center gap-2 bg-white dark:bg-slate-800/90 px-7 py-3 rounded-2xl border border-slate-200/90 dark:border-slate-700/80 shadow-xs hover:border-[#1E2B88] dark:hover:border-purple-400 transition-all cursor-pointer group">
        <span className="text-sm font-extrabold font-heading text-slate-800 dark:text-slate-200 group-hover:text-[#1E2B88] dark:group-hover:text-purple-300 tracking-wider">
          COGNIZANT
        </span>
      </div>
    ),
    title: "Cognizant",
  },
  {
    node: (
      <div className="flex items-center gap-2 bg-white dark:bg-slate-800/90 px-7 py-3 rounded-2xl border border-slate-200/90 dark:border-slate-700/80 shadow-xs hover:border-[#1E2B88] dark:hover:border-purple-400 transition-all cursor-pointer group">
        <span className="text-sm font-extrabold font-heading text-slate-800 dark:text-slate-200 group-hover:text-[#1E2B88] dark:group-hover:text-purple-300 tracking-wider">
          ACCENTURE
        </span>
      </div>
    ),
    title: "Accenture",
  },
  {
    node: (
      <div className="flex items-center gap-2 bg-white dark:bg-slate-800/90 px-7 py-3 rounded-2xl border border-slate-200/90 dark:border-slate-700/80 shadow-xs hover:border-[#1E2B88] dark:hover:border-purple-400 transition-all cursor-pointer group">
        <span className="text-sm font-extrabold font-heading text-slate-800 dark:text-slate-200 group-hover:text-[#1E2B88] dark:group-hover:text-purple-300 tracking-wider">
          CAPGEMINI
        </span>
      </div>
    ),
    title: "Capgemini",
  },
  {
    node: (
      <div className="flex items-center gap-2 bg-white dark:bg-slate-800/90 px-7 py-3 rounded-2xl border border-slate-200/90 dark:border-slate-700/80 shadow-xs hover:border-[#1E2B88] dark:hover:border-purple-400 transition-all cursor-pointer group">
        <span className="text-sm font-extrabold font-heading text-slate-800 dark:text-slate-200 group-hover:text-[#1E2B88] dark:group-hover:text-purple-300 tracking-wider">
          TECH MAHINDRA
        </span>
      </div>
    ),
    title: "Tech Mahindra",
  },
  {
    node: (
      <div className="flex items-center gap-2 bg-white dark:bg-slate-800/90 px-7 py-3 rounded-2xl border border-slate-200/90 dark:border-slate-700/80 shadow-xs hover:border-[#1E2B88] dark:hover:border-purple-400 transition-all cursor-pointer group">
        <span className="text-sm font-extrabold font-heading text-slate-800 dark:text-slate-200 group-hover:text-[#1E2B88] dark:group-hover:text-purple-300 tracking-wider">
          IBM
        </span>
      </div>
    ),
    title: "IBM",
  },
  {
    node: (
      <div className="flex items-center gap-2 bg-white dark:bg-slate-800/90 px-7 py-3 rounded-2xl border border-slate-200/90 dark:border-slate-700/80 shadow-xs hover:border-[#1E2B88] dark:hover:border-purple-400 transition-all cursor-pointer group">
        <span className="text-sm font-extrabold font-heading text-slate-800 dark:text-slate-200 group-hover:text-[#1E2B88] dark:group-hover:text-purple-300 tracking-wider">
          LTIMINDTREE
        </span>
      </div>
    ),
    title: "LTIMindtree",
  },
  {
    node: (
      <div className="flex items-center gap-2 bg-white dark:bg-slate-800/90 px-7 py-3 rounded-2xl border border-slate-200/90 dark:border-slate-700/80 shadow-xs hover:border-[#1E2B88] dark:hover:border-purple-400 transition-all cursor-pointer group">
        <span className="text-sm font-extrabold font-heading text-slate-800 dark:text-slate-200 group-hover:text-[#1E2B88] dark:group-hover:text-purple-300 tracking-wider">
          PERSISTENT
        </span>
      </div>
    ),
    title: "Persistent Systems",
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

      {/* React Bits LogoLoop Component */}
      <div className="w-full relative">
        <LogoLoop
          logos={partnerLogos}
          speed={60}
          direction="left"
          logoHeight={48}
          gap={32}
          pauseOnHover={true}
          scaleOnHover={true}
          fadeOut={true}
          ariaLabel="JVM Institute Hiring Partner Logos"
        />
      </div>

    </section>
  );
}
