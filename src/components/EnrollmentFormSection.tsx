"use client";

import React, { useState } from "react";
import { ChevronDown, Send, CheckCircle2, Sparkles, Check, GraduationCap, ShieldCheck } from "lucide-react";

export default function EnrollmentFormSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Form State matching Contact Us page fields 1:1
  const [formState, setFormState] = useState({
    fullName: "",
    email: "",
    phone: "",
    reason: "Free Demo Class Request",
    course: "Data Engineering Course",
    message: ""
  });

  const [focusedField, setFocusedField] = useState<string | null>(null);

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
          message: `[Reason: ${formState.reason}] ${formState.message}`.trim(),
          source: "ENROLLMENT_PAGE",
        }),
      });
    } catch (err) {
      console.error("Failed to submit enrollment lead:", err);
    } finally {
      setIsSubmitting(false);
      setSubmitted(true);
    }
  };

  const handleReset = () => {
    setFormState({
      fullName: "",
      email: "",
      phone: "",
      reason: "Free Demo Class Request",
      course: "Data Engineering Course",
      message: ""
    });
    setSubmitted(false);
  };

  return (
    <section id="enroll-form" className="py-16 md:py-24 bg-[#FAFAFC] dark:bg-[#0B0F19] border-y border-slate-200 dark:border-slate-800 relative overflow-hidden">

      {/* Decorative Background Glows */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="grid lg:grid-cols-12 gap-10 items-center">

          {/* Left Column: Course Highlights & Value Props (5 cols) */}
          <div className="lg:col-span-5 space-y-6 text-center lg:text-left">

            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-50 dark:bg-purple-950/60 text-[#7C248C] dark:text-purple-300 text-xs font-black uppercase tracking-widest border border-purple-200 dark:border-purple-800">
              <Sparkles className="w-4 h-4 text-[#E01E6A]" /> Student Admission &amp; Counseling
            </div>

            {/* Google Rating Badge */}
            <div className="flex justify-center lg:justify-start">
              <div className="inline-flex items-center gap-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-3.5 py-1.5 rounded-full shadow-xs text-xs font-bold">
                <span className="font-extrabold text-base tracking-tight flex items-center">
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
                <span className="text-slate-600 dark:text-slate-300 font-extrabold">(200+ Reviews)</span>
              </div>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-slate-900 dark:text-white leading-tight">
              Enroll Now &amp; <br />
              <span className="jvm-gradient-text">Reserve Your Seat</span>
            </h2>

            <p className="text-slate-600 dark:text-slate-300 text-base font-medium leading-relaxed">
              Fill out your information to get instant syllabus details, course fee structure, and direct 1:1 career counseling from senior Data Engineers at JVM Institute Pune.
            </p>

            {/* Feature Perks List */}
            <div className="space-y-3.5 pt-2 text-left max-w-md mx-auto lg:mx-0">
              {[
                "100% Placement Support with Pune & PAN India referral drives",
                "Live PySpark, Databricks & Cloud ETL Lab Access",
                "1:1 Mock Technical Interviews & ATS Resume Building",
                "Book a Free Live Demo Class before batch enrollment",
              ].map((perk, i) => (
                <div key={i} className="flex items-start gap-3 bg-white dark:bg-slate-900/80 p-3.5 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-sm">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200 leading-snug">
                    {perk}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-2 flex items-center justify-center lg:justify-start gap-6 text-xs text-slate-500 dark:text-slate-400 font-bold">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-500" /> ISO 9001:2020 Institute
              </span>
              <span className="flex items-center gap-1.5">
                <GraduationCap className="w-4 h-4 text-purple-500" /> 200+ Alumni Placed
              </span>
            </div>

          </div>

          {/* Right Column: Interactive Form Card matching Contact Us 1:1 (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden backdrop-blur-xl">

              {/* Form Card Header */}
              <div className="mb-6 pb-4 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <div>
                  <h3 className="text-xl sm:text-2xl font-black font-heading text-slate-900 dark:text-white">
                    Student Information Form
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-semibold mt-0.5">
                    Please provide your details for demo class booking &amp; admission counseling
                  </p>
                </div>
                <span className="hidden sm:inline-block px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 text-xs font-black border border-emerald-200 dark:border-emerald-800">
                  Batches Opening Soon
                </span>
              </div>

              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">

                  {/* Full Name & Email Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Full Name */}
                    <div>
                      <label className={`block text-xs font-bold mb-1.5 transition-colors ${focusedField === "fullName" ? "text-indigo-600 dark:text-indigo-400" : "text-slate-700 dark:text-slate-300"
                        }`}>
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formState.fullName}
                        onFocus={() => setFocusedField("fullName")}
                        onBlur={() => setFocusedField(null)}
                        onChange={(e) => setFormState({ ...formState, fullName: e.target.value })}
                        placeholder="e.g. Rahul Sharma"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 text-slate-900 dark:text-white text-sm font-medium focus:outline-none focus:border-indigo-500 dark:focus:border-indigo-400 focus:ring-2 focus:ring-indigo-500/20 transition-all"
                      />
                    </div>

                    {/* Email Address */}
                    <div>
                      <label className={`block text-xs font-bold mb-1.5 transition-colors ${focusedField === "email" ? "text-indigo-600 dark:text-indigo-400" : "text-slate-700 dark:text-slate-300"
                        }`}>
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onFocus={() => setFocusedField("email")}
                        onBlur={() => setFocusedField(null)}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder="rahul@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 text-slate-900 dark:text-white text-sm font-medium focus:outline-none focus:border-indigo-500 dark:focus:border-indigo-400 focus:ring-2 focus:ring-indigo-500/20 transition-all"
                      />
                    </div>
                  </div>

                  {/* Phone Number Input */}
                  <div>
                    <label className={`block text-xs font-bold mb-1.5 transition-colors ${focusedField === "phone" ? "text-indigo-600 dark:text-indigo-400" : "text-slate-700 dark:text-slate-300"
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
                      value={formState.phone}
                      onFocus={() => setFocusedField("phone")}
                      onBlur={() => setFocusedField(null)}
                      onChange={(e) => {
                        const onlyDigits = e.target.value.replace(/\D/g, "").slice(0, 10);
                        setFormState({ ...formState, phone: onlyDigits });
                      }}
                      placeholder="Enter 10-digit mobile number"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 text-slate-900 dark:text-white text-sm font-medium focus:outline-none focus:border-indigo-500 dark:focus:border-indigo-400 focus:ring-2 focus:ring-indigo-500/20 transition-all"
                    />
                  </div>

                  {/* Reason for Contact & Course Interested In Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Reason for Contact Dropdown */}
                    <div className="relative">
                      <label className={`block text-xs font-bold mb-1.5 transition-colors ${focusedField === "reason" ? "text-indigo-600 dark:text-indigo-400" : "text-slate-700 dark:text-slate-300"
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
                        <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none" />
                      </div>
                    </div>

                    {/* Course Interested In Select */}
                    <div className="relative min-w-0">
                      <label className={`block text-xs font-bold mb-1.5 transition-colors ${focusedField === "course" ? "text-indigo-600 dark:text-indigo-400" : "text-slate-700 dark:text-slate-300"
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
                        <ChevronDown className="w-4 h-4 text-slate-400 absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none" />
                      </div>
                    </div>
                  </div>

                  {/* Message Textarea */}
                  <div>
                    <label className={`block text-xs font-bold mb-1.5 transition-colors ${focusedField === "message" ? "text-indigo-600 dark:text-indigo-400" : "text-slate-700 dark:text-slate-300"
                      }`}>
                      Your Message / Questions (Optional)
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Tell us about your background, career goals, or any specific questions..."
                      value={formState.message}
                      onFocus={() => setFocusedField("message")}
                      onBlur={() => setFocusedField(null)}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 text-slate-900 dark:text-white text-sm font-medium focus:outline-none focus:border-indigo-500 dark:focus:border-indigo-400 focus:ring-2 focus:ring-indigo-500/20 transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full jvm-gradient-bg text-white font-extrabold py-4 px-4 rounded-2xl text-sm transition-all shadow-xl hover:opacity-95 hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2 mt-2 cursor-pointer disabled:opacity-50"
                  >
                    <Send className="w-4 h-4" /> {isSubmitting ? "Submitting Inquiry..." : "Submit Inquiry Application"}
                  </button>

                  <div className="pt-2 text-center text-xs text-slate-400 font-semibold">
                    <span>100% Privacy &amp; Data Protection Guaranteed</span>
                  </div>
                </form>
              ) : (
                /* Submission Success View */
                <div className="py-12 text-center space-y-5 animate-fadeIn">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-400 mx-auto flex items-center justify-center border border-emerald-200 dark:border-emerald-800 shadow-lg">
                    <Check className="w-8 h-8" />
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-black font-heading text-slate-900 dark:text-white">
                    Application Received! 🎉
                  </h3>

                  <div className="bg-slate-50 dark:bg-slate-800/80 rounded-2xl p-5 text-left text-xs sm:text-sm space-y-2 border border-slate-200 dark:border-slate-700 max-w-md mx-auto">
                    <p><strong className="text-slate-900 dark:text-white">Full Name:</strong> {formState.fullName}</p>
                    <p><strong className="text-slate-900 dark:text-white">Email Address:</strong> {formState.email}</p>
                    <p><strong className="text-slate-900 dark:text-white">Phone / WhatsApp:</strong> {formState.phone}</p>
                    <p><strong className="text-slate-900 dark:text-white">Reason:</strong> {formState.reason}</p>
                    <p><strong className="text-slate-900 dark:text-white">Course Interested:</strong> {formState.course}</p>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-medium max-w-sm mx-auto">
                    Our admissions team will reach out to <span className="font-bold text-slate-800 dark:text-slate-200">{formState.phone}</span> with live demo details &amp; syllabus documents.
                  </p>

                  <button
                    onClick={handleReset}
                    className="jvm-gradient-bg text-white font-extrabold px-8 py-3.5 rounded-xl text-sm transition-all shadow-md cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
