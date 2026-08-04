"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Download,
  PhoneCall,
  Star,
  ShieldCheck,
  Clock,
  Terminal,
  Users,
  BrainCircuit,
  ChevronDown,
  Wrench,
  Check,
  Cpu,
  Cloud
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MagicCard from "@/components/ui/magic-card";
import LeadEnquiryModal from "@/components/LeadEnquiryModal";

// Module Curriculum Data for Claude AI Course
const curriculumModules = [
  {
    id: "mod-1",
    number: "01",
    title: "Claude AI",
    duration: "1 Month",
    topics: [
      "Introduction to Claude AI",
      "What is Claude AI?",
      "Anthropic & Constitutional AI",
      "Claude vs ChatGPT vs Gemini vs Copilot",
      "Claude Models Overview",
      "Real-World Business Applications of Claude AI",
      "Prompt Engineering Fundamentals",
      "Anatomy of a Prompt",
      "Prompt Components & Context Engineering",
      "Prompt Optimization Techniques",
      "Advanced Prompting (Zero-Shot, One-Shot, Few-Shot, Chain-of-Thought & Role Prompting)",
      "Claude AI for Professional Productivity",
      "AI-Powered Daily Workflows",
      "Business Productivity & Personal Knowledge Management",
      "Claude for Python Development",
      "AI-Assisted Coding & Software Development Workflow",
      "Claude for SQL & Data Engineering",
      "AI-Driven SQL Optimization & Data Engineering Automation",
      "Claude for Data Analysis & Business Intelligence",
      "Claude Code & AI Coding Agents",
      "Software Development Lifecycle with Claude",
      "Claude API Fundamentals",
      "API Authentication, Tokens & API Pricing",
      "Model Context Protocol (MCP)",
      "MCP Architecture & Enterprise Integration",
      "AI Agents, Agentic AI & Multi-Agent Systems",
      "Autonomous AI Workflows",
      "Claude Integration with IDEs & Development Tools",
      "AI Coding Workflow & Developer Productivity",
      "Vector Databases, Embeddings & Semantic Search",
      "Vector Search & Enterprise Knowledge Retrieval",
      "Retrieval-Augmented Generation (RAG) Architecture",
      "Enterprise Knowledge Base Development",
      "AI Knowledge Management & Business Documentation",
      "AI Workflow Automation & Enterprise Business Automation",
      "AI for Business Strategy & Decision Making",
      "AI-Driven Digital Transformation",
      "AI Content Creation & Marketing Automation",
      "AI Research Assistant & Information Validation",
      "Citation Best Practices for AI Research",
      "AI Security, Constitutional AI & Responsible AI",
      "Prompt Security & Hallucination Prevention",
      "Privacy, Compliance & Ethical AI Practices"
    ],
    tools: ["Claude 3.5 Sonnet", "Anthropic API", "MCP", "Python", "Vector DBs", "RAG", "SQL"],
    project: "Build & deploy enterprise AI copilots, autonomous workflows, and RAG knowledge assistants using Claude AI."
  }
];

const techStack = [
  { name: "Claude 3.5 Sonnet", category: "Anthropic LLM", badge: "Flagship", color: "from-amber-500 to-yellow-600" },
  { name: "MCP Protocol", category: "Model Context", badge: "Architecture", color: "from-purple-500 to-indigo-600" },
  { name: "Prompt Engineering", category: "Prompting", badge: "Advanced", color: "from-emerald-500 to-teal-600" },
  { name: "RAG & Vector DBs", category: "AI Storage", badge: "Enterprise RAG", color: "from-pink-500 to-rose-600" },
  { name: "Claude Code", category: "AI Coding", badge: "Dev Productivity", color: "from-sky-400 to-blue-600" },
  { name: "Python & SQL", category: "Languages", badge: "Automation", color: "from-blue-500 to-cyan-500" }
];

