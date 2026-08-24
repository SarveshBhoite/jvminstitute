"use client";

import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import {
  BookOpen,
  Lock,
  Unlock,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Zap,
  RotateCcw,
  Search,
  Eye
} from "lucide-react";

interface StudyCourse {
  id: string;
  slug: string;
  title: string;
  description: string;
  subject: string;
  badge?: string;
  price: number;
  freeModulesCount: number;
  coverImage?: string;
  modules: {
    id: string;
    moduleNumber: number;
    title: string;
    description?: string;
    readTime: string;
  }[];
}

export default function StudyMaterialPage() {
  const [courses, setCourses] = useState<StudyCourse[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  // Access restoration modal state
  const [showRestoreModal, setShowRestoreModal] = useState(false);
  const [restoreInput, setRestoreInput] = useState("");
  const [restoreStatus, setRestoreStatus] = useState<{ type: "idle" | "loading" | "success" | "error"; msg: string }>({
    type: "idle",
    msg: ""
  });

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const res = await fetch("/api/study-materials/courses");
      const data = await res.json();
      if (data.success && data.data) {
        setCourses(data.data);
      }
    } catch (err) {
      console.error("Failed to load study courses:", err);
    } finally {
      setLoading(false);
    }
  };

  const filteredCourses = React.useMemo(() => {
    if (!searchQuery.trim()) return courses;
    const q = searchQuery.toLowerCase().trim();
    return courses.filter((c) => {
      const matchTitle = c.title?.toLowerCase().includes(q);
      const matchSubject = c.subject?.toLowerCase().includes(q);
      const matchDesc = c.description?.toLowerCase().includes(q);
      const matchModules = c.modules?.some(
        (m) =>
          m.title?.toLowerCase().includes(q) ||
          m.description?.toLowerCase().includes(q)
      );
      return matchTitle || matchSubject || matchDesc || matchModules;
    });
  }, [courses, searchQuery]);

  const handleRestoreAccess = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!restoreInput.trim()) return;

    setRestoreStatus({ type: "loading", msg: "Verifying passcode or email/phone..." });

    try {
      // Check across all courses
      let restoredCount = 0;
      for (const course of courses) {
        const res = await fetch("/api/study-materials/access-check", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            courseId: course.id,
            accessCode: restoreInput.trim(),
            userEmailPhone: restoreInput.trim(),
          })
        });

        const data = await res.json();
        if (data.success && data.isUnlocked && data.restoredAccessKey) {
          localStorage.setItem(`jvm_study_access_${course.id}`, data.restoredAccessKey);
          restoredCount++;
        }
      }

      if (restoredCount > 0) {
        setRestoreStatus({ type: "success", msg: `✅ Access restored for ${restoredCount} course(s)! Redirecting...` });
        setTimeout(() => {
          setShowRestoreModal(false);
          setRestoreStatus({ type: "idle", msg: "" });
          setRestoreInput("");
        }, 2000);
      } else {
        setRestoreStatus({ type: "error", msg: "❌ Invalid passcode or email/phone number. Please check and try again." });
      }
    } catch (err) {
      setRestoreStatus({ type: "error", msg: "Error restoring access. Please try again." });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAFC] dark:bg-[#0B0F19] transition-colors duration-300 font-sans selection:bg-purple-500 selection:text-white">
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-[#FAFAFC] dark:bg-[#0B0F19] text-slate-900 dark:text-white py-12 md:py-20 px-4 sm:px-6 lg:px-8 border-b border-slate-200 dark:border-slate-800 transition-colors">
          <div className="ambient-glow w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-[#1E2B88] dark:bg-[#4F46E5] top-[-10%] left-[-10%] opacity-10 pointer-events-none" />
          <div className="ambient-glow w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] bg-[#E01E6A] dark:bg-[#BE185D] bottom-[-10%] right-[-5%] opacity-10 pointer-events-none" />

          <div className="max-w-6xl mx-auto relative z-10 text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-xs font-bold text-purple-700 dark:text-purple-300 uppercase tracking-wider">
              <BookOpen className="w-4 h-4 text-[#E01E6A]" /> Interactive Study Notes & Modules
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
              Master Data Engineering <br />
              <span className="jvm-gradient-text">
                Read Modules Directly On-Site
              </span>
            </h1>

            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base max-w-2xl mx-auto font-medium leading-relaxed">
              Explore comprehensive study courses published by JVM Institute instructors. Read free preview modules online, and unlock full course access via Razorpay.
            </p>

            {/* Actions & Restore Access Button */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <div className="relative w-full sm:w-80">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search courses or topics..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-sm"
                />
              </div>

              <button
                onClick={() => setShowRestoreModal(true)}
                className="w-full sm:w-auto px-5 py-3 rounded-xl bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-800 dark:text-slate-200 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                <RotateCcw className="w-4 h-4 text-amber-500" />
                <span>Already Purchased? Restore Access</span>
              </button>
            </div>
          </div>
        </section>

        {/* Study Courses Grid */}
        <section className="py-12 md:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Sparkles className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                <span>Available Study Courses</span>
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Click any course to open module reader. Read free modules & unlock full course.
              </p>
            </div>
            <span className="text-xs font-bold bg-purple-100 dark:bg-purple-950/80 text-purple-700 dark:text-purple-300 px-3 py-1.5 rounded-full border border-purple-200 dark:border-purple-800">
              {filteredCourses.length} Courses
            </span>
          </div>

          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-72 bg-slate-200 dark:bg-slate-900 rounded-3xl animate-pulse" />
              ))}
            </div>
          ) : filteredCourses.length === 0 ? (
            <div className="text-center py-16 bg-white dark:bg-slate-900/60 rounded-3xl border border-slate-200 dark:border-slate-800 p-8">
              <BookOpen className="w-12 h-12 text-slate-400 mx-auto mb-3" />
              <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200">No courses match your search</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Try clearing your search query or check back soon for newly published admin courses.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCourses.map((course) => (
                <div
                  key={course.id}
                  className="bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
                >
                  <div className="p-6 space-y-4">
                    {/* Badge & Subject */}
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-black uppercase tracking-wider bg-purple-100 dark:bg-purple-950/90 text-purple-700 dark:text-purple-300 px-3 py-1 rounded-full border border-purple-200 dark:border-purple-800">
                        {course.subject}
                      </span>
                      {course.badge && (
                        <span className="text-[10px] font-black uppercase tracking-wider bg-amber-500/10 text-amber-600 dark:text-amber-400 px-2.5 py-0.5 rounded-full border border-amber-500/20">
                          {course.badge}
                        </span>
                      )}
                    </div>

                    {/* Title & Description */}
                    <div>
                      <h3 className="text-xl font-extrabold text-slate-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors leading-snug">
                        {course.title}
                      </h3>
                      <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 line-clamp-3 leading-relaxed">
                        {course.description}
                      </p>
                    </div>

                    {/* Modules List Preview */}
                    <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-slate-800">
                      <div className="flex items-center justify-between text-xs font-bold text-slate-700 dark:text-slate-300">
                        <span>Course Modules ({course.modules?.length || 0})</span>
                        <span className="text-emerald-600 dark:text-emerald-400 flex items-center gap-1 text-[11px]">
                          <CheckCircle2 className="w-3.5 h-3.5" /> {course.freeModulesCount} Free Module(s)
                        </span>
                      </div>

                      <div className="space-y-1.5">
                        {course.modules?.slice(0, 3).map((m) => (
                          <div
                            key={m.id}
                            className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/50 text-xs flex items-center justify-between text-slate-800 dark:text-slate-200 font-medium"
                          >
                            <span className="truncate pr-2">
                              {m.title}
                            </span>
                            {m.moduleNumber <= course.freeModulesCount ? (
                              <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-md shrink-0">
                                FREE
                              </span>
                            ) : (
                              <Lock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Bottom Footer Action */}
                  <div className="p-6 bg-slate-50 dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-4">
                    <div>
                      <span className="text-[10px] uppercase font-bold text-slate-400 block">Full Access Price</span>
                      <span className="text-xl font-black text-slate-900 dark:text-white">₹{course.price}</span>
                    </div>

                    <Link
                      href={`/study-material/${course.slug}`}
                      className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 hover:opacity-95 text-white font-bold text-xs shadow-md transition-all flex items-center gap-2"
                    >
                      <Eye className="w-4 h-4" />
                      <span>Open Course</span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </main>

      <Footer />

      {/* Restore Access Modal */}
      {showRestoreModal && (
        <div className="fixed inset-0 z-[9999] bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8 max-w-md w-full shadow-2xl space-y-5 relative">
            <div className="text-center space-y-2">
              <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 mx-auto">
                <RotateCcw className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-black text-white">Restore Course Access</h3>
              <p className="text-xs text-slate-400">
                Enter your 6-digit Access Passcode or registered Email / Mobile number to unlock your purchased courses on this browser.
              </p>
            </div>

            {restoreStatus.msg && (
              <div
                className={`p-3.5 rounded-xl text-xs font-semibold ${
                  restoreStatus.type === "success"
                    ? "bg-emerald-500/10 border border-emerald-500/30 text-emerald-400"
                    : restoreStatus.type === "error"
                    ? "bg-red-500/10 border border-red-500/30 text-red-400"
                    : "bg-purple-500/10 border border-purple-500/30 text-purple-300"
                }`}
              >
                {restoreStatus.msg}
              </div>
            )}

            <form onSubmit={handleRestoreAccess} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                  Passcode / Email / Mobile Number
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. 849204 or user@gmail.com"
                  value={restoreInput}
                  onChange={(e) => setRestoreInput(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>

              <div className="flex items-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setShowRestoreModal(false)}
                  className="w-1/2 py-3 bg-slate-800 hover:bg-slate-700 rounded-xl text-xs font-bold text-slate-300 transition-all cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={restoreStatus.type === "loading"}
                  className="w-1/2 py-3 jvm-gradient-bg text-white font-bold text-xs rounded-xl shadow-md transition-all cursor-pointer disabled:opacity-50"
                >
                  {restoreStatus.type === "loading" ? "Restoring..." : "Restore Now"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
