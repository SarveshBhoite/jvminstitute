"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  BookOpen, 
  Sparkles, 
  GraduationCap, 
  Gift, 
  PhoneCall, 
  Menu, 
  X, 
  ChevronRight,
  FileText,
  Calendar,
  Layers
} from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Banner Announcement Pill */}
      <div className="bg-gradient-to-r from-[#1E2B88] via-[#7C248C] to-[#E01E6A] text-white text-xs md:text-sm py-2 px-4 text-center font-medium flex items-center justify-center gap-2">
        <span className="bg-white/20 text-white px-2 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider">
          New Batch
        </span>
        <span>Data Engineering Offline & Online Weekend Batch Starting Soon in Pune!</span>
        <Link 
          href="/contact-us" 
          className="hidden sm:inline-flex items-center gap-1 underline underline-offset-4 hover:opacity-90 font-semibold ml-2"
        >
          Reserve Seat <ChevronRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      {/* Main Floating Glass Navbar */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white/90 backdrop-blur-md shadow-lg shadow-slate-900/5 py-3 border-b border-slate-200/80" 
          : "bg-white/70 backdrop-blur-sm py-4 border-b border-slate-100"
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Brand Logo with Glow Accent */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-xl bg-white p-1 shadow-sm border border-slate-100 transition-transform duration-300 group-hover:scale-105">
              <Image 
                src="/jvm_logo-bg.png" 
                alt="JVM Institute Logo" 
                width={56} 
                height={56}
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl md:text-2xl font-extrabold tracking-tight font-heading leading-tight text-slate-900 group-hover:text-[#1E2B88] transition-colors">
                JVM <span className="jvm-gradient-text">INSTITUTE</span>
              </span>
              <span className="text-[10px] md:text-[11px] tracking-widest uppercase font-semibold text-slate-500">
                Pune&apos;s No.1 Tech Academy
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-100/80 p-1.5 rounded-full border border-slate-200/60 shadow-inner">
            <Link 
              href="/" 
              className="px-4 py-2 text-sm font-semibold text-slate-800 rounded-full hover:bg-white hover:text-[#1E2B88] hover:shadow-sm transition-all"
            >
              Home
            </Link>
            <Link 
              href="/our-courses" 
              className="px-4 py-2 text-sm font-semibold text-slate-700 rounded-full hover:bg-white hover:text-[#1E2B88] hover:shadow-sm transition-all flex items-center gap-1.5"
            >
              <BookOpen className="w-4 h-4 text-[#7C248C]" /> Courses
            </Link>
            <Link 
              href="/data-engineering-course-in-pune" 
              className="px-4 py-2 text-sm font-bold text-[#1E2B88] bg-white shadow-sm rounded-full flex items-center gap-1.5 border border-purple-100"
            >
              <Sparkles className="w-4 h-4 text-[#E01E6A] animate-pulse" /> Data Engineering
            </Link>
            <Link 
              href="/placements" 
              className="px-4 py-2 text-sm font-semibold text-slate-700 rounded-full hover:bg-white hover:text-[#1E2B88] hover:shadow-sm transition-all flex items-center gap-1.5"
            >
              <GraduationCap className="w-4 h-4 text-emerald-600" /> Placements
            </Link>
            <Link 
              href="/refer-and-earn" 
              className="px-4 py-2 text-sm font-semibold text-slate-700 rounded-full hover:bg-white hover:text-[#1E2B88] hover:shadow-sm transition-all flex items-center gap-1.5"
            >
              <Gift className="w-4 h-4 text-amber-500" /> Refer & Earn
            </Link>
            <Link 
              href="/study-material" 
              className="px-4 py-2 text-sm font-semibold text-slate-700 rounded-full hover:bg-white hover:text-[#1E2B88] hover:shadow-sm transition-all flex items-center gap-1.5"
            >
              <FileText className="w-4 h-4 text-sky-600" /> Notes & PDFs
            </Link>
          </nav>

          {/* Desktop Right CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <Link 
              href="/download-brochure" 
              className="text-xs font-bold text-slate-700 hover:text-[#1E2B88] px-3 py-2 rounded-lg border border-slate-200 hover:border-slate-300 transition-all"
            >
              Syllabus PDF
            </Link>
            <Link 
              href="/contact-us" 
              className="jvm-gradient-bg text-white px-5 py-2.5 rounded-full text-sm font-bold shadow-md shadow-purple-900/20 hover:opacity-95 hover:shadow-lg hover:shadow-purple-900/30 transition-all flex items-center gap-2"
            >
              <PhoneCall className="w-4 h-4" /> Enquire Now
            </Link>
          </div>

          {/* Mobile Menu Trigger Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 rounded-xl bg-slate-100 text-slate-800 hover:bg-slate-200 transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-4 pb-6 space-y-3 shadow-xl">
            <Link 
              href="/" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-2.5 rounded-lg text-base font-semibold text-slate-800 hover:bg-slate-50"
            >
              Home
            </Link>
            <Link 
              href="/data-engineering-course-in-pune" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-2.5 rounded-lg text-base font-bold text-[#1E2B88] bg-purple-50 flex items-center justify-between"
            >
              <span className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#E01E6A]" /> Data Engineering Course
              </span>
              <span className="text-xs font-extrabold bg-[#1E2B88] text-white px-2 py-0.5 rounded-full">Top Ranked</span>
            </Link>
            <Link 
              href="/our-courses" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-2.5 rounded-lg text-base font-semibold text-slate-800 hover:bg-slate-50 flex items-center gap-2"
            >
              <BookOpen className="w-4 h-4 text-[#7C248C]" /> All Courses
            </Link>
            <Link 
              href="/placements" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-2.5 rounded-lg text-base font-semibold text-slate-800 hover:bg-slate-50 flex items-center gap-2"
            >
              <GraduationCap className="w-4 h-4 text-emerald-600" /> Placements Record
            </Link>
            <Link 
              href="/refer-and-earn" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-2.5 rounded-lg text-base font-semibold text-slate-800 hover:bg-slate-50 flex items-center gap-2"
            >
              <Gift className="w-4 h-4 text-amber-500" /> Refer & Earn Money
            </Link>
            <Link 
              href="/study-material" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-2.5 rounded-lg text-base font-semibold text-slate-800 hover:bg-slate-50 flex items-center gap-2"
            >
              <FileText className="w-4 h-4 text-sky-600" /> Free Notes & PDFs
            </Link>
            <Link 
              href="/events" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-2.5 rounded-lg text-base font-semibold text-slate-800 hover:bg-slate-50 flex items-center gap-2"
            >
              <Calendar className="w-4 h-4 text-purple-600" /> Workshops & Events
            </Link>
            <Link 
              href="/blog" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-2.5 rounded-lg text-base font-semibold text-slate-800 hover:bg-slate-50 flex items-center gap-2"
            >
              <Layers className="w-4 h-4 text-indigo-600" /> Technical Blog
            </Link>

            <div className="pt-2 grid grid-cols-2 gap-2">
              <Link 
                href="/download-brochure" 
                onClick={() => setMobileMenuOpen(false)}
                className="text-center py-2.5 px-3 border border-slate-300 rounded-xl text-sm font-bold text-slate-700 hover:bg-slate-50"
              >
                Brochure PDF
              </Link>
              <Link 
                href="/contact-us" 
                onClick={() => setMobileMenuOpen(false)}
                className="jvm-gradient-bg text-center py-2.5 px-3 rounded-xl text-sm font-bold text-white shadow-md"
              >
                Enquire Now
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
