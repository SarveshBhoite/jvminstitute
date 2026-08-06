"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import {
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Download,
  Star,
  ShieldCheck,
  Laptop,
  Award,
  Terminal,
  Users,
  Briefcase,
  Cpu,
  ChevronDown,
  Zap,
  BrainCircuit,
  Database,
  Code2
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LeadEnquiryModal from "@/components/LeadEnquiryModal";

// Catalog of Course Details matching Image 2 style
const courseCatalog: Record<string, {
  title: string;
  badge: string;
  desc: string;
  hike: string;
  growth: string;
  labs: string;
  achieveHeading: string;
  achieveBullets: string[];
  modules: Array<{ id: string; number: string; title: string; duration: string; topics: string[]; tools: string[]; project: string }>;
  techStack: Array<{ name: string; category: string; badge: string; color: string }>;
}> = {
  "advanced-ai-ml": {
    title: "Advanced AI & Machine Learning Course in Pune!",
    badge: "CAREER LANDSCAPE 2026 • ADVANCED AI & MACHINE LEARNING TRACK",
    desc: "Learn Deep Learning, Neural Networks, Computer Vision, Natural Language Processing (NLP), Reinforcement Learning, MLOps, Model Deployment, and AI System Design.",
    hike: "130%",
    growth: "4.2x",
    labs: "85%",
    achieveHeading: "Transform From Beginner to AI & Machine Learning Specialist",
    achieveBullets: [
      "Write production Deep Learning models with TensorFlow & PyTorch.",
      "Master Computer Vision (YOLO, OpenCV) & NLP (Transformers, BERT, LLMs).",
      "Automate MLOps pipelines using Docker, Kubernetes & MLflow."
    ],
    modules: [
      {
        id: "m1",
        number: "01",
        title: "Python for AI & Foundations of Machine Learning",
        duration: "4 Weeks",
        topics: ["Python Data Science Stack", "Statistics & Linear Algebra", "Supervised ML Algorithms", "Exploratory Data Analysis"],
        tools: ["Python", "NumPy", "Pandas", "Scikit-Learn"],
        project: "Predictive Analytics & Feature Engineering System"
      },
      {
        id: "m2",
        number: "02",
        title: "Deep Learning Neural Networks & PyTorch",
        duration: "4 Weeks",
        topics: ["Perceptrons & Backpropagation", "PyTorch Tensor Compute", "CNNs & Spatial Convolutions", "Activation & Loss Functions"],
        tools: ["PyTorch", "TensorFlow", "CUDA"],
        project: "Train Deep Multi-Layer Neural Networks from Scratch on GPUs"
      },
      {
        id: "m3",
        number: "03",
        title: "Computer Vision & YOLO Object Detection",
        duration: "4 Weeks",
        topics: ["Image Classification with ResNet", "YOLOv8/v9 Real-Time Detection", "Semantic Segmentation with U-Net", "OpenCV Video Processing"],
        tools: ["OpenCV", "YOLOv9", "Torchvision"],
        project: "Industrial Quality Defect Detection Camera Pipeline"
      },
      {
        id: "m4",
        number: "04",
        title: "NLP, Transformers & RAG Architecture",
        duration: "4 Weeks",
        topics: ["Word Embeddings & RNN/LSTMs", "Attention Mechanisms & Transformers", "BERT & LLM Fine-Tuning", "Vector Databases & RAG"],
        tools: ["Hugging Face", "LangChain", "ChromaDB"],
        project: "Enterprise RAG Document Intelligence System"
      },
      {
        id: "m5",
        number: "05",
        title: "MLOps, Model Serving & AWS SageMaker",
        duration: "4 Weeks",
        topics: ["FastAPI REST Microservices", "Docker Containerization", "MLflow Experiment Tracking", "AWS SageMaker Cloud Deployment"],
        tools: ["Docker", "MLflow", "FastAPI", "AWS"],
        project: "Production Continuous Integration & MLOps Pipeline"
      }
    ],
    techStack: [
      { name: "PyTorch", category: "Deep Learning", badge: "Core AI", color: "from-orange-500 to-red-600" },
      { name: "TensorFlow", category: "Deep Learning", badge: "Production", color: "from-amber-500 to-orange-600" },
      { name: "OpenCV", category: "Vision", badge: "Computer Vision", color: "from-blue-600 to-indigo-600" },
      { name: "Hugging Face", category: "NLP", badge: "LLMs", color: "from-yellow-400 to-amber-500" },
      { name: "YOLOv9", category: "Vision", badge: "Real-Time AI", color: "from-emerald-500 to-teal-600" },
      { name: "Docker", category: "MLOps", badge: "Deployment", color: "from-blue-500 to-cyan-600" }
    ]
  },
  "gen-ai": {
    title: "Gen AI Course in Pune!",
    badge: "CAREER LANDSCAPE 2026 • GEN AI & AGENTIC TRACK",
    desc: "Build intelligent AI applications using ChatGPT, OpenAI APIs, LangChain, CrewAI, Vector Databases, AI Agents, Prompt Engineering, and Retrieval-Augmented Generation (RAG).",
    hike: "140%",
    growth: "5.0x",
    labs: "90%",
    achieveHeading: "Transform From Developer to Enterprise GenAI Architect",
    achieveBullets: [
      "Build autonomous multi-agent systems with CrewAI & LangChain.",
      "Implement production RAG with Pinecone, ChromaDB & LlamaIndex.",
      "Deploy custom fine-tuned LLMs with vLLM & Ollama microservices."
    ],
    modules: [
      {
        id: "g1",
        number: "01",
        title: "LLM Fundamentals & Prompt Engineering Mastery",
        duration: "2 Weeks",
        topics: ["OpenAI API & Anthropic Claude Integration", "Few-Shot & Chain-of-Thought Prompting", "JSON Output Schemas & Function Calling"],
        tools: ["OpenAI API", "Python", "Instructor"],
        project: "Autonomous Prompt Orchestrator for Customer Support"
      },
      {
        id: "g2",
        number: "02",
        title: "Retrieval-Augmented Generation (RAG) Systems",
        duration: "2 Weeks",
        topics: ["Chunking Strategies & Vector Embeddings", "ChromaDB, Qdrant & Pinecone Storage", "Hybrid Search & Re-ranking Models"],
        tools: ["LangChain", "LlamaIndex", "ChromaDB"],
        project: "Enterprise Knowledge Base RAG Assistant"
      },
      {
        id: "g3",
        number: "03",
        title: "Autonomous AI Agents & Multi-Agent Frameworks",
        duration: "2 Weeks",
        topics: ["LangGraph & CrewAI Frameworks", "Tool Use, Web Browsing & Code Execution", "Memory Persistence & Agentic Workflows"],
        tools: ["CrewAI", "LangGraph", "Python"],
        project: "Multi-Agent Automated Market Research System"
      }
    ],
    techStack: [
      { name: "LLMs", category: "Foundation Models", badge: "Core AI", color: "from-purple-600 to-indigo-600" },
      { name: "Prompt Engineering", category: "Techniques", badge: "Prompting", color: "from-pink-500 to-rose-600" },
      { name: "ChatGPT", category: "OpenAI", badge: "ChatGPT & API", color: "from-emerald-500 to-teal-600" },
      { name: "Claude AI", category: "Anthropic", badge: "Claude 3.5", color: "from-[#D97757] to-amber-600" },
      { name: "Google Gemini", category: "Multimodal", badge: "Gemini Pro", color: "from-blue-500 to-indigo-600" },
      { name: "RAG", category: "Architecture", badge: "Retrieval", color: "from-indigo-600 to-purple-600" },
      { name: "FAISS", category: "Vector DB", badge: "Facebook AI", color: "from-blue-600 to-cyan-600" },
      { name: "ChromaDB", category: "Vector DB", badge: "Embeddings", color: "from-emerald-500 to-teal-600" },
      { name: "LangChain", category: "Framework", badge: "Orchestration", color: "from-amber-500 to-orange-600" },
      { name: "LlamaIndex", category: "Data Ingestion", badge: "RAG Index", color: "from-rose-500 to-pink-600" },
      { name: "AI Agents", category: "Autonomous", badge: "Agentic AI", color: "from-purple-500 to-indigo-600" },
      { name: "CrewAI", category: "Multi-Agent", badge: "Team Agents", color: "from-violet-600 to-purple-600" },
      { name: "MCP", category: "Protocol", badge: "Model Context", color: "from-teal-500 to-emerald-600" },
      { name: "Function Calling", category: "Integration", badge: "Tools & APIs", color: "from-cyan-500 to-blue-600" },
      { name: "AI Automation", category: "Workflows", badge: "Automation", color: "from-amber-500 to-yellow-600" },
      { name: "Enterprise AI Applications", category: "Deployment", badge: "Production", color: "from-[#1E2B88] to-indigo-600" }
    ]
  },
  "claude-ai": {
    title: "Claude AI & Multi-Cloud MLOps Course in Pune!",
    badge: "CAREER LANDSCAPE 2026 • MULTI-CLAUDE AI TRACK",
    desc: "Master AI deployment using AWS, Azure, and Google Cloud while learning cloud-native AI services, Kubernetes, Docker, scalable ML pipelines, and cloud infrastructure.",
    hike: "125%",
    growth: "3.8x",
    labs: "85%",
    achieveHeading: "Transform From DevOps to Multi-Claude AI Architect",
    achieveBullets: [
      "Deploy scalable ML models on AWS SageMaker, GCP Vertex AI & Azure ML.",
      "Orchestrate containerized AI workloads with Docker & Kubernetes.",
      "Automate CI/CD pipelines for production Machine Learning."
    ],
    modules: [
      {
        id: "c1",
        number: "01",
        title: "AWS Claude AI & SageMaker Pipelines",
        duration: "2 Weeks",
        topics: ["AWS Bedrock & Rekognition Services", "SageMaker Model Training & Endpoints", "Auto-scaling AI Clusters on AWS"],
        tools: ["AWS SageMaker", "AWS Bedrock", "Python"],
        project: "AWS SageMaker Automated Model Endpoint Deployment"
      },
      {
        id: "c2",
        number: "02",
        title: "Docker, Kubernetes & Claude AI Orchestration",
        duration: "2 Weeks",
        topics: ["Dockerizing Machine Learning APIs", "Kubernetes Pods, Ingress & HPA", "KubeFlow Pipelines on GCP Vertex AI"],
        tools: ["Docker", "Kubernetes", "GCP Vertex AI"],
        project: "Kubernetes Cloud Cluster for Real-Time Model Serving"
      }
    ],
    techStack: [
      { name: "AWS SageMaker", category: "Cloud", badge: "AWS AI", color: "from-amber-500 to-orange-600" },
      { name: "Azure ML", category: "Cloud", badge: "Azure AI", color: "from-blue-500 to-indigo-600" },
      { name: "Docker", category: "DevOps", badge: "Containers", color: "from-cyan-500 to-blue-600" },
      { name: "Kubernetes", category: "DevOps", badge: "K8s Cluster", color: "from-indigo-600 to-purple-600" }
    ]
  },
  "basic-ai-ml": {
    title: "Basic AI & Machine Learning Course in Pune!",
    badge: "CAREER LANDSCAPE 2026 • BEGINNER AI TRACK",
    desc: "A beginner-friendly program covering Python Programming, Statistics, Machine Learning Fundamentals, Data Visualization, Exploratory Data Analysis, and Predictive Analytics.",
    hike: "110%",
    growth: "3.2x",
    labs: "80%",
    achieveHeading: "Transform From Non-Tech to Machine Learning Developer",
    achieveBullets: [
      "Master Python programming and data analytics from absolute scratch.",
      "Build core Machine Learning classification & regression algorithms.",
      "Create interactive business dashboards & predictive case studies."
    ],
    modules: [
      {
        id: "b1",
        number: "01",
        title: "Python & Data Analytics Foundations",
        duration: "2 Weeks",
        topics: ["Python Control Flow & Functions", "NumPy & Pandas Data Wrangling", "Data Visualization with Seaborn"],
        tools: ["Python", "Pandas", "NumPy"],
        project: "E-Commerce Customer Data Analysis Project"
      },
      {
        id: "b2",
        number: "02",
        title: "Practical Machine Learning Fundamentals",
        duration: "2 Weeks",
        topics: ["Linear & Logistic Regression", "Decision Trees & K-Means", "Scikit-Learn Model Building"],
        tools: ["Scikit-Learn", "Python", "Jupyter"],
        project: "Predictive House Price & Sales Forecasting Model"
      }
    ],
    techStack: [
      { name: "Python", category: "Language", badge: "Essential", color: "from-blue-500 to-indigo-600" },
      { name: "Pandas", category: "Data", badge: "Analysis", color: "from-[#1E2B88] to-purple-600" },
      { name: "Scikit-Learn", category: "ML", badge: "Algorithms", color: "from-amber-500 to-orange-600" },
      { name: "NumPy", category: "Compute", badge: "Math", color: "from-teal-500 to-emerald-600" }
    ]
  }
};

