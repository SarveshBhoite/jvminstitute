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
  ChevronRight,
  CreditCard,
  Building2,
  HelpCircle,
  XCircle,
  FileSpreadsheet,
  AlertTriangle
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
            <RotateCcw className="w-3.5 h-3.5 text-purple-400" /> Legal & Compliance
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight">
            Refund Policy
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto">
            Last Updated: 10 August 2026. Official Refund and Cancellation Policy governing students enrolled at JVM Institute.
          </p>
        </div>
      </section>

      {/* Main Policy Content */}
      <section className="py-12 sm:py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 flex-1">
        
        {/* Quick Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-sm flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-amber-50 dark:bg-amber-950/50 border border-amber-200 dark:border-amber-800 flex items-center justify-center text-amber-600 dark:text-amber-400 shrink-0 mt-0.5">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xs font-extrabold text-slate-400 uppercase tracking-wider">General Policy</h3>
              <p className="text-sm font-bold text-slate-900 dark:text-white mt-0.5">Strictly Non-Refundable</p>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-sm flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-purple-50 dark:bg-purple-950/50 border border-purple-200 dark:border-purple-800 flex items-center justify-center text-purple-600 dark:text-purple-400 shrink-0 mt-0.5">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xs font-extrabold text-slate-400 uppercase tracking-wider">Processing Timeline</h3>
              <p className="text-sm font-bold text-slate-900 dark:text-white mt-0.5">15 Working Days</p>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-sm flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-800 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0 mt-0.5">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xs font-extrabold text-slate-400 uppercase tracking-wider">Intimation</h3>
              <p className="text-sm font-bold text-slate-900 dark:text-white mt-0.5">Written Email / Form</p>
            </div>
          </div>
        </div>

        {/* Detailed Policy Container */}
        <div className="bg-white dark:bg-slate-900 p-6 sm:p-10 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-8 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
          
          <div className="space-y-4">
            <p>
              JVM Institute (hereinafter referred to as the &quot;Institute&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is a private IT training institute based in Pune, India. This Refund Policy forms an integral part of the Terms and Conditions governing the relationship between the Institute and its students.
            </p>
            <p className="font-semibold text-slate-800 dark:text-slate-200 bg-purple-50 dark:bg-purple-950/40 p-4 rounded-2xl border border-purple-100 dark:border-purple-900/60">
              By enrolling in any course, program, workshop, internship, or placement assistance service offered by JVM Institute, you acknowledge that you have read, understood, and agreed to the terms of this Refund Policy.
            </p>
          </div>

          {/* Section 1 */}
          <div className="space-y-3 pt-6 border-t border-slate-100 dark:border-slate-800">
            <h2 className="text-xl sm:text-2xl font-bold font-heading text-slate-900 dark:text-white flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-purple-600 dark:text-purple-400" /> 1. General Policy on Non-Refundable Fees
            </h2>
            <p>
              All fees paid to JVM Institute towards course enrollment, program registration, workshop participation, internship, or any other service offered by the Institute are <strong>strictly non-refundable</strong>.
            </p>
            <p>
              Once a student completes the admission process and makes the payment, the fee is deemed earned by the Institute towards administrative processing, resource allocation, faculty engagement, and infrastructure provisioning.
            </p>
            <p>
              No claim for a refund of any portion of the fee shall be entertained unless expressly provided for under the exceptional circumstances set out in this Policy.
            </p>
          </div>

          {/* Section 2 */}
          <div className="space-y-4 pt-6 border-t border-slate-100 dark:border-slate-800">
            <h2 className="text-xl sm:text-2xl font-bold font-heading text-slate-900 dark:text-white flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-500" /> 2. Exceptional Circumstances for Refund
            </h2>
            <p>Refunds shall be considered only in the following exceptional circumstances:</p>

            <div className="space-y-4 pt-2">
              <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/80 space-y-2">
                <h3 className="font-bold text-slate-900 dark:text-white text-base">
                  (a) Cancellation of Batch or Program by the Institute
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  If a batch, course, or program is cancelled by JVM Institute due to operational constraints, insufficient enrollment, unforeseen circumstances, or any other reason attributable solely to the Institute, the student shall be entitled to a full refund of the fees paid for that specific program.
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                  The Institute shall notify the affected students of such cancellation within a reasonable timeframe.
                </p>
              </div>

              <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/80 space-y-2">
                <h3 className="font-bold text-slate-900 dark:text-white text-base">
                  (b) Withdrawal Prior to Commencement
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  If a student withdraws their admission before the scheduled commencement date of the course and provides written intimation to the Institute at least 7 days prior to the start date, a refund may be considered on a case-by-case basis, subject to a deduction of administrative and processing charges not exceeding 25% of the total fee paid.
                </p>
                <p className="text-xs font-semibold text-rose-600 dark:text-rose-400">
                  No refund shall be applicable for withdrawal requests received after the course has commenced.
                </p>
              </div>

              <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/80 space-y-2">
                <h3 className="font-bold text-slate-900 dark:text-white text-base">
                  (c) Force Majeure Events
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  In the event of a prolonged disruption of services due to force majeure circumstances as defined in the Terms and Conditions, the Institute may, at its sole discretion, offer a partial refund or credit towards future courses. Such decisions shall be made on a case-by-case basis.
                </p>
              </div>
            </div>
          </div>

          {/* Section 3 */}
          <div className="space-y-3 pt-6 border-t border-slate-100 dark:border-slate-800">
            <h2 className="text-xl sm:text-2xl font-bold font-heading text-slate-900 dark:text-white flex items-center gap-2">
              <CreditCard className="w-5 h-5 text-indigo-500" /> 3. Refund Processing Timeline and Method
            </h2>
            <p>
              All refunds approved under the exceptional circumstances set out above shall be processed within <strong>15 working days</strong> from the date of approval of the refund request.
            </p>
            <p>Refunds shall be initiated through the original mode of payment:</p>
            <ul className="list-disc pl-6 space-y-2 text-slate-700 dark:text-slate-300 font-medium">
              <li>
                For payments made through credit card, debit card, net banking, or UPI, the refund shall be credited back to the original source account.
              </li>
              <li>
                For payments made through cash or cheque, the refund shall be processed through NEFT/RTGS transfer to the bank account details provided by the student.
              </li>
            </ul>
            <p className="text-xs text-slate-500 dark:text-slate-400 italic">
              The Institute shall not be liable for any delay caused by the respective bank, payment gateway, or financial institution in processing the refund.
            </p>
          </div>

          {/* Section 4 */}
          <div className="space-y-3 pt-6 border-t border-slate-100 dark:border-slate-800">
            <h2 className="text-xl sm:text-2xl font-bold font-heading text-slate-900 dark:text-white flex items-center gap-2">
              <FileSpreadsheet className="w-5 h-5 text-purple-600 dark:text-purple-400" /> 4. Procedure for Requesting a Refund
            </h2>
            <p>
              Any student seeking a refund under the exceptional circumstances set out in this Policy must submit a written refund request through the following channels:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-700 dark:text-slate-300 font-medium">
              <li>
                By email to the Institute at <strong className="text-purple-600 dark:text-purple-400">infojvminstitute@gmail.com</strong> with the subject line <strong>&quot;Refund Request – Student Name and Course Details&quot;</strong>.
              </li>
              <li>
                By submitting a physical refund application form at the Institute&apos;s administrative office.
              </li>
            </ul>

            <div className="pt-2 space-y-2">
              <p className="font-semibold text-slate-900 dark:text-white">
                The refund request must clearly state the grounds on which the refund is sought and must be accompanied by:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-slate-600 dark:text-slate-300">
                <li>A copy of the fee payment receipt</li>
                <li>The admission confirmation letter</li>
                <li>Any other supporting documents as may be required by the Institute</li>
              </ul>
            </div>

            <p className="text-xs sm:text-sm bg-slate-50 dark:bg-slate-800/60 p-4 rounded-xl border border-slate-200 dark:border-slate-700">
              The Institute shall acknowledge receipt of the refund request within 5 working days and shall communicate its decision within 15 working days from the date of receipt of the complete application.
            </p>
          </div>

          {/* Section 5 */}
          <div className="space-y-3 pt-6 border-t border-slate-100 dark:border-slate-800">
            <h2 className="text-xl sm:text-2xl font-bold font-heading text-slate-900 dark:text-white flex items-center gap-2">
              <XCircle className="w-5 h-5 text-rose-500" /> 5. No Refund for Dissatisfaction or Change of Mind
            </h2>
            <p>For the avoidance of doubt, no refund shall be made in the following circumstances:</p>
            <ul className="list-disc pl-6 space-y-2 text-slate-700 dark:text-slate-300 font-medium">
              <li>Change of mind or personal circumstances of the student.</li>
              <li>Dissatisfaction with the teaching methodology, course content, faculty, or infrastructure.</li>
              <li>Inability of the student to cope with the course curriculum or academic requirements.</li>
              <li>Non-attendance of classes or failure to complete the course within the stipulated duration.</li>
              <li>Placement assistance not resulting in a job offer within the student&apos;s expected timeframe, as placement assistance is provided on a best-effort basis and is not guaranteed.</li>
              <li>Any other reason not expressly covered under the exceptional circumstances set out in this Policy.</li>
            </ul>
          </div>

          {/* Section 6 */}
          <div className="space-y-3 pt-6 border-t border-slate-100 dark:border-slate-800">
            <h2 className="text-xl sm:text-2xl font-bold font-heading text-slate-900 dark:text-white flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-amber-500" /> 6. Outstanding Dues and Adjustments
            </h2>
            <p>
              If the student has any outstanding dues towards the Institute, including but not limited to pending installments, library fines, or any other charges, the Institute reserves the right to deduct such outstanding amounts from any refund payable to the student.
            </p>
            <p>
              The net refund amount, if any, after such deductions shall be processed in accordance with this Policy.
            </p>
          </div>

          {/* Section 7 */}
          <div className="space-y-3 pt-6 border-t border-slate-100 dark:border-slate-800">
            <h2 className="text-xl sm:text-2xl font-bold font-heading text-slate-900 dark:text-white flex items-center gap-2">
              <FileText className="w-5 h-5 text-purple-600 dark:text-purple-400" /> 7. Amendments to This Refund Policy
            </h2>
            <p>
              JVM Institute reserves the right to amend, modify, or update this Refund Policy from time to time. Any changes to this Policy shall become effective upon being posted on the Institute&apos;s website.
            </p>
            <p>
              Students are encouraged to review this Policy periodically to stay informed of any updates.
            </p>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 italic">
              The version of the Policy in effect at the time of enrollment shall govern the student&apos;s rights and obligations regarding refunds, subject to applicable law.
            </p>
          </div>

          {/* Section 8 */}
          <div className="space-y-3 pt-6 border-t border-slate-100 dark:border-slate-800">
            <h2 className="text-xl sm:text-2xl font-bold font-heading text-slate-900 dark:text-white flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-500" /> 8. Declaration
            </h2>
            <p className="p-4 rounded-2xl bg-emerald-50/60 dark:bg-emerald-950/20 border border-emerald-200/60 dark:border-emerald-800/40 text-emerald-900 dark:text-emerald-200 font-semibold text-sm sm:text-base">
              By enrolling in any course, program, workshop, internship, placement assistance program, or related service offered by JVM Institute, you acknowledge that you have read, understood, and agreed to the terms of this Refund Policy.
            </p>
          </div>

          {/* Official Contact Card */}
          <div className="pt-6 border-t border-slate-100 dark:border-slate-800">
            <div className="bg-slate-50 dark:bg-slate-800/60 p-5 rounded-2xl border border-slate-200 dark:border-slate-700 text-sm font-medium space-y-2">
              <h3 className="font-bold text-slate-900 dark:text-white text-base">JVM Institute Administrative Office</h3>
              <p><strong className="text-slate-900 dark:text-white">Official Email:</strong> infojvminstitute@gmail.com</p>
              <p><strong className="text-slate-900 dark:text-white">Campus Helpline:</strong> +91 84462 84162</p>
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
