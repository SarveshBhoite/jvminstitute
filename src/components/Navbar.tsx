"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
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
  FileCode2,
  HelpCircle,
  Sun,
  Moon
} from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [coursesDropdownOpen, setCoursesDropdownOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
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
      <div className="bg-gradient-to-r from-[#1E2B88] via-[#7C248C] to-[#E01E6A] dark:from-[#3730A3] dark:via-[#6B21A8] dark:to-[#BE185D] text-white text-xs md:text-sm py-2 px-4 text-center font-medium flex items-center justify-center gap-2">
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
          ? "bg-white/95 dark:bg-[#0F172A]/95 backdrop-blur-md shadow-md py-3 border-b border-slate-200 dark:border-slate-800" 
          : "bg-white/90 dark:bg-[#0B0F19]/90 backdrop-blur-sm py-4 border-b border-slate-100 dark:border-slate-800/60"
      }`}>
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          
          {/* Larger Full Brand Logo with Dark Theme Background Pill */}
          <Link href="/" className="flex items-center shrink-0 group">
            <div className="relative h-12 md:h-14 w-auto flex items-center bg-white dark:bg-white/95 px-3 py-1.5 rounded-2xl border border-transparent dark:border-slate-700 shadow-xs transition-transform duration-200 group-hover:scale-[1.02]">
              <Image 
                src="/jvm_logo-bg.png" 
                alt="JVM Institute Logo" 
                width={260} 
                height={65}
                className="h-10 md:h-12 w-auto object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-100/90 dark:bg-slate-800/80 p-1.5 rounded-full border border-slate-200/70 dark:border-slate-700/60">
            {/* Active Pill: Home */}
            <Link 
              href="/" 
              className={`px-4 py-2 text-sm font-bold rounded-full transition-all whitespace-nowrap ${
                pathname === "/" 
                  ? "bg-gradient-to-r from-[#1E2B88] to-[#7C248C] dark:from-[#4F46E5] dark:to-[#9333EA] text-white shadow-sm" 
                  : "text-slate-700 dark:text-slate-200 hover:bg-white dark:hover:bg-slate-700 hover:text-[#1E2B88] dark:hover:text-white"
              }`}
            >
              Home
            </Link>

            {/* Comprehensive Courses Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setCoursesDropdownOpen(true)}
              onMouseLeave={() => setCoursesDropdownOpen(false)}
            >
              <button 
                className={`px-4 py-2 text-sm font-semibold rounded-full transition-all flex items-center gap-1.5 whitespace-nowrap ${
                  pathname.includes("/courses") || 
                  pathname === "/data-engineering-course-in-pune" ||
                  pathname === "/our-courses"
                    ? "bg-white dark:bg-slate-700 text-[#1E2B88] dark:text-purple-300 shadow-xs font-bold"
                    : "text-slate-700 dark:text-slate-200 hover:bg-white dark:hover:bg-slate-700 hover:text-[#1E2B88] dark:hover:text-white"
                }`}
              >
                <BookOpen className="w-4 h-4 text-[#7C248C] dark:text-purple-400" /> 
                Courses 
                <ChevronDown className="w-3.5 h-3.5 opacity-60" />
              </button>

              {coursesDropdownOpen && (
                <div className="absolute top-full left-0 mt-1 w-80 bg-white dark:bg-[#0F172A] rounded-2xl p-2.5 shadow-2xl border border-slate-200/90 dark:border-slate-800 space-y-1.5 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="px-3 py-1 text-[11px] font-extrabold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                    Flagship & Training Tracks
                  </div>

                  {/* 1. Top Ranked Data Engineering */}
                  <Link 
                    href="/data-engineering-course-in-pune" 
                    className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-purple-50 dark:hover:bg-slate-800/80 transition-colors group border border-transparent hover:border-purple-100 dark:hover:border-slate-700"
                  >
                    <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-950/60 text-[#1E2B88] dark:text-purple-300 shrink-0 mt-0.5">
                      <Sparkles className="w-4 h-4 text-[#E01E6A] dark:text-pink-400" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-slate-900 dark:text-slate-100 group-hover:text-[#1E2B88] dark:group-hover:text-purple-300">
                          Data Engineering in Pune
                        </span>
                        <span className="text-[10px] bg-[#1E2B88] text-white px-1.5 py-0.2 rounded font-extrabold">Top 3</span>
                      </div>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-1">PySpark, Databricks, AWS & Snowflake</p>
                    </div>
                  </Link>

                  {/* 1b. Data Engineering with GenAI */}
                  <Link 
                    href="/data-engineering-with-genai-course-in-pune" 
                    className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-purple-50 dark:hover:bg-slate-800/80 transition-colors group border border-transparent hover:border-purple-100 dark:hover:border-slate-700"
                  >
                    <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-950/60 text-[#7C248C] dark:text-purple-300 shrink-0 mt-0.5">
                      <Sparkles className="w-4 h-4 text-[#7C248C] dark:text-purple-400" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-slate-900 dark:text-slate-100 group-hover:text-[#1E2B88] dark:group-hover:text-purple-300">
                          Data Engineering with GenAI
                        </span>
                        <span className="text-[10px] bg-[#7C248C] text-white px-1.5 py-0.2 rounded font-extrabold">New AI</span>
                      </div>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-1">LLMs, Vector DBs, PySpark & Databricks</p>
                    </div>
                  </Link>

                  {/* 2. Learn Python for Data Analysis */}
                  <Link 
                    href="/learn-python-for-data-analysis" 
                    className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/80 transition-colors group"
                  >
                    <div className="p-2 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 text-[#1E2B88] dark:text-indigo-300 shrink-0 mt-0.5">
                      <Code2 className="w-4 h-4 text-[#7C248C] dark:text-purple-400" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-slate-900 dark:text-slate-100 group-hover:text-[#1E2B88] dark:group-hover:text-purple-300">
                        Learn Python for Data Analysis
                      </span>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-1">Pandas, NumPy, SQL & EDA Projects</p>
                    </div>
                  </Link>

                  {/* 3. Why Learn Python Guide */}
                  <Link 
                    href="/why-should-i-learn-python-for-data-analysis" 
                    className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/80 transition-colors group"
                  >
                    <div className="p-2 rounded-lg bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5">
                      <HelpCircle className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-slate-900 dark:text-slate-100 group-hover:text-[#1E2B88] dark:group-hover:text-purple-300">
                        Why Learn Python for Data Analysis?
                      </span>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-1">Career roadmap, salary & job market</p>
                    </div>
                  </Link>

                  {/* Gen AI Course */}
                  <Link 
                    href="/gen-ai-course-in-pune" 
                    className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/80 transition-colors group"
                  >
                    <div className="p-2 rounded-lg bg-purple-50 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400 shrink-0 mt-0.5">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-slate-900 dark:text-slate-100 group-hover:text-[#1E2B88] dark:group-hover:text-purple-300">
                        Gen AI Course
                      </span>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-1">ChatGPT, LangChain, RAG & AI Agents</p>
                    </div>
                  </Link>

                  {/* Advanced AI & ML Course */}
                  <Link 
                    href="/advanced-ai-ml-course-in-pune" 
                    className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/80 transition-colors group"
                  >
                    <div className="p-2 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5">
                      <Code2 className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-slate-900 dark:text-slate-100 group-hover:text-[#1E2B88] dark:group-hover:text-purple-300">
                        Advanced AI & Machine Learning
                      </span>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-1">PyTorch, YOLOv8, BERT & MLOps</p>
                    </div>
                  </Link>
                  <div className="pt-1 border-t border-slate-100 dark:border-slate-800">
                    <Link 
                      href="/our-courses" 
                      className="flex items-center justify-between p-2 rounded-xl text-xs font-bold text-[#1E2B88] dark:text-purple-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
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
                  ? "bg-white dark:bg-slate-700 text-emerald-700 dark:text-emerald-300 shadow-xs font-bold" 
                  : "text-slate-700 dark:text-slate-200 hover:bg-white dark:hover:bg-slate-700 hover:text-[#1E2B88] dark:hover:text-white"
              }`}
            >
              <GraduationCap className="w-4 h-4 text-emerald-600 dark:text-emerald-400" /> Placements
            </Link>

            {/* Refer & Earn */}
            <Link 
              href="/refer-and-earn" 
              className={`px-4 py-2 text-sm font-semibold rounded-full transition-all flex items-center gap-1.5 whitespace-nowrap ${
                pathname === "/refer-and-earn" 
                  ? "bg-white dark:bg-slate-700 text-amber-600 dark:text-amber-300 shadow-xs font-bold" 
                  : "text-slate-700 dark:text-slate-200 hover:bg-white dark:hover:bg-slate-700 hover:text-[#1E2B88] dark:hover:text-white"
              }`}
            >
              <Gift className="w-4 h-4 text-amber-500 dark:text-amber-400" /> Refer & Earn
            </Link>

            {/* Notes & PDFs */}
            <Link 
              href="/study-material" 
              className={`px-4 py-2 text-sm font-semibold rounded-full transition-all flex items-center gap-1.5 whitespace-nowrap ${
                pathname === "/study-material" 
                  ? "bg-white dark:bg-slate-700 text-sky-600 dark:text-sky-300 shadow-xs font-bold" 
                  : "text-slate-700 dark:text-slate-200 hover:bg-white dark:hover:bg-slate-700 hover:text-[#1E2B88] dark:hover:text-white"
              }`}
            >
              <FileText className="w-4 h-4 text-sky-600 dark:text-sky-400" /> Notes & PDFs
            </Link>

            {/* About Us */}
            <Link 
              href="/about-us" 
              className={`px-4 py-2 text-sm font-semibold rounded-full transition-all flex items-center gap-1.5 whitespace-nowrap ${
                pathname === "/about-us" 
                  ? "bg-white dark:bg-slate-700 text-purple-600 dark:text-purple-300 shadow-xs font-bold" 
                  : "text-slate-700 dark:text-slate-200 hover:bg-white dark:hover:bg-slate-700 hover:text-[#1E2B88] dark:hover:text-white"
              }`}
            >
              About Us
            </Link>

            {/* Contact Us */}
            <Link 
              href="/contact-us" 
              className={`px-4 py-2 text-sm font-semibold rounded-full transition-all flex items-center gap-1.5 whitespace-nowrap ${
                pathname === "/contact-us" 
                  ? "bg-white dark:bg-slate-700 text-purple-600 dark:text-purple-300 shadow-xs font-bold" 
                  : "text-slate-700 dark:text-slate-200 hover:bg-white dark:hover:bg-slate-700 hover:text-[#1E2B88] dark:hover:text-white"
              }`}
            >
              Contact Us
            </Link>
          </nav>

          {/* Desktop Right CTAs + Theme Toggle */}
          <div className="hidden xl:flex items-center gap-3 shrink-0">
            {/* Dark Mode Toggle Button */}
            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-amber-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors border border-slate-200 dark:border-slate-700"
                aria-label="Toggle Dark / Light Theme"
                title={`Switch to ${theme === "dark" ? "Light" : "Dark"} Mode`}
              >
                {theme === "dark" ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
              </button>
            )}

            <Link 
              href="/download-brochure" 
              className="text-xs font-bold text-slate-700 dark:text-slate-300 hover:text-[#1E2B88] dark:hover:text-white px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 transition-all whitespace-nowrap"
            >
              Syllabus PDF
            </Link>
            <Link 
              href="/enroll" 
              className="jvm-gradient-bg text-white px-5 py-2.5 rounded-full text-xs md:text-sm font-bold shadow-md hover:opacity-95 transition-all flex items-center gap-2 whitespace-nowrap cursor-pointer"
            >
              <PhoneCall className="w-4 h-4" /> Enroll Now
            </Link>
          </div>

          {/* Mobile Right Bar including Theme Toggle & Drawer Button */}
          <div className="flex items-center gap-2 lg:hidden">
            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-amber-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors border border-slate-200 dark:border-slate-700"
                aria-label="Toggle Theme"
              >
                {theme === "dark" ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
              </button>
            )}

            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-100 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white dark:bg-[#0F172A] border-b border-slate-200 dark:border-slate-800 px-4 pt-4 pb-6 space-y-3 shadow-xl max-h-[85vh] overflow-y-auto">
            <Link 
              href="/" 
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-4 py-2.5 rounded-lg text-base font-semibold ${
                pathname === "/" 
                  ? "bg-purple-50 dark:bg-purple-950/60 text-[#1E2B88] dark:text-purple-300 font-bold" 
                  : "text-slate-800 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800"
              }`}
            >
              Home
            </Link>

            <div className="px-4 py-1 text-xs font-extrabold uppercase tracking-wider text-slate-400 dark:text-slate-500">
              Courses & Programs
            </div>

            <Link 
              href="/data-engineering-course-in-pune" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-2.5 rounded-lg text-base font-bold text-[#1E2B88] dark:text-purple-300 bg-purple-50 dark:bg-purple-950/40 flex items-center justify-between"
            >
              <span className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#E01E6A] dark:text-pink-400" /> Data Engineering Course
              </span>
              <span className="text-xs font-extrabold bg-[#1E2B88] text-white px-2 py-0.5 rounded-full">Top Ranked</span>
            </Link>

            <Link 
              href="/our-courses" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-2.5 rounded-lg text-base font-semibold text-slate-800 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 flex items-center gap-2 border-t border-slate-100 dark:border-slate-800 pt-3"
            >
              <BookOpen className="w-4 h-4 text-[#7C248C] dark:text-purple-400" /> All Courses Catalog
            </Link>

            <Link 
              href="/placements" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-2.5 rounded-lg text-base font-semibold text-slate-800 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 flex items-center gap-2"
            >
              <GraduationCap className="w-4 h-4 text-emerald-600 dark:text-emerald-400" /> Placements Record
            </Link>

            <Link 
              href="/refer-and-earn" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-2.5 rounded-lg text-base font-semibold text-slate-800 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 flex items-center gap-2"
            >
              <Gift className="w-4 h-4 text-amber-500 dark:text-amber-400" /> Refer & Earn Money
            </Link>

            <Link 
              href="/study-material" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-2.5 rounded-lg text-base font-semibold text-slate-800 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 flex items-center gap-2"
            >
              <FileText className="w-4 h-4 text-sky-600 dark:text-sky-400" /> Free Notes & PDFs
            </Link>

            <Link 
              href="/events" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-2.5 rounded-lg text-base font-semibold text-slate-800 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 flex items-center gap-2"
            >
              <Calendar className="w-4 h-4 text-purple-600 dark:text-purple-400" /> Workshops & Events
            </Link>

            <Link 
              href="/blog" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-2.5 rounded-lg text-base font-semibold text-slate-800 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 flex items-center gap-2"
            >
              <Layers className="w-4 h-4 text-indigo-600 dark:text-indigo-400" /> Technical Blog
            </Link>

            <Link 
              href="/about-us" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-2.5 rounded-lg text-base font-semibold text-slate-800 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 flex items-center gap-2"
            >
              About Us
            </Link>

            <Link 
              href="/contact-us" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-2.5 rounded-lg text-base font-semibold text-slate-800 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 flex items-center gap-2"
            >
              Contact Us
            </Link>

            <div className="pt-2 grid grid-cols-2 gap-2">
              <Link 
                href="/download-brochure" 
                onClick={() => setMobileMenuOpen(false)}
                className="text-center py-2.5 px-3 border border-slate-300 dark:border-slate-700 rounded-xl text-sm font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800"
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