const capstoneProjects = [
  {
    id: "p1",
    tag: "HR & Talent AI",
    title: "AI Resume Analyzer",
    desc: "Build an automated resume parsing & candidate evaluation system powered by Claude AI, extracting structured JSON metrics and matching candidates against job requirements.",
    tech: ["Claude API", "Python", "Streamlit", "JSON"],
    metrics: "Instant candidate evaluation with structured feedback"
  },
  {
    id: "p2",
    tag: "Research Automation",
    title: "AI Research Assistant",
    desc: "Develop an autonomous research assistant leveraging Anthropic Claude APIs to summarize technical papers, cross-validate citations, and output structured executive briefs.",
    tech: ["Claude 3.5", "Python", "FastAPI", "PDF Plumber"],
    metrics: "Automates hours of complex literature analysis"
  },
  {
    id: "p3",
    tag: "Enterprise RAG",
    title: "Enterprise Document Intelligence System",
    desc: "Construct a RAG-based document intelligence system connecting Claude AI to corporate knowledge bases, PDFs, and internal wikis with exact source citations.",
    tech: ["Claude API", "Vector DB", "LlamaIndex", "Python"],
    metrics: "Sub-second multi-document semantic retrieval"
  },
  {
    id: "p4",
    tag: "Workflow Automation",
    title: "AI Business Automation Assistant",
    desc: "Deploy a task automation copilot using Claude AI and MCP (Model Context Protocol) to execute routine business workflows, automated emailing, and database queries.",
    tech: ["Claude MCP", "Python", "SQL", "Docker"],
    metrics: "Reduces manual routine operational overhead by 80%"
  },
  {
    id: "p5",
    tag: "Capstone Copilot",
    title: "Enterprise AI Copilot using Claude",
    desc: "Architect an end-to-end production AI copilot utilizing Claude 3.5 Sonnet, MCP, RAG, and custom multi-agent tool integrations for enterprise deployment.",
    tech: ["Claude 3.5 Sonnet", "MCP Protocol", "Vector DB", "FastAPI"],
    metrics: "Production-ready enterprise AI assistant platform"
  }
];

const testimonials = [
  {
    name: "Sneha Jadhav",
    role: "Cloud AI Engineer",
    hike: "115% Salary Hike",
    review: "Learning AWS SageMaker, Azure OpenAI, and GCP Vertex AI together gave me an unbeatable multi-cloud advantage in my interviews!",
    avatar: "/students1.jpeg",
    company: "Tier-1 Cloud Provider"
  }
];

const whatToExpectPoints = [
  "Comprehensive Multi-Cloud AI training covering AWS (SageMaker), Azure (OpenAI), and GCP (Vertex AI).",
  "Hands-on Docker containerization & Kubernetes (EKS/AKS) deployment labs.",
  "Serverless AI model serving using GCP Cloud Run and AWS Lambda.",
  "End-to-end MLOps pipeline construction with automated CI/CD workflows.",
  "Dedicated placement assistance, resume optimization, and direct MNC referrals."
];

