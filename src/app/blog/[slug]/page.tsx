"use client";

import React, { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
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
  ArrowRight,
  Info,
  AlertTriangle,
  CheckCircle2,
  Loader2,
  User
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LeadEnquiryModal from "@/components/LeadEnquiryModal";
import { mapDBBlogToBlogPost, blogPosts, BlogPost } from "@/data/blogData";

export default function SingleBlogPage() {
  const params = useParams();
  const slug = params?.slug as string;

  const [copied, setCopied] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [post, setPost] = useState<BlogPost | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [notFoundState, setNotFoundState] = useState(false);

  useEffect(() => {
    async function loadPost() {
      if (!slug) return;
      try {
        setLoading(true);
        setNotFoundState(false);
        const res = await fetch(`/api/blogs/${slug}`);
        const data = await res.json();
        
        if (data.success && data.data) {
          const mapped = mapDBBlogToBlogPost(data.data);
          setPost(mapped);

          // Fetch related posts
          const allRes = await fetch("/api/blogs");
          const allData = await allRes.json();
          if (allData.success && Array.isArray(allData.data)) {
            const mappedAll = allData.data
              .map(mapDBBlogToBlogPost)
              .filter((p: BlogPost) => p.slug !== slug)
              .slice(0, 3);
            setRelatedPosts(mappedAll);
          }
        } else {
          // Fallback to static blog data if present
          const staticPost = blogPosts.find((p) => p.slug === slug);
          if (staticPost) {
            setPost(staticPost);
            setRelatedPosts(blogPosts.filter((p) => p.slug !== slug).slice(0, 3));
          } else {
            setNotFoundState(true);
          }
        }
      } catch (err) {
        console.error("Error fetching blog post:", err);
        const staticPost = blogPosts.find((p) => p.slug === slug);
        if (staticPost) {
          setPost(staticPost);
          setRelatedPosts(blogPosts.filter((p) => p.slug !== slug).slice(0, 3));
        } else {
          setNotFoundState(true);
        }
      } finally {
        setLoading(false);
      }
    }
    loadPost();
  }, [slug]);

  // Copy URL to Clipboard
  const handleCopyLink = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  // Dynamic extraction of Table of Contents for ALL blogs
  const effectiveTOC = useMemo(() => {
    if (!post) return [];
    if (post.tableOfContents && post.tableOfContents.length > 0) {
      return post.tableOfContents;
    }
    if (post.longDescriptionHtml) {
      const headings: { id: string; title: string }[] = [];
      const regex = /<h2[^>]*?(?:id=["']([^"']+)["'])?[^>]*?>([\s\S]*?)<\/h2>/gi;
      let match;
      let count = 0;
      while ((match = regex.exec(post.longDescriptionHtml)) !== null) {
        count++;
        const rawId = match[1];
        const rawTitle = match[2].replace(/<[^>]+>/g, "").trim();
        const id = rawId || `section-${count}`;
        if (rawTitle) {
          headings.push({ id, title: rawTitle });
        }
      }
      if (headings.length > 0) return headings;
    }
    if (post.content && post.content.length > 0) {
      return post.content
        .filter((c) => c.heading || c.sectionId)
        .map((c) => ({
          id: c.sectionId || "section",
          title: c.heading || c.sectionId || "",
        }));
    }
    return [];
  }, [post]);

  const hasTOC = effectiveTOC.length > 0;

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col bg-[#FAFAFC] dark:bg-[#0B0F19] text-slate-900 dark:text-slate-100">
        <Navbar />
        <main className="flex-grow flex flex-col items-center justify-center py-24 space-y-4">
          <Loader2 className="w-10 h-10 text-purple-600 animate-spin" />
          <p className="text-sm font-medium text-slate-500">Loading article...</p>
        </main>
        <Footer />
      </div>
    );
  }

  if (notFoundState || !post) {
    return (
      <div className="min-h-screen flex flex-col bg-[#FAFAFC] dark:bg-[#0B0F19] text-slate-900 dark:text-slate-100">
        <Navbar />
        <main className="flex-grow flex flex-col items-center justify-center py-24 px-4 text-center space-y-6">
          <BookOpen className="w-16 h-16 text-purple-600/40" />
          <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white">Article Not Found</h1>
          <p className="text-slate-600 dark:text-slate-400 max-w-md text-sm sm:text-base">
            The blog article you are looking for might have been moved or removed.
          </p>
          <Link
            href="/blog"
            className="px-6 py-3 rounded-xl jvm-gradient-bg text-white font-extrabold text-xs sm:text-sm shadow-md hover:scale-[1.02] transition-transform inline-flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Blogs</span>
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

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

          {/* Author Details Bar with User Icon */}
          <div className="flex items-center gap-2.5 py-2 px-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm w-fit">
            <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-purple-600 to-indigo-600 flex items-center justify-center text-white shadow-md shrink-0">
              <User className="w-4 h-4" />
            </div>
            <h4 className="text-xs font-extrabold text-slate-900 dark:text-white">
              JVM Technical Team
            </h4>
          </div>



          {/* Large Hero Image (Edge-to-Edge Fit on Mobile, Full Cover on Desktop) */}
          <div className="relative w-full aspect-[16/9] sm:h-[450px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border-2 border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-900">
            <Image
              src={post.image || "/course.jpg"}
              alt={post.title}
              fill
              className="object-contain sm:object-cover object-center"
              priority
            />
          </div>

        </section>

        {/* ========================================================= */}
        {/* 2. ARTICLE BODY CONTENT WITH STICKY TABLE OF CONTENTS     */}
        {/* ========================================================= */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Sticky Table of Contents Sidebar (Desktop Index List) */}
            {hasTOC && (
              <aside className="hidden lg:block lg:col-span-4 sticky top-28 space-y-6">
                <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl space-y-4">
                  <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-purple-600 dark:text-purple-400 border-b border-slate-100 dark:border-slate-800 pb-3">
                    <BookOpen className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                    <span>ARTICLE INDEX &amp; SECTIONS</span>
                  </div>
                  <nav className="space-y-1.5 max-h-[60vh] overflow-y-auto pr-1">
                    {effectiveTOC.map((toc, i) => (
                      <a
                        key={toc.id || i}
                        href={`#${toc.id}`}
                        className="group flex items-start gap-2 text-xs font-semibold text-slate-600 dark:text-slate-300 hover:text-purple-600 dark:hover:text-purple-400 hover:translate-x-1 transition-all py-1.5 px-2 rounded-lg hover:bg-purple-50 dark:hover:bg-purple-950/50"
                      >
                        <span className="text-[10px] font-bold text-purple-500 shrink-0 mt-0.5">{i + 1}.</span>
                        <span className="leading-snug">{toc.title}</span>
                      </a>
                    ))}
                  </nav>
                </div>

                {/* Sidebar JVM Course Promo */}
                <div className="p-6 rounded-3xl bg-gradient-to-b from-purple-950 via-slate-900 to-slate-950 text-white space-y-4 shadow-xl border border-purple-500/30">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-purple-300 bg-white/10 px-2.5 py-1 rounded-full">
                    PUNE CAMPUS BATCH
                  </span>
                  <h4 className="text-base font-extrabold text-white">Data Engineering Master Track</h4>
                  <p className="text-xs text-purple-200/90 leading-relaxed">
                    24 Weeks Live Industry Mentorship on PySpark, AWS, Databricks &amp; 100% Placement Support.
                  </p>
                  <button
                    onClick={() => setModalOpen(true)}
                    className="w-full py-3 rounded-xl jvm-gradient-bg text-white font-extrabold text-xs shadow-md hover:scale-[1.02] transition-transform cursor-pointer"
                  >
                    Enroll Now / Request Call
                  </button>
                </div>
              </aside>
            )}

            {/* Main Article Content Column (Narrow Focused Width for Optimal Reading) */}
            <article className={`${hasTOC ? "lg:col-span-8" : "lg:col-span-12 max-w-4xl mx-auto"} space-y-8`}>
              
              {/* Mobile Inline Table of Contents */}
              {hasTOC && (
                <div className="block lg:hidden p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
                  <h3 className="text-xs font-black uppercase tracking-widest text-purple-600 dark:text-purple-400 flex items-center gap-2">
                    <BookOpen className="w-4 h-4" /> Quick Section Index
                  </h3>
                  <ul className="space-y-2 text-xs font-medium text-slate-700 dark:text-slate-300">
                    {effectiveTOC.map((toc, i) => (
                      <li key={toc.id || i}>
                        <a href={`#${toc.id}`} className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors flex items-center gap-2">
                          <span className="text-purple-500 font-bold">{i + 1}.</span>
                          <span>{toc.title}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Render HTML content if longDescriptionHtml exists */}
              {post.longDescriptionHtml && (
                <div 
                  className="prose dark:prose-invert max-w-none text-slate-700 dark:text-slate-300 text-base sm:text-lg leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: post.longDescriptionHtml }}
                />
              )}

              {/* Render Structured Sections if present */}
              {post.content && post.content.map((sec, idx) => (
                <div key={idx} id={sec.sectionId} className="space-y-4 scroll-mt-28">
                  {sec.heading && (
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-snug">
                      {sec.heading}
                    </h2>
                  )}

                  {sec.paragraphs && sec.paragraphs.map((pText, pIdx) => (
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
              {post.tags && post.tags.length > 0 && (
                <div className="pt-6 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center gap-2">
                  <span className="text-xs font-bold text-slate-500 dark:text-slate-400 mr-2">Tags:</span>
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-extrabold"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              )}



            </article>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 3. RELATED ARTICLES SECTION                               */}
        {/* ========================================================= */}
        {relatedPosts.length > 0 && (
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 space-y-8">
            <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-4">
              <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                Related Articles You Might Like
              </h2>
              <Link
                href="/blog"
                className="text-xs font-extrabold text-purple-600 dark:text-purple-400 hover:underline flex items-center gap-1"
              >
                <span>View All Articles</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((rel) => (
                <article
                  key={rel.id}
                  className="group flex flex-col bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-md hover:shadow-xl transition-all"
                >
                  <Link href={`/blog/${rel.slug}`} className="relative w-full h-44 overflow-hidden block">
                    <Image
                      src={rel.image || "/course.jpg"}
                      alt={rel.title}
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                  </Link>

                  <div className="p-5 flex flex-col flex-grow justify-between space-y-3">
                    <div className="space-y-2">
                      <span className="text-[10px] font-black uppercase text-purple-600 dark:text-purple-400 tracking-wider">
                        {rel.category}
                      </span>
                      <h3 className="text-base font-extrabold text-slate-900 dark:text-white group-hover:text-purple-600 transition-colors line-clamp-2">
                        <Link href={`/blog/${rel.slug}`}>
                          {rel.title}
                        </Link>
                      </h3>
                    </div>

                    <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500">
                      <span>{rel.publishedAt}</span>
                      <Link href={`/blog/${rel.slug}`} className="font-bold text-purple-600 hover:underline">
                        Read
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}

      </main>

      <Footer />

      {/* Enquiry Modal */}
      <LeadEnquiryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        courseTitle="Data Engineering Master Track"
      />
    </div>
  );
}
