"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LeadEnquiryModal from "@/components/LeadEnquiryModal";
import LineSidebar from "@/components/LineSidebar";
import LogoLoop from "@/components/LogoLoop";
import Link from "next/link";
import Image from "next/image";
import { 
  Building2,
  Briefcase, 
  ArrowRight,
  CheckCircle2,
  Filter,
  Sparkles,
  Search,
  UserCheck,
  SearchX,
  Quote,
  MessageSquare,
  X,
  Plus,
  Minus
} from "lucide-react";

// All Directory Placements filterable by IT Domain / Tech Specialization
const Categories = [
  { id: "all", label: "All IT Domains" },
  { id: "data_engineering", label: "Data Engineering" },
  { id: "data_analytics", label: "Data Analytics" },
  { id: "data_science", label: "Data Science" },
  { id: "ai_ml", label: "AI & Machine Learning" },
  { id: "deep_learning", label: "Deep Learning (DL)" },
  { id: "pyspark_bigdata", label: "PySpark & Big Data" },
  { id: "cloud_snowflake", label: "Cloud & Snowflake" }
];

const AllPlacements = [
  {
    id: 1,
    category: "data_engineering",
    name: "Siddharth Bhoite",
    domain: "Data Engineering",
    placedRole: "Associate Data Engineer",
    company: "TCS",
    package: "8.5 LPA",
    hike: "140% Hike",
    image: "/place1.png",
    skills: "PySpark, Databricks, SQL"
  },
  {
    id: 2,
    category: "pyspark_bigdata",
    name: "Priya Sharma",
    domain: "PySpark & Big Data",
    placedRole: "Big Data PySpark Engineer",
    company: "Infosys",
    package: "10.2 LPA",
    hike: "110% Hike",
    image: "/place2.png",
    skills: "AWS Glue, PySpark, Airflow"
  },
  {
    id: 3,
    category: "cloud_snowflake",
    name: "Rahul Deshmukh",
    domain: "Cloud & Snowflake",
    placedRole: "Cloud Data Engineer",
    company: "Cognizant",
    package: "7.8 LPA",
    hike: "Direct Campus",
    image: "/place3.jpeg",
    skills: "Snowflake, SQL, Databricks"
  },
  {
    id: 4,
    category: "analytics_etl",
    name: "Ananya Patil",
    domain: "Data Analytics & ETL",
    placedRole: "Data Analyst",
    company: "Capgemini",
    package: "7.2 LPA",
    hike: "120% Hike",
    image: "/students1.jpeg",
    skills: "Python, SQL, Power BI"
  },
  {
    id: 5,
    category: "analytics_etl",
    name: "Vikram Kulkarni",
    domain: "Data Analytics & ETL",
    placedRole: "ETL Developer",
    company: "Wipro",
    package: "8.0 LPA",
    hike: "135% Hike",
    image: "/students2.jpeg",
    skills: "Airflow, Databricks, PySpark"
  },
  {
    id: 6,
    category: "data_engineering",
    name: "Snehal Shinde",
    domain: "Data Engineering",
    placedRole: "Junior Data Engineer",
    company: "LTIMindtree",
    package: "9.0 LPA",
    hike: "115% Hike",
    image: "/students2.jpeg",
    skills: "PySpark, SQL, AWS"
  },
  {
    id: 7,
    category: "pyspark_bigdata",
    name: "Durvesh Bhagate",
    domain: "PySpark & Big Data",
    placedRole: "Data Pipeline Engineer",
    company: "Tech Mahindra",
    package: "8.2 LPA",
    hike: "125% Hike",
    image: "/place1.png",
    skills: "PySpark, Hadoop, Hive"
  },
  {
    id: 8,
    category: "data_engineering",
    name: "Alwin Raj",
    domain: "Data Engineering",
    placedRole: "Data Engineer Intern",
    company: "Accenture",
    package: "7.5 LPA",
    hike: "100% Hike",
    image: "/place3.jpeg",
    skills: "Python, Databricks, SQL"
  },
  {
    id: 9,
    category: "pyspark_bigdata",
    name: "Nikhil Joshi",
    domain: "PySpark & Big Data",
    placedRole: "Junior Data Engineer",
    company: "Persistent Systems",
    package: "8.8 LPA",
    hike: "150% Hike",
    image: "/place1.png",
    skills: "PySpark, AWS Glue, Airflow"
  },
  {
    id: 10,
    category: "data_science",
    name: "Pooja Mehta",
    domain: "Data Science",
    placedRole: "Data Scientist",
    company: "Deloitte",
    package: "9.2 LPA",
    hike: "130% Hike",
    image: "/place2.png",
    skills: "Python, Machine Learning, Statistics"
  },
  {
    id: 11,
    category: "ai_ml",
    name: "Tanmay Solanki",
    domain: "AI & Machine Learning",
    placedRole: "AI / ML Engineer",
    company: "Microsoft",
    package: "14.5 LPA",
    hike: "160% Hike",
    image: "/place3.jpeg",
    skills: "Scikit-Learn, MLOps, PyTorch"
  },
  {
    id: 12,
    category: "deep_learning",
    name: "Rohan Jagtap",
    domain: "Deep Learning (DL)",
    placedRole: "Computer Vision & DL Specialist",
    company: "NVIDIA / Zensar",
    package: "12.8 LPA",
    hike: "140% Hike",
    image: "/students1.jpeg",
    skills: "TensorFlow, OpenCV, CNN / Transformers"
  }
];

