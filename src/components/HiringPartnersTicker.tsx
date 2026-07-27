"use client";

import React from "react";
import { Building2 } from "lucide-react";

const mncLogos = [
  { name: "TCS", code: "TCS" },
  { name: "Infosys", code: "INFOSYS" },
  { name: "Wipro", code: "WIPRO" },
  { name: "Cognizant", code: "COGNIZANT" },
  { name: "Accenture", code: "ACCENTURE" },
  { name: "Capgemini", code: "CAPGEMINI" },
  { name: "Tech Mahindra", code: "TECHM" },
  { name: "IBM", code: "IBM" },
  { name: "LTI Mindtree", code: "LTIMINDTREE" },
  { name: "Persistent", code: "PERSISTENT" },
];

export default function HiringPartnersTicker() {
  return (
    <section className="py-8 bg-slate-50/80 dark:bg-slate-900/60 border-y border-slate-200/80 dark:border-slate-800 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-5 text-center">
        <p className="text-xs font-extrabold uppercase tracking-widest text-slate-500 dark:text-slate-400 flex items-center justify-center gap-2">
          <Building2 className="w-4 h-4 text-[#1E2B88] dark:text-purple-400" />
          Top MNCs & Hiring Partners
        </p>
      </div>

      {/* Infinite Logo-Only Scrolling Ticker */}
      <div className="relative w-full flex overflow-hidden">
        {/* Left & Right Gradient Blur Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-slate-50 dark:from-[#0B0F19] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-slate-50 dark:from-[#0B0F19] to-transparent z-10 pointer-events-none"></div>

        {/* Infinite Moving Row */}
        <div className="flex gap-10 whitespace-nowrap animate-infinite-scroll py-1 items-center">
          {[...mncLogos, ...mncLogos, ...mncLogos].map((partner, index) => (
            <div 
              key={index}
              className="inline-flex items-center justify-center bg-white dark:bg-slate-800/90 px-8 py-3.5 rounded-2xl border border-slate-200/90 dark:border-slate-700/80 shadow-xs hover:border-[#1E2B88] dark:hover:border-purple-500 transition-all shrink-0 cursor-pointer group"
            >
              <span className="text-base font-extrabold font-heading text-slate-800 dark:text-slate-200 group-hover:text-[#1E2B88] dark:group-hover:text-purple-300 transition-colors tracking-widest uppercase">
                {partner.code}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
