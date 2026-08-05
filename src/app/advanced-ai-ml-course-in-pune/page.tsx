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
  Zap
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MagicCard from "@/components/ui/magic-card";
import LeadEnquiryModal from "@/components/LeadEnquiryModal";

// Module Curriculum Data for Advanced AI & Machine Learning Course
const curriculumModules = [
  {
    id: "mod-1",
    number: "01",
    title: "AI ML",
    duration: "1 Month",
    topics: [
      "Deep Learning Fundamentals",
      "Machine Learning vs Deep Learning",
      "Neural Network Architecture & Deep Learning Workflow",
      "GPU vs CPU for AI Workloads",
      "Artificial Neural Networks (ANN)",
      "Perceptron, Activation Functions & Forward/Back Propagation",
      "TensorFlow Ecosystem & Keras API",
      "Building Deep Learning Models using Sequential API",
      "Hyperparameter Tuning (Epochs, Batch Size, Learning Rate & Optimizers)",
      "Computer Vision Fundamentals",
      "Image Processing & Computer Vision Techniques",
      "Convolutional Neural Networks (CNN)",
      "CNN Architecture, Convolution, Pooling & Feature Extraction",
      "Image Classification using Deep Learning",
      "Transfer Learning with Pretrained Models",
      "Fine-Tuning Deep Learning Models",
      "Object Detection & Bounding Box Techniques",
      "Modern Object Detection Models",
      "Natural Language Processing (NLP) Fundamentals",
      "NLP Workflow, Text Processing, Tokenization & Lemmatization",
      "Transformer Architecture & Attention Mechanism",
      "Embeddings & Semantic Representation",
      "Large Language Models (GPT, Claude, Gemini & Llama)",
      "Prompt Engineering (Zero-Shot, Few-Shot, Chain-of-Thought & Structured Prompting)",
      "Vector Databases, Embeddings & Semantic Search",
      "Retrieval-Augmented Generation (RAG) Architecture",
      "Enterprise Knowledge Retrieval using RAG",
      "AI Agents & Autonomous AI Systems",
      "AI Agent Workflow & Enterprise AI Automation",
      "Workflow Automation & Intelligent Enterprise Workflows",
      "MLOps Fundamentals & Machine Learning Lifecycle",
      "Experiment Tracking & Model Management",
      "Docker for AI (Containerization & Docker Architecture)",
      "Cloud AI Services (Azure AI, Google Vertex AI & AWS SageMaker)",
      "REST API Development & AI Service Integration",
      "GitHub, Version Control & Enterprise Collaboration",
      "Continuous Integration (CI) & Continuous Deployment (CD) for AI Applications",
      "Production AI Deployment & Enterprise Best Practices"
    ],
    tools: ["PyTorch", "TensorFlow", "Keras", "OpenCV", "Hugging Face", "Docker", "MLflow", "Claude AI"],
    project: "Build & deploy end-to-end Deep Learning, Computer Vision, NLP & RAG enterprise applications."
  }
];

// Tools & Technologies Data
const techStack = [
  { name: "PySpark", category: "Big Data", badge: "Core Engine", color: "from-orange-500 to-amber-600" },
  { name: "Databricks", category: "Lakehouse", badge: "Enterprise", color: "from-red-500 to-rose-600" },
  { name: "AWS Redshift", category: "Cloud", badge: "Popular", color: "from-amber-500 to-yellow-600" },
  { name: "Snowflake", category: "Warehouse", badge: "Trending", color: "from-sky-400 to-blue-600" },
  { name: "Apache Airflow", category: "Orchestration", badge: "Workflow", color: "from-teal-400 to-emerald-600" },
  { name: "Apache Kafka", category: "Streaming", badge: "Real-time", color: "from-slate-700 to-slate-900" },
  { name: "Python", category: "Language", badge: "Essential", color: "from-blue-500 to-cyan-500" },
  { name: "Advanced SQL", category: "Database", badge: "Must Have", color: "from-[#1E2B88] to-indigo-600" },
  { name: "AWS S3 & IAM", category: "Cloud Storage", badge: "Cloud Native", color: "from-orange-400 to-amber-500" },
  { name: "PostgreSQL", category: "Database", badge: "Relational", color: "from-blue-700 to-indigo-800" },
  { name: "Delta Lake", category: "Storage", badge: "ACID Compliant", color: "from-cyan-500 to-blue-600" },
  { name: "Docker", category: "DevOps", badge: "Containers", color: "from-blue-600 to-indigo-700" }
];

