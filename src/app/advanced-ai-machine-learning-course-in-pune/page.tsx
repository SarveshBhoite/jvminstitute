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
  Laptop,
  Award,
  BookOpen,
  Terminal,
  Users,
  Briefcase,
  Globe,
  Cpu,
  Layers,
  ChevronDown,
  ChevronRight,
  X,
  Send,
  Database,
  Cloud,
  FileCode,
  TrendingUp,
  Building2,
  Zap,
  Check,
  GraduationCap,
  Wrench,
  BrainCircuit,
  FileText,
  Activity,
  MessageSquare,
  ShieldAlert,
  Server
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LeadEnquiryModal from "@/components/LeadEnquiryModal";

// User-provided Detailed Curriculum Modules
const curriculumModules = [
  {
    id: "mod-1",
    number: "01",
    title: "Deep Learning Fundamentals & Neural Network Architecture",
    duration: "4 Weeks",
    topics: [
      "Deep Learning Fundamentals & Machine Learning vs Deep Learning",
      "Neural Network Architecture & Deep Learning Workflow",
      "GPU vs CPU for AI Workloads",
      "Artificial Neural Networks (ANN) Deep Dive",
      "Perceptron, Activation Functions & Forward/Back Propagation",
      "TensorFlow Ecosystem & Keras API Hands-on",
      "Building Deep Learning Models using Sequential API",
      "Hyperparameter Tuning (Epochs, Batch Size, Learning Rate & Optimizers)"
    ],
    tools: ["TensorFlow", "Keras", "PyTorch", "Python", "CUDA", "NumPy"],
    project: "Build and train a custom deep neural network from scratch with hyperparameter tuning on GPU accelerators."
  },
  {
    id: "mod-2",
    number: "02",
    title: "Computer Vision, CNNs & Modern Object Detection",
    duration: "4 Weeks",
    topics: [
      "Computer Vision Fundamentals & Image Processing Techniques",
      "Convolutional Neural Networks (CNN) Architecture",
      "Convolution, Pooling, Strides & Feature Extraction",
      "Image Classification using Deep Learning",
      "Transfer Learning with Pretrained Models (ResNet, EfficientNet)",
      "Fine-Tuning Deep Learning Models for Enterprise Datasets",
      "Object Detection & Bounding Box Techniques",
      "Modern Object Detection Models (YOLO, Faster R-CNN)"
    ],
    tools: ["OpenCV", "YOLOv9", "Torchvision", "Albumentations", "PyTorch"],
    project: "Develop an automated Medical Image Classification and real-time object detection vision pipeline."
  },
  {
    id: "mod-3",
    number: "03",
    title: "Natural Language Processing (NLP) & Transformer Architecture",
    duration: "4 Weeks",
    topics: [
      "Natural Language Processing (NLP) Fundamentals",
      "NLP Workflow, Text Processing, Tokenization & Lemmatization",
      "Transformer Architecture & Multi-Head Attention Mechanism",
      "Embeddings & Semantic Representation (Word2Vec, BERT)",
      "Large Language Models (GPT, Claude, Gemini & Llama)",
      "Prompt Engineering (Zero-Shot, Few-Shot, Chain-of-Thought & Structured Prompting)"
    ],
    tools: ["Hugging Face", "BERT", "Transformers", "NLTK", "OpenAI API", "SpaCy"],
    project: "Construct an AI Resume Screening System parsing and matching candidate profiles with zero-shot & few-shot prompts."
  },
  {
    id: "mod-4",
    number: "04",
    title: "Vector Databases, RAG & Autonomous AI Systems",
    duration: "4 Weeks",
    topics: [
      "Vector Databases, Embeddings & Semantic Search (ChromaDB, Pinecone)",
      "Retrieval-Augmented Generation (RAG) Architecture",
      "Enterprise Knowledge Retrieval using RAG Frameworks",
      "AI Agents & Autonomous AI Systems Design",
      "AI Agent Workflow & Enterprise AI Automation",
      "Workflow Automation & Intelligent Enterprise Workflows"
    ],
    tools: ["LangChain", "CrewAI", "ChromaDB", "Pinecone", "LlamaIndex", "Python"],
    project: "Build an Enterprise AI Chatbot using RAG architecture and autonomous multi-agent workflows."
  },
  {
    id: "mod-5",
    number: "05",
    title: "MLOps, Docker for AI & Cloud AI Services",
    duration: "4 Weeks",
    topics: [
      "MLOps Fundamentals & Machine Learning Lifecycle Management",
      "Experiment Tracking & Model Management (MLflow)",
      "Docker for AI (Containerization & Docker Architecture)",
      "Cloud AI Services (Azure AI, Google Vertex AI & AWS SageMaker)",
      "REST API Development (FastAPI) & AI Service Integration"
    ],
    tools: ["Docker", "MLflow", "FastAPI", "AWS SageMaker", "Azure AI", "Vertex AI"],
    project: "Containerize and deploy an end-to-end Fraud Detection System REST microservice with MLflow experiment tracking."
  },
  {
    id: "mod-6",
    number: "06",
    title: "CI/CD for AI, Production Deployment & Capstone",
    duration: "4 Weeks",
    topics: [
      "GitHub, Version Control & Enterprise Collaboration",
      "Continuous Integration (CI) & Continuous Deployment (CD) for AI Applications",
      "Production AI Deployment & Enterprise Best Practices",
      "Model Drift Detection, Monitoring & Logging",
      "Mock Technical Interviews & AI Portfolio Support"
    ],
    tools: ["Git & GitHub", "GitHub Actions", "CI/CD", "Kubernetes", "Evidently AI"],
    project: "Deploy an Intelligent Enterprise AI Platform with automated CI/CD pipelines and live cloud production monitoring."
  }
];

