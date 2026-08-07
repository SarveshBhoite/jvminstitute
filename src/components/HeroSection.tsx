"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import LeadEnquiryModal, { openEnrollModal } from "@/components/LeadEnquiryModal";
import {
  CheckCircle2,
  ArrowRight,
  Star,
  ShieldCheck,
  Sparkles,
  Award,
  Video,
  Download,
  PhoneCall,
} from "lucide-react";

const heroImages = [
  { src: "/students2.jpeg", alt: "JVM Institute Live Classroom Batch" },
  { src: "/students1.jpeg", alt: "JVM Institute Data Engineering Students" },
];

export default function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Automatic smooth image fade transition loop (switches every 2 seconds)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const [activePoint, setActivePoint] = useState<number | null>(null);

  const handlePointClick = (index: number) => {
    setActivePoint((prev) => (prev === index ? null : index));
  };

  const handleCallCounselor = () => {
    if (typeof window !== "undefined") {
      window.location.href = "tel:+918446284162";
    }
  };

  return (
    <section className="relative overflow-hidden bg-slate-50 dark:bg-[#0B0F19] transition-colors duration-300">

      {/* Background Ambient Glows */}
      <div className="ambient-glow w-72 h-72 sm:w-96 sm:h-96 bg-[#1E2B88] dark:bg-[#4F46E5] top-0 left-[-10%] opacity-20 z-0 pointer-events-none"></div>

      {/* DESKTOP FULL RIGHT-SIDE IMAGE CONTAINER WITH AUTOMATIC FADE SLIDESHOW */}
      <div className="absolute top-0 right-0 bottom-0 w-full lg:w-1/2 z-0 hidden lg:block overflow-hidden">

        {/* Auto Fade Images Layer */}
        {heroImages.map((img, idx) => (
          <div
            key={img.src}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${currentImageIndex === idx ? "opacity-100 z-10" : "opacity-0 z-0"
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
        <svg
          className="absolute -left-1 top-0 bottom-0 h-full w-36 text-[#E01E6A] pointer-events-none drop-shadow-xl z-20"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <path d="M100,0 C20,15 70,60 100,100 L0,100 L0,0 Z" fill="currentColor" />
        </svg>

        <svg
          className="absolute -left-2 top-0 bottom-0 h-full w-32 text-[#1E2B88] pointer-events-none drop-shadow-lg z-20"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <path d="M95,0 C15,18 65,65 95,100 L0,100 L0,0 Z" fill="currentColor" />
        </svg>

        <svg
          className="absolute -left-3 top-0 bottom-0 h-full w-28 text-slate-50 dark:text-[#0B0F19] pointer-events-none z-20"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <path d="M90,0 C10,22 60,70 90,100 L0,100 L0,0 Z" fill="currentColor" />
        </svg>
      </div>

      {/* Main Container */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-4 sm:py-6 lg:py-6">

        {/* MOBILE FEATURED IMAGE SLIDESHOW HEADER (Visible on Mobile & Tablet before text content) */}
        <div className="block lg:hidden mb-4 relative w-full h-[180px] xs:h-[210px] sm:h-[260px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border border-slate-200 dark:border-slate-800">
          {heroImages.map((img, idx) => (
            <div
              key={img.src}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${currentImageIndex === idx ? "opacity-100 z-10" : "opacity-0 z-0"
                }`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover object-center"
                priority={idx === 0}
              />
            </div>
          ))}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent z-10 pointer-events-none"></div>
          <div className="absolute bottom-3 left-3 sm:left-4 z-20 text-[11px] sm:text-xs font-extrabold text-white bg-slate-950/80 px-3 py-1 rounded-full border border-white/20 backdrop-blur-md">
            ✦ JVM Institute Pune Campus
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-4 lg:gap-6 items-center">

          {/* Left Column: Heading, Value Points & CTAs (6 cols) */}
          <div className="lg:col-span-6 space-y-3.5 text-center lg:text-left">

            {/* Top Rating & ISO Badge */}
            <div className="flex justify-center lg:justify-start">
              <div className="inline-flex items-center gap-1.5 sm:gap-2 bg-white/95 dark:bg-slate-800/95 border border-purple-100 dark:border-slate-700 px-3 sm:px-3.5 py-1 rounded-full shadow-xs text-xs font-bold text-slate-800 dark:text-slate-200">
                {/* Full Google Multi-color Wordmark */}
                <span className="font-extrabold text-sm tracking-tight flex items-center">
                  <span className="text-[#4285F4]">G</span>
                  <span className="text-[#EA4335]">o</span>
                  <span className="text-[#FBBC05]">o</span>
                  <span className="text-[#4285F4]">g</span>
                  <span className="text-[#34A853]">l</span>
                  <span className="text-[#EA4335]">e</span>
                </span>
                <span className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 sm:w-3.5 h-3 sm:h-3.5 fill-amber-400" />
                  ))}
                </span>
                <span className="text-[11px] sm:text-xs md:text-sm font-extrabold">
                  4.9/5 (200+ Reviews)
                </span>
                <span className="text-slate-300 dark:text-slate-600">|</span>
                <span className="inline-flex items-center gap-1 text-[11px] sm:text-xs font-bold text-emerald-600 dark:text-emerald-400 whitespace-nowrap">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  ISO 9001:2020
                </span>
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-4xl lg:text-4xl font-extrabold font-heading text-slate-900 dark:text-white leading-[1.18] sm:leading-[1.15] tracking-tight">
              Become an Industry-Ready <span className="jvm-gradient-text">Data Engineer &amp; AI Professional</span> in Pune
            </h1>

            <p className="text-xs sm:text-sm md:text-base text-slate-600 dark:text-slate-300 max-w-2xl font-normal leading-relaxed">
              Master Data Engineering, Gen AI, Machine Learning and Advanced AI technologies through industry-led training, live projects, real business case studies and comprehensive <strong className="text-slate-900 dark:text-white font-bold underline decoration-[#E01E6A] dark:decoration-pink-500">100% Placement Assistance</strong>. Whether you are a fresher, working professional or engineering, BSC, MBS or pharmacist student, JVM Institute helps you build practical skills that leading companies expect from today&apos;s technology professionals.
            </p>

            {/* Key Value Points Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 sm:gap-2 text-left pt-0.5">
              {[
                "Live Instructor-Led Classes",
                "450+ Learning Hours",
                "15+ Industry Projects",
                "Real-Time Case Studies",
                "1:1 Mentorship",
                "Mock Interviews",
              ].map((point, index) => (

                <div
                  key={index}
                  className="flex items-center gap-2 p-2 rounded-lg border bg-white dark:bg-slate-800/90 border-slate-200/80 dark:border-slate-700/80 shadow-xs"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 shrink-0 text-emerald-500" />
                  <span className="text-xs font-semibold text-slate-800 dark:text-slate-200 truncate">
                    {point}
                  </span>
                </div>
              ))}
            </div>


            {/* CTAs Button Group - 3 Action Buttons in JVM Website Theme */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-start gap-2 sm:gap-2.5 pt-3">
              <button
                onClick={() => openEnrollModal("Book a Free Demo")}
                className="flex-1 sm:flex-initial jvm-gradient-bg text-white font-extrabold px-4 sm:px-5 py-3 sm:py-3.5 rounded-2xl text-xs sm:text-sm transition-all shadow-lg hover:shadow-xl hover:opacity-95 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-1.5 sm:gap-2 group cursor-pointer whitespace-nowrap border border-white/20"
              >
                <Video className="w-4 h-4 shrink-0 text-white" />
                <span>Book a Free Demo</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform shrink-0" />
              </button>

              <button
                onClick={() => openEnrollModal("Download Course Brochure")}
                className="flex-1 sm:flex-initial bg-indigo-50/90 hover:bg-indigo-100/90 dark:bg-slate-800 dark:hover:bg-slate-700 text-[#1E2B88] dark:text-slate-100 font-extrabold px-4 sm:px-5 py-3 sm:py-3.5 rounded-2xl text-xs sm:text-sm border border-[#1E2B88]/25 dark:border-slate-700 transition-all shadow-xs hover:shadow-md hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-1.5 sm:gap-2 cursor-pointer group whitespace-nowrap"
              >
                <Download className="w-4 h-4 text-[#E01E6A] group-hover:translate-y-0.5 transition-transform shrink-0" />
                <span>Download Brochure</span>
              </button>

              <button
                onClick={handleCallCounselor}
                className="flex-1 sm:flex-initial bg-gradient-to-r from-[#E01E6A] to-[#b31454] hover:from-[#c4155b] hover:to-[#9e1049] text-white font-extrabold px-4 sm:px-5 py-3 sm:py-3.5 rounded-2xl text-xs sm:text-sm transition-all shadow-lg hover:shadow-xl hover:opacity-95 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-1.5 sm:gap-2 cursor-pointer group whitespace-nowrap border border-white/10"
              >
                <PhoneCall className="w-4 h-4 group-hover:rotate-12 transition-transform shrink-0 text-white" />
                <span>Talk to Counselor</span>
              </button>
            </div>

          </div>

          {/* Right Column Spacer (for desktop view over full background image) */}
          <div className="hidden lg:block lg:col-span-6 h-full min-h-[480px] pointer-events-none"></div>

        </div>

      </div>

      {/* Global Lead Enquiry Modal for CTAs */}
      <LeadEnquiryModal />
    </section>
  );
}
