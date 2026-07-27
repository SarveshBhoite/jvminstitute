"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  CheckCircle2, 
  ArrowRight, 
  Star, 
  ShieldCheck, 
  Download
} from "lucide-react";

const heroImages = [
  { src: "/students2.jpeg", alt: "JVM Institute Live Classroom Batch" },
  { src: "/students1.jpeg", alt: "JVM Institute Data Engineering Students" },
];

export default function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Automatic smooth image fade transition loop (switches every 4 seconds)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden bg-slate-50 dark:bg-[#0B0F19] transition-colors duration-300">
      
      {/* Background Ambient Glows */}
      <div className="ambient-glow w-96 h-96 bg-[#1E2B88] dark:bg-[#4F46E5] top-0 left-[-10%] opacity-20 z-0"></div>

      {/* FULL RIGHT-SIDE IMAGE CONTAINER WITH AUTOMATIC FADE SLIDESHOW */}
      <div className="absolute top-0 right-0 bottom-0 w-full lg:w-1/2 z-0 hidden lg:block overflow-hidden">
        
        {/* Auto Fade Images Layer */}
        {heroImages.map((img, idx) => (
          <div
            key={img.src}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              currentImageIndex === idx ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover object-center scale-105"
              priority={idx === 0}
            />
          </div>
        ))}

        {/* Ambient Dark Bottom Tint */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/40 z-10 pointer-events-none"></div>

        {/* --- ORGANIC FULL-CURVE WAVY RIBBON DIVIDER --- */}
        {/* 1. Outer Magenta (#E01E6A) Ribbon Wave */}
        <svg 
          className="absolute -left-1 top-0 bottom-0 h-full w-36 text-[#E01E6A] pointer-events-none drop-shadow-xl z-20" 
          viewBox="0 0 100 100" 
          preserveAspectRatio="none"
        >
          <path d="M100,0 C20,15 70,60 100,100 L0,100 L0,0 Z" fill="currentColor" />
        </svg>

        {/* 2. Middle Royal Blue (#1E2B88) Ribbon Wave */}
        <svg 
          className="absolute -left-2 top-0 bottom-0 h-full w-32 text-[#1E2B88] pointer-events-none drop-shadow-lg z-20" 
          viewBox="0 0 100 100" 
          preserveAspectRatio="none"
        >
          <path d="M95,0 C15,18 65,65 95,100 L0,100 L0,0 Z" fill="currentColor" />
        </svg>

        {/* 3. Section Background Matching Smooth Wavy Cutout */}
        <svg 
          className="absolute -left-3 top-0 bottom-0 h-full w-28 text-slate-50 dark:text-[#0B0F19] pointer-events-none z-20" 
          viewBox="0 0 100 100" 
          preserveAspectRatio="none"
        >
          <path d="M90,0 C10,22 60,70 90,100 L0,100 L0,0 Z" fill="currentColor" />
        </svg>
      </div>

      {/* Main Grid Content */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-6 md:py-10 lg:py-12">
        
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Heading, Value Points & CTAs (6 cols) */}
          <div className="lg:col-span-6 space-y-4 text-center lg:text-left">
            
            {/* Top Rating & ISO Badge */}
            <div className="flex justify-center lg:justify-start">
              <div className="inline-flex items-center gap-2 bg-white/95 dark:bg-slate-800/95 border border-purple-100 dark:border-slate-700 px-4 py-1.5 rounded-full shadow-xs">
                <span className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                  ))}
                </span>
                <span className="text-xs md:text-sm font-bold text-slate-800 dark:text-slate-200">
                  4.9/5 Rating (1,200+ Reviews)
                </span>
                <span className="hidden sm:inline text-slate-300 dark:text-slate-600">|</span>
                <span className="hidden sm:inline text-xs font-semibold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" /> ISO Certified
                </span>
              </div>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold font-heading text-slate-900 dark:text-white leading-[1.15] tracking-tight">
              Master <span className="jvm-gradient-text">Data Engineering</span> & High-Paying Tech Skills in Pune
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-2xl font-normal leading-relaxed">
              Transform your IT career with live industry projects, real ETL pipelines, Databricks & PySpark mastery, and <strong className="text-slate-900 dark:text-white font-bold underline decoration-[#E01E6A] dark:decoration-pink-500">100% Placement Assistance</strong> from Pune&apos;s most trusted institute.
            </p>

            {/* Key Value Points Grid */}
            <div className="grid sm:grid-cols-2 gap-2.5 pt-1">
              <div className="flex items-center gap-2.5 bg-white dark:bg-slate-800/90 p-3 rounded-xl border border-slate-200/80 dark:border-slate-700/80 shadow-xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200">Real PySpark & Databricks Labs</span>
              </div>
              <div className="flex items-center gap-2.5 bg-white dark:bg-slate-800/90 p-3 rounded-xl border border-slate-200/80 dark:border-slate-700/80 shadow-xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200">1:1 Mock Interviews & Resume Prep</span>
              </div>
              <div className="flex items-center gap-2.5 bg-white dark:bg-slate-800/90 p-3 rounded-xl border border-slate-200/80 dark:border-slate-700/80 shadow-xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200">Weekend & Weekday Batches</span>
              </div>
              <div className="flex items-center gap-2.5 bg-white dark:bg-slate-800/90 p-3 rounded-xl border border-slate-200/80 dark:border-slate-700/80 shadow-xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200">Offline Campus & Live Online</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
              <Link 
                href="/data-engineering-course-in-pune" 
                className="w-full sm:w-auto jvm-gradient-bg text-white px-7 py-3.5 rounded-xl text-sm md:text-base font-extrabold shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 group"
              >
                Explore Data Engineering Course 
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link 
                href="/download-brochure" 
                className="w-full sm:w-auto bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 hover:border-[#1E2B88] dark:hover:border-purple-400 hover:text-[#1E2B88] px-6 py-3.5 rounded-xl text-sm font-bold transition-all flex items-center justify-center gap-2 shadow-xs"
              >
                <Download className="w-4 h-4" /> Download Syllabus PDF
              </Link>
            </div>

            {/* Quick Metrics */}
            <div className="pt-4 border-t border-slate-200/80 dark:border-slate-800 grid grid-cols-3 gap-4">
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold font-heading text-[#1E2B88] dark:text-indigo-400">3,500+</p>
                <p className="text-xs sm:text-sm font-medium text-slate-500 dark:text-slate-400">Students Trained</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold font-heading text-[#7C248C] dark:text-purple-400">12 LPA</p>
                <p className="text-xs sm:text-sm font-medium text-slate-500 dark:text-slate-400">Highest Package</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold font-heading text-[#E01E6A] dark:text-pink-400">250+</p>
                <p className="text-xs sm:text-sm font-medium text-slate-500 dark:text-slate-400">Hiring Partners</p>
              </div>
            </div>

          </div>

          {/* Mobile Image Slideshow (Shown only on small screens) */}
          <div className="lg:hidden relative w-full h-[280px] rounded-3xl overflow-hidden shadow-xl mt-4">
            <Image
              src={heroImages[currentImageIndex].src}
              alt={heroImages[currentImageIndex].alt}
              fill
              className="object-cover object-center transition-all duration-1000"
            />
          </div>

        </div>

      </div>
    </section>
  );
}