// User-specified 5 Projects Data
const capstoneProjects = [
  {
    id: "p1",
    tag: "NLP & HR Tech",
    icon: FileText,
    title: "AI Resume Screening System",
    desc: "Build an automated NLP candidate evaluation engine that parses resumes, computes semantic embeddings, and ranks profiles using Zero-Shot & Few-Shot prompt engineering.",
    tech: ["NLP", "Transformers", "Prompt Engineering", "Python", "FastAPI"],
    metrics: "Parses 1,000+ resumes/min with 96% matching accuracy"
  },
  {
    id: "p2",
    tag: "Computer Vision & Healthcare",
    icon: Activity,
    title: "Medical Image Classification",
    desc: "Train a deep Convolutional Neural Network (CNN) with Transfer Learning (ResNet/EfficientNet) on medical X-ray and MRI scans to detect anomalies with fine-tuned confidence scores.",
    tech: ["CNN", "Transfer Learning", "PyTorch", "OpenCV", "TensorFlow"],
    metrics: "Achieves 99.2% diagnostic classification precision"
  },
  {
    id: "p3",
    tag: "Generative AI & RAG",
    icon: MessageSquare,
    title: "Enterprise AI Chatbot",
    desc: "Construct an interactive conversational RAG assistant backed by Vector Databases (ChromaDB/Pinecone) and LLMs (GPT/Llama) to retrieve knowledge from thousands of company documents.",
    tech: ["RAG Architecture", "Vector DB", "LangChain", "OpenAI API", "ChromaDB"],
    metrics: "Sub-second response latency with zero hallucination rate"
  },
  {
    id: "p4",
    tag: "FinTech & Predictive AI",
    icon: ShieldAlert,
    title: "Fraud Detection System",
    desc: "Implement a high-throughput anomaly detection and machine learning pipeline to identify fraudulent financial transactions in real time with continuous MLOps tracking.",
    tech: ["Deep Learning", "MLOps", "MLflow", "Docker", "Scikit-Learn"],
    metrics: "Processes 50,000 tx/sec, reducing false alerts by 55%"
  },
  {
    id: "p5",
    tag: "Full-Stack Enterprise AI",
    icon: Server,
    title: "Intelligent Enterprise AI Platform",
    desc: "Deploy a production multi-agent AI system automating enterprise workflows with continuous integration (CI/CD), Docker containers, and AWS SageMaker cloud hosting.",
    tech: ["AI Agents", "Docker", "AWS SageMaker", "CI/CD", "FastAPI"],
    metrics: "Automates 80% of routine corporate workflow tasks"
  }
];

