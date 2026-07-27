"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  MapPin, 
  Phone, 
  Mail, 
  ShieldCheck, 
  Heart,
  Video
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
              <a 
                href="https://www.instagram.com/jvm_institute" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-white hover:bg-[#E01E6A] hover:border-transparent transition-all text-xs font-bold"
                aria-label="Instagram"
              >
                IG
              </a>
              <a 
                href="https://www.facebook.com/jvminstitutepune/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-white hover:bg-blue-600 hover:border-transparent transition-all text-xs font-bold"
                aria-label="Facebook"
              >
                fb
              </a>
              <a 
                href="https://www.youtube.com/embed/OlRm6aXmfdg" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-white hover:bg-red-600 hover:border-transparent transition-all text-xs font-bold flex items-center gap-1"
                aria-label="YouTube"
              >
                <Video className="w-4 h-4" />
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
                <span>JVM Institute, Karve Road, Pune, Maharashtra 411038</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href="tel:+919876543210" className="hover:text-white transition-colors">+91 98765 43210</a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#E01E6A] shrink-0" />
                <a href="mailto:info@jvminstitute.com" className="hover:text-white transition-colors">info@jvminstitute.com</a>
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
