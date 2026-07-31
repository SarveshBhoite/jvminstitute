"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  ArrowRight, 
  Clock, 
  ChevronRight,
  Bookmark,
  Sparkles,
  BookOpen,
  ChevronLeft
} from "lucide-react";

const rankedBlogArticles = [
  {
    slug: "learn-python-for-data-analysis",
    title: "Learn Python for Data Analysis: Complete Roadmap for Beginners",
    excerpt: "Discover the step-by-step guide to mastering Python, Pandas, NumPy, and data manipulation techniques tailored for data engineering careers.",
    category: "Python Roadmap",
    readTime: "8 min read",
    badge: "Top Ranked Guide",
    image: "/place1.png",
    accentColor: "from-purple-500/20 via-indigo-500/10 to-transparent",
    tagColor: "bg-purple-500/10 text-purple-600 dark:text-purple-300 border-purple-200 dark:border-purple-800",
  },
  {
    slug: "why-should-i-learn-python-for-data-analysis",
    title: "Why Should I Learn Python for Data Analysis in 2026?",
    excerpt: "Explore job market trends, salary potential, and why Python has become the standard language for modern big data pipelines and ETL workflows.",
    category: "Career Insights",
    readTime: "6 min read",
    badge: "High Demand Skill",
    image: "/place2.png",
    accentColor: "from-pink-500/20 via-rose-500/10 to-transparent",
    tagColor: "bg-pink-500/10 text-pink-600 dark:text-pink-300 border-pink-200 dark:border-pink-800",
  },
  {
    slug: "how-to-read-xml-files-into-python",
    title: "How to Read XML Files into Python Pandas DataFrames (With Code)",
    excerpt: "Practical tutorial demonstrating ElementTree and Pandas read_xml methods to parse complex nested XML schemas into clean tabular data.",
    category: "Code Tutorial",
    readTime: "5 min read",
    badge: "Hands-on Code",
    image: "/place3.jpeg",
    accentColor: "from-emerald-500/20 via-teal-500/10 to-transparent",
    tagColor: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800",
  },
];

