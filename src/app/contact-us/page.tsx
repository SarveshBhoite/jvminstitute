"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  User, 
  Mail, 
  Phone, 
  BookOpen, 
  Tag, 
  Send, 
  Sparkles, 
  Check, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  GraduationCap, 
  PhoneCall, 
} from "lucide-react";

export default function ContactUsPage() {
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
    <div className="min-h-screen flex flex-col bg-[#FAFAFC] dark:bg-[#0B0F19] transition-colors duration-300">
      <Navbar />

      <main className="flex-grow">
        
        {/* ── Hero Section ─────────────────────────────────────────────────── */}
        <section className="relative py-16 md:py-24 overflow-hidden border-b border-slate-200 dark:border-slate-800 bg-[#FAFAFC] dark:bg-[#0B0F19]">
          <div className="ambient-glow w-[500px] h-[500px] bg-[#1E2B88] dark:bg-[#4F46E5] top-[-10%] left-[-10%] opacity-10 pointer-events-none" />
          <div className="ambient-glow w-[400px] h-[400px] bg-[#E01E6A] dark:bg-[#BE185D] bottom-[-10%] right-[-5%] opacity-10 pointer-events-none" />

          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-50 dark:bg-purple-950/60 text-[#7C248C] dark:text-purple-300 text-xs font-black uppercase tracking-widest mb-6 border border-purple-200 dark:border-purple-800">
              <Sparkles className="w-4 h-4 text-[#E01E6A]" /> JVM Institute Admissions
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-heading text-slate-900 dark:text-white tracking-tight leading-tight mb-4">
              Student <span className="jvm-gradient-text">Enrollment &amp; Admission</span>
            </h1>
            
            <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg font-medium max-w-2xl mx-auto">
              Fill in your details below to enroll in our Data Engineering batches, request syllabus PDFs, or schedule a 1:1 counseling session at our Pune campus.
            </p>
          </div>
        </section>

        {/* ── Form & Contact Details Section ──────────────────────────────── */}
        <section className="py-16 md:py-24 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            
            {/* Left Column: Campus Info & Helpline (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              
              <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-xl space-y-6">
                <div>
                  <span className="text-xs font-extrabold text-purple-600 dark:text-purple-400 uppercase tracking-widest">
                    Direct Contact Info
                  </span>
                  <h3 className="text-2xl font-extrabold font-heading text-slate-900 dark:text-white mt-1">
                    Get in Touch
                  </h3>
                </div>

                <div className="space-y-4">
                  {/* Address */}
                  <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80">
                    <div className="w-10 h-10 rounded-xl bg-purple-100 dark:bg-purple-950/80 text-purple-600 dark:text-purple-300 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-black uppercase tracking-wider text-slate-500 dark:text-slate-400">Pune Campus Address</h4>
                      <p className="text-sm font-bold text-slate-900 dark:text-white mt-0.5">
                        JVM Tech Institute, Near Deccan Gymkhana &amp; Karve Nagar, Pune, Maharashtra 411004
                      </p>
                    </div>
                  </div>

                  {/* Phone Helpline */}
                  <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80">
                    <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-300 flex items-center justify-center shrink-0">
                      <PhoneCall className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-black uppercase tracking-wider text-slate-500 dark:text-slate-400">Admission Helpline</h4>
                      <p className="text-sm font-bold text-slate-900 dark:text-white mt-0.5">
                        +91 98765 43210 / +91 91234 56789
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80">
                    <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-950/80 text-blue-600 dark:text-blue-300 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-black uppercase tracking-wider text-slate-500 dark:text-slate-400">Official Email</h4>
                      <p className="text-sm font-bold text-slate-900 dark:text-white mt-0.5">
                        admissions@jvminstitute.com
                      </p>
                    </div>
                  </div>

                  {/* Office Hours */}
                  <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80">
                    <div className="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-950/80 text-amber-600 dark:text-amber-300 flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-black uppercase tracking-wider text-slate-500 dark:text-slate-400">Counseling Hours</h4>
                      <p className="text-sm font-bold text-slate-900 dark:text-white mt-0.5">
                        Monday – Sunday: 9:00 AM – 8:00 PM
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-2 flex items-center gap-4 text-xs font-bold text-slate-500 dark:text-slate-400">
                  <span className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400">
                    <ShieldCheck className="w-4 h-4" /> ISO Certified
                  </span>
                  <span className="flex items-center gap-1 text-purple-600 dark:text-purple-400">
                    <GraduationCap className="w-4 h-4" /> 100% Placement Support
                  </span>
                </div>
              </div>

            </div>

            {/* Right Column: Embedded Student Enrollment Form (7 cols) */}
            <div className="lg:col-span-7">
              <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-10 border border-slate-200 dark:border-slate-800 shadow-2xl relative overflow-hidden">
                
                {/* Header */}
                <div className="mb-6 pb-4 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-black font-heading text-slate-900 dark:text-white">
                      Enrollment Form
                    </h2>
                    <p className="text-xs text-slate-500 dark:text-slate-400 font-semibold mt-0.5">
                      Fill out your details to get enrolled or receive free syllabus callback
                    </p>
                  </div>
                  <span className="hidden sm:inline-block px-3 py-1 rounded-full bg-purple-50 dark:bg-purple-950/60 text-[#7C248C] dark:text-purple-300 text-xs font-extrabold border border-purple-200 dark:border-purple-800">
                    New Batches Starting
                  </span>
                </div>

                {!submitted ? (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* 1. Student Name */}
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
                          placeholder="+91 98765 43210" 
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
        </section>

      </main>

      <Footer />
    </div>
  );
}
