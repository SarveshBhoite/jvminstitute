"use client";

import React from "react";
import Link from "next/link";
import LeadEnquiryModal, { openEnrollModal } from "@/components/LeadEnquiryModal";
import ClaudeIcon from "@/components/icons/ClaudeIcon";
import DataEngineeringIcon from "@/components/icons/DataEngineeringIcon";
import {
  Database,
  Code2,
  BrainCircuit,
  Sparkles,
  ArrowRight,
  Clock,
  CheckCircle,
  Cpu
} from "lucide-react";

const coursesData = [
  {
    id: "data-engineering-master",
    slug: "data-engineering-course-in-pune",
    title: "Data Engineering Course",
    badge: "Top Ranked",
    description: "Master SQL, Python, Linux, Hadoop, Pyspark, Spark, Airflow, Databricks, GCP, Azure, AWS, ETL Pipelines, Data Warehousing, and Big Data technologies through practical implementation.",
    duration: "6 Months",
    mode: "Offline & Online",
    icon: DataEngineeringIcon,
    isTopRanked: true,
    highlights: [
      "Industry-Ready Data Engineering Curriculum",
      "Spark, PySpark & Airflow Hands-on",
      "AWS, Azure & GCP Cloud Training",
      "Live ETL & Big Data Projects",
      "Databricks & Data Warehousing",
      "Placement & Interview Preparation",
    ],
    glowClass: "hover:border-[#7C248C] hover:shadow-[0_0_35px_rgba(124,36,140,0.35)] dark:hover:shadow-[0_0_40px_rgba(147,51,234,0.4)]",
  },
  {
    id: "data-engineering-genai",
    slug: "data-engineering-with-genai-course-in-pune",
    title: "Data Engineering with Gen AI",
    badge: "Flagship Program",
    description: "Combine modern Data Engineering with Large Language Models, AI-powered automation, Retrieval-Augmented Generation (RAG), AI Data Pipelines, Vector Databases, Prompt Engineering, and Intelligent Analytics.",
    duration: "6 Months",
    mode: "Offline & Online Mode",
    icon: Database,
    isTopRanked: true,
    highlights: [
      "Roadmap: SQL → Python → Spark → Databricks → Airflow → GCP → Azure → Gen AI",
      "Build AI-powered data pipelines, enterprise copilots & intelligent data platforms",
      "Gain hands-on experience with OpenAI, LangChain, MCP, AI Agents & Azure AI",
      "Work on 20+ enterprise projects covering ETL pipelines & Lakehouse architecture",
    ],
    glowClass: "hover:border-[#E01E6A] hover:shadow-[0_0_35px_rgba(224,30,106,0.35)] dark:hover:shadow-[0_0_40px_rgba(224,30,106,0.4)]",
  },
  {
    id: "basic-ai-ml",
    slug: "basic-ai-ml-course-in-pune",
    title: "Basic AI & ML",
    badge: "Beginner Friendly",
    description: "A beginner-friendly program covering Python Programming, Statistics, Machine Learning Fundamentals, Data Visualization, Exploratory Data Analysis, and Predictive Analytics.",
    duration: "1 Month",
    mode: "Offline & Online",
    icon: Code2,
    isTopRanked: false,
    highlights: [
      "Beginner-Friendly AI & Machine Learning Roadmap",
      "Python Programming & Data Analysis from Scratch",
      "Statistics, EDA & Data Visualization Hands-on",
      "Machine Learning Algorithms with Practical Projects",
      "Real-World Datasets & Business Case Studies",
      "Career Guidance, Resume Building & Placement Support",
    ],
    glowClass: "hover:border-emerald-500 hover:shadow-[0_0_35px_rgba(16,185,129,0.35)]",
  },
  {
    id: "advanced-ai-ml",
    slug: "advanced-ai-ml-course-in-pune",
    title: "Advanced AI & Machine Learning",
    badge: "Advanced Specialization",
    description: "Learn Deep Learning, Neural Networks, Computer Vision, Natural Language Processing (NLP), Reinforcement Learning, MLOps, Model Deployment, and AI System Design.",
    duration: "1 Month",
    mode: "Offline & Online",
    icon: BrainCircuit,
    isTopRanked: false,
    highlights: [
      "Comprehensive AI & Machine Learning Curriculum",
      "Deep Learning with TensorFlow & PyTorch",
      "Computer Vision & NLP Hands-on Projects",
      "MLOps, Model Deployment & AI System Design",
      "Real-World AI Applications & Capstone Projects",
      "Placement Assistance & Interview Preparation",
    ],
    glowClass: "hover:border-indigo-500 hover:shadow-[0_0_35px_rgba(99,102,241,0.35)]",
  },
  {
    id: "claude-ai",
    slug: "claude-ai-course-in-pune",
    title: "Claude AI",
    badge: "Multi-Cloud AI",
    description: "Master Claude AI for prompt engineering, AI automation, enterprise productivity, AI agents, RAG applications, and Claude API development. Learn to build intelligent AI-powered solutions for business, software development, content creation, research, and workflow automation.",
    duration: "1 Month",
    mode: "Offline & Online",
    icon: ClaudeIcon,
    isTopRanked: false,
    highlights: [
      "Master Claude AI from Beginner to Advanced",
      "Advanced Prompt Engineering & Context Engineering",
      "Build AI Agents with Model Context Protocol (MCP)",
      "Claude API Integration & Enterprise AI Applications",
      "Develop RAG (Retrieval-Augmented Generation) Solutions",
      "Real-World Projects, Portfolio Building & Placement Assistance",
    ],
    glowClass: "hover:border-[#D97757] hover:shadow-[0_0_35px_rgba(217,119,87,0.35)] dark:hover:shadow-[0_0_40px_rgba(217,119,87,0.4)]",
  },
  {
    id: "gen-ai",
    slug: "generative-ai-course-in-pune",
    title: "Gen AI",
    badge: "Next-Gen AI",
    description: "Build intelligent AI applications using ChatGPT, OpenAI APIs, LangChain, CrewAI, Vector Databases, AI Agents, Prompt Engineering, and Retrieval-Augmented Generation (RAG).",
    duration: "1 Month",
    mode: "Offline & Online",
    icon: Sparkles,
    isTopRanked: false,
    highlights: [
      "End-to-End Gen AI Learning Path",
      "Build AI Agents with LangChain & CrewAI",
      "ChatGPT, OpenAI APIs & Prompt Engineering Hands-on",
      "RAG, Vector Databases & Enterprise AI Solutions",
      "Develop Real-World GenAI Applications & Capstone Projects",
      "Portfolio Development & Placement Support",
    ],
    glowClass: "hover:border-purple-500 hover:shadow-[0_0_35px_rgba(147,51,234,0.35)] dark:hover:shadow-[0_0_40px_rgba(168,85,247,0.4)]",
  },
];


