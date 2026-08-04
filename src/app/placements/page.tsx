"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
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

// Auto-rotating hero circle student images
const HeroCircleImages = [
  { src: "/placements/placement_5_ajinkya.jpeg", name: "Ajinkya", role: "Senior Data Engineer", company: "LTI Mindtree", pkg: "16 LPA" },
  { src: "/placements/placement_3_prathamesh.png", name: "Prathamesh", role: "Data Engineer", company: "Zorba Consulting", pkg: "13 LPA" },
  { src: "/placements/placement_1_priya.png", name: "Priya", role: "Senior Data Engineer", company: "Cymetrix", pkg: "11.54 LPA" },
  { src: "/placements/placement_2_shweta.png", name: "Shweta", role: "Software Engineer", company: "Persistent", pkg: "12.5 LPA" },
  { src: "/placements/placement_7_satyajeet.png", name: "Satyajeet", role: "Lead Software Engineer", company: "Persistent", pkg: "13.20 LPA" }
];

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

// Placement FAQs Data
const PlacementFaqs = [
  {
    id: 1,
    question: "Does JVM Institute guarantee placement?",
    answer: "Yes! We offer 100% Placement Support with unlimited interview calls across 150+ corporate hiring partners in Pune, Bangalore, Hyderabad, and Mumbai until you get placed."
  },
  {
    id: 2,
    question: "What salary can I expect after completing a course at JVM Institute?",
    answer: "Our Data Engineering & PySpark graduates receive average starting packages ranging between ₹6.5 LPA to ₹16 LPA."
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
  const [placementsList, setPlacementsList] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedStudent, setSelectedStudent] = useState<any | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(3);
  const [heroImgIndex, setHeroImgIndex] = useState(0);

  useEffect(() => {
    async function fetchPlacements() {
      try {
        const res = await fetch("/api/placements");
        const data = await res.json();
        if (data.success && data.placements) {
          setPlacementsList(data.placements);
        }
      } catch (err) {
        console.error("Error fetching live placements:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchPlacements();
  }, []);

  // Auto-rotate hero student photos every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setHeroImgIndex((prev) => (prev + 1) % HeroCircleImages.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const currentHero = HeroCircleImages[heroImgIndex];

  const filteredPlacements = placementsList.filter((student) => {
    const matchesTab = activeTab === "all" || student.category === activeTab;
    const matchesQuery = 
      student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.placedRole.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (student.skills && student.skills.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesTab && matchesQuery;
  });

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAFC] dark:bg-[#0B0F19] transition-colors duration-300">
      <Navbar />
      <LeadEnquiryModal />

      <main className="flex-grow">
        
        {/* Section 1: Hero Banner (Compact & Scaled for Mobile View) */}
        <section className="relative overflow-hidden bg-[#FAFAFC] dark:bg-[#0B0F19] py-6 sm:py-12 md:py-20 transition-colors duration-300">
          
          {/* Background Ambient Glows */}
          <div className="ambient-glow w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-[#1E2B88] dark:bg-[#4F46E5] top-[-10%] left-[-10%] opacity-15 pointer-events-none" />
          <div className="ambient-glow w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] bg-[#E01E6A] dark:bg-[#BE185D] bottom-[-10%] right-[-5%] opacity-10 pointer-events-none" />

          <div className="max-w-[1400px] mx-auto px-3.5 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center">
              
              {/* Left Column: Heading, Subtext & CTA Buttons */}
              <div className="lg:col-span-7 space-y-3 sm:space-y-6 text-left">
                
                {/* Launch Your Career Badge */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-[10px] sm:text-xs font-black text-purple-700 dark:text-purple-300 uppercase tracking-widest shadow-xs">
                  <Sparkles className="w-3.5 h-3.5 text-[#E01E6A]" /> Launch Your Career
                </div>
                
                {/* Hero Headline */}
                <div className="space-y-2 sm:space-y-3">
                  <h1 className="text-2xl xs:text-3xl sm:text-5xl lg:text-6xl font-black font-heading text-slate-900 dark:text-white tracking-tight leading-[1.15]">
                    GO <span className="jvm-gradient-text uppercase">CONFIDENTLY</span> IN THE DIRECTION OF <span className="jvm-gradient-text uppercase">YOUR DREAMS</span>
                  </h1>
                  <div className="h-1 sm:h-1.5 w-24 sm:w-32 bg-gradient-to-r from-[#1E2B88] via-[#7C248C] to-[#E01E6A] rounded-full" />
                </div>

                {/* Subtitle / Quote */}
                <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-lg font-medium leading-relaxed max-w-xl">
                  Transform your career with live PySpark labs, real ETL pipelines, and Databricks mastery. Placements guaranteed across all educational backgrounds.
                </p>

                {/* CTA Buttons */}
                <div className="pt-2 sm:pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-4">
                  <Link
                    href="/contact-us"
                    className="jvm-gradient-bg text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-xs sm:text-sm font-bold shadow-xl hover:opacity-95 transition-all flex items-center justify-center gap-2 group"
                  >
                    <Briefcase className="w-4 h-4" /> Registration <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    href="#placements-grid"
                    className="bg-white dark:bg-slate-800/90 text-slate-800 dark:text-slate-100 border border-slate-200 dark:border-slate-700/80 px-6 sm:px-7 py-3 sm:py-4 rounded-full text-xs sm:text-sm font-bold shadow-md hover:bg-slate-50 dark:hover:bg-slate-700 transition-all flex items-center justify-center gap-2"
                  >
                    <Sparkles className="w-4 h-4 text-amber-500" /> Testimonial
                  </Link>
                </div>

              </div>

              {/* Right Column: Circular Frame (Perfectly Centered on Mobile & Desktop) */}
              <div className="lg:col-span-5 flex items-center justify-center relative pt-2 sm:pt-0 w-full mx-auto text-center">
                
                {/* Stable Fixed Circle Frame */}
                <div className="relative w-44 h-44 xs:w-56 xs:h-56 sm:w-96 sm:h-96 rounded-full border-2 sm:border-4 border-purple-300/80 dark:border-purple-800/80 p-2 sm:p-3 shadow-2xl bg-white/40 dark:bg-slate-900/40 backdrop-blur-md ring-2 ring-purple-500/20 mx-auto">
                  <div className="relative w-full h-full rounded-full overflow-hidden border-2 sm:border-4 border-purple-400/90 shadow-inner bg-slate-100 dark:bg-slate-800">
                    <motion.div
                      key={heroImgIndex}
                      initial={{ opacity: 0, scale: 1.05 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.6 }}
                      className="relative w-full h-full"
                    >
                      <Image
                        src={currentHero.src}
                        alt={`${currentHero.name} - Placed Alumni`}
                        fill
                        className="object-cover object-top"
                        priority
                      />
                    </motion.div>
                  </div>

                  {/* Floating Alum Badge Pill Overlay (Centered) */}
                  <motion.div
                    key={`pill-${heroImgIndex}`}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-slate-950/95 text-white px-3 py-1.5 sm:px-5 sm:py-2 rounded-full text-[10px] sm:text-xs font-bold border border-purple-400/50 shadow-xl whitespace-nowrap z-20 text-center flex items-center justify-center gap-1.5"
                  >
                    <span>{currentHero.name}</span>
                    <span className="text-purple-400">•</span>
                    <span className="text-purple-300">{currentHero.company} ({currentHero.pkg})</span>
                  </motion.div>

                  {/* Sparkle Badge Overlay */}
                  <div className="absolute top-1 right-1 sm:top-2 sm:right-2 bg-gradient-to-r from-[#1E2B88] to-[#E01E6A] text-white p-2 sm:p-3 rounded-xl sm:rounded-2xl shadow-xl border border-white/20 z-20">
                    <Sparkles className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-amber-300" />
                  </div>
                </div>

              </div>

            </div>
          </div>
        </section>

        {/* Section 2: Placement Analytics Stats Bar (Responsive Mobile Grid) */}
        <section className="relative overflow-hidden bg-white dark:bg-[#0B0F19] border-y border-slate-200 dark:border-slate-800">
          <div className="max-w-[1400px] mx-auto px-3.5 sm:px-6 lg:px-8 py-3.5 sm:py-5 relative z-10">
            <div className="grid grid-cols-2 lg:flex items-center justify-between gap-y-4 gap-x-2">

              {/* Stat 1 — Students Placed */}
              <div className="flex flex-col items-center lg:items-start group px-2 sm:px-4">
                <span className="text-xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight leading-none">
                  1,200<span className="jvm-gradient-text">+</span>
                </span>
                <span className="text-[9px] sm:text-xs font-extrabold uppercase tracking-widest text-slate-500 dark:text-slate-400 mt-1 text-center sm:text-left">
                  Students Placed
                </span>
              </div>

              {/* Stat 2 — Hiring Companies */}
              <div className="flex flex-col items-center lg:items-start group px-2 sm:px-4">
                <span className="text-xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight leading-none">
                  150<span className="jvm-gradient-text">+</span>
                </span>
                <span className="text-[9px] sm:text-xs font-extrabold uppercase tracking-widest text-slate-500 dark:text-slate-400 mt-1 text-center sm:text-left">
                  Hiring Companies
                </span>
              </div>

              {/* Stat 3 — Placement Support */}
              <div className="flex flex-col items-center lg:items-start group px-2 sm:px-4">
                <span className="text-xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight leading-none">
                  100<span className="jvm-gradient-text">%</span>
                </span>
                <span className="text-[9px] sm:text-xs font-extrabold uppercase tracking-widest text-slate-500 dark:text-slate-400 mt-1 text-center sm:text-left">
                  Placement Support
                </span>
              </div>

              {/* Stat 4 — Avg Package */}
              <div className="flex flex-col items-center lg:items-start group px-2 sm:px-4">
                <span className="text-xl sm:text-4xl font-black tracking-tight leading-none jvm-gradient-text">
                  ₹10–25 LPA
                </span>
                <span className="text-[9px] sm:text-xs font-extrabold uppercase tracking-widest text-slate-500 dark:text-slate-400 mt-1 text-center sm:text-left">
                  Avg Package Range
                </span>
              </div>

            </div>
          </div>
        </section>

        {/* Section 3: Filterable Placement Directory (2 Cards per line on Mobile) */}
        <section id="placements-grid" className="py-8 sm:py-16 md:py-24 max-w-[1400px] mx-auto px-3.5 sm:px-6 lg:px-8 bg-[#FAFAFC] dark:bg-[#0B0F19]">
          
          <div className="text-center max-w-3xl mx-auto space-y-1.5 sm:space-y-3 mb-6 sm:mb-10">
            <h2 className="text-xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-heading">
              Latest Placements Across IT Domains
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-base font-medium">
              Select an IT specialization domain to explore alumni success stories:
            </p>
          </div>

          {/* Live Search & Filter Bar */}
          <div className="max-w-xl mx-auto mb-6 sm:mb-10">
            <div className="relative">
              <Search className="w-4 h-4 sm:w-5 sm:h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search by name, company, role, or tech stack..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-9 py-2.5 sm:py-3.5 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs sm:text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 shadow-md transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>

          {/* Interactive Horizontal Scrollable Filter Pills for Mobile */}
          <div className="flex overflow-x-auto snap-x snap-mandatory scrollbar-thin pb-2 sm:pb-0 gap-2 sm:gap-3 mb-8 sm:mb-12 justify-start sm:justify-center">
            {Categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`snap-start shrink-0 px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 shadow-xs flex items-center gap-1.5 ${
                  activeTab === cat.id
                    ? "jvm-gradient-bg text-white shadow-md scale-105"
                    : "bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-purple-50 dark:hover:bg-slate-700"
                }`}
              >
                <Filter className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
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

          {/* Placements Grid (2 Cards per line on Mobile) */}
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-7 max-w-[1360px] mx-auto">
            {filteredPlacements.map((student) => (
              <div 
                key={student.id}
                className="bg-gradient-to-br from-purple-50/90 via-pink-50/80 to-purple-100/90 dark:from-[#1E1B4B]/90 dark:via-[#31103F]/90 dark:to-[#1E1B4B]/90 backdrop-blur-2xl border border-purple-200/80 dark:border-purple-800/80 rounded-2xl sm:rounded-[30px] p-2.5 sm:p-5 shadow-md flex flex-col justify-between group relative overflow-hidden ring-1 ring-purple-500/10 dark:ring-pink-500/20 cursor-pointer"
                onClick={() => setSelectedStudent(student)}
              >
                {/* Decorative Top Accent Bar */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#1E2B88] via-[#7C248C] to-[#E01E6A]" />

                <div className="space-y-2 sm:space-y-4">
                  {/* Student Candidate Photo */}
                  <div className="relative w-full h-32 xs:h-40 sm:h-52 rounded-xl sm:rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-800 shadow-sm">
                    <Image
                      src={student.image}
                      alt={student.name}
                      fill
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      priority={student.id <= 4}
                    />
                    
                    <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent" />

                    {/* Salary Package Badge */}
                    <div className="absolute top-2 right-2 bg-gradient-to-r from-emerald-500 to-teal-600 text-white text-[9px] sm:text-xs font-black px-2 py-0.5 sm:px-3.5 sm:py-1 rounded-full shadow-md">
                      {student.package}
                    </div>

                    {/* Bottom Overlay Info (Company) */}
                    <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between text-white z-10">
                      <span className="text-[9px] sm:text-xs font-extrabold bg-slate-950/85 backdrop-blur-md px-2 py-0.5 rounded-md sm:rounded-xl flex items-center gap-1">
                        <Building2 className="w-3 h-3 text-purple-400 shrink-0" /> {student.company}
                      </span>
                    </div>
                  </div>

                  {/* Student Details */}
                  <div className="space-y-1 sm:space-y-2 pt-0.5">
                    <h3 className="text-xs sm:text-xl font-bold text-slate-800 dark:text-white font-heading truncate">
                      {student.name}
                    </h3>

                    <p className="text-[9px] sm:text-xs font-semibold text-purple-700 dark:text-purple-300 flex items-center gap-1 bg-purple-50 dark:bg-purple-950/60 px-2 py-0.5 rounded-md border border-purple-200/60 truncate">
                      <Sparkles className="w-3 h-3 text-[#E01E6A] shrink-0" /> {student.domain}
                    </p>

                    <p className="text-[9px] sm:text-xs font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-1 truncate">
                      <Briefcase className="w-3 h-3 text-[#1E2B88] dark:text-purple-400 shrink-0" /> 
                      <span className="truncate">{student.placedRole}</span>
                    </p>
                  </div>
                </div>

                {/* Profile Story Button Footer */}
                <div className="pt-2 sm:pt-4 border-t border-slate-200/80 dark:border-slate-800/80 mt-2 sm:mt-4">
                  <button className="w-full py-1 sm:py-1.5 rounded-full jvm-gradient-bg text-white text-[9px] sm:text-[11px] font-bold flex items-center justify-center gap-1 shadow-xs">
                    <UserCheck className="w-3 h-3" /> View Story
                  </button>
                </div>
              </div>
            ))}
          </div>

        </section>

        {/* Selected Student Modal Popup */}
        {selectedStudent && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in">
            <div className="bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-slate-800 rounded-3xl p-5 sm:p-8 max-w-lg w-full shadow-2xl relative space-y-4 sm:space-y-6">
              
              <button 
                onClick={() => setSelectedStudent(null)}
                className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3 sm:gap-4">
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden border-2 border-purple-500/40 shrink-0">
                  <Image
                    src={selectedStudent.image}
                    alt={selectedStudent.name}
                    fill
                    className="object-cover object-top"
                  />
                </div>
                <div>
                  <h3 className="text-base sm:text-xl font-extrabold text-slate-900 dark:text-white font-heading">
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

              <div className="space-y-2 bg-slate-50 dark:bg-slate-900/60 p-3.5 rounded-2xl border border-slate-100 dark:border-slate-800/80 text-xs">
                <div className="flex items-center justify-between text-slate-600 dark:text-slate-300">
                  <span className="font-medium">Specialization:</span>
                  <strong className="text-purple-600 dark:text-purple-400 font-extrabold">{selectedStudent.domain}</strong>
                </div>
                <div className="flex items-center justify-between text-slate-600 dark:text-slate-300">
                  <span className="font-medium">Core Skills:</span>
                  <strong className="text-slate-900 dark:text-white">{selectedStudent.skills}</strong>
                </div>
              </div>

              <div className="p-3 rounded-2xl bg-purple-500/10 border border-purple-500/20 text-xs space-y-1.5">
                <div className="flex items-center gap-1.5 font-bold text-purple-700 dark:text-purple-300">
                  <Quote className="w-4 h-4 text-purple-500" /> Student Growth Advice:
                </div>
                <p className="text-slate-600 dark:text-slate-300 italic leading-relaxed text-[11px] sm:text-xs">
                  {selectedStudent.testimonial ? `"${selectedStudent.testimonial}"` : `"The hands-on PySpark labs & ETL mock interviews at JVM Institute gave me 100% confidence to clear ${selectedStudent.company}'s technical rounds."`}
                </p>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-2.5">
                <Link
                  href="/contact-us"
                  onClick={() => setSelectedStudent(null)}
                  className="flex-1 jvm-gradient-bg text-white py-2.5 sm:py-3 rounded-xl text-xs font-bold text-center shadow-md flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" /> Book Career Call
                </Link>
                <button
                  onClick={() => setSelectedStudent(null)}
                  className="px-5 py-2.5 sm:py-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-bold text-center"
                >
                  Close
                </button>
              </div>

            </div>
          </div>
        )}

        {/* Section 4.5: Course Eligibility & Roles Overview */}
        <section className="py-8 sm:py-16 md:py-24 bg-white dark:bg-[#0B0F19] border-y border-slate-200/80 dark:border-slate-800/80">
          <div className="max-w-[1360px] mx-auto px-3.5 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-3xl mx-auto space-y-2 mb-8 sm:mb-14">
              <span className="text-[10px] sm:text-xs font-black text-[#1E2B88] dark:text-purple-400 uppercase tracking-widest bg-blue-50 dark:bg-purple-950/60 px-3.5 py-1.5 rounded-full border border-blue-200 dark:border-purple-800">
                Career Roadmap &amp; Opportunities
              </span>
              <h2 className="text-xl sm:text-4xl font-extrabold font-heading text-slate-900 dark:text-white tracking-tight">
                Course Eligibility, Roles &amp; Top Recruiting Companies
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8 items-stretch">
              
              {/* Column 1: Eligibility Criteria */}
              <div className="bg-slate-50/90 dark:bg-[#0F172A]/90 border border-slate-200 dark:border-slate-800 rounded-2xl sm:rounded-3xl p-4 sm:p-7 flex flex-col justify-between shadow-sm">
                <div className="space-y-3">
                  <h3 className="text-base sm:text-lg font-bold font-heading text-[#1E2B88] dark:text-purple-400 border-b border-slate-200 dark:border-slate-800 pb-3 text-center">
                    Course Eligibility Criteria:
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                    Criterion for enrolling in JVM Institute&apos;s Data Engineering, Data Science &amp; AI/ML classes:
                  </p>
                  <div className="pt-1 px-1">
                    <LineSidebar
                      items={[
                        "Bachelor's degree (B.E, B.Tech, B.Sc, B.Com, BCA) with 50%+ marks",
                        "2+ years domain experience preferred (optional)",
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
                      itemGap={10}
                      fontSize={0.75}
                      smoothing={100}
                      defaultActive={null}
                    />
                  </div>
                </div>
              </div>

              {/* Column 2: Roles Available */}
              <div className="bg-slate-50/90 dark:bg-[#0F172A]/90 border border-slate-200 dark:border-slate-800 rounded-2xl sm:rounded-3xl p-4 sm:p-7 flex flex-col justify-between shadow-sm">
                <div className="space-y-3">
                  <h3 className="text-base sm:text-lg font-bold font-heading text-[#1E2B88] dark:text-purple-400 border-b border-slate-200 dark:border-slate-800 pb-3 text-center">
                    Roles Available for Graduates:
                  </h3>
                  <div className="pt-1 px-1">
                    <LineSidebar
                      items={[
                        "Data Engineer",
                        "PySpark & Big Data Developer",
                        "Data Analyst & BI Specialist",
                        "Data Scientist",
                        "AI / Machine Learning Engineer",
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
                      itemGap={10}
                      fontSize={0.75}
                      smoothing={100}
                      defaultActive={null}
                    />
                  </div>
                </div>
              </div>

              {/* Column 3: Top Hiring Companies */}
              <div className="bg-slate-50/90 dark:bg-[#0F172A]/90 border border-slate-200 dark:border-slate-800 rounded-2xl sm:rounded-3xl p-4 sm:p-7 flex flex-col justify-between shadow-sm">
                <div className="space-y-3">
                  <h3 className="text-base sm:text-lg font-bold font-heading text-[#1E2B88] dark:text-purple-400 border-b border-slate-200 dark:border-slate-800 pb-3 text-center">
                    Our Successful Students Work At:
                  </h3>
                  <div className="pt-1 px-1">
                    <LineSidebar
                      items={[
                        "Accenture",
                        "Cognizant",
                        "Microsoft",
                        "Capgemini",
                        "Infosys",
                        "Tata Consultancy Services (TCS)"
                      ]}
                      accentColor="#A855F7"
                      textColor="#334155"
                      markerColor="#F59E0B"
                      showIndex={false}
                      showMarker={true}
                      proximityRadius={150}
                      maxShift={22}
                      markerLength={24}
                      itemGap={10}
                      fontSize={0.75}
                      smoothing={100}
                      defaultActive={null}
                    />
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Section 5: Placement FAQ Accordion */}
        <section className="py-8 sm:py-16 md:py-24 bg-white dark:bg-[#0B0F19] border-b border-slate-200/80 dark:border-slate-800/80">
          <div className="max-w-[1320px] mx-auto px-3.5 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-12 gap-6 sm:gap-12 items-start">
              
              {/* Left Column: Heading & CTA */}
              <div className="lg:col-span-4 space-y-3 sm:space-y-6 lg:sticky lg:top-28">
                <span className="text-[10px] sm:text-xs font-black text-[#1E2B88] dark:text-purple-400 uppercase tracking-widest bg-blue-50 dark:bg-purple-950/60 px-3 py-1 rounded-full border border-blue-200 dark:border-purple-800">
                  FAQ
                </span>
                
                <h2 className="text-xl sm:text-4xl font-black font-heading text-slate-900 dark:text-white tracking-tight leading-tight">
                  Placement questions, answered
                </h2>

                <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-base leading-relaxed">
                  Everything you want to know about how our placement process works.
                </p>

                <div>
                  <Link
                    href="/contact-us"
                    className="inline-flex items-center gap-2 jvm-gradient-bg text-white px-5 sm:px-7 py-2.5 sm:py-3.5 rounded-xl font-extrabold text-xs sm:text-sm shadow-md"
                  >
                    Talk to a Counsellor <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Right Column: Questions */}
              <div className="lg:col-span-8 space-y-3 sm:space-y-4">
                {PlacementFaqs.map((faq) => {
                  const isOpen = openFaq === faq.id;
                  return (
                    <div 
                      key={faq.id}
                      className="border-b border-slate-200/90 dark:border-slate-800 pb-3 sm:pb-5 pt-1"
                    >
                      <button
                        onClick={() => setOpenFaq(isOpen ? null : faq.id)}
                        className="w-full text-left flex items-start justify-between gap-3 group"
                      >
                        <h3 className={`text-xs sm:text-lg font-bold font-heading ${
                          isOpen ? "text-[#1E2B88] dark:text-purple-400" : "text-slate-900 dark:text-white"
                        }`}>
                          {faq.question}
                        </h3>
                        <span className="text-[#1E2B88] dark:text-purple-400 shrink-0 mt-0.5">
                          {isOpen ? <Minus className="w-4 h-4 font-bold" /> : <Plus className="w-4 h-4 font-bold" />}
                        </span>
                      </button>

                      {isOpen && (
                        <div className="mt-2 text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed pr-4">
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

        {/* Section 6: Bottom Call To Action Banner */}
        <section className="py-8 sm:py-16 relative overflow-hidden jvm-gradient-bg text-white">
          <div className="max-w-[1200px] mx-auto px-3.5 sm:px-6 lg:px-8 text-center space-y-4 sm:space-y-6 relative z-10">
            <h2 className="text-xl sm:text-4xl md:text-5xl font-extrabold font-heading">
              Start Your Data Engineering Journey Today
            </h2>
            <p className="text-purple-100 text-xs sm:text-lg max-w-2xl mx-auto">
              Transform your career with Pune&apos;s #1 rated Data Engineering Institute. 1:1 resume assistance &amp; direct MNC placement drives.
            </p>
            <div className="pt-1 sm:pt-2 flex justify-center">
              <Link 
                href="/contact-us" 
                className="w-full sm:w-auto bg-white text-[#1E2B88] hover:bg-slate-100 px-6 sm:px-8 py-3 sm:py-3.5 rounded-full font-bold text-xs sm:text-sm shadow-xl flex items-center justify-center gap-2"
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
