"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { 
  Award, 
  Users, 
  Sparkles, 
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  GraduationCap,
  HeartHandshake,
  Laptop,
  Building2,
  BookOpen,
  Target,
  Clock,
  Compass,
  MapPin,
  Home,
  ChevronRight
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Inline helper components
function AnimatedCounter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 1200;
      const stepTime = Math.max(Math.floor(duration / (value || 1)), 20);
      const timer = setInterval(() => {
        start += Math.ceil(value / 25);
        if (start >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(start);
        }
      }, stepTime);
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}

function WordRevealHeading({ text, highlightText }: { text: string; highlightText?: string }) {
  return (
    <h2 className="text-xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
      {text.split(" ").map((word, i) => (
        <span key={i} className={highlightText && word.toLowerCase().includes(highlightText.toLowerCase()) ? "jvm-gradient-text" : ""}>
          {word}{" "}
        </span>
      ))}
    </h2>
  );
}

function ShinyText({ text }: { text: string; [key: string]: any }) {
  return <span className="jvm-gradient-text">{text}</span>;
}

function TimelineSection({ timelineData }: { timelineData: { year: string; title: string; description: string }[] }) {
  return (
    <section className="py-8 sm:py-20 bg-slate-50/80 dark:bg-[#0B0F19] border-t border-b border-slate-200/80 dark:border-slate-800">
      <div className="max-w-5xl mx-auto px-3.5 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-16 space-y-1.5 sm:space-y-3">
          <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
            OUR MILESTONES
          </span>
          <h2 className="text-xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            Why Choose <span className="jvm-gradient-text">JVM Institute</span>
          </h2>
        </div>

        <div className="space-y-3 sm:space-y-6">
          {timelineData.map((item, idx) => (
            <div key={idx} className="bg-white dark:bg-slate-900 p-3.5 sm:p-6 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-xs flex flex-col sm:flex-row gap-2 sm:gap-6 items-start sm:items-center">
              <span className="px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 font-extrabold text-xs sm:text-sm shrink-0">
                {item.year}
              </span>
              <div>
                <h3 className="text-xs sm:text-lg font-bold text-slate-900 dark:text-white">{item.title}</h3>
                <p className="text-[11px] sm:text-sm text-slate-600 dark:text-slate-400 mt-0.5">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function AboutUsPage() {
  const facultyList = [
    {
      name: "Jayesh Bhoite",
      role: "Lead Data Architect & Founder",
      experience: "12+ Years Exp",
      image: "/students1.jpeg",
      bio: "Former Enterprise Architect specializing in distributed PySpark pipelines, Databricks Lakehouse, and cloud data architecture.",
      expertise: ["PySpark", "Databricks", "AWS Redshift", "System Design"]
    },
    {
      name: "Priya Sharma",
      role: "Senior Cloud Data Engineer",
      experience: "9+ Years Exp",
      image: "/students2.jpeg",
      bio: "Expert in AWS Redshift, Snowflake data warehousing, Apache Airflow DAG orchestration, and automated CI/CD deployment pipelines.",
      expertise: ["Snowflake", "AWS S3", "Apache Airflow", "SQL Tuning"]
    },
    {
      name: "Amit Deshmukh",
      role: "Big Data & Streaming Lead",
      experience: "10+ Years Exp",
      image: "/place1.png",
      bio: "Specializes in high-velocity real-time event streaming architectures using Apache Kafka, PySpark Structured Streaming, and Delta Lake.",
      expertise: ["Apache Kafka", "Real-time Streaming", "Python", "NoSQL"]
    },
    {
      name: "Neha Kulkarni",
      role: "Senior BI & Analytics Specialist",
      experience: "8+ Years Exp",
      image: "/place2.png",
      bio: "Focuses on enterprise data modeling, Star & Snowflake schemas, Power BI dashboard integration, and complex SQL window functions.",
      expertise: ["Advanced SQL", "Data Modeling", "Power BI", "PostgreSQL"]
    },
    {
      name: "Rohan Verma",
      role: "DevOps & Cloud Infrastructure Lead",
      experience: "11+ Years Exp",
      image: "/place3.jpeg",
      bio: "Pioneer in containerized data pipeline deployment with Docker, Kubernetes, Terraform IAC, and multi-cloud security protocols.",
      expertise: ["Docker", "Kubernetes", "AWS IAM", "Terraform"]
    },
    {
      name: "Sneha Patil",
      role: "Placement Desk & Career Coach",
      experience: "7+ Years Exp",
      image: "/jvm logo.jpeg",
      bio: "Dedicated career strategist preparing candidates for MNC technical interviews, resume ATS optimization, and mock coding rounds.",
      expertise: ["Mock Interviews", "ATS Resumes", "MNC Referrals", "Salary Negotiation"]
    }
  ];

  const timelineData = [
    {
      year: "2016",
      title: "Foundation of JVM Institute",
      description: "Started with a vision to deliver hands-on practical IT training led by active corporate software engineers in Pune."
    },
    {
      year: "2018",
      title: "Launch of Data Engineering Track",
      description: "Pioneered specialized PySpark and SQL training curriculum tailored to the rapidly growing Big Data analytics industry."
    },
    {
      year: "2021",
      title: "Databricks & Cloud Integration",
      description: "Integrated real multi-node Databricks clusters and AWS Redshift sandbox environments into student lab sessions."
    },
    {
      year: "2024",
      title: "5,000+ Alumni Milestone",
      description: "Celebrated over 5,000 successful career transitions into Tier-1 product MNCs with 100% placement assistance."
    },
    {
      year: "2026",
      title: "ISO 9001:2015 Accreditation",
      description: "Earned globally recognized ISO accreditation validating our curriculum standard, placement desk, and lab infrastructure."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAFC] dark:bg-[#0B0F19] transition-colors duration-300 overflow-x-hidden selection:bg-[#7C248C] selection:text-white">
      {/* Navigation Bar */}
      <Navbar />

      <main className="flex-grow">
        {/* ========================================================= */}
        {/* 1. HERO SECTION (Compact for Mobile)                      */}
        {/* ========================================================= */}
        <section className="relative h-[180px] xs:h-[220px] sm:h-[340px] lg:h-[380px] flex items-center justify-center overflow-hidden">
          
          {/* Background Classroom Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/students2.jpeg"
              alt="JVM Institute Classroom Batch"
              fill
              className="object-cover object-center scale-105"
              priority
            />

            {/* Soft Light Purple / Indigo Brand Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#6D28D9]/50 via-[#7C3AED]/45 to-[#8B5CF6]/50" />
            <div className="absolute inset-0 bg-[#581C87]/35" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-black/20" />
          </div>

          {/* Centered White "About Us" Heading */}
          <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-2xl xs:text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight drop-shadow-md"
            >
              <ShinyText
                text="About Us"
                speed={2.5}
                delay={0}
                color="#ffffff"
                shineColor="#f472b6"
                spread={120}
                direction="left"
                yoyo={false}
                pauseOnHover={false}
                disabled={false}
              />
            </motion.h1>

            {/* Breadcrumb Navigation */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mt-1.5 sm:mt-3 flex items-center justify-center gap-2 text-[11px] sm:text-sm font-medium text-purple-200"
            >
              <Link href="/" className="hover:text-white transition-colors flex items-center gap-1">
                <Home className="w-3.5 h-3.5" />
                <span>Home</span>
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-purple-300/60" />
              <span className="text-white font-semibold">About Us</span>
            </motion.div>
          </div>

        </section>

        {/* ========================================================= */}
        {/* 2. INSTITUTE STORY (Compact Image & Content on Mobile)    */}
        {/* ========================================================= */}
        <section className="py-6 sm:py-20 md:py-28 relative overflow-hidden bg-white dark:bg-[#0E1322]">
          <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center">
              
              {/* Left Column: Creative Image Collage (Small size on Mobile) */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="lg:col-span-6 relative"
              >
                <div className="relative mx-auto max-w-md lg:max-w-none">
                  
                  {/* Backdrop Glow */}
                  <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500/10 to-pink-500/10 rounded-3xl blur-2xl -z-10" />

                  {/* Main Large Collage Photo (Small height on Mobile) */}
                  <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border border-slate-200/80 dark:border-slate-800 h-[160px] xs:h-[200px] sm:h-auto">
                    <Image
                      src="/place1.png"
                      alt="JVM Institute Campus Placement Drive"
                      width={600}
                      height={420}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                    <div className="absolute bottom-2 left-3 sm:bottom-4 sm:left-6 text-white">
                      <span className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md bg-pink-600/90 text-[9px] sm:text-[10px] font-bold tracking-wider uppercase">Campus Hiring</span>
                      <h4 className="text-xs sm:text-lg font-bold mt-0.5">Direct MNC Drives</h4>
                    </div>
                  </div>

                  {/* Secondary Floating Stats Card */}
                  <motion.div
                    animate={{ y: [0, -6, 0] }}
                    transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -bottom-4 -right-2 sm:-bottom-6 sm:right-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-2.5 sm:p-5 rounded-xl sm:rounded-2xl shadow-2xl max-w-[160px] sm:max-w-[240px] z-20"
                  >
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className="w-7 h-7 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-indigo-100 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold shrink-0">
                        <Users className="w-3.5 h-3.5 sm:w-5 sm:h-5" />
                      </div>
                      <div>
                        <div className="text-base sm:text-2xl font-extrabold text-slate-900 dark:text-white">98.4%</div>
                        <p className="text-[9px] sm:text-xs text-slate-500 dark:text-slate-400 font-medium">Placement Track</p>
                      </div>
                    </div>
                  </motion.div>

                </div>
              </motion.div>

              {/* Right Column: Story & Philosophy */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="lg:col-span-6 space-y-3 sm:space-y-6 pt-2 sm:pt-0"
              >
                <div>
                  <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                    OUR JOURNEY &amp; PHILOSOPHY
                  </span>
                  <h2 className="text-xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-1 sm:mt-2 leading-tight">
                    Crafted by Engineers, Dedicated to Real-World Mastery
                  </h2>
                </div>

                <div className="space-y-2 sm:space-y-4 text-slate-600 dark:text-slate-300 text-xs sm:text-base leading-relaxed">
                  <p>
                    JVM Institute was established in Pune with a clear vision: to revolutionize technical training by eliminating outdated, purely theoretical curriculum. We recognized that tech companies hire engineers who design scalable data pipelines and write optimized SQL from day one.
                  </p>
                  <p className="hidden sm:block">
                    Over 5,000+ students have transformed their careers through our rigorous, project-first training philosophy across Data Engineering, Big Data Analytics, Python, and Cloud Computing.
                  </p>
                </div>

                {/* 3 Core Highlights */}
                <div className="pt-2 sm:pt-4 space-y-2 sm:space-y-4">
                  
                  <div className="flex items-start gap-2.5 sm:gap-4 p-2.5 sm:p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800/60">
                    <div className="p-2 sm:p-2.5 rounded-lg bg-indigo-600 text-white shadow-md shrink-0">
                      <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-base font-bold text-slate-900 dark:text-white">Experienced Industry Faculty</h4>
                      <p className="text-[10px] sm:text-xs text-slate-600 dark:text-slate-400 mt-0.5">
                        Active senior data architects with 10+ years corporate engineering experience.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5 sm:gap-4 p-2.5 sm:p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800/60">
                    <div className="p-2 sm:p-2.5 rounded-lg bg-[#7C248C] text-white shadow-md shrink-0">
                      <Laptop className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-base font-bold text-slate-900 dark:text-white">Practical Project-First Learning</h4>
                      <p className="text-[10px] sm:text-xs text-slate-600 dark:text-slate-400 mt-0.5">
                        Live cloud labs, PySpark capstones, and real dataset ETL pipelines.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5 sm:gap-4 p-2.5 sm:p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800/60">
                    <div className="p-2 sm:p-2.5 rounded-lg bg-[#E01E6A] text-white shadow-md shrink-0">
                      <HeartHandshake className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-base font-bold text-slate-900 dark:text-white">Student-Centered Mentorship</h4>
                      <p className="text-[10px] sm:text-xs text-slate-600 dark:text-slate-400 mt-0.5">
                        Small batch sizes, personalized code reviews, and targeted mock interviews.
                      </p>
                    </div>
                  </div>

                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 3. WHY CHOOSE JVM INSTITUTE - INTERACTIVE TIMELINE       */}
        {/* ========================================================= */}
        <TimelineSection timelineData={timelineData} />

        {/* ========================================================= */}
        {/* 4. OUR ACHIEVEMENTS - METRICS GRID (Compact for Mobile)   */}
        {/* ========================================================= */}
        <section className="py-8 sm:py-20 md:py-28 relative overflow-hidden bg-white dark:bg-[#0E1322]">
          <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 relative z-10">
            {/* Section Header */}
            <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-16 space-y-2 sm:space-y-4">
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400"
              >
                PROVEN TRACK RECORD
              </motion.span>

              <WordRevealHeading text="Our Impact in Numbers" highlightText="Numbers" />
            </div>

            {/* Asymmetric Stats Layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4 sm:gap-6 items-stretch">
              
              {/* Stat Card 1 (Large Highlight Card) */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-5 bg-gradient-to-br from-indigo-900 via-indigo-950 to-slate-900 text-white p-5 sm:p-8 rounded-2xl sm:rounded-3xl shadow-xl flex flex-col justify-between relative overflow-hidden group border border-indigo-800/50"
              >
                <div className="relative z-10">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-indigo-500/20 border border-indigo-400/30 flex items-center justify-center mb-3 sm:mb-6 text-indigo-300">
                    <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div className="text-4xl sm:text-6xl font-black tracking-tight text-white mb-1 sm:mb-2">
                    <AnimatedCounter value={5000} suffix="+" />
                  </div>
                  <h3 className="text-base sm:text-xl font-bold text-indigo-200">Students Trained &amp; Mentored</h3>
                </div>

                <p className="text-slate-300 text-xs sm:text-sm mt-4 sm:mt-6 relative z-10 border-t border-indigo-800/60 pt-3 sm:pt-4">
                  Graduates working across top IT companies and MNCs across India.
                </p>
              </motion.div>

              {/* Stat Card 2 (2 Columns on Mobile View) */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-2 gap-2.5 sm:gap-6"
              >
                {/* Metric Box A */}
                <div className="bg-slate-50 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 p-3 sm:p-6 rounded-2xl sm:rounded-3xl shadow-md">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-pink-100 dark:bg-pink-950/80 text-pink-600 dark:text-pink-400 flex items-center justify-center mb-2 sm:mb-4">
                    <Target className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mb-0.5">
                    <AnimatedCounter value={98} suffix=".4%" />
                  </div>
                  <h4 className="text-xs sm:text-base font-bold text-slate-800 dark:text-slate-200">Placement Success Rate</h4>
                </div>

                {/* Metric Box B */}
                <div className="bg-slate-50 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 p-3 sm:p-6 rounded-2xl sm:rounded-3xl shadow-md">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-purple-100 dark:bg-purple-950/80 text-purple-600 dark:text-purple-400 flex items-center justify-center mb-2 sm:mb-4">
                    <Clock className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mb-0.5">
                    <AnimatedCounter value={10} suffix="+" />
                  </div>
                  <h4 className="text-xs sm:text-base font-bold text-slate-800 dark:text-slate-200">Years Educational Trust</h4>
                </div>

                {/* Metric Box C */}
                <div className="bg-slate-50 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 p-3 sm:p-6 rounded-2xl sm:rounded-3xl shadow-md">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-indigo-100 dark:bg-indigo-950/80 text-indigo-600 dark:text-indigo-400 flex items-center justify-center mb-2 sm:mb-4">
                    <Users className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mb-0.5">
                    <AnimatedCounter value={35} suffix="+" />
                  </div>
                  <h4 className="text-xs sm:text-base font-bold text-slate-800 dark:text-slate-200">Industry Mentors</h4>
                </div>

                {/* Metric Box D */}
                <div className="bg-slate-50 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 p-3 sm:p-6 rounded-2xl sm:rounded-3xl shadow-md">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-emerald-100 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-2 sm:mb-4">
                    <BookOpen className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mb-0.5">
                    <AnimatedCounter value={15} suffix="+" />
                  </div>
                  <h4 className="text-xs sm:text-base font-bold text-slate-800 dark:text-slate-200">Tech Tracks</h4>
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 5. OUR FACULTY & STAFF - MENTOR GRID (2-Cols on Mobile)   */}
        {/* ========================================================= */}
        <section className="py-8 sm:py-20 md:py-28 relative overflow-hidden bg-slate-50/70 dark:bg-[#0B0F19]">
          <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 relative z-10">
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-16 space-y-2 sm:space-y-4">
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400"
              >
                LEARN FROM THE BEST
              </motion.span>
              
              <WordRevealHeading text="Meet Our Faculty & Mentors" highlightText="Faculty" />
            </div>

            {/* 2-Column Responsive Mentor Grid for Mobile */}
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-8 items-stretch">
              {facultyList.map((faculty, idx) => (
                <motion.div
                  key={faculty.name}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: idx * 0.1 }}
                  className="bg-white dark:bg-slate-900/90 rounded-2xl sm:rounded-3xl border border-slate-200/80 dark:border-slate-800 p-3.5 sm:p-8 shadow-md flex flex-col justify-between text-center relative overflow-hidden"
                >
                  <div className="flex flex-col items-center">
                    {/* Circular Portrait Container */}
                    <div className="relative mb-3 sm:mb-5">
                      <div className="relative w-20 h-20 sm:w-36 sm:h-36 rounded-full overflow-hidden border-2 sm:border-4 border-white dark:border-slate-900 shadow-md">
                        <Image
                          src={faculty.image}
                          alt={faculty.name}
                          fill
                          className="object-cover object-center"
                        />
                      </div>
                      <span className="absolute -bottom-1.5 left-1/2 transform -translate-x-1/2 px-2 py-0.5 rounded-full text-[8px] sm:text-[10px] font-extrabold bg-indigo-600 text-white shadow-xs border border-white whitespace-nowrap">
                        {faculty.experience}
                      </span>
                    </div>

                    <h3 className="text-xs sm:text-2xl font-extrabold text-slate-900 dark:text-white mt-1 truncate w-full">
                      {faculty.name}
                    </h3>
                    
                    <p className="text-[9px] sm:text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider mt-0.5 truncate w-full">
                      {faculty.role}
                    </p>

                    <p className="text-slate-600 dark:text-slate-300 text-[10px] sm:text-sm leading-snug sm:leading-relaxed mt-2 line-clamp-2 sm:line-clamp-3">
                      {faculty.bio}
                    </p>
                  </div>

                  {/* Expertise Tags */}
                  <div className="pt-2 sm:pt-4 mt-3 sm:mt-6 border-t border-slate-100 dark:border-slate-800/80">
                    <div className="flex flex-wrap justify-center gap-1">
                      {faculty.expertise.map((skill) => (
                        <span
                          key={skill}
                          className="px-1.5 py-0.5 rounded-md text-[9px] sm:text-xs font-semibold bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200/50"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 6. CALL TO ACTION BANNER                                 */}
        {/* ========================================================= */}
        <section className="py-8 sm:py-16 md:py-24 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
            <div className="relative rounded-2xl sm:rounded-3xl jvm-gradient-bg p-5 sm:p-12 lg:p-16 text-white shadow-2xl overflow-hidden">
              
              <div className="relative z-10 max-w-3xl space-y-3 sm:space-y-6 text-center sm:text-left">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-[10px] sm:text-xs font-bold tracking-wide">
                  <Sparkles className="w-3.5 h-3.5" />
                  START YOUR DATA CAREER TODAY
                </span>

                <h2 className="text-xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-snug sm:leading-tight">
                  Ready to Transform Your Career with Hands-On Tech Mastery?
                </h2>

                <p className="text-indigo-100 text-xs sm:text-lg max-w-2xl leading-relaxed">
                  Join our upcoming batch in Pune. Book a 1-on-1 career counseling session or drop by our campus to interact with our mentors directly.
                </p>

                <div className="pt-2 flex flex-col sm:flex-row gap-2.5 sm:gap-4">
                  <Link
                    href="/our-courses"
                    className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 rounded-xl bg-white text-slate-900 font-bold text-xs sm:text-base shadow-xl hover:bg-slate-100 transition-all"
                  >
                    <span>View All Courses</span>
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 text-indigo-600" />
                  </Link>

                  <Link
                    href="/contact-us"
                    className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 rounded-xl bg-transparent border-2 border-white/60 text-white font-bold text-xs sm:text-base hover:bg-white/10 transition-all"
                  >
                    <span>Contact Campus Desk</span>
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