// Tools & Technologies Data
const techStack = [
  { name: "PyTorch", category: "Deep Learning", badge: "Core AI Engine", color: "from-orange-500 to-red-600" },
  { name: "TensorFlow", category: "Deep Learning", badge: "Production ML", color: "from-amber-500 to-orange-600" },
  { name: "OpenCV", category: "Computer Vision", badge: "Vision Library", color: "from-[#1E2B88] to-indigo-600" },
  { name: "Hugging Face", category: "NLP & LLMs", badge: "Transformers", color: "from-yellow-400 to-amber-500" },
  { name: "YOLO (v8/v9)", category: "Computer Vision", badge: "Object Detection", color: "from-emerald-500 to-teal-600" },
  { name: "Vector Databases", category: "RAG & AI", badge: "Chroma/Pinecone", color: "from-purple-500 to-indigo-600" },
  { name: "Docker for AI", category: "MLOps", badge: "Containers", color: "from-blue-600 to-cyan-600" },
  { name: "AWS SageMaker", category: "Cloud AI Services", badge: "Cloud Platform", color: "from-amber-500 to-yellow-600" },
  { name: "FastAPI", category: "REST API Dev", badge: "High Speed", color: "from-teal-500 to-emerald-600" },
  { name: "LangChain", category: "RAG & Agents", badge: "AI Agents", color: "from-pink-500 to-rose-600" },
  { name: "MLflow", category: "MLOps", badge: "Experiment Track", color: "from-sky-500 to-blue-600" },
  { name: "CI/CD Pipelines", category: "Deployment", badge: "Enterprise", color: "from-indigo-600 to-purple-600" }
];

// Faculty / Mentors
const mentors = [
  {
    name: "Jayesh Bhoite",
    role: "Lead AI Architect & Founder",
    experience: "12+ Years Industry Experience",
    company: "Ex-Fortune 500 Architect",
    specialty: "Deep Learning, PyTorch, Computer Vision & Scalable AI Infrastructure",
    image: "/students1.jpeg",
    bio: "Mentored 5,000+ engineers into top tier AI and MNC tech companies. Specializes in production neural network deployment, MLOps, and RAG architectures."
  },
  {
    name: "Dr. Ananya Roy",
    role: "Senior AI Researcher & MLOps Lead",
    experience: "10+ Years AI & Research Experience",
    company: "Ex-AI Research Specialist",
    specialty: "Natural Language Processing, Transformer Models, LLMs & AWS SageMaker",
    image: "/students2.jpeg",
    bio: "Expert in fine-tuning large language models, autonomous AI agents, and computer vision systems for global enterprise products."
  }
];

// Student Testimonials
const testimonials = [
  {
    name: "Sarvesh Bhoite",
    role: "AI Engineer at Tier 1 Tech MNC",
    hike: "130% Salary Hike",
    review: "The Advanced AI & Machine Learning program at JVM Institute gave me deep hands-on expertise in PyTorch, CNNs, Transformers, RAG, and MLOps. Building the AI Resume Screening & Medical Vision projects cleared my technical rounds easily!",
    avatar: "/students1.jpeg",
    company: "Fortune 500 AI Hub"
  },
  {
    name: "Pooja Patil",
    role: "Computer Vision Specialist",
    hike: "115% Salary Hike",
    review: "From neural network backpropagation math to deploying YOLO object detection models inside Docker containers on AWS SageMaker, the syllabus covered 100% of real enterprise requirements.",
    avatar: "/place1.png",
    company: "Global Product Giant"
  },
  {
    name: "Aniket Deshmukh",
    role: "MLOps & AI Agent Architect",
    hike: "100% Salary Hike",
    review: "JVM Institute's practical GPU lab focus and real RAG & Fraud Detection project training helped me land my dream role. Best investment for an AI career in Pune!",
    avatar: "/students2.jpeg",
    company: "Leading Tech Firm"
  }
];

