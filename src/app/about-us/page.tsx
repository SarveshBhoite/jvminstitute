"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import {
  Sparkles,
  ArrowRight,
  Award,
  Users,
  Briefcase,
  GraduationCap,
  BookOpen,
  Laptop,
  Terminal,
  Globe,
  Cpu,
  Star,
  BookOpenCheck,
  Target,
  ChevronRight,
  Clock,
  ShieldCheck,
  HeartHandshake,
  PhoneCall,
  Home
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ShinyText from "@/components/ShinyText";

// Animated Counter Component for Statistics
function AnimatedCounter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const end = value;
    const duration = 2000;
    const stepTime = 16;
    const totalSteps = Math.floor(duration / stepTime);
    const increment = Math.max(1, Math.ceil(end / totalSteps));

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

// Word-by-Word Text Reveal Component
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

// Timeline Section with Scroll-Driven Progressive Drawing Line & Traveling Light Dot
function TimelineSection({ timelineData }: { timelineData: any[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 65%", "end 75%"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const lightY = useTransform(scrollYProgress, [0, 1], ["0%", "98%"]);

  return (
    <section className="py-20 md:py-28 relative overflow-hidden bg-slate-50/70 dark:bg-[#0B0F19]">
      {/* Background Ambient Glows & Particle Dots */}
      <div className="ambient-glow w-[500px] h-[500px] bg-[#1E2B88] dark:bg-[#4F46E5] top-1/3 left-[-10%] opacity-15 pointer-events-none" />
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
            OUR VALUE PROPOSITION
          </motion.span>

          <WordRevealHeading text="Why Choose JVM Institute ?" highlightText="JVM" />

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-600 dark:text-slate-300 text-base"
          >
            Discover the key pillars that set our educational methodology apart and ensure consistent career breakthroughs for our students.
          </motion.p>
        </div>

        {/* Dynamic S-Shaped Timeline Container */}
        <div ref={containerRef} className="relative max-w-5xl mx-auto py-4">
          
          {/* Static Background Central Line Track */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-6 bottom-6 w-1 bg-slate-200 dark:bg-slate-800/80 rounded-full hidden md:block" />

          {/* Progressively Drawn Gradient Line */}
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-1/2 transform -translate-x-1/2 top-6 w-1 jvm-gradient-bg rounded-full hidden md:block z-10 shadow-[0_0_15px_rgba(124,36,140,0.7)]"
          />

          {/* Traveling Glowing Light Particle Dot */}
          <motion.div
            style={{ top: lightY }}
            className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-pink-500 shadow-[0_0_20px_#E01E6A] hidden md:block z-30 pointer-events-none animate-pulse"
          />

          <div className="space-y-14 md:space-y-20">
            {timelineData.map((item, index) => {
              const isEven = index % 2 === 0;
              const Icon = item.icon;
              const [hovered, setHovered] = useState(false);

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: isEven ? -60 : 60, y: 30 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.8, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
                  className={`relative flex flex-col md:flex-row items-center ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Milestone Node Point */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex items-center justify-center z-20">
                    <motion.div
                      animate={{ scale: hovered ? 1.3 : 1 }}
                      transition={{ type: "spring", stiffness: 300, damping: 18 }}
                      className={`w-11 h-11 rounded-full border-4 ${
                        hovered
                          ? "jvm-gradient-bg border-white dark:border-[#0B0F19] shadow-[0_0_25px_rgba(124,36,140,0.9)]"
                          : "bg-white dark:bg-slate-900 border-indigo-500 dark:border-indigo-400 shadow-lg"
                      } flex items-center justify-center transition-colors duration-300 cursor-pointer`}
                    >
                      <span className={`text-xs font-bold ${hovered ? "text-white" : "text-indigo-600 dark:text-indigo-400"}`}>
                        {index + 1}
                      </span>
                    </motion.div>

                    {/* Connecting Beam Line from Node to Feature Card */}
                    <motion.div
                      animate={{ opacity: hovered ? 1 : 0.4, scaleX: hovered ? 1.15 : 1 }}
                      className={`absolute w-8 h-[2px] jvm-gradient-bg z-10 ${
                        isEven ? "right-11 origin-right" : "left-11 origin-left"
                      }`}
                    />
                  </div>

                  {/* Feature Card Side */}
                  <div className="w-full md:w-1/2 md:px-8">
                    <motion.div
                      onMouseEnter={() => setHovered(true)}
                      onMouseLeave={() => setHovered(false)}
                      animate={{
                        y: hovered ? -10 : 0,
                        rotate: hovered ? (isEven ? -1.5 : 1.5) : 0,
                      }}
                      transition={{ type: "spring", stiffness: 240, damping: 18 }}
                      className={`bg-white dark:bg-slate-900/90 p-6 sm:p-8 rounded-3xl border ${
                        hovered
                          ? "border-indigo-500/80 dark:border-indigo-400/80 shadow-2xl shadow-indigo-500/20"
                          : "border-slate-200/80 dark:border-slate-800 shadow-xl"
                      } transition-all duration-300 relative group overflow-hidden`}
                    >
                      {/* Subtle Light Beam Accent on Hover */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                      <div className="flex items-center justify-between gap-4 mb-4">
                        {/* Icon with Spring Bounce Scaling */}
                        <motion.div
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ type: "spring", stiffness: 220, damping: 14, delay: 0.2 + index * 0.1 }}
                          animate={{ rotate: hovered ? 12 : 0, scale: hovered ? 1.15 : 1 }}
                          className="w-14 h-14 rounded-2xl bg-indigo-50 dark:bg-indigo-950/80 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shadow-inner"
                        >
                          <Icon className="w-7 h-7" />
                        </motion.div>

                        <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-300 border border-indigo-200/50 dark:border-indigo-800/50 shadow-sm">
                          {item.highlight}
                        </span>
                      </div>

                      {/* Title & Desc Staggered Reveal */}
                      <motion.h3
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                        className="text-xl font-bold text-slate-900 dark:text-white mb-2.5 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors"
                      >
                        {item.title}
                      </motion.h3>

                      <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 + index * 0.05 }}
                        className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed"
                      >
                        {item.desc}
                      </motion.p>

                      <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800/60 flex items-center justify-between text-xs font-semibold text-indigo-600 dark:text-indigo-400">
                        <span>JVM Quality Standard</span>
                        <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </motion.div>
                  </div>

                  {/* Spacer for Opposite Side */}
                  <div className="hidden md:block md:w-1/2" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function AboutPage() {
  const { scrollYProgress } = useScroll();
  const heroParallaxY = useTransform(scrollYProgress, [0, 0.3], [0, -60]);

  // Timeline Items Data
  const timelineData = [
    {
      icon: Award,
      title: "Expert Industry Faculty",
      desc: "Learn directly from senior Data Architects & Cloud Engineers with 10+ years of active enterprise experience at Fortune 500 tech companies.",
      highlight: "10+ Yrs Enterprise Experience"
    },
    {
      icon: Terminal,
      title: "Practical & Hands-On Learning",
      desc: "No pure theory. 80% of your time is spent writing production SQL queries, designing PySpark data pipelines, and working with live cloud infrastructure.",
      highlight: "80% Live Lab Execution"
    },
    {
      icon: BookOpenCheck,
      title: "Career-Oriented Curriculum",
      desc: "Curriculums engineered alongside MNC hiring managers, continuously updated with PySpark, Databricks, AWS, Snowflake, and Apache Airflow.",
      highlight: "Updated Every Quarter"
    },
    {
      icon: Cpu,
      title: "Modern Teaching Ecosystem",
      desc: "Hybrid learning flexibility with high-definition recorded sessions, interactive code labs, and dedicated 1-on-1 daily doubt resolution desks.",
      highlight: "Dedicated Doubt Desk"
    },
    {
      icon: Globe,
      title: "Real Industry Exposure",
      desc: "Participate in real-time enterprise capstone projects, industry masterclasses by guest architects, and simulated agile team sprints.",
      highlight: "Real Capstone Projects"
    },
    {
      icon: Briefcase,
      title: "100% Dedicated Placement Support",
      desc: "End-to-end career guidance: ATS resume crafting, 1-on-1 technical mock interviews, LinkedIn branding, and direct referrals to 50+ hiring partners.",
      highlight: "50+ Hiring Partners"
    }
  ];

  // Faculty Data Showcase (6 Mentors for 2-row 3-column grid)
  const facultyList = [
    {
      name: "Jayesh Mahajan",
      role: "Founder & Lead Data Architect",
      experience: "14+ Years Exp",
      expertise: ["PySpark", "AWS Redshift", "Big Data", "Snowflake"],
      bio: "Ex-MNC Lead Architect passionate about building production data systems. Has personally mentored over 3,000+ engineers into top tech firms.",
      image: "/students1.jpeg",
    },
    {
      name: "Vikramaditya Shinde",
      role: "Senior Cloud & DevOps Mentor",
      experience: "10+ Years Exp",
      expertise: ["AWS", "Docker", "Kubernetes", "CI/CD"],
      bio: "Cloud Infrastructure Specialist dedicated to teaching automated cloud deployment, microservices architecture, and enterprise security.",
      image: "/place1.png",
    },
    {
      name: "Pooja Kulkarni",
      role: "Lead Data Analytics & SQL Instructor",
      experience: "8+ Years Exp",
      expertise: ["Advanced SQL", "Tableau", "Power BI", "Python"],
      bio: "Data analytics wizard focused on complex SQL optimization, business intelligence dashboards, and exploratory data analysis.",
      image: "/place2.png",
    },
    {
      name: "Amit Deshmukh",
      role: "Python & Data Engineering Specialist",
      experience: "9+ Years Exp",
      expertise: ["Python Core", "Pandas", "Airflow", "FastAPI"],
      bio: "Software developer turned educator with deep mastery in Python backend frameworks, data engineering automation, and ETL pipelines.",
      image: "/place3.jpeg",
    },
    {
      name: "Rohan Kulkarni",
      role: "Big Data & PySpark Architect",
      experience: "11+ Years Exp",
      expertise: ["Databricks", "Apache Spark", "Scala", "Kafka"],
      bio: "Enterprise streaming data architect specialized in real-time event processing, distributed compute clusters, and data lake governance.",
      image: "/students2.jpeg",
    },
    {
      name: "Sneha Patil",
      role: "Database & ETL Pipeline Engineer",
      experience: "7+ Years Exp",
      expertise: ["PostgreSQL", "Data Warehousing", "ETL", "dbt"],
      bio: "Database administrator and ETL expert passionate about designing resilient relational schemas and high-throughput data warehouse pipelines.",
      image: "/place1.png",
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAFC] dark:bg-[#0B0F19] transition-colors duration-300 overflow-x-hidden selection:bg-[#7C248C] selection:text-white">
      {/* Navigation Bar */}
      <Navbar />

      <main className="flex-grow">
        {/* ========================================================= */}
        {/* 1. HERO SECTION */}
        {/* ========================================================= */}
        {/* ========================================================= */}
        {/* 1. PREMIUM TRANSPARENT HERO SECTION (45-55% VIEWPORT HEIGHT) */}
        {/* ========================================================= */}
        {/* ========================================================= */}
        {/* 1. PURPLE OVERLAY CLASSROOM HERO BANNER (MATCHES REFERENCE IMAGE) */}
        {/* ========================================================= */}
        <section className="relative h-[280px] sm:h-[340px] lg:h-[380px] flex items-center justify-center overflow-hidden">
          
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
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight drop-shadow-md"
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
              className="mt-3 flex items-center justify-center gap-2 text-xs sm:text-sm font-medium text-purple-200"
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
        {/* 2. INSTITUTE STORY */}
        {/* ========================================================= */}
        <section className="py-20 md:py-28 relative overflow-hidden bg-white dark:bg-[#0E1322]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-center">
              
              {/* Left Column: Creative Image Collage with Soft Depth */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="lg:col-span-6 relative"
              >
                <div className="relative mx-auto max-w-md lg:max-w-none">
                  
                  {/* Backdrop Glow */}
                  <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500/10 to-pink-500/10 rounded-3xl blur-2xl -z-10" />

                  {/* Main Large Collage Photo */}
                  <div className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-200/80 dark:border-slate-800">
                    <Image
                      src="/place1.png"
                      alt="JVM Institute Campus Placement Drive"
                      width={600}
                      height={420}
                      className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-6 text-white">
                      <span className="px-2.5 py-1 rounded-md bg-pink-600/90 text-[10px] font-bold tracking-wider uppercase">Campus Hiring</span>
                      <h4 className="text-lg font-bold mt-1">Direct MNC Interview Drives</h4>
                    </div>
                  </div>

                  {/* Secondary Floating Stats Card */}
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -bottom-6 -right-4 sm:right-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-5 rounded-2xl shadow-2xl max-w-[240px] z-20"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-indigo-100 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold">
                        <Users className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-2xl font-extrabold text-slate-900 dark:text-white">98.4%</div>
                        <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">Placement Career Track</p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Small Overlapping Corner Photo */}
                  <div className="absolute -top-6 -left-4 sm:-left-6 w-32 sm:w-40 aspect-square rounded-2xl overflow-hidden shadow-xl border-4 border-white dark:border-slate-900 hidden sm:block rotate-[-6deg]">
                    <Image
                      src="/place2.png"
                      alt="Student Learning Experience"
                      fill
                      className="object-cover"
                    />
                  </div>

                </div>
              </motion.div>

              {/* Right Column: Story & Philosophy */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="lg:col-span-6 space-y-6"
              >
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                    OUR JOURNEY & PHILOSOPHY
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-2 leading-tight">
                    Crafted by Engineers, Dedicated to Real-World Mastery
                  </h2>
                </div>

                <div className="space-y-4 text-slate-600 dark:text-slate-300 text-base leading-relaxed">
                  <p>
                    JVM Institute was established in Pune with a clear vision: to revolutionize technical training by eliminating outdated, purely theoretical curriculum. We recognized that tech companies were hiring engineers who couldn&apos;t just answer interview questions, but who could design scalable data pipelines, write optimized SQL, and deploy cloud infrastructure from day one.
                  </p>
                  <p>
                    What started as a focused offline training program led by industry architects has grown into one of Pune&apos;s most trusted academies for Data Engineering, Big Data Analytics, Python, and Cloud Computing. Over 5,000+ students have transformed their careers through our rigorous, project-first training philosophy.
                  </p>
                </div>

                {/* 3 Core Highlights with Clean Icons */}
                <div className="pt-4 space-y-4">
                  
                  <div className="flex items-start gap-4 p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800/60 transition-colors hover:border-indigo-300 dark:hover:border-indigo-700">
                    <div className="p-2.5 rounded-lg bg-indigo-600 text-white shadow-md flex-shrink-0">
                      <GraduationCap className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-slate-900 dark:text-white">Experienced Industry Faculty</h4>
                      <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
                        Instructors are active senior data architects with 10+ years of hands-on corporate engineering experience.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800/60 transition-colors hover:border-indigo-300 dark:hover:border-indigo-700">
                    <div className="p-2.5 rounded-lg bg-[#7C248C] text-white shadow-md flex-shrink-0">
                      <Laptop className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-slate-900 dark:text-white">Practical & Project-First Learning</h4>
                      <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
                        Every module features live cloud labs, PySpark capstones, real dataset ETL pipelines, and performance tuning.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800/60 transition-colors hover:border-indigo-300 dark:hover:border-indigo-700">
                    <div className="p-2.5 rounded-lg bg-[#E01E6A] text-white shadow-md flex-shrink-0">
                      <HeartHandshake className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-slate-900 dark:text-white">Student-Centered Mentorship</h4>
                      <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
                        Small batch sizes ensure personalized code reviews, daily doubt desks, and targeted interview preparation.
                      </p>
                    </div>
                  </div>

                </div>
              </motion.div>

            </div>
          </div>
        </section>


        {/* ========================================================= */}
        {/* 3. WHY CHOOSE JVM INSTITUTE - CINEMATIC INTERACTIVE TIMELINE */}
        {/* ========================================================= */}
        <TimelineSection timelineData={timelineData} />

        {/* ========================================================= */}
        {/* 4. OUR ACHIEVEMENTS - ASYMMETRIC METRICS GRID */}
        {/* ========================================================= */}
        <section className="py-20 md:py-28 relative overflow-hidden bg-white dark:bg-[#0E1322]">
          {/* Background Ambient Glow & Particles */}
          <div className="ambient-glow w-96 h-96 bg-[#7C248C] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-15" />
          <div className="absolute inset-0 bg-[radial-gradient(#80808012_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Section Header with Word-by-Word Animation */}
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-xs font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400"
              >
                PROVEN TRACK RECORD
              </motion.span>

              <WordRevealHeading text="Our Impact in Numbers" highlightText="Numbers" />

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-slate-600 dark:text-slate-300 text-base"
              >
                A glance at our journey and the milestones achieved through relentless focus on student success.
              </motion.p>
            </div>

            {/* Asymmetric Stats Layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-6 items-stretch">
              
              {/* Stat Card 1 (Large Highlight Card) */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                whileHover={{ y: -8, scale: 1.01 }}
                className="lg:col-span-5 bg-gradient-to-br from-indigo-900 via-indigo-950 to-slate-900 text-white p-8 rounded-3xl shadow-xl flex flex-col justify-between relative overflow-hidden group border border-indigo-800/50 hover:shadow-indigo-500/20 transition-all duration-300"
              >
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-25 group-hover:rotate-6 transition-all duration-500">
                  <Users className="w-44 h-44 text-white" />
                </div>

                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-2xl bg-indigo-500/20 border border-indigo-400/30 flex items-center justify-center mb-6 text-indigo-300 group-hover:scale-110 transition-transform">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div className="text-5xl sm:text-6xl font-black tracking-tight text-white mb-2">
                    <AnimatedCounter value={5000} suffix="+" />
                  </div>
                  <h3 className="text-xl font-bold text-indigo-200">Students Trained & Mentored</h3>
                </div>

                <p className="text-slate-300 text-sm mt-6 relative z-10 border-t border-indigo-800/60 pt-4">
                  Graduates now working across top IT companies, MNCs, and data startups across India.
                </p>
              </motion.div>

              {/* Stat Card 2 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6"
              >
                {/* Metric Box A */}
                <motion.div
                  whileHover={{ y: -6, scale: 1.02 }}
                  className="bg-slate-50 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 p-6 rounded-3xl shadow-lg hover:shadow-2xl hover:border-pink-500/40 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-pink-100 dark:bg-pink-950/80 text-pink-600 dark:text-pink-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Target className="w-5 h-5" />
                  </div>
                  <div className="text-4xl font-extrabold text-slate-900 dark:text-white mb-1">
                    <AnimatedCounter value={98} suffix=".4%" />
                  </div>
                  <h4 className="text-base font-bold text-slate-800 dark:text-slate-200">Placement Success Rate</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">
                    Consistent track record of candidate placement assistance within 90 days of completion.
                  </p>
                </motion.div>

                {/* Metric Box B */}
                <motion.div
                  whileHover={{ y: -6, scale: 1.02 }}
                  className="bg-slate-50 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 p-6 rounded-3xl shadow-lg hover:shadow-2xl hover:border-purple-500/40 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-purple-100 dark:bg-purple-950/80 text-purple-600 dark:text-purple-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div className="text-4xl font-extrabold text-slate-900 dark:text-white mb-1">
                    <AnimatedCounter value={10} suffix="+" />
                  </div>
                  <h4 className="text-base font-bold text-slate-800 dark:text-slate-200">Years of Educational Trust</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">
                    A decade-long legacy of empowering software engineers in Pune.
                  </p>
                </motion.div>

                {/* Metric Box C */}
                <motion.div
                  whileHover={{ y: -6, scale: 1.02 }}
                  className="bg-slate-50 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 p-6 rounded-3xl shadow-lg hover:shadow-2xl hover:border-indigo-500/40 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-indigo-100 dark:bg-indigo-950/80 text-indigo-600 dark:text-indigo-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Users className="w-5 h-5" />
                  </div>
                  <div className="text-4xl font-extrabold text-slate-900 dark:text-white mb-1">
                    <AnimatedCounter value={35} suffix="+" />
                  </div>
                  <h4 className="text-base font-bold text-slate-800 dark:text-slate-200">Expert Industry Mentors</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">
                    Active data architects, cloud leads, and senior software developers.
                  </p>
                </motion.div>

                {/* Metric Box D */}
                <motion.div
                  whileHover={{ y: -6, scale: 1.02 }}
                  className="bg-slate-50 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 p-6 rounded-3xl shadow-lg hover:shadow-2xl hover:border-emerald-500/40 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <div className="text-4xl font-extrabold text-slate-900 dark:text-white mb-1">
                    <AnimatedCounter value={15} suffix="+" />
                  </div>
                  <h4 className="text-base font-bold text-slate-800 dark:text-slate-200">Specialized Tech Tracks</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">
                    Data Engineering, PySpark, AWS, SQL, Python, and Big Data certifications.
                  </p>
                </motion.div>
              </motion.div>

            </div>
          </div>
        </section>


        {/* ========================================================= */}
        {/* 5. OUR FACULTY & STAFF - 2-ROW 3-COLUMN MENTOR GRID */}
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
                LEARN FROM THE BEST
              </motion.span>
              
              <WordRevealHeading text="Meet Our Faculty & Mentors" highlightText="Faculty" />

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-slate-600 dark:text-slate-300 text-base"
              >
                Our faculty members are active enterprise tech leaders who bring real corporate insights and live production experience into every classroom.
              </motion.p>
            </div>

            {/* 2-Row x 3-Column Mentors Responsive Grid with Circular Images */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
              {facultyList.map((faculty, idx) => (
                <motion.div
                  key={faculty.name}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.7, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -8 }}
                  className="bg-white dark:bg-slate-900/90 rounded-3xl border border-slate-200/80 dark:border-slate-800 p-6 sm:p-8 shadow-xl hover:shadow-2xl hover:border-indigo-500/60 dark:hover:border-indigo-400/60 transition-all duration-300 group flex flex-col justify-between text-center relative overflow-hidden"
                >
                  {/* Subtle Light Beam Accent */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  <div className="flex flex-col items-center">
                    {/* Circular Portrait Image Container */}
                    <div className="relative mb-5">
                      <div className="absolute -inset-1 rounded-full jvm-gradient-bg opacity-30 group-hover:opacity-75 blur-sm transition-opacity duration-500" />
                      <div className="relative w-32 h-32 sm:w-36 sm:h-36 rounded-full overflow-hidden border-4 border-white dark:border-slate-900 shadow-xl group-hover:scale-105 transition-transform duration-500">
                        <Image
                          src={faculty.image}
                          alt={faculty.name}
                          fill
                          className="object-cover object-center"
                        />
                      </div>
                      {/* Experience Pill Badge */}
                      <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 px-3 py-0.5 rounded-full text-[10px] font-extrabold bg-indigo-600 text-white shadow-md border border-white dark:border-slate-900 whitespace-nowrap">
                        {faculty.experience}
                      </span>
                    </div>

                    {/* Name & Role Text Below Image */}
                    <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors mt-2">
                      {faculty.name}
                    </h3>
                    
                    <p className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider mt-1">
                      {faculty.role}
                    </p>

                    {/* Bio Description */}
                    <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed mt-3 line-clamp-3">
                      {faculty.bio}
                    </p>
                  </div>

                  {/* Core Expertise Tags Footer Centered */}
                  <div className="pt-4 mt-6 border-t border-slate-100 dark:border-slate-800/80">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 block mb-2 text-center">
                      Core Expertise
                    </span>
                    <div className="flex flex-wrap justify-center gap-1.5">
                      {faculty.expertise.map((skill) => (
                        <span
                          key={skill}
                          className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200/50 dark:border-indigo-800/50"
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
        {/* 6. CALL TO ACTION BANNER */}
        {/* ========================================================= */}
        <section className="py-16 md:py-24 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative rounded-3xl jvm-gradient-bg p-8 sm:p-12 lg:p-16 text-white shadow-2xl overflow-hidden">
              
              {/* Background Decorative Pattern */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.15),transparent_60%)]" />

              <div className="relative z-10 max-w-3xl space-y-6">
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-bold tracking-wide">
                  <Sparkles className="w-3.5 h-3.5" />
                  START YOUR DATA CAREER TODAY
                </span>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
                  Ready to Transform Your Career with Hands-On Tech Mastery?
                </h2>

                <p className="text-indigo-100 text-base sm:text-lg max-w-2xl leading-relaxed">
                  Join our upcoming batch in Pune. Book a 1-on-1 career counseling session or drop by our campus to interact with our mentors directly.
                </p>

                <div className="pt-2 flex flex-wrap gap-4">
                  <Link
                    href="/our-courses"
                    className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-white text-slate-900 font-bold text-base shadow-xl hover:bg-slate-100 hover:scale-[1.02] active:scale-[0.98] transition-all"
                  >
                    <span>View All Courses</span>
                    <ArrowRight className="w-5 h-5 ml-2 text-indigo-600" />
                  </Link>

                  <Link
                    href="/contact-us"
                    className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-transparent border-2 border-white/60 text-white font-bold text-base hover:bg-white/10 hover:border-white transition-all"
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