export default function BlogCrossLinkSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Automatic rotation timer loop
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % rankedBlogArticles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-12 sm:py-20 md:py-28 bg-white dark:bg-[#0B0F19] relative transition-colors duration-500 overflow-hidden">
      
      {/* Ambient background glow accents */}
      <div className="ambient-glow w-72 h-72 sm:w-96 sm:h-96 bg-[#1E2B88] dark:bg-[#4F46E5] top-[-10%] right-[-5%] opacity-15 pointer-events-none"></div>
      <div className="ambient-glow w-72 h-72 sm:w-96 sm:h-96 bg-[#E01E6A] dark:bg-[#EC4899] bottom-[-10%] left-[-5%] opacity-15 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-16 gap-4 sm:gap-6">
          <div className="space-y-2 sm:space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-50 dark:bg-purple-950/60 border border-purple-100 dark:border-purple-900/60 text-[11px] sm:text-xs font-extrabold text-[#7C248C] dark:text-purple-300 uppercase tracking-wider">
              <Bookmark className="w-3.5 h-3.5 text-[#E01E6A] dark:text-pink-400" /> High-Authority Technical Guides
            </div>
            
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold font-heading text-slate-900 dark:text-white tracking-tight leading-tight">
              Featured Articles &amp; <span className="jvm-gradient-text">Top-Ranked Tutorials</span>
            </h2>
            
            <p className="text-xs sm:text-base text-slate-600 dark:text-slate-300 max-w-2xl font-medium">
              Read our most popular technical guides written by senior JVM Institute instructors and industry data engineers.
            </p>
          </div>

          <Link 
            href="/blog"
            className="inline-flex items-center justify-center gap-2 text-xs sm:text-sm font-extrabold text-[#1E2B88] dark:text-purple-300 hover:text-[#7C248C] dark:hover:text-purple-200 transition-colors shrink-0 group bg-slate-100 dark:bg-slate-800/80 px-4 py-2.5 sm:px-5 sm:py-3 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-xs"
          >
            Explore All Blog Posts 
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* SINGLE LINE HORIZONTAL ROTATING CAROUSEL (Rotates in one line on Mobile & Desktop) */}
        <div className="relative">
          
          {/* Mobile & Desktop Horizontal Single Line Cards Track */}
          <div className="flex overflow-x-auto snap-x snap-mandatory scrollbar-none gap-4 sm:gap-8 pb-4">
            {rankedBlogArticles.map((article, index) => (
              <article 
                key={index}
                className={`min-w-[280px] sm:min-w-[340px] md:min-w-[380px] flex-1 snap-center bg-white/95 dark:bg-slate-900/95 rounded-3xl overflow-hidden border transition-all duration-500 flex flex-col justify-between group cursor-pointer ${
                  activeIndex === index
                    ? "border-purple-500 shadow-xl ring-2 ring-purple-500/20"
                    : "border-slate-200/90 dark:border-slate-800 shadow-md opacity-90 hover:opacity-100"
                }`}
              >
                <div>
                  
                  {/* Blog Image Thumbnail */}
                  <div className="relative w-full h-36 sm:h-48 overflow-hidden">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110"
                    />

                    {/* Gradient Overlay Mask */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent"></div>

                    {/* Floating Category Badge */}
                    <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-10">
                      <span className={`text-[10px] sm:text-xs font-extrabold px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full border backdrop-blur-md bg-white/90 dark:bg-slate-900/90 shadow-sm ${article.tagColor}`}>
                        {article.category}
                      </span>
                    </div>

                    {/* Floating Read Time Badge */}
                    <div className="absolute bottom-2.5 right-3 sm:bottom-3 sm:right-4 z-10 text-[10px] sm:text-xs font-bold text-white flex items-center gap-1 drop-shadow-md">
                      <Clock className="w-3.5 h-3.5 text-amber-300" /> {article.readTime}
                    </div>
                  </div>

                  {/* Content Container */}
                  <div className="p-4 sm:p-6 space-y-2 sm:space-y-3">
                    <div className="flex items-center gap-1.5 text-[10px] sm:text-xs font-extrabold text-emerald-600 dark:text-emerald-400">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>{article.badge}</span>
                    </div>

                    <h3 className="text-base sm:text-xl font-bold font-heading text-slate-900 dark:text-white leading-snug group-hover:text-[#1E2B88] dark:group-hover:text-purple-300 transition-colors line-clamp-2">
                      <Link href={`/${article.slug}`}>
                        {article.title}
                      </Link>
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-2 sm:line-clamp-3">
                      {article.excerpt}
                    </p>
                  </div>

                </div>

                {/* Bottom Card Footer CTA */}
                <div className="px-4 sm:px-6 pb-4 sm:pb-6 pt-2 flex items-center justify-between border-t border-slate-100 dark:border-slate-800/80">
                  <span className="text-[10px] sm:text-xs font-semibold text-slate-400 dark:text-slate-500 flex items-center gap-1">
                    <BookOpen className="w-3.5 h-3.5" /> Technical Guide
                  </span>

                  <Link 
                    href={`/${article.slug}`}
                    className="text-[11px] sm:text-xs font-extrabold text-[#1E2B88] dark:text-purple-300 group-hover:text-[#E01E6A] dark:group-hover:text-pink-400 flex items-center gap-1 transition-colors"
                  >
                    Read Article <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>

              </article>
            ))}
          </div>

          {/* Indicator Dots for One-Line Rotation */}
          <div className="flex items-center justify-center gap-2 mt-4">
            {rankedBlogArticles.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  activeIndex === index
                    ? "w-7 jvm-gradient-bg"
                    : "w-2 bg-slate-300 dark:bg-slate-700 hover:bg-slate-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