export default function CloudAICoursePage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("Cloud AI Course Admission");
  const [openModule, setOpenModule] = useState<string | null>("mod-1");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const openEnrollModal = (title: string) => {
    setModalTitle(title);
    setModalOpen(true);
  };

  const categories = ["All", "AWS Cloud", "Azure Cloud", "Google Cloud", "DevOps"];
  const filteredTech = selectedCategory === "All"
    ? techStack
    : techStack.filter(t => t.category.toLowerCase().includes(selectedCategory.toLowerCase()));

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAFC] dark:bg-[#0B0F19] transition-colors duration-300 overflow-x-hidden selection:bg-[#7C248C] selection:text-white">
      <Navbar />

      <main className="flex-grow pt-0">

        {/* HERO SECTION */}
        <section className="relative py-6 sm:py-10 lg:py-14 bg-gradient-to-b from-[#F5F3FF] via-[#FAFAFC] to-white dark:from-[#0B0F19] dark:via-[#111827] dark:to-[#0B0F19] border-b border-purple-100/80 dark:border-slate-800/80 overflow-hidden flex items-center min-h-[auto] lg:h-[calc(100vh-80px)]">
          <motion.div 
            animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-24 -left-20 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-purple-600/20 dark:bg-purple-600/25 rounded-full blur-[100px] pointer-events-none z-0" 
          />
          
          <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 relative z-10 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 lg:gap-10 items-center">
              
              <div className="lg:col-span-7 space-y-2.5 sm:space-y-3.5 text-left">
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-purple-100/90 dark:bg-purple-950/90 border border-purple-200 dark:border-purple-800 text-[#7C3AED] dark:text-[#A78BFA] text-[10px] sm:text-xs font-black tracking-widest uppercase shadow-xs"
                >
                  <Cloud className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
                  <span>MULTI-CLOUD SPECIALIZATION • CLOUD AI COURSE IN PUNE</span>
                </motion.div>

                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-xl xs:text-2xl sm:text-4xl lg:text-4xl xl:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-snug sm:leading-[1.15]"
                >
                  <span className="jvm-gradient-text">Master Multi-Cloud AI (AWS, Azure &amp; GCP) in Pune!</span>
                </motion.h1>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-1.5 text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed font-normal"
                >
                  <p>
                    Deploy enterprise Machine Learning &amp; AI models using AWS SageMaker, Azure OpenAI, GCP Vertex AI, Docker containerization, and Kubernetes infrastructure.
                  </p>
                  <p className="hidden sm:block">
                    JVM Institute&apos;s Cloud AI track provides 100% practical cloud lab environments and <strong className="text-slate-900 dark:text-white font-bold underline decoration-[#E01E6A] dark:decoration-pink-500">100% Placement Assistance</strong> with leading IT product firms.
                  </p>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="grid grid-cols-3 gap-2 sm:gap-3.5 pt-1"
                >
                  <div className="p-2 sm:p-3 rounded-xl bg-white dark:bg-slate-900 border border-purple-100 dark:border-slate-800 shadow-xs text-center sm:text-left">
                    <div className="text-base sm:text-2xl font-black text-purple-600 dark:text-purple-400">125%</div>
                    <div className="text-[9px] sm:text-[11px] font-extrabold text-slate-700 dark:text-slate-300 mt-0.5">Average Salary Hike</div>
                  </div>
                  <div className="p-2 sm:p-3 rounded-xl bg-white dark:bg-slate-900 border border-indigo-100 dark:border-slate-800 shadow-xs text-center sm:text-left">
                    <div className="text-base sm:text-2xl font-black text-indigo-600 dark:text-indigo-400">4.0x</div>
                    <div className="text-[9px] sm:text-[11px] font-extrabold text-slate-700 dark:text-slate-300 mt-0.5">Cloud AI Demand</div>
                  </div>
                  <div className="p-2 sm:p-3 rounded-xl bg-white dark:bg-slate-900 border border-pink-100 dark:border-slate-800 shadow-xs text-center sm:text-left">
                    <div className="text-base sm:text-2xl font-black text-pink-600 dark:text-pink-400">100%</div>
                    <div className="text-[9px] sm:text-[11px] font-extrabold text-slate-700 dark:text-slate-300 mt-0.5">Cloud Sandbox Access</div>
                  </div>
                </motion.div>

                <div className="pt-1 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3">
                  <button
                    onClick={() => openEnrollModal("Cloud AI Batch Enrollment")}
                    className="w-full sm:w-auto px-5 py-2.5 sm:px-6 sm:py-3 rounded-xl jvm-gradient-bg text-white font-extrabold text-xs sm:text-sm shadow-lg hover:shadow-purple-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer group"
                  >
                    <span>Enroll Now in Next Batch</span>
                    <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <button
                    onClick={() => openEnrollModal("Download Cloud AI Syllabus")}
                    className="w-full sm:w-auto px-5 py-2.5 sm:px-6 sm:py-3 rounded-xl bg-white dark:bg-slate-900 border border-purple-200 dark:border-slate-800 text-slate-900 dark:text-white font-bold text-xs sm:text-sm shadow-xs hover:bg-slate-50 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Download className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-purple-600 dark:text-purple-400" />
                    <span>Download Syllabus PDF</span>
                  </button>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="bg-gradient-to-b from-purple-950 via-slate-900 to-slate-950 text-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-xl border border-purple-500/30 relative overflow-hidden space-y-3 sm:space-y-4">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/10 text-purple-200 text-[9px] sm:text-xs font-bold uppercase tracking-wider backdrop-blur-md">
                    ✦ WHAT YOU WILL MASTER
                  </div>
                  <h3 className="text-base sm:text-2xl font-extrabold tracking-tight leading-snug">
                    Deploy AI Workloads on AWS, Azure &amp; GCP
                  </h3>
                  <ul className="space-y-1.5 sm:space-y-2.5 text-[11px] sm:text-xs font-medium text-slate-200">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>Host Models on AWS SageMaker &amp; Azure OpenAI.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>Build Serverless AI Pipelines with GCP BigQuery ML.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>Containerize &amp; Deploy AI Microservices on Kubernetes.</span>
                    </li>
                  </ul>
                  <button
                    onClick={() => openEnrollModal("Prospectus Cloud AI")}
                    className="w-full py-2.5 sm:py-3 rounded-xl bg-white text-slate-900 font-extrabold text-xs sm:text-sm shadow-lg hover:bg-slate-100 transition-colors flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Request Detailed Syllabus</span>
                    <ArrowRight className="w-3.5 h-3.5 text-purple-600" />
                  </button>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* SYLLABUS ACCORDION */}
        <section className="py-8 sm:py-16 bg-[#FAFAFC] dark:bg-[#070A12] border-t border-purple-100/60 dark:border-slate-800/80">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-16 space-y-2">
              <span className="text-[10px] sm:text-xs font-extrabold uppercase tracking-widest text-purple-600 dark:text-purple-400">
                CURRICULUM
              </span>
              <h2 className="text-2xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                Cloud AI <span className="jvm-gradient-text">Modules</span>
              </h2>
            </div>

            <div className="space-y-3.5">
              {curriculumModules.map((mod) => {
                const isOpen = openModule === mod.id;
                return (
                  <div key={mod.id} className="rounded-2xl border bg-white dark:bg-slate-900 border-slate-200/80 dark:border-slate-800 overflow-hidden">
                    <button
                      onClick={() => setOpenModule(isOpen ? null : mod.id)}
                      className="w-full p-4 sm:p-6 text-left flex items-center justify-between gap-3 cursor-pointer"
                    >
                      <div className="flex items-center gap-3">
                        <span className="w-9 h-9 rounded-xl bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300 font-extrabold text-xs flex items-center justify-center">
                          {mod.number}
                        </span>
                        <div>
                          <h3 className="text-sm sm:text-lg font-bold text-slate-900 dark:text-white">{mod.title}</h3>
                          <span className="text-[10px] sm:text-xs font-semibold text-purple-600">{mod.duration}</span>
                        </div>
                      </div>
                      <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180 text-purple-600" : ""}`} />
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="px-4 sm:px-6 pb-5 pt-1 border-t border-slate-100 dark:border-slate-800 space-y-3"
                        >
                          <ul className="space-y-1.5 text-xs text-slate-700 dark:text-slate-300">
                            {mod.topics.map((t, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                                <span>{t}</span>
                              </li>
                            ))}
                          </ul>
                          <div className="p-2.5 rounded-xl bg-purple-50 dark:bg-purple-950/40 text-[11px] font-bold text-purple-700 dark:text-purple-300 flex items-center gap-2">
                            <Wrench className="w-3.5 h-3.5 text-purple-600" />
                            <span>Tools Used: {mod.tools.join(", ")}</span>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

      </main>

      <Footer />
      <LeadEnquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} courseTitle={modalTitle} />
    </div>
  );
}
