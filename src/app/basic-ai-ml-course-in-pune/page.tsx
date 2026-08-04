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
  Code2
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MagicCard from "@/components/ui/magic-card";
import LeadEnquiryModal from "@/components/LeadEnquiryModal";

// Module Curriculum Data for Basic AI & ML Course
const curriculumModules = [
  {
    id: "mod-1",
    number: "01",
    title: "AI ML",
    duration: "1 Month",
    topics: [
      "Introduction to Artificial Intelligence (AI)",
      "What is AI? History of Artificial Intelligence",
      "AI vs Machine Learning vs Deep Learning vs Generative AI",
      "AI Applications Across Industries",
      "Future of AI Careers & Industry Opportunities",
      "Python Fundamentals",
      "Variables, Data Types & Operators",
      "Conditional Statements & Loops",
      "Python Functions, Lambda Functions & Modules",
      "Object-Oriented Programming (Classes & Objects)",
      "Exception Handling & Error Management",
      "Introduction to NumPy & Pandas",
      "Data Analysis Fundamentals & Importance",
      "Data Visualization Principles",
      "Types of Graphs & Exploratory Data Analysis (EDA)",
      "Machine Learning Fundamentals",
      "Machine Learning Workflow",
      "Types of Machine Learning (Supervised, Unsupervised & Reinforcement Learning)",
      "Data Preprocessing & Data Cleaning",
      "Handling Missing Values & Duplicate Records",
      "Feature Engineering Techniques",
      "Label Encoding & One-Hot Encoding",
      "Feature Scaling & Data Normalization",
      "Machine Learning Lifecycle",
      "Training, Testing & Validation Datasets",
      "Bias vs Variance Concepts",
      "Linear Regression & Regression Concepts",
      "Predictive Modeling using Linear Regression",
      "Logistic Regression & Binary Classification",
      "Decision Trees & Information Gain",
      "Random Forest & Ensemble Learning",
      "Model Evaluation Metrics (Accuracy, Precision, Recall & F1-Score)",
      "K-Means Clustering",
      "Principal Component Analysis (PCA) & Feature Reduction",
      "Introduction to Neural Networks",
      "Biological Neuron vs Artificial Neuron",
      "Perceptron Fundamentals",
      "Deep Learning Overview (ANN, CNN, RNN & LSTM)",
      "Introduction to Generative AI (ChatGPT, Claude, Gemini & Copilot)",
      "Prompt Engineering Fundamentals & Prompt Design",
      "Prompt Types & AI Productivity Techniques",
      "Git & GitHub (Version Control & Collaboration)",
      "Introduction to Cloud AI (Azure AI, Google Vertex AI & AWS AI)"
    ],
    tools: ["Python", "Pandas", "NumPy", "Scikit-Learn", "Matplotlib", "Seaborn", "Git", "Cloud AI"],
    project: "Build and deploy machine learning models and predictive AI applications."
  }
];

const techStack = [
  { name: "Python", category: "Programming", badge: "Beginner Core", color: "from-blue-500 to-cyan-500" },
  { name: "Pandas & NumPy", category: "Data Analysis", badge: "Data Wrangling", color: "from-amber-500 to-yellow-600" },
  { name: "Scikit-Learn", category: "Machine Learning", badge: "ML Library", color: "from-orange-500 to-amber-600" },
  { name: "Matplotlib & Seaborn", category: "Visualization", badge: "Graphics", color: "from-emerald-500 to-teal-600" },
  { name: "Jupyter & Git", category: "Environment", badge: "Interactive Labs", color: "from-purple-500 to-indigo-600" },
  { name: "Cloud AI", category: "Cloud Services", badge: "Azure/AWS/GCP", color: "from-[#1E2B88] to-indigo-600" }
];

const capstoneProjects = [
  {
    id: "p1",
    tag: "Predictive Analytics",
    title: "Student Result Prediction System",
    desc: "Build a Machine Learning model analyzing student study habits, attendance, and exam scores to predict final academic results with precision.",
    tech: ["Python", "Pandas", "Scikit-Learn", "Matplotlib", "Jupyter"],
    metrics: "High accuracy predictive scoring model"
  },
  {
    id: "p2",
    tag: "Recommender Engine",
    title: "Movie Recommendation System",
    desc: "Develop a content-based and collaborative filtering recommendation engine that suggests movies to users based on historical viewing preferences.",
    tech: ["Python", "Pandas", "Scikit-Learn", "NumPy"],
    metrics: "Sub-second similarity search recommendations"
  },
  {
    id: "p3",
    tag: "Time-Series Forecasting",
    title: "Sales Forecasting System",
    desc: "Analyze historical retail transaction data to forecast future quarterly product sales trends using Machine Learning regression algorithms.",
    tech: ["Python", "Pandas", "Scikit-Learn", "Seaborn"],
    metrics: "Reduces inventory forecasting variance by 85%"
  },
  {
    id: "p4",
    tag: "Regression Analysis",
    title: "Employee Salary Prediction",
    desc: "Implement a linear & multi-variable regression model predicting employee salary structures based on experience, domain skills, and location.",
    tech: ["Python", "Scikit-Learn", "Pandas", "NumPy"],
    metrics: "R-squared model fit score > 0.92"
  },
  {
    id: "p5",
    tag: "AI Business Analytics",
    title: "AI Business Prediction Platform",
    desc: "Construct an end-to-end Machine Learning web service predicting business growth metrics, revenue trends, and operational bottlenecks.",
    tech: ["Python", "Scikit-Learn", "Flask", "Pandas"],
    metrics: "Production-ready predictive business dashboard"
  }
];

