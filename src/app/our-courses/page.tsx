"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import {
  Sparkles,
  ArrowRight,
  Award,
  Users,
  Briefcase,
  GraduationCap,
  BookOpen,
  Terminal,
  Globe,
  Cpu,
  Star,
  CheckCircle2,
  Clock,
  ShieldCheck,
  ChevronRight,
  ChevronLeft,
  X,
  Send,
  PhoneCall,
  Laptop,
  Layers,
  Database,
  Cloud,
  FileCode,
  TrendingUp,
  Download,
  Building2,
  Home,
  MessageSquare
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ShinyText from "@/components/ShinyText";
import TextType from "@/components/TextType";

// Word-by-Word Reveal Heading
function WordRevealHeading({ text, highlightText }: { text: string; highlightText: string }) {
  const words = text.split(" ");
  return (
    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight flex flex-wrap justify-center gap-x-3 gap-y-1">
      {words.map((word, idx) => {
        const isHighlight = word.toLowerCase().includes(highlightText.toLowerCase());
        return (
          <motion.span
            key={idx}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.08 }}
            className={`inline-block ${isHighlight ? "jvm-gradient-text" : ""}`}
          >
            {word}
          </motion.span>
        );
      })}
    </h2>
  );
}

// 3 Professional Featured Courses Data
const coursesData = [
  {
    id: "de-pyspark",
    badge: "🔥 Flagship Program",
    badgeColor: "bg-purple-100 text-purple-700 dark:bg-purple-950/80 dark:text-purple-300 border-purple-200 dark:border-purple-800",
    title: "Data Engineering Course",
    desc: "Master SQL, Python, Linux, Hadoop, PySpark, Spark, Airflow, Databricks, GCP, Azure, AWS, ETL Pipelines, Data Warehousing, and Big Data technologies through practical implementation.",
    image: "/place1.png",
    url: "/data-engineering-course-in-pune",
    duration: "6 Months",
    mode: "Offline & Online",
    level: "Beginner to Advanced",
    projects: "4 Capstone Projects",
    placement: "100% Placement Support",
    technologies: ["SQL", "Python", "Linux", "Hadoop", "PySpark", "Spark", "Airflow", "Databricks", "GCP", "Azure", "AWS", "ETL Pipelines", "Data Warehousing"],
    highlights: [
      "Industry-Ready Data Engineering Curriculum",
      "Spark, PySpark & Airflow Hands-on",
      "AWS, Azure & GCP Cloud Training",
      "Live ETL & Big Data Projects",
      "Databricks & Data Warehousing",
      "Placement & Interview Preparation"
    ],
    entranceAnim: { x: -50, opacity: 0 }
  },
  {
    id: "de-genai",
    badge: "🤖 Next-Gen AI Track",
    badgeColor: "bg-pink-100 text-pink-700 dark:bg-pink-950/80 dark:text-pink-300 border-pink-200 dark:border-pink-800",
    title: "Data Engineering with Gen AI",
    desc: "Combine modern Data Engineering with Large Language Models, AI-powered automation, Retrieval-Augmented Generation (RAG), AI Data Pipelines, Vector Databases, Prompt Engineering, and Intelligent Analytics.",
    image: "/place2.png",
    url: "/data-engineering-with-genai-course-in-pune",
    duration: "6 Months",
    mode: "Offline & Online Mode",
    level: "All Levels Welcome",
    projects: "20+ Enterprise Projects",
    placement: "100% Placement Support",
    technologies: ["SQL", "Python", "Spark", "Databricks", "Airflow", "GCP", "Azure", "Gen AI", "OpenAI", "LangChain", "MCP", "AI Agents", "Vector Databases", "RAG"],
    highlights: [
      "Roadmap: SQL → Python → Spark → Databricks → Airflow → GCP → Azure → Gen AI",
      "Build AI-powered data pipelines, enterprise copilots & intelligent data platforms",
      "Gain hands-on experience with OpenAI, LangChain, MCP, AI Agents & Azure AI",
      "Work on 20+ enterprise-level projects covering ETL pipelines & Lakehouse architecture"
    ],
    entranceAnim: { scale: 0.95, opacity: 0 }
  },
  {
    id: "gen ai",
    badge: "✨ AI Innovation",
    badgeColor: "bg-purple-100 text-purple-700 dark:bg-purple-950/80 dark:text-purple-300 border-purple-200 dark:border-purple-800",
    title: "Gen AI",
    desc: "Build intelligent AI applications using ChatGPT, OpenAI APIs, LangChain, CrewAI, Vector Databases, AI Agents, Prompt Engineering, and Retrieval-Augmented Generation (RAG).",
    image: "/place3.jpeg",
    url: "/generative-ai-course-in-pune",
    duration: "1 Month",
    mode: "Offline & Online",
    level: "All Levels Welcome",
    projects: "GenAI Capstone Projects",
    placement: "Placement Assistance & Portfolio Support",
    technologies: ["LLMs", "Prompt Engineering", "ChatGPT", "Claude AI", "Google Gemini", "RAG", "FAISS", "ChromaDB", "LangChain", "LlamaIndex", "AI Agents", "CrewAI", "MCP", "Function Calling", "AI Automation", "Enterprise AI Applications"],
    highlights: [
      "End-to-End Gen AI Learning Path",
      "Build AI Agents with LangChain & CrewAI",
      "ChatGPT, OpenAI APIs & Prompt Engineering Hands-on",
      "RAG, Vector Databases & Enterprise AI Solutions",
      "Develop Real-World GenAI Applications & Capstone Projects",
      "Portfolio Development, Interview Preparation & Placement Support"
    ],
    entranceAnim: { x: 50, opacity: 0 }
  },
    {
    id: "basic-ai-ml",
    badge: "🌱 Beginner Friendly",
    badgeColor: "bg-emerald-100 text-emerald-700 dark:bg-emerald-950/80 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800",
    title: "Basic AI & ML",
    desc: "A beginner-friendly program covering Python Programming, Statistics, Machine Learning Fundamentals, Data Visualization, Exploratory Data Analysis, and Predictive Analytics.",
    image: "/course.jpg",
    url: "/basic-ai-ml-course-in-pune",
    duration: "1 Month",
    mode: "Offline & Online",
    level: "Beginner Level",
    projects: "Business Analytics Case Studies",
    placement: "Career Guidance & Resume Support",
    technologies: ["Python", "Statistics", "Machine Learning", "Data Visualization", "EDA", "Predictive Analytics", "Pandas", "Scikit-Learn"],
    highlights: [
      "Beginner-Friendly AI & Machine Learning Roadmap",
      "Python Programming & Data Analysis from Scratch",
      "Statistics, EDA & Data Visualization Hands-on",
      "Machine Learning Algorithms with Practical Projects",
      "Real-World Datasets & Business Case Studies",
      "Career Guidance, Resume Building & Placement Support"
    ],
    entranceAnim: { x: 50, opacity: 0 }
  },
  {
    id: "advanced-ai-ml",
    badge: "🧠 Deep Specialization",
    badgeColor: "bg-indigo-100 text-indigo-700 dark:bg-indigo-950/80 dark:text-indigo-300 border-indigo-200 dark:border-indigo-800",
    title: "Advanced AI & Machine Learning",
    desc: "Learn Deep Learning, Neural Networks, Computer Vision, Natural Language Processing (NLP), Reinforcement Learning, MLOps, Model Deployment, and AI System Design.",
    image: "/students1.jpeg",
    url: "/advanced-ai-ml-course-in-pune",
    duration: "1 Month",
    mode: "Offline & Online",
    level: "Intermediate to Advanced",
    projects: "Computer Vision & NLP Labs",
    placement: "Placement Assistance & Interview Prep",
    technologies: ["Deep Learning", "Neural Networks", "TensorFlow", "PyTorch", "Computer Vision", "NLP", "Reinforcement Learning", "MLOps", "AI System Design"],
    highlights: [
      "Comprehensive AI & Machine Learning Curriculum",
      "Deep Learning with TensorFlow & PyTorch",
      "Computer Vision & NLP Hands-on Projects",
      "MLOps, Model Deployment & AI System Design",
      "Real-World AI Applications & Capstone Projects",
      "Placement Assistance & Interview Preparation"
    ],
    entranceAnim: { x: -50, opacity: 0 }
  },
  {
    id: "claude-ai",
    badge: "☁️ Multi-Cloud Mastery",
    badgeColor: "bg-sky-100 text-sky-700 dark:bg-sky-950/80 dark:text-sky-300 border-sky-200 dark:border-sky-800",
    title: "Claude AI",
    desc: "Master AI deployment using AWS, Azure, and Google Cloud while learning cloud-native AI services, Kubernetes, Docker, scalable ML pipelines, and cloud infrastructure.",
    image: "/students2.jpeg",
    url: "/claude-ai-course-in-pune",
    duration: "1 Month",
    mode: "Offline & Online",
    level: "All Levels Welcome",
    projects: "Production Cloud ML Pipelines",
    placement: "Cloud Certification & Job Support",
    technologies: ["AWS AI", "Azure AI", "GCP Claude AI", "Docker", "Kubernetes", "Scalable ML Pipelines", "MLOps", "CI/CD"],
    highlights: [
      "Multi-Cloud AI Training (AWS, Azure & GCP)",
      "Docker, Kubernetes & Cloud Infrastructure Hands-on",
      "Build & Deploy Scalable AI/ML Applications",
      "MLOps, CI/CD & Production ML Pipelines",
      "Real-Time Claude AI Projects & Enterprise Use Cases",
      "Placement Assistance & Cloud Certification Guidance"
    ],
    entranceAnim: { scale: 0.95, opacity: 0 }
  },

];

