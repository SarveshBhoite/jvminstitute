"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import {
  BookOpen,
  Download,
  FileText,
  Video,
  Code2,
  Sparkles,
  Star,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  Zap,
  Target,
  Trophy,
  Database,
  BarChart3,
  GitBranch,
  Terminal,
  ExternalLink,
} from "lucide-react";

// ─── Data ────────────────────────────────────────────────────────────────────

const freeResources = [
  {
    icon: <FileText className="w-6 h-6 text-blue-600" />,
    bg: "bg-blue-50 dark:bg-blue-950/40",
    border: "border-blue-200 dark:border-blue-800",
    tag: "Free PDF",
    tagColor: "bg-blue-100 dark:bg-blue-900/60 text-blue-700 dark:text-blue-300",
    title: "PySpark Interview Q&A Bank",
    desc: "100+ most-asked PySpark interview questions with detailed answers, code snippets, and real-world scenarios.",
    downloads: "2.4k",
    pages: "48 pages",
  },
  {
    icon: <Code2 className="w-6 h-6 text-emerald-600" />,
    bg: "bg-emerald-50 dark:bg-emerald-950/40",
    border: "border-emerald-200 dark:border-emerald-800",
    tag: "Free PDF",
    tagColor: "bg-emerald-100 dark:bg-emerald-900/60 text-emerald-700 dark:text-emerald-300",
    title: "SQL Cheat Sheet – Advanced",
    desc: "Window functions, CTEs, subqueries, and performance tuning tips. The ultimate quick-reference for data engineers.",
    downloads: "3.1k",
    pages: "12 pages",
  },
  {
    icon: <Database className="w-6 h-6 text-purple-600" />,
    bg: "bg-purple-50 dark:bg-purple-950/40",
    border: "border-purple-200 dark:border-purple-800",
    tag: "Free PDF",
    tagColor: "bg-purple-100 dark:bg-purple-900/60 text-purple-700 dark:text-purple-300",
    title: "Data Engineering Roadmap",
    desc: "Step-by-step career roadmap from beginner to senior data engineer — tools, timelines, and certifications.",
    downloads: "5.7k",
    pages: "6 pages",
  },
  {
    icon: <BarChart3 className="w-6 h-6 text-pink-600" />,
    bg: "bg-pink-50 dark:bg-pink-950/40",
    border: "border-pink-200 dark:border-pink-800",
    tag: "Free PDF",
    tagColor: "bg-pink-100 dark:bg-pink-900/60 text-pink-700 dark:text-pink-300",
    title: "Python for Data Analysis",
    desc: "Pandas, NumPy & Matplotlib crash guide with exercises. Go from raw CSVs to publication-ready charts.",
    downloads: "4.2k",
    pages: "32 pages",
  },
];

