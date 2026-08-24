"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LeadEnquiryModal, { openEnrollModal } from "@/components/LeadEnquiryModal";
import {
  GraduationCap,
  Users,
  ShieldCheck,
  BookOpen,
  Video,
  FileText,
  Award,
  CalendarCheck,
  Sparkles,
  Search,
  Bell,
  Lock,
  ArrowRight,
  CheckCircle2,
  PlayCircle,
  ExternalLink,
  Layers,
  BarChart3,
  QrCode,
  Laptop,
  UserCheck,
  FolderKanban,
  FileSpreadsheet,
  Zap,
  ChevronRight,
  ShieldAlert,
  Key,
  Globe,
  Radio,
  FileCheck2,
  BadgeCheck,
  Database,
  SlidersHorizontal,
  LucideIcon
} from "lucide-react";
import TextType from "@/components/TextType";

export default function LMSPage() {
  const [activeRoleTab, setActiveRoleTab] = useState<"student" | "trainer" | "admin">("student");
  const [activeDemoTab, setActiveDemoTab] = useState<"dashboard" | "courses" | "live" | "qr">("dashboard");

  const LMS_LOGIN_URL = "https://lms.jvminstitute.com"; // LMS portal link

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAFC] dark:bg-[#0B0F19] transition-colors duration-300">
      <Navbar />

      <main className="flex-grow">
        {/* ==========================================
            1. HERO BANNER - FULLY MOBILE RESPONSIVE (50VH ON DESKTOP, COMPACT AUTO ON MOBILE)
           ========================================== */}
        {/* ==========================================
            1. HERO BANNER - FULLY MOBILE RESPONSIVE (50VH ON DESKTOP, COMPACT AUTO ON MOBILE)
           ========================================== */}
        {/* ==========================================
            1. HERO BANNER - FULLY MOBILE OPTIMIZED & RESPONSIVE
           ========================================== */}
        <section className="w-full relative overflow-hidden bg-gradient-to-r from-[#FAF5FF] via-[#F3E8FF] to-[#FDF2F8] dark:from-[#0F172A] dark:via-[#1E1B4B] dark:to-[#2A0E35] min-h-auto lg:min-h-[50vh] pt-6 sm:pt-8 lg:pt-0 pb-0 flex items-end">
          {/* Main Hero Inner Layout */}
          <div className="relative w-full max-w-[1440px] mx-auto h-full flex flex-col lg:flex-row items-end justify-between">
            
            {/* Background Decorative Rings (Hidden/Subtle on small mobile, visible on tablet & desktop) */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[280px] sm:w-[450px] lg:w-[600px] h-[280px] sm:h-[450px] lg:h-[600px] pointer-events-none opacity-20 sm:opacity-30">
              <div className="absolute inset-0 rounded-full border border-[#1E2B88]/20 dark:border-purple-300/20"></div>
              <div className="absolute inset-10 sm:inset-16 rounded-full border border-[#7C248C]/25 dark:border-purple-400/20"></div>
              <div className="absolute inset-20 sm:inset-32 rounded-full border border-[#E01E6A]/30 dark:border-pink-400/20"></div>
            </div>

            {/* Solid JVM Brand Circles (Positioned neatly behind mobile & desktop layouts) */}
            <div className="absolute right-[5%] sm:right-[20%] lg:right-[26%] top-[-5%] sm:top-[-12%] w-[180px] sm:w-[280px] lg:w-[380px] h-[180px] sm:h-[280px] lg:h-[380px] rounded-full bg-gradient-to-br from-[#1E2B88] to-[#7C248C] opacity-80 sm:opacity-85 pointer-events-none"></div>
            <div className="absolute right-[0%] sm:right-[1%] bottom-[-5%] sm:bottom-[-16%] w-[110px] sm:w-[160px] lg:w-[220px] h-[110px] sm:h-[160px] lg:h-[220px] rounded-full bg-gradient-to-br from-[#7C248C] to-[#E01E6A] opacity-80 sm:opacity-85 pointer-events-none"></div>

            {/* Banner Main Grid Layout */}
            <div className="relative z-10 w-full h-full grid grid-cols-1 lg:grid-cols-12 items-end px-3 sm:px-8 lg:px-14 pt-2 sm:pt-4 pb-0 gap-5 sm:gap-8">
              
              {/* LEFT SIDE – LMS BRANDING (Stadium Pill Container) */}
              <div className="lg:col-span-6 flex flex-col justify-center items-center lg:items-start text-center lg:text-left self-center py-2 sm:py-4 w-full">
                
                {/* Stadium/Capsule Container (Compact layout on mobile, stadium pill on sm+) */}
                <div className="w-full max-w-xl bg-white/95 dark:bg-slate-900/95 backdrop-blur-md rounded-2xl sm:rounded-r-full sm:rounded-l-3xl p-4 sm:p-5 md:p-7 shadow-md flex items-center gap-3.5 sm:gap-6 hover:border-[#7C248C] transition-colors duration-300 border border-purple-100/60 dark:border-purple-900/40">
                  
                  {/* Education / LMS Logo Icon Container */}
                  <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-xl sm:rounded-2xl shrink-0 flex items-center justify-center overflow-hidden p-1 bg-white shadow-xs border border-slate-100">
                    <Image
                      src="/jvm_logo-bg.png"
                      alt="JVM Institute LMS Logo"
                      width={80}
                      height={80}
                      className="object-contain w-full h-full"
                    />
                  </div>

                  {/* Heading & Tagline inside Stadium Container */}
                  <div className="space-y-0.5 sm:space-y-1 text-left">
                    <h1 className="text-base sm:text-2xl lg:text-3xl font-black font-heading text-[#1E2B88] dark:text-white tracking-tight leading-tight">
                      Learning Management System
                    </h1>
                    <p className="text-[11px] sm:text-sm lg:text-base font-bold text-[#7C248C] dark:text-[#E01E6A]">
                      Learn to Empower
                    </p>

                    <div className="pt-2 sm:pt-3 flex flex-wrap items-center gap-2">
                      <a
                        href={LMS_LOGIN_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gradient-to-r from-[#1E2B88] via-[#7C248C] to-[#E01E6A] hover:opacity-95 text-white font-extrabold px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-[11px] sm:text-xs shadow-md transition-all flex items-center gap-1 sm:gap-1.5 cursor-pointer group"
                      >
                        <UserCheck className="w-3.5 h-3.5" />
                        <span>Portal Login</span>
                        <ExternalLink className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                      </a>

                      <button
                        onClick={() => openEnrollModal("JVM LMS Platform Demo", "LMS Portal Inquiry")}
                        className="bg-white dark:bg-slate-800 text-[#1E2B88] dark:text-white font-extrabold px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-[11px] sm:text-xs border border-[#1E2B88]/30 dark:border-purple-700 shadow-xs transition-all flex items-center gap-1 sm:gap-1.5 cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-700"
                      >
                        <Sparkles className="w-3.5 h-3.5 text-[#E01E6A]" />
                        <span>Request Demo</span>
                      </button>
                    </div>

                  </div>

                </div>

              </div>

              {/* RIGHT SIDE – CELEBRATING STUDENTS IMAGE (OPTIMIZED MOBILE & DESKTOP ALIGNMENT) */}
              <div className="lg:col-span-6 relative w-full flex items-end justify-center lg:justify-end mb-0 pb-0 min-h-[190px] sm:min-h-[280px] lg:min-h-[400px]">
                <div className="relative w-full max-w-sm sm:max-w-lg lg:max-w-2xl h-[190px] sm:h-[280px] lg:h-[400px] flex items-end justify-center lg:justify-end mb-0 pb-0">
                  <Image
                    src="/lms.png"
                    alt="JVM LMS Celebrating Students and Teachers"
                    width={800}
                    height={533}
                    className="w-auto h-full max-h-[190px] sm:max-h-[280px] lg:max-h-[400px] object-contain object-bottom drop-shadow-xl mix-blend-multiply dark:mix-blend-normal transition-transform duration-500 hover:scale-[1.01]"
                    priority
                  />
                </div>
              </div>

            </div>
          </div>
        </section>


        {/* ==========================================
            2. MASTER IN-DEMAND SKILLS (AI, ML & DATA ENGINEERING SECTION)
           ========================================== */}
        <section className="w-full relative bg-gradient-to-r from-[#FAF5FF] via-[#F3E8FF] to-[#FDF2F8] dark:from-[#0F172A] dark:via-[#1E1B4B] dark:to-[#2A0E35] py-12 sm:py-16 lg:py-24 border-b border-purple-100 dark:border-purple-950 transition-colors">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
              
              {/* Left Column – Detailed Content */}
              <div className="lg:col-span-7 space-y-4 sm:space-y-6 text-center lg:text-left">
                
                {/* Main Heading */}
                <div className="space-y-1.5 sm:space-y-2">
                  <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black font-heading text-slate-900 dark:text-white tracking-tight leading-[1.2]">
                    Learning Management System.
                  </h2>
                  <h3 className="text-xl sm:text-3xl lg:text-4xl font-extrabold font-heading text-[#1E2B88] dark:text-[#95EFC0] tracking-tight leading-tight">
                    AI, ML & Data Engineering.
                  </h3>
                </div>

                {/* Paragraph 1 */}
                <p className="text-sm sm:text-base lg:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                  Our coaching program is designed to help you gain industry-ready skills in Artificial Intelligence, Machine Learning, and Data Engineering. Learn from expert mentors, work on real-world projects, and build a strong foundation in programming, data analysis, model building, and deployment. Whether you're a beginner or looking to advance your career, our structured learning approach ensures you stay ahead in the fast-growing tech industry.
                </p>

                {/* Paragraph 2 */}
                <p className="text-sm sm:text-base lg:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                  We focus on practical learning, problem-solving, and hands-on experience with the latest tools and technologies. From data processing and machine learning algorithms to cloud platforms and model deployment, we prepare you for real-world challenges and help you become job-ready with confidence.
                </p>

                {/* Stylish Gradient CTA Button */}
                <div className="pt-2 sm:pt-4 flex justify-center lg:justify-start">
                  <button
                    onClick={() => openEnrollModal("JVM AI & Data Programs", "Explore Tech Programs")}
                    className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#C2410C] via-[#EA580C] to-[#D97706] hover:from-[#B45309] hover:to-[#C2410C] text-white font-extrabold px-6 sm:px-8 py-3.5 sm:py-4 rounded-full text-sm sm:text-base lg:text-lg shadow-lg hover:shadow-orange-500/25 hover:scale-[1.02] transition-all cursor-pointer group"
                  >
                    <span>Explore Programs</span>
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

              </div>

              {/* Right Column – Technology Laptop Visual */}
              <div className="lg:col-span-5 flex justify-center lg:justify-end relative pt-4 lg:pt-0">
                <div className="relative w-full max-w-md sm:max-w-lg lg:max-w-xl aspect-[16/10] group flex items-center justify-center">
                  
                  {/* Subtle Background Glow Accent */}
                  <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-3xl blur-2xl group-hover:scale-105 transition-transform duration-700 pointer-events-none"></div>

                  <Image
                    src="/ai_laptop_clean.jpg"
                    alt="AI Machine Learning and Data Engineering Laptop Visual"
                    fill
                    className="object-contain drop-shadow-xl mix-blend-multiply dark:mix-blend-normal group-hover:scale-[1.02] transition-transform duration-500"
                    priority
                  />
                </div>
              </div>

            </div>
          </div>
        </section>


        {/* ==========================================
            2. THREE ROLE-BASED ECOSYSTEM TABS (STUDENTS, TRAINERS, ADMINS)
           ========================================== */}
        <section className="py-16 sm:py-24 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#7C248C] dark:text-purple-400 bg-purple-100 dark:bg-purple-950/60 px-3.5 py-1 rounded-full border border-purple-200 dark:border-purple-800">
              Role-Based Architecture
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold font-heading text-slate-900 dark:text-white">
              Tailored Portals for Every Stakeholder
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">
              Whether you are a student tracking progress, a trainer creating assignments, or an admin managing batches, JVM LMS delivers a customized workbench.
            </p>

            {/* Role Tab Navigation Buttons with Glassmorphism & Active Glow */}
            <div className="flex justify-center pt-4">
              <div className="inline-flex p-1.5 bg-slate-200/80 dark:bg-slate-800/80 rounded-2xl border border-slate-300/60 dark:border-slate-700 shadow-md">
                <button
                  onClick={() => setActiveRoleTab("student")}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all duration-300 cursor-pointer ${
                    activeRoleTab === "student"
                      ? "bg-gradient-to-r from-[#1E2B88] to-[#7C248C] text-white shadow-lg scale-[1.02]"
                      : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                  }`}
                >
                  <GraduationCap className="w-4 h-4" />
                  <span>Student Learning Features</span>
                </button>

                <button
                  onClick={() => setActiveRoleTab("trainer")}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all duration-300 cursor-pointer ${
                    activeRoleTab === "trainer"
                      ? "bg-gradient-to-r from-[#1E2B88] to-[#7C248C] text-white shadow-lg scale-[1.02]"
                      : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                  }`}
                >
                  <Users className="w-4 h-4" />
                  <span>Trainer & Course Mgmt</span>
                </button>

                <button
                  onClick={() => setActiveRoleTab("admin")}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all duration-300 cursor-pointer ${
                    activeRoleTab === "admin"
                      ? "bg-gradient-to-r from-[#1E2B88] to-[#7C248C] text-white shadow-lg scale-[1.02]"
                      : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                  }`}
                >
                  <ShieldCheck className="w-4 h-4" />

                  <span>Admin Control Center</span>
                </button>
              </div>
            </div>
          </div>

          {/* Role Tab Content Cards Grid */}
          {activeRoleTab === "student" && (
            <div className="grid md:grid-cols-3 gap-6 animate-in fade-in duration-300">
              <RoleCard
                icon={BookOpen}
                iconBg="bg-indigo-100 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300"
                title="Structured Course Vault"
                description="Access HD recordings of live classes, chapter-wise notes, source code repositories, and downloadable PDFs anytime, anywhere."
                bullets={[
                  "24/7 Unlimited Video Replays",
                  "Chapter & Topic Breakdown",
                  "Bookmarking & Notes Notes taking",
                  "Mobile-friendly Responsive Viewer"
                ]}
              />

              <RoleCard
                icon={Video}
                iconBg="bg-[#1E2B88]/10 text-[#1E2B88] dark:bg-indigo-950 dark:text-indigo-300"
                title="Live Interactive Classroom"
                description="Direct 1-click Google Meet integration with class schedules, reminder notifications, live Q&A, and interactive polls."
                bullets={[
                  "Instant 1-Click Join Link",
                  "Class Schedule Calendar Sync",
                  "Automated Attendance Tracking",
                  "Recorded Session Archival"
                ]}
              />

              <RoleCard
                icon={Award}
                iconBg="bg-purple-100 text-purple-700 dark:bg-purple-950 dark:text-purple-300"
                title="Assessments & QR Certificates"
                description="Take topic quizzes, submit coding assignments, track grades in real-time, and download verified digital completion certificates."
                bullets={[
                  "Instant Automated Grading",
                  "Assignment Feedback & Hints",
                  "QR Verification on Certificates",
                  "LinkedIn One-click Shareable"
                ]}
              />
            </div>
          )}

          {activeRoleTab === "trainer" && (
            <div className="grid md:grid-cols-3 gap-6 animate-in fade-in duration-300">
              <RoleCard
                icon={FolderKanban}
                iconBg="bg-purple-100 text-purple-700 dark:bg-purple-950 dark:text-purple-300"
                title="Course Builder & Content Vault"
                description="Upload video lessons, organize modules, attach PDF cheat sheets, sample code scripts, and reference assignments with ease."
                bullets={[
                  "Drag & Drop Lesson Structuring",
                  "PDF & Video Resource Uploader",
                  "Prerequisite & Lock Sequences",
                  "Multi-batch Content Reuse"
                ]}
              />

              <RoleCard
                icon={FileSpreadsheet}
                iconBg="bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300"
                title="Quizzes & Assignment Grading"
                description="Create MCQs, coding challenges, and essay questions. Review student submissions with inline feedback and scorecards."
                bullets={[
                  "Automated & Manual Grading",
                  "Custom Evaluation Rubrics",
                  "Bulk Feedback & Status Tagging",
                  "Plagiarism & Duplicate Checks"
                ]}
              />

              <RoleCard
                icon={CalendarCheck}
                iconBg="bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-300"
                title="Live Batch & Attendance Analytics"
                description="Schedule Google Meet live classes, track daily student attendance percentage, and identify learners who need extra guidance."
                bullets={[
                  "Automated Class Attendance Logs",
                  "Student Engagement Metrics",
                  "Batch Progress Overview",
                  "Broadcast Notifications to Students"
                ]}
              />
            </div>
          )}

          {activeRoleTab === "admin" && (
            <div className="grid md:grid-cols-3 gap-6 animate-in fade-in duration-300">
              <RoleCard
                icon={Users}
                iconBg="bg-pink-100 text-pink-700 dark:bg-pink-950 dark:text-pink-300"
                title="Enrollment & Batch Management"
                description="Enroll students into offline or online batches, manage fee installment tracking, assign trainers, and handle transfers effortlessly."
                bullets={[
                  "Bulk Student CSV Import",
                  "Multi-Batch Schedule Management",
                  "Fee Payment & Receipts Tracking",
                  "Role-based Student Permissions"
                ]}
              />

              <RoleCard
                icon={Lock}
                iconBg="bg-[#E01E6A]/10 text-[#E01E6A] dark:bg-pink-950 dark:text-pink-300"
                title="Granular Security & Access Roles"
                description="Assign fine-grained security policies for Admins, Sub-Admins, Trainers, TAs, and Students with audit logs and IP controls."
                bullets={[
                  "RBAC (Role-Based Access Control)",
                  "Activity & Login Audit Logs",
                  "Secure Encryption & SSO Support",
                  "Session & Multi-Device Control"
                ]}
              />

              <RoleCard
                icon={BarChart3}
                iconBg="bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300"
                title="Comprehensive Reports & Search"
                description="Generate institute-wide performance reports, export attendance sheets to Excel, and search any student or course instantly."
                bullets={[
                  "Global Instant Search Engine",
                  "Batch & Placement Analytics",
                  "Exportable PDF / Excel Reports",
                  "System Performance Monitoring"
                ]}
              />
            </div>
          )}
        </section>


        {/* ==========================================
            3. FEATURE HIGHLIGHTS BENTO GRID
           ========================================== */}
        <section className="py-16 sm:py-20 bg-slate-100/70 dark:bg-[#0F172A]/50 border-y border-slate-200/80 dark:border-slate-800">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#E01E6A] dark:text-pink-400 bg-pink-100 dark:bg-pink-950/60 px-3.5 py-1 rounded-full border border-pink-200 dark:border-pink-800">
                Complete LMS Capability
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold font-heading text-slate-900 dark:text-white">
                Everything Required for Modern Tech Education
              </h2>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">
                Designed to deliver an enterprise learning experience with zero complexity.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              
              {/* Feature 1: Courses & Documents */}
              <FeatureCard
                icon={BookOpen}
                iconColor="text-indigo-600 dark:text-indigo-400"
                title="Courses, Videos & Documents"
                description="Structured learning modules with HD video playback, downloadable PDF notes, PySpark / SQL code notebooks, and reference materials."
              />

              {/* Feature 2: Quizzes & Assignments */}
              <FeatureCard
                icon={FileCheck2}
                iconColor="text-purple-600 dark:text-purple-400"
                title="Quizzes, Assessments & Assignments"
                description="Automated multiple-choice tests, hands-on coding assignments, submission deadliner reminders, and instant scorecards."
              />

              {/* Feature 3: Certificates with QR Verification */}
              <FeatureCard
                icon={QrCode}
                iconColor="text-emerald-600 dark:text-emerald-400"
                title="Certificates with QR Verification"
                description="Tamper-proof digital certificates featuring unique QR codes that recruiters can scan instantly to verify student credentials."
              />

              {/* Feature 4: Batch & Attendance */}
              <FeatureCard
                icon={CalendarCheck}
                iconColor="text-amber-600 dark:text-amber-400"
                title="Batch, Enrollment & Attendance"
                description="Seamless batch allocation, automated student enrollment tracking, attendance log registers, and progress tracking bars."
              />

              {/* Feature 5: Google Meet Integration */}
              <FeatureCard
                icon={Video}
                iconColor="text-pink-600 dark:text-pink-400"
                title="Google Meet / Live Classes"
                description="Integrated live virtual classrooms with direct Google Meet launch, class agenda, calendar sync, and automatic session recording links."
              />

              {/* Feature 6: Notifications, Search & Reports */}
              <FeatureCard
                icon={Bell}
                iconColor="text-sky-600 dark:text-sky-400"
                title="Notifications, Search & Reports"
                description="Instant multi-channel notifications (in-app & email), quick global search, and exportable executive reports for batch performance."
              />

            </div>
          </div>
        </section>


        {/* ==========================================
            4. SECURITY & ROLE-BASED ACCESS SECTION
           ========================================== */}
        <section className="py-16 sm:py-24 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-slate-900 via-[#1E2B88] to-slate-900 rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden shadow-2xl border border-slate-800">
            <div className="ambient-glow w-96 h-96 bg-[#E01E6A] top-[-100px] right-[-100px] opacity-30 pointer-events-none"></div>

            <div className="grid lg:grid-cols-12 gap-8 items-center relative z-10">
              
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-pink-300 border border-white/20 text-xs font-bold uppercase tracking-wider">
                  <ShieldAlert className="w-3.5 h-3.5" /> High Security & Privacy
                </div>

                <h2 className="text-2xl sm:text-4xl font-extrabold font-heading text-white">
                  Bank-Grade Security & Role-Based Access Control
                </h2>

                <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
                  JVM LMS protects your intellectual property and student data with state-of-the-art security measures. Strict role-based permissions prevent unauthorized access and ensure data privacy across all batches.
                </p>

                <div className="grid sm:grid-cols-2 gap-4 pt-2">
                  <div className="flex items-start gap-3 bg-white/10 p-4 rounded-2xl border border-white/10 hover:border-amber-400/60 hover:bg-white/15 hover:-translate-y-1 transition-all duration-300 group">
                    <Key className="w-5 h-5 text-amber-400 shrink-0 mt-0.5 group-hover:rotate-12 transition-transform" />
                    <div>
                      <div className="text-xs font-bold text-white group-hover:text-amber-300 transition-colors">Encrypted Data & SSO</div>
                      <div className="text-[11px] text-slate-300 mt-0.5">TLS 1.3 encryption and Google OAuth Single Sign-On.</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 bg-white/10 p-4 rounded-2xl border border-white/10 hover:border-emerald-400/60 hover:bg-white/15 hover:-translate-y-1 transition-all duration-300 group">
                    <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                    <div>
                      <div className="text-xs font-bold text-white group-hover:text-emerald-300 transition-colors">RBAC Permissions</div>
                      <div className="text-[11px] text-slate-300 mt-0.5">Distinct access levels for Students, Trainers, TAs, and Admins.</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 bg-white/10 p-4 rounded-2xl border border-white/10 hover:border-sky-400/60 hover:bg-white/15 hover:-translate-y-1 transition-all duration-300 group">
                    <Zap className="w-5 h-5 text-sky-400 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                    <div>
                      <div className="text-xs font-bold text-white group-hover:text-sky-300 transition-colors">Session Security</div>
                      <div className="text-[11px] text-slate-300 mt-0.5">Automatic timeout, concurrent login detection & IP filters.</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 bg-white/10 p-4 rounded-2xl border border-white/10 hover:border-pink-400/60 hover:bg-white/15 hover:-translate-y-1 transition-all duration-300 group">
                    <BadgeCheck className="w-5 h-5 text-pink-400 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                    <div>
                      <div className="text-xs font-bold text-white group-hover:text-pink-300 transition-colors">Audit Trail Logs</div>
                      <div className="text-[11px] text-slate-300 mt-0.5">Detailed activity logs for every administrative action.</div>
                    </div>
                  </div>
                </div>

                <div className="pt-4 flex flex-wrap gap-4">
                  <a
                    href={LMS_LOGIN_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-[#1E2B88] font-extrabold px-6 py-3.5 rounded-2xl text-xs sm:text-sm hover:bg-slate-100 hover:scale-105 transition-all flex items-center gap-2 shadow-lg"
                  >
                    <span>Access Secure LMS Portal</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>

              <div className="lg:col-span-5 flex justify-center">
                <div className="bg-slate-950/80 p-6 rounded-3xl border border-slate-700/80 text-center space-y-4 max-w-sm shadow-2xl hover:scale-105 hover:border-purple-500/60 transition-all duration-500 group">
                  <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-3xl mx-auto flex items-center justify-center shadow-lg group-hover:rotate-6 transition-transform">
                    <Lock className="w-10 h-10 text-white" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white">JVM LMS Security Architecture</h3>
                    <p className="text-xs text-slate-400 mt-1">ISO 9001:2020 Compliant Security & Data Privacy Practices</p>
                  </div>
                  <div className="pt-2">
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 bg-emerald-950/60 px-3 py-1 rounded-full border border-emerald-800">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                      100% Data Protection Verified
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>


        {/* ==========================================
            5. PROMINENT LMS LOGIN CALL TO ACTION BANNER
           ========================================== */}
        <section className="py-16 bg-slate-50 dark:bg-[#0B0F19]">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <div className="max-w-3xl mx-auto space-y-3">
              <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-slate-900 dark:text-white">
                Ready to Start Learning on JVM LMS?
              </h2>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">
                Log in with your JVM Institute credentials to access your courses, live classes, assignments, and certificates.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <a
                href={LMS_LOGIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="jvm-gradient-bg text-white font-extrabold px-8 py-4 rounded-2xl text-base shadow-xl hover:shadow-2xl hover:scale-105 transition-all flex items-center gap-3 cursor-pointer border border-white/20"
              >
                <UserCheck className="w-5 h-5 text-white" />
                <span>Go to LMS Portal</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              <button
                onClick={() => openEnrollModal("JVM LMS Access Inquiry", "Course & LMS Assistance")}
                className="bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-[#1E2B88] dark:text-white font-extrabold px-7 py-4 rounded-2xl text-base border border-slate-300 dark:border-slate-700 shadow-sm transition-all flex items-center gap-2 cursor-pointer"
              >
                <Sparkles className="w-5 h-5 text-[#E01E6A]" />
                <span>Need Help Logging In?</span>
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <LeadEnquiryModal />
    </div>
  );
}

{/* Helper Sub-Component for Role Cards with Dynamic Animations */}
function RoleCard({
  icon: Icon,
  iconBg,
  title,
  description,
  bullets
}: {
  icon: LucideIcon;
  iconBg: string;
  title: string;
  description: string;
  bullets: string[];
}) {
  return (
    <div className="relative group rounded-3xl p-[1px] bg-gradient-to-b from-slate-200/80 via-purple-100/30 to-slate-200/80 dark:from-slate-700/80 dark:via-purple-900/40 dark:to-slate-800/80 hover:from-[#1E2B88] hover:via-[#7C248C] hover:to-[#E01E6A] transition-all duration-500 shadow-lg hover:shadow-2xl hover:-translate-y-2">
      
      {/* Background Ambient Glow on Hover */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-[#1E2B88] via-[#7C248C] to-[#E01E6A] rounded-3xl blur-md opacity-0 group-hover:opacity-30 transition duration-500 pointer-events-none"></div>

      <div className="relative h-full bg-white dark:bg-[#0F172A] rounded-[23px] p-6 sm:p-7 flex flex-col justify-between overflow-hidden">
        
        {/* Subtle Decorative Shimmer Accent in Corner */}
        <div className="absolute -top-12 -right-12 w-24 h-24 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-700 pointer-events-none"></div>

        <div className="space-y-5">
          {/* Animated Icon Badge */}
          <div className="flex items-center justify-between">
            <div className={`w-14 h-14 rounded-2xl ${iconBg} flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-md group-hover:shadow-purple-500/20`}>
              <Icon className="w-7 h-7 transition-transform duration-500 group-hover:scale-110" />
            </div>
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
              Role Feature
            </span>
          </div>

          <div>
            <h3 className="text-xl font-extrabold text-slate-900 dark:text-white font-heading group-hover:text-[#1E2B88] dark:group-hover:text-purple-300 transition-colors duration-300">
              {title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mt-2">
              {description}
            </p>
          </div>

          <div className="space-y-2.5 pt-3 border-t border-slate-100 dark:border-slate-800/80">
            {bullets.map((item, idx) => (
              <div key={idx} className="flex items-center gap-2.5 text-xs font-semibold text-slate-700 dark:text-slate-200 group/bullet">
                <div className="p-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-400 group-hover/bullet:scale-125 transition-transform duration-200">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <span className="group-hover/bullet:text-slate-900 dark:group-hover/bullet:text-white transition-colors">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Hover Arrow Indicator */}
        <div className="pt-4 flex items-center justify-between text-xs font-bold text-[#1E2B88] dark:text-purple-400 opacity-80 group-hover:opacity-100 transition-opacity">
          <span>Explore Capabilities</span>
          <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform duration-300" />
        </div>

      </div>
    </div>
  );
}

{/* Helper Sub-Component for Bento Feature Cards with Animated Hover Effects */}
function FeatureCard({
  icon: Icon,
  iconColor,
  title,
  description
}: {
  icon: LucideIcon;
  iconColor: string;
  title: string;
  description: string;
}) {
  return (
    <div className="relative group rounded-3xl p-[1px] bg-slate-200/80 dark:bg-slate-800/80 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 transition-all duration-500 shadow-xs hover:shadow-xl hover:-translate-y-1.5">
      <div className="relative h-full bg-white dark:bg-[#0F172A] rounded-[23px] p-6 space-y-4 overflow-hidden">
        
        {/* Top Floating Glow Pill */}
        <div className="flex items-center justify-between">
          <div className="p-3.5 rounded-2xl bg-slate-100 dark:bg-slate-800/90 w-fit transition-all duration-500 group-hover:scale-110 group-hover:bg-purple-50 dark:group-hover:bg-purple-950/60 shadow-sm">
            <Icon className={`w-6 h-6 ${iconColor} transition-transform duration-300 group-hover:rotate-6`} />
          </div>
          <span className="w-2 h-2 rounded-full bg-slate-300 dark:bg-slate-700 group-hover:bg-pink-500 group-hover:animate-ping transition-colors"></span>
        </div>

        <div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white font-heading group-hover:text-[#7C248C] dark:group-hover:text-purple-300 transition-colors">
            {title}
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mt-1.5">
            {description}
          </p>
        </div>

        <div className="pt-2 flex items-center gap-1 text-[11px] font-bold text-slate-400 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
          <span>Active Feature</span>
          <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </div>

      </div>
    </div>
  );
}