// Learning Journey Timeline Items
const timelineMilestones = [
  {
    icon: Award,
    title: "Industry-Focused Curriculum",
    desc: "Co-designed with active enterprise data architects to align 100% with current tech stacks.",
    highlight: "Quarterly Updated"
  },
  {
    icon: Terminal,
    title: "Hands-on Capstone Projects",
    desc: "Build real production pipelines with live PySpark clusters and real enterprise datasets.",
    highlight: "80% Practical Labs"
  },
  {
    icon: Users,
    title: "Expert Enterprise Mentors",
    desc: "Learn directly from senior architects & cloud leads with 10+ years of active IT experience.",
    highlight: "Active Tech Leaders"
  },
  {
    icon: Globe,
    title: "Live Interactive Classes & Labs",
    desc: "Hybrid learning with high-definition live interactive sessions and cloud lab access.",
    highlight: "Hybrid Flexibility"
  },
  {
    icon: Cpu,
    title: "Daily 1-on-1 Doubt Desk",
    desc: "Dedicated daily technical doubt resolution desks so no student falls behind.",
    highlight: "Daily Support"
  },
  {
    icon: Briefcase,
    title: "100% Dedicated Placement Support",
    desc: "ATS resume crafting, 1-on-1 technical mock interviews, and direct referrals to 250+ hiring partners.",
    highlight: "250+ Hiring Partners"
  }
];

// Learning Experience Editorial Blocks
const experienceBlocks = [
  {
    title: "Live Interactive & Recorded Learning Sessions",
    desc: "Attending class shouldn't feel like watching a lecture. Participate in live coding sessions, ask questions in real-time, and access high-definition recordings 24/7 on our LMS.",
    image: "/students1.jpeg",
    icon: Laptop,
    tags: ["Live Webcast", "24/7 LMS Access", "HD Recordings"]
  },
  {
    title: "One-to-One Mentoring & Code Reviews",
    desc: "Receive personalized feedback on every project repository. Senior mentors review your PySpark scripts, SQL query execution plans, and data pipeline architectures line by line.",
    image: "/students2.jpeg",
    icon: Users,
    tags: ["Personalized Review", "Daily Doubt Desk", "Architect Guidance"]
  },
  {
    title: "Real Industry Projects & Enterprise Case Studies",
    desc: "Solve real business problems using multi-terabyte datasets. Implement streaming ETL, data warehousing schemas, and cloud deployment pipelines from scratch.",
    image: "/place1.png",
    icon: Layers,
    tags: ["Real E-Commerce Data", "Streaming Pipelines", "Cloud Warehouse"]
  },
  {
    title: "Mock Interviews & ATS Resume Building",
    desc: "Prepare for high-paying roles with simulated technical interviews. Practice system design, PySpark live coding, and SQL optimization with experienced interviewers.",
    image: "/place2.png",
    icon: ShieldCheck,
    tags: ["ATS Resume Crafting", "Tech Mock Rounds", "HR Salary Negotiation"]
  }
];