const qaTopics = [
  {
    category: "PySpark",
    icon: <Terminal className="w-4 h-4" />,
    color: "text-orange-600 dark:text-orange-400",
    bg: "bg-orange-50 dark:bg-orange-950/40",
    questions: [
      { q: "What is the difference between RDD, DataFrame, and Dataset in Spark?", a: "RDD (Resilient Distributed Dataset) is the fundamental low-level API providing full control but no optimization. DataFrame is a distributed collection with named columns and schema, allowing Spark's Catalyst optimizer to apply query optimizations. Dataset combines the benefits of both — strong typing from RDD and optimization from DataFrame. In PySpark, DataFrames are the go-to as Python doesn't support Datasets directly." },
      { q: "Explain lazy evaluation in PySpark and why it matters.", a: "Lazy evaluation means transformations (map, filter, join) are not executed immediately — they build a logical plan (DAG). Execution only happens when an action (collect, count, show, write) is called. This allows Spark to optimize the entire computation graph before running, eliminating unnecessary steps and improving performance significantly." },
      { q: "What is a broadcast variable and when should you use it?", a: "A broadcast variable is a read-only shared variable cached on each worker node, avoiding sending a copy with every task. Use it when joining a large DataFrame with a small lookup table (< ~10 MB). It drastically reduces shuffle operations. Example: spark.sparkContext.broadcast(small_dict)." },
    ],
  },
  {
    category: "SQL",
    icon: <Database className="w-4 h-4" />,
    color: "text-blue-600 dark:text-blue-400",
    bg: "bg-blue-50 dark:bg-blue-950/40",
    questions: [
      { q: "What is the difference between RANK(), DENSE_RANK(), and ROW_NUMBER()?", a: "ROW_NUMBER() assigns a unique sequential integer regardless of ties. RANK() gives the same rank to tied rows but skips the next rank (1,1,3). DENSE_RANK() gives the same rank to tied rows but doesn't skip (1,1,2). Use ROW_NUMBER for pagination, RANK/DENSE_RANK for leaderboards and top-N queries." },
      { q: "How does a CTE differ from a subquery, and when is each preferred?", a: "A CTE (Common Table Expression) is a named temporary result set defined with WITH that improves readability and can be referenced multiple times. Subqueries are inline and harder to reuse. CTEs are preferred for complex logic, recursive queries, and when the same subquery is used more than once. Subqueries can sometimes be faster for simple one-time use." },
    ],
  },
  {
    category: "Data Engineering",
    icon: <GitBranch className="w-4 h-4" />,
    color: "text-emerald-600 dark:text-emerald-400",
    bg: "bg-emerald-50 dark:bg-emerald-950/40",
    questions: [
      { q: "Explain the Medallion Architecture (Bronze, Silver, Gold).", a: "Medallion is a lakehouse data design pattern with three layers: Bronze stores raw ingested data as-is (landing zone). Silver applies data quality rules, deduplication, and schema enforcement. Gold is business-level aggregated data optimized for analytics and BI. This pattern enables data quality gates and full reprocessing from raw data at any point." },
      { q: "What is data partitioning and why is it critical for performance?", a: "Partitioning divides large datasets into smaller, manageable chunks based on a column (e.g., date, region). It enables partition pruning — queries only scan relevant partitions, dramatically reducing I/O. In PySpark: df.write.partitionBy('year', 'month'). Choose columns with good cardinality that align with your query patterns. Over-partitioning (too many small files) hurts performance." },
    ],
  },
];

const learningPath = [
  { step: "01", phase: "PHASE 1", title: "Python Fundamentals", desc: "Variables, functions, OOP, file I/O", status: "foundation" },
  { step: "02", phase: "PHASE 2", title: "SQL & Advanced Databases", desc: "Joins, window functions, indexing & CTEs", status: "core" },
  { step: "03", phase: "PHASE 3", title: "PySpark & Big Data", desc: "RDDs, DataFrames, Spark SQL & optimization", status: "core" },
  { step: "04", phase: "PHASE 4", title: "Cloud Data Platforms", desc: "AWS S3, Azure ADLS, Databricks mastery", status: "advanced" },
  { step: "05", phase: "PHASE 5", title: "Orchestration & CI/CD", desc: "Airflow, Databricks Jobs, Git & dbt", status: "advanced" },
  { step: "06", phase: "PHASE 6", title: "Mock Interviews & System Design", desc: "Live coding + architecture interview rounds", status: "interview" },
  { step: "07", phase: "PHASE 7", title: "100% Placement & Offer Letter", desc: "Resume building, referral drives & job offers", status: "placement" },
];

// ─── Page Component ────────────────────────────────────────────────────────────

