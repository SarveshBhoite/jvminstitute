"use client";

import React from "react";
import Link from "next/link";
import { 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  Star, 
  ShieldCheck, 
  TrendingUp,
  Download
} from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative pt-6 pb-12 md:pt-10 md:pb-20 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50/50">
      {/* Background Decorative Gradient Blobs */}
      <div className="ambient-glow w-96 h-96 bg-[#1E2B88] top-0 left-[-10%]"></div>
      <div className="ambient-glow w-96 h-96 bg-[#E01E6A] bottom-0 right-[-10%]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Trust Badge */}
        <div className="flex justify-center mb-4">
          <div className="inline-flex items-center gap-2 bg-white/90 border border-purple-100 px-4 py-1.5 rounded-full shadow-xs hover:shadow-sm transition-shadow">
            <span className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
              ))}
            </span>
            <span className="text-xs md:text-sm font-bold text-slate-800">
              4.9/5 Rating (1,200+ Reviews on Google)
            </span>
            <span className="hidden sm:inline text-slate-300">|</span>
            <span className="hidden sm:inline text-xs font-semibold text-emerald-600 flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5" /> ISO Certified Training
            </span>
          </div>
        </div>

        {/* Hero Grid: Asymmetric Layout with Breathing Height */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Column: Heading & Value Proposition */}
          <div className="lg:col-span-7 space-y-5 text-center lg:text-left">
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold font-heading text-slate-900 leading-[1.15] tracking-tight">
              Master <span className="jvm-gradient-text">Data Engineering</span> & High-Paying Tech Skills in Pune
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl font-normal leading-relaxed">
              Transform your IT career with live industry projects, real ETL pipelines, Databricks & PySpark mastery, and <strong className="text-slate-900 font-bold underline decoration-[#E01E6A]">100% Placement Assistance</strong> from Pune&apos;s most trusted institute.
            </p>

            {/* Key Value Points */}
            <div className="grid sm:grid-cols-2 gap-3 pt-1">
              <div className="flex items-center gap-2.5 bg-white p-3 rounded-xl border border-slate-200/80 shadow-xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-slate-800">Real PySpark & Databricks Labs</span>
              </div>
              <div className="flex items-center gap-2.5 bg-white p-3 rounded-xl border border-slate-200/80 shadow-xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-slate-800">1:1 Mock Interviews & Resume Prep</span>
              </div>
              <div className="flex items-center gap-2.5 bg-white p-3 rounded-xl border border-slate-200/80 shadow-xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-slate-800">Weekend & Weekday Batches</span>
              </div>
              <div className="flex items-center gap-2.5 bg-white p-3 rounded-xl border border-slate-200/80 shadow-xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-slate-800">Offline Campus & Live Online</span>
              </div>
            </div>

            {/* CTAs Button Row */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-3">
              <Link 
                href="/data-engineering-course-in-pune" 
                className="w-full sm:w-auto jvm-gradient-bg text-white px-7 py-3.5 rounded-xl text-sm md:text-base font-extrabold shadow-md shadow-purple-900/20 hover:shadow-lg hover:shadow-purple-900/30 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 group"
              >
                Explore Data Engineering Course 
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link 
                href="/download-brochure" 
                className="w-full sm:w-auto bg-white text-slate-800 border border-slate-200 hover:border-[#1E2B88] hover:text-[#1E2B88] px-6 py-3.5 rounded-xl text-sm font-bold transition-all flex items-center justify-center gap-2 shadow-xs"
              >
                <Download className="w-4 h-4" /> Download Syllabus PDF
              </Link>
            </div>

            {/* Quick Metrics Bar */}
            <div className="pt-5 border-t border-slate-200/80 grid grid-cols-3 gap-4">
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold font-heading text-[#1E2B88]">3,500+</p>
                <p className="text-xs sm:text-sm font-medium text-slate-500">Students Trained</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold font-heading text-[#7C248C]">12 LPA</p>
                <p className="text-xs sm:text-sm font-medium text-slate-500">Highest Package</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold font-heading text-[#E01E6A]">250+</p>
                <p className="text-xs sm:text-sm font-medium text-slate-500">Hiring Partners</p>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual Card + Live Demo Spotlight */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Decorative Frame */}
              <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-r from-[#1E2B88] via-[#7C248C] to-[#E01E6A] opacity-25 blur-md"></div>

              {/* Card Container */}
              <div className="relative bg-white rounded-3xl p-6 sm:p-7 shadow-lg border border-slate-100 space-y-5">
                
                {/* Header Badge */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping"></span>
                    <span className="text-xs font-extrabold text-slate-700 uppercase tracking-wider">
                      Upcoming Batch Alert
                    </span>
                  </div>
                  <span className="text-xs font-bold text-white bg-[#1E2B88] px-3 py-0.5 rounded-full">
                    Limited Seats
                  </span>
                </div>

                {/* Main Featured Highlight */}
                <div className="bg-slate-50 p-4.5 rounded-2xl border border-slate-200/60 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 bg-gradient-to-l from-purple-100 to-transparent w-20 h-full"></div>
                  
                  <div className="flex items-center gap-2.5 mb-2">
                    <Sparkles className="w-5 h-5 text-[#E01E6A]" />
                    <h2 className="text-base font-bold font-heading text-slate-900">
                      Flagship Data Engineering Track
                    </h2>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed mb-3.5">
                    Covers SQL, Python Data Analysis, PySpark, Snowflake, AWS Glue, Airflow & Data Warehousing.
                  </p>

                  <div className="flex items-center justify-between text-xs font-bold text-slate-700 bg-white p-2.5 rounded-xl border border-slate-200/80">
                    <span>Duration: 4 Months</span>
                    <span className="text-[#1E2B88]">Flexible Deposit Option</span>
                  </div>
                </div>

                {/* Student Placement Ticker Card */}
                <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white p-4 rounded-2xl shadow-sm space-y-2.5">
                  <div className="flex items-center justify-between text-xs text-slate-300">
                    <span className="flex items-center gap-1 font-semibold text-xs">
                      <TrendingUp className="w-3.5 h-3.5 text-emerald-400" /> Recent Placement Success
                    </span>
                    <span className="text-emerald-400 font-bold text-xs">Placed @ TCS</span>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-purple-500/30 flex items-center justify-center text-xs font-bold text-white border border-purple-400/40">
                      SB
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm font-bold text-white">Data Engineer Role</p>
                      <p className="text-xs text-slate-300">Package: 8.5 LPA (Non-IT to IT Transition)</p>
                    </div>
                  </div>
                </div>

                {/* Quick Enquire Form Component Inside Hero */}
                <div className="space-y-2.5 pt-1">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-500 text-center">
                    Request a Free Callback & Demo Class
                  </p>
                  
                  <form onSubmit={(e) => e.preventDefault()} className="space-y-2.5">
                    <input 
                      type="text" 
                      placeholder="Your Full Name" 
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#1E2B88] focus:border-transparent bg-slate-50/50"
                    />
                    <input 
                      type="tel" 
                      placeholder="Phone Number (WhatsApp)" 
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#1E2B88] focus:border-transparent bg-slate-50/50"
                    />
                    <button 
                      type="submit" 
                      className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-3 rounded-xl text-xs sm:text-sm transition-all shadow-sm"
                    >
                      Book Free Live Demo Seat
                    </button>
                  </form>
                </div>

              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