// Floating Technologies List
const techEcosystem = [
  { name: "Python", category: "Core", color: "from-blue-500 to-cyan-500" },
  { name: "SQL", category: "Database", color: "from-[#1E2B88] to-indigo-600" },
  { name: "PySpark", category: "Big Data", color: "from-orange-500 to-amber-600" },
  { name: "AWS Redshift", category: "Cloud", color: "from-amber-500 to-yellow-600" },
  { name: "Databricks", category: "Big Data", color: "from-red-500 to-rose-600" },
  { name: "Snowflake", category: "Cloud Data", color: "from-sky-400 to-blue-600" },
  { name: "Apache Airflow", category: "Orchestration", color: "from-teal-400 to-emerald-600" },
  { name: "Docker", category: "DevOps", color: "from-blue-600 to-indigo-700" },
  { name: "Kubernetes", category: "DevOps", color: "from-indigo-500 to-purple-600" },
  { name: "Tableau", category: "Analytics", color: "from-pink-500 to-rose-500" },
  { name: "Power BI", category: "Analytics", color: "from-yellow-500 to-amber-600" },
  { name: "Kafka", category: "Streaming", color: "from-slate-700 to-slate-900" },
  { name: "PostgreSQL", category: "Database", color: "from-blue-700 to-indigo-800" },
  { name: "Terraform", category: "DevOps", color: "from-purple-600 to-indigo-600" }
];

// Student Success Testimonials
const studentTestimonials = [
  {
    name: "Sarvesh Bhoite",
    role: "Senior Data Engineer at MNC",
    hike: "120% Salary Hike",
    course: "Data Engineering & PySpark Track",
    review: "The hands-on PySpark labs and real ETL capstone projects helped me clear technical rounds easily. Jayesh Sir's guidance was game-changing for my career.",
    avatar: "/students1.jpeg",
    company: "TCS / Fortune 500"
  },
  {
    name: "Aniket Deshmukh",
    role: "Cloud DevOps Analyst",
    hike: "95% Salary Hike",
    course: "AWS Cloud & DevOps Certification",
    review: "From zero cloud knowledge to setting up automated Kubernetes CI/CD pipelines. JVM Institute's practical focus is unparalleled.",
    avatar: "/students2.jpeg",
    company: "Cognizant"
  },
  {
    name: "Pooja Patil",
    role: "Lead Analytics Consultant",
    hike: "85% Salary Hike",
    course: "SQL, Python & Analytics Masterclass",
    review: "Advanced SQL window functions and Tableau dashboard training gave me the exact skills needed for enterprise analytics roles.",
    avatar: "/place1.png",
    company: "Infosys"
  }
];