// Placement FAQs Data (matching screenshot layout)
const PlacementFaqs = [
  {
    id: 1,
    question: "Does JVM Institute guarantee placement?",
    answer: "Yes! We offer 100% Placement Support with unlimited interview calls across 150+ corporate hiring partners in Pune, Bangalore, Hyderabad, and Mumbai until you get placed."
  },
  {
    id: 2,
    question: "What salary can I expect after completing a course at JVM Institute?",
    answer: "Our Data Engineering & PySpark graduates receive average starting packages ranging between ₹6.5 LPA to ₹12.5 LPA, with career transition hikes up to 150%."
  },
  {
    id: 3,
    question: "Which companies hire from JVM Institute?",
    answer: "150+ top MNCs and product startups hire our students — including Infosys, TCS, Wipro, Cognizant, Accenture, Capgemini, LTIMindtree, Persistent, Hexaware, Mphasis, Tech Mahindra, Zensar, and funded startups."
  },
  {
    id: 4,
    question: "How long does placement take after course completion?",
    answer: "Most students receive job offers within 30 to 60 days of course completion after passing our 1:1 technical mock interviews and resume preparation."
  },
  {
    id: 5,
    question: "Are these placements real? How can I verify?",
    answer: "Yes, 100% real and verified. You can explore placed student profiles, company offer details, and connect directly with our alumni on LinkedIn or visit our Pune campus."
  },
  {
    id: 6,
    question: "Can non-IT students get placed through JVM Institute?",
    answer: "Absolutely! Over 45% of our placed students come from non-IT backgrounds (B.Sc, B.Com, Mechanical, E&TC). Our zero-to-hero curriculum covers Python and SQL from absolute scratch."
  },
  {
    id: 7,
    question: "What is the placement process at JVM Institute?",
    answer: "Our 4-step process includes: 1) Industry Curriculum & Live Labs, 2) Resume & LinkedIn Optimization, 3) 1:1 Mock Technical Interviews, and 4) Direct MNC Placement Drives & Referrals."
  }
];

