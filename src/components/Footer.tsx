"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  Phone, 
  Mail, 
  MapPin, 
  ArrowRight, 
  Video
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-slate-800">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white p-1 rounded-xl flex items-center justify-center">
                <Image 
                  src="/jvm_logo-bg.png" 
                  alt="JVM Institute Logo" 
                  width={48} 
                  height={48} 
                  className="object-contain" 
                />
              </div>
              <div>
                <span className="text-2xl font-extrabold text-white tracking-tight font-heading">
                  JVM <span className="jvm-gradient-text">INSTITUTE</span>
                </span>
                <p className="text-[11px] text-slate-400 font-semibold tracking-wider uppercase">
                  Pune&apos;s Premier Tech Academy
                </p>
              </div>
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              JVM Institute is Pune&apos;s top-ranked IT training academy providing practical Data Engineering, Python, SQL, Cloud & PySpark courses with guaranteed placement assistance.
            </p>

            {/* Social Media Links from User Request */}
            <div className="flex items-center gap-3 pt-2">
              <a 
                href="https://www.linkedin.com/company/jvm-institute-pune/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-white hover:bg-[#1E2B88] hover:border-transparent transition-all text-xs font-bold"
                aria-label="LinkedIn"
              >
                in
              </a>
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
                <Link href="/refer-and-earn" className="text-amber-400 font-bold hover:underline">Refer & Earn</Link>
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
                <Link href="/how-to-read-xml-files-into-python" className="hover:text-white transition-colors">
                  Read XML Files into Python
                </Link>
              </li>
              <li>
                <Link href="/download-brochure" className="hover:text-white transition-colors">
                  Download Course Syllabus
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white transition-colors">
                  Tech Knowledge Hub
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Campus Info */}
          <div className="space-y-4">
            <h4 className="text-sm font-extrabold text-white uppercase tracking-wider font-heading">
              Contact & Campus
            </h4>
            <div className="space-y-3 text-xs text-[#94a3b8]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#E01E6A] shrink-0 mt-0.5" />
                <span>JVM Institute Campus, Karve Nagar / Deccan, Pune, Maharashtra 411052</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#7C248C] shrink-0" />
                <span className="font-semibold text-slate-200">+91 98765 43210 / +91 88888 77777</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                <span className="text-slate-300">contact@jvminstitute.com</span>
              </div>
            </div>

            <div className="pt-2">
              <Link 
                href="/contact-us"
                className="w-full bg-slate-900 border border-slate-700 hover:border-white text-white text-xs font-bold py-2.5 px-3 rounded-xl flex items-center justify-center gap-2 transition-all"
              >
                Campus Location & Inquiry <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} JVM Institute Pune. All Rights Reserved. ISO 9001:2015 Certified Academy.</p>
          <div className="flex items-center gap-6">
            <Link href="/contact-us" className="hover:text-slate-400">Privacy Policy</Link>
            <Link href="/contact-us" className="hover:text-slate-400">Terms of Service</Link>
            <Link href="/admin" className="text-slate-600 hover:text-slate-400">Admin Login</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