export default function OurCoursesPage() {
  const { scrollYProgress } = useScroll();
  const heroParallaxY = useTransform(scrollYProgress, [0, 0.3], [0, -50]);

  // Modal State
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCourseTitle, setSelectedCourseTitle] = useState("Data Engineering Master Track");

  // Testimonial Carousel State
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const openCourseModal = (title: string) => {
    setSelectedCourseTitle(title);
    setModalOpen(true);
  };

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % studentTestimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + studentTestimonials.length) % studentTestimonials.length);
  };

  // Timeline Scroll Animation Reference
  const timelineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: timelineProgress } = useScroll({
    target: timelineRef,
    offset: ["start 65%", "end 75%"]
  });

  const lineHeight = useTransform(timelineProgress, [0, 1], ["0%", "100%"]);
  const lightY = useTransform(timelineProgress, [0, 1], ["0%", "98%"]);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAFC] dark:bg-[#0B0F19] transition-colors duration-300 overflow-x-hidden selection:bg-[#7C248C] selection:text-white">
      <Navbar />

      <main className="flex-grow pt-0">
        {/* ========================================================= */}
        {/* 1. HERO SECTION (FULL SECTION HEIGHT SEAMLESS IMAGE MERGE) */}
        {/* ========================================================= */}
        <section className="relative bg-gradient-to-r from-[#F5F3FF] via-[#FAFAFC] to-white dark:from-[#0E1322] dark:via-[#111827] dark:to-[#0B0F19] py-6 sm:py-10 lg:py-12 border-b border-purple-100/80 dark:border-slate-800/80 overflow-hidden flex items-center min-h-0 lg:min-h-[40vh]">

          {/* Subtle Ambient Glow on Left Side */}
          <div className="absolute top-1/2 -left-20 -translate-y-1/2 w-72 sm:w-96 h-72 sm:h-96 bg-purple-500/10 dark:bg-purple-600/15 rounded-full blur-3xl pointer-events-none z-0" />

          {/* Right Side Background Image with Responsive Fade Blend */}
          <div className="absolute right-0 top-0 bottom-0 w-full lg:w-1/2 opacity-30 lg:opacity-100 pointer-events-none z-0 overflow-hidden">
            <Image
              src="/course.jpg"
              alt="JVM Institute Background"
              fill
              className="object-cover object-right mix-blend-multiply dark:mix-blend-normal [mask-image:linear-gradient(to_bottom,transparent_0%,black_40%)] lg:[mask-image:linear-gradient(to_right,transparent_0%,black_30%)]"
              priority
            />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center relative">

              {/* Left Column: Headline & Action Buttons (7 Cols, Z-20 for natural image overlap) */}
              <div className="lg:col-span-7 space-y-4 sm:space-y-5 text-left relative z-20">

                {/* Pill Tag Badge */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-1.5 rounded-full bg-purple-100 dark:bg-purple-950/80 border border-purple-200/80 dark:border-purple-800/80 text-[#7C3AED] dark:text-[#A78BFA] text-[11px] sm:text-xs font-black tracking-widest uppercase shadow-sm"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>OUR PROGRAMS</span>
                </motion.div>

                {/* TextType GSAP Typing Headline */}
                <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight min-h-[72px] sm:min-h-[96px] lg:min-h-[110px]">
                  <TextType
                    text={[
                      "Transform Your Career With Industry-Focused Programs",
                      "Master PySpark, AWS Cloud, DevOps & Data Analytics",
                      "Accelerate Your Tech Growth With Live Mentorship"
                    ]}
                    typingSpeed={80}
                    pauseDuration={2000}
                    deletingSpeed={35}
                    showCursor={true}
                    cursorCharacter="|"
                    cursorClassName="text-purple-600 dark:text-purple-400 font-bold"
                    loop={true}
                  />
                </h1>

                {/* Paragraph */}
                <motion.p
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-slate-600 dark:text-slate-300 text-xs sm:text-base max-w-xl leading-relaxed font-normal"
                >
                  Master PySpark, AWS Cloud, Azure, GCP, and Advanced Data Analytics with 80% practical live cloud labs, enterprise capstone projects and 100% placement support in Pune.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.25 }}
                  className="pt-1 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4"
                >
                  <a
                    href="#featured-courses"
                    className="w-full sm:w-auto px-7 py-3.5 rounded-xl jvm-gradient-bg text-white font-bold text-sm shadow-xl hover:shadow-indigo-500/25 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
                  >
                    <span>Explore Courses</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>

                  <button
                    onClick={() => {
                      if (typeof window !== "undefined") {
                        window.location.href = "tel:+918446284162";
                      }
                    }}
                    className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-white dark:bg-slate-900 border border-purple-200 dark:border-slate-800 text-slate-900 dark:text-white font-bold text-sm shadow-md hover:bg-slate-50 dark:hover:bg-slate-800 hover:border-purple-300 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <PhoneCall className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                    <span>Talk to Counselor</span>
                  </button>
                </motion.div>

                {/* Trust Indicators Bar */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.35 }}
                  className="pt-4 border-t border-purple-100 dark:border-slate-800/80 grid grid-cols-3 gap-2 sm:gap-4 max-w-lg"
                >
                  <div>
                    <div className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white">10K+</div>
                    <div className="text-[10px] sm:text-[11px] font-semibold text-slate-500 dark:text-slate-400">Learners Mentored</div>
                  </div>
                  <div>
                    <div className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white">120%</div>
                    <div className="text-[10px] sm:text-[11px] font-semibold text-slate-500 dark:text-slate-400">Avg Salary Hike</div>
                  </div>
                  <div>
                    <div className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white">250+</div>
                    <div className="text-[10px] sm:text-[11px] font-semibold text-slate-500 dark:text-slate-400">Hiring Partners</div>
                  </div>
                </motion.div>

              </div>

              {/* Right Column: Floating Glass Badges (5 Cols) */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="lg:col-span-5 relative flex flex-row lg:flex-col justify-center lg:justify-between items-center lg:items-end min-h-0 lg:min-h-[320px] gap-3 sm:gap-6 z-10 pt-2 lg:pt-0"
              >
                {/* Floating Glass Badge 1 
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-md px-5 py-3 rounded-2xl border border-purple-200/80 dark:border-slate-700 shadow-xl flex items-center gap-2.5 z-30"
                >
                  <ShieldCheck className="w-5 h-5 text-emerald-500" />
                  <span className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">100% Placement Support</span>
                </motion.div>

                {/* Floating Glass Badge 2 
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-md px-5 py-3.5 rounded-2xl border border-purple-200/80 dark:border-slate-700 shadow-2xl flex items-center gap-3 z-30"
                >
                  <div className="w-10 h-10 rounded-xl bg-purple-100 dark:bg-purple-950 text-purple-600 dark:text-purple-300 flex items-center justify-center shadow-inner">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-base sm:text-lg font-black text-slate-900 dark:text-white leading-none">450+ Hours</div>
                    <div className="text-[11px] font-bold text-slate-500 dark:text-slate-400 mt-0.5">Live Practical Labs</div>
                  </div>
                </motion.div> */}

              </motion.div>

            </div>
          </div>

        </section>


        {/* ========================================================= */}
        {/* 2. FEATURED COURSES SECTION (ALTERNATING HORIZONTAL SHOWCASE) */}
        {/* ========================================================= */}
        <section id="featured-courses" className="py-10 md:py-16 relative overflow-hidden">

          {/* Ambient Background Glows */}
          <div className="ambient-glow w-[500px] h-[500px] bg-[#1E2B88] dark:bg-[#4F46E5] top-1/4 left-[-10%] opacity-15 pointer-events-none" />
          <div className="ambient-glow w-[450px] h-[450px] bg-[#E01E6A] dark:bg-[#EC4899] bottom-1/4 right-[-10%] opacity-15 pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(#80808012_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

            {/* Section Header */}
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-xs font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400"
              >
                PROVEN CAREER TRACKS
              </motion.span>

              <WordRevealHeading text="Featured Master Programs" highlightText="Master" />

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-slate-600 dark:text-slate-300 text-base"
              >
                Engineered alongside Fortune 500 hiring managers. Choose your specialization and master high-demand tech skills.
              </motion.p>
            </div>

            {/* Alternating Horizontal Individual Course Showcase (Without Card Enclosure) */}
            <div className="space-y-5 lg:space-y-10">
              {coursesData.map((course, idx) => {
                const isImageLeft = idx % 2 === 0;

                return (
                  <motion.div
                    key={course.id}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="relative group border-b border-slate-200/60 dark:border-slate-800/60 pb-16 lg:pb-24 last:border-b-0 last:pb-0"
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">

                      {/* Course Image Container (6 cols) */}
                      <div className={`lg:col-span-6 relative ${isImageLeft ? "lg:order-1" : "lg:order-2"}`}>
                        <Link href={course.url} className="block relative h-[280px] sm:h-[360px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800 cursor-pointer">
                          <Image
                            src={course.image}
                            alt={course.title}
                            fill
                            className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

                          {/* Top Badge Pill */}
                          <span className={`absolute top-4 left-4 px-3.5 py-1.5 rounded-full text-xs font-extrabold border backdrop-blur-md shadow-md ${course.badgeColor}`}>
                            {course.badge}
                          </span>

                          {/* Rating & Enrolled Overlay */}
                          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs font-semibold">

                            <span className="bg-slate-900/85 backdrop-blur-md px-3 py-1.5 rounded-xl border border-slate-700 shadow-sm">
                              {course.duration}
                            </span>
                          </div>
                        </Link>
                      </div>

                      {/* Course Information Container (6 cols) */}
                      <div className={`lg:col-span-6 space-y-5 ${isImageLeft ? "lg:order-2" : "lg:order-1"}`}>

                        <div className="space-y-2">
                          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors leading-tight">
                            <Link href={course.url}>
                              {course.title}
                            </Link>
                          </h3>

                          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                            {course.desc}
                          </p>
                        </div>

                        {/* Meta Attributes */}
                        <div className="grid grid-cols-2 gap-3 p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300 shadow-sm">
                          <div className="flex items-center gap-2">
                            <Laptop className="w-4 h-4 text-purple-600 dark:text-purple-400 flex-shrink-0" />
                            <span className="truncate">{course.mode}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Award className="w-4 h-4 text-indigo-600 dark:text-indigo-400 flex-shrink-0" />
                            <span className="truncate">{course.level}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Terminal className="w-4 h-4 text-pink-600 dark:text-pink-400 flex-shrink-0" />
                            <span className="truncate">{course.projects}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                            <span className="truncate">{course.placement}</span>
                          </div>
                        </div>

                        {/* Key Highlights List */}
                        <div>
                          <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400 dark:text-slate-500 block mb-2">
                            Key Program Highlights
                          </span>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {course.highlights.map((item) => (
                              <div key={item} className="flex items-center gap-2 text-xs font-bold text-slate-800 dark:text-slate-200">
                                <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                                <span>{item}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Tech Skill Chips */}
                        <div>
                          <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400 dark:text-slate-500 block mb-2">
                            Technologies Covered
                          </span>
                          <div className="flex flex-wrap gap-1.5">
                            {course.technologies.map((tech) => (
                              <span
                                key={tech}
                                className="px-3 py-1 rounded-lg text-xs font-semibold bg-purple-50 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 border border-purple-200/50 dark:border-purple-800/50"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="pt-4 flex flex-wrap items-center gap-4">
                          <Link
                            href={course.url}
                            className="px-6 py-3.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-200 text-xs font-bold hover:bg-slate-200 dark:hover:bg-slate-700 text-center transition-colors"
                          >
                            View Details
                          </Link>

                          <button
                            onClick={() => openCourseModal(course.title)}
                            className="px-7 py-3.5 rounded-xl jvm-gradient-bg text-white text-xs font-bold shadow-md hover:shadow-purple-500/25 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer"
                          >
                            <span>Apply Now</span>
                            <ArrowRight className="w-4 h-4" />
                          </button>
                        </div>

                      </div>

                    </div>
                  </motion.div>
                );
              })}
            </div>

          </div>
        </section>


        {/* ========================================================= */}
        {/* 3. WHY CHOOSE OUR COURSES (INTERACTIVE HOVER REVEAL CARDS) */}
        {/* ========================================================= */}
        <section className="py-20 md:py-28 relative overflow-hidden bg-slate-50/70 dark:bg-[#0B0F19]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

            {/* Header */}
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-xs font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400"
              >
                THE LEARNING ADVANTAGE
              </motion.span>

              <WordRevealHeading text="Why Choose Our Courses ?" highlightText="Courses" />

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-slate-600 dark:text-slate-300 text-base"
              >
                Hover over each feature card below to reveal the in-depth details of JVM Institute's learning ecosystem.
              </motion.p>
            </div>

            {/* 6 Interactive Hover Reveal Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {timelineMilestones.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -8 }}
                    className="bg-white dark:bg-slate-900/90 p-7 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-xl hover:shadow-2xl hover:border-purple-500/80 dark:hover:border-purple-400/80 transition-all duration-300 group relative overflow-hidden flex flex-col justify-between h-[300px]"
                  >
                    {/* Background Shimmer Accent */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl pointer-events-none group-hover:scale-150 transition-transform duration-500" />

                    <div>
                      {/* Top Row: Icon + Badge */}
                      <div className="flex items-center justify-between gap-4 mb-5">
                        <motion.div
                          whileHover={{ rotate: 12, scale: 1.1 }}
                          className="w-14 h-14 rounded-2xl bg-purple-100 dark:bg-purple-950/80 text-purple-600 dark:text-purple-300 flex items-center justify-center shadow-md flex-shrink-0"
                        >
                          <Icon className="w-7 h-7" />
                        </motion.div>

                        <span className="px-3 py-1 rounded-full text-[11px] font-extrabold bg-purple-50 dark:bg-purple-950/60 text-purple-600 dark:text-purple-300 border border-purple-200/50 dark:border-purple-800/50 shadow-sm">
                          {item.highlight}
                        </span>
                      </div>

                      {/* Key Name / Title */}
                      <h3 className="text-xl font-extrabold text-slate-900 dark:text-white mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                        {item.title}
                      </h3>

                      {/* Default Short Overview */}
                      <p className="text-xs text-slate-500 dark:text-slate-400 font-medium group-hover:hidden transition-all">
                        Hover card to reveal detailed breakdown...
                      </p>
                    </div>

                    {/* Hover Reveal Details Container */}
                    <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                      <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-normal opacity-90 group-hover:opacity-100 transition-opacity">
                        {item.desc}
                      </p>

                      <div className="mt-3 flex items-center text-xs font-bold text-purple-600 dark:text-purple-400 group-hover:translate-x-1 transition-transform">
                        <span>Explore Standard</span>
                        <ChevronRight className="w-4 h-4 ml-1" />
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

          </div>
        </section>





        {/* ========================================================= */}
        {/* 5. TECHNOLOGIES COVERED (5 FULL-WIDTH ROTATING OPPOSITE COLUMNS) */}
        {/* ========================================================= */}
        <section className="py-20 md:py-28 relative overflow-hidden bg-[#FAFAFC] dark:bg-[#0B0F19] border-t border-b border-purple-100/60 dark:border-slate-800/80">

          {/* Background Ambient Glows & Dot Texture */}
          <div className="absolute inset-0 bg-[radial-gradient(#7C3AED18_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
          <div className="ambient-glow w-[500px] h-[500px] bg-purple-500/15 dark:bg-purple-600/15 top-1/4 left-[-5%] pointer-events-none" />
          <div className="ambient-glow w-[500px] h-[500px] bg-indigo-500/15 dark:bg-indigo-600/15 bottom-1/4 right-[-5%] pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

            {/* Header */}
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-xs font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400"
              >
                ENTERPRISE TECH STACK
              </motion.span>

              <WordRevealHeading text="Technologies You Will Master" highlightText="Master" />

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-slate-600 dark:text-slate-300 text-base"
              >
                Gain hands-on expertise in the exact tools and frameworks demanded by top IT product and data companies.
              </motion.p>
            </div>

            {/* 5 Full-Width Vertical Columns Rotating in Opposite Directions */}
            <div className="relative max-w-5xl mx-auto">

              {/* Floating Side Highlight Chips */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -left-2 sm:left-4 z-30 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md px-4 py-2 rounded-2xl border border-purple-200 dark:border-slate-800 shadow-xl text-xs font-bold text-slate-900 dark:text-white hidden md:flex items-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                <span>15+ Enterprise Frameworks</span>
              </motion.div>

              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-6 -right-2 sm:right-4 z-30 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md px-4 py-2 rounded-2xl border border-purple-200 dark:border-slate-800 shadow-xl text-xs font-bold text-slate-900 dark:text-white hidden md:flex items-center gap-2"
              >
                <ShieldCheck className="w-4 h-4 text-emerald-500" />
                <span>100% Practical Live Cloud Labs</span>
              </motion.div>

              {/* Marquee Container */}
              <div className="grid grid-cols-3 sm:grid-cols-5 gap-4 sm:gap-6 h-[480px] overflow-hidden relative rounded-3xl p-3 bg-white/60 dark:bg-slate-900/40 backdrop-blur-sm border border-slate-200/80 dark:border-slate-800 shadow-2xl">

                {/* Fade Overlays at Top & Bottom */}
                <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-[#FAFAFC] dark:from-[#0B0F19] via-slate-100/80 dark:via-slate-900/80 to-transparent z-20 pointer-events-none" />
                <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#FAFAFC] dark:from-[#0B0F19] via-slate-100/80 dark:via-slate-900/80 to-transparent z-20 pointer-events-none" />

                {/* Column 1 (Upwards) */}
                <div className="relative overflow-hidden h-full flex justify-center">
                  <motion.div
                    animate={{ y: ["0%", "-50%"] }}
                    transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
                    className="space-y-5 flex flex-col items-center"
                  >
                    {[
                      { name: "Python", src: "/icon/python.png" },
                      { name: "SQL", src: "/icon/sql.png" },
                      { name: "AWS", src: "/icon/aws.png" },
                      { name: "Azure", src: "/icon/azure.png" },
                      { name: "MySQL", src: "/icon/mysql.png" },
                      { name: "Claude AI", src: "/icon/claude-colour.png" },
                      { name: "Data Engineering", src: "/icon/data-engineering.png" },
                      { name: "Oracle Database", src: "/logo/oracle.jpg" },
                      { name: "PostgreSQL", src: "/logo/PostgreSQL.jpg" },
                      { name: "Microsoft SQL Server", src: "/logo/Microsoft SQL Server.jpg" },
                    ].concat([
                      { name: "Python", src: "/icon/python.png" },
                      { name: "SQL", src: "/icon/sql.png" },
                      { name: "AWS", src: "/icon/aws.png" },
                      { name: "Azure", src: "/icon/azure.png" },
                      { name: "MySQL", src: "/icon/mysql.png" },
                      { name: "Claude AI", src: "/icon/claude-colour.png" },
                      { name: "Data Engineering", src: "/icon/data-engineering.png" },
                      { name: "Oracle Database", src: "/logo/oracle.jpg" },
                      { name: "PostgreSQL", src: "/logo/PostgreSQL.jpg" },
                      { name: "Microsoft SQL Server", src: "/logo/Microsoft SQL Server.jpg" },
                    ]).map((tech, i) => (
                      <motion.div
                        key={i}
                        whileHover={{ scale: 1.18, rotate: 6 }}
                        className="w-20 h-20 sm:w-24 sm:h-24 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-lg hover:shadow-2xl hover:border-purple-500/80 hover:ring-4 hover:ring-purple-500/20 flex flex-col items-center justify-center p-3 transition-all cursor-pointer group relative"
                        title={tech.name}
                      >
                        <Image
                          src={tech.src}
                          alt={tech.name}
                          width={56}
                          height={56}
                          className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300 rounded-lg"
                        />
                        <span className="opacity-0 group-hover:opacity-100 transition-opacity absolute -bottom-8 bg-slate-900 text-white dark:bg-white dark:text-slate-900 text-[10px] font-bold px-2 py-0.5 rounded shadow-lg whitespace-nowrap z-30 pointer-events-none">
                          {tech.name}
                        </span>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>

                {/* Column 2 (OPPOSITE Downwards) */}
                <div className="relative overflow-hidden h-full flex justify-center">
                  <motion.div
                    animate={{ y: ["-50%", "0%"] }}
                    transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
                    className="space-y-5 flex flex-col items-center"
                  >
                    {[
                      { name: "NumPy", src: "/logo/NumPy.jpg" },
                      { name: "Pandas", src: "/logo/Pandas.jpg" },
                      { name: "Matplotlib", src: "/logo/Matplotlib.jpg" },
                      { name: "Seaborn", src: "/logo/Seaborn.jpg" },
                      { name: "MySQL", src: "/icon/mysql.png" },
                      { name: "Azure", src: "/icon/azure.png" },
                      { name: "Python", src: "/icon/python.png" },
                      { name: "AWS", src: "/icon/aws.png" },
                      { name: "SQL", src: "/icon/sql.png" },
                      { name: "Data Engineering", src: "/icon/data-engineering.png" },
                    ].concat([
                      { name: "NumPy", src: "/logo/NumPy.jpg" },
                      { name: "Pandas", src: "/logo/Pandas.jpg" },
                      { name: "Matplotlib", src: "/logo/Matplotlib.jpg" },
                      { name: "Seaborn", src: "/logo/Seaborn.jpg" },
                      { name: "MySQL", src: "/icon/mysql.png" },
                      { name: "Azure", src: "/icon/azure.png" },
                      { name: "Python", src: "/icon/python.png" },
                      { name: "AWS", src: "/icon/aws.png" },
                      { name: "SQL", src: "/icon/sql.png" },
                      { name: "Data Engineering", src: "/icon/data-engineering.png" },
                    ]).map((tech, i) => (
                      <motion.div
                        key={i}
                        whileHover={{ scale: 1.18, rotate: -6 }}
                        className="w-20 h-20 sm:w-24 sm:h-24 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-lg hover:shadow-2xl hover:border-purple-500/80 hover:ring-4 hover:ring-purple-500/20 flex flex-col items-center justify-center p-3 transition-all cursor-pointer group relative"
                        title={tech.name}
                      >
                        <Image
                          src={tech.src}
                          alt={tech.name}
                          width={56}
                          height={56}
                          className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300 rounded-lg"
                        />
                        <span className="opacity-0 group-hover:opacity-100 transition-opacity absolute -bottom-8 bg-slate-900 text-white dark:bg-white dark:text-slate-900 text-[10px] font-bold px-2 py-0.5 rounded shadow-lg whitespace-nowrap z-30 pointer-events-none">
                          {tech.name}
                        </span>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>

                {/* Column 3 (Upwards) */}
                <div className="relative overflow-hidden h-full flex justify-center">
                  <motion.div
                    animate={{ y: ["0%", "-50%"] }}
                    transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                    className="space-y-5 flex flex-col items-center"
                  >
                    {[
                      { name: "Apache Hadoop", src: "/logo/Apache Hadoop.jpg" },
                      { name: "Apache Spark", src: "/logo/Apache Spark.jpg" },
                      { name: "Apache Airflow", src: "/logo/Apache Airflow.jpg" },
                      { name: "Google Cloud Platform", src: "/logo/Google Cloud Platform.jpg" },
                      { name: "Cloud Storage", src: "/logo/Cloud Storage.jpg" },
                      { name: "SQL", src: "/icon/sql.png" },
                      { name: "Python", src: "/icon/python.png" },
                      { name: "MySQL", src: "/icon/mysql.png" },
                      { name: "Claude AI", src: "/icon/claude-colour.png" },
                      { name: "AWS", src: "/icon/aws.png" },
                    ].concat([
                      { name: "Apache Hadoop", src: "/logo/Apache Hadoop.jpg" },
                      { name: "Apache Spark", src: "/logo/Apache Spark.jpg" },
                      { name: "Apache Airflow", src: "/logo/Apache Airflow.jpg" },
                      { name: "Google Cloud Platform", src: "/logo/Google Cloud Platform.jpg" },
                      { name: "Cloud Storage", src: "/logo/Cloud Storage.jpg" },
                      { name: "SQL", src: "/icon/sql.png" },
                      { name: "Python", src: "/icon/python.png" },
                      { name: "MySQL", src: "/icon/mysql.png" },
                      { name: "Claude AI", src: "/icon/claude-colour.png" },
                      { name: "AWS", src: "/icon/aws.png" },
                    ]).map((tech, i) => (
                      <motion.div
                        key={i}
                        whileHover={{ scale: 1.18, rotate: 6 }}
                        className="w-20 h-20 sm:w-24 sm:h-24 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-lg hover:shadow-2xl hover:border-purple-500/80 hover:ring-4 hover:ring-purple-500/20 flex flex-col items-center justify-center p-3 transition-all cursor-pointer group relative"
                        title={tech.name}
                      >
                        <Image
                          src={tech.src}
                          alt={tech.name}
                          width={56}
                          height={56}
                          className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300 rounded-lg"
                        />
                        <span className="opacity-0 group-hover:opacity-100 transition-opacity absolute -bottom-8 bg-slate-900 text-white dark:bg-white dark:text-slate-900 text-[10px] font-bold px-2 py-0.5 rounded shadow-lg whitespace-nowrap z-30 pointer-events-none">
                          {tech.name}
                        </span>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>

                {/* Column 4 (OPPOSITE Downwards) */}
                <div className="relative overflow-hidden h-full hidden sm:flex justify-center">
                  <motion.div
                    animate={{ y: ["-50%", "0%"] }}
                    transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                    className="space-y-5 flex flex-col items-center"
                  >
                    {[
                      { name: "Scikit-learn", src: "/logo/Scikit-learn.jpg" },
                      { name: "OpenCV", src: "/logo/OpenCV.jpg" },
                      { name: "ChatGPT", src: "/logo/ChatGPT.jpg" },
                      { name: "Claude AI", src: "/logo/claude-color.png" },
                      { name: "Google Gemini", src: "/logo/Google Gemini.jpg" },
                      { name: "AWS", src: "/icon/aws.png" },
                      { name: "Data Engineering", src: "/icon/data-engineering.png" },
                      { name: "Azure", src: "/icon/azure.png" },
                      { name: "Python", src: "/icon/python.png" },
                      { name: "SQL", src: "/icon/sql.png" },
                    ].concat([
                      { name: "Scikit-learn", src: "/logo/Scikit-learn.jpg" },
                      { name: "OpenCV", src: "/logo/OpenCV.jpg" },
                      { name: "ChatGPT", src: "/logo/ChatGPT.jpg" },
                      { name: "Claude AI", src: "/logo/claude-color.png" },
                      { name: "Google Gemini", src: "/logo/Google Gemini.jpg" },
                      { name: "AWS", src: "/icon/aws.png" },
                      { name: "Data Engineering", src: "/icon/data-engineering.png" },
                      { name: "Azure", src: "/icon/azure.png" },
                      { name: "Python", src: "/icon/python.png" },
                      { name: "SQL", src: "/icon/sql.png" },
                    ]).map((tech, i) => (
                      <motion.div
                        key={i}
                        whileHover={{ scale: 1.18, rotate: -6 }}
                        className="w-20 h-20 sm:w-24 sm:h-24 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-lg hover:shadow-2xl hover:border-purple-500/80 hover:ring-4 hover:ring-purple-500/20 flex flex-col items-center justify-center p-3 transition-all cursor-pointer group relative"
                        title={tech.name}
                      >
                        <Image
                          src={tech.src}
                          alt={tech.name}
                          width={56}
                          height={56}
                          className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300 rounded-lg"
                        />
                        <span className="opacity-0 group-hover:opacity-100 transition-opacity absolute -bottom-8 bg-slate-900 text-white dark:bg-white dark:text-slate-900 text-[10px] font-bold px-2 py-0.5 rounded shadow-lg whitespace-nowrap z-30 pointer-events-none">
                          {tech.name}
                        </span>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>

                {/* Column 5 (Upwards) */}
                <div className="relative overflow-hidden h-full hidden sm:flex justify-center">
                  <motion.div
                    animate={{ y: ["0%", "-50%"] }}
                    transition={{ repeat: Infinity, duration: 16, ease: "linear" }}
                    className="space-y-5 flex flex-col items-center"
                  >
                    {[
                      { name: "Git", src: "/logo/Git.jpg" },
                      { name: "Docker", src: "/logo/Docker.jpg" },
                      { name: "Kubernetes", src: "/logo/Kubernetes.jpg" },
                      { name: "Power BI", src: "/logo/Power BI.jpg" },
                      { name: "Azure", src: "/icon/azure.png" },
                      { name: "AWS", src: "/icon/aws.png" },
                      { name: "Claude AI", src: "/icon/claude-colour.png" },
                      { name: "MySQL", src: "/icon/mysql.png" },
                      { name: "Python", src: "/icon/python.png" },
                      { name: "SQL", src: "/icon/sql.png" },
                    ].concat([
                      { name: "Git", src: "/logo/Git.jpg" },
                      { name: "Docker", src: "/logo/Docker.jpg" },
                      { name: "Kubernetes", src: "/logo/Kubernetes.jpg" },
                      { name: "Power BI", src: "/logo/Power BI.jpg" },
                      { name: "Azure", src: "/icon/azure.png" },
                      { name: "AWS", src: "/icon/aws.png" },
                      { name: "Claude AI", src: "/icon/claude-colour.png" },
                      { name: "MySQL", src: "/icon/mysql.png" },
                      { name: "Python", src: "/icon/python.png" },
                      { name: "SQL", src: "/icon/sql.png" },
                    ]).map((tech, i) => (
                      <motion.div
                        key={i}
                        whileHover={{ scale: 1.18, rotate: 6 }}
                        className="w-20 h-20 sm:w-24 sm:h-24 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-lg hover:shadow-2xl hover:border-purple-500/80 hover:ring-4 hover:ring-purple-500/20 flex flex-col items-center justify-center p-3 transition-all cursor-pointer group relative"
                        title={tech.name}
                      >
                        <Image
                          src={tech.src}
                          alt={tech.name}
                          width={56}
                          height={56}
                          className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300 rounded-lg"
                        />
                        <span className="opacity-0 group-hover:opacity-100 transition-opacity absolute -bottom-8 bg-slate-900 text-white dark:bg-white dark:text-slate-900 text-[10px] font-bold px-2 py-0.5 rounded shadow-lg whitespace-nowrap z-30 pointer-events-none">
                          {tech.name}
                        </span>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>

              </div>
            </div>

          </div>
        </section>


        {/* ========================================================= */}
        {/* 6. STUDENT SUCCESS STORIES (TESTIMONIAL CAROUSEL) */}
        {/* ========================================================= */}
        <section className="py-20 md:py-28 relative overflow-hidden bg-white dark:bg-[#0E1322]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

            {/* Header */}
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-xs font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400"
              >
                REAL STUDENT OUTCOMES
              </motion.span>

              <WordRevealHeading text="Student Success Stories" highlightText="Success" />

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-slate-600 dark:text-slate-300 text-base"
              >
                Read how our graduates transformed their skills and secured high-paying roles across India's top IT firms.
              </motion.p>
            </div>

            {/* Testimonial Card Display */}
            <div className="relative">
              <motion.div
                key={activeTestimonial}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="bg-slate-50 dark:bg-slate-900/90 p-8 sm:p-12 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center gap-8"
              >
                {/* Student Avatar (Left) */}
                <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border-4 border-white dark:border-slate-800 shadow-xl flex-shrink-0">
                  <Image
                    src={studentTestimonials[activeTestimonial].avatar}
                    alt={studentTestimonials[activeTestimonial].name}
                    fill
                    className="object-cover object-center"
                  />
                </div>

                {/* Testimonial Body (Right) */}
                <div className="space-y-4 text-center md:text-left flex-grow">
                  <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
                    <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300 border border-emerald-300/60 dark:border-emerald-800">
                      ⚡ {studentTestimonials[activeTestimonial].hike}
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-purple-100 text-purple-700 dark:bg-purple-950 dark:text-purple-300 border border-purple-200/60">
                      {studentTestimonials[activeTestimonial].company}
                    </span>
                  </div>

                  <p className="text-slate-700 dark:text-slate-200 text-base sm:text-lg italic leading-relaxed">
                    "{studentTestimonials[activeTestimonial].review}"
                  </p>

                  <div>
                    <h4 className="text-xl font-extrabold text-slate-900 dark:text-white">
                      {studentTestimonials[activeTestimonial].name}
                    </h4>
                    <p className="text-xs font-semibold text-purple-600 dark:text-purple-400">
                      {studentTestimonials[activeTestimonial].role} • {studentTestimonials[activeTestimonial].course}
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Carousel Nav Buttons */}
              <div className="mt-8 flex items-center justify-center gap-4">
                <button
                  onClick={prevTestimonial}
                  className="p-3 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-purple-600 hover:text-white transition-colors shadow-md cursor-pointer"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                <div className="flex gap-2">
                  {studentTestimonials.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveTestimonial(i)}
                      className={`w-3 h-3 rounded-full transition-all cursor-pointer ${activeTestimonial === i ? "bg-purple-600 w-8" : "bg-slate-300 dark:bg-slate-700"
                        }`}
                      aria-label={`Go to slide ${i + 1}`}
                    />
                  ))}
                </div>

                <button
                  onClick={nextTestimonial}
                  className="p-3 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-purple-600 hover:text-white transition-colors shadow-md cursor-pointer"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

          </div>
        </section>


        {/* ========================================================= */}
        {/* 7. CLOSING CALL TO ACTION BANNER */}
        {/* ========================================================= */}
        <section className="py-16 md:py-24 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative rounded-3xl jvm-gradient-bg p-8 sm:p-12 lg:p-16 text-white shadow-2xl overflow-hidden">

              {/* Background Glow */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.15),transparent_60%)]" />

              <div className="relative z-10 max-w-3xl space-y-6">
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-bold tracking-wide">
                  <Sparkles className="w-3.5 h-3.5 text-pink-300" />
                  START YOUR LEARNING JOURNEY TODAY
                </span>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
                  Ready to Start Your Learning Journey?
                </h2>

                <p className="text-indigo-100 text-base sm:text-lg max-w-2xl leading-relaxed">
                  Thousands of learners have transformed their tech careers through JVM Institute's hands-on programs. Reserve your seat in our upcoming batch today.
                </p>

                <div className="pt-2 flex flex-wrap gap-4">
                  <button
                    onClick={() => openCourseModal("Program Enrollment")}
                    className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-white text-slate-900 font-bold text-base shadow-xl hover:bg-slate-100 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
                  >
                    <span>Apply Now</span>
                    <ArrowRight className="w-5 h-5 ml-2 text-indigo-600" />
                  </button>

                  <button
                    onClick={() => openCourseModal("Syllabus PDF Download")}
                    className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-transparent border-2 border-white/60 text-white font-bold text-base hover:bg-white/10 hover:border-white transition-all gap-2 cursor-pointer"
                  >
                    <Download className="w-5 h-5" />
                    <span>Download Brochure</span>
                  </button>
                </div>
              </div>

            </div>
          </div>
        </section>

      </main>

      {/* Interactive Application Modal Popup */}
      <AnimatePresence>
        {modalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-lg bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden"
            >
              <button
                onClick={() => setModalOpen(false)}
                className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-2 text-center mb-6">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-50 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 text-xs font-extrabold uppercase">
                  <Sparkles className="w-3.5 h-3.5" /> Reserve Seat
                </div>

                <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white">
                  Apply for {selectedCourseTitle}
                </h3>

                <p className="text-xs text-slate-600 dark:text-slate-300">
                  Talk directly with senior mentors & reserve your callback seat.
                </p>
              </div>

              <form onSubmit={(e) => { e.preventDefault(); setModalOpen(false); }} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rahul Sharma"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">WhatsApp Phone Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 8446284162"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Select Specialization</label>
                  <select
                    defaultValue={selectedCourseTitle}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
                  >
                    <option value="Master Data Engineering & PySpark Track">Master Data Engineering & PySpark Track</option>
                    <option value="AWS Cloud & DevOps Engineering Certification">AWS Cloud & DevOps Engineering Certification</option>
                    <option value="Advanced SQL, Python & Data Analytics Masterclass">Advanced SQL, Python & Data Analytics Masterclass</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full jvm-gradient-bg text-white font-extrabold py-3.5 px-4 rounded-xl text-sm transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer hover:scale-[1.01]"
                >
                  <Send className="w-4 h-4" /> Submit Application & Download Syllabus
                </button>
              </form>

              <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> 100% Privacy Guaranteed
                </span>
                <span>Direct Mentor Desk Callback</span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}