export default function DynamicCourseDetailPage() {
  const params = useParams();
  const slug = (params?.slug as string) || "advanced-ai-ml";
  const course = courseCatalog[slug] || courseCatalog["advanced-ai-ml"];

  const [modalOpen, setModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState(`${course.title} Admission`);
  const [openModule, setOpenModule] = useState<string | null>(course.modules[0]?.id || "m1");

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
              
              {/* Left Side */}
              <div className="lg:col-span-7 space-y-2.5 sm:space-y-3.5 text-left">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-purple-100/90 dark:bg-purple-950/90 border border-purple-200 dark:border-purple-800 text-[#7C3AED] dark:text-[#A78BFA] text-[10px] sm:text-xs font-black tracking-widest uppercase shadow-xs">
                  <Zap className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
                  <span>{course.badge}</span>
                </div>

                <h1 className="text-2xl sm:text-4xl lg:text-4xl xl:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-snug sm:leading-[1.15]">
                  <span className="jvm-gradient-text">{course.title}</span>
                </h1>

                <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed">
                  {course.desc} Learn with industry-aligned practical projects, expert mentor reviews, and <strong className="text-slate-900 dark:text-white font-bold underline decoration-[#E01E6A] dark:decoration-pink-500">100% Placement Assistance</strong>.
                </p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-2 sm:gap-3.5 pt-1">
                  <div className="p-2 sm:p-3 rounded-xl bg-white dark:bg-slate-900 border border-purple-100 dark:border-slate-800 shadow-xs text-center sm:text-left">
                    <div className="text-base sm:text-2xl font-black text-purple-600 dark:text-purple-400">{course.hike}</div>
                    <div className="text-[9px] sm:text-[11px] font-extrabold text-slate-700 dark:text-slate-300 mt-0.5">Average Salary Hike</div>
                  </div>

                  <div className="p-2 sm:p-3 rounded-xl bg-white dark:bg-slate-900 border border-indigo-100 dark:border-slate-800 shadow-xs text-center sm:text-left">
                    <div className="text-base sm:text-2xl font-black text-indigo-600 dark:text-indigo-400">{course.growth}</div>
                    <div className="text-[9px] sm:text-[11px] font-extrabold text-slate-700 dark:text-slate-300 mt-0.5">Industry Job Growth</div>
                  </div>

                  <div className="p-2 sm:p-3 rounded-xl bg-white dark:bg-slate-900 border border-pink-100 dark:border-slate-800 shadow-xs text-center sm:text-left">
                    <div className="text-base sm:text-2xl font-black text-pink-600 dark:text-pink-400">{course.labs}</div>
                    <div className="text-[9px] sm:text-[11px] font-extrabold text-slate-700 dark:text-slate-300 mt-0.5">Practical Cloud Labs</div>
                  </div>
                </div>

                {/* CTAs */}
                <div className="pt-1 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3">
                  <button
                    onClick={() => openEnrollModal("Next Batch Enrollment")}
                    className="w-full sm:w-auto px-5 py-2.5 sm:px-6 sm:py-3 rounded-xl jvm-gradient-bg text-white font-extrabold text-xs sm:text-sm shadow-lg hover:shadow-purple-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer group"
                  >
                    <span>Enroll Now in Next Batch</span>
                    <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <button
                    onClick={() => openEnrollModal("Download Syllabus PDF")}
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
                    <span>{course.labs} Practical Labs</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
                    <span>50+ Hiring Partners</span>
                  </div>
                </div>
              </div>

              {/* Right Side Dark Card */}
              <div className="lg:col-span-5">
                <div className="bg-gradient-to-b from-purple-950 via-slate-900 to-slate-950 text-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-xl border border-purple-500/30 relative overflow-hidden space-y-3 sm:space-y-4">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/10 text-purple-200 text-[9px] sm:text-xs font-bold uppercase tracking-wider backdrop-blur-md">
                    ✦ WHAT YOU WILL ACHIEVE
                  </div>

                  <h3 className="text-base sm:text-2xl font-extrabold tracking-tight leading-snug">
                    {course.achieveHeading}
                  </h3>

                  <ul className="space-y-1.5 sm:space-y-2.5 text-[11px] sm:text-xs font-medium text-slate-200">
                    {course.achieveBullets.map((bullet, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => openEnrollModal("Request Detailed Prospectus")}
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
              {course.modules.map((mod) => {
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
