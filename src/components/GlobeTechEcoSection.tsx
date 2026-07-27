"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Globe, 
  Database, 
  Code2, 
  Cloud, 
  Layers, 
  Cpu, 
  Server, 
  CheckCircle,
  ArrowRight
} from "lucide-react";

// 6 Orbiting nodes using transparent /react.png image
const techNodes = [
  { id: 1, name: "React", logoImg: "/react.png", angle: 0 },
  { id: 2, name: "React", logoImg: "/react.png", angle: 60 },
  { id: 3, name: "React", logoImg: "/react.png", angle: 120 },
  { id: 4, name: "React", logoImg: "/react.png", angle: 180 },
  { id: 5, name: "React", logoImg: "/react.png", angle: 240 },
  { id: 6, name: "React", logoImg: "/react.png", angle: 300 },
];

const techList = [
  { name: "PySpark", role: "Distributed Processing", icon: Cpu },
  { name: "Databricks", role: "Lakehouse Platform", icon: Cloud },
  { name: "Snowflake", role: "Data Warehousing", icon: Server },
  { name: "AWS Glue", role: "Cloud ETL Service", icon: Layers },
  { name: "Apache Airflow", role: "Pipeline Orchestration", icon: Database },
  { name: "Python & SQL", role: "Core Data Language", icon: Code2 },
];

export default function GlobeTechEcoSection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white via-slate-50 to-white dark:from-[#0B0F19] dark:via-[#0F172A] dark:to-[#0B0F19] relative overflow-hidden transition-colors duration-300">
      
      {/* Decorative Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-50 dark:bg-purple-950/60 border border-purple-100 dark:border-purple-900/60 text-xs font-extrabold text-[#7C248C] dark:text-purple-300 uppercase tracking-wider">
            <Globe className="w-4 h-4 text-[#E01E6A] dark:text-pink-400" /> Global Tech Ecosystem
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-slate-900 dark:text-white tracking-tight">
            Learn Technologies Demanded Across <span className="jvm-gradient-text">Global Data Engineering</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            JVM Institute curriculum integrates real cloud infrastructure, streaming tools, and big data engines used by Fortune 500 tech teams.
          </p>
        </div>

        {/* 2-Column Layout: Larger Rotating Globe & Matching Height Tech Stack Card */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Left Column: CONTINUOUSLY ROTATING ORBITING LOGOS (NO CIRCULAR/DOTTED BORDER LINES) */}
          <div className="lg:col-span-6 relative flex items-center justify-center min-h-[520px] lg:min-h-full py-6">
            
            {/* Ambient Center Glow */}
            <div className="absolute w-96 h-96 bg-purple-500/20 dark:bg-purple-600/20 rounded-full blur-3xl pointer-events-none"></div>

            {/* CONTINUOUSLY ROTATING EXPANDED CONTAINER */}
            <div className="relative w-[380px] h-[380px] sm:w-[480px] sm:h-[480px] flex items-center justify-center">
              
              {/* CONTINUOUSLY ROTATING ORBITING LOGOS CONTAINER (Seamlessly orbiting without any lines or borders) */}
              <div className="absolute inset-0 animate-[spin_22s_linear_infinite]">
                {techNodes.map((node) => {
                  const radius = 215; // px
                  const x = radius * Math.cos((node.angle * Math.PI) / 180);
                  const y = radius * Math.sin((node.angle * Math.PI) / 180);

                  return (
                    <div
                      key={node.id}
                      style={{
                        position: "absolute",
                        left: "50%",
                        top: "50%",
                        transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                      }}
                    >
                      {/* Counter-rotate logo so it stays upright while orbiting continuously */}
                      <div className="animate-[spin_22s_linear_infinite_reverse]">
                        <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center filter drop-shadow-xl hover:scale-125 transition-transform cursor-pointer">
                          <Image 
                            src={node.logoImg}
                            alt={node.name}
                            width={64}
                            height={64}
                            className="object-contain"
                          />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Central Globe Core with Large JVM Institute Logo */}
              <div className="relative w-44 h-44 sm:w-56 sm:h-56 rounded-full bg-gradient-to-br from-purple-500/30 via-pink-500/30 to-indigo-500/30 p-2 shadow-2xl flex flex-col items-center justify-center text-center z-20 backdrop-blur-md">
                <div className="w-full h-full rounded-full bg-white dark:bg-slate-900 flex flex-col items-center justify-center p-3 overflow-hidden border-2 border-purple-200 dark:border-purple-800 shadow-inner">
                  <div className="w-24 h-24 sm:w-32 sm:h-32 relative mb-1">
                    <Image
                      src="/jvm logo.jpeg"
                      alt="JVM Institute Logo"
                      fill
                      className="object-contain rounded-full"
                    />
                  </div>
                  <span className="text-xs sm:text-sm font-extrabold text-slate-900 dark:text-white tracking-wider uppercase font-heading">
                    JVM Institute
                  </span>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Highlighting Ecosystem Tech Stack */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div className="bg-white/95 dark:bg-slate-900/95 rounded-3xl p-8 sm:p-9 border border-slate-200 dark:border-slate-800 shadow-xl space-y-6 relative overflow-hidden h-full flex flex-col justify-between">
              
              <div className="space-y-3">
                <span className="text-xs font-extrabold text-[#E01E6A] dark:text-pink-400 uppercase tracking-wider">
                  Industry Ready Curriculum
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-slate-900 dark:text-white">
                  Complete Data Stack Mastery
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  At JVM Institute, you don&apos;t just read theory — you build production ETL pipelines, configure cluster nodes, and process million-row datasets using industry standard tools.
                </p>
              </div>

              {/* Technologies Grid */}
              <div className="grid sm:grid-cols-2 gap-3.5">
                {techList.map((item, idx) => {
                  const IconComp = item.icon;
                  return (
                    <div key={idx} className="flex items-center gap-3 bg-slate-50 dark:bg-slate-800/80 p-3.5 rounded-2xl border border-slate-200/60 dark:border-slate-700/60">
                      <div className="w-10 h-10 rounded-xl bg-white dark:bg-slate-900 text-[#7C248C] dark:text-purple-300 flex items-center justify-center shrink-0 shadow-xs">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-xs sm:text-sm font-extrabold text-slate-900 dark:text-white">{item.name}</div>
                        <div className="text-[10px] sm:text-xs text-slate-500 dark:text-slate-400 font-medium">{item.role}</div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="space-y-2.5 pt-2 border-t border-slate-100 dark:border-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Real-time Databricks / Cloud Workspace Access</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Verified MNC Interview Questions & Code Snippets</span>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/courses"
                  className="w-full jvm-gradient-bg text-white font-extrabold py-3.5 px-6 rounded-2xl text-sm transition-all flex items-center justify-center gap-2 shadow-md hover:opacity-95"
                >
                  Explore Complete Syllabus <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
