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
  X,
  Printer,
  ZoomIn,
  ZoomOut,
  CheckCircle2,
  Share2,
  FileCode2,
  Layers,
  Check,
  ListOrdered,
  HelpCircle,
  Award
} from "lucide-react";

// ─── Data Types & Items ──────────────────────────────────────────────────────

interface NotePointSection {
  sectionTitle: string;
  points: string[];
  codeSnippet?: string;
}

interface StudyNoteItem {
  id: string;
  title: string;
  desc: string;
  category: string;
  downloads: string;
  pages: string;
  tag: string;
  tagColor: string;
  bg: string;
  border: string;
  iconType: "file" | "code" | "db" | "chart";
  pdfTopics: string[];
  detailedNotes: NotePointSection[];
  relatedIds: string[];
}

const ALL_STUDY_NOTES: StudyNoteItem[] = [
  {
    id: "note-pyspark-qa",
    title: "PySpark Interview Q&A Bank",
    desc: "100+ most-asked PySpark interview questions with detailed answers, code snippets, and scenario walkthroughs.",
    category: "PySpark",
    downloads: "2.4k",
    pages: "48 pages",
    tag: "Free PDF",
    tagColor: "bg-blue-100 dark:bg-blue-900/60 text-blue-700 dark:text-blue-300",
    bg: "bg-blue-50 dark:bg-blue-950/40",
    border: "border-blue-200 dark:border-blue-800",
    iconType: "file",
    pdfTopics: [
      "RDD vs DataFrame vs Dataset Performance",
      "PySpark Catalyst Query Optimizer & Physical Plans",
      "Executor Memory Management & GC Overhead Tuning",
      "Broadcast Joins & Data Skewness Mitigation Strategies"
    ],
    detailedNotes: [
      {
        sectionTitle: "1. Core Architecture: RDD vs DataFrame vs Dataset",
        points: [
          "RDD (Resilient Distributed Dataset): Low-level immutable collection distributed across cluster nodes. Lacks Catalyst Optimizer optimization.",
          "DataFrame: Distributed dataset organized into named columns. Uses Catalyst Query Optimizer for logical plan optimization and projection pruning.",
          "Dataset: Provides compile-time type safety in Scala/Java. In PySpark, DataFrames are used exclusively for Python execution efficiency.",
          "Lazy Evaluation: PySpark transformations (map, filter, join) build a DAG logical execution plan and only compute when an Action (collect, show, write) is called."
        ],
        codeSnippet: `# PySpark DataFrame Transformation Example
from pyspark.sql import SparkSession
from pyspark.sql.functions import col, sum, avg

spark = SparkSession.builder.appName("JVM_DataEngineers").getOrCreate()

df = spark.read.option("header", "true").parquet("s3://jvm-lake/sales_data/")
filtered_df = df.filter(col("amount") > 500) \\
                .groupBy("region") \\
                .agg(sum("amount").alias("total_sales"), avg("amount").alias("avg_sales"))

filtered_df.show(5)`
      },
      {
        sectionTitle: "2. Executor Memory & Performance Tuning",
        points: [
          "Memory Division: Spark Executor Memory is partitioned into Storage Memory (caches/broadcasts) and Execution Memory (shuffles/joins/sorts).",
          "Data Skewness Mitigation: Uneven key distribution causes single worker bottlenecks. Resolve by salting keys (adding random integer suffixes) or using broadcast joins.",
          "AQE (Adaptive Query Execution): Enable via 'spark.sql.adaptive.enabled=true' to dynamically coalesce shuffle partitions and optimize skew joins at runtime."
        ],
        codeSnippet: `# Enabling Adaptive Query Execution & Key Salting
spark.conf.set("spark.sql.adaptive.enabled", "true")
spark.conf.set("spark.sql.adaptive.coalescePartitions.enabled", "true")

# Broadcast Join for Small Lookup Datasets (<10MB)
from pyspark.sql.functions import broadcast
joined_df = large_fact_df.join(broadcast(small_lookup_df), "customer_id")`
      },
      {
        sectionTitle: "3. Real-Time Kafka Streaming & Delta Lake Storage",
        points: [
          "Structured Streaming: PySpark streams data directly from Apache Kafka topics using '.readStream.format(\"kafka\")'.",
          "Checkpointing: Guarantees exactly-once processing semantics by storing offset pointers in S3/ADLS storage paths.",
          "Delta Lake ACID: Guarantees atomic commits and time travel capability for streaming data sinks."
        ]
      }
    ],
    relatedIds: ["note-sql-cheatsheet", "note-databricks-delta", "note-[#de-roadmap]"]
  },
  {
    id: "note-sql-cheatsheet",
    title: "SQL Cheat Sheet – Advanced Window Functions",
    desc: "RANK(), DENSE_RANK(), ROW_NUMBER(), LEAD, LAG, CTEs, subqueries, and query optimization tips for Data Engineers.",
    category: "SQL",
    downloads: "3.1k",
    pages: "12 pages",
    tag: "Free PDF",
    tagColor: "bg-emerald-100 dark:bg-emerald-900/60 text-emerald-700 dark:text-emerald-300",
    bg: "bg-emerald-50 dark:bg-emerald-950/40",
    border: "border-emerald-200 dark:border-emerald-800",
    iconType: "code",
    pdfTopics: [
      "Window Functions: DENSE_RANK vs ROW_NUMBER",
      "Common Table Expressions (CTEs) & Recursive SQL",
      "Indexing Strategies: B-Tree vs Bitmap",
      "Query Execution Plans & EXPLAIN ANALYZE"
    ],
    detailedNotes: [
      {
        sectionTitle: "1. Window Ranking Functions (ROW_NUMBER, RANK, DENSE_RANK)",
        points: [
          "ROW_NUMBER(): Assigns unique sequential integers (1, 2, 3, 4) ignoring duplicate tie values. Best for pagination and deduplication.",
          "RANK(): Assigns duplicate ranks for tied rows and skips subsequent numbers (1, 1, 3, 4). Used for leaderboard rankings.",
          "DENSE_RANK(): Assigns duplicate ranks for tied rows without skipping numbers (1, 1, 2, 3). Essential for top-N analytical queries.",
          "LEAD / LAG: Fetches subsequent or preceding row values relative to current row without performing expensive self-joins."
        ],
        codeSnippet: `-- Advanced Window Ranking Query
SELECT 
  employee_id,
  department_id,
  salary,
  ROW_NUMBER() OVER (PARTITION BY department_id ORDER BY salary DESC) as row_num,
  DENSE_RANK() OVER (PARTITION BY department_id ORDER BY salary DESC) as dense_rnk,
  LAG(salary, 1) OVER (PARTITION BY department_id ORDER BY salary DESC) as prev_salary
FROM company_employees;`
      },
      {
        sectionTitle: "2. Common Table Expressions (CTEs) & Query Optimization",
        points: [
          "CTEs (WITH clause): Improves SQL query readability and breaks down complex logic into reusable named temporary result sets.",
          "EXPLAIN ANALYZE: Inspect query execution plans to identify Full Table Scans vs Index Scans and expensive Hash Join operations.",
          "Partition Pruning: Ensure WHERE clauses filter on indexed/partitioned columns to avoid reading irrelevant table partitions."
        ]
      }
    ],
    relatedIds: ["note-pyspark-qa", "note-snowflake-guide", "note-[#de-roadmap]"]
  },
  {
    id: "note-[#de-roadmap]",
    title: "Data Engineering Master Roadmap",
    desc: "Step-by-step career roadmap from beginner to senior data engineer — tools, certifications, and portfolio projects.",
    category: "Roadmap",
    downloads: "5.7k",
    pages: "18 pages",
    tag: "Free PDF",
    tagColor: "bg-purple-100 dark:bg-purple-900/60 text-purple-700 dark:text-purple-300",
    bg: "bg-purple-50 dark:bg-purple-950/40",
    border: "border-purple-200 dark:border-purple-800",
    iconType: "db",
    pdfTopics: [
      "Phase 1: Python, Linux Shell & SQL Mastery",
      "Phase 2: Big Data Processing with PySpark & Kafka",
      "Phase 3: Cloud Warehouses: Snowflake & AWS Redshift",
      "Phase 4: Orchestration & CI/CD with Airflow & dbt"
    ],
    detailedNotes: [
      {
        sectionTitle: "1. Foundational Layer (Python, SQL & Shell Scripting)",
        points: [
          "Python Core: Master OOP, data structures, generators, file I/O, regex, and exception handling.",
          "SQL Mastery: Master window functions, CTEs, query optimization, indexing, and transactional isolation levels.",
          "Linux Shell: Learn bash scripting, cron jobs, file system commands, and ssh authentication for cloud VMs."
        ]
      },
      {
        sectionTitle: "2. Big Data & Cloud Architecture Layer",
        points: [
          "PySpark & Databricks: Distributed computation, RDDs, DataFrames, Spark SQL, Delta Lake, and performance tuning.",
          "Cloud Warehouses: Snowflake micro-partitioning, zero-copy cloning, virtual warehouses, and AWS Redshift Spectrum.",
          "Pipeline Orchestration: Apache Airflow DAGs, task dependencies, sensor operators, and dbt analytics modeling."
        ]
      }
    ],
    relatedIds: ["note-pyspark-qa", "note-python-analysis", "note-databricks-delta"]
  },
  {
    id: "note-python-analysis",
    title: "Python for Data Analysis & Pandas Handbook",
    desc: "Pandas, NumPy, and Matplotlib crash guide with hands-on exercises from raw CSVs to interactive dashboard charts.",
    category: "Python",
    downloads: "4.2k",
    pages: "32 pages",
    tag: "Free PDF",
    tagColor: "bg-pink-100 dark:bg-pink-900/60 text-pink-700 dark:text-pink-300",
    bg: "bg-pink-50 dark:bg-pink-950/40",
    border: "border-pink-200 dark:border-pink-800",
    iconType: "chart",
    pdfTopics: [
      "Pandas DataFrame Vectorization vs Iteration",
      "Data Cleaning & Handling Missing Values (NaN)",
      "Groupby Aggregations & Pivot Tables",
      "Exporting High-Performance Parquet & Feather Files"
    ],
    detailedNotes: [
      {
        sectionTitle: "1. Vectorization & Memory Efficiency",
        points: [
          "Vectorized Operations: Avoid 'for' loops or '.iterrows()'; use NumPy underlying C arrays for 100x execution speedups.",
          "Memory Reduction: Convert string columns with low cardinality into 'category' data type to save up to 80% RAM.",
          "Fast Formats: Read/Write data in Parquet or Feather column format instead of text CSVs."
        ],
        codeSnippet: `import pandas as pd
import numpy as np

# Load & Perform Vectorized Aggregations
df = pd.read_parquet("sales_data.parquet")
df["category"] = df["category"].astype("category")

summary = df.groupby(["region", "category"]).agg(
    total_sales=("amount", "sum"),
    avg_order=("amount", "mean")
).reset_index()`
      }
    ],
    relatedIds: ["note-pyspark-qa", "note-[#de-roadmap]", "note-sql-cheatsheet"]
  },
  {
    id: "note-databricks-delta",
    title: "Databricks Delta Lake Architecture Notes",
    desc: "Deep dive into ACID transactions, Time Travel, Schema Enforcement, Z-Ordering, and OPTIMIZE command in Delta Lake.",
    category: "Databricks",
    downloads: "3.8k",
    pages: "26 pages",
    tag: "Free PDF",
    tagColor: "bg-amber-100 dark:bg-amber-900/60 text-amber-700 dark:text-amber-300",
    bg: "bg-amber-50 dark:bg-amber-950/40",
    border: "border-amber-200 dark:border-amber-800",
    iconType: "db",
    pdfTopics: [
      "Delta Lake Transaction Logs (_delta_log JSON)",
      "Time Travel Queries using VERSION AS OF",
      "Z-Ordering & File Compaction Optimization",
      "Medallion Architecture (Bronze, Silver, Gold)"
    ],
    detailedNotes: [
      {
        sectionTitle: "1. Delta Transaction Log & Time Travel",
        points: [
          "ACID Compliance: Delta Lake provides atomic commits via commit log files (_delta_log/*.json).",
          "Time Travel: Query previous versions of data using 'VERSION AS OF' or 'TIMESTAMP AS OF'.",
          "Schema Enforcement: Prevents bad data records from corrupting production tables by raising schema mismatch exceptions."
        ],
        codeSnippet: `-- OPTIMIZE & Z-Order Delta Table
OPTIMIZE delta.\`s3://jvm-lake/transactions\`
ZORDER BY (customer_id, transaction_date);

-- Time Travel Query
SELECT * FROM transactions VERSION AS OF 5;`
      }
    ],
    relatedIds: ["note-pyspark-qa", "note-snowflake-guide", "note-[#de-roadmap]"]
  },
  {
    id: "note-snowflake-guide",
    title: "Snowflake Cloud Data Warehousing Guide",
    desc: "Virtual Warehouses, Zero-Copy Cloning, Dynamic Tables, Micro-Partitioning, and Cost Optimization handbook.",
    category: "Snowflake",
    downloads: "2.9k",
    pages: "30 pages",
    tag: "Free PDF",
    tagColor: "bg-cyan-100 dark:bg-cyan-900/60 text-cyan-700 dark:text-cyan-300",
    bg: "bg-cyan-50 dark:bg-cyan-950/40",
    border: "border-cyan-200 dark:border-cyan-800",
    iconType: "code",
    pdfTopics: [
      "Multi-Cluster Virtual Warehouse Auto-Scaling",
      "Zero-Copy Cloning for Dev/QA Environments",
      "Snowpipe Real-Time Ingestion",
      "Resource Monitors & Query Acceleration Service"
    ],
    detailedNotes: [
      {
        sectionTitle: "1. Separated Compute & Storage Architecture",
        points: [
          "Storage Layer: Compressed immutable micro-partitions stored in cloud object storage (S3/ADLS).",
          "Compute Layer: Independent Virtual Warehouses (XS to 6XL) that auto-scale up/down instantly with zero downtime.",
          "Zero-Copy Cloning: Create instant sandbox copies of production databases using 'CLONE' without duplicating storage cost."
        ],
        codeSnippet: `-- Zero-Copy Clone Sandbox Database
CREATE DATABASE dev_sandbox CLONE production_db;

-- Auto-Ingest Snowpipe
CREATE OR REPLACE PIPE sales_pipe AS 
COPY INTO sales_raw FROM @sales_stage;`
      }
    ],
    relatedIds: ["note-sql-cheatsheet", "note-databricks-delta", "note-pyspark-qa"]
  }
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

export default function StudyMaterialPage() {
  const [openQ, setOpenQ] = useState<string | null>(null);

  // PDF Viewer Modal State
  const [pdfModalOpen, setPdfModalOpen] = useState(false);
  const [activeNote, setActiveNote] = useState<StudyNoteItem | null>(null);
  const [toastMsg, setToastMsg] = useState<string | null>(null);
  const [zoomLevel, setZoomLevel] = useState(100);

  // Show Toast
  const showToast = (msg: string) => {
    setToastMsg(msg);
    setTimeout(() => {
      setToastMsg(null);
    }, 3500);
  };

  // Trigger Confetti
  const triggerConfetti = () => {
    if (typeof window !== "undefined") {
      import("canvas-confetti").then((mod) => {
        mod.default({ particleCount: 95, spread: 85, origin: { y: 0.55 } });
      });
    }
  };

  // Open PDF Viewer Modal
  const handleOpenPdfViewer = (note: StudyNoteItem) => {
    setActiveNote(note);
    setZoomLevel(100);
    setPdfModalOpen(true);
  };

  // Handle Download PDF
  const handleDownloadPdf = (note: StudyNoteItem) => {
    triggerConfetti();
    showToast(`Downloading "${note.title}.pdf"...`);
  };

  // Get Related Notes for Active Note
  const relatedNotes = activeNote
    ? ALL_STUDY_NOTES.filter((n) => activeNote.relatedIds.includes(n.id))
    : ALL_STUDY_NOTES.slice(1, 4);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAFC] dark:bg-[#0B0F19] transition-colors duration-300 font-sans selection:bg-pink-500 selection:text-white">
      {/* Toast Notification */}
      {toastMsg && (
        <div className="fixed bottom-6 right-6 z-[9999] bg-slate-900 dark:bg-slate-800 text-white px-5 py-3.5 rounded-2xl shadow-2xl border border-slate-700/80 flex items-center gap-3 animate-bounce">
          <Sparkles className="w-5 h-5 text-amber-400 animate-spin" />
          <span className="text-sm font-medium">{toastMsg}</span>
        </div>
      )}

      <Navbar />

      <main className="flex-grow">

        {/* ── Hero ─────────────────────────────────────────────────────────── */}
        <section className="relative overflow-hidden bg-[#FAFAFC] dark:bg-[#0B0F19] py-8 sm:py-16 md:py-24">
          <div className="ambient-glow w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-[#1E2B88] dark:bg-[#4F46E5] top-[-10%] left-[-10%] opacity-10 pointer-events-none" />
          <div className="ambient-glow w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] bg-[#E01E6A] dark:bg-[#BE185D] bottom-[-10%] right-[-5%] opacity-10 pointer-events-none" />

          <div className="max-w-[1400px] mx-auto px-3.5 sm:px-6 lg:px-8 relative z-10 text-center">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-[10px] sm:text-xs font-black text-purple-700 dark:text-purple-300 uppercase tracking-widest mb-4 sm:mb-6">
              <BookOpen className="w-3.5 h-3.5 text-[#E01E6A]" /> Student Resource Hub
            </div>

            <h1 className="text-2xl xs:text-3xl sm:text-5xl lg:text-6xl font-black font-heading text-slate-900 dark:text-white tracking-tight leading-tight mb-3 sm:mb-4">
              Study Smarter,{" "}
              <span className="jvm-gradient-text">Crack Interviews</span>{" "}
              Faster
            </h1>
            <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-lg font-medium max-w-2xl mx-auto mb-6 sm:mb-8">
              Free PDFs, premium notes, interview Q&amp;A banks, cheat sheets, and a structured learning path — everything you need to land your dream Data Engineering role.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-4">
              <a 
                href="#free-resources" 
                className="w-full sm:w-auto jvm-gradient-bg text-white px-6 sm:px-8 py-3 sm:py-3.5 rounded-full text-xs sm:text-sm font-bold shadow-xl hover:opacity-95 transition-all flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4" /> Download Free PDFs
              </a>
              <a 
                href="#qa-section" 
                className="w-full sm:w-auto bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 border border-slate-200 dark:border-slate-700 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full text-xs sm:text-sm font-bold shadow-md hover:bg-slate-50 dark:hover:bg-slate-700 transition-all flex items-center justify-center gap-2"
              >
                <Star className="w-4 h-4 text-amber-500" /> View Interview Q&amp;A
              </a>
            </div>

            {/* Quick stats */}
            <div className="mt-8 sm:mt-12 grid grid-cols-2 sm:flex items-center justify-center gap-3 sm:gap-8">
              {[
                { icon: <FileText className="w-4 h-4 sm:w-5 sm:h-5 text-purple-500" />, value: "50+", label: "PDF Notes" },
                { icon: <Download className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-500" />, value: "15k+", label: "Downloads" },
                { icon: <Video className="w-4 h-4 sm:w-5 sm:h-5 text-pink-500" />, value: "200+", label: "Interview Q&As" },
                { icon: <Trophy className="w-4 h-4 sm:w-5 sm:h-5 text-amber-500" />, value: "100%", label: "Free Basics" },
              ].map((s, i) => (
                <div key={i} className="flex items-center justify-center gap-1.5 sm:gap-2 text-slate-700 dark:text-slate-300 bg-white/60 dark:bg-slate-900/60 p-2 sm:p-0 rounded-xl border border-slate-200/50 sm:border-none">
                  {s.icon}
                  <span className="font-extrabold text-sm sm:text-lg text-slate-900 dark:text-white">{s.value}</span>
                  <span className="text-[10px] sm:text-sm font-medium text-slate-500 dark:text-slate-400">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Free Resources & PDF Reader Grid ──────────────────────────────────────── */}
        <section id="free-resources" className="py-8 sm:py-16 md:py-20 max-w-[1400px] mx-auto px-3.5 sm:px-6 lg:px-8">
          <div className="text-center mb-6 sm:mb-12">
            <span className="text-[10px] sm:text-xs font-black text-[#1E2B88] dark:text-purple-400 uppercase tracking-widest bg-blue-50 dark:bg-purple-950/60 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full border border-blue-200 dark:border-purple-800">
              100% Free Technical Notes & PDFs
            </span>
            <h2 className="text-xl sm:text-4xl font-extrabold font-heading text-slate-900 dark:text-white mt-2 sm:mt-4 mb-1 sm:mb-2">
              Free <span className="jvm-gradient-text">PDF Study Guides</span>
            </h2>
            <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm font-medium">Click any PDF card to preview notes & related study guides instantly</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {ALL_STUDY_NOTES.map((r) => (
              <div 
                key={r.id} 
                className={`group relative rounded-2xl border ${r.border} ${r.bg} p-5 sm:p-6 hover:shadow-2xl hover:border-purple-400 dark:hover:border-purple-600 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 bg-white dark:bg-slate-900/80 rounded-xl shadow-xs border border-slate-200/50 dark:border-slate-800">
                      {r.iconType === "code" ? (
                        <Code2 className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                      ) : r.iconType === "db" ? (
                        <Database className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                      ) : r.iconType === "chart" ? (
                        <BarChart3 className="w-6 h-6 text-pink-600 dark:text-pink-400" />
                      ) : (
                        <FileText className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                      )}
                    </div>
                    <span className={`text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full ${r.tagColor}`}>
                      {r.tag}
                    </span>
                  </div>

                  <h3 className="font-extrabold text-slate-900 dark:text-white text-base sm:text-lg mb-2 leading-snug group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                    {r.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4 line-clamp-3">
                    {r.desc}
                  </p>
                </div>

                <div>
                  <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 font-semibold mb-4 pt-3 border-t border-slate-200/60 dark:border-slate-800/80">
                    <span>📥 {r.downloads} Downloads</span>
                    <span>📄 {r.pages}</span>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <button 
                      onClick={() => handleOpenPdfViewer(r)}
                      className="w-full flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all shadow-xs"
                    >
                      <BookOpen className="w-3.5 h-3.5 text-purple-500" /> Preview PDF
                    </button>
                    <button 
                      onClick={() => handleDownloadPdf(r)}
                      className="w-full flex items-center justify-center gap-1.5 py-2.5 rounded-xl text-xs font-bold text-white jvm-gradient-bg hover:opacity-95 transition-all shadow-md"
                    >
                      <Download className="w-3.5 h-3.5" /> Download
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Learning Path Timeline ──────────────────────────────────────────── */}
        <section className="relative py-8 sm:py-20 md:py-28 bg-[#FAFAFC] dark:bg-[#0B0F19] border-y border-slate-200 dark:border-slate-800 overflow-hidden">
          <div className="max-w-[1450px] mx-auto px-3.5 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-6 sm:mb-14">
              <span className="text-[10px] sm:text-xs font-black text-emerald-700 dark:text-emerald-400 uppercase tracking-widest bg-emerald-50 dark:bg-emerald-950/60 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full border border-emerald-200 dark:border-emerald-800">
                Structured Step-By-Step Roadmap
              </span>
              <h2 className="text-xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-slate-900 dark:text-white mt-2 sm:mt-4 mb-1 sm:mb-3">
                Your <span className="jvm-gradient-text">Learning Path</span>
              </h2>
              <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-base font-medium max-w-xl mx-auto">
                Sequential step-by-step roadmap from beginner to placed engineer
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {learningPath.map((step, i) => (
                <div key={i} className="bg-white/95 dark:bg-slate-900/95 p-4 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-sm flex items-start gap-3">
                  <span className="px-2.5 py-1 rounded-full jvm-gradient-bg text-white font-extrabold text-xs shrink-0 mt-0.5">
                    {step.step}
                  </span>
                  <div>
                    <span className="text-[10px] font-black text-[#1E2B88] dark:text-purple-400 uppercase tracking-wider block">
                      {step.phase}
                    </span>
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white mt-0.5">{step.title}</h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 leading-snug">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Interview Q&A Accordion ───────────────────────────────────────── */}
        <section id="qa-section" className="py-8 sm:py-16 md:py-20 max-w-[1400px] mx-auto px-3.5 sm:px-6 lg:px-8">
          <div className="text-center mb-6 sm:mb-12">
            <span className="text-[10px] sm:text-xs font-black text-pink-700 dark:text-pink-400 uppercase tracking-widest bg-pink-50 dark:bg-pink-950/60 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full border border-pink-200 dark:border-pink-800">
              Interview Prep
            </span>
            <h2 className="text-xl sm:text-4xl font-extrabold font-heading text-slate-900 dark:text-white mt-2 sm:mt-4 mb-1 sm:mb-2">
              Top Interview <span className="jvm-gradient-text">Q&amp;A Bank</span>
            </h2>
            <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm font-medium">Real questions from TCS, Infosys, Wipro, Nimap, Dimakh &amp; more</p>
          </div>

          <div className="space-y-4 sm:space-y-6 max-w-4xl mx-auto">
            {qaTopics.map((topic, ti) => (
              <div key={ti} className={`rounded-2xl border ${topic.bg} border-slate-200 dark:border-slate-800 overflow-hidden`}>
                <div className="flex items-center gap-2 px-3.5 py-2.5 sm:px-5 sm:py-3.5 border-b border-slate-200 dark:border-slate-700">
                  <div className={`p-1.5 rounded-lg bg-white dark:bg-slate-900/60 ${topic.color}`}>{topic.icon}</div>
                  <span className={`text-xs sm:text-sm font-extrabold uppercase tracking-widest ${topic.color}`}>{topic.category}</span>
                </div>

                <div className="divide-y divide-slate-200 dark:divide-slate-700">
                  {topic.questions.map((qa, qi) => {
                    const key = `${ti}-${qi}`;
                    const isOpen = openQ === key;
                    return (
                      <div key={qi} className="bg-white dark:bg-slate-900/40">
                        <button
                          onClick={() => setOpenQ(isOpen ? null : key)}
                          className="w-full flex items-start justify-between gap-3 px-3.5 py-3 sm:px-5 sm:py-4 text-left hover:bg-slate-50 dark:hover:bg-slate-800/60 transition-colors"
                        >
                          <span className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white leading-snug">{qa.q}</span>
                          {isOpen
                            ? <ChevronUp className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                            : <ChevronDown className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                          }
                        </button>
                        {isOpen && (
                          <div className="px-3.5 pb-3.5 sm:px-5 sm:pb-5 pt-1">
                            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-l-2 sm:border-l-4 border-purple-400 pl-3 sm:pl-4">
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
        </section>

        {/* ── CTA Banner ────────────────────────────────────────────────────── */}
        <section className="py-8 sm:py-16 px-3.5 sm:px-4">
          <div className="max-w-4xl mx-auto">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-gradient-to-r from-[#1E2B88] via-[#7C248C] to-[#E01E6A] p-5 sm:p-14 text-center shadow-2xl">
              <div className="relative z-10">
                <Sparkles className="w-8 h-8 sm:w-10 sm:h-10 text-amber-300 mx-auto mb-3 sm:mb-4" />
                <h2 className="text-xl sm:text-4xl font-black text-white mb-2 sm:mb-3 font-heading">
                  Ready to Master Data Engineering?
                </h2>
                <p className="text-white/80 text-xs sm:text-base font-medium mb-6 sm:mb-8 max-w-xl mx-auto leading-relaxed">
                  Get access to live classes, 1-on-1 mentorship, all premium study material, and 100% placement support.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-2.5 sm:gap-4">
                  <Link href="/contact-us" className="w-full sm:w-auto bg-white text-[#1E2B88] px-6 sm:px-8 py-3 sm:py-3.5 rounded-full text-xs sm:text-sm font-black shadow-xl hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
                    <Zap className="w-4 h-4 text-amber-500" /> Enroll Now
                  </Link>
                  <Link href="/our-courses" className="w-full sm:w-auto bg-white/10 text-white border border-white/30 px-6 sm:px-8 py-3 sm:py-3.5 rounded-full text-xs sm:text-sm font-bold hover:bg-white/20 transition-all flex items-center justify-center gap-2">
                    View Courses <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />

      {/* ── Interactive PDF Reader & Detailed Notes Modal ────────────────────────────── */}
      {pdfModalOpen && activeNote && (
        <div className="fixed inset-0 z-[99999] bg-slate-950/95 backdrop-blur-2xl text-slate-100 overflow-y-auto animate-fadeIn min-h-screen w-full flex flex-col justify-between">
          
          {/* Reader Top Bar */}
          <div className="sticky top-0 z-20 bg-slate-900/90 backdrop-blur-md border-b border-slate-800 px-6 py-4 flex flex-wrap items-center justify-between gap-4">
            <button
              onClick={() => setPdfModalOpen(false)}
              className="inline-flex items-center gap-2 text-sm font-bold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 px-4 py-2 rounded-xl transition-all"
            >
              <ArrowRight className="w-4 h-4 rotate-180" /> Back to Study Materials
            </button>

            <div className="flex items-center gap-2 text-xs font-semibold text-blue-400 bg-blue-500/10 px-3.5 py-1.5 rounded-full border border-blue-500/20">
              <FileText className="w-4 h-4" /> {activeNote.title} ({activeNote.pages})
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => handleDownloadPdf(activeNote)}
                className="px-4 py-2 rounded-xl text-xs font-bold text-white jvm-gradient-bg shadow-md hover:opacity-95 transition-all flex items-center gap-1.5"
              >
                <Download className="w-3.5 h-3.5" /> Download PDF
              </button>
              <button
                onClick={() => setPdfModalOpen(false)}
                className="p-2 rounded-full text-slate-400 hover:text-white bg-slate-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Main Viewer Body */}
          <div className="flex-1 max-w-6xl w-full mx-auto p-4 sm:p-8 lg:p-10 space-y-10">
            
            {/* Realistic PDF Document Sheet */}
            <div className="bg-slate-900 rounded-3xl border border-slate-800 shadow-2xl p-6 sm:p-10 space-y-8 relative overflow-hidden">
              
              {/* Document Header Bar */}
              <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-800">
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-purple-400 font-bold block mb-1">
                    JVM INSTITUTE HANDWRITTEN & TYPED STUDY NOTES
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                    {activeNote.title}
                  </h2>
                </div>

                <div className="flex items-center gap-2 bg-slate-800 p-1.5 rounded-xl border border-slate-700 text-xs">
                  <button 
                    onClick={() => setZoomLevel(Math.max(80, zoomLevel - 10))} 
                    className="p-1.5 text-slate-300 hover:text-white rounded hover:bg-slate-700"
                  >
                    <ZoomOut className="w-4 h-4" />
                  </button>
                  <span className="px-2 font-mono text-slate-200 font-bold">{zoomLevel}%</span>
                  <button 
                    onClick={() => setZoomLevel(Math.min(150, zoomLevel + 10))} 
                    className="p-1.5 text-slate-300 hover:text-white rounded hover:bg-slate-700"
                  >
                    <ZoomIn className="w-4 h-4" />
                  </button>
                  <button 
                    onClick={() => window.print()} 
                    className="p-1.5 text-slate-300 hover:text-white rounded hover:bg-slate-700 border-l border-slate-700 ml-1 pl-2"
                  >
                    <Printer className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Document Pages Preview & Detailed Notes */}
              <div 
                className="space-y-8 transition-transform duration-200 origin-top"
                style={{ transform: `scale(${zoomLevel / 100})` }}
              >
                {/* Topic Modules Summary */}
                <div className="space-y-3">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-2">
                    <ListOrdered className="w-4 h-4 text-purple-400" /> KEY TOPICS COVERED IN THIS NOTEBOOK
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {activeNote.pdfTopics.map((topic, i) => (
                      <div key={i} className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700/60 text-xs text-slate-200 font-medium flex items-center gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>{topic}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Point-By-Point Detailed Notes Section */}
                <div className="space-y-6 pt-4 border-t border-slate-800">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-2">
                    <Award className="w-4 h-4" /> POINT-BY-POINT DETAILED STUDY NOTES & CONCEPTS
                  </h3>

                  {activeNote.detailedNotes.map((sec, idx) => (
                    <div key={idx} className="bg-slate-950/80 rounded-2xl p-5 sm:p-6 border border-slate-800 space-y-4 shadow-inner">
                      <h4 className="font-bold text-sm sm:text-base text-purple-300 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-purple-500"></span>
                        {sec.sectionTitle}
                      </h4>

                      <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                        {sec.points.map((pt, pIdx) => (
                          <li key={pIdx} className="flex items-start gap-2.5">
                            <span className="text-emerald-400 font-bold mt-0.5">•</span>
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>

                      {sec.codeSnippet && (
                        <div className="pt-2">
                          <span className="text-[10px] font-mono uppercase text-slate-400 block mb-1">Code Example:</span>
                          <div className="bg-slate-900 rounded-xl p-4 border border-slate-800 overflow-x-auto text-xs font-mono text-emerald-400 shadow-inner">
                            <pre>{sec.codeSnippet}</pre>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Download Action Footer */}
              <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-slate-400">
                  Total File Size: <span className="font-bold text-slate-200">4.2 MB</span> • Downloaded <span className="font-bold text-purple-400">{activeNote.downloads}</span> times
                </div>
                <button
                  onClick={() => handleDownloadPdf(activeNote)}
                  className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-bold text-sm text-white jvm-gradient-bg shadow-xl hover:opacity-95 transition-all flex items-center justify-center gap-2"
                >
                  <Download className="w-4 h-4" /> Download Complete PDF Handbook
                </button>
              </div>
            </div>

            {/* ── RELATED NOTES & PDFS RECOMMENDATIONS SECTION ──────────────────────── */}
            <div className="space-y-6 pt-4">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-purple-400 block mb-1">
                    RECOMMENDED FOR YOU
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    Related Study Notes & PDFs
                  </h3>
                </div>
                <span className="text-xs text-slate-400">
                  Hand-picked based on {activeNote.category}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {relatedNotes.map((rel) => (
                  <div 
                    key={rel.id} 
                    className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-4 hover:border-purple-500/50 transition-all group flex flex-col justify-between"
                  >
                    <div className="space-y-2">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded border border-blue-500/20">
                        {rel.category}
                      </span>
                      <h4 className="font-bold text-white text-base group-hover:text-purple-400 transition-colors line-clamp-2">
                        {rel.title}
                      </h4>
                      <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                        {rel.desc}
                      </p>
                    </div>

                    <div className="space-y-3 pt-3 border-t border-slate-800/80">
                      <div className="flex justify-between text-[11px] text-slate-400 font-semibold">
                        <span>📥 {rel.downloads}</span>
                        <span>📄 {rel.pages}</span>
                      </div>
                      <button
                        onClick={() => handleOpenPdfViewer(rel)}
                        className="w-full py-2.5 rounded-xl font-bold text-xs bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors flex items-center justify-center gap-1.5"
                      >
                        <BookOpen className="w-3.5 h-3.5 text-purple-400" /> Switch & Read Notes
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
