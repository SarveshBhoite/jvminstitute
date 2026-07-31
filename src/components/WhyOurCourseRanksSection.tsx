"use client";

import React, { useState } from "react";
import Image from "next/image";
import { 
  Award, 
  Users, 
  Sparkles, 
  ShieldCheck 
} from "lucide-react";

export default function WhyOurCourseRanksSection() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="py-10 sm:py-20 md:py-28 relative overflow-hidden transition-colors duration-500 border-t border-indigo-200/50 dark:border-indigo-900/40">
      
      {/* Background Image of students1.jpeg across the entire section */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/students1.jpeg"
          alt="JVM Institute Students Background"
          fill
          className="object-cover object-center filter blur-md scale-105 opacity-35 dark:opacity-20"
        />
        {/* Uniform Solid Tint Overlay using JVM Brand Royal Blue / Dark Indigo */}
        <div className="absolute inset-0 bg-slate-100/90 dark:bg-[#0B0F19]/90 backdrop-blur-sm"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid lg:grid-cols-12 gap-5 sm:gap-10 lg:gap-14 items-center">
          
          {/* LEFT CONTENT COLUMN (7 cols) */}
          <div className="lg:col-span-7 space-y-3 sm:space-y-6 text-center sm:text-left">
            
            <div className="flex justify-center sm:justify-start">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-white/90 dark:bg-slate-800/90 border border-indigo-200 dark:border-indigo-800/80 text-[11px] sm:text-xs font-extrabold text-[#1E2B88] dark:text-indigo-300 uppercase tracking-wider shadow-xs backdrop-blur-md">
                <Award className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#E01E6A] dark:text-pink-400" /> Proven Track Record
              </div>
            </div>

            <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold font-heading tracking-tight text-slate-900 dark:text-white leading-[1.18] sm:leading-[1.15]">
              Why Our Course <span className="jvm-gradient-text">Ranks Among the Best!</span>
            </h2>

            <p className="text-xs sm:text-base md:text-lg text-slate-900 dark:text-slate-200 font-medium leading-relaxed">
              Join the ranks of over <span className="text-[#E01E6A] font-extrabold dark:text-pink-400">10K+ professionals</span> who have propelled their careers forward with JVM Institute. At JVM, we firmly believe in the potential of every individual to excel with the right guidance and tools.
            </p>

            <p className="text-xs sm:text-base text-slate-800 dark:text-slate-300 leading-relaxed hidden sm:block">
              Our mission is to equip every student with the necessary tools and confidence for success. With top-tier faculty, immersive hands-on experiences, unparalleled program support, and comprehensive career mentorship sessions, we ensure that every student reaches their full potential.
            </p>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-2.5 sm:gap-4 pt-2 sm:pt-4 border-t border-slate-200/80 dark:border-slate-800 text-left">
              <div className="flex items-center gap-2.5 sm:gap-3 bg-white/90 dark:bg-slate-900/90 p-2.5 sm:p-3.5 rounded-xl sm:rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-xs backdrop-blur-md">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-[#1E2B88] dark:text-indigo-300 flex items-center justify-center shrink-0">
                  <Users className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-extrabold text-slate-900 dark:text-white">10K+ Alumni</div>
                  <div className="text-[10px] sm:text-xs text-slate-500 dark:text-slate-400">Across Top MNCs</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5 sm:gap-3 bg-white/90 dark:bg-slate-900/90 p-2.5 sm:p-3.5 rounded-xl sm:rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-xs backdrop-blur-md">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-extrabold text-slate-900 dark:text-white">Top Tier Faculty</div>
                  <div className="text-[10px] sm:text-xs text-slate-500 dark:text-slate-400">10+ Yrs Engineers</div>
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT VIDEO PLAYER COLUMN (5 cols) */}
          <div className="lg:col-span-5 pt-2 sm:pt-0">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border-2 sm:border-4 border-white dark:border-slate-800 bg-slate-950">
              
              {!isPlaying ? (
                /* High-Resolution Crisp YouTube Thumbnail Preview */
                <div 
                  className="relative w-full aspect-video sm:h-[340px] bg-slate-900 flex flex-col justify-between cursor-pointer overflow-hidden group p-3 sm:p-5"
                  onClick={() => setIsPlaying(true)}
                >
                  {/* High Resolution YouTube Thumbnail Image */}
                  <img 
                    src="https://img.youtube.com/vi/OlRm6aXmfdg/maxresdefault.jpg" 
                    alt="JVM Institute Class Tour Video"
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter-none"
                  />

                  {/* Gentle Top & Bottom Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-transparent to-slate-950/80"></div>

                  {/* Top Bar: Channel Logo & Title */}
                  <div className="relative z-10 flex items-center gap-2.5">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white p-0.5 sm:p-1 flex items-center justify-center overflow-hidden shadow-md shrink-0">
                      <Image 
                        src="/jvm logo.jpeg" 
                        alt="JVM Institute Logo"
                        width={36}
                        height={36}
                        className="object-contain"
                      />
                    </div>
                    <div>
                      <h3 className="text-xs sm:text-base font-extrabold text-white drop-shadow-md leading-tight">
                        JVM Institute - Class Tour
                      </h3>
                      <p className="text-[10px] sm:text-xs text-slate-200 drop-shadow-sm font-medium">
                        JVM Institute Pvt Ltd
                      </p>
                    </div>
                  </div>

                  {/* Perfectly Centered Native Red YouTube Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
                    <div className="w-12 h-8 sm:w-16 sm:h-11 bg-red-600 group-hover:bg-red-700 rounded-xl sm:rounded-2xl flex items-center justify-center text-white shadow-2xl transition-transform group-hover:scale-110">
                      <div className="w-0 h-0 border-y-[6px] sm:border-y-8 border-y-transparent border-l-[10px] sm:border-l-[14px] border-l-white translate-x-0.5"></div>
                    </div>
                  </div>

                  {/* Bottom Bar: Watch on YouTube Button */}
                  <div className="relative z-10 flex items-center justify-between text-[10px] sm:text-xs font-bold text-white">
                    <span className="bg-slate-950/80 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/20 flex items-center gap-1">
                      <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-amber-400" /> Class Tour
                    </span>

                    <div className="bg-slate-900/90 backdrop-blur-md border border-white/20 px-2.5 py-1 sm:px-3.5 sm:py-1.5 rounded-full flex items-center gap-1 shadow-md group-hover:bg-red-600 transition-colors">
                      <span>Watch on</span>
                      <span className="font-extrabold text-white">YouTube</span>
                    </div>
                  </div>

                </div>
              ) : (
                /* Native Crisp YouTube iFrame Player */
                <div className="relative w-full aspect-video sm:h-[340px]">
                  <iframe 
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/OlRm6aXmfdg?si=kMOVKlDUCIii_Rkd&autoplay=1" 
                    title="JVM Institute - Class Tour" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerPolicy="strict-origin-when-cross-origin" 
                    allowFullScreen
                  ></iframe>
                </div>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
