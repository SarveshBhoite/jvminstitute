"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Download,
  ShieldCheck,
  Laptop,
  Award,
  Terminal,
  Users,
  Briefcase,
  ChevronDown,
  Zap,
  BrainCircuit,
  Database,
  Code2
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LeadEnquiryModal from "@/components/LeadEnquiryModal";

const curriculumModules = [
  {
    id: "g1",
    number: "01",
    title: "LLM Fundamentals & Prompt Engineering Mastery",
    duration: "2 Weeks",
    topics: ["OpenAI API & Anthropic Claude Integration", "Few-Shot & Chain-of-Thought Prompting", "JSON Output Schemas & Function Calling", "Prompt Security & Injection Defense"],
    tools: ["OpenAI API", "Python", "Instructor", "LangChain"],
    project: "Autonomous Prompt Orchestrator for Enterprise Support"
  },
  {
    id: "g2",
    number: "02",
    title: "Retrieval-Augmented Generation (RAG) Systems",
    duration: "2 Weeks",
    topics: ["Chunking Strategies & Vector Embeddings", "ChromaDB, Qdrant & Pinecone Storage", "Hybrid Search & Re-ranking Models", "RAG Evaluation with Ragas & TruLens"],
    tools: ["LangChain", "LlamaIndex", "ChromaDB", "Pinecone"],
    project: "Enterprise Knowledge Base RAG Assistant for 100K+ PDFs"
  },
  {
    id: "g3",
    number: "03",
    title: "Autonomous AI Agents & Multi-Agent Frameworks",
    duration: "2 Weeks",
    topics: ["LangGraph & CrewAI Frameworks", "Tool Use, Web Browsing & Code Execution", "Memory Persistence & Agentic Workflows", "Multi-Agent Collaboration Protocols"],
    tools: ["CrewAI", "LangGraph", "Python", "Autogen"],
    project: "Multi-Agent Automated Market Research & Report Generator"
  }
];

