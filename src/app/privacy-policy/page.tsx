"use client";

import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ShieldCheck, Lock, FileText, ChevronRight } from "lucide-react";

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[#FAFAFC] dark:bg-[#0B0F19] text-slate-900 dark:text-slate-100 flex flex-col font-sans">
      <Navbar />

      {/* Header Banner */}
      <section className="relative pt-28 pb-16 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/20 border border-purple-400/30 text-xs font-extrabold text-purple-300 uppercase tracking-wider">
            <Lock className="w-3.5 h-3.5 text-purple-400" /> Data Privacy & Protection
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto">
            Last Updated: August 2026. This policy outlines how JVM Institute Pvt. Ltd. collects, uses, and safeguards your personal information.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-12 sm:py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 flex-1">
        
        <div className="bg-white dark:bg-slate-900 p-6 sm:p-10 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-8 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
          
          <div className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold font-heading text-slate-900 dark:text-white flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-500" /> 1. Information We Collect
            </h2>
            <p>
              JVM Institute Pvt. Ltd. (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) collects personal information when you register for a course, request counseling, download brochures, or submit an inquiry through our website.
            </p>
            <ul className="list-disc pl-6 space-y-1.5 text-slate-700 dark:text-slate-300 font-medium">
              <li>Full Name and Contact Information (Email, Phone Number, WhatsApp Number).</li>
              <li>Academic & Educational Background details provided during enrollment.</li>
              <li>Technical usage data (IP address, browser type, pages visited) via analytical cookies.</li>
            </ul>
          </div>

          <div className="space-y-3 pt-6 border-t border-slate-100 dark:border-slate-800">
            <h2 className="text-xl sm:text-2xl font-bold font-heading text-slate-900 dark:text-white">
              2. How We Use Your Information
            </h2>
            <p>
              The information collected is used strictly for legitimate educational and administrative purposes, including:
            </p>
            <ul className="list-disc pl-6 space-y-1.5 text-slate-700 dark:text-slate-300 font-medium">
              <li>Providing course details, batch schedules, fees, and syllabus materials.</li>
              <li>Processing student admissions, enrollments, and placement support activities.</li>
              <li>Sending important notifications, updates, and workshop invites.</li>
            </ul>
          </div>

          <div className="space-y-3 pt-6 border-t border-slate-100 dark:border-slate-800">
            <h2 className="text-xl sm:text-2xl font-bold font-heading text-slate-900 dark:text-white">
              3. Data Security & Confidentiality
            </h2>
            <p>
              We prioritize data protection and implement industry-standard security measures to guard against unauthorized access, disclosure, or alteration of student records. We do not sell, rent, or lease your personal contact information to third-party telemarketers.
            </p>
          </div>

          <div className="space-y-3 pt-6 border-t border-slate-100 dark:border-slate-800">
            <h2 className="text-xl sm:text-2xl font-bold font-heading text-slate-900 dark:text-white">
              4. Contact Privacy Team
            </h2>
            <p>
              If you have any questions or concerns regarding our privacy practices or wish to update your stored contact preferences, please reach out to us:
            </p>
            <div className="bg-slate-50 dark:bg-slate-800/60 p-4 rounded-2xl border border-slate-200 dark:border-slate-700 text-sm font-medium space-y-1">
              <p><strong className="text-slate-900 dark:text-white">Email:</strong> infojvminstitute@gmail.com</p>
              <p><strong className="text-slate-900 dark:text-white">Campus Helpline:</strong> +91 84462 84162</p>
              <p><strong className="text-slate-900 dark:text-white">Address:</strong> Floor 2, S.No: 82, Suman Ankur, Sahyadri Farms, Lalit Estate, Baner, Pune, Maharashtra 411045</p>
            </div>
          </div>

        </div>

        {/* Back Link */}
        <div className="text-center pt-4">
          <Link href="/" className="inline-flex items-center gap-1.5 text-sm font-bold text-[#1E2B88] dark:text-purple-400 hover:underline">
            Back to Home Page <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

      </section>

      <Footer />
    </main>
  );
}
