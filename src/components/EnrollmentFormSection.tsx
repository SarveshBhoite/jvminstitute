"use client";

import React, { useState } from "react";
import { User, Mail, Phone, BookOpen, Tag, Send, CheckCircle2, Sparkles, Check, GraduationCap, ShieldCheck } from "lucide-react";

export default function EnrollmentFormSection() {
  const [submitted, setSubmitted] = useState(false);

  // Form State
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [course, setCourse] = useState("Data Engineering Master Program");
  const [referralCode, setReferralCode] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setName("");
    setEmail("");
    setPhone("");
    setReferralCode("");
    setSubmitted(false);
  };

  return (
    <section id="enroll-form" className="py-20 md:py-28 bg-[#FAFAFC] dark:bg-[#0B0F19] border-y border-slate-200 dark:border-slate-800 relative overflow-hidden">
      
      {/* Decorative Background Glows */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Course Highlights & Value Props (5 cols) */}
          <div className="lg:col-span-5 space-y-6 text-center lg:text-left">
            
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-50 dark:bg-purple-950/60 text-[#7C248C] dark:text-purple-300 text-xs font-black uppercase tracking-widest border border-purple-200 dark:border-purple-800">
              <Sparkles className="w-4 h-4 text-[#E01E6A]" /> Student Admission Form
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
                "100% Placement Support with Pune MNC referral drives",
                "Live PySpark, Databricks & Cloud ETL Lab Access",
                "1:1 Mock Interviews & ATS Resume Building",
                "Extra ₹1,000 Off when using a valid Referral Code",
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
                <ShieldCheck className="w-4 h-4 text-emerald-500" /> ISO Certified Institute
              </span>
              <span className="flex items-center gap-1.5">
                <GraduationCap className="w-4 h-4 text-purple-500" /> 1,200+ Alumni Placed
              </span>
            </div>

          </div>

          {/* Right Column: Embedded Enrollment Form Card (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-10 border border-slate-200 dark:border-slate-800 shadow-2xl relative overflow-hidden">
              
              {/* Form Card Header */}
              <div className="mb-6 pb-4 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <div>
                  <h3 className="text-xl sm:text-2xl font-black font-heading text-slate-900 dark:text-white">
                    Student Information Form
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-semibold mt-0.5">
                    Please provide your contact info to register for the upcoming batch
                  </p>
                </div>
                <span className="hidden sm:inline-block px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 text-xs font-black border border-emerald-200 dark:border-emerald-800">
                  Batches Opening Soon
                </span>
              </div>

              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* 1. Student Full Name */}
                  <div>
                    <label className="block text-xs font-extrabold text-slate-700 dark:text-slate-200 mb-1.5 flex items-center gap-1.5">
                      <User className="w-4 h-4 text-purple-600 dark:text-purple-400" /> Student Full Name <span className="text-red-500">*</span>
                    </label>
                    <input 
                      type="text" 
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Rahul Sharma" 
                      className="w-full px-4 py-3.5 rounded-xl border border-slate-200 dark:border-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-purple-600 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-medium"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* 2. Mail ID */}
                    <div>
                      <label className="block text-xs font-extrabold text-slate-700 dark:text-slate-200 mb-1.5 flex items-center gap-1.5">
                        <Mail className="w-4 h-4 text-blue-600 dark:text-blue-400" /> Email Address (Mail ID) <span className="text-red-500">*</span>
                      </label>
                      <input 
                        type="email" 
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="rahul.sharma@gmail.com" 
                        className="w-full px-4 py-3.5 rounded-xl border border-slate-200 dark:border-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-purple-600 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-medium"
                      />
                    </div>

                    {/* 3. Contact No */}
                    <div>
                      <label className="block text-xs font-extrabold text-slate-700 dark:text-slate-200 mb-1.5 flex items-center gap-1.5">
                        <Phone className="w-4 h-4 text-emerald-600 dark:text-emerald-400" /> Contact No (WhatsApp) <span className="text-red-500">*</span>
                      </label>
                      <input 
                        type="tel" 
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+91 8446284162" 
                        className="w-full px-4 py-3.5 rounded-xl border border-slate-200 dark:border-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-purple-600 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-medium"
                      />
                    </div>
                  </div>

                  {/* 4. Course Name */}
                  <div>
                    <label className="block text-xs font-extrabold text-slate-700 dark:text-slate-200 mb-1.5 flex items-center gap-1.5">
                      <BookOpen className="w-4 h-4 text-pink-600 dark:text-pink-400" /> Select Course Name <span className="text-red-500">*</span>
                    </label>
                    <select 
                      value={course}
                      onChange={(e) => setCourse(e.target.value)}
                      className="w-full px-4 py-3.5 rounded-xl border border-slate-200 dark:border-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-purple-600 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-bold"
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
                    <div className="flex items-center justify-between mb-1.5">
                      <label className="block text-xs font-extrabold text-slate-700 dark:text-slate-200 flex items-center gap-1.5">
                        <Tag className="w-4 h-4 text-amber-500" /> Referral Code
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
                      className="w-full px-4 py-3.5 rounded-xl border border-slate-200 dark:border-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-purple-600 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-mono font-bold tracking-wider uppercase"
                    />
                  </div>

                  {/* Submit Button */}
                  <button 
                    type="submit" 
                    className="w-full jvm-gradient-bg text-white font-extrabold py-4 px-6 rounded-2xl text-base transition-all shadow-xl hover:opacity-95 hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2 mt-4 cursor-pointer"
                  >
                    <Send className="w-5 h-5" /> Submit Enrollment Application
                  </button>
                </form>
              ) : (
                /* Success View */
                <div className="py-8 text-center space-y-4 animate-fadeIn">
                  <div className="w-20 h-20 rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-400 mx-auto flex items-center justify-center border border-emerald-200 dark:border-emerald-800 shadow-xl">
                    <Check className="w-10 h-10" />
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-heading">
                    Application Submitted! 🎉
                  </h3>

                  <div className="bg-slate-50 dark:bg-slate-800/80 rounded-2xl p-5 text-left text-xs sm:text-sm space-y-2 border border-slate-200 dark:border-slate-700 max-w-md mx-auto">
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

                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium max-w-md mx-auto">
                    Our admissions team will contact you on <span className="font-bold text-slate-800 dark:text-slate-200">{phone}</span> and email course details to <span className="font-bold text-slate-800 dark:text-slate-200">{email}</span>.
                  </p>

                  <button
                    onClick={handleReset}
                    className="jvm-gradient-bg text-white font-extrabold px-8 py-3 rounded-xl text-sm transition-all shadow-md mt-2"
                  >
                    Submit Another Application
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
