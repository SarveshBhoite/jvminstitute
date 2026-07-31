"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams, notFound } from "next/navigation";
import { motion } from "framer-motion";
import { 
  Calendar, 
  Clock, 
  ArrowLeft, 
  Share2, 
  MessageCircle, 
  Copy, 
  Check, 
  ChevronRight, 
  BookOpen, 
  Sparkles,
  ArrowRight,
  Info,
  AlertTriangle,
  CheckCircle2
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LeadEnquiryModal from "@/components/LeadEnquiryModal";
import { blogPosts, BlogPost } from "@/data/blogData";

export default function SingleBlogPage() {
  const params = useParams();
  const slug = params?.slug as string;

  const [copied, setCopied] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  // Find Post by Slug or Fallback to First Post
  const post: BlogPost | undefined = blogPosts.find((p) => p.slug === slug) || blogPosts[0];

  if (!post) {
    notFound();
  }

  // Related Articles (filter out current post)
  const relatedPosts = blogPosts.filter((p) => p.id !== post.id).slice(0, 3);

  // Copy URL to Clipboard
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
            <span className="text-slate-900 dark:text-slate-200 truncate max-w-[200px] sm:max-w-[350px]">
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

          {/* Author Header Card */}
          <div className="pt-4 border-t border-b border-slate-200 dark:border-slate-800/80 py-4 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-purple-500/40 shadow-md">
                <Image
                  src={post.author.avatar}
                  alt={post.author.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-sm sm:text-base font-extrabold text-slate-900 dark:text-white">
                  {post.author.name}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                  {post.author.role}
                </p>
              </div>
            </div>

            {/* Social Share Group */}
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-slate-500 dark:text-slate-400 mr-1 flex items-center gap-1">
                <Share2 className="w-3.5 h-3.5" /> Share:
              </span>
              <button
                onClick={handleCopyLink}
                className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-purple-100 dark:hover:bg-purple-950 hover:text-purple-600 transition-colors cursor-pointer relative"
                title="Copy Article Link"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
              </button>
              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-sky-100 dark:hover:bg-sky-950 hover:text-sky-500 transition-colors"
                title="Share on Twitter"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent("https://jvminstitute.com/blog/" + post.slug)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-blue-100 dark:hover:bg-blue-950 hover:text-blue-600 transition-colors"
                title="Share on LinkedIn"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.78a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24z" />
                </svg>
              </a>
              <a
                href={`https://api.whatsapp.com/send?text=${encodeURIComponent(post.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-emerald-100 dark:hover:bg-emerald-950 hover:text-emerald-500 transition-colors"
                title="Share on WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Large Hero Image */}
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
            
            {/* Sticky Table of Contents Sidebar (Desktop) */}
            <aside className="hidden lg:block lg:col-span-3 sticky top-28 space-y-6">
              <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md space-y-4">
                <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-purple-600 dark:text-purple-400">
                  <BookOpen className="w-4 h-4" />
                  <span>TABLE OF CONTENTS</span>
                </div>
                <nav className="space-y-2">
                  {post.tableOfContents.map((toc) => (
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
              <div className="p-6 rounded-3xl bg-gradient-to-b from-purple-950 to-slate-900 text-white space-y-4 shadow-xl border border-purple-500/30">
                <span className="text-[10px] font-bold uppercase tracking-wider text-purple-300 bg-white/10 px-2.5 py-1 rounded-full">
                  PUNE CAMPUS BATCH
                </span>
                <h4 className="text-base font-extrabold">Data Engineering Master Track</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  24 Weeks Live Training on PySpark, AWS, Databricks & 100% Placement Support.
                </p>
                <button
                  onClick={() => setModalOpen(true)}
                  className="w-full py-2.5 rounded-xl jvm-gradient-bg text-white font-extrabold text-xs shadow-md hover:scale-[1.02] transition-transform cursor-pointer"
                >
                  Enroll Now
                </button>
              </div>
            </aside>

            {/* Main Article Prose Content (9 Cols) */}
            <article className="lg:col-span-9 space-y-10">
              
              {/* Mobile Inline Table of Contents */}
              <div className="block lg:hidden p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
                <h3 className="text-xs font-black uppercase tracking-widest text-purple-600 dark:text-purple-400 flex items-center gap-2">
                  <BookOpen className="w-4 h-4" /> Table of Contents
                </h3>
                <ul className="space-y-1.5 text-xs font-semibold text-slate-700 dark:text-slate-300">
                  {post.tableOfContents.map((toc) => (
                    <li key={toc.id}>
                      <a href={`#${toc.id}`} className="hover:text-purple-600 transition-colors">
                        {toc.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Render Editorial Sections */}
              {post.content.map((sec, idx) => (
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

                  {/* Code Block Snippet */}
                  {sec.codeBlock && (
                    <div className="rounded-2xl bg-slate-950 text-slate-100 overflow-hidden border border-slate-800 shadow-xl">
                      <div className="px-4 py-2 bg-slate-900 border-b border-slate-800 flex items-center justify-between text-xs font-mono text-slate-400">
                        <span>{sec.codeBlock.language.toUpperCase()}</span>
                        <span className="text-[10px] text-purple-400 uppercase">UTF-8 SOURCE</span>
                      </div>
                      <pre className="p-4 overflow-x-auto text-xs sm:text-sm font-mono leading-relaxed text-purple-200">
                        <code>{sec.codeBlock.code}</code>
                      </pre>
                    </div>
                  )}

                </div>
              ))}

              {/* Tags Cloud Bar */}
              <div className="pt-6 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center gap-2">
                <span className="text-xs font-bold text-slate-500 dark:text-slate-400 mr-2">Tags:</span>
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-bold"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Author Bio Banner Footer */}
              <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-lg flex flex-col sm:flex-row items-center sm:items-start gap-6">
                <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-purple-500 shrink-0 shadow-md">
                  <Image
                    src={post.author.avatar}
                    alt={post.author.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="space-y-2 text-center sm:text-left">
                  <h4 className="text-lg font-extrabold text-slate-900 dark:text-white">
                    Written by {post.author.name}
                  </h4>
                  <p className="text-xs font-bold text-purple-600 dark:text-purple-400">
                    {post.author.role}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {post.author.bio}
                  </p>
                </div>
              </div>

              {/* ========================================================= */}
              {/* 3. JVM COURSE CTA BANNER                                  */}
              {/* ========================================================= */}
              <div className="rounded-3xl bg-gradient-to-r from-purple-950 via-slate-900 to-indigo-950 text-white p-8 sm:p-12 border border-purple-500/30 relative overflow-hidden shadow-2xl space-y-6">
                <div className="space-y-3 relative z-10">
                  <span className="text-xs font-bold uppercase tracking-widest text-purple-300 block">
                    CAREER ADVANCEMENT AT JVM INSTITUTE
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                    Ready to Master Data Engineering in Pune?
                  </h3>
                  <p className="text-sm text-purple-200 leading-relaxed max-w-2xl">
                    Get hands-on training with PySpark, AWS Redshift, Databricks, and Apache Airflow under 1:1 mentor guidance with 100% placement support.
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-4 relative z-10">
                  <Link
                    href="/data-engineering-course-in-pune"
                    className="px-6 py-3.5 rounded-xl jvm-gradient-bg text-white font-extrabold text-sm shadow-xl hover:scale-[1.02] transition-transform flex items-center gap-2"
                  >
                    <span>Explore Data Engineering Course</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <button
                    onClick={() => setModalOpen(true)}
                    className="px-6 py-3.5 rounded-xl bg-white text-slate-900 font-bold text-sm hover:bg-slate-100 transition-colors shadow-md cursor-pointer"
                  >
                    Download Program Prospectus
                  </button>
                </div>
              </div>

            </article>

          </div>
        </section>

        {/* ========================================================= */}
        {/* 4. RELATED ARTICLES GRID                                  */}
        {/* ========================================================= */}
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
        courseTitle="Blog Career Prospectus Request"
      />
    </div>
  );
}