export default function AdvancedAIMachineLearningCoursePage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("Advanced AI & Machine Learning Admission");
  const [openModule, setOpenModule] = useState<string | null>("mod-1");
  const [selectedCategory, setSelectedCategory] = useState("All");
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

  const categories = ["All", "Deep Learning", "Computer Vision", "NLP & LLMs", "RAG & AI", "MLOps"];

  const filteredTech = selectedCategory === "All"
    ? techStack
    : techStack.filter(t => t.category.toLowerCase().includes(selectedCategory.toLowerCase()));

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAFC] dark:bg-[#0B0F19] transition-colors duration-300 overflow-x-hidden selection:bg-[#7C248C] selection:text-white">
      <Navbar />

      <main className="flex-grow pt-0">

        {/* ========================================================= */}
        {/* 1. HERO SECTION: MATCHING IMAGE 2 EXACT DESIGN */}
        {/* ========================================================= */}
        <section className="relative py-6 sm:py-10 lg:py-14 bg-gradient-to-b from-[#F5F3FF] via-[#FAFAFC] to-white dark:from-[#0B0F19] dark:via-[#111827] dark:to-[#0B0F19] border-b border-purple-100/80 dark:border-slate-800/80 overflow-hidden flex items-center min-h-[auto] lg:min-h-[580px]">
          
          {/* Animated Ambient Glow Spheres */} 
          <motion.div 
            animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-24 -left-20 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-purple-600/20 dark:bg-purple-600/25 rounded-full blur-[100px] pointer-events-none z-0" 
          />
          
          <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 relative z-10 w-full">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 lg:gap-10 items-center">
              
              {/* Left Column: Headline, Description & Stats (7 Cols) */}
              <div className="lg:col-span-7 space-y-2.5 sm:space-y-3.5 text-left">
                
                {/* Pill Badge */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-purple-100/90 dark:bg-purple-950/90 border border-purple-200 dark:border-purple-800 text-[#7C3AED] dark:text-[#A78BFA] text-[10px] sm:text-xs font-black tracking-widest uppercase shadow-xs"
                >
                  <Zap className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
                  <span>CAREER LANDSCAPE 2026 • ADVANCED AI & MACHINE LEARNING MASTER TRACK</span>
                </motion.div>

                {/* Main Title */}
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="text-2xl sm:text-4xl lg:text-4xl xl:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-snug sm:leading-[1.15]"
                >
                  <span className="jvm-gradient-text">Advanced AI &amp; Machine Learning Course in Pune!</span>
                </motion.h1>

                {/* Description */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="space-y-1.5 text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed font-normal"
                >
                  <p>
                    Learn Deep Learning, Neural Networks, Computer Vision, Natural Language Processing (NLP), Transformers, Large Language Models (LLMs), RAG Architecture, AI Agents, MLOps, Model Deployment, and AI System Design. Global tech hubs and AI product firms are aggressively hiring engineers with hands-on PyTorch &amp; TensorFlow mastery.
                  </p>
                  <p className="hidden sm:block">
                    JVM Institute&apos;s Advanced AI &amp; ML Track bridges this gap completely with dedicated GPU cloud labs, real-world vision &amp; NLP projects, and <strong className="text-slate-900 dark:text-white font-bold underline decoration-[#E01E6A] dark:decoration-pink-500">100% Placement Assistance</strong>.
                  </p>
                </motion.div>

                {/* Metric Stat Cards */}
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
                    <div className="text-base sm:text-2xl font-black text-purple-600 dark:text-purple-400">130%</div>
                    <div className="text-[9px] sm:text-[11px] font-extrabold text-slate-700 dark:text-slate-300 mt-0.5">Average Salary Hike</div>
                  </motion.div>

                  <motion.div 
                    whileHover={{ scale: 1.04, y: -2 }}
                    className="p-2 sm:p-3 rounded-xl bg-white dark:bg-slate-900 border border-indigo-100 dark:border-slate-800 shadow-xs text-center sm:text-left"
                  >
                    <div className="text-base sm:text-2xl font-black text-indigo-600 dark:text-indigo-400">4.2x</div>
                    <div className="text-[9px] sm:text-[11px] font-extrabold text-slate-700 dark:text-slate-300 mt-0.5">AI Job Growth</div>
                  </motion.div>

                  <motion.div 
                    whileHover={{ scale: 1.04, y: -2 }}
                    className="p-2 sm:p-3 rounded-xl bg-white dark:bg-slate-900 border border-pink-100 dark:border-slate-800 shadow-xs text-center sm:text-left"
                  >
                    <div className="text-base sm:text-2xl font-black text-pink-600 dark:text-pink-400">85%</div>
                    <div className="text-[9px] sm:text-[11px] font-extrabold text-slate-700 dark:text-slate-300 mt-0.5">Practical GPU Labs</div>
                  </motion.div>
                </motion.div>

                {/* Action CTAs */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="pt-1 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3"
                >
                  <button
                    onClick={() => openEnrollModal("Advanced AI & ML Batch Enrollment")}
                    className="w-full sm:w-auto px-5 py-2.5 sm:px-6 sm:py-3 rounded-xl jvm-gradient-bg text-white font-extrabold text-xs sm:text-sm shadow-lg hover:shadow-purple-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer group"
                  >
                    <span>Enroll Now in Next Batch</span>
                    <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <button
                    onClick={() => openEnrollModal("Advanced AI Download Syllabus PDF")}
                    className="w-full sm:w-auto px-5 py-2.5 sm:px-6 sm:py-3 rounded-xl bg-white dark:bg-slate-900 border border-purple-200 dark:border-slate-800 text-slate-900 dark:text-white font-bold text-xs sm:text-sm shadow-xs hover:bg-slate-50 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Download className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-purple-600 dark:text-purple-400" />
                    <span>Download Complete Syllabus PDF</span>
                  </button>
                </motion.div>

                {/* Trust Badges */}
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
                    <span>85% GPU &amp; Cloud Labs</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
                    <span>50+ Hiring Partners</span>
                  </div>
                </motion.div>

              </div>

              {/* Right Column: Dark Card (Image 2 style) */}
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
                    Transform From Beginner to AI &amp; Machine Learning Specialist
                  </h3>

                  <ul className="space-y-1.5 sm:space-y-2.5 text-[11px] sm:text-xs font-medium text-slate-200">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>Write production Deep Learning models with TensorFlow &amp; PyTorch.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>Master Computer Vision (YOLO, OpenCV) &amp; NLP (Transformers, BERT, LLMs).</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>Automate MLOps pipelines using Docker, Kubernetes &amp; MLflow.</span>
                    </li>
                  </ul>

                  <button
                    onClick={() => openEnrollModal("Advanced AI Prospectus Enrollment")}
                    className="w-full py-2.5 sm:py-3 rounded-xl bg-white text-slate-900 font-extrabold text-xs sm:text-sm shadow-lg hover:bg-slate-100 transition-colors flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Request Detailed Program Prospectus</span>
                    <ArrowRight className="w-4 h-4 text-purple-700" />
                  </button>

                  <div className="pt-1 text-center">
                    <p className="text-[10px] text-purple-200/80 font-medium">⚡ Limited seats available for next batch in Pune &amp; Online</p>
                  </div>
                </div>
              </motion.div>

            </div>

          </div>
        </section>

        {/* ========================================================= */}
        {/* 2. KEY PROGRAM HIGHLIGHTS */}
        {/* ========================================================= */}
        <section className="py-12 sm:py-16 bg-white dark:bg-[#0B0F19]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <span className="text-xs font-extrabold uppercase tracking-widest text-purple-600 dark:text-purple-400">Why Choose This Program</span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-1">Key Program Highlights</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: BrainCircuit, title: "Deep Learning & Neural Networks", desc: "Master ANNs, CNNs, RNNs, and Transformers using PyTorch & TensorFlow with GPU acceleration." },
                { icon: Laptop, title: "Computer Vision & Object Detection", desc: "Build image classification, YOLOv9 object detection, image segmentation, and transfer learning models." },
                { icon: Cpu, title: "NLP, LLMs & RAG Architecture", desc: "Build Enterprise Knowledge Retrieval systems with Prompt Engineering, Vector DBs, and LLM fine-tuning." },
                { icon: Terminal, title: "AI Agents & Autonomous Systems", desc: "Design autonomous AI agent workflows, enterprise automation, and intelligent corporate tools." },
                { icon: Award, title: "MLOps, Docker & Cloud AI", desc: "Learn MLflow experiment tracking, Docker containerization, and AWS SageMaker cloud deployment." },
                { icon: Briefcase, title: "100% Placement & CI/CD Support", desc: "Automate CI/CD pipelines, 1-on-1 mock technical interviews, and direct referrals to 50+ tech MNCs." }
              ].map((item, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-purple-100 dark:bg-purple-950/80 text-purple-700 dark:text-purple-300 shrink-0">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900 dark:text-white">{item.title}</h3>
                    <p className="text-xs text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 3. CURRICULUM MODULES (ACCORDION) */}
        {/* ========================================================= */}
        <section className="py-12 sm:py-16 bg-slate-50/70 dark:bg-[#0F172A]/50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <span className="text-xs font-extrabold uppercase tracking-widest text-purple-600 dark:text-purple-400">Detailed Roadmap</span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-1">Course Curriculum &amp; Detailed Syllabus</h2>
              <p className="text-sm text-slate-600 dark:text-slate-300 mt-2">Comprehensive hands-on syllabus covering all 38 enterprise AI &amp; ML modules.</p>
            </div>

            <div className="space-y-4">
              {curriculumModules.map((mod) => {
                const isOpen = openModule === mod.id;
                return (
                  <div key={mod.id} className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 overflow-hidden shadow-xs">
                    <button
                      onClick={() => setOpenModule(isOpen ? null : mod.id)}
                      className="w-full p-4 sm:p-5 flex items-center justify-between text-left hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors cursor-pointer"
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
                      <div className="px-5 pb-5 pt-1 border-t border-slate-100 dark:border-slate-800 space-y-4">
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
                            <span key={tool} className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-purple-50 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 border border-purple-200/60 dark:border-purple-800/60">
                              {tool}
                            </span>
                          ))}
                        </div>

                        <div className="p-3 rounded-xl bg-purple-50/80 dark:bg-purple-950/40 border border-purple-100 dark:border-purple-900/40 text-xs font-medium text-slate-800 dark:text-slate-200">
                          <strong className="text-purple-700 dark:text-purple-300">Module Hands-on Project: </strong>
                          {mod.project}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 4. TECHNOLOGIES & TOOLS COVERED */}
        {/* ========================================================= */}
        <section className="py-12 sm:py-16 bg-white dark:bg-[#0B0F19]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-8">
              <span className="text-xs font-extrabold uppercase tracking-widest text-purple-600 dark:text-purple-400">Tech Stack Mastery</span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-1">Technologies &amp; Tools Covered</h2>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                    selectedCategory === cat
                      ? "jvm-gradient-bg text-white shadow-md"
                      : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Tech Stack Cards Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {filteredTech.map((tech) => (
                <div key={tech.name} className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center space-y-2 hover:border-purple-400 transition-colors">
                  <div className={`w-8 h-8 mx-auto rounded-lg bg-gradient-to-r ${tech.color} flex items-center justify-center text-white font-bold text-xs shadow-xs`}>
                    {tech.name.substring(0, 2).toUpperCase()}
                  </div>
                  <div className="text-xs font-bold text-slate-900 dark:text-white">{tech.name}</div>
                  <span className="inline-block px-2 py-0.5 rounded text-[10px] font-semibold bg-purple-100 dark:bg-purple-950/80 text-purple-700 dark:text-purple-300">
                    {tech.badge}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 5. CAPSTONE PROJECTS SHOWCASE (USER 5 SPECIFIC PROJECTS) */}
        {/* ========================================================= */}
        <section className="py-12 sm:py-16 bg-slate-50/70 dark:bg-[#0F172A]/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <span className="text-xs font-extrabold uppercase tracking-widest text-purple-600 dark:text-purple-400">Practical Portfolio</span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-1">Enterprise Capstone Projects</h2>
              <p className="text-sm text-slate-600 dark:text-slate-300 mt-2">Build real, industry-grade projects to showcase to top tech recruiters.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {capstoneProjects.map((proj) => {
                const IconComp = proj.icon;
                return (
                  <div key={proj.id} className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3 flex flex-col justify-between shadow-xs hover:shadow-lg transition-shadow">
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="px-2.5 py-1 rounded-md text-[10px] font-extrabold bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300 uppercase">
                          {proj.tag}
                        </span>
                        <div className="p-2 rounded-lg bg-purple-50 dark:bg-purple-950/60 text-purple-600 dark:text-purple-300">
                          <IconComp className="w-5 h-5" />
                        </div>
                      </div>
                      <h3 className="text-base font-bold text-slate-900 dark:text-white mt-3 leading-snug">{proj.title}</h3>
                      <p className="text-xs text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">{proj.desc}</p>
                    </div>
                    
                    <div className="pt-3 border-t border-slate-100 dark:border-slate-800 space-y-2">
                      <div className="flex flex-wrap gap-1">
                        {proj.tech.map((t) => (
                          <span key={t} className="px-2 py-0.5 text-[10px] font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded">
                            {t}
                          </span>
                        ))}
                      </div>
                      <p className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400">⚡ {proj.metrics}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 6. FACULTY & MENTORS */}
        {/* ========================================================= */}
        <section className="py-12 sm:py-16 bg-white dark:bg-[#0B0F19]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <span className="text-xs font-extrabold uppercase tracking-widest text-purple-600 dark:text-purple-400">Learn From Experts</span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-1">Industry Expert Mentors</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {mentors.map((m) => (
                <div key={m.name} className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-start gap-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden shrink-0 border-2 border-purple-500 relative">
                    <Image src={m.image} alt={m.name} fill className="object-cover" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">{m.name}</h3>
                    <p className="text-xs font-bold text-purple-600 dark:text-purple-400">{m.role}</p>
                    <p className="text-[11px] text-slate-500 font-semibold">{m.experience} • {m.company}</p>
                    <p className="text-xs text-slate-600 dark:text-slate-300 pt-1 leading-relaxed">{m.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 7. STUDENT REVIEWS */}
        {/* ========================================================= */}
        <section className="py-12 sm:py-16 bg-slate-50/70 dark:bg-[#0F172A]/50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="text-xs font-extrabold uppercase tracking-widest text-purple-600 dark:text-purple-400">Success Stories</span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-1 mb-8">What Our Students Say</h2>

            <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md space-y-4">
              <div className="flex justify-center text-amber-400 gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <p className="text-sm sm:text-base text-slate-700 dark:text-slate-200 font-medium italic leading-relaxed">
                &ldquo;{testimonials[activeTestimonialIndex].review}&rdquo;
              </p>
              <div>
                <div className="text-base font-bold text-slate-900 dark:text-white">{testimonials[activeTestimonialIndex].name}</div>
                <div className="text-xs font-bold text-purple-600 dark:text-purple-400">{testimonials[activeTestimonialIndex].role}</div>
                <span className="inline-block mt-1 px-3 py-0.5 rounded-full text-xs font-extrabold bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300">
                  {testimonials[activeTestimonialIndex].hike}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Banner */}
        <section className="py-14 jvm-gradient-bg text-white text-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
            <h2 className="text-2xl sm:text-4xl font-extrabold">Ready to Become an AI &amp; Machine Learning Specialist?</h2>
            <p className="text-sm sm:text-base text-purple-100">Join our upcoming batch in Pune or Live Online. 100% Placement Assistance guaranteed.</p>
            <div className="pt-2 flex flex-wrap justify-center gap-4">
              <button
                onClick={() => openEnrollModal("Bottom Banner Admission")}
                className="px-8 py-3.5 rounded-xl bg-white text-slate-900 font-extrabold text-sm shadow-xl hover:bg-slate-100 transition-colors cursor-pointer"
              >
                Apply for Next Batch Now
              </button>
            </div>
          </div>
        </section>

      </main>

      <Footer />

      {/* Lead Modal */}
      <LeadEnquiryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        courseTitle={modalTitle}
      />
    </div>
  );
}
