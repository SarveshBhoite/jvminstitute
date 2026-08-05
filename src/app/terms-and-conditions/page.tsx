"use client";

import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FileText, ShieldAlert, ChevronRight } from "lucide-react";

export default function TermsAndConditionsPage() {
  return (
    <main className="min-h-screen bg-[#FAFAFC] dark:bg-[#0B0F19] text-slate-900 dark:text-slate-100 flex flex-col font-sans">
      <Navbar />

      {/* Header Banner */}
      <section className="relative pt-28 pb-16 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-xs font-extrabold text-blue-300 uppercase tracking-wider">
            <FileText className="w-3.5 h-3.5 text-blue-400" /> Student Guidelines & Regulations
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight">
            Terms & Conditions
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto">
            Last Updated: August 2026. Please read these terms governing enrollment, training, and services at JVM Institute.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-12 sm:py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 flex-1">
        
        <div className="bg-white dark:bg-slate-900 p-6 sm:p-10 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-8 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
          
          <div className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold font-heading text-slate-900 dark:text-white flex items-center gap-2">
              <ShieldAlert className="w-5 h-5 text-purple-500" /> 1. Course Enrollment & Admissions
            </h2>
            <p>
              By enrolling in any offline or online program at JVM Institute Pvt. Ltd., students agree to adhere to institute policies, code of conduct, and academic guidelines provided during admission.
            </p>
          </div>

          <div className="space-y-3 pt-6 border-t border-slate-100 dark:border-slate-800">
            <h2 className="text-xl sm:text-2xl font-bold font-heading text-slate-900 dark:text-white">
              2. Intellectual Property & Courseware
            </h2>
            <p>
              All study materials, lecture recordings, lab source code, slide decks, and assignments provided by JVM Institute are protected by copyright. Unauthorized distribution, copying, or commercial re-sale is strictly prohibited.
            </p>
          </div>

          <div className="space-y-3 pt-6 border-t border-slate-100 dark:border-slate-800">
            <h2 className="text-xl sm:text-2xl font-bold font-heading text-slate-900 dark:text-white">
              3. Placement Assistance Guidelines
            </h2>
            <p>
              Placement support services (including resume review, mock interviews, and job referrals) require students to maintain satisfactory batch attendance, complete assigned capstone projects, and clear internal evaluation tests.
            </p>
          </div>

          <div className="space-y-3 pt-6 border-t border-slate-100 dark:border-slate-800">
            <h2 className="text-xl sm:text-2xl font-bold font-heading text-slate-900 dark:text-white">
              4. Amendments & Contact Information
            </h2>
            <p>
              JVM Institute reserves the right to modify or update these terms at any time. For questions regarding course policies, feel free to contact campus administration at <strong className="text-slate-900 dark:text-white">infojvminstitute@gmail.com</strong> or call <strong className="text-slate-900 dark:text-white">+91 84462 84162</strong>.
            </p>
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
