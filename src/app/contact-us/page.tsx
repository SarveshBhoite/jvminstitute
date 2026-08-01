"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageSquare,
  Send,
  CheckCircle2,
  Sparkles,
  ChevronDown,
  Navigation,
  Calendar,
  ArrowRight,
  Home,
  User,
  BookOpen,
  HelpCircle,
  PhoneCall,
  ShieldCheck,
  Building,
  Award,
  Headphones,
  Users
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ShinyText from "@/components/ShinyText";

// Word-by-Word Reveal Heading
function WordRevealHeading({ text, highlightText }: { text: string; highlightText: string }) {
  const words = text.split(" ");
  return (
    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight flex flex-wrap justify-center gap-x-3 gap-y-1">
      {words.map((word, idx) => {
        const isHighlight = word.toLowerCase().includes(highlightText.toLowerCase());
        return (
          <motion.span
            key={idx}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.08 }}
            className={`inline-block ${isHighlight ? "jvm-gradient-text" : ""}`}
          >
            {word}
          </motion.span>
        );
      })}
    </h2>
  );
}

// Contact Information Cards Data
const contactDetails = [
 
  {
    icon: Phone,
    title: "Call & Helpline",
    subtitle: "Admission & Course Support",
    details: ["+91 98765 43210 (Admissions)", "+91 87654 32109 (Student Support)"],
    badge: "Direct Call",
    color: "from-pink-500 to-rose-600",
    actionText: "Call Now",
    actionUrl: "tel:+919876543210"
  },
  {
    icon: Mail,
    title: "Email Support",
    subtitle: "Inquiries & Corporate Training",
    details: ["admissions@jvminstitute.com", "info@jvminstitute.com"],
    badge: "24/7 Response",
    color: "from-purple-500 to-indigo-600",
    actionText: "Send Mail",
    actionUrl: "mailto:admissions@jvminstitute.com"
  },
  {
    icon: Clock,
    title: "Office Timings",
    subtitle: "Walk-in & Counseling Hours",
    details: ["Monday - Saturday: 9:00 AM - 7:30 PM", "Sunday: 10:00 AM - 2:00 PM (Batch Only)"],
    badge: "Open Today",
    color: "from-emerald-500 to-teal-600",
    actionText: "Book Appointment",
    actionUrl: "#inquiry-form"
  }
];

// FAQ List Data
const faqItems = [
  {
    q: "How can I schedule a campus visit or live demo class?",
    a: "You can schedule a campus visit by filling out our inquiry form or calling our admission desk at +91 98765 43210. Our counselors will reserve a slot for you to tour our labs and attend a live demo session with senior faculty."
  },
  {
    q: "What batch timings are available for working professionals vs students?",
    a: "We offer flexible weekday morning/evening batches as well as dedicated weekend-only intensive tracks (Saturdays & Sundays) tailored specifically for working IT professionals."
  },
  {
    q: "Do you offer 100% placement assistance and interview preparation?",
    a: "Yes! Every student receives dedicated 1-on-1 placement support, including ATS resume crafting, PySpark & SQL technical mock interviews, LinkedIn profile optimization, and direct referrals to our 50+ hiring partners."
  },
  {
    q: "Can non-IT graduates or freshers enroll in Data Engineering & PySpark?",
    a: "Absolutely. Our curriculum starts with foundational Python and SQL building blocks before progressing into advanced PySpark, AWS, and Cloud Data Engineering."
  },
  {
    q: "What fee payment options and installment plans do you accept?",
    a: "We offer zero-cost EMI installment options, flexible batch payment plans, and early-bird scholarship discounts for deserving candidates."
  }
];