// Faculty Profiles
const mentors = [
  {
    name: "Jayesh Bhoite",
    role: "Lead Data Architect & Founder",
    experience: "12+ Years IT Industry Experience",
    company: "Ex-Fortune 500 Architect",
    specialty: "PySpark Distributed Systems, Databricks Lakehouse & AWS Cloud Infrastructure",
    image: "/students1.jpeg",
    bio: "Mentored over 5,000+ engineers into top MNCs. Specializes in multi-terabyte ETL optimization and real-time streaming architectures."
  },
  {
    name: "Priya Sharma",
    role: "Senior Cloud Data Engineer",
    experience: "9+ Years Big Data Experience",
    company: "Senior Enterprise Lead",
    specialty: "AWS Redshift, Snowflake Architecture & Apache Airflow Orchestration",
    image: "/students2.jpeg",
    bio: "Expert in cloud migration projects, complex SQL query tuning, and automated CI/CD pipeline deployments."
  }
];

// Real Capstone Projects
const capstoneProjects = [
  {
    id: "p1",
    tag: "Real-Time E-Commerce Streaming",
    title: "Multi-Terabyte Clickstream & Order Processing Engine",
    desc: "Build a real-time event ingestion engine using Apache Kafka and PySpark Structured Streaming to process high-velocity user activity logs, storing results in AWS Redshift for analytics dashboards.",
    tech: ["PySpark", "Kafka", "AWS Redshift", "Airflow", "Python"],
    metrics: "Handles 100,000+ events/sec with sub-second latency"
  },
  {
    id: "p2",
    tag: "Financial Fraud Detection",
    title: "Databricks Delta Lakehouse Fraud Analytics Platform",
    desc: "Design an ACID-compliant Lakehouse architecture using Databricks and Delta Lake. Implement Time-Travel queries, data versioning, and automated data quality checks for credit card transactions.",
    tech: ["Databricks", "Delta Lake", "PySpark SQL", "AWS S3", "Python"],
    metrics: "ACID transactional guarantees across 500GB+ datasets"
  },
  {
    id: "p3",
    tag: "Healthcare Cloud Warehouse",
    title: "Snowflake Enterprise Patient Analytics Pipeline",
    desc: "Construct an automated cloud warehouse pipeline using Snowflake Snowpipe and Apache Airflow. Transform raw clinical records into dimensional Star Schemas optimized for executive decision-making.",
    tech: ["Snowflake", "Snowpipe", "Apache Airflow", "Advanced SQL", "PostgreSQL"],
    metrics: "Reduced query execution time by 75% via clustering keys"
  }
];

// Success Testimonials
const testimonials = [
  {
    name: "Sarvesh Bhoite",
    role: "Senior Data Engineer at MNC",
    hike: "120% Salary Hike",
    review: "The hands-on PySpark labs and real ETL capstone projects helped me clear technical rounds effortlessly. The 1:1 mentor code reviews were invaluable for my transition.",
    avatar: "/students1.jpeg",
    company: "Fortune 500 MNC"
  },
  {
    name: "Aniket Deshmukh",
    role: "Big Data & Databricks Consultant",
    hike: "105% Salary Hike",
    review: "JVM Institute's Data Engineering course is 100% practical. I learned how to debug PySpark OOM errors and write production Airflow DAGs that impressed my interviewers.",
    avatar: "/students2.jpeg",
    company: "Tier 1 Tech Firm"
  },
  {
    name: "Pooja Patil",
    role: "Cloud Data Architect",
    hike: "90% Salary Hike",
    review: "From SQL window functions to AWS Redshift cluster setup, everything was taught with enterprise depth. The dedicated placement team got me 4 interview calls within 2 weeks!",
    avatar: "/place1.png",
    company: "Leading Global Tech"
  }
];

// What To Expect Points
const whatToExpectPoints = [
  "In-depth coverage of data engineering, from data collection to advanced analytics.",
  "Real-world projects to build confidence and experience in data engineering tasks.",
  "Training on tools like Apache Hadoop, Spark, Kafka, and AWS.",
  "Learn from seasoned professionals with extensive industry experience.",
  "We will provide you with free study material.",
  "The course has an availability of 2 hours daily live classes.",
  "Resume building, interview preparation, and 100 % job placement assistance."
];

