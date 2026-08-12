"use client";

import React, { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Search, 
  Clock, 
  Calendar, 
  ArrowRight, 
  Sparkles, 
  BookOpen, 
  XCircle,
  TrendingUp,
  Loader2,
  User
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { blogCategories, mapDBBlogToBlogPost, BlogPost, blogPosts as staticBlogPosts } from "@/data/blogData";

export default function BlogListingPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All Blogs");
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch blogs from API and combine with static fallback blog posts
  useEffect(() => {
    async function loadBlogs() {
      try {
        setLoading(true);
        const res = await fetch("/api/blogs");
        const data = await res.json();
        if (data.success && Array.isArray(data.data) && data.data.length > 0) {
          const mappedFromDB = data.data.map((b: any, idx: number) => mapDBBlogToBlogPost(b, idx));
          // Combine DB blogs with static blogs, avoiding duplicate slugs
          const dbSlugs = new Set(mappedFromDB.map((b: BlogPost) => b.slug));
          const filteredStatic = staticBlogPosts.filter((b: BlogPost) => !dbSlugs.has(b.slug));
          setBlogPosts([...mappedFromDB, ...filteredStatic]);

        } else {
          setBlogPosts(staticBlogPosts);
        }
      } catch (err) {
        console.error("Failed to fetch blogs:", err);
        setBlogPosts(staticBlogPosts);
      } finally {
        setLoading(false);
      }
    }
    loadBlogs();
  }, []);


  // Filtered Blog List Logic
  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchesCategory =
        selectedCategory === "All Blogs" || post.category === selectedCategory;

      const query = searchQuery.toLowerCase().trim();
      if (!query) return matchesCategory;

      const matchesTitle = post.title?.toLowerCase().includes(query);
      const matchesExcerpt = post.excerpt?.toLowerCase().includes(query);
      const matchesCategoryName = post.category?.toLowerCase().includes(query);
      const matchesAuthor = post.author?.name?.toLowerCase().includes(query);
      const matchesTags = post.tags && post.tags.some((tag) => tag.toLowerCase().includes(query));

      const matchesSearch = matchesTitle || matchesExcerpt || matchesCategoryName || matchesAuthor || matchesTags;

      return matchesCategory && matchesSearch;
    });
  }, [blogPosts, searchQuery, selectedCategory]);

  // Featured Post (first featured post or first item)
  const featuredPost = useMemo(() => {
    return blogPosts.find((p) => p.featured) || blogPosts[0];
  }, [blogPosts]);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAFC] dark:bg-[#0B0F19] text-slate-900 dark:text-slate-100 transition-colors duration-300 selection:bg-[#7C248C] selection:text-white">
      <Navbar />

      <main className="flex-grow pt-0">
        
        {/* ========================================================= */}
        {/* 1. COMPACT HERO SECTION WITH SEARCH & INTRO               */}
        {/* ========================================================= */}
        <section className="relative py-12 sm:py-16 bg-gradient-to-b from-[#F5F3FF] via-[#FAFAFC] to-white dark:from-[#0B0F19] dark:via-[#111827] dark:to-[#0B0F19] border-b border-purple-100/80 dark:border-slate-800/80 overflow-hidden">
          
          {/* Transparent Background Image Layer */}
          <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-15 dark:opacity-10">
            <Image
              src="/course.jpg"
              alt="JVM Institute Tech Hub Background"
              fill
              className="object-cover object-center mix-blend-multiply dark:mix-blend-normal"
              priority
            />
          </div>

          {/* Animated Ambient Glow Spheres */}
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 dark:bg-purple-600/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500/10 dark:bg-indigo-600/15 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-3xl mx-auto space-y-5">
              
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100/90 dark:bg-purple-950/90 border border-purple-200 dark:border-purple-800 text-[#7C3AED] dark:text-[#A78BFA] text-xs font-black tracking-widest uppercase shadow-xs"
              >
                <Sparkles className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                <span>JVM KNOWLEDGE HUB • TECH & CAREER PLAYBOOKS</span>
              </motion.div>

              {/* Title */}
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight"
              >
                Master <span className="jvm-gradient-text">Data Engineering, Cloud & AI</span> Insights
              </motion.h1>

              {/* Short Description */}
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed"
              >
                In-depth technical architecture guides, PySpark code benchmarks, cloud warehouse comparisons, and Pune IT salary playbooks written by senior industry architects.
              </motion.p>

              {/* Search Bar Container */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="pt-2 max-w-xl mx-auto"
              >
                <div className="relative flex items-center">
                  <Search className="absolute left-4 w-5 h-5 text-slate-400 pointer-events-none" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search articles e.g. PySpark, Kafka, AWS, Salaries..."
                    className="w-full pl-12 pr-10 py-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-300/80 dark:border-slate-800 text-slate-900 dark:text-white placeholder-slate-400 text-sm shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery("")}
                      className="absolute right-3.5 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
                      aria-label="Clear Search"
                    >
                      <XCircle className="w-5 h-5" />
                    </button>
                  )}
                </div>
              </motion.div>

              {/* Key Stats Bar */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="pt-2 flex flex-wrap items-center justify-center gap-6 text-xs font-bold text-slate-600 dark:text-slate-400"
              >
                <div className="flex items-center gap-1.5">
                  <BookOpen className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                  <span>Expert Technical Guides</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <TrendingUp className="w-4 h-4 text-emerald-500" />
                  <span>10,000+ Monthly Tech Readers</span>
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 2. CATEGORY FILTER TABS                                   */}
        {/* ========================================================= */}
        <section className="py-6 bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 sticky top-16 z-30 shadow-xs backdrop-blur-md bg-white/90 dark:bg-slate-950/90">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
              {blogCategories.map((category) => {
                const isActive = selectedCategory === category;
                return (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-extrabold whitespace-nowrap transition-all cursor-pointer ${
                      isActive
                        ? "jvm-gradient-bg text-white shadow-md shadow-purple-500/20"
                        : "bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-800"
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
          
          {loading ? (
            <div className="py-24 text-center flex flex-col items-center justify-center space-y-3">
              <Loader2 className="w-8 h-8 text-purple-600 animate-spin" />
              <p className="text-sm font-medium text-slate-500">Loading articles...</p>
            </div>
          ) : (
            <>
              {/* ========================================================= */}
              {/* 3. FEATURED ARTICLE BANNER                                */}
              {/* ========================================================= */}
              {!searchQuery && selectedCategory === "All Blogs" && featuredPost && (
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="group relative rounded-3xl bg-white dark:bg-slate-900 border border-purple-100 dark:border-slate-800 overflow-hidden shadow-xl hover:shadow-2xl transition-all"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
                    
                    {/* Featured Image */}
                    <div className="lg:col-span-5 relative aspect-[3/2] lg:aspect-auto lg:h-[260px] overflow-hidden bg-slate-100 dark:bg-slate-900">
                      <Image
                        src={featuredPost.image || "/course.jpg"}
                        alt={featuredPost.title}
                        fill
                        className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1.5 rounded-full bg-[#7C248C] text-white text-xs font-black uppercase tracking-wider shadow-md">
                          FEATURED ARTICLE
                        </span>
                      </div>
                    </div>

                    {/* Featured Details */}
                    <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-4">
                      <div className="space-y-4">
                        
                        {/* Category & Meta */}
                        <div className="flex flex-wrap items-center gap-3 text-xs font-bold text-slate-500 dark:text-slate-400">
                          <span className="px-3 py-1 rounded-lg bg-purple-100 dark:bg-purple-950/80 text-[#7C3AED] dark:text-purple-300 font-extrabold">
                            {featuredPost.category}
                          </span>
                          <div className="flex items-center gap-1">
                            <Calendar className="w-3.5 h-3.5" />
                            <span>{featuredPost.publishedAt}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
                            <span>{featuredPost.readTime}</span>
                          </div>
                        </div>

                        {/* Title */}
                        <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors leading-tight">
                          <Link href={`/blog/${featuredPost.slug}`}>
                            {featuredPost.title}
                          </Link>
                        </h2>

                        {/* Excerpt */}
                        <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed line-clamp-3">
                          {featuredPost.excerpt}
                        </p>
                      </div>

                      {/* Author & CTA Button */}
                      <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center justify-between gap-4">
                        <div className="flex items-center gap-2.5">
                          <div className="relative w-8 h-8 rounded-full overflow-hidden border border-purple-200 dark:border-purple-800 shadow-md shrink-0">
                            <Image
                              src={featuredPost.author?.avatar || "/anand.png"}
                              alt={featuredPost.author?.name || "JVM Technical Team"}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <h4 className="text-xs font-extrabold text-slate-900 dark:text-white">
                            JVM Technical Team
                          </h4>
                        </div>

                        <Link
                          href={`/blog/${featuredPost.slug}`}
                          className="px-5 py-2.5 rounded-xl jvm-gradient-bg text-white font-extrabold text-xs sm:text-sm shadow-md hover:shadow-purple-500/20 hover:scale-[1.02] transition-all flex items-center gap-2"
                        >
                          <span>Read Featured Article</span>
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>

                    </div>

                  </div>
                </motion.section>
              )}

              {/* ========================================================= */}
              {/* 4. RESPONSIVE BLOG CARDS GRID                             */}
              {/* ========================================================= */}
              <section className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                    {selectedCategory === "All Blogs" ? "All Technical Articles" : `${selectedCategory} Articles`}
                    <span className="ml-2 text-xs font-bold px-2.5 py-1 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                      {filteredPosts.length}
                    </span>
                  </h2>
                </div>

                {filteredPosts.length === 0 ? (
                  <div className="py-16 text-center bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 space-y-4">
                    <BookOpen className="w-12 h-12 text-slate-400 mx-auto" />
                    <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200">No Articles Found</h3>
                    <p className="text-sm text-slate-500 max-w-md mx-auto">
                      {searchQuery
                        ? `We couldn't find any articles matching "${searchQuery}".`
                        : "There are currently no blog posts published. Check back soon!"}
                    </p>
                    {searchQuery && (
                      <button
                        onClick={() => {
                          setSearchQuery("");
                          setSelectedCategory("All Blogs");
                        }}
                        className="px-6 py-2.5 rounded-xl bg-purple-600 text-white font-bold text-xs shadow-md hover:bg-purple-700 transition-colors"
                      >
                        Reset All Filters
                      </button>
                    )}
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimatePresence mode="popLayout">
                      {filteredPosts.map((post, idx) => {
                        const targetHref = (post.slug === "learn-python-for-data-analysis" || post.slug === "why-should-i-learn-python-for-data-analysis" || post.slug === "how-to-read-xml-files-into-python")
                          ? `/${post.slug}`
                          : `/blog/${post.slug}`;

                        return (
                          <motion.article
                            key={post.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.4, delay: idx * 0.05 }}
                            className="group flex flex-col bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/90 dark:border-slate-800 overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
                          >
                            {/* Image Container with Zoom Effect */}
                            <Link href={targetHref} className="relative w-full h-52 overflow-hidden block">
                              <Image
                                src={post.image || "/course.jpg"}
                                alt={post.title}
                                fill
                                className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                              />
                              <div className="absolute top-3 left-3">
                                <span className="px-3 py-1 rounded-full bg-slate-900/90 text-white text-[11px] font-black tracking-wider shadow-sm backdrop-blur-xs">
                                  {post.category}
                                </span>
                              </div>
                            </Link>

                            {/* Card Content */}
                            <div className="p-6 flex flex-col flex-grow justify-between space-y-4">
                              <div className="space-y-3">
                                
                                {/* Publish Date & Read Time */}
                                <div className="flex items-center gap-4 text-xs font-semibold text-slate-500 dark:text-slate-400">
                                  <div className="flex items-center gap-1">
                                    <Calendar className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
                                    <span>{post.publishedAt}</span>
                                  </div>
                                  <div className="flex items-center gap-1">
                                    <Clock className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
                                    <span>{post.readTime}</span>
                                  </div>
                                </div>

                                {/* Title */}
                                <h3 className="text-lg font-extrabold text-slate-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors leading-snug line-clamp-2">
                                  <Link href={targetHref}>
                                    {post.title}
                                  </Link>
                                </h3>

                                {/* Excerpt */}
                                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-3">
                                  {post.excerpt}
                                </p>

                              </div>

                              {/* Author Footnote & Read More Button */}
                              <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                  <div className="relative w-7 h-7 rounded-full overflow-hidden border border-purple-200 dark:border-purple-800 shadow-sm shrink-0">
                                    <Image
                                      src={post.author?.avatar || "/anand.png"}
                                      alt={post.author?.name || "JVM Technical Team"}
                                      fill
                                      className="object-cover"
                                    />
                                  </div>
                                  <span className="text-xs font-bold text-slate-700 dark:text-slate-300 truncate max-w-[120px]">
                                    JVM Technical Team
                                  </span>
                                </div>

                                <Link
                                  href={targetHref}
                                  className="inline-flex items-center gap-1 text-xs font-black text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors group/btn"
                                >
                                  <span>Read More</span>
                                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                                </Link>
                              </div>

                            </div>
                          </motion.article>
                        );
                      })}

                    </AnimatePresence>
                  </div>
                )}
              </section>
            </>
          )}

          {/* ========================================================= */}
          {/* 5. NEWSLETTER SUBSCRIBER BANNER                          */}
          {/* ========================================================= */}
          <section className="rounded-3xl bg-gradient-to-r from-purple-950 via-slate-900 to-indigo-950 text-white p-8 sm:p-12 border border-purple-500/30 relative overflow-hidden shadow-2xl">
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-3">
                <span className="text-xs font-bold uppercase tracking-widest text-purple-300 block">
                  WEEKLY TECH DISPATCH
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                  Get Pune&apos;s Top Tech & Career Guides in Your Inbox
                </h3>
                <p className="text-sm text-purple-200 leading-relaxed">
                  Join 10,000+ data engineers, cloud developers, and students receiving weekly PySpark benchmarks, SQL tricks, and interview questions.
                </p>
              </div>

              <div className="lg:col-span-5">
                <form 
                  onSubmit={async (e) => {
                    e.preventDefault();
                    const target = e.target as any;
                    const email = target.email?.value || "";
                    try {
                      await fetch("/api/leads", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({
                          name: "Newsletter Subscriber",
                          email,
                          phone: "9999999999",
                          courseSlug: "Tech Blog Newsletter",
                          message: "Subscribed to JVM Weekly Tech & Career Insights",
                          source: "BLOG_NEWSLETTER_FORM",
                        }),
                      });
                    } catch (err) {
                      console.error("Newsletter lead error:", err);
                    }
                    alert("Thank you for subscribing to JVM Institute Tech Insights!");
                  }}
                  className="flex flex-col sm:flex-row gap-3"
                >
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Enter your email address"
                    className="px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-purple-400 flex-grow"
                  />
                  <button
                    type="submit"
                    className="px-6 py-3 rounded-xl bg-white text-slate-900 font-extrabold text-sm hover:bg-slate-100 transition-colors shadow-lg cursor-pointer whitespace-nowrap"
                  >
                    Subscribe Free
                  </button>
                </form>
              </div>
            </div>
          </section>

        </div>

      </main>

      <Footer />
    </div>
  );
}