export default function GenerativeAICoursePage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("Generative AI Course Admission");
  const [openModule, setOpenModule] = useState<string | null>("g1");

  const openEnrollModal = (title: string) => {
    setModalTitle(title);
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAFC] dark:bg-[#0B0F19] transition-colors duration-300 overflow-x-hidden selection:bg-[#7C248C] selection:text-white">
      <Navbar />

      <main className="flex-grow pt-0">
        {/* HERO SECTION MATCHING IMAGE 2 */}
        <section className="relative py-6 sm:py-10 lg:py-14 bg-gradient-to-b from-[#F5F3FF] via-[#FAFAFC] to-white dark:from-[#0B0F19] dark:via-[#111827] dark:to-[#0B0F19] border-b border-purple-100/80 dark:border-slate-800/80 overflow-hidden flex items-center min-h-[auto] lg:min-h-[580px]">
          
          <motion.div 
            animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-24 -left-20 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-purple-600/20 dark:bg-purple-600/25 rounded-full blur-[100px] pointer-events-none z-0" 
          />
          
          <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 relative z-10 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 lg:gap-10 items-center">
              
              {/* Left Column */}
              <div className="lg:col-span-7 space-y-2.5 sm:space-y-3.5 text-left">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-purple-100/90 dark:bg-purple-950/90 border border-purple-200 dark:border-purple-800 text-[#7C3AED] dark:text-[#A78BFA] text-[10px] sm:text-xs font-black tracking-widest uppercase shadow-xs">
                  <Zap className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
                  <span>CAREER LANDSCAPE 2026 • GENERATIVE AI & AGENTIC MASTER TRACK</span>
                </div>

                <h1 className="text-2xl sm:text-4xl lg:text-4xl xl:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-snug sm:leading-[1.15]">
                  <span className="jvm-gradient-text">Generative AI Course in Pune!</span>
                </h1>

                <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed">
                  Build intelligent AI applications using ChatGPT, OpenAI APIs, LangChain, CrewAI, Vector Databases, AI Agents, Prompt Engineering, and Retrieval-Augmented Generation (RAG) with <strong className="text-slate-900 dark:text-white font-bold underline decoration-[#E01E6A] dark:decoration-pink-500">100% Placement Assistance</strong>.
                </p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-2 sm:gap-3.5 pt-1">
                  <div className="p-2 sm:p-3 rounded-xl bg-white dark:bg-slate-900 border border-purple-100 dark:border-slate-800 shadow-xs text-center sm:text-left">
                    <div className="text-base sm:text-2xl font-black text-purple-600 dark:text-purple-400">140%</div>
                    <div className="text-[9px] sm:text-[11px] font-extrabold text-slate-700 dark:text-slate-300 mt-0.5">Average Salary Hike</div>
                  </div>

                  <div className="p-2 sm:p-3 rounded-xl bg-white dark:bg-slate-900 border border-indigo-100 dark:border-slate-800 shadow-xs text-center sm:text-left">
                    <div className="text-base sm:text-2xl font-black text-indigo-600 dark:text-indigo-400">5.0x</div>
                    <div className="text-[9px] sm:text-[11px] font-extrabold text-slate-700 dark:text-slate-300 mt-0.5">GenAI Job Demand</div>
                  </div>

                  <div className="p-2 sm:p-3 rounded-xl bg-white dark:bg-slate-900 border border-pink-100 dark:border-slate-800 shadow-xs text-center sm:text-left">
                    <div className="text-base sm:text-2xl font-black text-pink-600 dark:text-pink-400">90%</div>
                    <div className="text-[9px] sm:text-[11px] font-extrabold text-slate-700 dark:text-slate-300 mt-0.5">Practical RAG Labs</div>
                  </div>
                </div>

                {/* CTAs */}
                <div className="pt-1 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3">
                  <button
                    onClick={() => openEnrollModal("GenAI Batch Enrollment")}
                    className="w-full sm:w-auto px-5 py-2.5 sm:px-6 sm:py-3 rounded-xl jvm-gradient-bg text-white font-extrabold text-xs sm:text-sm shadow-lg hover:shadow-purple-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer group"
                  >
                    <span>Enroll Now in Next Batch</span>
                    <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <button
                    onClick={() => openEnrollModal("GenAI Download Syllabus PDF")}
                    className="w-full sm:w-auto px-5 py-2.5 sm:px-6 sm:py-3 rounded-xl bg-white dark:bg-slate-900 border border-purple-200 dark:border-slate-800 text-slate-900 dark:text-white font-bold text-xs sm:text-sm shadow-xs hover:bg-slate-50 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Download className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-purple-600 dark:text-purple-400" />
                    <span>Download Complete Syllabus PDF</span>
                  </button>
                </div>

                {/* Trust Badges */}
                <div className="pt-2 sm:pt-3 border-t border-purple-100 dark:border-slate-800/80 flex flex-wrap items-center gap-2.5 sm:gap-4 text-[10px] sm:text-xs font-bold text-slate-700 dark:text-slate-300">
                  <div className="flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                    <span>ISO Certified</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
                    <span>90% Hands-on Labs</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
                    <span>50+ Hiring Partners</span>
                  </div>
                </div>
              </div>

              {/* Right Column Dark Card */}
              <div className="lg:col-span-5">
                <div className="bg-gradient-to-b from-purple-950 via-slate-900 to-slate-950 text-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-xl border border-purple-500/30 relative overflow-hidden space-y-3 sm:space-y-4">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/10 text-purple-200 text-[9px] sm:text-xs font-bold uppercase tracking-wider backdrop-blur-md">
                    ✦ WHAT YOU WILL ACHIEVE
                  </div>

                  <h3 className="text-base sm:text-2xl font-extrabold tracking-tight leading-snug">
                    Transform From Developer to Enterprise GenAI Architect
                  </h3>

                  <ul className="space-y-1.5 sm:space-y-2.5 text-[11px] sm:text-xs font-medium text-slate-200">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>Build autonomous multi-agent systems with CrewAI &amp; LangChain.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>Implement production RAG with Pinecone, ChromaDB &amp; LlamaIndex.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>Deploy custom fine-tuned LLMs with vLLM &amp; Ollama microservices.</span>
                    </li>
                  </ul>

                  <button
                    onClick={() => openEnrollModal("GenAI Prospectus Enrollment")}
                    className="w-full py-2.5 sm:py-3 rounded-xl bg-white text-slate-900 font-extrabold text-xs sm:text-sm shadow-lg hover:bg-slate-100 transition-colors flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Request Detailed Program Prospectus</span>
                    <ArrowRight className="w-4 h-4 text-purple-700" />
                  </button>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Modules Section */}
        <section className="py-12 sm:py-16 bg-white dark:bg-[#0B0F19]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <span className="text-xs font-extrabold uppercase tracking-widest text-purple-600 dark:text-purple-400">Detailed Roadmap</span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-1">Course Curriculum &amp; Modules</h2>
            </div>

            <div className="space-y-4">
              {curriculumModules.map((mod) => {
                const isOpen = openModule === mod.id;
                return (
                  <div key={mod.id} className="rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 overflow-hidden">
                    <button
                      onClick={() => setOpenModule(isOpen ? null : mod.id)}
                      className="w-full p-4 sm:p-5 flex items-center justify-between text-left hover:bg-slate-100 dark:hover:bg-slate-800/80 transition-colors cursor-pointer"
                    >
                      <div className="flex items-center gap-3 sm:gap-4">
                        <span className="text-base sm:text-lg font-black text-purple-600 dark:text-purple-400 font-mono">Module {mod.number}</span>
                        <div>
                          <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">{mod.title}</h3>
                          <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400">Duration: {mod.duration}</span>
                        </div>
                      </div>
                      <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform ${isOpen ? "rotate-180" : ""}`} />
                    </button>

                    {isOpen && (
                      <div className="px-5 pb-5 pt-1 border-t border-slate-200 dark:border-slate-800 space-y-4">
                        <div>
                          <h4 className="text-xs font-bold text-slate-900 dark:text-slate-200 uppercase tracking-wider mb-2">Key Topics Covered:</h4>
                          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600 dark:text-slate-300">
                            {mod.topics.map((t, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                                <span>{t}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="flex flex-wrap items-center gap-2 pt-2">
                          <span className="text-xs font-bold text-slate-500">Tools Used:</span>
                          {mod.tools.map((tool) => (
                            <span key={tool} className="px-2 py-0.5 rounded text-[11px] font-bold bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300">
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

      </main>

      <Footer />

      <LeadEnquiryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        courseTitle={modalTitle}
      />
    </div>
  );
}
