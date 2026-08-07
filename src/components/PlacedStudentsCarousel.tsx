"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  GraduationCap, 
  Building2, 
  Quote, 
  ArrowRight,
  Briefcase,
  Star,
  CheckCircle2,
  TrendingUp,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import SplitText from "./SplitText";

// Helper to parse numeric package value for dynamic sorting (e.g., "16 LPA" -> 16)
const getPackageNumeric = (pkgStr: string | number | undefined | null): number => {
  if (typeof pkgStr === "number") return pkgStr;
  if (!pkgStr) return 0;
  const match = String(pkgStr).match(/[\d.]+/);
  return match ? parseFloat(match[0]) : 0;
};

// Fallback Top Placed Students (Sorted by highest package)
const fallbackStudents = [
  {
    id: "1",
    name: "Ajinkya",
    domain: "PySpark & Big Data",
    placedRole: "Senior Data Engineer",
    company: "LTI Mindtree",
    package: "16 LPA",
    image: "/placements/placement_5_ajinkya.jpeg",
    testimonial: "I joined JVM Institute to upgrade my technical skills in PySpark, Databricks, SQL, and Cloud Data Engineering. The trainers were knowledgeable, supportive, and always encouraged us to learn beyond the classroom. The placement support and interview guidance were outstanding.",
  },
  {
    id: "2",
    name: "Rohini",
    domain: "Data Engineering",
    placedRole: "Lead Software Engineer",
    company: "Persistent",
    package: "13.66 LPA",
    image: "/placements/placement_8_rohini.jpeg",
    testimonial: "Coming from a non-IT background, JVM Institute provided me with the right guidance, structured learning path, and practical exposure through real-time projects. The mock interviews, resume preparation, and mentorship enabled me to secure a Lead position at Persistent.",
  },
  {
    id: "3",
    name: "Satyajeet",
    domain: "Cloud & Snowflake",
    placedRole: "Lead Software Engineer",
    company: "Persistent",
    package: "13.20 LPA",
    image: "/placements/placement_7_satyajeet.png",
    testimonial: "After spending years preparing for government exams, I wanted a career with growth. JVM Institute helped me learn industry technologies like SQL, Python, AWS, and PySpark. I successfully switched to IT and started my Data & AI career.",
  },
  {
    id: "4",
    name: "Prathamesh",
    domain: "Data Engineering",
    placedRole: "Data Engineer",
    company: "Zorba Consulting",
    package: "13 LPA",
    image: "/placements/placement_3_prathamesh.png",
    testimonial: "My journey with JVM Institute has been truly life-changing. The training program provided in-depth knowledge of SQL, Python, PySpark, AWS, Azure, and real-time Data Engineering projects. The mock interviews helped me secure multiple offers including Zorba Consulting (13 LPA), Datametica (12.2 LPA), and IPG Mediabrands (12 LPA).",
  },
  {
    id: "5",
    name: "Ankit",
    domain: "Cloud & Snowflake",
    placedRole: "Senior Consultant",
    company: "Mindcraft",
    package: "12.75 LPA",
    image: "/placements/placement_10_ankit.png",
    testimonial: "My experience with JVM Institute was fantastic. The trainers not only taught technical concepts but also guided us on resume building and interview preparation for Cloud and Data domains.",
  },
  {
    id: "6",
    name: "Shweta",
    domain: "Data Engineering",
    placedRole: "Software Engineer",
    company: "Persistent",
    package: "12.5 LPA",
    image: "/placements/placement_2_shweta.png",
    testimonial: "After a career break, I wanted to restart my professional journey in a growing field. JVM Institute gave me the confidence and skills needed to enter the IT industry. Today, I am working successfully at Persistent.",
  },
  {
    id: "7",
    name: "Abhishek",
    domain: "Data Engineering",
    placedRole: "Data Engineer",
    company: "Datametica",
    package: "12 LPA",
    image: "/placements/placement_4_abhishek.jpeg",
    testimonial: "I joined JVM Institute to upgrade my technical skills and improve my career prospects. The curriculum covered everything from SQL and Python to Cloud and Big Data technologies. The placement support and interview guidance were outstanding.",
  },
  {
    id: "8",
    name: "Priya",
    previousRole: "Non-IT Career Transition",
    placedRole: "Senior Data Engineer",
    company: "Cymetrix",
    package: "11.54 LPA",
    image: "/placements/placement_1_priya.png",
    testimonial: "Coming from a non-IT background, I was unsure about switching careers. JVM Institute made the transition smooth with their step-by-step training approach. The live projects gave me valuable practical exposure, and the trainers continuously motivated me throughout the course. Their placement assistance and mock interviews were incredibly helpful.",
  },
  {
    id: "9",
    name: "Nikhil",
    domain: "Data Engineering",
    placedRole: "Senior Software Engineer",
    company: "Prodapt",
    package: "11 LPA",
    image: "/placements/placement_6_nikhil.jpeg",
    testimonial: "I am extremely grateful to JVM Institute for helping me achieve this milestone in my career. The practical training, real-time projects, and continuous mentorship played a crucial role in enhancing my technical skills.",
  },
  {
    id: "10",
    name: "Rahul",
    domain: "Data Engineering",
    placedRole: "Data Engineer",
    company: "Anchanto",
    package: "10 LPA",
    image: "/placements/placement_9_rahul.jpeg",
    testimonial: "Coming from a non-IT background, I had limited technical knowledge. JVM Institute helped me understand Data Engineering concepts from scratch through hands-on learning and real-world projects.",
  }
];

