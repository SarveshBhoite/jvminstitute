"use client";

import React, { useState, useEffect, useRef } from "react";
import { 
  Award, 
  Users, 
  Compass, 
  Sparkles, 
  FileCheck, 
  Video, 
  UserCheck, 
  FolderGit2, 
  TrendingUp,
  Clock
} from "lucide-react";

// CountUp hook using IntersectionObserver
function useCountUp(target: number, duration: number = 2000) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let startTime: number | null = null;
          const step = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            setCount(Math.floor(progress * target));
            if (progress < 1) {
              requestAnimationFrame(step);
            }
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration, hasAnimated]);

  return { count, ref };
}

export default function KeyFeaturesBentoSection() {
  const count450 = useCountUp(450, 2200);
  const count25 = useCountUp(25, 1800);
  const count100 = useCountUp(100, 1500);
  const count360 = useCountUp(360, 2000);

  return (
    <section className="pt-10 sm:pt-20 md:pt-28 pb-6 sm:pb-10 bg-white dark:bg-[#0B0F19] relative overflow-hidden transition-colors duration-500">
      
      {/* Background ambient glows */}
      <div className="ambient-glow w-[320px] h-[320px] sm:w-[500px] sm:h-[500px] bg-[#1E2B88] dark:bg-[#4F46E5] top-[-10%] left-[-10%] opacity-10 pointer-events-none"></div>
      <div className="ambient-glow w-[320px] h-[320px] sm:w-[500px] sm:h-[500px] bg-[#E01E6A] dark:bg-[#EC4899] bottom-[10%] right-[-10%] opacity-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2 sm:space-y-4 mb-6 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-50 dark:bg-purple-950/60 border border-purple-100 dark:border-purple-900/60 text-[10px] sm:text-xs font-extrabold text-[#7C248C] dark:text-purple-300 uppercase tracking-wider shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#E01E6A] dark:text-pink-400" /> Why Choose JVM Institute
          </div>

          <h2 className="text-xl sm:text-4xl md:text-5xl font-extrabold font-heading text-slate-900 dark:text-white tracking-tight leading-tight">
            Key Features of <span className="jvm-gradient-text">JVM Institute</span>
          </h2>

          <p className="text-xs sm:text-lg text-slate-600 dark:text-slate-300 font-medium hidden xs:block">
            Everything you need for a successful career transition into High-Paying Data Engineering roles.
          </p>
        </div>

        {/* ASYMMETRIC BENTO GRID: Fits all features on mobile screen efficiently */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-6">
          
          {/* Top Row Hero Box 1: 100% Placement Assistance */}
          <div 
            ref={count100.ref}
            className="col-span-2 lg:col-span-2 bg-gradient-to-br from-slate-950 via-[#1E2B88] to-slate-900 text-white rounded-2xl sm:rounded-3xl p-4 sm:p-10 flex flex-col justify-between shadow-xl relative overflow-hidden group border border-slate-800 hover:border-purple-500/50 transition-all min-h-[170px] sm:min-h-[320px]"
          >
            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

            <div className="space-y-2 sm:space-y-4 relative z-10">
              <div className="flex items-center justify-between gap-2">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-[10px] sm:text-xs font-extrabold uppercase tracking-wider">
                  <Award className="w-3 h-3 sm:w-4 sm:h-4 text-emerald-400" /> Guaranteed Outcome
                </div>
                <span className="text-[10px] sm:text-xs font-bold text-slate-300 bg-white/10 px-2.5 py-0.5 rounded-full border border-white/10">
                  250+ Partners
                </span>
              </div>

              <div className="space-y-0.5 sm:space-y-1 pt-1 sm:pt-2">
                <div className="text-4xl sm:text-7xl lg:text-8xl font-black font-heading text-white tracking-tight drop-shadow-md leading-none">
                  {count100.count}%
                </div>
                <h3 className="text-base sm:text-3xl font-extrabold font-heading text-white">
                  Placement Assistance
                </h3>
              </div>

              <p className="text-slate-300 text-[11px] sm:text-base leading-snug sm:leading-relaxed max-w-xl hidden xs:block">
                Dedicated corporate placement team conducting weekly drive calls, offline MNC interview scheduling, resume forwarding, and direct referral pipelines.
              </p>
            </div>

            <div className="pt-2 sm:pt-5 mt-2 sm:mt-4 border-t border-white/10 flex items-center justify-between text-[10px] sm:text-xs text-emerald-400 font-bold relative z-10">
              <span className="flex items-center gap-1"><TrendingUp className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> 150% Avg Hike</span>
              <span className="bg-emerald-500 text-white font-extrabold px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-[9px] sm:text-xs">Active Pipeline</span>
            </div>
          </div>

          {/* Top Row Hero Box 2: 450+ Hours Live Sessions */}
          <div 
            ref={count450.ref}
            className="col-span-2 sm:col-span-1 lg:col-span-1 bg-white/95 dark:bg-slate-900/95 border border-slate-200 dark:border-slate-800 rounded-2xl sm:rounded-3xl p-4 sm:p-8 flex flex-col justify-between shadow-md hover:shadow-xl transition-all min-h-[140px] sm:min-h-[320px]"
          >
            <div className="space-y-2 sm:space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-purple-50 dark:bg-purple-950/40 border border-purple-200 dark:border-purple-900/60 flex items-center justify-center text-[#7C248C] dark:text-purple-300 shrink-0">
                  <Video className="w-4 h-4 sm:w-6 sm:h-6" />
                </div>
                <span className="text-[9px] sm:text-xs font-extrabold uppercase text-[#7C248C] dark:text-purple-300 bg-purple-50 dark:bg-purple-950/60 px-2 py-0.5 rounded-full border border-purple-200 dark:border-purple-900/60">
                  LMS Access
                </span>
              </div>

              <div className="space-y-0.5 sm:space-y-1 pt-0.5 sm:pt-1">
                <div className="text-3xl sm:text-6xl font-black font-heading text-[#7C248C] dark:text-purple-400 tracking-tight leading-none">
                  {count450.count}+
                </div>
                <h3 className="text-sm sm:text-xl font-extrabold font-heading text-slate-900 dark:text-white">
                  Hours Live &amp; Recorded
                </h3>
              </div>

              <p className="text-[11px] sm:text-sm text-slate-600 dark:text-slate-300 leading-snug sm:leading-relaxed hidden xs:block">
                Comprehensive practical training with 24/7 access to session recordings, Databricks PySpark labs, SQL query banks, and solution notebooks.
              </p>
            </div>

            <div className="pt-2 sm:pt-4 mt-1 sm:mt-2 border-t border-slate-100 dark:border-slate-800 text-[10px] sm:text-xs font-semibold text-slate-500 dark:text-slate-400 flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-purple-500 shrink-0" /> Lifetime Portal Access
            </div>
          </div>

          {/* LOWER ROWS: COMPACT CARDS IN 2 COLUMNS FOR MOBILE */}

          {/* Bento Item 3: Hands-on Industry Expert Training */}
          <div className="col-span-1 lg:col-span-1 bg-white/95 dark:bg-slate-900/95 border border-slate-200 dark:border-slate-800 rounded-2xl sm:rounded-3xl p-3 sm:p-5 shadow-sm hover:shadow-md transition-all flex items-center gap-2.5 sm:gap-4">
            <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900/60 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
              <Users className="w-4 h-4 sm:w-6 sm:h-6" />
            </div>
            <div>
              <h3 className="text-xs sm:text-base font-bold font-heading text-slate-900 dark:text-white leading-tight">
                Expert Training
              </h3>
              <p className="text-[10px] sm:text-xs text-slate-500 dark:text-slate-400 mt-0.5 truncate">
                10+ Yrs MNC Engineers
              </p>
            </div>
          </div>

          {/* Bento Item 4: 360° Career Support */}
          <div 
            ref={count360.ref}
            className="col-span-1 lg:col-span-1 bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-950/50 dark:to-indigo-950/40 border border-purple-200 dark:border-purple-900/60 rounded-2xl sm:rounded-3xl p-3 sm:p-5 shadow-sm flex items-center justify-between"
          >
            <div className="space-y-0.5">
              <span className="text-base sm:text-2xl font-black text-[#7C248C] dark:text-purple-300">
                {count360.count}° Support
              </span>
              <h3 className="text-[11px] sm:text-sm font-bold text-slate-900 dark:text-white leading-tight">
                Career Support
              </h3>
            </div>
            <div className="w-7 h-7 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-white dark:bg-slate-800 flex items-center justify-center text-[#E01E6A] shadow-xs shrink-0">
              <Compass className="w-3.5 h-3.5 sm:w-5 sm:h-5" />
            </div>
          </div>

          {/* Bento Item 5: Industry Masterclasses */}
          <div className="col-span-1 lg:col-span-1 bg-white/95 dark:bg-slate-900/95 border border-slate-200 dark:border-slate-800 rounded-2xl sm:rounded-3xl p-3 sm:p-5 shadow-sm hover:shadow-md transition-all flex items-center gap-2.5 sm:gap-4">
            <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-pink-50 dark:bg-pink-950/40 border border-pink-200 dark:border-pink-900/60 text-[#E01E6A] flex items-center justify-center shrink-0">
              <Sparkles className="w-4 h-4 sm:w-6 sm:h-6" />
            </div>
            <div>
              <h3 className="text-xs sm:text-base font-bold font-heading text-slate-900 dark:text-white leading-tight">
                Masterclasses
              </h3>
              <p className="text-[10px] sm:text-xs text-slate-500 dark:text-slate-400 mt-0.5 truncate">
                Clouds and Airflow
              </p>
            </div>
          </div>

          {/* Bento Item 6: Resume Tool & Review */}
          <div className="col-span-1 lg:col-span-1 bg-white/95 dark:bg-slate-900/95 border border-slate-200 dark:border-slate-800 rounded-2xl sm:rounded-3xl p-3 sm:p-5 shadow-sm hover:shadow-md transition-all flex items-center gap-2.5 sm:gap-4">
            <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-900/60 text-emerald-600 flex items-center justify-center shrink-0">
              <FileCheck className="w-4 h-4 sm:w-6 sm:h-6" />
            </div>
            <div>
              <h3 className="text-xs sm:text-base font-bold font-heading text-slate-900 dark:text-white leading-tight">
                Resume Review
              </h3>
              <p className="text-[10px] sm:text-xs text-slate-500 dark:text-slate-400 mt-0.5 truncate">
                ATS Project Formatting
              </p>
            </div>
          </div>

          {/* Bento Item 7: Exclusive 1:1 Mentoring */}
          <div className="col-span-1 lg:col-span-1 bg-white/95 dark:bg-slate-900/95 border border-slate-200 dark:border-slate-800 rounded-2xl sm:rounded-3xl p-3 sm:p-5 shadow-sm hover:shadow-md transition-all flex items-center gap-2.5 sm:gap-4">
            <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-900/60 text-indigo-600 flex items-center justify-center shrink-0">
              <UserCheck className="w-4 h-4 sm:w-6 sm:h-6" />
            </div>
            <div>
              <h3 className="text-xs sm:text-base font-bold font-heading text-slate-900 dark:text-white leading-tight">
                1:1 Mentoring
              </h3>
              <p className="text-[10px] sm:text-xs text-slate-500 dark:text-slate-400 mt-0.5 truncate">
                Private Code Reviews
              </p>
            </div>
          </div>

          {/* Bento Item 8: 25+ Real Industry Projects */}
          <div 
            ref={count25.ref}
            className="col-span-1 lg:col-span-1 bg-gradient-to-r from-slate-900 to-slate-950 text-white rounded-2xl sm:rounded-3xl p-3 sm:p-5 shadow-md border border-slate-800 flex items-center justify-between"
          >
            <div>
              <div className="text-xs sm:text-2xl font-black text-emerald-400 leading-tight">
                {count25.count}+ Real Projects
              </div>
              <p className="text-[10px] sm:text-xs text-slate-300 mt-0.5 font-medium">
                PySpark, GCP, Azure, AWS
              </p>
            </div>
            <div className="w-7 h-7 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center text-emerald-400 shrink-0">
              <FolderGit2 className="w-3.5 h-3.5 sm:w-5 sm:h-5" />
            </div>
          </div>

        </div>

      </div>

      {/* SEAMLESS INTEGRATED NECKLACE MARQUEE RIBBON WITH SITE BRAND THEME COLORS */}
      <div className="mt-8 sm:mt-14 pt-1 sm:pt-2 relative overflow-hidden text-[#1E2B88] dark:text-purple-300">
        
        {/* Full Edge-to-Edge U-Shaped Necklace Curved Arc SVG */}
        <div className="relative w-full overflow-hidden h-20 sm:h-36 flex items-center justify-center">
          
          <svg className="absolute w-[100vw] h-full overflow-visible pointer-events-none" viewBox="0 0 1000 180" preserveAspectRatio="none">
            {/* Smooth U-Shape Curve */}
            <path id="necklaceCurvePath" d="M 0,10 Q 500,160 1000,10" fill="none" stroke="transparent" />
            
            <text className="text-sm sm:text-2xl md:text-3xl font-extrabold font-heading tracking-[0.2em] sm:tracking-[0.25em] fill-[#1E2B88] dark:fill-purple-300 uppercase opacity-90">
              <textPath href="#necklaceCurvePath" startOffset="0%">
                ✦ JVM INSTITUTE ✦ 100% PLACEMENT ASSISTANCE ✦ PYSPARK &amp; DATABRICKS MASTERY ✦ 450+ HOURS LEARNING ✦ 25+ INDUSTRY PROJECTS ✦ 360° CAREER SUPPORT ✦ JVM INSTITUTE ✦ 100% PLACEMENT ASSISTANCE ✦
                <animate attributeName="startOffset" from="0%" to="-50%" dur="20s" repeatCount="indefinite" />
              </textPath>
            </text>
          </svg>

        </div>

      </div>

    </section>
  );
}
