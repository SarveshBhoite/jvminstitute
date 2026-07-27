"use client";

import React from "react";
import Link from "next/link";
import { 
  ArrowRight, 
  Clock, 
  ChevronRight,
  Bookmark
} from "lucide-react";

const rankedBlogArticles = [
  {
    slug: "learn-python-for-data-analysis",
    title: "Learn Python for Data Analysis: Complete Roadmap for Beginners",
    excerpt: "Discover the step-by-step guide to mastering Python, Pandas, NumPy, and data manipulation techniques tailored for data engineering careers.",
    category: "Python & Analysis",
    date: "Top Ranking Guide",
    readTime: "8 min read",
  },
  {
    slug: "why-should-i-learn-python-for-data-analysis",
    title: "Why Should I Learn Python for Data Analysis in 2026?",
    excerpt: "Explore job market trends, salary potential, and why Python has become the standard language for modern big data pipelines and ETL workflows.",
    category: "Career Insights",
    date: "Top Ranking Guide",
    readTime: "6 min read",
  },
  {
    slug: "how-to-read-xml-files-into-python",
    title: "How to Read XML Files into Python Pandas DataFrames (With Code)",
    excerpt: "Practical tutorial demonstrating ElementTree and Pandas read_xml methods to parse complex nested XML schemas into clean tabular data.",
    category: "Hands-on Code Tutorial",
    date: "Top Ranking Guide",
    readTime: "5 min read",
  },
];

export default function BlogCrossLinkSection() {
  return (
    <section className="py-16 md:py-24 bg-slate-50 dark:bg-[#0B0F19] relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-950/80 text-[#1E2B88] dark:text-indigo-300 text-xs font-extrabold uppercase tracking-wider">
              <Bookmark className="w-3.5 h-3.5" /> High-Authority Technical Guides
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900 dark:text-white tracking-tight">
              Featured Articles & <span className="jvm-gradient-text">Top-Ranked Tutorials</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-sm md:text-base max-w-2xl">
              Read our most popular technical guides written by senior JVM Institute instructors and industry data engineers.
            </p>
          </div>

          <Link 
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#1E2B88] dark:text-purple-300 hover:text-[#7C248C] dark:hover:text-purple-200 transition-colors shrink-0 group"
          >
            Explore All Blog Posts 
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 3 Grid Articles */}
        <div className="grid md:grid-cols-3 gap-8">
          {rankedBlogArticles.map((article, index) => (
            <article 
              key={index}
              className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs font-semibold text-slate-500 dark:text-slate-400">
                  <span className="bg-purple-50 dark:bg-purple-950/60 text-[#7C248C] dark:text-purple-300 font-extrabold px-3 py-1 rounded-full">
                    {article.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" /> {article.readTime}
                  </span>
                </div>

                <h3 className="text-xl font-bold font-heading text-slate-900 dark:text-white leading-snug hover:text-[#1E2B88] dark:hover:text-purple-300 transition-colors">
                  <Link href={`/${article.slug}`}>
                    {article.title}
                  </Link>
                </h3>

                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-3">
                  {article.excerpt}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <span className="text-xs font-extrabold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2.5 py-0.5 rounded-md">
                  {article.date}
                </span>

                <Link 
                  href={`/${article.slug}`}
                  className="text-xs font-bold text-[#1E2B88] dark:text-purple-300 hover:text-[#E01E6A] dark:hover:text-pink-400 flex items-center gap-1 transition-colors"
                >
                  Read Article <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
