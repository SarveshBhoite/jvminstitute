"use client";

import React from "react";
import Link from "next/link";
import { 
  Gift, 
  FileText, 
  GraduationCap, 
  ArrowRight, 
  Share2, 
  CheckCircle2,
  LockOpen
} from "lucide-react";

export default function NewFeaturesSpotlight() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white relative overflow-hidden">
      {/* Background Decorative Glow */}
      <div className="ambient-glow w-96 h-96 bg-[#7C248C] top-[-10%] right-[-5%] opacity-20"></div>
      <div className="ambient-glow w-96 h-96 bg-[#E01E6A] bottom-[-10%] left-[-5%] opacity-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-extrabold text-amber-300 uppercase tracking-wider">
            <Gift className="w-4 h-4 text-amber-300" /> Student & Alumni Perks
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading tracking-tight text-white">
            More Than Just Training — <span className="jvm-gradient-text">Unlock Complete Growth</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300">
            Explore our new features designed to help you earn while learning, access premium study notes, and get placed fast.
          </p>
        </div>

        {/* 3 Grid Showcase */}
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Card 1: Refer & Earn */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl flex flex-col justify-between hover:border-amber-400/50 transition-all duration-300 hover:-translate-y-1">
            <div className="space-y-6">
              <div className="w-14 h-14 rounded-2xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400">
                <Gift className="w-7 h-7" />
              </div>

              <div>
                <span className="text-xs font-extrabold uppercase tracking-wider text-amber-400 bg-amber-400/10 px-2.5 py-1 rounded-md">
                  Earn Up to ₹2,000 / Referral
                </span>
                <h3 className="text-2xl font-bold font-heading text-white mt-3">
                  Refer & Earn Program
                </h3>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed">
                Invite your friends or colleagues to JVM Institute. When they enroll in any course, you earn cash rewards or direct course fee credits instantly!
              </p>

              <ul className="space-y-2 text-xs font-semibold text-slate-200">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Unique referral link tracking dashboard</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Instant UPI or Bank transfer payout</span>
                </li>
              </ul>
            </div>

            <div className="pt-8">
              <Link 
                href="/refer-and-earn"
                className="w-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold py-3.5 px-4 rounded-2xl text-sm transition-all flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20"
              >
                <Share2 className="w-4 h-4" /> Start Referring Friends
              </Link>
            </div>
          </div>

          {/* Card 2: Study Material & PDF Store */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl flex flex-col justify-between hover:border-purple-400/50 transition-all duration-300 hover:-translate-y-1">
            <div className="space-y-6">
              <div className="w-14 h-14 rounded-2xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center text-purple-400">
                <FileText className="w-7 h-7" />
              </div>

              <div>
                <span className="text-xs font-extrabold uppercase tracking-wider text-purple-400 bg-purple-400/10 px-2.5 py-1 rounded-md">
                  Free & Premium PDFs
                </span>
                <h3 className="text-2xl font-bold font-heading text-white mt-3">
                  Study Material & Notes Store
                </h3>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed">
                Access PySpark cheat sheets, SQL scenario question banks, Databricks architecture diagrams, and Python interview guides.
              </p>

              <ul className="space-y-2 text-xs font-semibold text-slate-200">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Instant PDF downloads & sample preview</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Verified MNC interview question answers</span>
                </li>
              </ul>
            </div>

            <div className="pt-8">
              <Link 
                href="/study-material"
                className="w-full jvm-gradient-bg text-white font-extrabold py-3.5 px-4 rounded-2xl text-sm transition-all flex items-center justify-center gap-2 shadow-lg shadow-purple-900/40"
              >
                <LockOpen className="w-4 h-4" /> Explore Notes & PDFs
              </Link>
            </div>
          </div>

          {/* Card 3: Placements & Hiring Hall of Fame */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl flex flex-col justify-between hover:border-emerald-400/50 transition-all duration-300 hover:-translate-y-1">
            <div className="space-y-6">
              <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <GraduationCap className="w-7 h-7" />
              </div>

              <div>
                <span className="text-xs font-extrabold uppercase tracking-wider text-emerald-400 bg-emerald-400/10 px-2.5 py-1 rounded-md">
                  100% Placement Assistance
                </span>
                <h3 className="text-2xl font-bold font-heading text-white mt-3">
                  Placement Wall of Fame
                </h3>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed">
                Inspect authentic student career transition stories, salary packages, and verified hiring partner companies across Pune & PAN India.
              </p>

              <ul className="space-y-2 text-xs font-semibold text-slate-200">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Dedicated corporate placement team</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Non-IT to IT salary hikes up to 150%</span>
                </li>
              </ul>
            </div>

            <div className="pt-8">
              <Link 
                href="/placements"
                className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold py-3.5 px-4 rounded-2xl text-sm transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-900/30"
              >
                View Placements Record <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
