"use client";

import React from "react";
import Link from "next/link";
import { 
  Database, 
  Code2, 
  BrainCircuit, 
  Sparkles, 
  ArrowRight, 
  Clock, 
  CheckCircle
} from "lucide-react";

const coursesData = [
  {
    id: "python-data-analysis",
    slug: "learn-python-for-data-analysis",
    title: "Python for Data Analysis & SQL",
    badge: "Most Popular",
    description: "Master Python programming, Pandas, NumPy, Data Cleaning, Seaborn visualizations & Advanced SQL queries.",
    duration: "2 Months",
    mode: "Offline & Online Live",
    icon: Code2,
    isTopRanked: false,
    fullFee: "₹18,000",
    advanceFee: "₹3,000",
    highlights: ["Pandas & NumPy Deep Dive", "Real-world EDA Projects", "Interview Questions Prep"],
    glowClass: "hover:border-[#7C248C] hover:shadow-[0_0_35px_rgba(124,36,140,0.35)] dark:hover:shadow-[0_0_40px_rgba(147,51,234,0.4)]",
  },
  {
    id: "data-engineering",
    slug: "data-engineering-course-in-pune",
    title: "Data Engineering Master Program",
    badge: "Top Ranked in Pune",
    description: "End-to-end Data Pipeline engineering with PySpark, Databricks, AWS Glue, Snowflake, SQL & Airflow.",
    duration: "4 Months",
    mode: "Offline & Online Live",
    icon: Database,
    isTopRanked: true,
    fullFee: "₹35,000",
    advanceFee: "₹5,000",
    highlights: ["PySpark & Databricks Labs", "4 Live Industry Capstone Projects", "100% Placement Assistance"],
    glowClass: "hover:border-[#E01E6A] hover:shadow-[0_0_35px_rgba(224,30,106,0.35)] dark:hover:shadow-[0_0_40px_rgba(224,30,106,0.4)]",
  },
  {
    id: "big-data-spark",
    slug: "our-courses",
    title: "PySpark & Big Data Ecosystem",
    badge: "Advanced Certification",
    description: "Deep dive into Distributed Computing, Apache Spark Architecture, HDFS, Hive & Cloud Data Lakes.",
    duration: "2.5 Months",
    mode: "Weekend Special",
    icon: BrainCircuit,
    isTopRanked: false,
    fullFee: "₹22,000",
    advanceFee: "₹4,000",
    highlights: ["Spark Performance Tuning", "Real-time Streaming", "AWS Cloud Integration"],
    glowClass: "hover:border-[#1E2B88] hover:shadow-[0_0_35px_rgba(30,43,136,0.35)] dark:hover:shadow-[0_0_40px_rgba(99,102,241,0.4)]",
  },
];

