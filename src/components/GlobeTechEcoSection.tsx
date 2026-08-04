"use client";

import React, { useState, useEffect } from "react";
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

// 8 Orbiting nodes representing requested core tech skills with enlarged, high-fidelity SVGs
const techNodes = [
  { 
    id: 1, 
    name: "MySQL", 
    angle: 0,
    icon: (
      <svg className="w-14 h-14 sm:w-20 sm:h-20 md:w-24 md:h-24" viewBox="0 0 120 70" fill="none">
        {/* Dolphin Outline jumping above SQL */}
        <path d="M78 6C74 11 71 18 73 24C74 28 78 30 76 36C74 42 67 44 63 42C60 40 60 35 57 33C53 31 48 33 45 31C42 28 45 23 41 19C37 15 30 17 27 13C24 9 22 4 22 1C28 5 34 7 39 5C45 3 47 -2 53 1C59 4 62 11 68 8C73 6 74 0 78 6Z" stroke="#00758F" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        {/* 'My' text in official Dark Blue */}
        <text x="2" y="62" fontFamily="sans-serif" fontWeight="900" fontSize="32" fill="#00758F" letterSpacing="-1">My</text>
        {/* 'SQL' text in official Orange */}
        <text x="46" y="62" fontFamily="sans-serif" fontWeight="900" fontSize="32" fill="#F29111" letterSpacing="-0.5">SQL</text>
      </svg>
    )
  },
  { 
    id: 2, 
    name: "SQL", 
    angle: 45,
    icon: (
      <svg className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20" viewBox="0 0 100 100" fill="none">
        <path d="M15 25C15 15 30 10 50 10C70 10 85 15 85 25V75C85 85 70 90 50 90C30 90 15 85 15 75V25Z" fill="#1C65C9" />
        <ellipse cx="50" cy="25" rx="35" ry="15" fill="#4B90F6" />
        <path d="M15 45C15 55 30 60 50 60C70 60 85 55 85 45V48C85 58 70 63 50 63C30 63 15 58 15 48V45Z" fill="#0F4BA4" opacity="0.6" />
        <text x="50" y="58" textAnchor="middle" fontFamily="sans-serif" fontWeight="900" fontSize="26" fill="#FFFFFF" letterSpacing="1">SQL</text>
      </svg>
    )
  },
  { 
    id: 3, 
    name: "Python", 
    angle: 90,
    icon: (
      <svg className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20" viewBox="0 0 100 100" fill="none">
        <path d="M50 4C30 4 18 12 18 28V44H50V49H20C8 49 0 58 0 72C0 86 10 94 25 94H34V81C34 66 45 54 60 54H88V40C88 20 76 4 50 4Z" fill="#5FBBB3" />
        <circle cx="34" cy="20" r="5" fill="white" />
        <path d="M50 96C70 96 82 88 82 72V56H50V51H80C92 51 100 42 100 28C100 14 90 6 75 6H66V19C66 34 55 46 40 46H12V60C12 80 24 96 50 96Z" fill="#F4BD44" />
        <circle cx="66" cy="80" r="5" fill="white" />
      </svg>
    )
  },
  { 
    id: 4, 
    name: "PySpark", 
    angle: 135,
    icon: (
      <svg className="w-16 h-16 sm:w-22 sm:h-22 md:w-28 md:h-28" viewBox="0 0 150 80" fill="none">
        {/* Open Orange Spark Star Outline */}
        <path d="M102 8L92 28L68 34L88 46L86 70L106 56L126 66L118 43L136 30L112 28L102 8Z" stroke="#E25A1C" strokeWidth="5.5" fill="none" strokeLinejoin="round" />
        {/* APACHE text */}
        <text x="28" y="22" fontFamily="sans-serif" fontStyle="italic" fontWeight="800" fontSize="12" fill="currentColor" className="text-slate-800 dark:text-slate-200" letterSpacing="4">APACHE</text>
        {/* Spark text */}
        <text x="4" y="65" fontFamily="sans-serif" fontWeight="900" fontSize="42" fill="currentColor" className="text-slate-900 dark:text-white" letterSpacing="-1.5">Spark</text>
      </svg>
    )
  },
  { 
    id: 5, 
    name: "GCP", 
    angle: 180,
    icon: (
      <svg className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20" viewBox="0 0 100 100" fill="none">
        <path d="M25 75C14 75 5 66 5 55C5 45 13 37 23 36C27 22 40 12 55 12C72 12 86 24 88 40C95 42 100 49 100 57C100 67 92 75 82 75H25Z" fill="#71C9F8" />
        <path d="M33 58C36 61 40 61 43 58" stroke="#37264B" strokeWidth="4" strokeLinecap="round" />
        <path d="M57 58C60 61 64 61 67 58" stroke="#37264B" strokeWidth="4" strokeLinecap="round" />
        <path d="M46 64C49 67 51 67 54 64" stroke="#37264B" strokeWidth="3" strokeLinecap="round" />
      </svg>
    )
  },
  { 
    id: 6, 
    name: "Azure", 
    angle: 225,
    icon: (
      <svg className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20" viewBox="0 0 100 100" fill="none">
        {/* Main Blue Azure 'A' Shape */}
        <path d="M54.5 12.5L22 83.5H44.5L54.5 59.5L68 83.5H90.5L54.5 12.5Z" fill="#0078D4" />
        {/* Dark Blue Base Fold Shadow */}
        <path d="M22 83.5H44.5L54.5 59.5H35.5L22 83.5Z" fill="#004B87" />
        {/* Bright Cyan Diagonal Ribbon Accent */}
        <path d="M54.5 12.5L35.5 59.5H60.5L54.5 12.5Z" fill="#50E6FF" />
      </svg>
    )
  },
  { 
    id: 7, 
    name: "AWS", 
    angle: 270,
    icon: (
      <svg className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20" viewBox="0 0 100 100" fill="none">
        <text x="50" y="45" textAnchor="middle" fontFamily="sans-serif" fontWeight="900" fontSize="32" fill="#FF9900">AWS</text>
        <path d="M20 62C38 78 62 78 80 62" stroke="#FF9900" strokeWidth="8" strokeLinecap="round" />
        <path d="M72 70L84 62L78 78" stroke="#FF9900" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  },
  { 
    id: 8, 
    name: "Gen AI", 
    angle: 315,
    icon: (
      <svg className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20" viewBox="0 0 100 100" fill="none">
        <defs>
          <linearGradient id="genAiGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00D2FF" />
            <stop offset="50%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#9333EA" />
          </linearGradient>
        </defs>
        {/* Open Rounded Box Frame */}
        <path d="M 58 18 H 30 C 18 18 10 26 10 38 V 64 C 10 76 18 84 30 84 H 64 C 76 84 84 76 84 64 V 48" stroke="url(#genAiGrad)" strokeWidth="6.5" strokeLinecap="round" fill="none" />
        {/* 'AI' Text inside box */}
        <text x="44" y="63" textAnchor="middle" fontFamily="sans-serif" fontWeight="900" fontSize="35" fill="url(#genAiGrad)" letterSpacing="-1">AI</text>
        {/* 3 Bursting Sparkle Stars at top right corner */}
        {/* Large Sparkle */}
        <path d="M 80 23 C 80 16 73 9 73 9 C 73 9 66 16 66 23 C 66 30 73 37 73 37 C 73 37 80 30 80 23 Z" fill="url(#genAiGrad)" />
        {/* Top-Right Small Sparkle */}
        <path d="M 90 11 C 90 7 86 3 86 3 C 86 3 82 7 82 11 C 82 15 86 19 86 19 C 86 19 90 15 90 11 Z" fill="url(#genAiGrad)" />
        {/* Mid-Right Small Sparkle */}
        <path d="M 92 33 C 92 29 88 25 88 25 C 88 25 84 29 84 33 C 84 37 88 41 88 41 C 88 41 92 37 92 33 Z" fill="url(#genAiGrad)" />
      </svg>
    )
  },
];

const techList = [
  { name: "MySQL & SQL", role: "Relational Database & Querying", icon: Database },
  { name: "Python", role: "Core Data Engineering & Automation", icon: Code2 },
  { name: "PySpark", role: "Distributed Big Data Engine", icon: Cpu },
  { name: "GCP (Google Cloud)", role: "Cloud BigQuery & Pipelines", icon: Cloud },
  { name: "Microsoft Azure", role: "Data Factory & Synapse Analytics", icon: Layers },
  { name: "AWS Cloud", role: "S3, Glue & EMR Infrastructure", icon: Server },
];

export default function GlobeTechEcoSection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const radius = isMobile ? 130 : 225;

  return (
    <section className="py-12 sm:py-20 md:py-24 bg-gradient-to-b from-white via-slate-50 to-white dark:from-[#0B0F19] dark:via-[#0F172A] dark:to-[#0B0F19] relative overflow-hidden transition-colors duration-300">
      
      {/* Decorative Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4 mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-50 dark:bg-purple-950/60 border border-purple-100 dark:border-purple-900/60 text-[11px] sm:text-xs font-extrabold text-[#7C248C] dark:text-purple-300 uppercase tracking-wider">
            <Globe className="w-3.5 h-3.5 text-[#E01E6A] dark:text-pink-400" /> Global Tech Ecosystem
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold font-heading text-slate-900 dark:text-white tracking-tight leading-tight">
            Learn Technologies Demanded Across <span className="jvm-gradient-text">Global Data Engineering</span>
          </h2>

          <p className="text-sm sm:text-lg text-slate-600 dark:text-slate-300">
            JVM Institute curriculum integrates real cloud infrastructure, streaming tools, and big data engines used by Fortune 500 tech teams.
          </p>
        </div>

        {/* 2-Column Layout: Larger Rotating Globe & Matching Height Tech Stack Card */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Left Column: CONTINUOUSLY ROTATING ORBITING LOGOS */}
          <div className="lg:col-span-6 relative flex items-center justify-center min-h-[360px] sm:min-h-[540px] lg:min-h-full py-4 sm:py-6 overflow-hidden">
            
            {/* Ambient Center Glow */}
            <div className="absolute w-64 h-64 sm:w-96 sm:h-96 bg-purple-500/20 dark:bg-purple-600/20 rounded-full blur-3xl pointer-events-none"></div>

            {/* CONTINUOUSLY ROTATING EXPANDED CONTAINER */}
            <div className="relative w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] flex items-center justify-center">
              
              {/* CONTINUOUSLY ROTATING ORBITING LOGOS CONTAINER */}
              <div className="absolute inset-0 animate-[spin_22s_linear_infinite]">
                {techNodes.map((node) => {
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
                        <div className="w-12 h-12 sm:w-20 sm:h-20 flex items-center justify-center filter drop-shadow-xl hover:scale-130 transition-transform cursor-pointer">
                          {node.icon}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Central Globe Core with Large JVM Institute Logo */}
              <div className="relative w-36 h-36 sm:w-56 sm:h-56 rounded-full bg-gradient-to-br from-purple-500/30 via-pink-500/30 to-indigo-500/30 p-2 shadow-2xl flex flex-col items-center justify-center text-center z-20 backdrop-blur-md">
                <div className="w-full h-full rounded-full bg-white dark:bg-slate-900 flex flex-col items-center justify-center p-2 sm:p-3 overflow-hidden border-2 border-purple-200 dark:border-purple-800 shadow-inner">
                  <div className="w-16 h-16 sm:w-32 sm:h-32 relative mb-0.5 sm:mb-1">
                    <Image
                      src="/jvm_logo-bg.png"
                      alt="JVM Institute Logo"
                      fill
                      className="object-contain rounded-full"
                    />
                  </div>
                  <span className="text-[10px] sm:text-sm font-extrabold text-slate-900 dark:text-white tracking-wider uppercase font-heading">
                    JVM Institute
                  </span>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Highlighting Ecosystem Tech Stack */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div className="bg-white/95 dark:bg-slate-900/95 rounded-3xl p-6 sm:p-9 border border-slate-200 dark:border-slate-800 shadow-xl space-y-5 sm:space-y-6 relative overflow-hidden h-full flex flex-col justify-between">
              
              <div className="space-y-2 sm:space-y-3">
                <span className="text-[10px] sm:text-xs font-extrabold text-[#E01E6A] dark:text-pink-400 uppercase tracking-wider">
                  Industry Ready Curriculum
                </span>
                <h3 className="text-xl sm:text-3xl font-extrabold font-heading text-slate-900 dark:text-white">
                  Complete Data Stack Mastery
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  At JVM Institute, you don&apos;t just read theory — you build production ETL pipelines, configure cluster nodes, and process million-row datasets using industry standard tools.
                </p>
              </div>

              {/* Technologies Grid: 3 Columns on Mobile (2 items in each column) */}
              <div className="grid grid-cols-3 sm:grid-cols-2 gap-1.5 sm:gap-3">
                {techList.map((item, idx) => {
                  const IconComp = item.icon;
                  return (
                    <div key={idx} className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-1.5 sm:gap-3 bg-slate-50 dark:bg-slate-800/80 p-2 sm:p-3.5 rounded-xl sm:rounded-2xl border border-slate-200/60 dark:border-slate-700/60 overflow-hidden">
                      <div className="w-7 h-7 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-white dark:bg-slate-900 text-[#7C248C] dark:text-purple-300 flex items-center justify-center shrink-0 shadow-xs">
                        <IconComp className="w-3.5 h-3.5 sm:w-5 sm:h-5" />
                      </div>
                      <div className="w-full min-w-0">
                        <div className="text-[10px] sm:text-sm font-extrabold text-slate-900 dark:text-white truncate">{item.name}</div>
                        <div className="text-[8px] sm:text-xs text-slate-500 dark:text-slate-400 font-medium truncate">{item.role}</div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-300">
                <div className="flex items-center gap-2 text-[11px] sm:text-xs">
                  <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Real-time Databricks / Cloud Workspace Access</span>
                </div>
                <div className="flex items-center gap-2 text-[11px] sm:text-xs">
                  <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Verified MNC Interview Questions &amp; Code Snippets</span>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/our-courses"
                  className="w-full jvm-gradient-bg text-white font-extrabold py-3.5 px-6 rounded-2xl text-xs sm:text-sm transition-all flex items-center justify-center gap-2 shadow-md hover:opacity-95"
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