export default function ContactUsPage() {
  const { scrollYProgress } = useScroll();
  const heroParallaxY = useTransform(scrollYProgress, [0, 0.3], [0, -50]);

  // Form State
  const [formState, setFormState] = useState({
    fullName: "",
    email: "",
    phone: "",
    course: "PySpark Data Engineering",
    message: ""
  });

  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // FAQ Accordion State
  const [openFaq, setOpenFaq] = useState<number | null>(0);

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
          message: formState.message,
          source: "CONTACT_US_PAGE",
        }),
      });
    } catch (err) {
      console.error("Error submitting contact enquiry:", err);
    } finally {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({
        fullName: "",
        email: "",
        phone: "",
        course: "PySpark Data Engineering",
        message: ""
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAFC] dark:bg-[#0B0F19] transition-colors duration-300 overflow-x-hidden selection:bg-[#7C248C] selection:text-white">
      <Navbar />

      <main className="flex-grow ">
        
        {/* ========================================================= */}
        {/* 1. HERO BANNER (ONE VIEWPORT COMPACT PROFESSIONAL LAYOUT) */}
        {/* ========================================================= */}
        <section className="relative bg-gradient-to-r from-[#F5F3FF] via-[#FAFAFC] to-[#F3E8FF] dark:from-[#0B0F19] dark:via-[#111827] dark:to-[#1E1B4B] py-8 sm:py-12 lg:py-14 border-b border-purple-100/80 dark:border-slate-800/80 overflow-hidden">
          
          {/* Professional Background Grid & Ambient Glow Meshes */}
          <div className="absolute inset-0 bg-[radial-gradient(#7C3AED15_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
          <div className="ambient-glow w-96 h-96 bg-purple-400/20 dark:bg-purple-600/15 top-0 left-10 pointer-events-none" />
          <div className="ambient-glow w-[500px] h-[500px] bg-indigo-400/20 dark:bg-indigo-600/15 bottom-0 right-10 pointer-events-none" />
          
          {/* Dotted Flight Path Illustration Line */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30 dark:opacity-20 z-0" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M 100 80 Q 300 10 450 90 T 750 80 T 1050 160"
              fill="none"
              stroke="#7C3AED"
              strokeWidth="2"
              strokeDasharray="6 6"
            />
          </svg>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Column: Text, Badge, Feature Chips & Breadcrumb (7 Cols for Wider Layout) */}
              <div className="lg:col-span-7 space-y-4 text-left">
                
                {/* Pill Tag Badge */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-purple-100 dark:bg-purple-950/80 border border-purple-200/80 dark:border-purple-800/80 text-[#7C3AED] dark:text-[#A78BFA] text-xs font-black tracking-widest uppercase shadow-sm"
                >
                  <span>( GET IN TOUCH</span>
                </motion.div>

                {/* Compact Bold Heading (Single Viewport Fit) */}
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-[1.15]"
                >
                  We’d <span className="text-[#6D28D9] dark:text-[#A78BFA]">Love</span> to Hear From You!
                </motion.h1>

                {/* Supporting Paragraph (Wider Width) */}
                <motion.p
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-slate-600 dark:text-slate-300 text-sm sm:text-base max-w-xl leading-relaxed font-normal"
                >
                  Have questions about our programs, admissions, or career opportunities? Our team is here to help you at every step.
                </motion.p>

                {/* Feature Chips to Fill Empty White Space Professionally */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.25 }}
                  className="pt-1 flex flex-wrap gap-2 text-xs font-semibold text-slate-700 dark:text-slate-300"
                >
                  <span className="px-3 py-1 rounded-lg bg-white dark:bg-slate-900 border border-purple-200/70 dark:border-slate-800 shadow-sm flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
                    <span>1-on-1 Mentorship</span>
                  </span>
                  <span className="px-3 py-1 rounded-lg bg-white dark:bg-slate-900 border border-purple-200/70 dark:border-slate-800 shadow-sm flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                    <span>Live Cloud Labs</span>
                  </span>
                  <span className="px-3 py-1 rounded-lg bg-white dark:bg-slate-900 border border-purple-200/70 dark:border-slate-800 shadow-sm flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
                    <span>Dedicated Placement Desk</span>
                  </span>
                </motion.div>

                {/* Breadcrumb Navigation */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="pt-2 flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-500 dark:text-slate-400"
                >
                  <Link href="/" className="hover:text-purple-600 dark:hover:text-purple-300 transition-colors flex items-center gap-1">
                    <Home className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                    <span>Home</span>
                  </Link>
                  <span>&gt;</span>
                  <span className="text-slate-900 dark:text-white font-extrabold">Contact Us</span>
                </motion.div>

              </div>

              {/* Right Column: Students Photo & Floating Stats Badge (5 Cols) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="lg:col-span-5 relative flex justify-center lg:justify-end"
              >
                <div className="relative w-full max-w-md rounded-3xl overflow-hidden shadow-xl border-4 border-white dark:border-slate-800 group">
                  <Image
                    src="/students1.jpeg"
                    alt="JVM Institute Students Learning"
                    width={600}
                    height={360}
                    className="w-full h-[260px] sm:h-[300px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Floating Glass Stats Card (Bottom Right) */}
                <motion.div
                  animate={{ y: [0, 6, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute -bottom-4 right-2 sm:right-6 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md px-4 py-3 rounded-2xl border border-purple-200/80 dark:border-slate-700 shadow-xl flex items-center gap-3 z-20"
                >
                  <div className="w-9 h-9 rounded-xl bg-purple-100 dark:bg-purple-950 text-purple-600 dark:text-purple-300 flex items-center justify-center shadow-inner">
                    <Users className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-lg font-black text-slate-900 dark:text-white leading-none">10K+</div>
                    <div className="text-[10px] font-bold text-slate-500 dark:text-slate-400 mt-0.5">Students Connected</div>
                  </div>
                </motion.div>

              </motion.div>

            </div>
          </div>

        </section>


        {/* ========================================================= */}
        {/* 2. CONTACT INFORMATION & INQUIRY FORM SECTION */}
        {/* ========================================================= */}
        <section id="inquiry-form" className="py-10 md:py-20 relative overflow-hidden">
          
          {/* Background Ambient Decor */}
          <div className="ambient-glow w-[500px] h-[500px] bg-[#1E2B88] dark:bg-[#4F46E5] top-1/4 left-[-10%] opacity-15 pointer-events-none" />
          <div className="ambient-glow w-[450px] h-[450px] bg-[#E01E6A] dark:bg-[#EC4899] bottom-1/4 right-[-10%] opacity-15 pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(#80808012_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            
            {/* Section Header */}
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-xs font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400"
              >
                DIRECT COMMUNICATION
              </motion.span>

              <WordRevealHeading text="We'd Love to Hear From You" highlightText="Hear" />

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-slate-600 dark:text-slate-300 text-base"
              >
                Whether you have a query about our curriculum, placement assistance, or want to visit our campus, our team is ready to assist you.
              </motion.p>
            </div>

            {/* Equal 50/50 Grid: Contact Cards (6 cols) + Inquiry Form (6 cols) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              
              {/* Left Column: Contact Cards (6 cols) */}
              <div className="lg:col-span-6 space-y-4 flex flex-col justify-between">
                {contactDetails.map((card, idx) => {
                  const Icon = card.icon;
                  return (
                    <motion.div
                      key={card.title}
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: idx * 0.08 }}
                      whileHover={{ y: -4 }}
                      className="bg-white dark:bg-slate-900/90 p-5 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-lg hover:shadow-xl hover:border-indigo-500/60 dark:hover:border-indigo-400/60 transition-all duration-300 group relative overflow-hidden flex items-start gap-4"
                    >
                      {/* Icon Container */}
                      <motion.div
                        whileHover={{ rotate: 10, scale: 1.08 }}
                        className={`w-11 h-11 rounded-2xl bg-gradient-to-br ${card.color} text-white flex items-center justify-center shadow-md flex-shrink-0 mt-0.5`}
                      >
                        <Icon className="w-5 h-5 text-white" />
                      </motion.div>

                      <div className="flex-grow space-y-1">
                        <div className="flex items-center justify-between gap-2">
                          <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                            {card.title}
                          </h3>
                          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold bg-indigo-50 dark:bg-indigo-950/80 text-indigo-600 dark:text-indigo-300 border border-indigo-200/50 dark:border-indigo-800/50">
                            {card.badge}
                          </span>
                        </div>

                        <p className="text-[11px] font-semibold text-slate-400 dark:text-slate-500">
                          {card.subtitle}
                        </p>

                        <div className="pt-1.5 space-y-0.5">
                          {card.details.map((line, i) => (
                            <p key={i} className="text-xs text-slate-700 dark:text-slate-300 font-medium">
                              {line}
                            </p>
                          ))}
                        </div>

                        <div className="pt-2">
                          <a
                            href={card.actionUrl}
                            target={card.actionUrl.startsWith("http") ? "_blank" : "_self"}
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors"
                          >
                            <span>{card.actionText}</span>
                            <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}

                {/* WhatsApp Quick Chat CTA Box */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.35 }}
                  className="bg-gradient-to-r from-emerald-600 to-teal-700 text-white p-5 rounded-3xl shadow-lg flex items-center justify-between gap-4 group hover:shadow-emerald-500/20 transition-all"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <MessageSquare className="w-4 h-4 text-emerald-200 animate-pulse" />
                      <h4 className="text-sm font-bold text-white">Need Quick WhatsApp Chat?</h4>
                    </div>
                    <p className="text-[11px] text-emerald-100">
                      Instantly connect with our admission counselor on Business WhatsApp.
                    </p>
                  </div>

                  <a
                    href="https://wa.me/919876543210"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-2 rounded-xl bg-white text-emerald-800 text-xs font-extrabold shadow-md hover:bg-emerald-50 hover:scale-105 active:scale-95 transition-all flex-shrink-0 flex items-center gap-1"
                  >
                    <span>Chat Now</span>
                    <ArrowRight className="w-3 h-3" />
                  </a>
                </motion.div>
              </div>

              {/* Right Column: Modern Interactive Inquiry Form (6 cols) */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-6 bg-white dark:bg-slate-900/95 p-6 sm:p-8 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-xl relative overflow-hidden flex flex-col justify-between"
              >
                {/* Form Shimmer Accent */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

                {/* Compact Form Header */}
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-100 dark:border-slate-800">
                  <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white tracking-tight flex items-center gap-2">
                    <User className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                    <span>Get Free Career Counseling</span>
                  </h3>
                  <span className="text-[11px] font-semibold text-slate-400 dark:text-slate-500 hidden sm:inline-block">
                    Direct Inquiry
                  </span>
                </div>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 p-6 rounded-2xl text-center space-y-3 my-auto"
                  >
                    <div className="w-12 h-12 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto shadow-lg">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <h4 className="text-xl font-bold text-emerald-900 dark:text-emerald-200">Inquiry Submitted Successfully!</h4>
                    <p className="text-xs text-emerald-700 dark:text-emerald-300 max-w-md mx-auto leading-relaxed">
                      Thank you for contacting JVM Institute. Our senior admission counselor has received your details and will call you shortly.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="px-5 py-2 rounded-xl bg-emerald-600 text-white font-bold text-xs hover:bg-emerald-700 transition-colors shadow-md"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex-grow flex flex-col justify-between space-y-4">
                    {/* Full Name & Email Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      
                      {/* Full Name Input */}
                      <div className="relative">
                        <label className={`block text-xs font-bold mb-1.5 transition-colors ${
                          focusedField === "fullName" ? "text-indigo-600 dark:text-indigo-400" : "text-slate-700 dark:text-slate-300"
                        }`}>
                          Full Name *
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            required
                            placeholder="e.g. Rahul Sharma"
                            value={formState.fullName}
                            onFocus={() => setFocusedField("fullName")}
                            onBlur={() => setFocusedField(null)}
                            onChange={(e) => setFormState({ ...formState, fullName: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 text-slate-900 dark:text-white text-sm font-medium focus:outline-none focus:border-indigo-500 dark:focus:border-indigo-400 focus:ring-2 focus:ring-indigo-500/20 transition-all"
                          />
                        </div>
                      </div>

                      {/* Email Address Input */}
                      <div className="relative">
                        <label className={`block text-xs font-bold mb-1.5 transition-colors ${
                          focusedField === "email" ? "text-indigo-600 dark:text-indigo-400" : "text-slate-700 dark:text-slate-300"
                        }`}>
                          Email Address *
                        </label>
                        <div className="relative">
                          <input
                            type="email"
                            required
                            placeholder="rahul@example.com"
                            value={formState.email}
                            onFocus={() => setFocusedField("email")}
                            onBlur={() => setFocusedField(null)}
                            onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 text-slate-900 dark:text-white text-sm font-medium focus:outline-none focus:border-indigo-500 dark:focus:border-indigo-400 focus:ring-2 focus:ring-indigo-500/20 transition-all"
                          />
                        </div>
                      </div>

                    </div>

                    {/* Phone Number & Course Select Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      
                      {/* Phone Number Input */}
                      <div className="relative">
                        <label className={`block text-xs font-bold mb-1.5 transition-colors ${
                          focusedField === "phone" ? "text-indigo-600 dark:text-indigo-400" : "text-slate-700 dark:text-slate-300"
                        }`}>
                          Phone / WhatsApp Number *
                        </label>
                        <div className="relative">
                          <input
                            type="tel"
                            required
                            placeholder="+91 98765 43210"
                            value={formState.phone}
                            onFocus={() => setFocusedField("phone")}
                            onBlur={() => setFocusedField(null)}
                            onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 text-slate-900 dark:text-white text-sm font-medium focus:outline-none focus:border-indigo-500 dark:focus:border-indigo-400 focus:ring-2 focus:ring-indigo-500/20 transition-all"
                          />
                        </div>
                      </div>

                      {/* Course Interested In Select */}
                      <div className="relative">
                        <label className={`block text-xs font-bold mb-1.5 transition-colors ${
                          focusedField === "course" ? "text-indigo-600 dark:text-indigo-400" : "text-slate-700 dark:text-slate-300"
                        }`}>
                          Course Interested In *
                        </label>
                        <div className="relative">
                          <select
                            value={formState.course}
                            onFocus={() => setFocusedField("course")}
                            onBlur={() => setFocusedField(null)}
                            onChange={(e) => setFormState({ ...formState, course: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 text-slate-900 dark:text-white text-sm font-medium focus:outline-none focus:border-indigo-500 dark:focus:border-indigo-400 focus:ring-2 focus:ring-indigo-500/20 transition-all appearance-none cursor-pointer"
                          >
                            <option value="PySpark Data Engineering">PySpark & Data Engineering Master Track</option>
                            <option value="AWS Cloud & DevOps">AWS Cloud & DevOps Engineering</option>
                            <option value="Data Analytics & SQL">Advanced SQL & Data Analytics</option>
                            <option value="Python Development">Python Core & Backend Development</option>
                            <option value="Full-Stack Data Science">Full-Stack Data Science & AI</option>
                          </select>
                          <ChevronDown className="w-4 h-4 text-slate-400 absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none" />
                        </div>
                      </div>

                    </div>

                    {/* Message Textarea - Takes Remaining Height */}
                    <div className="relative flex-grow flex flex-col">
                      <label className={`block text-xs font-bold mb-1.5 transition-colors ${
                        focusedField === "message" ? "text-indigo-600 dark:text-indigo-400" : "text-slate-700 dark:text-slate-300"
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
                        className="w-full flex-grow min-h-[90px] px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 text-slate-900 dark:text-white text-sm font-medium focus:outline-none focus:border-indigo-500 dark:focus:border-indigo-400 focus:ring-2 focus:ring-indigo-500/20 transition-all resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-4 rounded-xl jvm-gradient-bg text-white font-bold text-base shadow-xl hover:shadow-indigo-500/25 transition-all flex items-center justify-center gap-2 group cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          <span>Submitting Inquiry...</span>
                        </>
                      ) : (
                        <>
                          <span>Submit Inquiry & Request Callback</span>
                          <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </motion.button>

                    <p className="text-[11px] text-center text-slate-400 dark:text-slate-500">
                      🔒 Your contact information is 100% secure. We strictly do not spam.
                    </p>

                  </form>
                )}

              </motion.div>

            </div>

          </div>
        </section>


        {/* ========================================================= */}
        {/* 3. INTERACTIVE CAMPUS LOCATION SECTION */}
        {/* ========================================================= */}
        <section className="py-20 md:py-28 relative overflow-hidden bg-slate-50/70 dark:bg-[#0B0F19]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-xs font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400"
              >
                PUNE EDUCATIONAL CENTER
              </motion.span>

              <WordRevealHeading text="Visit Our Campus in Pune" highlightText="Campus" />

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-slate-600 dark:text-slate-300 text-base"
              >
                Located in the heart of Pune's educational hub, equipped with modern cloud data labs, high-speed Wi-Fi, and 1-on-1 mentor desks.
              </motion.p>
            </div>

            {/* Map Container Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Column: Campus Details & Directions (5 cols) */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="lg:col-span-5 space-y-6"
              >
                <div className="bg-white dark:bg-slate-900/90 p-8 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-xl space-y-6">
                  
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
                      <Building className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white">JVM Institute Main Campus</h3>
                      <p className="text-xs text-indigo-600 dark:text-indigo-400 font-semibold">Deccan Gymkhana, Pune</p>
                    </div>
                  </div>

                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                    Walk in anytime during office hours to interact with our mentors, view live student projects, and get a feel for our hands-on teaching methodology.
                  </p>

                  <div className="space-y-3 pt-2">
                    <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                      <MapPin className="w-5 h-5 text-indigo-600 dark:text-indigo-400 flex-shrink-0 mt-0.5" />
                      <span>Commercial Plaza, 3rd Floor, Opposite Deccan Bus Stand, Karve Road / FC Road, Pune 411004.</span>
                    </div>

                    <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                      <Navigation className="w-5 h-5 text-indigo-600 dark:text-indigo-400 flex-shrink-0" />
                      <span>5 Mins Walk from Deccan Bus Depot & Metro Station</span>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-wrap gap-3">
                    <a
                      href="https://maps.google.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-6 py-3 rounded-xl jvm-gradient-bg text-white font-bold text-xs shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all"
                    >
                      <Navigation className="w-4 h-4 mr-1.5" />
                      <span>Get Directions on Map</span>
                    </a>

                    <a
                      href="#inquiry-form"
                      className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-bold text-xs hover:bg-slate-200 dark:hover:bg-slate-700 transition-all"
                    >
                      <Calendar className="w-4 h-4 mr-1.5" />
                      <span>Schedule a Tour</span>
                    </a>
                  </div>

                </div>
              </motion.div>

              {/* Right Column: Styled Embedded Map Container (7 cols) */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="lg:col-span-7 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-2xl p-3 relative overflow-hidden"
              >
                <div className="relative h-[360px] sm:h-[420px] rounded-2xl overflow-hidden">
                  <iframe
                    title="JVM Institute Location Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.2568778648834!2d73.84088927503759!3d18.51731678257448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c0773b069dcf%3A0x7d67ffaa8705f1df!2sDeccan%20Gymkhana%2C%20Pune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0, filter: "contrast(1.05)" }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                  
                  {/* Floating Overlay Badge */}
                  <div className="absolute top-4 left-4 bg-slate-900/90 text-white backdrop-blur-md px-4 py-2 rounded-xl text-xs font-bold border border-slate-700 shadow-lg flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                    <span>Campus Open for Walk-ins Today</span>
                  </div>
                </div>
              </motion.div>

            </div>

          </div>
        </section>


        {/* ========================================================= */}
        {/* 4. FREQUENTLY ASKED QUESTIONS (FAQ ACCORDION) */}
        {/* ========================================================= */}
        <section className="py-20 md:py-28 relative overflow-hidden bg-white dark:bg-[#0E1322]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-xs font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400"
              >
                GOT QUESTIONS?
              </motion.span>

              <WordRevealHeading text="Frequently Asked Questions" highlightText="Questions" />

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-slate-600 dark:text-slate-300 text-base"
              >
                Find answers to common questions about admissions, batch schedules, fees, and career support.
              </motion.p>
            </div>

            {/* Accordion Container */}
            <div className="space-y-4">
              {faqItems.map((item, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.08 }}
                    className="bg-slate-50 dark:bg-slate-900/80 rounded-2xl border border-slate-200/80 dark:border-slate-800 overflow-hidden shadow-sm hover:shadow-md transition-all"
                  >
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold text-slate-900 dark:text-white text-base sm:text-lg focus:outline-none cursor-pointer"
                    >
                      <span className="flex items-center gap-3">
                        <HelpCircle className="w-5 h-5 text-indigo-600 dark:text-indigo-400 flex-shrink-0" />
                        <span>{item.q}</span>
                      </span>
                      <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="w-8 h-8 rounded-full bg-slate-200/60 dark:bg-slate-800 flex items-center justify-center flex-shrink-0 text-slate-600 dark:text-slate-300"
                      >
                        <ChevronDown className="w-4 h-4" />
                      </motion.div>
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-6 pt-2 text-slate-600 dark:text-slate-300 text-sm leading-relaxed border-t border-slate-100 dark:border-slate-800/60">
                            {item.a}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>

          </div>
        </section>


        {/* ========================================================= */}
        {/* 5. CALL TO ACTION BANNER */}
        {/* ========================================================= */}


      </main>

      <Footer />
    </div>
  );
}
