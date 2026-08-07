"use client";

import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  RotateCcw, 
  ShieldCheck, 
  Clock, 
  AlertCircle, 
  CheckCircle2, 
  FileText, 
  HelpCircle, 
  ChevronRight,
  CreditCard,
  CalendarCheck
} from "lucide-react";

export default function RefundPolicyPage() {
  return (
    <main className="min-h-screen bg-[#FAFAFC] dark:bg-[#0B0F19] text-slate-900 dark:text-slate-100 flex flex-col font-sans">
      <Navbar />

      {/* Header Banner */}
      <section className="relative pt-28 pb-16 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#7C3AED15_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/20 border border-purple-400/30 text-xs font-extrabold text-purple-300 uppercase tracking-wider">
            <RotateCcw className="w-3.5 h-3.5 text-purple-400" /> Transparency & Satisfaction Guarantee
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight">
            Refund & Cancellation Policy
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto">
            Last Updated: August 2026. This policy governs course fee payments, batch transfers, and refund processing terms for JVM Institute Pvt. Ltd.
          </p>
        </div>
      </section>

      {/* Main Policy Content */}
      <section className="py-12 sm:py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 flex-1">
        
        {/* Quick Highlights Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-sm flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xs font-extrabold text-slate-400 uppercase tracking-wider">Window</h3>
              <p className="text-sm font-bold text-slate-900 dark:text-white mt-0.5">Up to 7 Days / 2 Classes</p>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-sm flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-purple-50 dark:bg-purple-950/50 border border-purple-200 dark:border-purple-800 flex items-center justify-center text-purple-600 dark:text-purple-400 shrink-0 mt-0.5">
              <CreditCard className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xs font-extrabold text-slate-400 uppercase tracking-wider">Processing Time</h3>
              <p className="text-sm font-bold text-slate-900 dark:text-white mt-0.5">7–10 Working Days</p>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-sm flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-800 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0 mt-0.5">
              <CalendarCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xs font-extrabold text-slate-400 uppercase tracking-wider">Batch Transfer</h3>
              <p className="text-sm font-bold text-slate-900 dark:text-white mt-0.5">Free Batch Switch (6 mos)</p>
            </div>
          </div>
        </div>

        {/* Detailed Document Container */}
        <div className="bg-white dark:bg-slate-900 p-6 sm:p-10 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-8 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
          
          {/* Section 1 */}
          <div className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold font-heading text-slate-900 dark:text-white flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-purple-600 dark:text-purple-400" /> 1. Overview & Commitment
            </h2>
            <p>
              At <strong>JVM Institute Pvt. Ltd.</strong>, we maintain a transparent student-first policy for all our professional IT training programs, including Data Engineering (PySpark, Databricks, AWS/GCP), Gen AI, and Machine Learning courses. We understand that personal or professional emergencies may arise, and we aim to provide fair refund and batch modification guidelines.
            </p>
          </div>

          {/* Section 2 */}
          <div className="space-y-3 pt-6 border-t border-slate-100 dark:border-slate-800">
            <h2 className="text-xl sm:text-2xl font-bold font-heading text-slate-900 dark:text-white flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-500" /> 2. Refund Eligibility Guidelines
            </h2>
            <p>
              Refund requests are evaluated based on when the cancellation request is formally submitted relative to the batch start date:
            </p>
            <div className="space-y-3 pt-2">
              <div className="p-4 rounded-2xl bg-emerald-50/60 dark:bg-emerald-950/20 border border-emerald-200/60 dark:border-emerald-800/40 space-y-1">
                <h4 className="font-bold text-emerald-900 dark:text-emerald-300 text-sm sm:text-base">
                  A. Cancellation Prior to Batch Commencement (or within 7 days of enrollment)
                </h4>
                <p className="text-xs sm:text-sm text-emerald-800 dark:text-emerald-200">
                  If a student cancels their registration before the official batch start date or within 7 days of fee payment (whichever comes first), <strong>100% of the course fee paid</strong> will be refunded, deducting only a nominal administrative fee of ₹1,000 for portal registration.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-blue-50/60 dark:bg-blue-950/20 border border-blue-200/60 dark:border-blue-800/40 space-y-1">
                <h4 className="font-bold text-blue-900 dark:text-blue-300 text-sm sm:text-base">
                  B. Cancellation Within the Demo Period (First 2 Live Classes)
                </h4>
                <p className="text-xs sm:text-sm text-blue-800 dark:text-blue-200">
                  If a student attends up to 2 live classes and decides not to continue, they are eligible for a full refund of tuition fees, excluding the non-refundable registration/seat reservation fee.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-amber-50/60 dark:bg-amber-950/20 border border-amber-200/60 dark:border-amber-800/40 space-y-1">
                <h4 className="font-bold text-amber-900 dark:text-amber-300 text-sm sm:text-base">
                  C. Cancellation After 2 Classes or 7 Days of Batch Start
                </h4>
                <p className="text-xs sm:text-sm text-amber-800 dark:text-amber-200">
                  Course fees become <strong>non-refundable</strong> after 2 classes have elapsed or after 7 days from the batch start date, as lab infrastructure, cloud server credits, instructor slots, and limited batch seats are fixed and allocated.
                </p>
              </div>
            </div>
          </div>

          {/* Section 3 */}
          <div className="space-y-3 pt-6 border-t border-slate-100 dark:border-slate-800">
            <h2 className="text-xl sm:text-2xl font-bold font-heading text-slate-900 dark:text-white flex items-center gap-2">
              <CalendarCheck className="w-5 h-5 text-indigo-500" /> 3. Free Batch Transfer & Deferment Policy
            </h2>
            <p>
              Instead of forfeiting fees due to unexpected work commitments or personal emergencies, JVM Institute allows enrolled students to:
            </p>
            <ul className="list-disc pl-6 space-y-1.5 text-slate-700 dark:text-slate-300 font-medium">
              <li><strong>Switch Batch Mode:</strong> Transition seamlessly between Offline (Baner, Pune campus) and Online live interactive batches without extra charges.</li>
              <li><strong>Pause & Resume (Deferment):</strong> Defer training for up to 6 months and join a future batch at no additional cost upon written request.</li>
              <li><strong>Transfer Enrollment:</strong> Nominate an immediate family member or colleague to take up the reserved seat (subject to administration approval).</li>
            </ul>
          </div>

          {/* Section 4 */}
          <div className="space-y-3 pt-6 border-t border-slate-100 dark:border-slate-800">
            <h2 className="text-xl sm:text-2xl font-bold font-heading text-slate-900 dark:text-white flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-purple-500" /> 4. Institute-Initiated Cancellations & Rescheduling
            </h2>
            <p>
              If JVM Institute cancels a batch or reschedules a course start date by more than 14 days and the student cannot attend the new schedule, the student is entitled to a <strong>100% full refund</strong> of all payments made, with zero deduction fees.
            </p>
          </div>

          {/* Section 5 */}
          <div className="space-y-3 pt-6 border-t border-slate-100 dark:border-slate-800">
            <h2 className="text-xl sm:text-2xl font-bold font-heading text-slate-900 dark:text-white flex items-center gap-2">
              <CreditCard className="w-5 h-5 text-emerald-500" /> 5. Refund Processing & Mode of Payment
            </h2>
            <ul className="list-disc pl-6 space-y-1.5 text-slate-700 dark:text-slate-300 font-medium">
              <li>Approved refunds will be processed back to the original source account (Bank Account / UPI / Credit Card) within <strong>7 to 10 working days</strong>.</li>
              <li>For zero-cost EMI or third-party education loan cancellations, any applicable bank processing fees imposed by lending partners will follow the financial institution&apos;s cancellation terms.</li>
            </ul>
          </div>

          {/* Section 6 */}
          <div className="space-y-3 pt-6 border-t border-slate-100 dark:border-slate-800">
            <h2 className="text-xl sm:text-2xl font-bold font-heading text-slate-900 dark:text-white flex items-center gap-2">
              <FileText className="w-5 h-5 text-purple-600 dark:text-purple-400" /> 6. How to Submit a Cancellation Request
            </h2>
            <p>
              To initiate a refund or batch transfer request, please send a formal email with your full name, registered phone number, admission receipt number, and reason for cancellation to:
            </p>
            <div className="bg-slate-50 dark:bg-slate-800/60 p-5 rounded-2xl border border-slate-200 dark:border-slate-700 text-sm font-medium space-y-2">
              <p><strong className="text-slate-900 dark:text-white">Email:</strong> infojvminstitute@gmail.com</p>
              <p><strong className="text-slate-900 dark:text-white">Campus Helpline:</strong> +91 84462 84162 / +91 99237 54115</p>
              <p><strong className="text-slate-900 dark:text-white">Campus Address:</strong> Floor 2, S.No: 82, Suman Ankur, Sahyadri Farms, Lalit Estate, Baner, Pune, Maharashtra 411045</p>
            </div>
          </div>

        </div>

        {/* Back to Home Link */}
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