export default function PlacedStudentsCarousel() {
  const [placedStudents, setPlacedStudents] = useState<any[]>(fallbackStudents);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    async function fetchPlacements() {
      try {
        const res = await fetch("/api/placements");
        const data = await res.json();
        if (data.success && data.placements && data.placements.length > 0) {
          // Dynamic sorting logic: Automatically sort students by package descending (highest first)
          // When admin adds a new student (e.g., 14 LPA or 20 LPA), it automatically re-sorts and displays top 15
          const sortedTopPlacements = [...data.placements]
            .sort((a, b) => {
              const pkgA = getPackageNumeric(a.package || a.pkg);
              const pkgB = getPackageNumeric(b.package || b.pkg);
              return pkgB - pkgA; // Descending
            })
            .slice(0, 15); // Top 15 students

          setPlacedStudents(sortedTopPlacements.length > 0 ? sortedTopPlacements : fallbackStudents);
        }
      } catch (err) {
        console.error("Failed to fetch placements for carousel:", err);
      }
    }
    fetchPlacements();
  }, []);

  // Fast 2.5-second automatic slideshow loop interval
  useEffect(() => {
    if (isPaused || placedStudents.length === 0) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % placedStudents.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [isPaused, placedStudents]);

  const activeStudent = placedStudents[currentIndex] || placedStudents[0];

  const handleNext = () => {
    if (placedStudents.length === 0) return;
    setCurrentIndex((prev) => (prev + 1) % placedStudents.length);
  };

  const handlePrev = () => {
    if (placedStudents.length === 0) return;
    setCurrentIndex((prev) => (prev - 1 + placedStudents.length) % placedStudents.length);
  };

  if (!activeStudent) return null;

  return (
    <section className="py-16 md:py-24 relative overflow-hidden bg-slate-900 transition-colors duration-300">
      
      {/* Background Image Layer (students1.jpeg) */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-all duration-1000 scale-105"
        style={{ 
          backgroundImage: `url('/students2.jpeg')`,
        }}
      ></div>
      {/* Reduced translucent overlay mask so background group photo is clear */}
      <div className="absolute inset-0 z-0 bg-slate-950/30 bg-gradient-to-b from-slate-950/40 via-slate-950/25 to-slate-950/50"></div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4 mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-[11px] sm:text-xs font-extrabold text-emerald-300 uppercase tracking-wider shadow-sm">
            <GraduationCap className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400" /> Authentic Career Transformations
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold font-heading text-white tracking-tight drop-shadow-md leading-tight">
            Placed Alumni Success Showcase
          </h2>

          <p className="text-xs sm:text-base md:text-lg text-slate-200 drop-shadow-sm font-medium">
            Real stories of non-IT transitions, freshers landing top MNC offers, and career growth.
          </p>
        </div>

        {/* Automatic Slideshow Card Container */}
        <div 
          className="w-full max-w-[1180px] mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border border-slate-200/90 dark:border-slate-800 rounded-2xl sm:rounded-[36px] shadow-2xl p-3.5 sm:p-8 md:p-10 relative overflow-hidden transition-all duration-500">
            
            <div key={activeStudent.id} className="grid lg:grid-cols-12 gap-3.5 sm:gap-8 items-center w-full">
              
              {/* Left Half (5 cols): Large Featured Student Image */}
              <div className="lg:col-span-5 relative w-full h-[280px] xs:h-[320px] sm:h-[380px] md:h-[440px] rounded-2xl overflow-hidden shadow-lg border border-slate-200/80 dark:border-slate-700/80 group">
                <Image
                  src={activeStudent.image}
                  alt={activeStudent.name}
                  fill
                  className="object-cover object-top transition-all duration-800 ease-out group-hover:scale-105"
                  priority
                />
                
                {/* Gradient Overlay Mask */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/25 to-transparent"></div>

                {/* Top Verification Badge */}
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md px-3 py-1 rounded-full border border-slate-200 dark:border-slate-700 shadow-sm flex items-center gap-1.5 z-10">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                  <span className="text-[10px] sm:text-xs font-extrabold text-slate-900 dark:text-white">Verified Placement</span>
                </div>

                {/* Bottom Student Details */}
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 text-white space-y-1 z-10">
                  <div className="flex items-center justify-between gap-2">
                    <SplitText
                      text={activeStudent.name}
                      tag="h3"
                      className="text-base sm:text-xl font-bold font-heading text-white drop-shadow-md"
                      delay={20}
                      duration={0.5}
                      splitType="words"
                    />
                    <span className="bg-emerald-500 text-white font-extrabold text-[10px] sm:text-xs px-2.5 py-1 rounded-full shadow-md shrink-0">
                      {activeStudent.package}
                    </span>
                  </div>
                  <p className="text-[11px] sm:text-xs text-slate-300 font-semibold drop-shadow-sm">
                    {activeStudent.previousRole ? `Earlier: ${activeStudent.previousRole}` : `Domain: ${activeStudent.domain}`}
                  </p>
                </div>
              </div>

              {/* Right Half (7 cols): Smooth GSAP SplitText Testimonial & Metrics */}
              <div className="lg:col-span-7 space-y-2.5 sm:space-y-6 py-0.5 sm:py-2">
                
                {/* Top Ratings & Role */}
                <div className="flex items-center justify-between flex-wrap gap-1.5 border-b border-slate-100 dark:border-slate-800 pb-2 sm:pb-3">
                  <div className="flex items-center gap-0.5 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 fill-amber-400" />
                    ))}
                  </div>

                  <span className="text-[10px] sm:text-xs font-extrabold text-[#1E2B88] dark:text-purple-300 bg-purple-50 dark:bg-purple-950/60 px-2.5 py-0.5 sm:px-3.5 sm:py-1.5 rounded-full border border-purple-100 dark:border-purple-900/60 flex items-center gap-1">
                    <Briefcase className="w-3 h-3 sm:w-4 sm:h-4" /> {activeStudent.placedRole}
                  </span>
                </div>

                {/* GSAP Animated Testimonial Text */}
                <div className="relative min-h-[45px] sm:min-h-[110px]">
                  <Quote className="w-6 h-6 sm:w-10 sm:h-10 text-purple-200 dark:text-purple-900/40 absolute -top-2 -left-2 pointer-events-none" />
                  <div className="pl-2 sm:pl-4">
                    <SplitText
                      text={`"${activeStudent.testimonial || activeStudent.review || 'The live PySpark labs and technical mock interviews gave me immense confidence to land my dream Data Engineering role!'}"`}
                      tag="p"
                      className="text-[11px] sm:text-base md:text-lg text-slate-700 dark:text-slate-200 italic leading-snug sm:leading-relaxed"
                      delay={18}
                      duration={0.6}
                      splitType="words"
                    />
                  </div>
                </div>

                {/* Metric Cards Row */}
                <div className="grid grid-cols-2 gap-2 sm:gap-3 pt-1">
                  <div className="bg-slate-50 dark:bg-slate-800/70 p-2 sm:p-4 rounded-xl sm:rounded-2xl border border-slate-200/80 dark:border-slate-700">
                    <span className="text-slate-400 dark:text-slate-400 font-medium text-[9px] sm:text-[11px] flex items-center gap-1">
                      <Building2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#1E2B88] dark:text-purple-400" /> Placed Company
                    </span>
                    <span className="text-xs sm:text-lg font-extrabold text-slate-900 dark:text-white mt-0.5 block truncate">
                      {activeStudent.company}
                    </span>
                  </div>

                  <div className="bg-gradient-to-br from-emerald-500 to-teal-600 text-white p-2 sm:p-4 rounded-xl sm:rounded-2xl shadow-sm">
                    <span className="text-emerald-100 font-medium text-[9px] sm:text-[11px] flex items-center gap-1">
                      <TrendingUp className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-amber-300" /> Package Offered
                    </span>
                    <span className="text-xs sm:text-base font-extrabold mt-0.5 block truncate">
                      {activeStudent.package}
                    </span>
                  </div>
                </div>

                {/* Slideshow Controls & Navigation Indicators */}
                <div className="pt-4 flex items-center justify-between border-t border-slate-100 dark:border-slate-800 gap-4">
                  {/* Indicator Dots (Capped & Scrollable so layout container stays fixed) */}
                  <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-none max-w-[200px] sm:max-w-[320px] py-1">
                    {placedStudents.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`h-2.5 shrink-0 rounded-full transition-all duration-300 ${
                          currentIndex === index
                            ? "w-7 jvm-gradient-bg"
                            : "w-2.5 bg-slate-300 dark:bg-slate-700 hover:bg-slate-400"
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                      />
                    ))}
                  </div>


                  {/* Prev/Next Buttons */}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={handlePrev}
                      className="p-2.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-[#1E2B88] hover:text-white dark:hover:bg-purple-600 transition-colors shadow-xs"
                      aria-label="Previous Student"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={handleNext}
                      className="p-2.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-[#1E2B88] hover:text-white dark:hover:bg-purple-600 transition-colors shadow-xs"
                      aria-label="Next Student"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>

              </div>

            </div>

          </div>
        </div>

        {/* View All Placements Link */}
        <div className="mt-10 text-center">
          <Link 
            href="/placements" 
            className="inline-flex items-center gap-2 text-sm font-bold text-white hover:text-purple-300 transition-colors group"
          >
            Explore Complete Student Placements Wall 
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

      </div>
    </section>
  );
}
