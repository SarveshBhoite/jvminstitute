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
  Wrench
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MagicCard from "@/components/ui/magic-card";
import LeadEnquiryModal from "@/components/LeadEnquiryModal";

// Module Curriculum Data with Tools Used
const curriculumModules = [
  {
    id: "mod-1",
    number: "01",
    title: "MySQL & Database Architecture",
    duration: "4 Weeks",
    topics: [
      "SQL Fundamentals & Relational Database Management System (RDBMS)",
      "Relational Database Concepts, Normalization & Database Design",
      "Advanced SQL Queries & Data Manipulation Techniques",
      "SQL Joins (Inner, Left, Right, Full, Cross & Self Joins)",
      "Subqueries, Common Table Expressions (CTEs) & Recursive CTEs",
      "Window (Analytical) Functions for Data Analysis",
      "Stored Procedures, User-Defined Functions (UDFs) & Views",
      "Dynamic SQL Development & Parameterized Queries",
      "Query Optimization, Indexing & SQL Performance Tuning",
      "Transactions, ACID Properties & Concurrency Control",
      "Error Handling, Exception Management & Debugging Techniques",
      "JSON, XML & Semi-Structured Data Processing in SQL",
      "ETL Development Using SQL",
      "Data Validation, Data Cleansing & Business Rule Implementation",
      "Watermark Tables for Incremental Data Processing",
      "Audit Tables, Logging Frameworks & Data Lineage",
      "Change Data Capture (CDC) Frameworks & Incremental Loading",
      "Star Schema & Snowflake Schema Design",
      "Fact Tables & Dimension Tables Modeling",
      "Slowly Changing Dimensions (SCD Type 1 & Type 2)",
      "Incremental Loading Strategies & Delta Processing",
      "SQL Coding Standards & Enterprise Best Practices",
      "SQL-Based Data Warehouse Development",
      "Real-Time SQL Scenarios & Case Studies",
      "Industry-Level Hands-on Projects & Interview Preparation"
    ],
    tools: ["PostgreSQL", "MySQL", "Advanced SQL", "DBeaver"],
    project: "Design & optimize a multi-million record e-commerce SQL database schema."
  },
  {
    id: "mod-2",
    number: "02",
    title: "Python",
    duration: "4 Weeks",
    topics: [
      "Python Fundamentals & Programming Essentials",
      "Variables, Data Types, Operators & Expressions",
      "Conditional Statements, Loops & Control Flow",
      "Functions, Lambda Functions & Scope Management",
      "Modules, Packages & Virtual Environments",
      "Object-Oriented Programming (OOP) Concepts",
      "Classes, Objects, Inheritance, Polymorphism & Encapsulation",
      "Lists, Tuples, Dictionaries, Sets & Collections Framework",
      "String Manipulation & Regular Expressions (Regex)",
      "File Handling & Data Processing",
      "Working with CSV, JSON, XML & Excel Files",
      "Exception Handling, Logging & Debugging Techniques",
      "Python Libraries for Data Engineering (NumPy, Pandas & OpenPyXL)",
      "REST API Integration & Data Extraction",
      "Data Cleaning, Validation & Transformation",
      "Web Data Collection & API-Based Data Ingestion",
      "Python Automation & Workflow Development",
      "ETL Development Using Python",
      "Reusable Framework Development & Modular Programming",
      "Database Connectivity with Python (SQL Server, MySQL & PostgreSQL)",
      "Performance Optimization & Memory Management",
      "Enterprise Coding Standards & Best Practices",
      "Unit Testing, Code Documentation & Version Control Integration",
      "Real-World Data Engineering Projects",
      "Industry-Level Case Studies & Interview Preparation"
    ],
    tools: ["Python", "Pandas", "NumPy", "PyTest", "OpenPyXL", "REST APIs"],
    project: "Build an automated Python ingestion script pulling real-time API market data."
  },
  {
    id: "mod-3",
    number: "03",
    title: "Big Data",
    duration: "6 Weeks",
    topics: [
      "Introduction to Big Data & Distributed Computing Concepts",
      "Big Data Architecture & Enterprise Data Ecosystem",
      "Hadoop Ecosystem Overview & Cluster Architecture",
      "Hadoop Distributed File System (HDFS)",
      "YARN Resource Management & Cluster Administration",
      "Apache Hive for Data Warehousing & SQL Analytics",
      "Apache Spark Fundamentals & Distributed Processing",
      "Spark Core, RDDs, DataFrames & Datasets",
      "Spark SQL for Large-Scale Data Processing",
      "PySpark Programming for Data Engineering",
      "Apache Kafka for Real-Time Data Streaming",
      "Kafka Producers, Consumers & Topic Management",
      "Batch Processing vs Real-Time Stream Processing",
      "Data Partitioning, Bucketing & File Formats (Parquet, ORC, Avro)",
      "Distributed Data Processing & Parallel Computing",
      "Data Ingestion from Databases, APIs & Cloud Storage",
      "ETL & ELT Pipeline Development Using Spark",
      "Data Transformation, Aggregation & Optimization",
      "Spark Performance Tuning & Query Optimization",
      "Partitioning, Caching & Memory Management",
      "Fault Tolerance, Checkpointing & Recovery Mechanisms",
      "Workflow Orchestration with Apache Airflow",
      "Data Lake Architecture & Modern Lakehouse Concepts",
      "Delta Lake Fundamentals & ACID Transactions",
      "Incremental Data Processing & Change Data Capture (CDC)",
      "Enterprise Logging, Monitoring & Error Handling",
      "Big Data Security, Authentication & Authorization",
      "Production Deployment & Cluster Best Practices",
      "End-to-End Big Data Pipeline Development",
      "Industry-Level Big Data Projects & Interview Preparation"
    ],
    tools: ["Hadoop", "HDFS", "YARN", "Apache Hive", "Apache Spark", "PySpark", "Kafka", "Delta Lake"],
    project: "Process 500GB+ clickstream log files on distributed clusters."
  },
  {
    id: "mod-4",
    number: "04",
    title: "PySpark",
    duration: "4 Weeks",
    topics: [
      "Introduction to Apache Spark & PySpark",
      "Apache Spark Architecture & Distributed Computing Fundamentals",
      "PySpark Environment Setup & Cluster Configuration",
      "Resilient Distributed Datasets (RDDs) Fundamentals",
      "DataFrames, Datasets & Spark SQL",
      "Data Loading from CSV, JSON, Parquet, ORC & Delta Formats",
      "Data Transformations & Actions",
      "Lazy Evaluation & Spark Execution Model",
      "Filtering, Sorting, Mapping & Complex Transformations",
      "Joins, Aggregations & Advanced Spark Operations",
      "User Defined Functions (UDFs) & Pandas UDFs",
      "Window Functions & Analytical Processing",
      "Partitioning, Repartitioning & Data Distribution Strategies",
      "Caching, Persistence & Memory Management",
      "Handling Null Values, Duplicates & Data Cleansing",
      "Large-Scale Data Processing & Distributed ETL Development",
      "Incremental Data Processing & Change Data Capture (CDC)",
      "Performance Optimization & Spark Execution Plans",
      "Catalyst Optimizer & Tungsten Execution Engine",
      "Broadcast Joins, Bucketing & Data Skew Optimization",
      "File Processing Using CSV, JSON, Parquet, ORC & Delta Lake",
      "Reading & Writing Data to Databases, Cloud Storage & Data Lakes",
      "Workflow Automation & Production ETL Pipelines",
      "Spark UI, Debugging, Monitoring & Logging",
      "Exception Handling & Fault Tolerance in Spark Applications",
      "Enterprise Coding Standards & PySpark Best Practices",
      "Real-Time Data Processing with Structured Streaming",
      "End-to-End Data Engineering Projects Using PySpark",
      "Industry-Level Case Studies & Interview Preparation"
    ],
    tools: ["PySpark", "Spark SQL", "Delta Lake", "Databricks", "Parquet"],
    project: "Build scalable PySpark distributed pipelines with broadcast joins & catalyst optimization."
  },
  {
    id: "mod-5",
    number: "05",
    title: "Airflow",
    duration: "3 Weeks",
    topics: [
      "Introduction to Apache Airflow & Workflow Orchestration",
      "Apache Airflow Architecture, Components & Environment Setup",
      "Airflow Installation, Configuration & Deployment",
      "DAG Development & Workflow Design Principles",
      "Task Dependencies, Scheduling & Execution Flow",
      "Operators (Python, Bash, SQL & Custom Operators)",
      "Sensors, Hooks & External System Integration",
      "XCom Communication & Inter-Task Data Sharing",
      "Variables, Connections & Configuration Management",
      "Workflow Scheduling, Cron Expressions & Timetables",
      "Dynamic DAGs & Parameterized Workflows",
      "Pipeline Automation & End-to-End ETL Orchestration",
      "Retry Logic, Failure Handling & Error Recovery",
      "Branching, Trigger Rules & Conditional Workflow Execution",
      "Monitoring, Logging & Airflow UI",
      "Email Notifications, Alerts & SLA Management",
      "Workflow Optimization & Parallel Task Execution",
      "Performance Tuning & Resource Management",
      "Integration with Databricks, Snowflake, Spark & Cloud Platforms",
      "Database, API & File System Integration",
      "Secrets Management & Secure Credential Handling",
      "Production Deployment, Version Control & CI/CD Integration",
      "Enterprise Workflow Orchestration & Scheduling Best Practices",
      "Real-World ETL Pipeline Development Using Airflow",
      "Industry-Level Projects & Interview Preparation"
    ],
    tools: ["Apache Airflow", "Python", "Docker", "Bash", "SQL"],
    project: "Deploy an end-to-end Airflow DAG orchestrating daily ETL pipelines with error alerts."
  },
  {
    id: "mod-6",
    number: "06",
    title: "Microsoft Azure",
    duration: "4 Weeks",
    topics: [
      "Introduction to Microsoft Azure & Cloud Computing Fundamentals",
      "Azure Resource Management (ARM), Resource Groups & Subscription Management",
      "Azure Storage Services (Blob Storage, Data Lake Storage Gen2 & File Storage)",
      "Azure Virtual Machines (VMs), Networking & Identity Management",
      "Azure SQL Database, Azure Database Services & Managed Instances",
      "Azure Data Factory (ADF) for Enterprise ETL & ELT Pipelines",
      "Data Ingestion, Data Movement & Pipeline Orchestration using ADF",
      "Azure Synapse Analytics for Data Warehousing & Big Data Analytics",
      "Azure Databricks for Distributed Data Processing & PySpark Development",
      "Azure Data Lake Storage (ADLS Gen2) Architecture & Best Practices",
      "Delta Lake, Lakehouse Architecture & Medallion Data Design",
      "Azure Event Hubs & Real-Time Data Streaming",
      "Azure Functions & Serverless Data Processing",
      "Azure Key Vault for Secrets & Credential Management",
      "Microsoft Entra ID (Azure AD), RBAC & Identity Management",
      "Azure Monitor, Log Analytics & Performance Monitoring",
      "Azure DevOps, Git Integration & CI/CD for Data Engineering",
      "Azure Machine Learning Integration for AI-Powered Data Pipelines",
      "Data Governance with Microsoft Purview",
      "Security, Encryption, Compliance & Enterprise Governance",
      "Cost Optimization, Resource Monitoring & Performance Tuning",
      "End-to-End Azure Data Engineering Pipeline Development",
      "Real-Time & Batch Data Processing on Azure",
      "Production Deployment & Enterprise Best Practices",
      "Industry-Level Azure Data Engineering Projects & Interview Preparation"
    ],
    tools: ["Azure Data Factory", "Azure Synapse", "Azure Databricks", "ADLS Gen2", "Azure Event Hubs", "Azure DevOps"],
    project: "Architect & deploy an enterprise cloud data lakehouse on Microsoft Azure."
  },
  {
    id: "mod-7",
    number: "07",
    title: "GCP",
    duration: "4 Weeks",
    topics: [
      "Introduction to Google Cloud Platform (GCP) & Cloud Computing Fundamentals",
      "GCP Project Setup, IAM, Service Accounts & Resource Management",
      "Google Cloud Storage (GCS) & Enterprise Data Lake Architecture",
      "Compute Engine, Cloud Shell & Virtual Machine Management",
      "BigQuery for Enterprise Data Warehousing & Analytics",
      "Cloud SQL, Spanner & Bigtable for Data Management",
      "Cloud Data Fusion for No-Code ETL & Data Integration",
      "Cloud Composer (Apache Airflow) for Workflow Orchestration",
      "Dataproc for Hadoop, Spark & PySpark Processing",
      "Dataflow (Apache Beam) for Batch & Stream Data Processing",
      "Pub/Sub for Real-Time Event Streaming & Messaging",
      "Datastream for Change Data Capture (CDC) & Incremental Data Replication",
      "BigLake & Lakehouse Architecture on GCP",
      "Data Ingestion, Transformation & Enterprise ETL/ELT Pipelines",
      "Delta Processing, Partitioning & Data Optimization",
      "Vertex AI Integration for AI-Powered Data Engineering",
      "Cloud Functions & Cloud Run for Serverless Data Processing",
      "Secret Manager, IAM & Enterprise Security Best Practices",
      "Cloud Monitoring, Logging & Performance Optimization",
      "Infrastructure as Code (Terraform) & CI/CD Integration",
      "Cost Optimization, Resource Management & Governance",
      "End-to-End Data Engineering Pipeline Development on GCP",
      "Batch & Real-Time Data Processing Architecture",
      "Production Deployment & Enterprise Best Practices",
      "Industry-Level GCP Data Engineering Projects & Interview Preparation",
      "Hands-on Project: End-to-End GCP Data Engineering Pipeline",
      "Hands-on Project: BigQuery Data Warehouse Implementation",
      "Hands-on Project: Dataflow Batch & Streaming ETL Project",
      "Hands-on Project: Dataproc PySpark Data Processing Project",
      "Hands-on Project: Cloud Composer Workflow Orchestration",
      "Hands-on Project: Pub/Sub Real-Time Streaming Pipeline",
      "Hands-on Project: Datastream CDC & Incremental Loading Project",
      "Hands-on Project: Vertex AI-Powered Data Engineering Solution",
      "Hands-on Project: Enterprise Data Lake on Google Cloud Storage",
      "Hands-on Project: Capstone Project: Production-Ready GCP Data Engineering Platform"
    ],
    tools: ["GCP", "BigQuery", "Dataflow", "Dataproc", "Pub/Sub", "Cloud Composer", "Datastream"],
    project: "Build an automated serverless BigQuery data warehouse pipeline on GCP."
  },
  {
    id: "mod-8",
    number: "08",
    title: "Hands-on Projects",
    duration: "4 Weeks",
    topics: [
      "End-to-End Azure Data Engineering Pipeline",
      "Azure Data Factory ETL/ELT Project",
      "Azure Databricks & PySpark Data Processing Project",
      "Azure Synapse Data Warehouse Implementation",
      "Real-Time Streaming Pipeline using Event Hubs",
      "Azure Data Lake & Delta Lake Project",
      "Enterprise Data Migration to Azure",
      "CI/CD Deployment for Azure Data Pipelines",
      "Production-Ready Lakehouse Architecture Project",
      "Capstone Project: Enterprise Azure Data Engineering Solution"
    ],
    tools: ["Azure", "ADF", "Databricks", "PySpark", "Delta Lake", "Event Hubs", "CI/CD"],
    project: "Complete production-grade capstone project ready for enterprise interview showcases."
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

// Success Testimonials (Real Placed Students)
const testimonials = [
  {
    name: "Prathamesh",
    role: "Data Engineer",
    company: "Zorba Consulting",
    hike: "13 LPA Package",
    review: "My journey with JVM Institute has been truly life-changing. The training program provided in-depth knowledge of SQL, Python, PySpark, AWS, Azure, and real-time Data Engineering projects. The mock interviews and placement support helped me secure multiple offers including Zorba Consulting (13 LPA), Datametica (12.2 LPA), and IPG Mediabrands (12 LPA).",
    avatar: "/placements/placement_3_prathamesh.png"
  },
  {
    name: "Ajinkya",
    role: "Senior Data Engineer",
    company: "LTI Mindtree",
    hike: "16 LPA Package",
    review: "I joined JVM Institute to upgrade my technical skills in PySpark, Databricks, SQL, and Cloud Data Engineering. The trainers were knowledgeable, supportive, and always encouraged us to learn beyond the classroom. The placement support and interview guidance were outstanding.",
    avatar: "/placements/placement_5_ajinkya.jpeg"
  },
  {
    name: "Rohini",
    role: "Lead Software Engineer",
    company: "Persistent",
    hike: "13.66 LPA Package",
    review: "Coming from a non-IT background, JVM Institute provided me with the right guidance, structured learning path, and practical exposure through real-time projects. The mock interviews, resume preparation, and mentorship enabled me to secure a Lead position at Persistent.",
    avatar: "/placements/placement_8_rohini.jpeg"
  },
  {
    name: "Priya",
    role: "Senior Data Engineer",
    company: "Cymetrix",
    hike: "11.54 LPA (Non-IT Transition)",
    review: "Coming from a non-IT background, I was unsure about switching careers. JVM Institute made the transition smooth with their step-by-step training approach. The live projects gave me valuable practical exposure and placement assistance helped me land at Cymetrix.",
    avatar: "/placements/placement_1_priya.png"
  },
  {
    name: "Shweta",
    role: "Software Engineer",
    company: "Persistent",
    hike: "12.5 LPA Package",
    review: "After a career break, I wanted to restart my professional journey in Data Engineering. JVM Institute gave me the confidence, live projects, and interview prep needed to land a 12.5 LPA offer at Persistent.",
    avatar: "/placements/placement_2_shweta.png"
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
                  <span className="jvm-gradient-text">Data Engineering Course in Pune!</span>
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
                  <Link
                    href="/enroll"
                    className="w-full sm:w-auto px-5 py-2.5 sm:px-6 sm:py-3 rounded-xl jvm-gradient-bg text-white font-extrabold text-xs sm:text-sm shadow-lg hover:shadow-purple-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer group"
                  >
                    <span>Enroll Now in Next Batch</span>
                    <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>

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
                    <span>250+ Hiring Partners</span>
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
                    className={`relative rounded-2xl border transition-all duration-300 overflow-hidden backdrop-blur-md ${isOpen
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
                          className={`w-9 h-9 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center font-extrabold text-xs sm:text-sm shrink-0 ${isOpen
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
                        className={`w-7 h-7 sm:w-9 sm:h-9 rounded-full flex items-center justify-center transition-all shrink-0 ${isOpen
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
                                    className="flex items-start gap-2 p-2 rounded-lg bg-slate-100/80 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80"
                                  >
                                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 dark:text-emerald-400 shrink-0 mt-0.5" />
                                    <span className="leading-snug text-[11px] sm:text-xs font-semibold text-slate-800 dark:text-slate-100">{t}</span>
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
                    Databricks, AWS, Azure, GCP &amp; Snowflake sandboxes.
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
                  className={`px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold transition-all cursor-pointer ${selectedCategory === cat
                    ? "jvm-gradient-bg text-white shadow-xs"
                    : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                    }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* SCROLLABLE TECH STACK CONTAINER SHOWING MINIMUM 6 TOOLS VISIBLE */}
            <div className="relative">
              <div className="max-h-[230px] sm:max-h-[290px] overflow-y-auto pr-1.5 scrollbar-thin scrollbar-thumb-purple-500/60 scrollbar-track-slate-100 dark:scrollbar-track-slate-800/50 rounded-2xl p-1">
                <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-4">
                  {filteredTech.map((item) => (
                    <motion.div
                      key={item.name}
                      whileHover={{ scale: 1.03 }}
                      className="p-2.5 sm:p-4 rounded-xl sm:rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xs text-center sm:text-left overflow-hidden"
                    >
                      <span className="text-[9px] sm:text-xs font-bold text-purple-600 dark:text-purple-400 block truncate">
                        {item.category}
                      </span>
                      <h3 className="text-xs sm:text-sm font-extrabold text-slate-900 dark:text-white mt-0.5 truncate">
                        {item.name}
                      </h3>
                      {item.badge && (
                        <span className="mt-1 inline-block text-[8px] sm:text-[10px] font-semibold text-slate-500 dark:text-slate-400 truncate">
                          {item.badge}
                        </span>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Scroll Helper Indicator */}
              {filteredTech.length > 6 && (
                <div className="flex items-center justify-center gap-1.5 mt-4 text-[11px] font-bold text-purple-600 dark:text-purple-400">
                  <span>Scroll box to explore all {filteredTech.length} tools &amp; technologies</span>
                  <ChevronDown className="w-3.5 h-3.5 animate-bounce" />
                </div>
              )}
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
                  Direct routing to 250+ partner MNCs in PAN India.
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
                    className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${activeTestimonialIndex === idx
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
