"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { 
  BookOpen, 
  GraduationCap, 
  Gift, 
  PhoneCall, 
  Menu, 
  X, 
  ChevronRight,
  ChevronDown,
  FileText,
  Calendar,
  Layers,
  Sparkles,
  Code2,
  BrainCircuit,
  FileCode2,
  HelpCircle
} from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [coursesDropdownOpen, setCoursesDropdownOpen] = useState(false);

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

      {/* Main Wide Floating Navbar */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white/95 backdrop-blur-md shadow-md py-3 border-b border-slate-200" 
          : "bg-white/90 backdrop-blur-sm py-4 border-b border-slate-100"
      }`}>
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          
          {/* Larger Full Brand Logo */}
          <Link href="/" className="flex items-center shrink-0 group">
            <div className="relative h-12 md:h-14 w-auto flex items-center">
              <Image 
                src="/jvm_logo-bg.png" 
                alt="JVM Institute Logo" 
                width={260} 
                height={65}
                className="h-11 md:h-13 w-auto object-contain transition-transform duration-200 group-hover:scale-[1.02]"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-100/90 p-1.5 rounded-full border border-slate-200/70">
            {/* Active Pill: Home */}
            <Link 
              href="/" 
              className={`px-4 py-2 text-sm font-bold rounded-full transition-all whitespace-nowrap ${
                pathname === "/" 
                  ? "bg-gradient-to-r from-[#1E2B88] to-[#7C248C] text-white shadow-sm" 
                  : "text-slate-700 hover:bg-white hover:text-[#1E2B88]"
              }`}
            >
              Home
            </Link>

            {/* Comprehensive Courses Dropdown showing ALL existing course pages */}
            <div 
              className="relative"
              onMouseEnter={() => setCoursesDropdownOpen(true)}
              onMouseLeave={() => setCoursesDropdownOpen(false)}
            >
              <button 
                className={`px-4 py-2 text-sm font-semibold rounded-full transition-all flex items-center gap-1.5 whitespace-nowrap ${
                  pathname.includes("/courses") || 
                  pathname === "/data-engineering-course-in-pune" ||
                  pathname === "/learn-python-for-data-analysis" ||
                  pathname === "/why-should-i-learn-python-for-data-analysis" ||
                  pathname === "/how-to-read-xml-files-into-python"
                    ? "bg-white text-[#1E2B88] shadow-xs font-bold"
                    : "text-slate-700 hover:bg-white hover:text-[#1E2B88]"
                }`}
              >
                <BookOpen className="w-4 h-4 text-[#7C248C]" /> 
                Courses 
                <ChevronDown className="w-3.5 h-3.5 opacity-60" />
              </button>

              {coursesDropdownOpen && (
                <div className="absolute top-full left-0 mt-1 w-80 bg-white rounded-2xl p-2.5 shadow-2xl border border-slate-200/90 space-y-1.5 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="px-3 py-1 text-[11px] font-extrabold uppercase tracking-wider text-slate-400">
                    Flagship & Training Tracks
                  </div>

                  {/* 1. Top Ranked Data Engineering */}
                  <Link 
                    href="/data-engineering-course-in-pune" 
                    className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-purple-50 transition-colors group border border-transparent hover:border-purple-100"
                  >
                    <div className="p-2 rounded-lg bg-purple-100 text-[#1E2B88] shrink-0 mt-0.5">
                      <Sparkles className="w-4 h-4 text-[#E01E6A]" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-slate-900 group-hover:text-[#1E2B88]">
                          Data Engineering in Pune
                        </span>
                        <span className="text-[10px] bg-[#1E2B88] text-white px-1.5 py-0.2 rounded font-extrabold">Top 3</span>
                      </div>
                      <p className="text-[11px] text-slate-500 line-clamp-1">PySpark, Databricks, AWS & Snowflake</p>
                    </div>
                  </Link>

                  {/* 2. Learn Python for Data Analysis */}
                  <Link 
                    href="/learn-python-for-data-analysis" 
                    className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors group"
                  >
                    <div className="p-2 rounded-lg bg-indigo-50 text-[#1E2B88] shrink-0 mt-0.5">
                      <Code2 className="w-4 h-4 text-[#7C248C]" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-slate-900 group-hover:text-[#1E2B88]">
                        Learn Python for Data Analysis
                      </span>
                      <p className="text-[11px] text-slate-500 line-clamp-1">Pandas, NumPy, SQL & EDA Projects</p>
                    </div>
                  </Link>

                  {/* 3. Why Learn Python Guide */}
                  <Link 
                    href="/why-should-i-learn-python-for-data-analysis" 
                    className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors group"
                  >
                    <div className="p-2 rounded-lg bg-amber-50 text-amber-600 shrink-0 mt-0.5">
                      <HelpCircle className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-slate-900 group-hover:text-[#1E2B88]">
                        Why Learn Python for Data Analysis?
                      </span>
                      <p className="text-[11px] text-slate-500 line-clamp-1">Career roadmap, salary & job market</p>
                    </div>
                  </Link>

                  {/* 4. How to Read XML Files into Python */}
                  <Link 
                    href="/how-to-read-xml-files-into-python" 
                    className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors group"
                  >
                    <div className="p-2 rounded-lg bg-emerald-50 text-emerald-600 shrink-0 mt-0.5">
                      <FileCode2 className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-slate-900 group-hover:text-[#1E2B88]">
                        Read XML Files into Python
                      </span>
                      <p className="text-[11px] text-slate-500 line-clamp-1">Pandas read_xml & ElementTree tutorial</p>
                    </div>
                  </Link>

                  <div className="pt-1 border-t border-slate-100">
                    <Link 
                      href="/our-courses" 
                      className="flex items-center justify-between p-2 rounded-xl text-xs font-bold text-[#1E2B88] hover:bg-slate-50 transition-colors"
                    >
                      <span>Explore All Courses Catalog</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Placements */}
            <Link 
              href="/placements" 
              className={`px-4 py-2 text-sm font-semibold rounded-full transition-all flex items-center gap-1.5 whitespace-nowrap ${
                pathname === "/placements" 
                  ? "bg-white text-emerald-700 shadow-xs font-bold" 
                  : "text-slate-700 hover:bg-white hover:text-[#1E2B88]"
              }`}
            >
              <GraduationCap className="w-4 h-4 text-emerald-600" /> Placements
            </Link>

            {/* Refer & Earn */}
            <Link 
              href="/refer-and-earn" 
              className={`px-4 py-2 text-sm font-semibold rounded-full transition-all flex items-center gap-1.5 whitespace-nowrap ${
                pathname === "/refer-and-earn" 
                  ? "bg-white text-amber-600 shadow-xs font-bold" 
                  : "text-slate-700 hover:bg-white hover:text-[#1E2B88]"
              }`}
            >
              <Gift className="w-4 h-4 text-amber-500" /> Refer & Earn
            </Link>

            {/* Notes & PDFs */}
            <Link 
              href="/study-material" 
              className={`px-4 py-2 text-sm font-semibold rounded-full transition-all flex items-center gap-1.5 whitespace-nowrap ${
                pathname === "/study-material" 
                  ? "bg-white text-sky-600 shadow-xs font-bold" 
                  : "text-slate-700 hover:bg-white hover:text-[#1E2B88]"
              }`}
            >
              <FileText className="w-4 h-4 text-sky-600" /> Notes & PDFs
            </Link>
          </nav>

          {/* Desktop Right CTAs */}
          <div className="hidden xl:flex items-center gap-3 shrink-0">
            <Link 
              href="/download-brochure" 
              className="text-xs font-bold text-slate-700 hover:text-[#1E2B88] px-3.5 py-2.5 rounded-xl border border-slate-200 hover:border-slate-300 transition-all whitespace-nowrap"
            >
              Syllabus PDF
            </Link>
            <Link 
              href="/contact-us" 
              className="jvm-gradient-bg text-white px-5 py-2.5 rounded-full text-xs md:text-sm font-bold shadow-md hover:opacity-95 transition-all flex items-center gap-2 whitespace-nowrap"
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
          <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-4 pb-6 space-y-3 shadow-xl max-h-[85vh] overflow-y-auto">
            <Link 
              href="/" 
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-4 py-2.5 rounded-lg text-base font-semibold ${
                pathname === "/" ? "bg-purple-50 text-[#1E2B88] font-bold" : "text-slate-800 hover:bg-slate-50"
              }`}
            >
              Home
            </Link>

            <div className="px-4 py-1 text-xs font-extrabold uppercase tracking-wider text-slate-400">
              Courses & Programs
            </div>

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
              href="/learn-python-for-data-analysis" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-2 rounded-lg text-sm font-semibold text-slate-800 hover:bg-slate-50"
            >
              Learn Python for Data Analysis
            </Link>

            <Link 
              href="/why-should-i-learn-python-for-data-analysis" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-2 rounded-lg text-sm font-semibold text-slate-800 hover:bg-slate-50"
            >
              Why Learn Python Guide
            </Link>

            <Link 
              href="/how-to-read-xml-files-into-python" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-2 rounded-lg text-sm font-semibold text-slate-800 hover:bg-slate-50"
            >
              Read XML Files into Python
            </Link>

            <Link 
              href="/our-courses" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-2.5 rounded-lg text-base font-semibold text-slate-800 hover:bg-slate-50 flex items-center gap-2 border-t border-slate-100 pt-3"
            >
              <BookOpen className="w-4 h-4 text-[#7C248C]" /> All Courses Catalog
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