export default function PlacementsPage() {
  const [activeTab, setActiveTab] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedStudent, setSelectedStudent] = useState<typeof AllPlacements[0] | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(3); // Default open FAQ #3 as in reference image

  const filteredPlacements = AllPlacements.filter((student) => {
    const matchesTab = activeTab === "all" || student.category === activeTab;
    const matchesQuery = 
      student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.placedRole.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.skills.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesQuery;
  });

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAFC] dark:bg-[#0B0F19] transition-colors duration-300">
      <Navbar />
      <LeadEnquiryModal />

      <main className="flex-grow">
        
        {/* Section 1: Hero Banner with Home Page Ambient Glow & Wavy Ribbon Overlays */}
        <section className="relative overflow-hidden bg-[#FAFAFC] dark:bg-[#0B0F19] py-12 md:py-20 transition-colors duration-300">
          
          {/* Background Ambient Glows */}
          <div className="ambient-glow w-[500px] h-[500px] bg-[#1E2B88] dark:bg-[#4F46E5] top-[-10%] left-[-10%] opacity-15 pointer-events-none"></div>
          <div className="ambient-glow w-[400px] h-[400px] bg-[#E01E6A] dark:bg-[#BE185D] bottom-[-10%] right-[-5%] opacity-10 pointer-events-none"></div>

          {/* Decorative Wavy Gradient Ribbons on the Right Edge */}
          <div className="absolute top-0 right-0 bottom-0 w-1/3 hidden lg:block pointer-events-none opacity-40">
            <svg 
              className="absolute right-0 top-0 bottom-0 h-full w-48 text-[#E01E6A] opacity-30" 
              viewBox="0 0 100 100" 
              preserveAspectRatio="none"
            >
              <path d="M100,0 C40,25 80,75 100,100 L100,100 L100,0 Z" fill="currentColor" />
            </svg>
            <svg 
              className="absolute right-0 top-0 bottom-0 h-full w-40 text-[#1E2B88]" 
              viewBox="0 0 100 100" 
              preserveAspectRatio="none"
            >
              <path d="M100,0 C30,30 70,80 100,100 L100,100 L100,0 Z" fill="currentColor" />
            </svg>
          </div>

          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left Column: Heading, Subtext & CTA Action Buttons */}
              <div className="lg:col-span-7 space-y-6 text-left">
                
                {/* Launch Your Career Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-xs font-black text-purple-700 dark:text-purple-300 uppercase tracking-widest shadow-xs">
                  <Sparkles className="w-4 h-4 text-[#E01E6A]" /> Launch Your Career
                </div>
                
                {/* Hero Headline */}
                <div className="space-y-3">
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-heading text-slate-900 dark:text-white tracking-tight leading-[1.1]">
                    GO <span className="jvm-gradient-text uppercase">CONFIDENTLY</span> IN THE DIRECTION OF <span className="jvm-gradient-text uppercase">YOUR DREAMS</span>
                  </h1>
                  <div className="h-1.5 w-32 bg-gradient-to-r from-[#1E2B88] via-[#7C248C] to-[#E01E6A] rounded-full"></div>
                </div>

                {/* Subtitle / Quote */}
                <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg font-medium leading-relaxed max-w-xl">
                  Transform your career with live PySpark labs, real ETL pipelines, and Databricks mastery. Placements guaranteed across all educational backgrounds.
                </p>

                {/* CTA Buttons */}
                <div className="pt-4 flex flex-wrap items-center gap-4">
                  <Link
                    href="/contact-us"
                    className="jvm-gradient-bg text-white px-8 py-4 rounded-full text-sm font-bold shadow-xl hover:opacity-95 transition-all flex items-center gap-2.5 group"
                  >
                    <Briefcase className="w-4 h-4" /> Registration <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    href="#placements-grid"
                    className="bg-white dark:bg-slate-800/90 text-slate-800 dark:text-slate-100 border border-slate-200 dark:border-slate-700/80 px-7 py-4 rounded-full text-sm font-bold shadow-md hover:bg-slate-50 dark:hover:bg-slate-700 transition-all flex items-center gap-2"
                  >
                    <Sparkles className="w-4 h-4 text-amber-500" /> Testimonial
                  </Link>
                </div>

              </div>

              {/* Right Column: Circular Framed Graduate Photo Illustration (Matching User Screenshot & Website Theme) */}
              <div className="lg:col-span-5 flex justify-center relative">
                
                {/* Decorative Glowing Rings Background */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl pointer-events-none transform scale-90"></div>
                
                {/* Outer Circular Frame Container */}
                <div className="relative w-80 h-80 sm:w-96 sm:h-96 rounded-full border-4 border-purple-300/80 dark:border-purple-800/80 p-3 shadow-2xl bg-white/40 dark:bg-slate-900/40 backdrop-blur-md ring-2 ring-purple-500/20">
                  <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-purple-400/90 shadow-inner bg-slate-100 dark:bg-slate-800">
                    <Image
                      src="/place3.jpeg"
                      alt="Rahul Deshmukh - Placed Alumni"
                      fill
                      className="object-cover object-top scale-105"
                      priority
                    />
                  </div>

                  {/* Sparkle Badge Overlay */}
                  <div className="absolute top-2 right-2 bg-gradient-to-r from-[#1E2B88] to-[#E01E6A] text-white p-3 rounded-2xl shadow-xl border border-white/20">
                    <Sparkles className="w-5 h-5 text-amber-300" />
                  </div>
                </div>

              </div>

            </div>
          </div>
        </section>

        {/* Placement Analytics Stats Bar — matches website theme */}
        <section className="relative overflow-hidden bg-white dark:bg-[#0B0F19] border-y border-slate-200 dark:border-slate-800">
          {/* Subtle gradient glow behind */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#1E2B88]/5 via-[#7C248C]/5 to-[#E01E6A]/5 pointer-events-none" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[2px] bg-gradient-to-r from-transparent via-purple-400 to-transparent opacity-40" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[2px] bg-gradient-to-r from-transparent via-pink-400 to-transparent opacity-30" />

          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-5 relative z-10">
            <div className="flex flex-wrap items-center justify-center lg:justify-between gap-x-2 gap-y-4">

              {/* Stat 1 — Students Placed */}
              <div className="flex flex-col items-center lg:items-start group px-4">
                <span className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight leading-none">
                  1,200<span className="jvm-gradient-text">+</span>
                </span>
                <span className="text-[10px] sm:text-xs font-extrabold uppercase tracking-widest text-slate-500 dark:text-slate-400 mt-1">
                  Students Placed
                </span>
              </div>

              <div className="hidden lg:block h-12 w-px bg-slate-200 dark:bg-slate-700" />

              {/* Stat 2 — Hiring Companies */}
              <div className="flex flex-col items-center lg:items-start group px-4">
                <span className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight leading-none">
                  150<span className="jvm-gradient-text">+</span>
                </span>
                <span className="text-[10px] sm:text-xs font-extrabold uppercase tracking-widest text-slate-500 dark:text-slate-400 mt-1">
                  Hiring Companies
                </span>
              </div>

              <div className="hidden lg:block h-12 w-px bg-slate-200 dark:bg-slate-700" />

              {/* Stat 3 — Placement Support */}
              <div className="flex flex-col items-center lg:items-start group px-4">
                <span className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight leading-none">
                  100<span className="jvm-gradient-text">%</span>
                </span>
                <span className="text-[10px] sm:text-xs font-extrabold uppercase tracking-widest text-slate-500 dark:text-slate-400 mt-1">
                  Placement Support
                </span>
              </div>

              <div className="hidden lg:block h-12 w-px bg-slate-200 dark:bg-slate-700" />

              {/* Stat 4 — Avg Package (KEY STAT) */}
              <div className="flex flex-col items-center lg:items-start group px-4">
                <span className="text-3xl sm:text-4xl font-black tracking-tight leading-none jvm-gradient-text">
                  ₹10–25 LPA
                </span>
                <span className="text-[10px] sm:text-xs font-extrabold uppercase tracking-widest text-slate-500 dark:text-slate-400 mt-1">
                  Avg Package Range
                </span>
              </div>

              <div className="hidden lg:block h-12 w-px bg-slate-200 dark:bg-slate-700" />

              {/* Stat 5 — Google Reviews */}
              <div className="flex flex-col items-center lg:items-start px-4">
                <div className="flex items-center gap-2">
                  {/* Google G Icon */}
                  <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center shrink-0 shadow">
                    <svg viewBox="0 0 24 24" className="w-4 h-4" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                    </svg>
                  </div>
                  <span className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight leading-none">4.9</span>
                  <div className="flex flex-col">
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-3 h-3 text-amber-400 fill-amber-400" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                      ))}
                    </div>
                    <span className="text-[9px] text-slate-500 dark:text-slate-400 font-bold mt-0.5">Google Reviews</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Section 3: Filterable Placement Directory by Category with Interactive LineSidebar */}
        <section className="py-16 md:py-24 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 bg-[#FAFAFC] dark:bg-[#0B0F19]">
          
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-heading">
              Latest Placements Across IT Domains
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-base font-medium">
              Select an IT specialization domain to explore alumni success stories:
            </p>
          </div>



          {/* Live Search & Filter Bar */}
          <div className="max-w-xl mx-auto mb-10">
            <div className="relative">
              <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search by student name, company (TCS, Infosys...), role, or tech stack..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-10 py-3.5 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 shadow-md transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>

          {/* Interactive Filter Pills/Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
            {Categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 shadow-xs flex items-center gap-2 ${
                  activeTab === cat.id
                    ? "jvm-gradient-bg text-white shadow-md scale-105"
                    : "bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-purple-50 dark:hover:bg-slate-700"
                }`}
              >
                <Filter className="w-3.5 h-3.5" />
                {cat.label}
              </button>
            ))}
          </div>

          {/* Empty State */}
          {filteredPlacements.length === 0 && (
            <div className="text-center py-12 space-y-3 bg-white dark:bg-slate-900/60 rounded-3xl border border-slate-200 dark:border-slate-800 max-w-md mx-auto">
              <SearchX className="w-10 h-10 text-slate-400 mx-auto" />
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">No Alumni Matches Found</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 px-6">
                Try searching for alternate keywords like &quot;PySpark&quot;, &quot;Databricks&quot;, or &quot;TCS&quot;.
              </p>
              <button
                onClick={() => { setSearchQuery(""); setActiveTab("all"); }}
                className="text-xs font-bold text-purple-600 dark:text-purple-400 hover:underline pt-1"
              >
                Reset Search Filters
              </button>
            </div>
          )}

          {/* Placements Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 max-w-[1360px] mx-auto">
                {filteredPlacements.map((student) => (
                  <div 
                    key={student.id}
                    className="bg-gradient-to-br from-purple-50/90 via-pink-50/80 to-purple-100/90 dark:from-[#1E1B4B]/90 dark:via-[#31103F]/90 dark:to-[#1E1B4B]/90 backdrop-blur-2xl border border-purple-200/80 dark:border-purple-800/80 rounded-[30px] p-5 shadow-xl hover:shadow-2xl hover:shadow-pink-500/10 hover:-translate-y-2.5 transition-all duration-500 flex flex-col justify-between group relative overflow-hidden ring-1 ring-purple-500/10 dark:ring-pink-500/20 cursor-pointer"
                    onClick={() => setSelectedStudent(student)}
                  >
                    {/* Decorative Top Gradient Accent Bar */}
                    <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#1E2B88] via-[#7C248C] to-[#E01E6A] opacity-90 group-hover:opacity-100 group-hover:h-2 transition-all duration-300"></div>

                    <div className="space-y-4">
                      {/* Student Candidate Photo (Prominent & Clear) */}
                      <div className="relative w-full h-52 rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-800 shadow-md">
                        <Image
                          src={student.image}
                          alt={student.name}
                          fill
                          className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                          priority={student.id <= 4}
                        />
                        
                        {/* Light Gradient Overlay only at bottom for company text readability */}
                        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent z-0"></div>

                        {/* Verified Placement Badge */}
                        <div className="absolute top-3 left-3 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md px-3 py-1 rounded-full border border-slate-200/80 dark:border-slate-700/80 shadow-md flex items-center gap-1.5 z-10">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 fill-emerald-500/20" />
                          <span className="text-[10px] font-black text-slate-900 dark:text-white uppercase tracking-wider">Verified</span>
                        </div>

                        {/* Salary Package Badge */}
                        <div className="absolute top-3 right-3 bg-gradient-to-r from-emerald-500 to-teal-600 text-white text-xs font-black px-3.5 py-1 rounded-full shadow-lg border border-emerald-400/40">
                          {student.package}
                        </div>

                        {/* Bottom Overlay Info (Company + Hike) */}
                        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white z-10">
                          <span className="text-xs font-extrabold bg-slate-950/85 backdrop-blur-md px-3 py-1 rounded-xl border border-white/20 flex items-center gap-1.5 shadow-sm">
                            <Building2 className="w-3.5 h-3.5 text-purple-400" /> {student.company}
                          </span>
                          <span className="text-[11px] font-black bg-gradient-to-r from-amber-400 to-yellow-500 text-slate-950 px-2.5 py-0.5 rounded-lg shadow-sm border border-amber-300">
                            {student.hike}
                          </span>
                        </div>
                      </div>

                      {/* Student Details */}
                      <div className="space-y-2 pt-1">
                        <div className="flex items-center justify-between">
                          <h3 className="text-xl font-bold text-slate-800 dark:text-white font-heading group-hover:text-[#1E2B88] dark:group-hover:text-purple-300 transition-colors">
                            {student.name}
                          </h3>
                        </div>

                        <p className="text-xs font-semibold text-purple-700 dark:text-purple-300 flex items-center gap-1 bg-purple-50 dark:bg-purple-950/60 px-2.5 py-1 rounded-lg border border-purple-200 dark:border-purple-800 w-fit">
                          <Sparkles className="w-3.5 h-3.5 text-[#E01E6A] shrink-0" /> {student.domain}
                        </p>

                        <p className="text-xs font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-1.5 pt-0.5">
                          <Briefcase className="w-4 h-4 text-[#1E2B88] dark:text-purple-400 shrink-0" /> 
                          <span>{student.placedRole}</span>
                        </p>
                      </div>
                    </div>

                    {/* Tech Stack Chips & Interactive Profile Button Footer */}
                    <div className="pt-4 border-t border-slate-200/80 dark:border-slate-800/80 mt-4 space-y-3">
                      <div className="space-y-1">
                        <span className="text-[10px] uppercase tracking-wider font-semibold text-slate-600 dark:text-slate-400 block">
                          Core Tech Stack
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {student.skills.split(", ").map((skill, sIdx) => (
                            <span 
                              key={sIdx} 
                              className="text-[11px] font-semibold bg-slate-100/90 dark:bg-slate-800/90 text-slate-700 dark:text-slate-200 px-2.5 py-1 rounded-lg border border-slate-200/80 dark:border-slate-700/80 shadow-2xs group-hover:border-purple-300 dark:group-hover:border-purple-700 transition-colors"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                      <button className="w-auto mx-auto px-4 py-1.5 rounded-full jvm-gradient-bg text-white text-[11px] font-bold transition-all duration-300 flex items-center justify-center gap-1 shadow-sm hover:opacity-95 hover:scale-[1.02]">
                        <UserCheck className="w-3 h-3" /> View Placement Story
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Our Alumni Works At - Multi-Row Bare Logo Ticker (same as home page hiring partners) */}
              <div className="mt-20 max-w-[1360px] mx-auto">
                
                {/* Section Header */}
                <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
                  <span className="text-xs font-black text-[#1E2B88] dark:text-purple-400 uppercase tracking-widest bg-blue-50 dark:bg-purple-950/60 px-3.5 py-1.5 rounded-full border border-blue-200 dark:border-purple-800">
                    Our Hiring Network
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-slate-900 dark:text-white tracking-tight">
                    Our Alumni <span className="jvm-gradient-text">Works At</span>
                  </h3>
                  <p className="text-xs sm:text-sm font-semibold text-slate-600 dark:text-slate-400">
                    Over 1,200+ students placed in top multinational IT corporations &amp; high-growth startups
                  </p>
                </div>

                {/* 4 Rows of bare floating logos — no cards, no text, no borders — logos merge with bg */}
                <div className="relative overflow-hidden space-y-6 py-4">

                  {/* Ambient glow accents */}
                  <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
                  <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl pointer-events-none" />

                  {/* Row 1 → Left */}
                  <div className="relative z-10">
                    <LogoLoop
                      logos={[
                        { node: <div className="flex items-center justify-center p-2 filter drop-shadow-md hover:scale-125 transition-transform duration-300 cursor-pointer"><Image src="/react.png" alt="Company Logo" width={72} height={72} className="object-contain" /></div> },
                        { node: <div className="flex items-center justify-center p-2 filter drop-shadow-md hover:scale-125 transition-transform duration-300 cursor-pointer"><Image src="/react.png" alt="Company Logo" width={72} height={72} className="object-contain" /></div> },
                        { node: <div className="flex items-center justify-center p-2 filter drop-shadow-md hover:scale-125 transition-transform duration-300 cursor-pointer"><Image src="/react.png" alt="Company Logo" width={72} height={72} className="object-contain" /></div> },
                        { node: <div className="flex items-center justify-center p-2 filter drop-shadow-md hover:scale-125 transition-transform duration-300 cursor-pointer"><Image src="/react.png" alt="Company Logo" width={72} height={72} className="object-contain" /></div> },
                        { node: <div className="flex items-center justify-center p-2 filter drop-shadow-md hover:scale-125 transition-transform duration-300 cursor-pointer"><Image src="/react.png" alt="Company Logo" width={72} height={72} className="object-contain" /></div> },
                        { node: <div className="flex items-center justify-center p-2 filter drop-shadow-md hover:scale-125 transition-transform duration-300 cursor-pointer"><Image src="/react.png" alt="Company Logo" width={72} height={72} className="object-contain" /></div> },
                        { node: <div className="flex items-center justify-center p-2 filter drop-shadow-md hover:scale-125 transition-transform duration-300 cursor-pointer"><Image src="/react.png" alt="Company Logo" width={72} height={72} className="object-contain" /></div> },
                        { node: <div className="flex items-center justify-center p-2 filter drop-shadow-md hover:scale-125 transition-transform duration-300 cursor-pointer"><Image src="/react.png" alt="Company Logo" width={72} height={72} className="object-contain" /></div> },
                      ]}
                      speed={60}
                      direction="left"
                      logoHeight={72}
                      gap={52}
                      pauseOnHover={true}
                      scaleOnHover={true}
                      fadeOut={true}
                      ariaLabel="Alumni Company Logos Row 1"
                    />
                  </div>

                  {/* Row 2 → Right (alternate) */}
                  <div className="relative z-10">
                    <LogoLoop
                      logos={[
                        { node: <div className="flex items-center justify-center p-2 filter drop-shadow-md hover:scale-125 transition-transform duration-300 cursor-pointer"><Image src="/react.png" alt="Company Logo" width={72} height={72} className="object-contain" /></div> },
                        { node: <div className="flex items-center justify-center p-2 filter drop-shadow-md hover:scale-125 transition-transform duration-300 cursor-pointer"><Image src="/react.png" alt="Company Logo" width={72} height={72} className="object-contain" /></div> },
                        { node: <div className="flex items-center justify-center p-2 filter drop-shadow-md hover:scale-125 transition-transform duration-300 cursor-pointer"><Image src="/react.png" alt="Company Logo" width={72} height={72} className="object-contain" /></div> },
                        { node: <div className="flex items-center justify-center p-2 filter drop-shadow-md hover:scale-125 transition-transform duration-300 cursor-pointer"><Image src="/react.png" alt="Company Logo" width={72} height={72} className="object-contain" /></div> },
                        { node: <div className="flex items-center justify-center p-2 filter drop-shadow-md hover:scale-125 transition-transform duration-300 cursor-pointer"><Image src="/react.png" alt="Company Logo" width={72} height={72} className="object-contain" /></div> },
                        { node: <div className="flex items-center justify-center p-2 filter drop-shadow-md hover:scale-125 transition-transform duration-300 cursor-pointer"><Image src="/react.png" alt="Company Logo" width={72} height={72} className="object-contain" /></div> },
                        { node: <div className="flex items-center justify-center p-2 filter drop-shadow-md hover:scale-125 transition-transform duration-300 cursor-pointer"><Image src="/react.png" alt="Company Logo" width={72} height={72} className="object-contain" /></div> },
                        { node: <div className="flex items-center justify-center p-2 filter drop-shadow-md hover:scale-125 transition-transform duration-300 cursor-pointer"><Image src="/react.png" alt="Company Logo" width={72} height={72} className="object-contain" /></div> },
                      ]}
                      speed={55}
                      direction="right"
                      logoHeight={72}
                      gap={52}
                      pauseOnHover={true}
                      scaleOnHover={true}
                      fadeOut={true}
                      ariaLabel="Alumni Company Logos Row 2"
                    />
                  </div>

                  {/* Row 3 → Left */}
                  <div className="relative z-10">
                    <LogoLoop
                      logos={[
                        { node: <div className="flex items-center justify-center p-2 filter drop-shadow-md hover:scale-125 transition-transform duration-300 cursor-pointer"><Image src="/react.png" alt="Company Logo" width={72} height={72} className="object-contain" /></div> },
                        { node: <div className="flex items-center justify-center p-2 filter drop-shadow-md hover:scale-125 transition-transform duration-300 cursor-pointer"><Image src="/react.png" alt="Company Logo" width={72} height={72} className="object-contain" /></div> },
                        { node: <div className="flex items-center justify-center p-2 filter drop-shadow-md hover:scale-125 transition-transform duration-300 cursor-pointer"><Image src="/react.png" alt="Company Logo" width={72} height={72} className="object-contain" /></div> },
                        { node: <div className="flex items-center justify-center p-2 filter drop-shadow-md hover:scale-125 transition-transform duration-300 cursor-pointer"><Image src="/react.png" alt="Company Logo" width={72} height={72} className="object-contain" /></div> },
                        { node: <div className="flex items-center justify-center p-2 filter drop-shadow-md hover:scale-125 transition-transform duration-300 cursor-pointer"><Image src="/react.png" alt="Company Logo" width={72} height={72} className="object-contain" /></div> },
                        { node: <div className="flex items-center justify-center p-2 filter drop-shadow-md hover:scale-125 transition-transform duration-300 cursor-pointer"><Image src="/react.png" alt="Company Logo" width={72} height={72} className="object-contain" /></div> },
                        { node: <div className="flex items-center justify-center p-2 filter drop-shadow-md hover:scale-125 transition-transform duration-300 cursor-pointer"><Image src="/react.png" alt="Company Logo" width={72} height={72} className="object-contain" /></div> },
                        { node: <div className="flex items-center justify-center p-2 filter drop-shadow-md hover:scale-125 transition-transform duration-300 cursor-pointer"><Image src="/react.png" alt="Company Logo" width={72} height={72} className="object-contain" /></div> },
                      ]}
                      speed={65}
                      direction="left"
                      logoHeight={72}
                      gap={52}
                      pauseOnHover={true}
                      scaleOnHover={true}
                      fadeOut={true}
                      ariaLabel="Alumni Company Logos Row 3"
                    />
                  </div>

                  {/* Row 4 → Right (alternate) */}
                  <div className="relative z-10">
                    <LogoLoop
                      logos={[
                        { node: <div className="flex items-center justify-center p-2 filter drop-shadow-md hover:scale-125 transition-transform duration-300 cursor-pointer"><Image src="/react.png" alt="Company Logo" width={72} height={72} className="object-contain" /></div> },
                        { node: <div className="flex items-center justify-center p-2 filter drop-shadow-md hover:scale-125 transition-transform duration-300 cursor-pointer"><Image src="/react.png" alt="Company Logo" width={72} height={72} className="object-contain" /></div> },
                        { node: <div className="flex items-center justify-center p-2 filter drop-shadow-md hover:scale-125 transition-transform duration-300 cursor-pointer"><Image src="/react.png" alt="Company Logo" width={72} height={72} className="object-contain" /></div> },
                        { node: <div className="flex items-center justify-center p-2 filter drop-shadow-md hover:scale-125 transition-transform duration-300 cursor-pointer"><Image src="/react.png" alt="Company Logo" width={72} height={72} className="object-contain" /></div> },
                        { node: <div className="flex items-center justify-center p-2 filter drop-shadow-md hover:scale-125 transition-transform duration-300 cursor-pointer"><Image src="/react.png" alt="Company Logo" width={72} height={72} className="object-contain" /></div> },
                        { node: <div className="flex items-center justify-center p-2 filter drop-shadow-md hover:scale-125 transition-transform duration-300 cursor-pointer"><Image src="/react.png" alt="Company Logo" width={72} height={72} className="object-contain" /></div> },
                        { node: <div className="flex items-center justify-center p-2 filter drop-shadow-md hover:scale-125 transition-transform duration-300 cursor-pointer"><Image src="/react.png" alt="Company Logo" width={72} height={72} className="object-contain" /></div> },
                        { node: <div className="flex items-center justify-center p-2 filter drop-shadow-md hover:scale-125 transition-transform duration-300 cursor-pointer"><Image src="/react.png" alt="Company Logo" width={72} height={72} className="object-contain" /></div> },
                      ]}
                      speed={50}
                      direction="right"
                      logoHeight={72}
                      gap={52}
                      pauseOnHover={true}
                      scaleOnHover={true}
                      fadeOut={true}
                      ariaLabel="Alumni Company Logos Row 4"
                    />
                  </div>

                </div>
              </div>
            </section>

        {/* Alumni Story Detail Modal Popup */}
        {selectedStudent && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in">
            <div className="bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl relative space-y-6">
              
              <button 
                onClick={() => setSelectedStudent(null)}
                className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-4">
                <div className="relative w-20 h-20 rounded-2xl overflow-hidden border-2 border-purple-500/40 shrink-0">
                  <Image
                    src={selectedStudent.image}
                    alt={selectedStudent.name}
                    fill
                    className="object-cover object-top"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-extrabold text-slate-900 dark:text-white font-heading">
                    {selectedStudent.name}
                  </h3>
                  <p className="text-xs font-extrabold text-purple-600 dark:text-purple-400 mt-0.5">
                    {selectedStudent.placedRole}
                  </p>
                  <p className="text-xs font-bold text-slate-700 dark:text-slate-300 mt-1">
                    Placed at <strong className="text-slate-900 dark:text-white">{selectedStudent.company}</strong> ({selectedStudent.package})
                  </p>
                </div>
              </div>

              <div className="space-y-3 bg-slate-50 dark:bg-slate-900/60 p-4 rounded-2xl border border-slate-100 dark:border-slate-800/80 text-xs">
                <div className="flex items-center justify-between text-slate-600 dark:text-slate-300">
                  <span className="font-medium">Specialization:</span>
                  <strong className="text-purple-600 dark:text-purple-400 font-extrabold">{selectedStudent.domain}</strong>
                </div>
                <div className="flex items-center justify-between text-slate-600 dark:text-slate-300">
                  <span className="font-medium">Salary Hike:</span>
                  <strong className="text-emerald-600 dark:text-emerald-400 font-extrabold">{selectedStudent.hike}</strong>
                </div>
                <div className="flex items-center justify-between text-slate-600 dark:text-slate-300">
                  <span className="font-medium">Core Skills:</span>
                  <strong className="text-slate-900 dark:text-white">{selectedStudent.skills}</strong>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-purple-500/10 border border-purple-500/20 text-xs space-y-2">
                <div className="flex items-center gap-1.5 font-bold text-purple-700 dark:text-purple-300">
                  <Quote className="w-4 h-4 text-purple-500" /> Student Growth Advice:
                </div>
                <p className="text-slate-600 dark:text-slate-300 italic leading-relaxed">
                  &quot;The hands-on PySpark labs & ETL mock interviews at JVM Institute gave me 100% confidence to clear {selectedStudent.company}&apos;s technical rounds.&quot;
                </p>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <Link
                  href="/contact-us"
                  onClick={() => setSelectedStudent(null)}
                  className="flex-1 jvm-gradient-bg text-white py-3 rounded-xl text-xs font-bold text-center shadow-md flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" /> Book Placement Career Call
                </Link>
                <button
                  onClick={() => setSelectedStudent(null)}
                  className="px-5 py-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-bold text-center"
                >
                  Close
                </button>
              </div>

            </div>
          </div>
        )}

        {/* Section 4.5: Course Eligibility, Career Roles & Hiring Companies Overview (Matching Reference Screenshot) */}
        <section className="py-16 md:py-24 bg-white dark:bg-[#0B0F19] border-y border-slate-200/80 dark:border-slate-800/80">
          <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
              <span className="text-xs font-black text-[#1E2B88] dark:text-purple-400 uppercase tracking-widest bg-blue-50 dark:bg-purple-950/60 px-3.5 py-1.5 rounded-full border border-blue-200 dark:border-purple-800">
                Career Roadmap & Opportunities
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900 dark:text-white tracking-tight">
                Course Eligibility, Roles &amp; Top Recruiting Companies
              </h2>
              <p className="text-slate-600 dark:text-slate-300 text-base font-medium">
                Comprehensive overview for Data Engineering, Data Analytics, Data Science, AI, ML &amp; Deep Learning programs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
              
              {/* Column 1: Eligibility Criteria */}
              <div className="bg-slate-50/90 dark:bg-[#0F172A]/90 border border-slate-200 dark:border-slate-800 rounded-3xl p-7 flex flex-col justify-between shadow-sm hover:shadow-md transition-all">
                <div className="space-y-4">
                  <h3 className="text-lg font-bold font-heading text-[#1E2B88] dark:text-purple-400 border-b border-slate-200 dark:border-slate-800 pb-4 text-center">
                    Course Eligibility Criteria:
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-normal mb-2">
                    There is a simple yet crucial criterion for getting enrolled in JVM Institute&apos;s Data Engineering, Data Science, AI &amp; ML classes in Pune:
                  </p>
                  <div className="pt-2 px-1">
                    <LineSidebar
                      items={[
                        "A bachelor's degree (B.E, B.Tech, B.Sc, B.Com, BCA) with 50%+ marks",
                        "2+ years of non-IT or domain experience preferred (optional)",
                        "Freshers from any stream can also pursue this course"
                      ]}
                      accentColor="#A855F7"
                      textColor="#334155"
                      markerColor="#F59E0B"
                      showIndex={false}
                      showMarker={true}
                      proximityRadius={150}
                      maxShift={22}
                      markerLength={24}
                      itemGap={12}
                      fontSize={0.8}
                      smoothing={100}
                      defaultActive={null}
                    />
                  </div>
                </div>
              </div>

              {/* Column 2: Roles Available */}
              <div className="bg-slate-50/90 dark:bg-[#0F172A]/90 border border-slate-200 dark:border-slate-800 rounded-3xl p-7 flex flex-col justify-between shadow-sm hover:shadow-md transition-all">
                <div className="space-y-4">
                  <h3 className="text-lg font-bold font-heading text-[#1E2B88] dark:text-purple-400 border-b border-slate-200 dark:border-slate-800 pb-4 text-center">
                    Roles Available for Successful Candidates:
                  </h3>
                  <div className="pt-2 px-1">
                    <LineSidebar
                      items={[
                        "Data Engineer",
                        "Senior Data Engineer & PySpark Developer",
                        "Data Analyst & BI Specialist",
                        "Data Scientist",
                        "AI / Machine Learning (ML) Engineer",
                        "Deep Learning (DL) & Vision Specialist",
                        "Big Data Developer & ETL Developer",
                        "Cloud Data Architect (AWS / Snowflake)"
                      ]}
                      accentColor="#A855F7"
                      textColor="#334155"
                      markerColor="#F59E0B"
                      showIndex={false}
                      showMarker={true}
                      proximityRadius={150}
                      maxShift={22}
                      markerLength={24}
                      itemGap={12}
                      fontSize={0.8}
                      smoothing={100}
                      defaultActive={null}
                    />
                  </div>
                </div>
              </div>

              {/* Column 3: Top Hiring Companies */}
              <div className="bg-slate-50/90 dark:bg-[#0F172A]/90 border border-slate-200 dark:border-slate-800 rounded-3xl p-7 flex flex-col justify-between shadow-sm hover:shadow-md transition-all">
                <div className="space-y-4">
                  <h3 className="text-lg font-bold font-heading text-[#1E2B88] dark:text-purple-400 border-b border-slate-200 dark:border-slate-800 pb-4 text-center">
                    Our Successful Students Work At:
                  </h3>
                  <div className="pt-2 px-1">
                    <LineSidebar
                      items={[
                        "Accenture",
                        "Cognizant",
                        "Microsoft",
                        "Capgemini",
                        "Infosys",
                        "Tata Consultancy Services (TCS)",
                        "IBM & Deloitte",
                        "Wipro, LTIMindtree & Amdocs"
                      ]}
                      accentColor="#A855F7"
                      textColor="#334155"
                      markerColor="#F59E0B"
                      showIndex={false}
                      showMarker={true}
                      proximityRadius={150}
                      maxShift={22}
                      markerLength={24}
                      itemGap={12}
                      fontSize={0.8}
                      smoothing={100}
                      defaultActive={null}
                    />
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Section 5: Placement FAQ Accordion (Matching Reference Screenshot) */}
        <section className="py-16 md:py-24 bg-white dark:bg-[#0B0F19] border-b border-slate-200/80 dark:border-slate-800/80">
          <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-12 gap-12 items-start">
              
              {/* Left Column: Heading & Call to Action */}
              <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-28">
                <span className="text-xs font-black text-[#1E2B88] dark:text-purple-400 uppercase tracking-widest bg-blue-50 dark:bg-purple-950/60 px-3 py-1 rounded-full border border-blue-200 dark:border-purple-800">
                  FAQ
                </span>
                
                <h2 className="text-3xl sm:text-4xl font-black font-heading text-slate-900 dark:text-white tracking-tight leading-tight">
                  Placement questions, answered
                </h2>

                <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                  Everything you want to know about how our placement process works — before you join.
                </p>

                <div>
                  <Link
                    href="/contact-us"
                    className="inline-flex items-center gap-2 jvm-gradient-bg text-white px-7 py-3.5 rounded-xl font-extrabold text-sm shadow-lg hover:opacity-95 transition-all"
                  >
                    Talk to a Counsellor <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Right Column: Interactive Questions List */}
              <div className="lg:col-span-8 space-y-4">
                {PlacementFaqs.map((faq) => {
                  const isOpen = openFaq === faq.id;
                  return (
                    <div 
                      key={faq.id}
                      className="border-b border-slate-200/90 dark:border-slate-800 pb-5 pt-1 transition-all"
                    >
                      <button
                        onClick={() => setOpenFaq(isOpen ? null : faq.id)}
                        className="w-full text-left flex items-start justify-between gap-4 group"
                      >
                        <h3 className={`text-base sm:text-lg font-bold font-heading transition-colors ${
                          isOpen ? "text-[#1E2B88] dark:text-purple-400" : "text-slate-900 dark:text-white group-hover:text-purple-600"
                        }`}>
                          {faq.question}
                        </h3>
                        <span className="text-[#1E2B88] dark:text-purple-400 shrink-0 mt-1">
                          {isOpen ? <Minus className="w-4 h-4 font-bold" /> : <Plus className="w-4 h-4 font-bold" />}
                        </span>
                      </button>

                      {isOpen && (
                        <div className="mt-3 text-slate-600 dark:text-slate-300 text-sm leading-relaxed pr-6 animate-fade-in">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

            </div>
          </div>
        </section>

        {/* Section 5: Bottom Call To Action Banner */}
        <section className="py-16 relative overflow-hidden jvm-gradient-bg text-white">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative z-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading">
              Start Your Data Engineering Journey Today
            </h2>
            <p className="text-purple-100 text-base sm:text-lg max-w-2xl mx-auto">
              Transform your career with Pune&apos;s #1 rated Data Engineering Institute. Get 1:1 resume assistance, Databricks live labs & direct MNC placement drives.
            </p>
            <div className="pt-2 flex flex-wrap justify-center gap-4">
              <Link 
                href="/contact-us" 
                className="bg-white text-[#1E2B88] hover:bg-slate-100 px-8 py-3.5 rounded-full font-bold text-sm shadow-xl transition-all flex items-center gap-2"
              >
                Enquire Now <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}



