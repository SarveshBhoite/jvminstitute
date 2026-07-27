"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Gift, 
  FileText, 
  GraduationCap, 
  ArrowRight, 
  Share2, 
  CheckCircle2,
  LockOpen,
  Sparkles,
  TrendingUp,
  Zap
} from "lucide-react";

export default function NewFeaturesSpotlight() {
  const [flippedCard, setFlippedCard] = useState<number | null>(null);

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-slate-100/90 via-purple-50/40 to-slate-100/90 dark:from-[#0B0F19] dark:via-[#131B2E] dark:to-[#0B0F19] relative overflow-hidden transition-colors duration-500 border-y border-purple-100/60 dark:border-purple-900/30">
      
      {/* Background Decorative Ambient Glows */}
      <div className="ambient-glow w-96 h-96 bg-[#1E2B88] dark:bg-[#4F46E5] top-0 left-[-10%] opacity-15 pointer-events-none"></div>
      <div className="ambient-glow w-96 h-96 bg-[#E01E6A] dark:bg-[#EC4899] bottom-0 right-[-10%] opacity-15 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 dark:bg-slate-800/90 border border-purple-200 dark:border-purple-800/80 text-xs font-extrabold text-[#7C248C] dark:text-purple-300 uppercase tracking-wider shadow-xs">
            <Gift className="w-4 h-4 text-[#E01E6A] dark:text-pink-400" /> Student & Alumni Perks
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading tracking-tight text-slate-900 dark:text-white">
            More Than Just Training — <span className="jvm-gradient-text">Unlock Complete Growth</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 font-medium">
            Hover over any perk card to flip and reveal full feature details, payout rewards, & instant access!
          </p>
        </div>

        {/* 3D Flip Grid Showcase */}
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Card 1: Refer & Earn (Amber / Yellow Theme Flip) */}
          <div 
            className="group [perspective:1000px] h-[480px] cursor-pointer"
            onMouseEnter={() => setFlippedCard(1)}
            onMouseLeave={() => setFlippedCard(null)}
          >
            <div className={`relative w-full h-full rounded-3xl transition-transform duration-700 [transform-style:preserve-3d] ${flippedCard === 1 ? '[transform:rotateY(180deg)]' : ''}`}>
              
              {/* FRONT FACE */}
              <div className="absolute inset-0 w-full h-full bg-white/95 dark:bg-slate-900/95 border border-slate-200/90 dark:border-slate-800 rounded-3xl p-8 backdrop-blur-xl flex flex-col justify-between shadow-md group-hover:shadow-2xl group-hover:border-amber-400/80 transition-all [backface-visibility:hidden]">
                <div className="space-y-6">
                  <div className="w-14 h-14 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900/60 flex items-center justify-center text-amber-600 dark:text-amber-400">
                    <Gift className="w-7 h-7" />
                  </div>

                  <div>
                    <span className="text-xs font-extrabold uppercase tracking-wider text-amber-700 dark:text-amber-300 bg-amber-100/70 dark:bg-amber-950/70 border border-amber-200 dark:border-amber-900/60 px-3 py-1 rounded-full">
                      Earn Up to ₹2,000 / Referral
                    </span>
                    <h3 className="text-2xl font-bold font-heading text-slate-900 dark:text-white mt-3">
                      Refer & Earn Program
                    </h3>
                  </div>

                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    Invite your friends or colleagues to JVM Institute. When they enroll in any course, you earn cash rewards or direct course fee credits instantly!
                  </p>

                  <ul className="space-y-2.5 text-xs font-semibold text-slate-700 dark:text-slate-300 pt-2 border-t border-slate-100 dark:border-slate-800">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>Unique referral link tracking dashboard</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>Instant UPI or Bank transfer payout</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-4 flex items-center justify-between text-xs font-bold text-amber-600 dark:text-amber-400">
                  <span>Hover to flip for details</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>

              {/* BACK FACE (Yellow / Amber Theme Reveal) */}
              <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-amber-400 via-amber-500 to-amber-600 text-slate-950 rounded-3xl p-8 flex flex-col justify-between shadow-2xl [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <div className="space-y-5">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-slate-950/10 backdrop-blur-md flex items-center justify-center text-slate-950 border border-slate-950/20">
                      <Zap className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-extrabold uppercase tracking-wider bg-slate-950/20 text-slate-950 px-3 py-1 rounded-full">
                      Instant Payout
                    </span>
                  </div>

                  <h3 className="text-2xl font-extrabold font-heading text-slate-950">
                    Referral Perks Breakdown
                  </h3>

                  <p className="text-xs sm:text-sm font-semibold text-slate-900 leading-relaxed">
                    Zero limits on how much you can earn! Track your referred candidates live in your student portal.
                  </p>

                  <div className="space-y-2.5 pt-2 border-t border-slate-950/20">
                    <div className="flex items-center justify-between text-xs font-extrabold">
                      <span>Data Engineering Program:</span>
                      <span className="bg-slate-950 text-amber-400 px-2.5 py-0.5 rounded-md">₹2,000 Cash</span>
                    </div>
                    <div className="flex items-center justify-between text-xs font-extrabold">
                      <span>Python & SQL Course:</span>
                      <span className="bg-slate-950 text-amber-400 px-2.5 py-0.5 rounded-md">₹1,000 Cash</span>
                    </div>
                    <div className="flex items-center justify-between text-xs font-extrabold">
                      <span>Payout Mode:</span>
                      <span>UPI / GPay / Direct Deposit</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4">
                  <Link 
                    href="/refer-and-earn"
                    className="w-full bg-slate-950 hover:bg-slate-900 text-white font-extrabold py-3.5 px-4 rounded-2xl text-sm transition-all flex items-center justify-center gap-2 shadow-lg"
                  >
                    <Share2 className="w-4 h-4 text-amber-400" /> Start Referring Friends
                  </Link>
                </div>
              </div>

            </div>
          </div>

          {/* Card 2: Study Material & PDF Store (Purple Theme Flip) */}
          <div 
            className="group [perspective:1000px] h-[480px] cursor-pointer"
            onMouseEnter={() => setFlippedCard(2)}
            onMouseLeave={() => setFlippedCard(null)}
          >
            <div className={`relative w-full h-full rounded-3xl transition-transform duration-700 [transform-style:preserve-3d] ${flippedCard === 2 ? '[transform:rotateY(180deg)]' : ''}`}>
              
              {/* FRONT FACE */}
              <div className="absolute inset-0 w-full h-full bg-white/95 dark:bg-slate-900/95 border border-slate-200/90 dark:border-slate-800 rounded-3xl p-8 backdrop-blur-xl flex flex-col justify-between shadow-md group-hover:shadow-2xl group-hover:border-purple-400/80 transition-all [backface-visibility:hidden]">
                <div className="space-y-6">
                  <div className="w-14 h-14 rounded-2xl bg-purple-50 dark:bg-purple-950/40 border border-purple-200 dark:border-purple-900/60 flex items-center justify-center text-[#7C248C] dark:text-purple-300">
                    <FileText className="w-7 h-7" />
                  </div>

                  <div>
                    <span className="text-xs font-extrabold uppercase tracking-wider text-[#7C248C] dark:text-purple-300 bg-purple-100/70 dark:bg-purple-950/70 border border-purple-200 dark:border-purple-900/60 px-3 py-1 rounded-full">
                      Free & Premium PDFs
                    </span>
                    <h3 className="text-2xl font-bold font-heading text-slate-900 dark:text-white mt-3">
                      Study Material & Notes Store
                    </h3>
                  </div>

                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    Access PySpark cheat sheets, SQL scenario question banks, Databricks architecture diagrams, and Python interview guides.
                  </p>

                  <ul className="space-y-2.5 text-xs font-semibold text-slate-700 dark:text-slate-300 pt-2 border-t border-slate-100 dark:border-slate-800">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>Instant PDF downloads & sample preview</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>Verified MNC interview question answers</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-4 flex items-center justify-between text-xs font-bold text-purple-600 dark:text-purple-300">
                  <span>Hover to flip for details</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>

              {/* BACK FACE (Purple Theme Reveal) */}
              <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-[#7C248C] via-purple-700 to-[#1E2B88] text-white rounded-3xl p-8 flex flex-col justify-between shadow-2xl [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <div className="space-y-5">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center text-white border border-white/20">
                      <FileText className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-extrabold uppercase tracking-wider bg-white/20 text-white px-3 py-1 rounded-full">
                      Free & Paid Downloads
                    </span>
                  </div>

                  <h3 className="text-2xl font-extrabold font-heading text-white">
                    PDF Library Highlights
                  </h3>

                  <p className="text-xs sm:text-sm font-medium text-purple-100 leading-relaxed">
                    Curated by senior Data Engineers working in MNCs. High-yield revision kits before technical interviews!
                  </p>

                  <div className="space-y-2.5 pt-2 border-t border-white/20">
                    <div className="flex items-center justify-between text-xs font-extrabold">
                      <span>PySpark Architecture Guide:</span>
                      <span className="bg-emerald-500 text-white px-2.5 py-0.5 rounded-md">FREE</span>
                    </div>
                    <div className="flex items-center justify-between text-xs font-extrabold">
                      <span>50 SQL Tricky Query Bank:</span>
                      <span className="bg-emerald-500 text-white px-2.5 py-0.5 rounded-md">FREE</span>
                    </div>
                    <div className="flex items-center justify-between text-xs font-extrabold">
                      <span>Databricks & AWS Glue Kit:</span>
                      <span className="bg-amber-400 text-slate-950 px-2.5 py-0.5 rounded-md">₹199 Only</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4">
                  <Link 
                    href="/study-material"
                    className="w-full bg-white hover:bg-slate-100 text-purple-950 font-extrabold py-3.5 px-4 rounded-2xl text-sm transition-all flex items-center justify-center gap-2 shadow-lg"
                  >
                    <LockOpen className="w-4 h-4 text-purple-700" /> Explore Notes & PDFs
                  </Link>
                </div>
              </div>

            </div>
          </div>

          {/* Card 3: Placements Wall (Royal Blue / Dark Theme Flip) */}
          <div 
            className="group [perspective:1000px] h-[480px] cursor-pointer"
            onMouseEnter={() => setFlippedCard(3)}
            onMouseLeave={() => setFlippedCard(null)}
          >
            <div className={`relative w-full h-full rounded-3xl transition-transform duration-700 [transform-style:preserve-3d] ${flippedCard === 3 ? '[transform:rotateY(180deg)]' : ''}`}>
              
              {/* FRONT FACE */}
              <div className="absolute inset-0 w-full h-full bg-white/95 dark:bg-slate-900/95 border border-slate-200/90 dark:border-slate-800 rounded-3xl p-8 backdrop-blur-xl flex flex-col justify-between shadow-md group-hover:shadow-2xl group-hover:border-emerald-400/80 transition-all [backface-visibility:hidden]">
                <div className="space-y-6">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-900/60 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                    <GraduationCap className="w-7 h-7" />
                  </div>

                  <div>
                    <span className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 dark:text-emerald-300 bg-emerald-100/70 dark:bg-emerald-950/70 border border-emerald-200 dark:border-emerald-900/60 px-3 py-1 rounded-full">
                      100% Placement Assistance
                    </span>
                    <h3 className="text-2xl font-bold font-heading text-slate-900 dark:text-white mt-3">
                      Placement Wall of Fame
                    </h3>
                  </div>

                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    Inspect authentic student career transition stories, salary packages, and verified hiring partner companies across Pune & PAN India.
                  </p>

                  <ul className="space-y-2.5 text-xs font-semibold text-slate-700 dark:text-slate-300 pt-2 border-t border-slate-100 dark:border-slate-800">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>Dedicated corporate placement team</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>Non-IT to IT salary hikes up to 150%</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-4 flex items-center justify-between text-xs font-bold text-emerald-600 dark:text-emerald-400">
                  <span>Hover to flip for details</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>

              {/* BACK FACE (Emerald / Royal Blue Theme Reveal) */}
              <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-emerald-600 via-teal-700 to-slate-900 text-white rounded-3xl p-8 flex flex-col justify-between shadow-2xl [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <div className="space-y-5">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center text-white border border-white/20">
                      <TrendingUp className="w-6 h-6 text-emerald-300" />
                    </div>
                    <span className="text-xs font-extrabold uppercase tracking-wider bg-emerald-400/20 text-emerald-200 px-3 py-1 rounded-full border border-emerald-400/30">
                      250+ Hiring Partners
                    </span>
                  </div>

                  <h3 className="text-2xl font-extrabold font-heading text-white">
                    Placement Highlights
                  </h3>

                  <p className="text-xs sm:text-sm font-medium text-emerald-100 leading-relaxed">
                    1:1 Mock technical interviews, resume building, and direct interview call scheduling with top MNCs!
                  </p>

                  <div className="space-y-2.5 pt-2 border-t border-white/20">
                    <div className="flex items-center justify-between text-xs font-extrabold">
                      <span>Highest Package:</span>
                      <span className="bg-emerald-400 text-slate-950 px-2.5 py-0.5 rounded-md">12.0 LPA</span>
                    </div>
                    <div className="flex items-center justify-between text-xs font-extrabold">
                      <span>Average Package:</span>
                      <span className="bg-emerald-400 text-slate-950 px-2.5 py-0.5 rounded-md">6.8 LPA</span>
                    </div>
                    <div className="flex items-center justify-between text-xs font-extrabold">
                      <span>Non-IT Transition Rate:</span>
                      <span className="text-emerald-200">88% Success</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4">
                  <Link 
                    href="/placements"
                    className="w-full bg-white hover:bg-slate-100 text-slate-950 font-extrabold py-3.5 px-4 rounded-2xl text-sm transition-all flex items-center justify-center gap-2 shadow-lg"
                  >
                    View Placements Record <ArrowRight className="w-4 h-4 text-emerald-600" />
                  </Link>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
