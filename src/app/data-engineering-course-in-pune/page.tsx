"use client";

import React, { useState } from "react";
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
  GraduationCap
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MagicCard from "@/components/ui/magic-card";

// Module Curriculum Data
const curriculumModules = [
  {
    id: "mod-1",
    number: "01",
    title: "Advanced SQL & Database Architecture for Enterprise ETL",
    duration: "4 Weeks",
    topics: [
      "Complex Joins, Subqueries & CTEs (Common Table Expressions)",
      "Window Functions (ROW_NUMBER, RANK, DENSE_RANK, NTILE, Lead/Lag)",
      "Database Indexing, Query Optimization & Execution Plan Analysis",
      "Data Modeling: Star Schema, Snowflake Schema, OLTP vs OLAP",
      "PostgreSQL & MySQL Database Administration Basics"
    ],
    project: "Design & optimize a multi-million record e-commerce SQL database schema."
  },
  {
    id: "mod-2",
    number: "02",
    title: "Python Programming for Scalable Data Engineering",
    duration: "4 Weeks",
    topics: [
      "Object-Oriented Programming (OOP) & Design Patterns in Python",
      "Data Wrangling with Pandas & NumPy for Large Datasets",
      "Building Custom REST API Connectors & Web Scraping ETLs",
      "File Format Optimization: CSV, JSON, Parquet, Avro & ORC",
      "Unit Testing (PyTest) & Code Quality Assurance"
    ],
    project: "Build an automated Python ingestion script pulling real-time API market data."
  },
  {
    id: "mod-3",
    number: "03",
    title: "Distributed Computing with PySpark & Databricks",
    duration: "6 Weeks",
    topics: [
      "Spark Architecture: Driver, Worker Nodes, DAG & RDDs",
      "PySpark DataFrames & Spark SQL Deep-Dive",
      "Performance Tuning: Partitioning, Coalesce, Repartition & Broadcast Joins",
      "Databricks Lakehouse Architecture & Delta Lake ACID Transactions",
      "Handling Data Skewness & OOM (Out Of Memory) Failures"
    ],
    project: "Process 500GB+ clickstream log files on Databricks multi-node clusters."
  },
  {
    id: "mod-4",
    number: "04",
    title: "Cloud Data Warehousing (AWS Redshift & Snowflake)",
    duration: "4 Weeks",
    topics: [
      "AWS Cloud Infrastructure for Big Data (S3, IAM, Redshift, EMR)",
      "AWS Redshift Architecture: Distribution Styles & Sort Keys",
      "Snowflake Cloud Data Platform Architecture & Virtual Warehouses",
      "Data Ingestion using AWS Glue & Snowflake Snowpipe",
      "Cost Optimization & Query Performance Tuning in Cloud Warehouses"
    ],
    project: "Migrate on-premise relational data to AWS Redshift & Snowflake warehouses."
  },
  {
    id: "mod-5",
    number: "05",
    title: "Workflow Orchestration & Streaming (Airflow & Kafka)",
    duration: "3 Weeks",
    topics: [
      "Apache Airflow Architecture: DAGs, Operators, Sensors & Schedulers",
      "Building Production Pipeline Workflows in Airflow",
      "Real-Time Event Streaming with Apache Kafka (Producers, Consumers, Topics)",
      "Structured Streaming with PySpark & Kafka Integration",
      "Monitoring, Alerting & Error Recovery in Pipelines"
    ],
    project: "Deploy an end-to-end Airflow DAG orchestrating daily ETL pipelines."
  },
  {
    id: "mod-6",
    number: "06",
    title: "Enterprise Capstone Projects & Production Deployment",
    duration: "3 Weeks",
    topics: [
      "Git & GitHub Workflow for Big Data Engineering Teams",
      "CI/CD Pipeline Automation for Spark & SQL Scripts",
      "Data Quality Checks & Monitoring Frameworks",
      "Mock Interviews & System Design Preparation",
      "Resume Crafting & 100% Placement Assistance"
    ],
    project: "Build an end-to-end Enterprise Data Lakehouse with PySpark, Kafka, AWS & Airflow."
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

  // Selected tech category filter
  const [selectedCategory, setSelectedCategory] = useState("All");

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
        {/* 1. HERO SECTION: EDITORIAL HIGH-IMPACT MARKET NARRATIVE   */}
        {/* ========================================================= */}
        <section className="relative pt-0 pb-4 sm:pb-6 lg:pb-6 bg-gradient-to-b from-[#F5F3FF] via-[#FAFAFC] to-white dark:from-[#0B0F19] dark:via-[#111827] dark:to-[#0B0F19] border-b border-purple-100/80 dark:border-slate-800/80 overflow-hidden flex items-center h-auto lg:h-[calc(100vh-80px)]">
          
          {/* Animated Ambient Glow Spheres */} 
          <motion.div 
            animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-24 -left-20 w-[500px] h-[500px] bg-purple-600/20 dark:bg-purple-600/25 rounded-full blur-[100px] pointer-events-none z-0" 
          />
          <motion.div 
            animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.2, 0.15] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-indigo-600/20 dark:bg-indigo-600/25 rounded-full blur-[100px] pointer-events-none z-0" 
          />
          
          {/* Subtly Animated Dot Matrix Texture */}
          <div className="absolute inset-0 bg-[radial-gradient(#7C3AED12_1.5px,transparent_1.5px)] [background-size:32px_32px] pointer-events-none z-0" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
              
              {/* Left Column: Animated Headline, Story & Quick Stats (7 Cols) */}
              <div className="lg:col-span-7 space-y-3.5 text-left">
                
                {/* Pill Badge */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100/90 dark:bg-purple-950/90 border border-purple-200 dark:border-purple-800 text-[#7C3AED] dark:text-[#A78BFA] text-[11px] sm:text-xs font-black tracking-widest uppercase shadow-xs"
                >
                  <Zap className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
                  <span>CAREER LANDSCAPE 2026 • DATA ENGINEERING MASTER TRACK</span>
                </motion.div>

                {/* Animated Headline */}
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="text-2xl sm:text-4xl lg:text-4xl xl:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.15]"
                >
                  <span className="jvm-gradient-text">Data Engineering Course in Pune!</span>
                </motion.h1>

                {/* Animated Narrative Paragraphs */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="space-y-2 text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed font-normal"
                >
                  <p>
                    Every modern enterprise is shifting from legacy databases to cloud-native Big Data architectures. Global tech product hubs, TCS, Infosys, Wipro, Databricks, and Accenture in Pune are actively hiring engineers who can build multi-terabyte ETL pipelines and stream real-time events using PySpark & AWS.
                  </p>
                  <p>
                    JVM Institute&apos;s Data Engineering Master Track bridges this skill gap completely. You won&apos;t just study theoretical slides — you will code live PySpark scripts, configure real Databricks clusters, query Snowflake warehouses, and schedule production Airflow DAGs with <strong className="text-slate-900 dark:text-white font-bold underline decoration-[#E01E6A] dark:decoration-pink-500">100% Placement Assistance</strong>.
                  </p>
                </motion.div>

                {/* Interactive Animated Metric Stat Cards */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="grid grid-cols-3 gap-2.5 sm:gap-3.5 pt-1"
                >
                  <motion.div 
                    whileHover={{ scale: 1.04, y: -2 }}
                    className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-purple-100 dark:border-slate-800 shadow-xs hover:shadow-md transition-all"
                  >
                    <div className="text-xl sm:text-2xl font-black text-purple-600 dark:text-purple-400">120%</div>
                    <div className="text-[10px] sm:text-[11px] font-extrabold text-slate-700 dark:text-slate-300 mt-0.5">Average Salary Hike</div>
                  </motion.div>

                  <motion.div 
                    whileHover={{ scale: 1.04, y: -2 }}
                    className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-indigo-100 dark:border-slate-800 shadow-xs hover:shadow-md transition-all"
                  >
                    <div className="text-xl sm:text-2xl font-black text-indigo-600 dark:text-indigo-400">3.5x</div>
                    <div className="text-[10px] sm:text-[11px] font-extrabold text-slate-700 dark:text-slate-300 mt-0.5">Data Job Growth</div>
                  </motion.div>

                  <motion.div 
                    whileHover={{ scale: 1.04, y: -2 }}
                    className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-pink-100 dark:border-slate-800 shadow-xs hover:shadow-md transition-all"
                  >
                    <div className="text-xl sm:text-2xl font-black text-pink-600 dark:text-pink-400">80%</div>
                    <div className="text-[10px] sm:text-[11px] font-extrabold text-slate-700 dark:text-slate-300 mt-0.5">Practical Cloud Labs</div>
                  </motion.div>
                </motion.div>

                {/* Animated CTAs Button Group */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="pt-1 flex flex-col sm:flex-row items-stretch sm:items-center gap-3"
                >
                  <button
                    onClick={() => openEnrollModal("Hero Batch Enrollment")}
                    className="w-full sm:w-auto px-6 py-3 rounded-xl jvm-gradient-bg text-white font-extrabold text-xs sm:text-sm shadow-lg hover:shadow-purple-500/25 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer group"
                  >
                    <span>Enroll Now in Next Batch</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <button
                    onClick={() => openEnrollModal("Hero Download Syllabus PDF")}
                    className="w-full sm:w-auto px-6 py-3 rounded-xl bg-white dark:bg-slate-900 border border-purple-200 dark:border-slate-800 text-slate-900 dark:text-white font-bold text-xs sm:text-sm shadow-xs hover:bg-slate-50 dark:hover:bg-slate-800 hover:border-purple-300 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Download className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                    <span>Download Complete Syllabus PDF</span>
                  </button>
                </motion.div>

                {/* Trust Badges Bar */}
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="pt-3 border-t border-purple-100 dark:border-slate-800/80 flex flex-wrap items-center gap-4 text-[11px] sm:text-xs font-bold text-slate-700 dark:text-slate-300"
                >
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                    <span>ISO 9001:2015 Certified Institute</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
                    <span>80% Practical Cloud Labs</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
                    <span>50+ Hiring MNC Partners</span>
                  </div>
                </motion.div>

              </div>

              {/* Right Column: Premium Glowing "What You Will Achieve" Card (5 Cols) */}
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="lg:col-span-5"
              >
                <div className="bg-gradient-to-b from-purple-950 via-slate-900 to-slate-950 text-white rounded-3xl p-5 sm:p-6 shadow-xl border-2 border-purple-500/30 relative overflow-hidden space-y-4">
                  
                  {/* Decorative Glow Orb */}
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="absolute -top-12 -right-12 w-40 h-40 bg-purple-500/25 rounded-full blur-2xl pointer-events-none" 
                  />

                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-purple-200 text-[10px] sm:text-xs font-bold uppercase tracking-wider backdrop-blur-md">
                    ✦ WHAT YOU WILL ACHIEVE
                  </div>

                  <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight leading-snug">
                    Transform From Beginner to Enterprise Data Architect
                  </h3>

                  <ul className="space-y-2.5 text-xs sm:text-xs font-medium text-slate-200">
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>Write production-ready PySpark ETL code on multi-node Databricks clusters.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>Design Star & Snowflake schemas for AWS Redshift & Snowflake warehouses.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>Ingest high-frequency streaming events with Apache Kafka & Spark.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>Automate daily pipeline schedules using Apache Airflow DAGs.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>Clear technical mock interviews & land high-paying roles in Pune MNCs.</span>
                    </li>
                  </ul>

                  {/* Quick Program Attributes Grid */}
                  <div className="grid grid-cols-2 gap-2 pt-2 border-t border-purple-800/60 text-[11px] font-semibold text-purple-200">
                    <div className="bg-white/5 p-2 rounded-lg border border-white/10">
                      <span className="text-slate-400 block text-[9px]">Duration</span>
                      <strong className="text-white">6 Months (24 Wks)</strong>
                    </div>
                    <div className="bg-white/5 p-2 rounded-lg border border-white/10">
                      <span className="text-slate-400 block text-[9px]">Format</span>
                      <strong className="text-white">Hybrid (Live + Lab)</strong>
                    </div>
                  </div>

                  <button
                    onClick={() => openEnrollModal("Hero Prospectus Enrollment")}
                    className="w-full py-3 rounded-xl bg-white text-slate-900 font-extrabold text-xs sm:text-sm shadow-lg hover:bg-slate-100 transition-colors flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Request Detailed Program Prospectus</span>
                    <ArrowRight className="w-4 h-4 text-purple-600" />
                  </button>

                </div>
              </motion.div>

            </div>

          </div>
        </section>


        {/* ========================================================= */}
        {/* 2. WHAT TO EXPECT FROM JVM DATA ENGINEERING SECTION       */}
        {/* ========================================================= */}
        <section className="py-12 sm:py-16 relative overflow-hidden bg-slate-200/80 dark:bg-[#0E1322] border-t border-b border-slate-300/80 dark:border-slate-800">
          
          {/* Section Background Image with Soft Transparency */}
          <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-15 dark:opacity-10">
            <Image
              src="/course.jpg"
              alt="JVM Institute Background Texture"
              fill
              className="object-cover object-center mix-blend-multiply dark:mix-blend-normal"
            />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            
            {/* Section Title */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#1E2B88] dark:text-white text-center mb-8 sm:mb-10 tracking-tight leading-tight">
              What to Expect from the JVM - Best Data Engineering Course in Pune
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left Column: Bullet List (7 Cols) */}
              <div className="lg:col-span-7 space-y-1 text-left">
                {whatToExpectPoints.map((point, index) => (
                  <div 
                    key={index}
                    className="flex items-start gap-3 py-3 border-b border-slate-300/80 dark:border-slate-800/80 last:border-b-0"
                  >
                    <Check className="w-4 h-4 text-orange-500 shrink-0 mt-1 stroke-[3]" />
                    <p className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 leading-relaxed">
                      {point}
                    </p>
                  </div>
                ))}
              </div>

              {/* Right Column: High Quality Image (5 Cols) */}
              <div className="lg:col-span-5">
                <div className="relative w-full h-[300px] sm:h-[360px] rounded-2xl overflow-hidden shadow-xl border-2 border-white dark:border-slate-800">
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
        {/* 3. COURSE HIGHLIGHTS (FLOATING FEATURE CARDS)            */}
        {/* ========================================================= */}
        <section className="py-16 sm:py-24 bg-[#FAFAFC] dark:bg-[#0B0F19] border-t border-purple-100/60 ">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest text-purple-600 dark:text-purple-400 block">
                LEARNING ADVANTAGE
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                Program <span className="jvm-gradient-text">Highlights & Benefits</span>
              </h2>
              <p className="text-slate-600 dark:text-slate-300 text-base">
                Everything you need to master Big Data Engineering and launch a high-growth IT career.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              
              <MagicCard className="rounded-none" glowFrom="#7C3AED" glowTo="#E01E6A">
                <div className="p-8 space-y-3">
                  <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">6 Months Immersive Track</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    24 weeks of structured live interactive training, weekend & weekday batch flexibility, and 24/7 LMS access.
                  </p>
                </div>
              </MagicCard>

              <MagicCard className="rounded-none" glowFrom="#4F46E5" glowTo="#7C3AED">
                <div className="p-8 space-y-3">
                  <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">Real Cloud Lab Clusters</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    Practice on live multi-node Databricks clusters, AWS Redshift, Snowflake, and PostgreSQL sandbox environments.
                  </p>
                </div>
              </MagicCard>

              <MagicCard className="rounded-none" glowFrom="#EC4899" glowTo="#E01E6A">
                <div className="p-8 space-y-3">
                  <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">4 Capstone ETL Pipelines</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    Build production-grade pipelines solving real business problems in e-commerce, finance, and healthcare analytics.
                  </p>
                </div>
              </MagicCard>

              <MagicCard className="rounded-none" glowFrom="#F59E0B" glowTo="#7C3AED">
                <div className="p-8 space-y-3">
                  <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">1:1 Architect Mentorship</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    Line-by-line code reviews on PySpark & SQL repositories by senior Data Architects with 10+ years experience.
                  </p>
                </div>
              </MagicCard>

              <MagicCard className="rounded-none" glowFrom="#10B981" glowTo="#3B82F6">
                <div className="p-8 space-y-3">
                  <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">100% Placement Support</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    ATS resume crafting, 1-on-1 technical mock interview rounds, and direct referrals to 50+ hiring MNC partners.
                  </p>
                </div>
              </MagicCard>

              <MagicCard className="rounded-none" glowFrom="#14B8A6" glowTo="#8B5CF6">
                <div className="p-8 space-y-3">
                  <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">ISO Certified Diploma</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    Earn an industry-accredited Data Engineering Certification validated by top recruiters and shareable on LinkedIn.
                  </p>
                </div>
              </MagicCard>

            </div>

          </div>
        </section>


  


        {/* ========================================================= */}
        {/* 5. COURSE CURRICULUM (EXPANDABLE ACCORDIONS & SYLLABUS PDF) */}
        {/* ========================================================= */}
        <section className="py-20 sm:py-28 bg-[#FAFAFC] dark:bg-[#070A12] border-t border-purple-100/60 dark:border-slate-800/80 relative overflow-hidden">
          {/* Animated Background Glowing Orbs & Tech Grid */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {/* Tech Grid SVG overlay with radial fade */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_70%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-80" />
            
            {/* Pulsing Light Blob Left Top */}
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                x: [0, 25, 0],
                y: [0, -25, 0],
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -top-32 -left-32 w-[550px] h-[550px] bg-gradient-to-tr from-purple-600/20 via-indigo-600/15 to-transparent rounded-full blur-3xl dark:from-purple-600/25 dark:via-indigo-900/20"
            />

            {/* Pulsing Light Blob Right Bottom */}
            <motion.div
              animate={{
                scale: [1, 1.25, 1],
                x: [0, -35, 0],
                y: [0, 35, 0],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -bottom-32 -right-32 w-[600px] h-[600px] bg-gradient-to-br from-indigo-600/20 via-purple-700/15 to-transparent rounded-full blur-3xl dark:from-indigo-600/25 dark:via-purple-900/20"
            />

            {/* Center Subtle Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
          </div>

          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            
            {/* Animated Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-3xl mx-auto mb-16 space-y-4"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-100/80 dark:bg-purple-950/80 border border-purple-200/80 dark:border-purple-800/80 text-purple-700 dark:text-purple-300 text-xs font-extrabold uppercase tracking-widest shadow-xs backdrop-blur-md">
                <Sparkles className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400 animate-pulse" />
                <span>COMPREHENSIVE SYLLABUS</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
                Course <span className="jvm-gradient-text">Curriculum Breakdown</span>
              </h2>

              <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
                Click on any module below to explore the detailed topics and hands-on capstone deliverables.
              </p>
            </motion.div>

            {/* Accordion List with Entrance Stagger & Dynamic Hover */}
            <div className="space-y-4">
              {curriculumModules.map((mod, index) => {
                const isOpen = openModule === mod.id;

                return (
                  <motion.div
                    key={mod.id}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.45, delay: index * 0.07 }}
                    whileHover={{ y: -2 }}
                    className={`relative rounded-2xl border transition-all duration-300 overflow-hidden backdrop-blur-md ${
                      isOpen
                        ? "bg-white dark:bg-slate-900/95 border-purple-500/50 dark:border-purple-500/50 shadow-xl shadow-purple-500/10 dark:shadow-purple-500/20"
                        : "bg-white/90 dark:bg-slate-900/80 border-slate-200/80 dark:border-slate-800/90 shadow-sm hover:border-purple-300 dark:hover:border-purple-800/80 hover:shadow-md"
                    }`}
                  >
                    {/* Active Module Indicator Bar */}
                    <div
                      className={`absolute top-0 left-0 bottom-0 w-1.5 transition-all duration-300 ${
                        isOpen
                          ? "bg-gradient-to-b from-purple-600 via-indigo-600 to-purple-500 opacity-100"
                          : "bg-transparent opacity-0"
                      }`}
                    />

                    <button
                      onClick={() => setOpenModule(isOpen ? null : mod.id)}
                      className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer group transition-colors"
                    >
                      <div className="flex items-center gap-4 sm:gap-5">
                        {/* Module Number Badge */}
                        <span
                          className={`w-11 h-11 rounded-xl flex items-center justify-center font-extrabold text-sm shrink-0 transition-all duration-300 ${
                            isOpen
                              ? "bg-gradient-to-br from-purple-600 to-indigo-600 text-white shadow-md shadow-purple-500/30 scale-105"
                              : "bg-purple-100 dark:bg-purple-950/80 text-purple-700 dark:text-purple-300 group-hover:bg-purple-600 group-hover:text-white group-hover:shadow-md"
                          }`}
                        >
                          {mod.number}
                        </span>
                        <div>
                          <h3 className="text-base sm:text-xl font-bold text-slate-900 dark:text-white leading-snug group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                            {mod.title}
                          </h3>
                          <div className="flex items-center gap-3 mt-1">
                            <span className="inline-flex items-center gap-1 text-xs font-semibold text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-950/60 px-2.5 py-0.5 rounded-full border border-purple-100 dark:border-purple-900/50">
                              <Clock className="w-3 h-3" />
                              {mod.duration}
                            </span>
                            <span className="text-xs text-slate-500 dark:text-slate-400 font-medium hidden sm:inline">
                              {mod.topics.length} Key Topics
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Expand / Collapse Button Circle */}
                      <div
                        className={`w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 shrink-0 ${
                          isOpen
                            ? "bg-purple-600 text-white shadow-md rotate-180"
                            : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 group-hover:bg-purple-100 dark:group-hover:bg-purple-900/50 group-hover:text-purple-600 dark:group-hover:text-purple-300"
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
                          className="px-6 pb-6 pt-2 border-t border-slate-100 dark:border-slate-800/80 space-y-4"
                        >
                          <div>
                            <span className="text-xs font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400 block mb-3">
                              Topics Covered:
                            </span>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-medium">
                              {mod.topics.map((t, idx) => (
                                <motion.li
                                  key={idx}
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ duration: 0.25, delay: idx * 0.04 }}
                                  className="flex items-start gap-2.5 p-2 rounded-lg bg-slate-50/70 dark:bg-slate-850/60 border border-slate-100 dark:border-slate-800/50 hover:border-purple-200 dark:hover:border-purple-900/50 transition-colors"
                                >
                                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                                  <span className="leading-snug">{t}</span>
                                </motion.li>
                              ))}
                            </ul>
                          </div>

                          <div className="p-4 rounded-xl bg-gradient-to-r from-purple-50 via-indigo-50/50 to-purple-50 dark:from-purple-950/60 dark:via-slate-900 dark:to-purple-950/60 border border-purple-200/70 dark:border-purple-800/60 text-xs sm:text-sm text-purple-950 dark:text-purple-200 font-semibold flex items-center gap-3 shadow-xs">
                            <div className="w-8 h-8 rounded-lg bg-purple-600 text-white flex items-center justify-center shrink-0 shadow-sm">
                              <Terminal className="w-4 h-4" />
                            </div>
                            <div>
                              <span className="text-xs font-extrabold uppercase tracking-wider text-purple-700 dark:text-purple-300 block">
                                Hands-on Module Project
                              </span>
                              <span className="text-slate-800 dark:text-slate-200 font-medium">{mod.project}</span>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>

            {/* Syllabus Download Action Banner with Glassmorphic Gradient */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-purple-950 via-slate-900 to-indigo-950 border border-purple-500/30 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl relative overflow-hidden group"
            >
              {/* Background ambient pulse inside CTA box */}
              <div className="absolute -right-16 -top-16 w-60 h-60 bg-purple-600/20 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-700" />

              <div className="relative z-10 space-y-1.5 text-center sm:text-left">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/20 border border-purple-400/30 text-purple-300 text-xs font-bold uppercase tracking-wider mb-1">
                  <FileCode className="w-3.5 h-3.5 text-purple-400" />
                  <span>24-Week Roadmap PDF</span>
                </div>
                <h4 className="text-xl sm:text-2xl font-extrabold tracking-tight">Need the Complete Detailed Syllabus?</h4>
                <p className="text-xs sm:text-sm text-purple-200/90">Download the full module breakdown, capstone specs, and weekly lab projects.</p>
              </div>

              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => openEnrollModal("Curriculum Section Syllabus Download")}
                className="px-7 py-4 rounded-xl bg-gradient-to-r from-white via-slate-100 to-white text-slate-900 font-extrabold text-sm hover:shadow-lg hover:shadow-white/10 transition-all flex items-center gap-2.5 shrink-0 cursor-pointer relative z-10 border border-white/50"
              >
                <Download className="w-4 h-4 text-purple-700 animate-bounce" />
                <span>Download Syllabus PDF</span>
              </motion.button>
            </motion.div>

          </div>
        </section>


        {/* ========================================================= */}
        {/* 6. TOOLS & TECHNOLOGIES STACK SECTION                     */}
        {/* ========================================================= */}
        <section className="py-16 sm:py-24 bg-white dark:bg-[#0B0F19] border-t border-slate-200/70 dark:border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            
            <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest text-purple-600 dark:text-purple-400 block">
                ENTERPRISE TECH ECOSYSTEM
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                Tools & Technologies <span className="jvm-gradient-text">You Will Master</span>
              </h2>
              <p className="text-slate-600 dark:text-slate-300 text-base">
                Hands-on practice on the exact frameworks used by Tier 1 Big Data product teams.
              </p>
            </div>

            {/* Category Filter Chips */}
            <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                    selectedCategory === cat
                      ? "jvm-gradient-bg text-white shadow-md"
                      : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Tech Badges Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
              {filteredTech.map((item) => (
                <motion.div
                  key={item.name}
                  whileHover={{ scale: 1.03, y: -4 }}
                  className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xs hover:shadow-xl transition-all space-y-2 relative overflow-hidden"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-purple-600 dark:text-purple-400">{item.category}</span>
                    <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-extrabold text-slate-900 dark:text-white">
                    {item.name}
                  </h3>
                </motion.div>
              ))}
            </div>

          </div>
        </section>


        {/* ========================================================= */}
        {/* 7. MEET YOUR MENTORS SECTION                             */}
        {/* ========================================================= */}
        <section className="py-16 sm:py-24 bg-[#FAFAFC] dark:bg-[#0B0F19] border-t border-purple-100/60 dark:border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest text-purple-600 dark:text-purple-400 block">
                LEARN FROM ACTIVE ARCHITECTS
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                Meet Your <span className="jvm-gradient-text">Data Engineering Mentors</span>
              </h2>
              <p className="text-slate-600 dark:text-slate-300 text-base">
                Senior architects with 10+ years of enterprise IT experience guiding you 1-on-1.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {mentors.map((m) => (
                <div key={m.name} className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-xl space-y-5">
                  <div className="flex items-center gap-4">
                    <div className="relative w-16 h-16 rounded-2xl overflow-hidden shadow-md shrink-0">
                      <Image src={m.image} alt={m.name} fill className="object-cover" />
                    </div>
                    <div>
                      <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">{m.name}</h3>
                      <div className="text-xs font-bold text-purple-600 dark:text-purple-400">{m.role}</div>
                      <div className="text-[11px] font-semibold text-slate-500 dark:text-slate-400">{m.experience}</div>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {m.bio}
                  </p>

                  <div className="p-3 rounded-xl bg-purple-50 dark:bg-purple-950/40 border border-purple-100 dark:border-purple-900/40 text-xs font-semibold text-purple-900 dark:text-purple-200">
                    <strong>Core Focus:</strong> {m.specialty}
                  </div>
                </div>



))}
            </div>

          </div>
        </section>


        {/* ========================================================= */}
        {/* 8. HANDS-ON CAPSTONE PROJECTS SHOWCASE                   */}
        {/* ========================================================= */}
        <section className="py-16 sm:py-24 bg-white dark:bg-[#0B0F19] border-t border-slate-200/70 dark:border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest text-purple-600 dark:text-purple-400 block">
                PORTFOLIO BUILDERS
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                Enterprise <span className="jvm-gradient-text">Capstone Projects</span>
              </h2>
              <p className="text-slate-600 dark:text-slate-300 text-base">
                Build real production pipelines you can demonstrate directly to hiring managers in interviews.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {capstoneProjects.map((p) => (
                <div key={p.id} className="bg-slate-50 dark:bg-slate-900 p-7 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-md hover:shadow-2xl transition-all space-y-4 flex flex-col justify-between">
                  <div className="space-y-3">
                    <span className="px-3 py-1 rounded-full text-[11px] font-extrabold bg-purple-100 dark:bg-purple-950 text-[#7C3AED] dark:text-purple-300">
                      {p.tag}
                    </span>
                    <h3 className="text-lg font-extrabold text-slate-900 dark:text-white leading-snug">
                      {p.title}
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
                      {p.desc}
                    </p>
                  </div>

                  <div className="space-y-3 pt-3 border-t border-slate-200/60 dark:border-slate-800">
                    <div className="flex flex-wrap gap-1.5">
                      {p.tech.map((t) => (
                        <span key={t} className="px-2.5 py-0.5 rounded-md text-[10px] font-bold bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700">
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
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
        {/* 9. PLACEMENT SUPPORT JOURNEY                             */}
        {/* ========================================================= */}
        <section className="py-16 sm:py-24 bg-[#FAFAFC] dark:bg-[#0B0F19] border-t border-purple-100/60 dark:border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest text-purple-600 dark:text-purple-400 block">
                CAREER DESK
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                Dedicated <span className="jvm-gradient-text">100% Placement Support Journey</span>
              </h2>
              <p className="text-slate-600 dark:text-slate-300 text-base">
                From Day 1 to your final offer letter negotiation, our career desk is with you.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              
              <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-3">
                <div className="w-10 h-10 rounded-xl bg-purple-100 dark:bg-purple-950 text-[#7C3AED] dark:text-purple-300 font-extrabold flex items-center justify-center text-sm">
                  01
                </div>
                <h3 className="text-base font-extrabold text-slate-900 dark:text-white">ATS Resume Crafting</h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  Tailor your resume with PySpark, AWS Redshift, and Databricks keywords to pass ATS filters effortlessly.
                </p>
              </div>

              <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-3">
                <div className="w-10 h-10 rounded-xl bg-indigo-100 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-300 font-extrabold flex items-center justify-center text-sm">
                  02
                </div>
                <h3 className="text-base font-extrabold text-slate-900 dark:text-white">1-on-1 Tech Mocks</h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  Simulated SQL live coding, PySpark architecture rounds, and system design interviews with active architects.
                </p>
              </div>

              <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-3">
                <div className="w-10 h-10 rounded-xl bg-pink-100 dark:bg-pink-950 text-pink-600 dark:text-pink-300 font-extrabold flex items-center justify-center text-sm">
                  03
                </div>
                <h3 className="text-base font-extrabold text-slate-900 dark:text-white">Direct Hiring Referrals</h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  Direct profile routing to 50+ partner companies in Pune, Mumbai, Bangalore, and remote US firms.
                </p>
              </div>

              <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-300 font-extrabold flex items-center justify-center text-sm">
                  04
                </div>
                <h3 className="text-base font-extrabold text-slate-900 dark:text-white">Salary Negotiation</h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  Get expert guidance to negotiate maximum compensation packages and multiple job offers.
                </p>
              </div>

            </div>

          </div>
        </section>


        {/* ========================================================= */}
        {/* 10. CERTIFICATE PREVIEW SECTION                          */}
        {/* ========================================================= */}
        <section className="py-16 sm:py-24 bg-white dark:bg-[#0B0F19] border-t border-slate-200/70 dark:border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              <div className="lg:col-span-6 space-y-5">
                <span className="text-xs font-bold uppercase tracking-widest text-purple-600 dark:text-purple-400 block">
                  RECOGNIZED CREDENTIAL
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                  Earn an Industry Accredited <span className="jvm-gradient-text">Data Engineering Certification</span>
                </h2>
                <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed">
                  Upon successfully completing your capstone projects and live labs, receive an ISO 9001:2015 certified diploma credential from JVM Institute Pune, recognized by global IT employers.
                </p>

                <ul className="space-y-3 text-sm font-semibold text-slate-700 dark:text-slate-300">
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                    <span>ISO 9001:2015 Verified Credentials</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                    <span>Shareable digital badge for LinkedIn & ATS Resumes</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                    <span>Unique verification ID code for recruiter background checks</span>
                  </li>
                </ul>
              </div>

              <div className="lg:col-span-6">
                <div className="p-8 rounded-3xl bg-gradient-to-br from-purple-900 via-slate-900 to-slate-950 text-white border-2 border-purple-500/30 shadow-2xl space-y-6 relative overflow-hidden">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center font-extrabold text-purple-300">
                        JVM
                      </div>
                      <div>
                        <div className="text-sm font-extrabold">JVM INSTITUTE PUNE</div>
                        <div className="text-[10px] text-purple-300 font-bold uppercase tracking-wider">ISO 9001:2015 Accredited</div>
                      </div>
                    </div>

                    <Award className="w-8 h-8 text-amber-400" />
                  </div>

                  <div className="py-4 border-t border-b border-purple-800/60 space-y-2">
                    <div className="text-xs text-purple-300 uppercase tracking-widest font-bold">CERTIFICATE OF EXCELLENCE</div>
                    <div className="text-xl font-extrabold text-white">Enterprise Data Engineering & PySpark Track</div>
                    <div className="text-xs text-slate-300">Awarded for mastering PySpark, AWS Redshift, Databricks & Production ETL Systems.</div>
                  </div>

                  <div className="flex items-center justify-between text-[11px] text-slate-400">
                    <span>Credential ID: JVM-DE-2026-889</span>
                    <span className="text-emerald-400 font-bold">Verified & Authentic</span>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </section>


        {/* ========================================================= */}
        {/* 11. STUDENT SUCCESS STORIES                              */}
        {/* ========================================================= */}
        <section className="py-16 sm:py-24 bg-[#FAFAFC] dark:bg-[#0B0F19] border-t border-purple-100/60 dark:border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest text-purple-600 dark:text-purple-400 block">
                REAL TRANSCRIPTIONS
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                Student <span className="jvm-gradient-text">Success Stories</span>
              </h2>
              <p className="text-slate-600 dark:text-slate-300 text-base">
                Read how our graduates transformed their careers with high-paying Data Engineering roles.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((t) => (
                <div key={t.name} className="bg-white dark:bg-slate-900 p-7 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-xl space-y-5 flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="px-3 py-1 rounded-full text-xs font-black bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300">
                        {t.hike}
                      </span>
                      <div className="flex text-amber-400">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                        ))}
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed italic">
                      &quot;{t.review}&quot;
                    </p>
                  </div>

                  <div className="flex items-center gap-3 pt-4 border-t border-slate-100 dark:border-slate-800">
                    <div className="relative w-11 h-11 rounded-full overflow-hidden shrink-0 border border-purple-200">
                      <Image src={t.avatar} alt={t.name} fill className="object-cover" />
                    </div>
                    <div>
                      <div className="text-sm font-extrabold text-slate-900 dark:text-white">{t.name}</div>
                      <div className="text-xs font-semibold text-purple-600 dark:text-purple-400">{t.role}</div>
                      <div className="text-[10px] text-slate-400">{t.company}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>


        {/* ========================================================= */}
        {/* 12. SIMPLE ADMISSION PROCESS                             */}
        {/* ========================================================= */}
        <section className="py-16 sm:py-24 bg-white dark:bg-[#0B0F19] border-t border-slate-200/70 dark:border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest text-purple-600 dark:text-purple-400 block">
                EASY STEPS TO ENROLL
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                Simple <span className="jvm-gradient-text">Admission Process</span>
              </h2>
              <p className="text-slate-600 dark:text-slate-300 text-base">
                Get onboarded in 4 easy steps and start your Data Engineering journey.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-6 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 text-center space-y-3">
                <div className="w-12 h-12 rounded-2xl jvm-gradient-bg text-white font-extrabold mx-auto flex items-center justify-center text-base shadow-md">
                  1
                </div>
                <h3 className="text-base font-extrabold text-slate-900 dark:text-white">Submit Inquiry</h3>
                <p className="text-xs text-slate-600 dark:text-slate-400">Request a call back or syllabus PDF to register your interest.</p>
              </div>

              <div className="p-6 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 text-center space-y-3">
                <div className="w-12 h-12 rounded-2xl jvm-gradient-bg text-white font-extrabold mx-auto flex items-center justify-center text-base shadow-md">
                  2
                </div>
                <h3 className="text-base font-extrabold text-slate-900 dark:text-white">Counseling Call</h3>
                <p className="text-xs text-slate-600 dark:text-slate-400">Discuss background & career goals with a senior data counselor.</p>
              </div>

              <div className="p-6 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 text-center space-y-3">
                <div className="w-12 h-12 rounded-2xl jvm-gradient-bg text-white font-extrabold mx-auto flex items-center justify-center text-base shadow-md">
                  3
                </div>
                <h3 className="text-base font-extrabold text-slate-900 dark:text-white">Reserve Seat</h3>
                <p className="text-xs text-slate-600 dark:text-slate-400">Confirm seat in the upcoming weekend or weekday live batch.</p>
              </div>

              <div className="p-6 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 text-center space-y-3">
                <div className="w-12 h-12 rounded-2xl jvm-gradient-bg text-white font-extrabold mx-auto flex items-center justify-center text-base shadow-md">
                  4
                </div>
                <h3 className="text-base font-extrabold text-slate-900 dark:text-white">LMS Onboarding</h3>
                <p className="text-xs text-slate-600 dark:text-slate-400">Gain instant access to LMS, Databricks cloud lab credentials & Slack group.</p>
              </div>
            </div>

          </div>
        </section>


        {/* ========================================================= */}
        {/* 13. HIGH-CONVERTING FINAL CALL-TO-ACTION                  */}
        {/* ========================================================= 
        <section className="py-16 sm:py-24 bg-gradient-to-r from-purple-950 via-slate-950 to-indigo-950 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl pointer-events-none" />
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
            
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white/10 text-purple-200 text-xs font-bold uppercase tracking-wider backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" /> Admissions Open For Next Batch
            </span>

            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
              Ready to Master <span className="jvm-gradient-text">Data Engineering in Pune</span>?
            </h2>

            <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              Join Pune&apos;s most trusted Big Data Engineering track. Limited seats per batch for personalized 1-on-1 mentor code reviews.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => openEnrollModal("Final CTA Batch Admission")}
                className="w-full sm:w-auto px-9 py-4 rounded-xl jvm-gradient-bg text-white font-extrabold text-base shadow-2xl hover:scale-105 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Enroll in Next Batch</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <button
                onClick={() => openEnrollModal("Final CTA Syllabus Download")}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold text-base transition-all flex items-center justify-center gap-2 cursor-pointer backdrop-blur-md"
              >
                <Download className="w-5 h-5" />
                <span>Download Syllabus PDF</span>
              </button>
            </div>

            <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-purple-200 font-semibold">
              <span>✓ 100% Placement Assistance</span>
              <span>✓ 80% Practical Cloud Labs</span>
              <span>✓ ISO Certified Certificate</span>
            </div>

          </div>
        </section> */}

      </main>

      <Footer />
    </div>
  );
}
