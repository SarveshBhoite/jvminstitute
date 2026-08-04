"use client";

import React from "react";

export default function PlacementRecordStatsBar() {
  return (
    <section className="relative overflow-hidden bg-white dark:bg-[#0F172A] border-y border-slate-200/80 dark:border-slate-800 py-5 sm:py-7 shadow-xs z-10">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 items-center justify-between gap-y-6 gap-x-4">
          
          {/* Stat 1 — Students Placed */}
          <div className="flex flex-col items-center justify-center text-center group px-2 sm:px-4 border-r border-slate-100 dark:border-slate-800/80 last:border-r-0 md:last:border-r-0">
            <span className="text-2xl sm:text-4xl md:text-4xl font-black text-slate-900 dark:text-white tracking-tight leading-none">
              2,000<span className="jvm-gradient-text">+</span>
            </span>
            <span className="text-[10px] sm:text-xs font-extrabold uppercase tracking-widest text-slate-500 dark:text-slate-400 mt-1.5">
              Students Placed
            </span>
          </div>

          {/* Stat 2 — Hiring Companies */}
          <div className="flex flex-col items-center justify-center text-center group px-2 sm:px-4 md:border-r border-slate-100 dark:border-slate-800/80">
            <span className="text-2xl sm:text-4xl md:text-4xl font-black text-slate-900 dark:text-white tracking-tight leading-none">
              250<span className="jvm-gradient-text">+</span>
            </span>
            <span className="text-[10px] sm:text-xs font-extrabold uppercase tracking-widest text-slate-500 dark:text-slate-400 mt-1.5">
              Hiring Companies
            </span>
          </div>

          {/* Stat 3 — Placement Support */}
          <div className="flex flex-col items-center justify-center text-center group px-2 sm:px-4 border-r border-slate-100 dark:border-slate-800/80">
            <span className="text-2xl sm:text-4xl md:text-4xl font-black text-slate-900 dark:text-white tracking-tight leading-none">
              100<span className="jvm-gradient-text">%</span>
            </span>
            <span className="text-[10px] sm:text-xs font-extrabold uppercase tracking-widest text-slate-500 dark:text-slate-400 mt-1.5">
              Placement Support
            </span>
          </div>

          {/* Stat 4 — Avg Package Range */}
          <div className="flex flex-col items-center justify-center text-center group px-2 sm:px-4">
            <span className="text-2xl sm:text-4xl md:text-4xl font-black tracking-tight leading-none jvm-gradient-text">
              ₹10–40 LPA
            </span>
            <span className="text-[10px] sm:text-xs font-extrabold uppercase tracking-widest text-slate-500 dark:text-slate-400 mt-1.5">
              Avg Package Range
            </span>
          </div>

        </div>
      </div>
    </section>
  );
}