export default function StudyMaterialPage() {

  const [openQ, setOpenQ] = useState<string | null>(null);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAFC] dark:bg-[#0B0F19] transition-colors duration-300">
      <Navbar />

      <main className="flex-grow">

        {/* ── Hero ─────────────────────────────────────────────────────────── */}
        <section className="relative overflow-hidden bg-[#FAFAFC] dark:bg-[#0B0F19] py-16 md:py-24">
          <div className="ambient-glow w-[500px] h-[500px] bg-[#1E2B88] dark:bg-[#4F46E5] top-[-10%] left-[-10%] opacity-10 pointer-events-none" />
          <div className="ambient-glow w-[400px] h-[400px] bg-[#E01E6A] dark:bg-[#BE185D] bottom-[-10%] right-[-5%] opacity-10 pointer-events-none" />

          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-xs font-black text-purple-700 dark:text-purple-300 uppercase tracking-widest mb-6">
              <BookOpen className="w-4 h-4 text-[#E01E6A]" /> Student Resource Hub
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-heading text-slate-900 dark:text-white tracking-tight leading-tight mb-4">
              Study Smarter,{" "}
              <span className="jvm-gradient-text">Crack Interviews</span>{" "}
              Faster
            </h1>
            <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg font-medium max-w-2xl mx-auto mb-8">
              Free PDFs, premium notes, interview Q&amp;A banks, cheat sheets, and a structured learning path — everything you need to land your dream Data Engineering role.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <a href="#free-resources" className="jvm-gradient-bg text-white px-8 py-3.5 rounded-full text-sm font-bold shadow-xl hover:opacity-95 transition-all flex items-center gap-2">
                <Download className="w-4 h-4" /> Download Free PDFs
              </a>
              <a href="#premium-notes" className="bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 border border-slate-200 dark:border-slate-700 px-7 py-3.5 rounded-full text-sm font-bold shadow-md hover:bg-slate-50 dark:hover:bg-slate-700 transition-all flex items-center gap-2">
                <Star className="w-4 h-4 text-amber-500" /> View Premium Notes
              </a>
            </div>

            {/* Quick stats */}
            <div className="mt-12 flex flex-wrap justify-center gap-8">
              {[
                { icon: <FileText className="w-5 h-5 text-purple-500" />, value: "50+", label: "Study Guides" },
                { icon: <Download className="w-5 h-5 text-emerald-500" />, value: "15k+", label: "Downloads" },
                { icon: <Video className="w-5 h-5 text-pink-500" />, value: "200+", label: "Interview Q&As" },
                { icon: <Trophy className="w-5 h-5 text-amber-500" />, value: "100%", label: "Free Basics" },
              ].map((s, i) => (
                <div key={i} className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                  {s.icon}
                  <span className="font-extrabold text-lg text-slate-900 dark:text-white">{s.value}</span>
                  <span className="text-sm font-medium text-slate-500 dark:text-slate-400">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Free Resources ────────────────────────────────────────────────── */}
        <section id="free-resources" className="py-16 md:py-20 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-black text-[#1E2B88] dark:text-purple-400 uppercase tracking-widest bg-blue-50 dark:bg-purple-950/60 px-3.5 py-1.5 rounded-full border border-blue-200 dark:border-purple-800">
              100% Free
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900 dark:text-white mt-4 mb-2">
              Free <span className="jvm-gradient-text">Student Resources</span>
            </h2>
            <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Download instantly — no sign-up required</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {freeResources.map((r, i) => (
              <div key={i} className={`group relative rounded-2xl border ${r.border} ${r.bg} p-6 hover:shadow-2xl hover:border-purple-300 dark:hover:border-purple-600 hover:-translate-y-1.5 hover:scale-[1.02] transition-all duration-300 cursor-pointer`}>
                <div className="flex items-start justify-between mb-4">
                  <div className="p-2.5 bg-white dark:bg-slate-900/60 rounded-xl shadow-sm group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">{r.icon}</div>
                  <span className={`text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full ${r.tagColor} group-hover:scale-105 transition-transform`}>{r.tag}</span>
                </div>
                <h3 className="font-extrabold text-slate-900 dark:text-white text-base mb-2 leading-snug group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">{r.title}</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mb-5">{r.desc}</p>
                <div className="flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400 font-semibold mb-4">
                  <span>📥 {r.downloads} downloads</span>
                  <span>📄 {r.pages}</span>
                </div>
                <button className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-800 dark:text-slate-100 hover:border-purple-400 hover:text-purple-600 dark:hover:text-purple-400 group-hover:bg-purple-600 group-hover:text-white dark:group-hover:bg-purple-600 group-hover:border-purple-600 transition-all duration-300 shadow-xs group-hover:shadow-md">
                  <Download className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" /> Download Free
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* ── Learning Path Timeline ─────────────────────────────────────────── */}
        <section className="relative py-20 md:py-28 bg-[#FAFAFC] dark:bg-[#0B0F19] border-y border-slate-200 dark:border-slate-800 overflow-hidden">
          {/* Blurred JVM Student Group Background Image */}
          <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-30 dark:opacity-30 blur-[3px] scale-105 transition-all"
              style={{ backgroundImage: "url('/students1.jpeg')" }}
            />
            {/* Ambient Gradient Mask Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#FAFAFC]/90 via-[#FAFAFC]/60 to-[#FAFAFC]/90 dark:from-[#0B0F19]/90 dark:via-[#0B0F19]/65 dark:to-[#0B0F19]/90" />
          </div>

          <div className="max-w-[1450px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            
            <div className="text-center mb-10 md:mb-14">
              <span className="text-xs font-black text-emerald-700 dark:text-emerald-400 uppercase tracking-widest bg-emerald-50 dark:bg-emerald-950/60 px-3.5 py-1.5 rounded-full border border-emerald-200 dark:border-emerald-800">
                Structured Step-By-Step Roadmap
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-slate-900 dark:text-white mt-4 mb-3">
                Your <span className="jvm-gradient-text">Learning Path</span>
              </h2>
              <p className="text-slate-500 dark:text-slate-400 text-sm sm:text-base font-medium max-w-xl mx-auto">
                Scroll horizontally to explore your sequential step-by-step roadmap from beginner to placed engineer
              </p>
            </div>

            {/* Scrollable Container (Scrollbar Hidden) */}
            <div className="overflow-x-auto pb-4 pt-4 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
              
              <div className="min-w-[1850px] relative px-12 py-6">
                
                {/* Central Horizontal Axis Line */}
                <div className="absolute top-1/2 left-12 right-12 h-1 bg-gradient-to-r from-[#1E2B88] via-[#7C248C] via-[#E01E6A] to-emerald-500 rounded-full -translate-y-1/2 z-0 opacity-80 shadow-sm" />

                {/* 7 Horizontal Steps Spaced Generously */}
                <div className="flex justify-between items-center relative z-10 gap-8 h-[460px]">
                  {learningPath.map((step, i) => {
                    const isTop = i % 2 === 0; // Odd steps (1,3,5,7) ABOVE, Even steps (2,4,6) BELOW

                    const statusBadge = {
                      foundation: "bg-blue-100 dark:bg-blue-950/80 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800",
                      core: "bg-purple-100 dark:bg-purple-950/80 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-800",
                      advanced: "bg-amber-100 dark:bg-amber-950/80 text-amber-700 dark:text-amber-300 border-amber-200 dark:border-amber-800",
                      interview: "bg-pink-100 dark:bg-pink-950/80 text-pink-700 dark:text-pink-300 border-pink-200 dark:border-pink-800",
                      placement: "bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800",
                    }[step.status];

                    return (
                      <div
                        key={i}
                        className="relative w-[235px] shrink-0 h-full flex flex-col items-center justify-center group"
                      >
                        {/* TOP HALF (Card + Vertical Stem going down) */}
                        {isTop && (
                          <div className="absolute top-0 left-0 right-0 h-[205px] flex flex-col items-center justify-end">
                            {/* Card Container */}
                            <div className="w-full bg-white dark:bg-slate-900/95 rounded-2xl border border-slate-200 dark:border-slate-800 p-4 shadow-lg hover:shadow-2xl hover:border-purple-400 dark:hover:border-purple-600 hover:scale-[1.04] transition-all duration-300 cursor-pointer relative z-10 flex flex-col justify-between h-[175px]">
                              <div>
                                <div className="flex items-center justify-between gap-1 mb-2">
                                  <span className="text-[10px] font-black text-[#1E2B88] dark:text-purple-400 uppercase tracking-wider">
                                    {step.phase}
                                  </span>
                                  <span className={`text-[8px] font-black uppercase tracking-widest px-2 py-0.5 rounded-full border ${statusBadge}`}>
                                    {step.status}
                                  </span>
                                </div>

                                <h3 className="font-extrabold text-slate-900 dark:text-white text-xs sm:text-sm leading-snug mb-1 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                                  {step.title}
                                </h3>

                                <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
                                  {step.desc}
                                </p>
                              </div>

                              <div className="mt-2 pt-2 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-[10px] text-slate-400 font-bold">
                                <span>Step {i + 1} of 7</span>
                                {i < learningPath.length - 1 ? (
                                  <span className="text-purple-600 dark:text-purple-400 group-hover:translate-x-1 transition-transform">
                                    ➔
                                  </span>
                                ) : (
                                  <span className="text-emerald-500 font-black">
                                    Placed 🎉
                                  </span>
                                )}
                              </div>
                            </div>

                            {/* Straight Vertical Stem Line to Dot */}
                            <div className="w-0.5 h-7 bg-gradient-to-b from-purple-400 to-purple-600 dark:from-purple-500 dark:to-purple-700 group-hover:bg-purple-500 transition-colors" />
                          </div>
                        )}

                        {/* CENTER TIMELINE NODE DOT (Sat on Center Line) */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 flex items-center justify-center">
                          <div className="w-10 h-10 rounded-full jvm-gradient-bg p-1 shadow-xl group-hover:scale-125 transition-transform duration-300 ring-4 ring-white dark:ring-slate-900 cursor-pointer">
                            <div className="w-full h-full rounded-full bg-white dark:bg-slate-900 flex items-center justify-center text-xs font-black text-slate-900 dark:text-white">
                              {step.step}
                            </div>
                          </div>
                        </div>

                        {/* BOTTOM HALF (Vertical Stem going down + Card) */}
                        {!isTop && (
                          <div className="absolute bottom-0 left-0 right-0 h-[205px] flex flex-col items-center justify-start">
                            {/* Straight Vertical Stem Line from Dot */}
                            <div className="w-0.5 h-7 bg-gradient-to-b from-purple-600 to-purple-400 dark:from-purple-700 dark:to-purple-500 group-hover:bg-purple-500 transition-colors" />

                            {/* Card Container */}
                            <div className="w-full bg-white dark:bg-slate-900/95 rounded-2xl border border-slate-200 dark:border-slate-800 p-4 shadow-lg hover:shadow-2xl hover:border-purple-400 dark:hover:border-purple-600 hover:scale-[1.04] transition-all duration-300 cursor-pointer relative z-10 flex flex-col justify-between h-[175px]">
                              <div>
                                <div className="flex items-center justify-between gap-1 mb-2">
                                  <span className="text-[10px] font-black text-[#1E2B88] dark:text-purple-400 uppercase tracking-wider">
                                    {step.phase}
                                  </span>
                                  <span className={`text-[8px] font-black uppercase tracking-widest px-2 py-0.5 rounded-full border ${statusBadge}`}>
                                    {step.status}
                                  </span>
                                </div>

                                <h3 className="font-extrabold text-slate-900 dark:text-white text-xs sm:text-sm leading-snug mb-1 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                                  {step.title}
                                </h3>

                                <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
                                  {step.desc}
                                </p>
                              </div>

                              <div className="mt-2 pt-2 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-[10px] text-slate-400 font-bold">
                                <span>Step {i + 1} of 7</span>
                                {i < learningPath.length - 1 ? (
                                  <span className="text-purple-600 dark:text-purple-400 group-hover:translate-x-1 transition-transform">
                                    ➔
                                  </span>
                                ) : (
                                  <span className="text-emerald-500 font-black">
                                    Placed 🎉
                                  </span>
                                )}
                              </div>
                            </div>
                          </div>
                        )}

                      </div>
                    );
                  })}
                </div>

              </div>
            </div>

          </div>
        </section>

        {/* ── Interview Q&A Accordion ───────────────────────────────────────── */}
        <section className="py-16 md:py-20 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-black text-pink-700 dark:text-pink-400 uppercase tracking-widest bg-pink-50 dark:bg-pink-950/60 px-3.5 py-1.5 rounded-full border border-pink-200 dark:border-pink-800">
              Interview Prep
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900 dark:text-white mt-4 mb-2">
              Top Interview <span className="jvm-gradient-text">Q&amp;A Bank</span>
            </h2>
            <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Real questions from TCS, Infosys, Wipro, Nimap, Dimakh & more</p>
          </div>

          <div className="space-y-6 max-w-4xl mx-auto">
            {qaTopics.map((topic, ti) => (
              <div key={ti} className={`rounded-2xl border ${topic.bg} border-slate-200 dark:border-slate-800 overflow-hidden`}>
                {/* Topic header */}
                <div className={`flex items-center gap-2.5 px-5 py-3.5 border-b border-slate-200 dark:border-slate-700`}>
                  <div className={`p-1.5 rounded-lg bg-white dark:bg-slate-900/60 ${topic.color}`}>{topic.icon}</div>
                  <span className={`text-sm font-extrabold uppercase tracking-widest ${topic.color}`}>{topic.category}</span>
                </div>

                {/* Questions */}
                <div className="divide-y divide-slate-200 dark:divide-slate-700">
                  {topic.questions.map((qa, qi) => {
                    const key = `${ti}-${qi}`;
                    const isOpen = openQ === key;
                    return (
                      <div key={qi} className="bg-white dark:bg-slate-900/40">
                        <button
                          onClick={() => setOpenQ(isOpen ? null : key)}
                          className="w-full flex items-start justify-between gap-4 px-5 py-4 text-left hover:bg-slate-50 dark:hover:bg-slate-800/60 transition-colors"
                        >
                          <span className="text-sm font-bold text-slate-900 dark:text-white leading-snug">{qa.q}</span>
                          {isOpen
                            ? <ChevronUp className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                            : <ChevronDown className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                          }
                        </button>
                        {isOpen && (
                          <div className="px-5 pb-5 pt-1">
                            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-l-4 border-purple-400 pl-4">
                              {qa.a}
                            </p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/contact-us" className="inline-flex items-center gap-2 jvm-gradient-bg text-white px-8 py-3.5 rounded-full text-sm font-bold shadow-xl hover:opacity-95 transition-all">
              <Target className="w-4 h-4" /> Get Full Q&amp;A Bank (200+ Questions) <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        {/* ── CTA Banner ────────────────────────────────────────────────────── */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#1E2B88] via-[#7C248C] to-[#E01E6A] p-10 sm:p-14 text-center shadow-2xl">
              {/* Decorative blobs */}
              <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-2xl pointer-events-none" />
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/5 rounded-full translate-x-1/2 translate-y-1/2 blur-2xl pointer-events-none" />

              <div className="relative z-10">
                <Sparkles className="w-10 h-10 text-amber-300 mx-auto mb-4" />
                <h2 className="text-3xl sm:text-4xl font-black text-white mb-3 font-heading">
                  Ready to Start Your Journey?
                </h2>
                <p className="text-white/80 text-base font-medium mb-8 max-w-xl mx-auto">
                  Join JVM Institute and get access to live classes, mentorship, all premium study material, and 100% placement support.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link href="/contact-us" className="bg-white text-[#1E2B88] px-8 py-3.5 rounded-full text-sm font-black shadow-xl hover:bg-slate-50 transition-all flex items-center gap-2">
                    <Zap className="w-4 h-4 text-amber-500" /> Enroll Now
                  </Link>
                  <Link href="/our-courses" className="bg-white/10 text-white border border-white/30 px-8 py-3.5 rounded-full text-sm font-bold hover:bg-white/20 transition-all flex items-center gap-2">
                    <BookOpen className="w-4 h-4" /> View Courses
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Coding Practice Platforms ─────────────────────────────────────── */}
        <section className="py-16 bg-slate-50 dark:bg-slate-900/40 border-y border-slate-200 dark:border-slate-800">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-xs font-black text-emerald-700 dark:text-emerald-400 uppercase tracking-widest bg-emerald-50 dark:bg-emerald-950/60 px-3.5 py-1.5 rounded-full border border-emerald-200 dark:border-emerald-800">
                Practice Daily
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900 dark:text-white mt-4 mb-2">
                Coding <span className="jvm-gradient-text">Practice Platforms</span>
              </h2>
              <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Recommended platforms to sharpen your coding skills every day</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                { name: "LeetCode", emoji: "🧩", gradient: "from-orange-400 to-amber-500", focus: "DSA & SQL", level: "All Levels", desc: "Best for SQL problems, Python DSA practice & company-specific question banks.", tag: "Most Popular", tagColor: "bg-amber-100 dark:bg-amber-900/50 text-amber-700 dark:text-amber-300", url: "https://leetcode.com" },
                { name: "HackerRank", emoji: "🟢", gradient: "from-emerald-500 to-teal-500", focus: "Python & SQL", level: "Beginner → Advanced", desc: "Structured SQL and Python tracks. Great for beginners building fundamentals.", tag: "JVM Recommended", tagColor: "bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300", url: "https://hackerrank.com" },
                { name: "Databricks Academy", emoji: "⚡", gradient: "from-red-500 to-orange-500", focus: "PySpark & Delta Lake", level: "Intermediate", desc: "Free Databricks courses with hands-on notebooks. Directly helps with certification prep.", tag: "Free", tagColor: "bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300", url: "https://academy.databricks.com" },
                { name: "Mode SQL Tutorial", emoji: "📊", gradient: "from-blue-500 to-indigo-500", focus: "Advanced SQL", level: "Intermediate", desc: "Browser-based SQL editor with real datasets. No setup needed — practice immediately.", tag: "Free", tagColor: "bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300", url: "https://mode.com/sql-tutorial" },
                { name: "Kaggle", emoji: "🏆", gradient: "from-cyan-500 to-blue-500", focus: "Python & ML", level: "All Levels", desc: "Real-world datasets, free GPU notebooks, and micro-courses for Python, Pandas & ML.", tag: "Free", tagColor: "bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300", url: "https://kaggle.com" },
                { name: "StrataScratch", emoji: "🔍", gradient: "from-purple-500 to-violet-600", focus: "SQL Interview Prep", level: "Intermediate → Advanced", desc: "Real SQL interview questions from FAANG, Uber, Airbnb. Perfect for interview prep.", tag: "Interview Focused", tagColor: "bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300", url: "https://stratascratch.com" },
              ].map((p, i) => (
                <a key={i} href={p.url} target="_blank" rel="noopener noreferrer" className="group bg-white dark:bg-slate-900/60 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
                  <div className={`h-1.5 w-full bg-gradient-to-r ${p.gradient}`} />
                  <div className="p-5 flex-1 flex flex-col">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl">{p.emoji}</span>
                        <div>
                          <h3 className="font-extrabold text-slate-900 dark:text-white text-sm">{p.name}</h3>
                          <p className="text-[11px] font-bold text-slate-500 dark:text-slate-400">{p.focus}</p>
                        </div>
                      </div>
                      <span className={`text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full ${p.tagColor}`}>{p.tag}</span>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-4 flex-1">{p.desc}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded-full">{p.level}</span>
                      <span className="flex items-center gap-1 text-[11px] font-bold text-purple-600 dark:text-purple-400 group-hover:gap-2 transition-all">
                        Practice Now <ExternalLink className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
