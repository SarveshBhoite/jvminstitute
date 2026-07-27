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

const placedStudents = [
  {
    id: 1,
    name: "Siddharth Bhoite",
    previousRole: "Non-IT Mechanical Graduate",
    placedRole: "Associate Data Engineer",
    company: "TCS",
    package: "8.5 LPA",
    hike: "140% Salary Hike",
    image: "/place1.png",
    testimonial: "I had zero coding experience coming from mechanical engineering. JVM Institute's hands-on PySpark labs, real Databricks projects, and 1:1 mock interviews helped me land an 8.5 LPA offer at TCS!",
  },
  {
    id: 2,
    name: "Priya Sharma",
    previousRole: "Manual QA Tester",
    placedRole: "Big Data & PySpark Engineer",
    company: "Infosys",
    package: "10.2 LPA",
    hike: "110% Salary Hike",
    image: "/place2.png",
    testimonial: "The Databricks, Airflow, and Cloud ETL pipeline projects gave me immense confidence during technical interview rounds. Transitioned seamlessly from QA to Data Engineer!",
  },
  {
    id: 3,
    name: "Rahul Deshmukh",
    previousRole: "Fresher BE Computer Science",
    placedRole: "Cloud Data Engineer",
    company: "Cognizant",
    package: "7.8 LPA",
    hike: "Direct Selection",
    image: "/place3.jpeg",
    testimonial: "Learning real-world Snowflake architecture and PySpark performance tuning made my resume stand out among 500+ fresher applicants.",
  },
];

export default function PlacedStudentsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Fast 2.5-second automatic slideshow loop interval
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % placedStudents.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [isPaused]);

  const activeStudent = placedStudents[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % placedStudents.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + placedStudents.length) % placedStudents.length);
  };

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
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-xs font-extrabold text-emerald-300 uppercase tracking-wider shadow-sm">
            <GraduationCap className="w-4 h-4 text-emerald-400" /> Authentic Career Transformations
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-white tracking-tight drop-shadow-md">
            Placed Alumni Success Showcase
          </h2>

          <p className="text-base sm:text-lg text-slate-200 drop-shadow-sm font-medium">
            Real stories of non-IT transitions, freshers landing top MNC offers, and career growth.
          </p>
        </div>

        {/* Automatic Slideshow Card Container */}
        <div 
          className="w-full max-w-[1180px] mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border border-slate-200/90 dark:border-slate-800 rounded-[36px] shadow-2xl p-6 sm:p-8 md:p-10 relative overflow-hidden transition-all duration-500">
            
            <div key={activeStudent.id} className="grid lg:grid-cols-12 gap-8 items-center w-full">
              
              {/* Left Half (5 cols): Full Student Image with Ultra-Smooth 0.8s Entry */}
              <div className="lg:col-span-5 relative w-full h-[360px] md:h-[440px] rounded-2xl overflow-hidden shadow-md group">
                <Image
                  src={activeStudent.image}
                  alt={activeStudent.name}
                  fill
                  className="object-cover object-top transition-all duration-800 ease-out group-hover:scale-105"
                  priority
                />
                
                {/* Gradient Overlay Mask */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent"></div>

                {/* Top Verification Badge */}
                <div className="absolute top-4 left-4 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md px-3 py-1.5 rounded-full border border-slate-200 dark:border-slate-700 shadow-xs flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span className="text-xs font-extrabold text-slate-900 dark:text-white">Verified Placement</span>
                </div>

                {/* Bottom Student Details */}
                <div className="absolute bottom-4 left-4 right-4 text-white space-y-1">
                  <div className="flex items-center justify-between">
                    <SplitText
                      text={activeStudent.name}
                      tag="h3"
                      className="text-xl font-bold font-heading text-white"
                      delay={20}
                      duration={0.5}
                      splitType="words"
                    />
                    <span className="bg-emerald-500 text-white font-extrabold text-xs px-3 py-1 rounded-full shadow-sm">
                      {activeStudent.package}
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 font-medium">Earlier: {activeStudent.previousRole}</p>
                </div>
              </div>

              {/* Right Half (7 cols): Smooth & Fast GSAP SplitText Testimonial & Metrics */}
              <div className="lg:col-span-7 space-y-6 py-2">
                
                {/* Top Ratings & Role */}
                <div className="flex items-center justify-between flex-wrap gap-2 border-b border-slate-100 dark:border-slate-800 pb-3">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>

                  <span className="text-xs font-extrabold text-[#1E2B88] dark:text-purple-300 bg-purple-50 dark:bg-purple-950/60 px-3.5 py-1.5 rounded-full border border-purple-100 dark:border-purple-900/60 flex items-center gap-1.5">
                    <Briefcase className="w-4 h-4" /> {activeStudent.placedRole}
                  </span>
                </div>

                {/* GSAP Animated Testimonial Text tailored for 2.5s interval */}
                <div className="relative min-h-[110px]">
                  <Quote className="w-10 h-10 text-purple-200 dark:text-purple-900/40 absolute -top-3 -left-3 pointer-events-none" />
                  <div className="pl-4">
                    <SplitText
                      text={`"${activeStudent.testimonial}"`}
                      tag="p"
                      className="text-base md:text-lg text-slate-700 dark:text-slate-200 italic leading-relaxed"
                      delay={18}
                      duration={0.6}
                      splitType="words"
                    />
                  </div>
                </div>

                {/* Metric Cards Row */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="bg-slate-50 dark:bg-slate-800/70 p-4 rounded-2xl border border-slate-200/80 dark:border-slate-700">
                    <span className="text-slate-400 dark:text-slate-400 font-medium text-[11px] block flex items-center gap-1">
                      <Building2 className="w-3.5 h-3.5 text-[#1E2B88] dark:text-purple-400" /> Placed Company
                    </span>
                    <span className="text-lg font-extrabold text-slate-900 dark:text-white mt-0.5 block">
                      {activeStudent.company}
                    </span>
                  </div>

                  <div className="bg-gradient-to-br from-emerald-500 to-teal-600 text-white p-4 rounded-2xl shadow-sm">
                    <span className="text-emerald-100 font-medium text-[11px] block flex items-center gap-1">
                      <TrendingUp className="w-3.5 h-3.5 text-amber-300" /> Career Outcome
                    </span>
                    <span className="text-base font-extrabold mt-0.5 block">
                      {activeStudent.hike}
                    </span>
                  </div>
                </div>

                {/* Slideshow Controls & Navigation Indicators */}
                <div className="pt-4 flex items-center justify-between border-t border-slate-100 dark:border-slate-800">
                  {/* Indicator Dots */}
                  <div className="flex items-center gap-2">
                    {placedStudents.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`h-2.5 rounded-full transition-all duration-300 ${
                          currentIndex === index
                            ? "w-8 jvm-gradient-bg"
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
