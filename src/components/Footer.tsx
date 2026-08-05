"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  MapPin, 
  Phone, 
  Mail, 
  ShieldCheck, 
  Heart
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 pt-16 pb-12 border-t border-slate-900 relative overflow-hidden">
      
      {/* Top Subtle Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Footer Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-14 border-b border-slate-900">
          
          {/* Column 1: Brand Info (2 Cols wide on desktop) */}
          <div className="lg:col-span-2 space-y-6">
            
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-white p-1 flex items-center justify-center overflow-hidden shadow-lg shrink-0">
                <Image
                  src="/jvm logo.jpeg"
                  alt="JVM Institute Logo"
                  width={44}
                  height={44}
                  className="object-contain rounded-xl"
                />
              </div>
              <div>
                <span className="text-xl font-extrabold text-white tracking-tight font-heading block">
                  JVM Institute
                </span>
                <span className="text-xs text-purple-400 font-bold uppercase tracking-wider">
                  Data Engineering & Tech Excellence
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed pr-4">
              Pune&apos;s leading training institute empowering engineers, non-IT graduates, and career changers with practical PySpark, Databricks, Cloud ETL, and SQL skills. ISO Certified 9001:2015.
            </p>

            <div className="flex items-center gap-3 pt-1">
              {/* Instagram */}
              <a 
                href="https://www.instagram.com/jvm_institute.pvt.ltd/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-white hover:bg-[#E01E6A] hover:border-transparent transition-all shadow-md group"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5 fill-current group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              {/* YouTube */}
              <a 
                href="https://www.youtube.com/@jvminstitutepvtltd" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-white hover:bg-red-600 hover:border-transparent transition-all shadow-md group"
                aria-label="YouTube"
              >
                <svg className="w-5 h-5 fill-current group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              {/* LinkedIn */}
              <a 
                href="https://www.linkedin.com/company/102736578/admin/dashboard/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-white hover:bg-blue-600 hover:border-transparent transition-all shadow-md group"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5 fill-current group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>


          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-extrabold text-white uppercase tracking-wider font-heading">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-sm font-medium">
              <li>
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/about-us" className="hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/our-courses" className="hover:text-white transition-colors">All Courses</Link>
              </li>
              <li>
                <Link href="/placements" className="hover:text-white transition-colors">Placements Wall</Link>
              </li>
              <li>
                <Link href="/refer-and-earn" className="hover:text-white transition-colors">Refer & Earn</Link>
              </li>
              <li>
                <Link href="/study-material" className="hover:text-white transition-colors">Study Material Store</Link>
              </li>
              <li>
                <Link href="/events" className="hover:text-white transition-colors">Workshops & Events</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Top Ranking Courses & SEO Pages */}
          <div className="space-y-4">
            <h4 className="text-sm font-extrabold text-white uppercase tracking-wider font-heading">
              Top Ranked Programs
            </h4>
            <ul className="space-y-2.5 text-sm font-medium">
              <li>
                <Link href="/data-engineering-course-in-pune" className="text-purple-300 hover:text-white font-semibold flex items-center gap-1">
                  Data Engineering in Pune <span className="text-[10px] bg-purple-900 text-purple-200 px-1.5 py-0.5 rounded font-extrabold">Top 3</span>
                </Link>
              </li>
              <li>
                <Link href="/learn-python-for-data-analysis" className="hover:text-white transition-colors">
                  Learn Python for Data Analysis
                </Link>
              </li>
              <li>
                <Link href="/why-should-i-learn-python-for-data-analysis" className="hover:text-white transition-colors">
                  Why Learn Python Guide
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white transition-colors">
                  Engineering Blog & Articles
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Office Location */}
          <div className="space-y-4">
            <h4 className="text-sm font-extrabold text-white uppercase tracking-wider font-heading">
              Contact Campus
            </h4>
            <div className="space-y-3 text-xs font-semibold text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                <span>Floor 2, S.No: 82, Suman Ankur, Sahyadri Farms, Lalit Estate, Baner, Pune, Maharashtra 411045</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href="tel:+918446284162" className="hover:text-white transition-colors">+91 84462 84162</a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#E01E6A] shrink-0" />
                <a href="mailto:infojvminstitute@gmail.com" className="hover:text-white transition-colors">infojvminstitute@gmail.com</a>
              </div>
              <div className="pt-2 border-t border-slate-900 flex items-center gap-1.5 text-[11px] text-slate-400">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>ISO 9001:2015 Registered Institute</span>
              </div>
            </div>
          </div>


        </div>

        {/* SEO Disclaimer & Copyright Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-medium text-slate-500 text-center md:text-left">
          <p>
            © {new Date().getFullYear()} JVM Institute Pvt Ltd. All rights reserved. Registered under Government of India Skill Mission.
          </p>

          <div className="flex items-center gap-4">
            <Link href="/privacy-policy" className="hover:text-slate-300 transition-colors">Privacy Policy</Link>
            <span>•</span>
            <Link href="/terms-and-conditions" className="hover:text-slate-300 transition-colors">Terms of Use</Link>
            <span>•</span>
            <span className="flex items-center gap-1 text-slate-400">
              Made with <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" /> in Pune
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