const testimonials = [
  {
    name: "Aakash Patil",
    role: "Junior Data Analyst",
    hike: "90% Salary Hike",
    review: "As a complete beginner, this course built my foundation in Python, Statistics, and ML step-by-step. I cleared my first Data Analyst interview in Pune!",
    avatar: "/students2.jpeg",
    company: "Mid-Tier Tech Firm"
  }
];

const whatToExpectPoints = [
  "Beginner-friendly step-by-step training from Python basics to Machine Learning.",
  "Learn descriptive statistics, exploratory data analysis (EDA), and data cleaning.",
  "Master Scikit-Learn ML algorithms: Linear Regression, Decision Trees, Random Forest, K-Means.",
  "Hands-on practical coding assignments with real-world business datasets.",
  "Resume crafting, 1-on-1 career guidance, and 100% placement support."
];

export default function BasicAIMLCoursePage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("Basic AI & ML Admission");
  const [openModule, setOpenModule] = useState<string | null>("mod-1");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const openEnrollModal = (title: string) => {
    setModalTitle(title);
    setModalOpen(true);
  };

  const categories = ["All", "Programming", "Data Analysis", "Machine Learning", "Visualization"];
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
                  <Code2 className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
                  <span>BEGINNER FRIENDLY • BASIC AI &amp; ML COURSE IN PUNE</span>
                </motion.div>

                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-xl xs:text-2xl sm:text-4xl lg:text-4xl xl:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-snug sm:leading-[1.15]"
                >
                  <span className="jvm-gradient-text">Python, Machine Learning &amp; AI Fundamentals in Pune!</span>
                </motion.h1>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-1.5 text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed font-normal"
                >
                  <p>
                    Start your AI journey from scratch with Python programming, Pandas, NumPy, Statistics, Seaborn visualization, and Scikit-Learn Machine Learning algorithms.
                  </p>
                  <p className="hidden sm:block">
                    JVM Institute&apos;s beginner-friendly Basic AI &amp; ML track offers step-by-step guidance, real-world dataset projects, and <strong className="text-slate-900 dark:text-white font-bold underline decoration-[#E01E6A] dark:decoration-pink-500">100% Placement Support</strong> in Pune.
                  </p>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="grid grid-cols-3 gap-2 sm:gap-3.5 pt-1"
                >
                  <div className="p-2 sm:p-3 rounded-xl bg-white dark:bg-slate-900 border border-purple-100 dark:border-slate-800 shadow-xs text-center sm:text-left">
                    <div className="text-base sm:text-2xl font-black text-purple-600 dark:text-purple-400">100%</div>
                    <div className="text-[9px] sm:text-[11px] font-extrabold text-slate-700 dark:text-slate-300 mt-0.5">Beginner Friendly</div>
                  </div>
                  <div className="p-2 sm:p-3 rounded-xl bg-white dark:bg-slate-900 border border-indigo-100 dark:border-slate-800 shadow-xs text-center sm:text-left">
                    <div className="text-base sm:text-2xl font-black text-indigo-600 dark:text-indigo-400">3.5x</div>
                    <div className="text-[9px] sm:text-[11px] font-extrabold text-slate-700 dark:text-slate-300 mt-0.5">Data Job Opportunities</div>
                  </div>
                  <div className="p-2 sm:p-3 rounded-xl bg-white dark:bg-slate-900 border border-pink-100 dark:border-slate-800 shadow-xs text-center sm:text-left">
                    <div className="text-base sm:text-2xl font-black text-pink-600 dark:text-pink-400">1:1</div>
                    <div className="text-[9px] sm:text-[11px] font-extrabold text-slate-700 dark:text-slate-300 mt-0.5">Doubt Solving</div>
                  </div>
                </motion.div>

                <div className="pt-1 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3">
                  <button
                    onClick={() => openEnrollModal("Basic AI Batch Enrollment")}
                    className="w-full sm:w-auto px-5 py-2.5 sm:px-6 sm:py-3 rounded-xl jvm-gradient-bg text-white font-extrabold text-xs sm:text-sm shadow-lg hover:shadow-purple-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer group"
                  >
                    <span>Enroll Now in Next Batch</span>
                    <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <button
                    onClick={() => openEnrollModal("Download Basic AI Syllabus")}
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
                    ✦ WHAT YOU WILL LEARN
                  </div>
                  <h3 className="text-base sm:text-2xl font-extrabold tracking-tight leading-snug">
                    Master Python, Data Analysis &amp; Scikit-Learn Algorithms
                  </h3>
                  <ul className="space-y-1.5 sm:space-y-2.5 text-[11px] sm:text-xs font-medium text-slate-200">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>Learn Python Programming &amp; Pandas Data Manipulation.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>Perform Exploratory Data Analysis (EDA) &amp; Visualization.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>Build Supervised &amp; Unsupervised ML Models.</span>
                    </li>
                  </ul>
                  <button
                    onClick={() => openEnrollModal("Prospectus Basic AI")}
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
                Basic AI &amp; ML <span className="jvm-gradient-text">Modules</span>
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