export default function FeaturedCourses() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden bg-gradient-to-b from-slate-100/90 via-purple-50/40 to-slate-100/90 dark:from-[#0B0F19] dark:via-[#131B2E] dark:to-[#0B0F19] transition-colors duration-500 border-y border-purple-100/60 dark:border-purple-900/30">
      
      {/* Background Animated Gradient Glow Blobs */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-purple-500/10 dark:bg-purple-600/20 rounded-full blur-3xl pointer-events-none animate-pulse"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-pink-500/10 dark:bg-pink-600/20 rounded-full blur-3xl pointer-events-none animate-pulse duration-1000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 dark:bg-slate-800/90 border border-purple-200 dark:border-purple-800/80 text-xs font-extrabold text-[#7C248C] dark:text-purple-300 uppercase tracking-wider shadow-xs">
            <Sparkles className="w-4 h-4 text-[#E01E6A] dark:text-pink-400" /> Industry Aligned Programs
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-slate-900 dark:text-white tracking-tight drop-shadow-xs">
            Accelerate Your Tech Career With <span className="jvm-gradient-text">Our Featured Courses</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 font-medium">
            Hand-crafted curriculum focused on real-world practical skills that top IT companies hire for.
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          {coursesData.map((course) => {
            const IconComponent = course.icon;
            return (
              <div 
                key={course.id}
                className={`relative bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-500 hover:-translate-y-2 cursor-pointer ${
                  course.isTopRanked 
                    ? "border-2 border-[#1E2B88] dark:border-purple-500 shadow-2xl shadow-purple-900/20 dark:shadow-purple-950/50 ring-4 ring-purple-100 dark:ring-purple-950/40 md:-translate-y-2" 
                    : "border border-slate-200/90 dark:border-slate-800 shadow-md"
                } ${course.glowClass}`}
              >
                {/* Top Badge */}
                {course.badge && (
                  <div className="absolute -top-3.5 left-6 bg-gradient-to-r from-[#1E2B88] to-[#7C248C] dark:from-[#4F46E5] dark:to-[#9333EA] text-white px-3.5 py-1 rounded-full text-xs font-bold shadow-sm flex items-center gap-1 z-10">
                    <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                    {course.badge}
                  </div>
                )}

                <div className="space-y-6 pt-2">
                  {/* Icon & Title */}
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-slate-800 dark:to-slate-800/80 border border-purple-100 dark:border-slate-700 flex items-center justify-center text-[#1E2B88] dark:text-purple-300">
                      <IconComponent className="w-7 h-7" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold font-heading text-slate-900 dark:text-white leading-snug">
                        {course.title}
                      </h3>
                      <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 font-medium mt-1">
                        <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {course.duration}</span>
                        <span>•</span>
                        <span>{course.mode}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {course.description}
                  </p>

                  {/* Highlights Bullet list */}
                  <div className="space-y-2.5 pt-2 border-t border-slate-100 dark:border-slate-800">
                    <p className="text-xs font-extrabold uppercase tracking-wider text-slate-400 dark:text-slate-500">Course Highlights:</p>
                    {course.highlights.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs font-semibold text-slate-700 dark:text-slate-300">
                        <CheckCircle className="w-4 h-4 text-emerald-500 dark:text-emerald-400 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Fee Options Box */}
                  <div className="bg-slate-50 dark:bg-slate-800/60 p-3.5 rounded-2xl border border-slate-200/80 dark:border-slate-700/80 flex items-center justify-between text-xs font-bold text-slate-800 dark:text-slate-200">
                    <div>
                      <span className="text-slate-400 dark:text-slate-400 font-medium block text-[11px]">Full Course Fee:</span>
                      <span className="text-base font-extrabold text-[#1E2B88] dark:text-purple-300">{course.fullFee}</span>
                    </div>
                    <div className="text-right">
                      <span className="text-slate-400 dark:text-slate-400 font-medium block text-[11px]">Book Advance Seat:</span>
                      <span className="text-sm font-bold text-[#E01E6A] dark:text-pink-400">{course.advanceFee}</span>
                    </div>
                  </div>
                </div>

                {/* Card CTA Links */}
                <div className="pt-6 grid grid-cols-2 gap-3 mt-4">
                  <Link 
                    href={`/${course.slug}`}
                    className="w-full text-center py-3 px-3 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors flex items-center justify-center gap-1"
                  >
                    View Syllabus
                  </Link>

                  <Link 
                    href="/contact-us"
                    className="w-full jvm-gradient-bg text-center py-3 px-3 rounded-xl text-xs font-extrabold text-white shadow-sm hover:opacity-95 transition-opacity flex items-center justify-center gap-1"
                  >
                    Enroll Now <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

              </div>
            );
          })}
        </div>

        {/* View All Courses Banner */}
        <div className="mt-12 text-center">
          <Link 
            href="/our-courses" 
            className="inline-flex items-center gap-2 text-sm font-bold text-[#1E2B88] dark:text-purple-300 hover:text-[#7C248C] dark:hover:text-purple-200 transition-colors group"
          >
            Explore Full Curriculum & Certificate Catalog 
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

      </div>
    </section>
  );
}
