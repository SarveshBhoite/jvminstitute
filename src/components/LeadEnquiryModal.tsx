"use client";

import React, { useState, useEffect } from "react";
import { X, Send, CheckCircle2, ChevronDown, Sparkles, Check } from "lucide-react";

/**
 * Global helper function to trigger the Enrollment & Demo Booking Modal from anywhere in the app
 */
export function openEnrollModal(courseName?: string, reason?: string) {
  if (typeof window !== "undefined") {
    window.dispatchEvent(
      new CustomEvent("open-enroll-modal", { detail: { courseName, reason } })
    );
  }
}

interface LeadEnquiryModalProps {
  isOpen?: boolean;
  onClose?: () => void;
  courseTitle?: string;
  defaultReason?: string;
}

export default function LeadEnquiryModal({
  isOpen: externalIsOpen,
  onClose: externalOnClose,
  courseTitle,
  defaultReason,
}: LeadEnquiryModalProps = {}) {
  const [internalIsOpen, setInternalIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Form State matching Contact Us page 1:1
  const [formState, setFormState] = useState({
    fullName: "",
    email: "",
    phone: "",
    reason: defaultReason || "Free Demo Class Request",
    course: courseTitle || "Data Engineering Course",
    referralCode: "",
    message: ""
  });

  const [focusedField, setFocusedField] = useState<string | null>(null);

  // Auto-detect ?ref=... parameter from URL
  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const ref = params.get("ref");
      if (ref) {
        setFormState((prev) => ({ ...prev, referralCode: ref.toUpperCase() }));
      }
    }
  }, []);

  // Update course state if courseTitle prop changes
  useEffect(() => {
    if (courseTitle) {
      setFormState((prev) => ({ ...prev, course: courseTitle }));
    }
  }, [courseTitle]);

  // Update defaultReason if changed
  useEffect(() => {
    if (defaultReason) {
      setFormState((prev) => ({ ...prev, reason: defaultReason }));
    }
  }, [defaultReason]);

  // Listen to custom event to open modal on any "Enroll Now" or "Book Demo" click
  useEffect(() => {
    const handleOpen = (e: Event) => {
      const customEvent = e as CustomEvent<{ courseName?: string; reason?: string }>;
      if (customEvent.detail) {
        setFormState((prev) => ({
          ...prev,
          course: customEvent.detail.courseName || prev.course,
          reason: customEvent.detail.reason || prev.reason || "Free Demo Class Request",
        }));
      }
      setSubmitted(false);
      setInternalIsOpen(true);
    };

    window.addEventListener("open-enroll-modal", handleOpen);
    return () => {
      window.removeEventListener("open-enroll-modal", handleOpen);
    };
  }, []);

  const isOpen = externalIsOpen !== undefined ? externalIsOpen : internalIsOpen;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formState.fullName,
          email: formState.email,
          phone: formState.phone,
          courseSlug: formState.course,
          referralCode: formState.referralCode || null,
          message: `[Reason: ${formState.reason}] ${formState.message}`.trim(),
          source: "ENROLLMENT_MODAL_POPUP",
        }),
      });
    } catch (err) {
      console.error("Failed to submit lead:", err);
    } finally {
      setIsSubmitting(false);
      setSubmitted(true);
    }
  };

  const handleClose = () => {
    if (externalOnClose) {
      externalOnClose();
    } else {
      setInternalIsOpen(false);
    }
    setTimeout(() => {
      setSubmitted(false);
    }, 300);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-3.5 sm:p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-xl bg-white dark:bg-slate-900 rounded-3xl p-5 sm:p-7 border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto">

        {/* Top Decorative Background Glow */}
        <div className="absolute -top-20 -left-20 w-48 h-48 bg-purple-500/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -right-20 w-48 h-48 bg-pink-500/20 rounded-full blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors z-20 cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <>
            {/* Top Header */}
            <div className="space-y-2 text-center mb-5 relative z-10">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-50 dark:bg-purple-950/60 text-[#7C248C] dark:text-purple-300 text-xs font-extrabold uppercase tracking-wider border border-purple-200/50 dark:border-purple-800/50">
                <Sparkles className="w-3.5 h-3.5 text-[#E01E6A]" /> Student Inquiry &amp; Enrollment
              </div>

              {/* Google Reviews Badge */}
              <div className="flex items-center justify-center gap-1.5 pt-0.5">
                <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 text-xs font-bold border border-slate-200 dark:border-slate-700">
                  <span className="font-extrabold text-xs tracking-tight flex items-center">
                    <span className="text-[#4285F4]">G</span>
                    <span className="text-[#EA4335]">o</span>
                    <span className="text-[#FBBC05]">o</span>
                    <span className="text-[#4285F4]">g</span>
                    <span className="text-[#34A853]">l</span>
                    <span className="text-[#EA4335]">e</span>
                  </span>
                  <span className="text-amber-500 font-extrabold flex items-center gap-0.5">
                    ★ 4.9/5
                  </span>
                  <span className="text-slate-500 dark:text-slate-400 font-semibold">(200+ Reviews)</span>
                </div>
              </div>

              <h3 className="text-xl sm:text-2xl font-extrabold font-heading text-slate-900 dark:text-white">
                Book Demo Class &amp; Enroll Now
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-sm mx-auto font-medium">
                Fill out the form below for live class demos, fee breakdown, and direct 1-on-1 counseling.
              </p>
            </div>

            {/* Form matching Contact Us fields 1:1 */}
            <form onSubmit={handleSubmit} className="space-y-4 relative z-10">

              {/* Full Name & Email Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {/* Full Name Input */}
                <div>
                  <label className={`block text-xs font-bold mb-1 transition-colors ${focusedField === "fullName" ? "text-indigo-600 dark:text-indigo-400" : "text-slate-700 dark:text-slate-300"
                    }`}>
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rahul Sharma"
                    value={formState.fullName}
                    onFocus={() => setFocusedField("fullName")}
                    onBlur={() => setFocusedField(null)}
                    onChange={(e) => setFormState({ ...formState, fullName: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 text-slate-900 dark:text-white text-xs sm:text-sm font-medium focus:outline-none focus:border-indigo-500 dark:focus:border-indigo-400 focus:ring-2 focus:ring-indigo-500/20 transition-all"
                  />
                </div>

                {/* Email Address Input */}
                <div>
                  <label className={`block text-xs font-bold mb-1 transition-colors ${focusedField === "email" ? "text-indigo-600 dark:text-indigo-400" : "text-slate-700 dark:text-slate-300"
                    }`}>
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="rahul@example.com"
                    value={formState.email}
                    onFocus={() => setFocusedField("email")}
                    onBlur={() => setFocusedField(null)}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 text-slate-900 dark:text-white text-xs sm:text-sm font-medium focus:outline-none focus:border-indigo-500 dark:focus:border-indigo-400 focus:ring-2 focus:ring-indigo-500/20 transition-all"
                  />
                </div>
              </div>

              {/* Phone Number Input */}
              <div>
                <label className={`block text-xs font-bold mb-1 transition-colors ${focusedField === "phone" ? "text-indigo-600 dark:text-indigo-400" : "text-slate-700 dark:text-slate-300"
                  }`}>
                  Phone / WhatsApp Number *
                </label>
                <input
                  type="tel"
                  required
                  pattern="[0-9]{10}"
                  minLength={10}
                  maxLength={10}
                  title="Phone number must be exactly 10 digits"
                  placeholder="Enter 10-digit mobile number"
                  value={formState.phone}
                  onFocus={() => setFocusedField("phone")}
                  onBlur={() => setFocusedField(null)}
                  onChange={(e) => {
                    const onlyDigits = e.target.value.replace(/\D/g, "").slice(0, 10);
                    setFormState({ ...formState, phone: onlyDigits });
                  }}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 text-slate-900 dark:text-white text-xs sm:text-sm font-medium focus:outline-none focus:border-indigo-500 dark:focus:border-indigo-400 focus:ring-2 focus:ring-indigo-500/20 transition-all"
                />
              </div>

              {/* Reason for Contact & Course Interested In Select Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {/* Reason for Contact Dropdown */}
                <div className="relative">
                  <label className={`block text-xs font-bold mb-1 transition-colors ${focusedField === "reason" ? "text-indigo-600 dark:text-indigo-400" : "text-slate-700 dark:text-slate-300"
                    }`}>
                    Reason for Contact *
                  </label>
                  <div className="relative">
                    <select
                      value={formState.reason}
                      onFocus={() => setFocusedField("reason")}
                      onBlur={() => setFocusedField(null)}
                      onChange={(e) => setFormState({ ...formState, reason: e.target.value })}
                      className="w-full max-w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 text-slate-900 dark:text-white text-xs sm:text-sm font-medium focus:outline-none focus:border-indigo-500 dark:focus:border-indigo-400 focus:ring-2 focus:ring-indigo-500/20 transition-all appearance-none cursor-pointer pr-8 truncate"
                    >
                      <option value="Free Demo Class Request">1. Book Free Demo Class</option>
                      <option value="Course Inquiry & Admissions">2. Course Admission &amp; Fees</option>
                      <option value="Placement Support Inquiry">3. Placement &amp; Placement Drives</option>
                      <option value="Other Inquiries">4. Other General Inquiry</option>
                    </select>
                    <ChevronDown className="w-4 h-4 text-slate-400 absolute right-2.5 top-1/2 transform -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>

                {/* Course Interested In Select */}
                <div className="relative min-w-0">
                  <label className={`block text-xs font-bold mb-1 transition-colors ${focusedField === "course" ? "text-indigo-600 dark:text-indigo-400" : "text-slate-700 dark:text-slate-300"
                    }`}>
                    Course Interested In *
                  </label>
                  <div className="relative">
                    <select
                      value={formState.course}
                      onFocus={() => setFocusedField("course")}
                      onBlur={() => setFocusedField(null)}
                      onChange={(e) => setFormState({ ...formState, course: e.target.value })}
                      className="w-full max-w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 text-slate-900 dark:text-white text-xs sm:text-sm font-medium focus:outline-none focus:border-indigo-500 dark:focus:border-indigo-400 focus:ring-2 focus:ring-indigo-500/20 transition-all appearance-none cursor-pointer pr-8 truncate"
                    >
                      <option value="Data Engineering Course">Data Engineering</option>
                      <option value="Data Engineering with Gen AI">Data Engineering with Gen AI</option>
                      <option value="Gen AI">Generative AI</option>
                      <option value="Basic AI & ML">Basic AI &amp; ML</option>
                      <option value="Advanced AI & Machine Learning">Advanced AI &amp; ML</option>
                      <option value="Claude AI">Claude AI</option>
                    </select>
                    <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>
              </div>

              {/* Referral Code Field (Optional) */}
              <div>
                <label className={`block text-xs font-bold mb-1 transition-colors ${focusedField === "referralCode" ? "text-purple-600 dark:text-purple-400" : "text-slate-700 dark:text-slate-300"
                  }`}>
                  Referral Code (Optional)
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={formState.referralCode}
                    onFocus={() => setFocusedField("referralCode")}
                    onBlur={() => setFocusedField(null)}
                    onChange={(e) => setFormState({ ...formState, referralCode: e.target.value.toUpperCase() })}
                    placeholder="e.g. JVM-ANAND-9822"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-purple-200 dark:border-purple-900/60 text-slate-900 dark:text-white text-xs sm:text-sm font-mono uppercase font-bold focus:outline-none focus:border-purple-500 dark:focus:border-purple-400 focus:ring-2 focus:ring-purple-500/20 transition-all"
                  />
                  {formState.referralCode && (
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] font-bold bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300 px-2 py-0.5 rounded-full">
                      ✓ Applied
                    </span>
                  )}
                </div>
              </div>

              {/* Message Textarea */}
              <div>
                <label className={`block text-xs font-bold mb-1 transition-colors ${focusedField === "message" ? "text-indigo-600 dark:text-indigo-400" : "text-slate-700 dark:text-slate-300"
                  }`}>
                  Your Message / Questions (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="Tell us about your background, career goals, or any specific questions..."
                  value={formState.message}
                  onFocus={() => setFocusedField("message")}
                  onBlur={() => setFocusedField(null)}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 text-slate-900 dark:text-white text-xs sm:text-sm font-medium focus:outline-none focus:border-indigo-500 dark:focus:border-indigo-400 focus:ring-2 focus:ring-indigo-500/20 transition-all resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full jvm-gradient-bg text-white font-extrabold py-3.5 px-4 rounded-xl text-sm transition-all shadow-xl hover:opacity-95 hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2 mt-1 cursor-pointer disabled:opacity-50"
              >
                <Send className="w-4 h-4" /> {isSubmitting ? "Submitting Request..." : "Submit Inquiry & Book Demo"}
              </button>
            </form>

            <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400 font-semibold relative z-10">
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> 100% Privacy Guaranteed
              </span>
              <span>Baner, Pune Campus &amp; Online</span>
            </div>
          </>
        ) : (
          /* Submission Success View */
          <div className="py-8 text-center space-y-4 relative z-10 animate-fadeIn">
            <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-400 mx-auto flex items-center justify-center border border-emerald-200 dark:border-emerald-800 shadow-lg">
              <Check className="w-8 h-8" />
            </div>

            <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white font-heading">
              Inquiry Submitted Successfully! 🎉
            </h3>

            <div className="bg-slate-50 dark:bg-slate-800/80 rounded-2xl p-4 text-left text-xs space-y-2 border border-slate-200 dark:border-slate-700">
              <p><strong className="text-slate-900 dark:text-white">Full Name:</strong> {formState.fullName}</p>
              <p><strong className="text-slate-900 dark:text-white">Email Address:</strong> {formState.email}</p>
              <p><strong className="text-slate-900 dark:text-white">Phone / WhatsApp:</strong> {formState.phone}</p>
              <p><strong className="text-slate-900 dark:text-white">Reason:</strong> {formState.reason}</p>
              <p><strong className="text-slate-900 dark:text-white">Course Interested:</strong> {formState.course}</p>
            </div>

            <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
              Our admissions team will reach out to <span className="font-bold text-slate-800 dark:text-slate-200">{formState.phone}</span> with demo class schedule and course details.
            </p>

            <button
              onClick={handleClose}
              className="jvm-gradient-bg text-white font-extrabold px-8 py-3 rounded-xl text-sm transition-all shadow-md cursor-pointer"
            >
              Done &amp; Close
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
