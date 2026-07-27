"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  ArrowRight, 
  Clock, 
  ChevronRight,
  Bookmark,
  Sparkles,
  BookOpen
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
  return (
    <section className="py-20 md:py-28 bg-white dark:bg-[#0B0F19] relative transition-colors duration-500 overflow-hidden">
      
      {/* Ambient background glow accents */}
      <div className="ambient-glow w-96 h-96 bg-[#1E2B88] dark:bg-[#4F46E5] top-[-10%] right-[-5%] opacity-15 pointer-events-none"></div>
      <div className="ambient-glow w-96 h-96 bg-[#E01E6A] dark:bg-[#EC4899] bottom-[-10%] left-[-5%] opacity-15 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-50 dark:bg-purple-950/60 border border-purple-100 dark:border-purple-900/60 text-xs font-extrabold text-[#7C248C] dark:text-purple-300 uppercase tracking-wider">
              <Bookmark className="w-3.5 h-3.5 text-[#E01E6A] dark:text-pink-400" /> High-Authority Technical Guides
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-slate-900 dark:text-white tracking-tight">
              Featured Articles & <span className="jvm-gradient-text">Top-Ranked Tutorials</span>
            </h2>
            
            <p className="text-slate-600 dark:text-slate-300 text-base max-w-2xl font-medium">
              Read our most popular technical guides written by senior JVM Institute instructors and industry data engineers.
            </p>
          </div>

          <Link 
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-extrabold text-[#1E2B88] dark:text-purple-300 hover:text-[#7C248C] dark:hover:text-purple-200 transition-colors shrink-0 group bg-slate-100 dark:bg-slate-800/80 px-5 py-3 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-xs"
          >
            Explore All Blog Posts 
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 3 Grid Article Cards with Image Thumbnails & Smooth Stagger Animations */}
        <div className="grid md:grid-cols-3 gap-8">
          {rankedBlogArticles.map((article, index) => (
            <article 
              key={index}
              className="bg-white/95 dark:bg-slate-900/95 rounded-3xl overflow-hidden border border-slate-200/90 dark:border-slate-800 shadow-md hover:shadow-2xl transition-all duration-500 flex flex-col justify-between hover:-translate-y-2 group cursor-pointer"
            >
              <div>
                
                {/* Blog Image Thumbnail with Zoom Hover & Floating Category Badge */}
                <div className="relative w-full h-48 overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110"
                  />

                  {/* Gradient Overlay Mask */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent"></div>

                  {/* Floating Category Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className={`text-xs font-extrabold px-3 py-1 rounded-full border backdrop-blur-md bg-white/90 dark:bg-slate-900/90 shadow-sm ${article.tagColor}`}>
                      {article.category}
                    </span>
                  </div>

                  {/* Floating Read Time Badge */}
                  <div className="absolute bottom-3 right-4 z-10 text-xs font-bold text-white flex items-center gap-1 drop-shadow-md">
                    <Clock className="w-3.5 h-3.5 text-amber-300" /> {article.readTime}
                  </div>
                </div>

                {/* Content Container */}
                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-1.5 text-xs font-extrabold text-emerald-600 dark:text-emerald-400">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{article.badge}</span>
                  </div>

                  <h3 className="text-xl font-bold font-heading text-slate-900 dark:text-white leading-snug group-hover:text-[#1E2B88] dark:group-hover:text-purple-300 transition-colors">
                    <Link href={`/${article.slug}`}>
                      {article.title}
                    </Link>
                  </h3>

                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-3">
                    {article.excerpt}
                  </p>
                </div>

              </div>

              {/* Bottom Card Footer CTA */}
              <div className="px-6 pb-6 pt-2 flex items-center justify-between border-t border-slate-100 dark:border-slate-800/80">
                <span className="text-xs font-semibold text-slate-400 dark:text-slate-500 flex items-center gap-1">
                  <BookOpen className="w-3.5 h-3.5" /> Technical Guide
                </span>

                <Link 
                  href={`/${article.slug}`}
                  className="text-xs font-extrabold text-[#1E2B88] dark:text-purple-300 group-hover:text-[#E01E6A] dark:group-hover:text-pink-400 flex items-center gap-1 transition-colors"
                >
                  Read Article <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