export default function FeaturedCourses() {
  return (
    <section className="py-12 sm:py-20 md:py-28 relative overflow-hidden bg-gradient-to-b from-slate-100/90 via-purple-50/40 to-slate-100/90 dark:from-[#0B0F19] dark:via-[#131B2E] dark:to-[#0B0F19] transition-colors duration-500 border-y border-purple-100/60 dark:border-purple-900/30">

      {/* Background Animated Gradient Glow Blobs */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 sm:w-96 sm:h-96 bg-purple-500/10 dark:bg-purple-600/20 rounded-full blur-3xl pointer-events-none animate-pulse"></div>
      <div className="absolute bottom-1/4 -right-20 w-72 h-72 sm:w-96 sm:h-96 bg-pink-500/10 dark:bg-pink-600/20 rounded-full blur-3xl pointer-events-none animate-pulse duration-1000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4 mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 dark:bg-slate-800/90 border border-purple-200 dark:border-purple-800/80 text-[11px] sm:text-xs font-extrabold text-[#7C248C] dark:text-purple-300 uppercase tracking-wider shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#E01E6A] dark:text-pink-400" /> Industry Aligned Programs
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold font-heading text-slate-900 dark:text-white tracking-tight drop-shadow-xs leading-tight">
            Accelerate Your Tech Career With <span className="jvm-gradient-text">Our Featured Courses</span>
          </h2>

          <p className="text-sm sm:text-lg text-slate-600 dark:text-slate-300 font-medium">
            Hand-crafted curriculum focused on real-world practical skills that top IT companies hire for.
          </p>
        </div>

        {/* Courses Grid - 6 Courses in 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {coursesData.map((course) => {
            const IconComponent = course.icon;
            return (
              <div
                key={course.id}
                className={`relative bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl rounded-3xl p-5 sm:p-7 flex flex-col justify-between transition-all duration-500 hover:-translate-y-2 cursor-pointer ${course.isTopRanked
                  ? "border-2 border-[#1E2B88] dark:border-purple-500 shadow-2xl shadow-purple-900/20 dark:shadow-purple-950/50 ring-2 sm:ring-4 ring-purple-100 dark:ring-purple-950/40"
                  : "border border-slate-200/90 dark:border-slate-800 shadow-md"
                  } ${course.glowClass}`}
              >
                {/* Top Badge */}
                {course.badge && (
                  <div className="absolute -top-3.5 left-5 sm:left-6 bg-gradient-to-r from-[#1E2B88] to-[#7C248C] dark:from-[#4F46E5] dark:to-[#9333EA] text-white px-3 py-1 rounded-full text-[11px] sm:text-xs font-bold shadow-sm flex items-center gap-1 z-10">
                    <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                    {course.badge}
                  </div>
                )}

                <div className="space-y-4 sm:space-y-5 pt-2">
                  {/* Icon & Title */}
                  <div className="flex items-center gap-3.5 sm:gap-4">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-slate-800 dark:to-slate-800/80 border border-purple-100 dark:border-slate-700 flex items-center justify-center text-[#1E2B88] dark:text-purple-300 shrink-0">
                      <IconComponent className="w-6 h-6 sm:w-7 sm:h-7" />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold font-heading text-slate-900 dark:text-white leading-snug">
                        {course.title}
                      </h3>
                      <div className="flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 font-medium mt-1 flex-wrap">
                        <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5 text-slate-400" /> {course.duration}</span>
                        <span>•</span>
                        <span>{course.mode}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-3">
                    {course.description}
                  </p>

                  {/* Highlights Bullet list */}
                  <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-slate-800">
                    <p className="text-[10px] sm:text-xs font-extrabold uppercase tracking-wider text-slate-400 dark:text-slate-500">Course Highlights:</p>
                    {course.highlights.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs font-semibold text-slate-700 dark:text-slate-300">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-500 dark:text-emerald-400 shrink-0 mt-0.5" />
                        <span className="leading-snug">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card CTA Links */}
                <div className="pt-4 grid grid-cols-2 gap-2.5 mt-3">
                  <Link
                    href={`/${course.slug}`}
                    className="w-full text-center py-2.5 sm:py-3 px-2 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors flex items-center justify-center gap-1"
                  >
                    View Syllabus
                  </Link>

                  <Link
                    href="/enroll"
                    className="w-full jvm-gradient-bg text-center py-2.5 sm:py-3 px-2 rounded-xl text-xs font-extrabold text-white shadow-sm hover:opacity-95 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-1 cursor-pointer"
                  >
                    Enroll Now <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

              </div>
            );
          })}
        </div>

        {/* View All Courses Banner */}
        <div className="mt-12 text-center">
          <Link
            href="/our-courses"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#1E2B88] dark:text-purple-300 hover:text-[#7C248C] dark:hover:text-purple-200 transition-colors group"
          >
            Explore Full Curriculum & Certificate Catalog
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

      </div>

      <LeadEnquiryModal />
    </section>
  );
}
