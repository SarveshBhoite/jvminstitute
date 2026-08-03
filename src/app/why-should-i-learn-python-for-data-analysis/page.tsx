"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Calendar, 
  Clock, 
  Share2, 
  MessageCircle, 
  Copy, 
  Check, 
  ChevronRight, 
  BookOpen, 
  ArrowRight,
  Info,
  AlertTriangle,
  CheckCircle2,
  Sparkles
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LeadEnquiryModal from "@/components/LeadEnquiryModal";
import { blogPosts } from "@/data/blogData";

export default function WhyLearnPythonPage() {
  const [copied, setCopied] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  // Load the target blog post or fallback
  const post = blogPosts.find((p) => p.slug === "why-should-i-learn-python-for-data-analysis") || blogPosts[0];
  const relatedPosts = blogPosts.filter((p) => p.id !== post.id).slice(0, 3);

  const handleCopyLink = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAFC] dark:bg-[#0B0F19] text-slate-900 dark:text-slate-100 transition-colors duration-300 selection:bg-[#7C248C] selection:text-white">
      <Navbar />

      <main className="flex-grow pt-6 pb-20">
        
        {/* ========================================================= */}
        {/* 1. BREADCRUMB & ARTICLE HERO HEADER                       */}
        {/* ========================================================= */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center gap-2 text-xs font-bold text-slate-500 dark:text-slate-400">
            <Link href="/" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/blog" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
              Blog
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-slate-900 dark:text-slate-200 truncate max-w-[250px] sm:max-w-[400px]">
              {post.title}
            </span>
          </nav>

          {/* Category & Meta */}
          <div className="flex flex-wrap items-center gap-3 text-xs font-bold">
            <span className="px-3.5 py-1.5 rounded-full bg-purple-100 dark:bg-purple-950/90 text-[#7C3AED] dark:text-purple-300 uppercase tracking-wider font-extrabold border border-purple-200 dark:border-purple-800">
              {post.category}
            </span>
            <div className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400">
              <Calendar className="w-4 h-4 text-purple-600 dark:text-purple-400" />
              <span>Published {post.publishedAt}</span>
            </div>
            <div className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400">
              <Clock className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
              <span>{post.readTime}</span>
            </div>
          </div>

          {/* Main Title */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.2]">
            {post.title}
          </h1>

          {/* Excerpt / Lead Narrative */}
          <p className="text-base sm:text-xl text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
            {post.excerpt}
          </p>

          
          {/* Large Featured Image */}
          <div className="relative w-full h-[300px] sm:h-[450px] rounded-3xl overflow-hidden shadow-2xl border-2 border-slate-200 dark:border-slate-800">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover object-center"
              priority
            />
          </div>

        </section>

        {/* ========================================================= */}
        {/* 2. ARTICLE BODY CONTENT WITH STICKY TABLE OF CONTENTS     */}
        {/* ========================================================= */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Sticky Table of Contents Sidebar */}
            <aside className="hidden lg:block lg:col-span-3 sticky top-28 space-y-6">
              <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md space-y-4">
                <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-purple-600 dark:text-purple-400">
                  <BookOpen className="w-4 h-4" />
                  <span>TABLE OF CONTENTS</span>
                </div>
                <nav className="space-y-2">
                  {post.tableOfContents?.map((toc) => (
                    <a
                      key={toc.id}
                      href={`#${toc.id}`}
                      className="block text-xs font-semibold text-slate-600 dark:text-slate-300 hover:text-purple-600 dark:hover:text-purple-400 hover:translate-x-1 transition-all py-1"
                    >
                      {toc.title}
                    </a>
                  ))}
                </nav>
              </div>

              {/* Sidebar JVM Course Promo */}
              
            </aside>

            {/* Main Article Prose Content (9 Cols) */}
            <article className="lg:col-span-9 space-y-10">
              
              {/* Mobile Inline Table of Contents */}
              <div className="block lg:hidden p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
                <h3 className="text-xs font-black uppercase tracking-widest text-purple-600 dark:text-purple-400 flex items-center gap-2">
                  <BookOpen className="w-4 h-4" /> Table of Contents
                </h3>
                <ul className="space-y-1.5 text-xs font-semibold text-slate-700 dark:text-slate-300">
                  {post.tableOfContents?.map((toc) => (
                    <li key={toc.id}>
                      <a href={`#${toc.id}`} className="hover:text-purple-600 transition-colors">
                        {toc.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Render Article Content Sections */}
              {post.content?.map((sec, idx) => (
                <div key={idx} id={sec.sectionId} className="space-y-4 scroll-mt-28">
                  {sec.heading && (
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-snug">
                      {sec.heading}
                    </h2>
                  )}

                  {sec.paragraphs.map((pText, pIdx) => (
                    <p key={pIdx} className="text-slate-700 dark:text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
                      {pText}
                    </p>
                  ))}

                  {/* Callout Box */}
                  {sec.callout && (
                    <div className={`p-5 rounded-2xl border flex items-start gap-3.5 shadow-sm ${
                      sec.callout.type === "info"
                        ? "bg-purple-50 dark:bg-purple-950/60 border-purple-200 dark:border-purple-800/60 text-purple-900 dark:text-purple-200"
                        : sec.callout.type === "warning"
                        ? "bg-amber-50 dark:bg-amber-950/60 border-amber-200 dark:border-amber-800/60 text-amber-900 dark:text-amber-200"
                        : "bg-emerald-50 dark:bg-emerald-950/60 border-emerald-200 dark:border-emerald-800/60 text-emerald-900 dark:text-emerald-200"
                    }`}>
                      {sec.callout.type === "info" && <Info className="w-5 h-5 text-purple-600 shrink-0 mt-0.5" />}
                      {sec.callout.type === "warning" && <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />}
                      {sec.callout.type === "tip" && <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />}
                      <p className="text-xs sm:text-sm font-semibold leading-relaxed">
                        {sec.callout.text}
                      </p>
                    </div>
                  )}

                  {/* Code Block */}
                  {sec.codeBlock && (
                    <div className="rounded-2xl bg-slate-950 text-slate-100 overflow-hidden border border-slate-800 shadow-xl">
                      <div className="px-4 py-2 bg-slate-900 border-b border-slate-800 flex items-center justify-between text-xs font-mono text-slate-400">
                        <span>{sec.codeBlock.language.toUpperCase()}</span>
                        <span className="text-[10px] text-purple-400 uppercase">PYTHON DATA ANALYSIS</span>
                      </div>
                      <pre className="p-4 overflow-x-auto text-xs sm:text-sm font-mono leading-relaxed text-purple-200">
                        <code>{sec.codeBlock.code}</code>
                      </pre>
                    </div>
                  )}

                </div>
              ))}

            

         

              {/* JVM Course CTA Banner */}
              <div className="rounded-3xl bg-gradient-to-r from-purple-950 via-slate-900 to-indigo-950 text-white p-8 sm:p-12 border border-purple-500/30 relative overflow-hidden shadow-2xl space-y-6">
                <div className="space-y-3 relative z-10">
                  <span className="text-xs font-bold uppercase tracking-widest text-purple-300 block">
                    BECOME A HIGH-PAYING DATA ANALYST AT JVM INSTITUTE
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                    Master Python, SQL, Tableau & Data Engineering in Pune
                  </h3>
                  <p className="text-sm text-purple-200 leading-relaxed max-w-2xl">
                    Build real-world datasets under 1:1 mentor supervision with 100% placement assistance and interview preparation.
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-4 relative z-10">
                  <Link
                    href="/data-engineering-course-in-pune"
                    className="px-6 py-3.5 rounded-xl jvm-gradient-bg text-white font-extrabold text-sm shadow-xl hover:scale-[1.02] transition-transform flex items-center gap-2"
                  >
                    <span>Explore Data Engineering & Analytics Track</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <button
                    onClick={() => setModalOpen(true)}
                    className="px-6 py-3.5 rounded-xl bg-white text-slate-900 font-bold text-sm hover:bg-slate-100 transition-colors shadow-md cursor-pointer"
                  >
                    Download Detailed Prospectus
                  </button>
                </div>
              </div>

            </article>

          </div>
        </section>

        {/* Related Articles */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 space-y-8">
          <div className="flex items-center justify-between border-t border-slate-200 dark:border-slate-800 pt-10">
            <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Related Articles & Tutorials
            </h3>
            <Link
              href="/blog"
              className="text-xs font-extrabold text-purple-600 dark:text-purple-400 hover:underline flex items-center gap-1"
            >
              <span>View All Articles</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedPosts.map((relPost) => (
              <article
                key={relPost.id}
                className="group flex flex-col bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-all"
              >
                <Link href={`/blog/${relPost.slug}`} className="relative w-full h-44 overflow-hidden block">
                  <Image
                    src={relPost.image}
                    alt={relPost.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </Link>

                <div className="p-6 space-y-3 flex-grow flex flex-col justify-between">
                  <div className="space-y-2">
                    <span className="text-[11px] font-bold text-purple-600 dark:text-purple-400 uppercase tracking-wider">
                      {relPost.category}
                    </span>
                    <h4 className="text-base font-extrabold text-slate-900 dark:text-white group-hover:text-purple-600 transition-colors line-clamp-2">
                      <Link href={`/blog/${relPost.slug}`}>
                        {relPost.title}
                      </Link>
                    </h4>
                  </div>

                  <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500">
                    <span>{relPost.publishedAt}</span>
                    <span className="font-bold text-purple-600 dark:text-purple-400">{relPost.readTime}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

      </main>

      <Footer />

      {/* Lead Enquiry Modal */}
      <LeadEnquiryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        courseTitle="Python Data Analysis Prospectus"
      />
    </div>
  );
}
