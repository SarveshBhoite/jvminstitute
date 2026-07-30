"use client";

import React, { useState, useEffect } from "react";
import { X, Send, CheckCircle2, User, Mail, Phone, BookOpen, Tag, Sparkles, Check } from "lucide-react";

/**
 * Global helper function to trigger the Enrollment Modal from anywhere in the app
 */
export function openEnrollModal(courseName?: string) {
  if (typeof window !== "undefined") {
    window.dispatchEvent(
      new CustomEvent("open-enroll-modal", { detail: { courseName } })
    );
  }
}

export default function LeadEnquiryModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Form State
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [course, setCourse] = useState("Data Engineering Master Program");
  const [referralCode, setReferralCode] = useState("");

  // Listen to custom event to open modal on "Enroll Now" click
  useEffect(() => {
    const handleOpen = (e: Event) => {
      const customEvent = e as CustomEvent<{ courseName?: string }>;
      if (customEvent.detail && customEvent.detail.courseName) {
        setCourse(customEvent.detail.courseName);
      }
      setSubmitted(false);
      setIsOpen(true);
    };

    window.addEventListener("open-enroll-modal", handleOpen);

    // Auto trigger after 4 seconds on initial home page visit if not closed previously
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 4000);

    return () => {
      window.removeEventListener("open-enroll-modal", handleOpen);
      clearTimeout(timer);
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleClose = () => {
    setIsOpen(false);
    setTimeout(() => {
      setSubmitted(false);
    }, 300);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-lg bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto">
        
        {/* Top Decorative Background Glow */}
        <div className="absolute -top-20 -left-20 w-48 h-48 bg-purple-500/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -right-20 w-48 h-48 bg-pink-500/20 rounded-full blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors z-20"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <>
            {/* Top Header */}
            <div className="space-y-2 text-center mb-6 relative z-10">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-50 dark:bg-purple-950/60 text-[#7C248C] dark:text-purple-300 text-xs font-extrabold uppercase tracking-wider border border-purple-200/50 dark:border-purple-800/50">
                <Sparkles className="w-3.5 h-3.5 text-[#E01E6A]" /> Student Enrollment Form
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-slate-900 dark:text-white">
                Enroll Now &amp; Reserve Seat
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-sm mx-auto font-medium">
                Fill in your details below to get direct admission counseling &amp; syllabus PDF
              </p>
            </div>

            {/* Form with requested fields */}
            <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
              {/* 1. Student Name */}
              <div>
                <label className="block text-xs font-extrabold text-slate-700 dark:text-slate-200 mb-1 flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" /> Student Full Name <span className="text-red-500">*</span>
                </label>
                <input 
                  type="text" 
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Rahul Sharma" 
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-purple-600 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-medium"
                />
              </div>

              {/* 2. Mail ID */}
              <div>
                <label className="block text-xs font-extrabold text-slate-700 dark:text-slate-200 mb-1 flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" /> Email Address (Mail ID) <span className="text-red-500">*</span>
                </label>
                <input 
                  type="email" 
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="rahul.sharma@gmail.com" 
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-purple-600 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-medium"
                />
              </div>

              {/* 3. Contact No */}
              <div>
                <label className="block text-xs font-extrabold text-slate-700 dark:text-slate-200 mb-1 flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" /> Contact Number (WhatsApp) <span className="text-red-500">*</span>
                </label>
                <input 
                  type="tel" 
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+91 98765 43210" 
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-purple-600 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-medium"
                />
              </div>

              {/* 4. Course Name */}
              <div>
                <label className="block text-xs font-extrabold text-slate-700 dark:text-slate-200 mb-1 flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-pink-600 dark:text-pink-400" /> Select Course Name <span className="text-red-500">*</span>
                </label>
                <select 
                  value={course}
                  onChange={(e) => setCourse(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-purple-600 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-bold"
                >
                  <option value="Data Engineering Master Program">Data Engineering Master Program (PySpark &amp; Databricks)</option>
                  <option value="Python for Data Analysis">Python for Data Analysis &amp; Automation</option>
                  <option value="PySpark & Big Data Track">PySpark &amp; Big Data Track</option>
                  <option value="Cloud Data Platforms (AWS/Azure)">Cloud Data Platforms (AWS &amp; Azure)</option>
                  <option value="SQL & Advanced Databases">SQL &amp; Advanced Databases</option>
                </select>
              </div>

              {/* 5. Referral Code */}
              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="block text-xs font-extrabold text-slate-700 dark:text-slate-200 flex items-center gap-1.5">
                    <Tag className="w-3.5 h-3.5 text-amber-500" /> Referral Code
                  </label>
                  <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded-full border border-emerald-200 dark:border-emerald-800">
                    Optional — Extra ₹1,000 Off
                  </span>
                </div>
                <input 
                  type="text" 
                  value={referralCode}
                  onChange={(e) => setReferralCode(e.target.value.toUpperCase())}
                  placeholder="e.g. JVMREF2025" 
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-purple-600 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-mono font-bold tracking-wider uppercase"
                />
              </div>

              {/* Submit Button */}
              <button 
                type="submit" 
                className="w-full jvm-gradient-bg text-white font-extrabold py-4 px-4 rounded-xl text-sm transition-all shadow-xl hover:opacity-95 hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2 mt-2"
              >
                <Send className="w-4 h-4" /> Submit Enrollment Application
              </button>
            </form>

            <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400 font-semibold relative z-10">
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> 100% Privacy Guaranteed
              </span>
              <span>Pune Offline &amp; Live Online</span>
            </div>
          </>
        ) : (
          /* Submission Success View */
          <div className="py-8 text-center space-y-4 relative z-10 animate-fadeIn">
            <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-400 mx-auto flex items-center justify-center border border-emerald-200 dark:border-emerald-800 shadow-lg">
              <Check className="w-8 h-8" />
            </div>

            <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white font-heading">
              Application Received! 🎉
            </h3>

            <div className="bg-slate-50 dark:bg-slate-800/80 rounded-2xl p-4 text-left text-xs space-y-2 border border-slate-200 dark:border-slate-700">
              <p><strong className="text-slate-900 dark:text-white">Student Name:</strong> {name}</p>
              <p><strong className="text-slate-900 dark:text-white">Mail ID:</strong> {email}</p>
              <p><strong className="text-slate-900 dark:text-white">Contact No:</strong> {phone}</p>
              <p><strong className="text-slate-900 dark:text-white">Course Name:</strong> {course}</p>
              {referralCode && (
                <p className="text-emerald-600 dark:text-emerald-400 font-bold">
                  <strong>Referral Code:</strong> {referralCode} (Applied!)
                </p>
              )}
            </div>

            <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
              Our senior counselor will contact you on <span className="font-bold text-slate-800 dark:text-slate-200">{phone}</span> and email complete syllabus details to <span className="font-bold text-slate-800 dark:text-slate-200">{email}</span>.
            </p>

            <button
              onClick={handleClose}
              className="jvm-gradient-bg text-white font-extrabold px-8 py-3 rounded-xl text-sm transition-all shadow-md"
            >
              Done &amp; Close
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