export default function DataEngineeringCoursePage() {
  // Modal state for enrollment / syllabus request
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("Data Engineering Master Track Admission");

  // Accordion open/close state
  const [openModule, setOpenModule] = useState<string | null>("mod-1");

  // Selected tech stack category
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Testimonial timed slide switcher for Requirement 8
  const [activeTestimonialIndex, setActiveTestimonialIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonialIndex((prev) => (prev + 1) % testimonials.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  const openEnrollModal = (title: string) => {
    setModalTitle(title);
    setModalOpen(true);
  };

  const categories = ["All", "Big Data", "Cloud", "Warehouse", "Orchestration", "Database"];

  const filteredTech = selectedCategory === "All"
    ? techStack
    : techStack.filter(t => t.category.toLowerCase().includes(selectedCategory.toLowerCase()));
    
 return (
    <div className="min-h-screen flex flex-col bg-[#FAFAFC] dark:bg-[#0B0F19] transition-colors duration-300 overflow-x-hidden selection:bg-[#7C248C] selection:text-white">
      <Navbar />

      <main className="flex-grow pt-0">

        {/* ========================================================= */}
        {/* 1. HERO SECTION: EDITORIAL HIGH-IMPACT (Compact for Mobile) */}
        {/* ========================================================= */}
        <section className="relative py-6 sm:py-10 lg:py-14 bg-gradient-to-b from-[#F5F3FF] via-[#FAFAFC] to-white dark:from-[#0B0F19] dark:via-[#111827] dark:to-[#0B0F19] border-b border-purple-100/80 dark:border-slate-800/80 overflow-hidden flex items-center min-h-[auto] lg:h-[calc(100vh-80px)]">
          
          {/* Animated Ambient Glow Spheres */} 
          <motion.div 
            animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-24 -left-20 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-purple-600/20 dark:bg-purple-600/25 rounded-full blur-[100px] pointer-events-none z-0" 
          />
          
          <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 relative z-10 w-full">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 lg:gap-10 items-center">
              
              {/* Left Column: Animated Headline, Story & Quick Stats (7 Cols) */}
              <div className="lg:col-span-7 space-y-2.5 sm:space-y-3.5 text-left">
                
                {/* Pill Badge */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-purple-100/90 dark:bg-purple-950/90 border border-purple-200 dark:border-purple-800 text-[#7C3AED] dark:text-[#A78BFA] text-[10px] sm:text-xs font-black tracking-widest uppercase shadow-xs"
                >
                  <Zap className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
                  <span>CAREER LANDSCAPE 2026 • DATA ENGINEERING MASTER TRACK</span>
                </motion.div>

                {/* Animated Headline */}
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="text-xl xs:text-2xl sm:text-4xl lg:text-4xl xl:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-snug sm:leading-[1.15]"
                >
                  <span className="jvm-gradient-text">Advanced AI & Machine Learning Course in Pune!</span>
                </motion.h1>

                {/* Animated Narrative Paragraphs */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="space-y-1.5 text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed font-normal"
                >
                  <p>
                    Every modern enterprise is shifting from legacy databases to cloud-native Big Data architectures. Global tech product hubs and MNCs in Pune are actively hiring engineers who build multi-terabyte ETL pipelines using PySpark &amp; AWS.
                  </p>
                  <p className="hidden sm:block">
                    JVM Institute&apos;s Data Engineering Master Track bridges this skill gap completely with live PySpark scripts, Databricks clusters, Snowflake warehouses, Airflow DAGs, and <strong className="text-slate-900 dark:text-white font-bold underline decoration-[#E01E6A] dark:decoration-pink-500">100% Placement Assistance</strong>.
                  </p>
                </motion.div>

                {/* Interactive Animated Metric Stat Cards */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="grid grid-cols-3 gap-2 sm:gap-3.5 pt-1"
                >
                  <motion.div 
                    whileHover={{ scale: 1.04, y: -2 }}
                    className="p-2 sm:p-3 rounded-xl bg-white dark:bg-slate-900 border border-purple-100 dark:border-slate-800 shadow-xs text-center sm:text-left"
                  >
                    <div className="text-base sm:text-2xl font-black text-purple-600 dark:text-purple-400">120%</div>
                    <div className="text-[9px] sm:text-[11px] font-extrabold text-slate-700 dark:text-slate-300 mt-0.5">Average Salary Hike</div>
                  </motion.div>

                  <motion.div 
                    whileHover={{ scale: 1.04, y: -2 }}
                    className="p-2 sm:p-3 rounded-xl bg-white dark:bg-slate-900 border border-indigo-100 dark:border-slate-800 shadow-xs text-center sm:text-left"
                  >
                    <div className="text-base sm:text-2xl font-black text-indigo-600 dark:text-indigo-400">3.5x</div>
                    <div className="text-[9px] sm:text-[11px] font-extrabold text-slate-700 dark:text-slate-300 mt-0.5">Data Job Growth</div>
                  </motion.div>

                  <motion.div 
                    whileHover={{ scale: 1.04, y: -2 }}
                    className="p-2 sm:p-3 rounded-xl bg-white dark:bg-slate-900 border border-pink-100 dark:border-slate-800 shadow-xs text-center sm:text-left"
                  >
                    <div className="text-base sm:text-2xl font-black text-pink-600 dark:text-pink-400">80%</div>
                    <div className="text-[9px] sm:text-[11px] font-extrabold text-slate-700 dark:text-slate-300 mt-0.5">Practical Cloud Labs</div>
                  </motion.div>
                </motion.div>

                {/* Animated CTAs Button Group */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="pt-1 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3"
                >
                  <button
                    onClick={() => openEnrollModal("Hero Batch Enrollment")}
                    className="w-full sm:w-auto px-5 py-2.5 sm:px-6 sm:py-3 rounded-xl jvm-gradient-bg text-white font-extrabold text-xs sm:text-sm shadow-lg hover:shadow-purple-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer group"
                  >
                    <span>Enroll Now in Next Batch</span>
                    <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <button
                    onClick={() => openEnrollModal("Hero Download Syllabus PDF")}
                    className="w-full sm:w-auto px-5 py-2.5 sm:px-6 sm:py-3 rounded-xl bg-white dark:bg-slate-900 border border-purple-200 dark:border-slate-800 text-slate-900 dark:text-white font-bold text-xs sm:text-sm shadow-xs hover:bg-slate-50 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Download className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-purple-600 dark:text-purple-400" />
                    <span>Download Complete Syllabus PDF</span>
                  </button>
                </motion.div>

                {/* Trust Badges Bar */}
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="pt-2 sm:pt-3 border-t border-purple-100 dark:border-slate-800/80 flex flex-wrap items-center gap-2.5 sm:gap-4 text-[10px] sm:text-xs font-bold text-slate-700 dark:text-slate-300"
                >
                  <div className="flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                    <span>ISO Certified</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
                    <span>80% Cloud Labs</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
                    <span>50+ Hiring Partners</span>
                  </div>
                </motion.div>

              </div>

              {/* Right Column: Premium Glowing Card (5 Cols) */}
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="lg:col-span-5"
              >
                <div className="bg-gradient-to-b from-purple-950 via-slate-900 to-slate-950 text-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-xl border border-purple-500/30 relative overflow-hidden space-y-3 sm:space-y-4">
                  
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/10 text-purple-200 text-[9px] sm:text-xs font-bold uppercase tracking-wider backdrop-blur-md">
                    ✦ WHAT YOU WILL ACHIEVE
                  </div>

                  <h3 className="text-base sm:text-2xl font-extrabold tracking-tight leading-snug">
                    Transform From Beginner to Enterprise Data Architect
                  </h3>

                  <ul className="space-y-1.5 sm:space-y-2.5 text-[11px] sm:text-xs font-medium text-slate-200">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>Write production PySpark code on Databricks clusters.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>Design Star &amp; Snowflake schemas for Redshift &amp; Snowflake.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>Automate daily pipeline schedules using Apache Airflow DAGs.</span>
                    </li>
                  </ul>

                  <button
                    onClick={() => openEnrollModal("Hero Prospectus Enrollment")}
                    className="w-full py-2.5 sm:py-3 rounded-xl bg-white text-slate-900 font-extrabold text-xs sm:text-sm shadow-lg hover:bg-slate-100 transition-colors flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Request Detailed Program Prospectus</span>
                    <ArrowRight className="w-3.5 h-3.5 text-purple-600" />
                  </button>

                </div>
              </motion.div>

            </div>

          </div>
        </section>

        {/* ========================================================= */}
        {/* 2. COURSE CURRICULUM (With Scrollbar & Tools Used)       */}
        {/* ========================================================= */}
        <section className="py-8 sm:py-16 bg-[#FAFAFC] dark:bg-[#070A12] border-t border-purple-100/60 dark:border-slate-800/80 relative overflow-hidden">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            
            {/* Animated Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-3xl mx-auto mb-8 sm:mb-16 space-y-2 sm:space-y-4"
            >
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-100/80 dark:bg-purple-950/80 border border-purple-200/80 dark:border-purple-800/80 text-purple-700 dark:text-purple-300 text-[10px] sm:text-xs font-extrabold uppercase tracking-widest shadow-xs backdrop-blur-md">
                <Sparkles className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
                <span>COMPREHENSIVE SYLLABUS</span>
              </div>

              <h2 className="text-2xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
                Course <span className="jvm-gradient-text">Syllabus</span>
              </h2>

              <p className="text-xs sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
                Click on any module below to explore the detailed topics, tools used, and hands-on capstone deliverables.
              </p>
            </motion.div>

            {/* Accordion List */}
            <div className="space-y-3.5">
              {curriculumModules.map((mod, index) => {
                const isOpen = openModule === mod.id;

                return (
                  <motion.div
                    key={mod.id}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.45, delay: index * 0.07 }}
                    className={`relative rounded-2xl border transition-all duration-300 overflow-hidden backdrop-blur-md ${
                      isOpen
                        ? "bg-white dark:bg-slate-900/95 border-purple-500/50 dark:border-purple-500/50 shadow-xl"
                        : "bg-white/90 dark:bg-slate-900/80 border-slate-200/80 dark:border-slate-800/90 shadow-sm"
                    }`}
                  >
                    <button
                      onClick={() => setOpenModule(isOpen ? null : mod.id)}
                      className="w-full p-4 sm:p-6 text-left flex items-center justify-between gap-3 cursor-pointer group transition-colors"
                    >
                      <div className="flex items-center gap-3 sm:gap-5">
                        <span
                          className={`w-9 h-9 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center font-extrabold text-xs sm:text-sm shrink-0 ${
                            isOpen
                              ? "bg-gradient-to-br from-purple-600 to-indigo-600 text-white shadow-md"
                              : "bg-purple-100 dark:bg-purple-950/80 text-purple-700 dark:text-purple-300"
                          }`}
                        >
                          {mod.number}
                        </span>
                        <div>
                          <h3 className="text-xs sm:text-xl font-bold text-slate-900 dark:text-white leading-snug">
                            {mod.title}
                          </h3>
                          <div className="flex items-center gap-2 mt-0.5">
                            <span className="inline-flex items-center gap-1 text-[10px] sm:text-xs font-semibold text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-950/60 px-2 py-0.5 rounded-full border border-purple-100 dark:border-purple-900/50">
                              <Clock className="w-3 h-3" />
                              {mod.duration}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div
                        className={`w-7 h-7 sm:w-9 sm:h-9 rounded-full flex items-center justify-center transition-all shrink-0 ${
                          isOpen
                            ? "bg-purple-600 text-white rotate-180"
                            : "bg-slate-100 dark:bg-slate-800 text-slate-600"
                        }`}
                      >
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.35, ease: "easeInOut" }}
                          className="px-4 sm:px-6 pb-5 pt-1 border-t border-slate-100 dark:border-slate-800/80 space-y-3.5"
                        >
                          {/* TOPICS COVERED WITH SCROLLBAR FOR REQUIREMENT 2 */}
                          <div>
                            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400 block mb-2">
                              Topics Covered (Scroll for all):
                            </span>
                            <div className="max-h-36 sm:max-h-48 overflow-y-auto pr-1 space-y-1.5 scrollbar-thin scrollbar-thumb-purple-400/50">
                              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-medium">
                                {mod.topics.map((t, idx) => (
                                  <li
                                    key={idx}
                                    className="flex items-start gap-2 p-2 rounded-lg bg-slate-50/70 dark:bg-slate-850/60 border border-slate-100 dark:border-slate-800/50"
                                  >
                                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                                    <span className="leading-snug text-[11px] sm:text-xs">{t}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>

                          {/* TOOLS USED AFTER TEXT FOR REQUIREMENT 2 */}
                          <div className="p-2.5 sm:p-3.5 rounded-xl bg-purple-50/80 dark:bg-purple-950/40 border border-purple-200/80 dark:border-purple-800/60 flex items-center flex-wrap gap-2">
                            <span className="text-[10px] sm:text-xs font-extrabold uppercase text-purple-700 dark:text-purple-300 flex items-center gap-1">
                              <Wrench className="w-3.5 h-3.5 text-purple-600" /> Tools Used:
                            </span>
                            <div className="flex flex-wrap gap-1.5">
                              {mod.tools.map((tool, idx) => (
                                <span key={idx} className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-white dark:bg-slate-900 text-purple-900 dark:text-purple-200 border border-purple-200/60 shadow-xs">
                                  {tool}
                                </span>
                              ))}
                            </div>
                          </div>

                          {/* Module Project */}
                          <div className="p-3 rounded-xl bg-gradient-to-r from-slate-900 to-slate-950 text-white text-xs font-semibold flex items-center gap-2.5">
                            <Terminal className="w-4 h-4 text-purple-400 shrink-0" />
                            <div>
                              <span className="text-[9px] font-extrabold uppercase tracking-wider text-purple-300 block">
                                Hands-on Module Project
                              </span>
                              <span className="text-[11px] text-slate-200 font-medium">{mod.project}</span>
                            </div>
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
        {/* 3. WHAT TO EXPECT FROM JVM DATA ENGINEERING SECTION       */}
        {/* ========================================================= */}
        <section className="py-8 sm:py-16 relative overflow-hidden bg-slate-200/80 dark:bg-[#0E1322] border-t border-b border-slate-300/80 dark:border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            
            <h2 className="text-xl sm:text-3xl lg:text-4xl font-extrabold text-[#1E2B88] dark:text-white text-center mb-6 sm:mb-10 tracking-tight leading-tight">
              What to Expect from the JVM Data Engineering Course in Pune
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center">
              
              <div className="lg:col-span-7 space-y-1 text-left">
                {whatToExpectPoints.map((point, index) => (
                  <div 
                    key={index}
                    className="flex items-start gap-2.5 py-2 sm:py-3 border-b border-slate-300/80 dark:border-slate-800/80 last:border-b-0"
                  >
                    <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-orange-500 shrink-0 mt-0.5 stroke-[3]" />
                    <p className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 leading-snug sm:leading-relaxed">
                      {point}
                    </p>
                  </div>
                ))}
              </div>

              <div className="lg:col-span-5">
                <div className="relative w-full h-[200px] xs:h-[240px] sm:h-[360px] rounded-2xl overflow-hidden shadow-xl border-2 border-white dark:border-slate-800">
                  <Image
                    src="/students2.jpeg"
                    alt="JVM Institute Data Engineering Live Classroom Batch"
                    fill
                    className="object-cover object-center"
                  />
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* ========================================================= */}
        {/* 4. COURSE HIGHLIGHTS (DISPLAY TWO CARDS IN ONE LINE)      */}
        {/* ========================================================= */}
        <section className="py-8 sm:py-24 bg-[#FAFAFC] dark:bg-[#0B0F19] border-t border-purple-100/60">
          <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 relative z-10">
            
            <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-16 space-y-1.5 sm:space-y-3">
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-purple-600 dark:text-purple-400 block">
                LEARNING ADVANTAGE
              </span>
              <h2 className="text-xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                Program <span className="jvm-gradient-text">Highlights &amp; Benefits</span>
              </h2>
            </div>

            {/* REQUIREMENT 4: Display TWO CARDS IN ONE LINE for Mobile */}
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-8">
              
              <MagicCard className="rounded-xl sm:rounded-none" glowFrom="#7C3AED" glowTo="#E01E6A">
                <div className="p-3.5 sm:p-8 space-y-1.5 sm:space-y-3">
                  <h3 className="text-xs sm:text-xl font-extrabold text-slate-900 dark:text-white">6 Months Track</h3>
                  <p className="text-[10px] sm:text-sm text-slate-600 dark:text-slate-300 leading-snug sm:leading-relaxed">
                    24 weeks live interactive training &amp; 24/7 LMS.
                  </p>
                </div>
              </MagicCard>

              <MagicCard className="rounded-xl sm:rounded-none" glowFrom="#4F46E5" glowTo="#7C3AED">
                <div className="p-3.5 sm:p-8 space-y-1.5 sm:space-y-3">
                  <h3 className="text-xs sm:text-xl font-extrabold text-slate-900 dark:text-white">Cloud Lab Clusters</h3>
                  <p className="text-[10px] sm:text-sm text-slate-600 dark:text-slate-300 leading-snug sm:leading-relaxed">
                    Databricks, AWS Redshift &amp; Snowflake sandboxes.
                  </p>
                </div>
              </MagicCard>

              <MagicCard className="rounded-xl sm:rounded-none" glowFrom="#EC4899" glowTo="#E01E6A">
                <div className="p-3.5 sm:p-8 space-y-1.5 sm:space-y-3">
                  <h3 className="text-xs sm:text-xl font-extrabold text-slate-900 dark:text-white">4 Capstone ETLs</h3>
                  <p className="text-[10px] sm:text-sm text-slate-600 dark:text-slate-300 leading-snug sm:leading-relaxed">
                    Build production pipelines for e-commerce &amp; finance.
                  </p>
                </div>
              </MagicCard>

              <MagicCard className="rounded-xl sm:rounded-none" glowFrom="#F59E0B" glowTo="#7C3AED">
                <div className="p-3.5 sm:p-8 space-y-1.5 sm:space-y-3">
                  <h3 className="text-xs sm:text-xl font-extrabold text-slate-900 dark:text-white">1:1 Mentorship</h3>
                  <p className="text-[10px] sm:text-sm text-slate-600 dark:text-slate-300 leading-snug sm:leading-relaxed">
                    Line-by-line code reviews by Senior Data Architects.
                  </p>
                </div>
              </MagicCard>

              <MagicCard className="rounded-xl sm:rounded-none" glowFrom="#10B981" glowTo="#3B82F6">
                <div className="p-3.5 sm:p-8 space-y-1.5 sm:space-y-3">
                  <h3 className="text-xs sm:text-xl font-extrabold text-slate-900 dark:text-white">100% Placement</h3>
                  <p className="text-[10px] sm:text-sm text-slate-600 dark:text-slate-300 leading-snug sm:leading-relaxed">
                    ATS resume crafting &amp; direct MNC referrals.
                  </p>
                </div>
              </MagicCard>

              <MagicCard className="rounded-xl sm:rounded-none" glowFrom="#14B8A6" glowTo="#8B5CF6">
                <div className="p-3.5 sm:p-8 space-y-1.5 sm:space-y-3">
                  <h3 className="text-xs sm:text-xl font-extrabold text-slate-900 dark:text-white">ISO Certification</h3>
                  <p className="text-[10px] sm:text-sm text-slate-600 dark:text-slate-300 leading-snug sm:leading-relaxed">
                    Industry-accredited Data Engineering diploma.
                  </p>
                </div>
              </MagicCard>

            </div>

          </div>
        </section>

        {/* ========================================================= */}
        {/* 5. TOOLS & TECHNOLOGIES STACK SECTION (MAKE SMALL ON MOBILE) */}
        {/* ========================================================= */}
        <section className="py-8 sm:py-24 bg-white dark:bg-[#0B0F19] border-t border-slate-200/70 dark:border-slate-800">
          <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 relative z-10">
            
            <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-12 space-y-1.5 sm:space-y-3">
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-purple-600 dark:text-purple-400 block">
                ENTERPRISE TECH ECOSYSTEM
              </span>
              <h2 className="text-xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                Tools &amp; Technologies <span className="jvm-gradient-text">You Will Master</span>
              </h2>
            </div>

            {/* Category Filter Chips */}
            <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 mb-6 sm:mb-10">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold transition-all cursor-pointer ${
                    selectedCategory === cat
                      ? "jvm-gradient-bg text-white shadow-xs"
                      : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* REQUIREMENT 5: MAKE TECH STACK COMPACT/SMALL ON MOBILE VIEW (3 Cols) */}
            <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-6">
              {filteredTech.map((item) => (
                <motion.div
                  key={item.name}
                  whileHover={{ scale: 1.03 }}
                  className="p-2.5 sm:p-5 rounded-xl sm:rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xs text-center sm:text-left overflow-hidden"
                >
                  <span className="text-[9px] sm:text-xs font-bold text-purple-600 dark:text-purple-400 block truncate">{item.category}</span>

                  <h3 className="text-xs sm:text-lg font-extrabold text-slate-900 dark:text-white mt-0.5 truncate">
                    {item.name}
                  </h3>
                </motion.div>
              ))}
            </div>

          </div>
        </section>

        {/* ========================================================= */}
        {/* 6. HANDS-ON CAPSTONE PROJECTS SHOWCASE (SCROLLBAR FOR MOBILE) */}
        {/* ========================================================= */}
        <section className="py-8 sm:py-24 bg-white dark:bg-[#0B0F19] border-t border-slate-200/70 dark:border-slate-800">
          <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 relative z-10">
            
            <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-16 space-y-1.5 sm:space-y-3">
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-purple-600 dark:text-purple-400 block">
                PORTFOLIO BUILDERS
              </span>
              <h2 className="text-xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                Enterprise <span className="jvm-gradient-text">Capstone Projects</span>
              </h2>
            </div>

            {/* REQUIREMENT 6: ADD SCROLL BAR FOR DISPLAY THIS PROJECT ON MOBILE */}
            <div className="flex overflow-x-auto snap-x snap-mandatory gap-3.5 sm:gap-8 pb-4 scrollbar-thin scrollbar-thumb-purple-500/50 md:grid md:grid-cols-3">
              {capstoneProjects.map((p) => (
                <div key={p.id} className="min-w-[260px] sm:min-w-[320px] md:min-w-0 flex-1 snap-center bg-slate-50 dark:bg-slate-900 p-4 sm:p-7 rounded-2xl sm:rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-md space-y-3 flex flex-col justify-between">
                  <div className="space-y-2">
                    <span className="px-2.5 py-0.5 rounded-full text-[9px] sm:text-[11px] font-extrabold bg-purple-100 dark:bg-purple-950 text-[#7C3AED] dark:text-purple-300">
                      {p.tag}
                    </span>
                    <h3 className="text-sm sm:text-lg font-extrabold text-slate-900 dark:text-white leading-snug">
                      {p.title}
                    </h3>
                    <p className="text-[11px] sm:text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
                      {p.desc}
                    </p>
                  </div>

                  <div className="space-y-2 pt-2 border-t border-slate-200/60 dark:border-slate-800">
                    <div className="flex flex-wrap gap-1">
                      {p.tech.map((t) => (
                        <span key={t} className="px-2 py-0.5 rounded-md text-[9px] sm:text-[10px] font-bold bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/60">
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="text-[10px] sm:text-[11px] font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>{p.metrics}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ========================================================= */}
        {/* 7. PLACEMENT SUPPORT JOURNEY (FIT CLEANLY IN VIEW)         */}
        {/* ========================================================= */}
        <section className="py-8 sm:py-24 bg-[#FAFAFC] dark:bg-[#0B0F19] border-t border-purple-100/60 dark:border-slate-800">
          <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 relative z-10">
            
            <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-16 space-y-1.5 sm:space-y-3">
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-purple-600 dark:text-purple-400 block">
                CAREER DESK
              </span>
              <h2 className="text-xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                Dedicated <span className="jvm-gradient-text">100% Placement Support Journey</span>
              </h2>
            </div>

            {/* REQUIREMENT 7: 2-COLUMN GRID ON MOBILE VIEW FOR CLEAN FIT */}
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-6">
              
              <div className="p-3.5 sm:p-6 rounded-2xl sm:rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-1.5 sm:space-y-3">
                <div className="w-7 h-7 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-purple-100 dark:bg-purple-950 text-[#7C3AED] dark:text-purple-300 font-extrabold flex items-center justify-center text-xs sm:text-sm">
                  01
                </div>
                <h3 className="text-xs sm:text-base font-extrabold text-slate-900 dark:text-white leading-tight">ATS Resume Crafting</h3>
                <p className="text-[10px] sm:text-xs text-slate-600 dark:text-slate-400 leading-snug">
                  Tailored PySpark &amp; Databricks keywords for ATS filters.
                </p>
              </div>

              <div className="p-3.5 sm:p-6 rounded-2xl sm:rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-1.5 sm:space-y-3">
                <div className="w-7 h-7 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-indigo-100 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-300 font-extrabold flex items-center justify-center text-xs sm:text-sm">
                  02
                </div>
                <h3 className="text-xs sm:text-base font-extrabold text-slate-900 dark:text-white leading-tight">1-on-1 Tech Mocks</h3>
                <p className="text-[10px] sm:text-xs text-slate-600 dark:text-slate-400 leading-snug">
                  Simulated SQL coding &amp; system design architecture rounds.
                </p>
              </div>

              <div className="p-3.5 sm:p-6 rounded-2xl sm:rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-1.5 sm:space-y-3">
                <div className="w-7 h-7 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-pink-100 dark:bg-pink-950 text-pink-600 dark:text-pink-300 font-extrabold flex items-center justify-center text-xs sm:text-sm">
                  03
                </div>
                <h3 className="text-xs sm:text-base font-extrabold text-slate-900 dark:text-white leading-tight">Hiring Referrals</h3>
                <p className="text-[10px] sm:text-xs text-slate-600 dark:text-slate-400 leading-snug">
                  Direct routing to 50+ partner MNCs in Pune &amp; Bangalore.
                </p>
              </div>

              <div className="p-3.5 sm:p-6 rounded-2xl sm:rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-1.5 sm:space-y-3">
                <div className="w-7 h-7 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-300 font-extrabold flex items-center justify-center text-xs sm:text-sm">
                  04
                </div>
                <h3 className="text-xs sm:text-base font-extrabold text-slate-900 dark:text-white leading-tight">Salary Negotiation</h3>
                <p className="text-[10px] sm:text-xs text-slate-600 dark:text-slate-400 leading-snug">
                  Guidance to negotiate maximum compensation packages.
                </p>
              </div>

            </div>

          </div>
        </section>

        {/* ========================================================= */}
        {/* 8. STUDENT SUCCESS STORIES (AUTOMATIC TIMED ROTATION)     */}
        {/* ========================================================= */}
        <section className="py-8 sm:py-24 bg-[#FAFAFC] dark:bg-[#0B0F19] border-t border-purple-100/60 dark:border-slate-800">
          <div className="max-w-4xl mx-auto px-3.5 sm:px-6 lg:px-8 relative z-10">
            
            <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-12 space-y-1.5 sm:space-y-3">
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-purple-600 dark:text-purple-400 block">
                REAL TRANSCRIPTIONS
              </span>
              <h2 className="text-xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                Student <span className="jvm-gradient-text">Success Stories</span>
              </h2>
            </div>

            {/* REQUIREMENT 8: AUTOMATIC TIMED SLIDE SWITCHER WITHOUT SCROLLBAR */}
            <div className="relative">
              <div className="bg-white dark:bg-slate-900 p-5 sm:p-8 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-xl space-y-4 transition-all duration-500">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full text-xs font-black bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300">
                    {testimonials[activeTestimonialIndex].hike}
                  </span>
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>
                </div>

                <p className="text-xs sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed italic">
                  &quot;{testimonials[activeTestimonialIndex].review}&quot;
                </p>

                <div className="flex items-center gap-3 pt-3 border-t border-slate-100 dark:border-slate-800">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden shrink-0 border border-purple-200">
                    <Image src={testimonials[activeTestimonialIndex].avatar} alt={testimonials[activeTestimonialIndex].name} fill className="object-cover" />
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm font-extrabold text-slate-900 dark:text-white">{testimonials[activeTestimonialIndex].name}</div>
                    <div className="text-[11px] sm:text-xs font-semibold text-purple-600 dark:text-purple-400">{testimonials[activeTestimonialIndex].role}</div>
                    <div className="text-[10px] text-slate-400">{testimonials[activeTestimonialIndex].company}</div>
                  </div>
                </div>
              </div>

              {/* Indicator Dots */}
              <div className="flex items-center justify-center gap-2 mt-4">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveTestimonialIndex(idx)}
                    className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                      activeTestimonialIndex === idx
                        ? "w-6 jvm-gradient-bg"
                        : "w-2 bg-slate-300 dark:bg-slate-700 hover:bg-slate-400"
                    }`}
                  />
                ))}
              </div>
            </div>

          </div>
        </section>

      </main>

      {/* Global Lead Enquiry Modal */}
      <LeadEnquiryModal 
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        courseTitle={modalTitle}
      />

      <Footer />
    </div>
  );
}
