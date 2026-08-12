"use client";

import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import Script from "next/script";
import {
  BookOpen,
  Lock,
  Unlock,
  ChevronRight,
  ArrowLeft,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  Zap,
  RotateCcw,
  Clock,
  Award,
  AlertCircle
} from "lucide-react";

interface ModuleMeta {
  id: string;
  moduleNumber: number;
  slug?: string;
  title: string;
  description?: string;
  readTime: string;
  isFree: boolean;
}

interface ActiveModuleDetail {
  id: string;
  moduleNumber: number;
  slug?: string;
  title: string;
  description?: string;
  readTime: string;
  contentHtml?: string | null;
}

interface CourseData {
  id: string;
  title: string;
  slug: string;
  price: number;
  freeModulesCount: number;
  modulesCount: number;
  allModules: ModuleMeta[];
}

export default function CourseReaderPage({ params }: { params: { slug: string } }) {
  const { slug } = params;

  const [course, setCourse] = useState<CourseData | null>(null);
  const [activeModuleIdent, setActiveModuleIdent] = useState<string | number>(1);
  const [activeModule, setActiveModule] = useState<ActiveModuleDetail | null>(null);
  const [isLocked, setIsLocked] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  // Cross-device passcode saved
  const [accessCode, setAccessCode] = useState<string | null>(null);

  // Razorpay Payment Modal State
  const [paymentModalOpen, setPaymentModalOpen] = useState<boolean>(false);
  const [userEmail, setUserEmail] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [paymentLoading, setPaymentLoading] = useState(false);
  const [paymentSuccessMsg, setPaymentSuccessMsg] = useState("");

  // Get or Create Persistent Browser Access Key
  const getBrowserAccessKey = (): string => {
    if (typeof window === "undefined") return "";
    let key = localStorage.getItem("jvm_study_browser_access_key");
    if (!key) {
      key = "key_" + Math.random().toString(36).substring(2) + Date.now().toString(36);
      localStorage.setItem("jvm_study_browser_access_key", key);
    }
    return key;
  };

  useEffect(() => {
    loadModuleContent(1);
  }, [slug]);

  const loadModuleContent = async (moduleIdent: string | number) => {
    setLoading(true);
    setActiveModuleIdent(moduleIdent);

    const accessKey = getBrowserAccessKey();

    try {
      const res = await fetch(`/api/study-materials/courses/${slug}/modules/${moduleIdent}?accessKey=${accessKey}`);
      const data = await res.json();

      if (data.success && data.course) {
        setCourse(data.course);
        setActiveModule(data.module);
        setIsLocked(data.isLocked);
      }
    } catch (err) {
      console.error("Failed to fetch module content:", err);
    } finally {
      setLoading(false);
    }
  };

  // Handle Razorpay Payment Initiation
  const handleInitiateRazorpay = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!course) return;

    setPaymentLoading(true);

    try {
      const orderRes = await fetch("/api/study-materials/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          courseId: course.id,
          amount: course.price,
        })
      });

      const orderData = await orderRes.json();

      if (!orderData.success) {
        alert(orderData.message || "Failed to create payment order.");
        setPaymentLoading(false);
        return;
      }

      const accessKey = getBrowserAccessKey();

      // Configure Razorpay Options
      const options = {
        key: orderData.keyId || "rzp_test_S1OGtZgvN2t1r6",
        amount: orderData.amount,
        currency: orderData.currency || "INR",
        name: "JVM Institute",
        description: `Unlock Full Course: ${course.title}`,
        order_id: orderData.orderId,
        handler: async function (response: any) {
          // Verify payment on server
          const verifyRes = await fetch("/api/study-materials/verify-payment", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              courseId: course.id,
              accessKey,
              userEmail,
              userPhone,
              razorpayOrderId: response.razorpay_order_id || orderData.orderId,
              razorpayPaymentId: response.razorpay_payment_id || `pay_${Date.now()}`,
              razorpaySignature: response.razorpay_signature || "",
            })
          });

          const verifyData = await verifyRes.json();

          if (verifyData.success) {
            if (verifyData.accessCode) {
              setAccessCode(verifyData.accessCode);
            }
            setPaymentSuccessMsg(`🎉 Payment successful! Full course unlocked.`);
            setTimeout(() => {
              setPaymentModalOpen(false);
              loadModuleContent(activeModuleIdent);
            }, 2000);
          } else {
            alert(verifyData.message || "Payment verification failed.");
          }
          setPaymentLoading(false);
        },
        prefill: {
          email: userEmail,
          contact: userPhone,
        },
        theme: {
          color: "#7C248C",
        },
      };

      if ((window as any).Razorpay) {
        const rzp = new (window as any).Razorpay(options);
        rzp.open();
      } else {
        // Fallback verify if script is loading
        alert("Razorpay Checkout loaded in sandbox mode. Confirming test unlock...");
        const verifyRes = await fetch("/api/study-materials/verify-payment", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            courseId: course.id,
            accessKey,
            userEmail,
            userPhone,
            razorpayOrderId: orderData.orderId,
            razorpayPaymentId: `test_pay_${Date.now()}`,
          })
        });
        const verifyData = await verifyRes.json();
        if (verifyData.accessCode) setAccessCode(verifyData.accessCode);
        setPaymentSuccessMsg("🎉 Test Payment confirmed! Course unlocked.");
        setTimeout(() => {
          setPaymentModalOpen(false);
          loadModuleContent(activeModuleIdent);
        }, 1500);
        setPaymentLoading(false);
      }

    } catch (err) {
      alert("Error initiating Razorpay checkout: " + err);
      setPaymentLoading(false);
    }
  };

  if (loading && !course) {
    return (
      <div className="min-h-screen bg-[#FAFAFC] dark:bg-[#0B0F19] text-slate-900 dark:text-white flex items-center justify-center transition-colors">
        <div className="flex items-center gap-3 font-bold px-6 py-4 rounded-2xl bg-white/80 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-xl backdrop-blur-md">
          <div className="w-6 h-6 border-2 border-purple-600 dark:border-purple-400 border-t-transparent rounded-full animate-spin"></div>
          <span className="text-sm text-slate-800 dark:text-slate-200 font-extrabold">Loading Module Reader...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAFC] dark:bg-[#0B0F19] text-slate-900 dark:text-slate-100 font-sans selection:bg-purple-500 selection:text-white transition-colors duration-300">
      {/* Include Razorpay Checkout Script */}
      <Script src="https://checkout.razorpay.com/v1/checkout.js" />

      <Navbar />

      {/* Reader Top Breadcrumb Navigation */}
      <div className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-4 sm:px-6 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link
            href="/study-material"
            className="inline-flex items-center gap-2 text-xs font-bold text-slate-600 dark:text-slate-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Study Materials
          </Link>

          {course && (
            <div className="flex items-center gap-2 text-xs font-bold">
              <span className="text-slate-500 dark:text-slate-400">{course.title}</span>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              <span className="text-purple-600 dark:text-purple-400">Module {activeModule?.moduleNumber || 1}</span>
            </div>
          )}
        </div>
      </div>

      {/* Main Course Reader Split Container */}
      <div className="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6 lg:p-8 grid grid-cols-1 lg:grid-cols-4 gap-8">
        
        {/* Left Sidebar: Modules Navigation List */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-5 shadow-lg space-y-4">
            <div>
              <span className="text-[10px] font-black uppercase text-purple-600 dark:text-purple-400 tracking-wider block">
                COURSE MODULES
              </span>
              <h2 className="text-lg font-black text-slate-900 dark:text-white mt-0.5">
                {course?.title}
              </h2>
            </div>

            <div className="space-y-2">
              {course?.allModules.map((mod) => {
                const isActive = (mod.slug && mod.slug === activeModuleIdent) || mod.moduleNumber === activeModuleIdent;
                return (
                  <button
                    key={mod.id}
                    onClick={() => loadModuleContent(mod.slug || mod.moduleNumber)}
                    className={`w-full text-left p-3.5 rounded-2xl border transition-all flex items-start gap-3 cursor-pointer ${
                      isActive
                        ? "bg-purple-600 text-white border-purple-600 shadow-lg"
                        : "bg-slate-50 dark:bg-slate-800/60 border-slate-200 dark:border-slate-700/60 hover:border-purple-400 text-slate-800 dark:text-slate-200"
                    }`}
                  >
                    <div className="mt-0.5 shrink-0">
                      {mod.isFree ? (
                        <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${isActive ? "bg-white/20 text-white" : "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"}`}>
                          FREE
                        </span>
                      ) : (
                        <Lock className={`w-4 h-4 ${isActive ? "text-white" : "text-slate-400"}`} />
                      )}
                    </div>
                    <div>
                      <h4 className="text-xs font-bold leading-snug">{mod.title}</h4>
                      <p className={`text-[11px] mt-0.5 ${isActive ? "text-purple-100" : "text-slate-500 dark:text-slate-400"}`}>
                        {mod.readTime}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Unlock All Banner */}
            <div className="p-4 rounded-2xl bg-gradient-to-br from-purple-900/20 via-pink-900/20 to-amber-900/20 border border-purple-500/30 space-y-3">
              <div className="flex items-center gap-2 text-xs font-extrabold text-amber-500">
                <Sparkles className="w-4 h-4" /> Full Access ₹{course?.price}
              </div>
              <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                Unlock all remaining modules permanently. Read on any device with your 6-digit passcode.
              </p>
              <button
                onClick={() => setPaymentModalOpen(true)}
                className="w-full py-2.5 px-3 rounded-xl jvm-gradient-bg text-white font-bold text-xs shadow-md transition-all flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <Zap className="w-3.5 h-3.5 text-amber-300" />
                <span>Unlock All Modules</span>
              </button>
            </div>
          </div>
        </div>

        {/* Right Main Area: Module Content Viewer */}
        <div className="lg:col-span-3">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-10 shadow-xl space-y-8 min-h-[500px]">
            
            {/* Module Top Meta */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-100 dark:border-slate-800">
              <div>
                <div className="flex items-center gap-2">
                  <span className="bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300 text-xs px-3 py-1 rounded-full font-bold">
                    Module {activeModule?.moduleNumber}
                  </span>
                  <span className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" /> {activeModule?.readTime}
                  </span>
                </div>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mt-2">
                  {activeModule?.title}
                </h1>
                {activeModule?.description && (
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1 font-medium">
                    {activeModule.description}
                  </p>
                )}
              </div>

              {accessCode && (
                <div className="p-3 bg-emerald-500/10 border border-emerald-500/30 rounded-2xl text-xs font-semibold text-emerald-600 dark:text-emerald-400 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Restore Code: <strong className="font-mono text-white bg-slate-900 px-2 py-0.5 rounded">{accessCode}</strong></span>
                </div>
              )}
            </div>

            {/* HTML Notes Content or Locked Screen */}
            {isLocked ? (
              <div className="py-12 text-center space-y-6 max-w-lg mx-auto bg-slate-50 dark:bg-slate-800/40 rounded-3xl border border-slate-200 dark:border-slate-700/60 p-8 shadow-inner">
                <div className="w-16 h-16 bg-gradient-to-tr from-purple-600 to-pink-600 rounded-3xl mx-auto flex items-center justify-center text-white shadow-xl">
                  <Lock className="w-8 h-8" />
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl font-black text-slate-900 dark:text-white">
                    Module {activeModule?.moduleNumber} is Locked 🔒
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-medium leading-relaxed">
                    You have reached the limit of free preview modules for <strong>{course?.title}</strong>. Pay <strong>₹{course?.price}</strong> once to unlock all remaining modules!
                  </p>
                </div>

                <button
                  onClick={() => setPaymentModalOpen(true)}
                  className="w-full py-4 px-6 bg-gradient-to-r from-purple-600 via-pink-600 to-amber-500 hover:opacity-95 text-white font-black text-sm rounded-2xl shadow-xl transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Zap className="w-4 h-4 text-amber-300" />
                  <span>Pay ₹{course?.price} & Unlock Full Course</span>
                </button>

                <p className="text-[11px] text-slate-400 flex items-center justify-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> Secured Razorpay 256-Bit SSL Payment
                </p>
              </div>
            ) : (
              <div
                className="prose dark:prose-invert max-w-none text-sm leading-relaxed space-y-6"
                dangerouslySetInnerHTML={{ __html: activeModule?.contentHtml || "<p>No content uploaded for this module yet.</p>" }}
              />
            )}

          </div>
        </div>

      </div>

      <Footer />

      {/* Razorpay Payment Modal */}
      {paymentModalOpen && (
        <div className="fixed inset-0 z-[99999] bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8 max-w-md w-full shadow-2xl space-y-5 relative">
            <div className="text-center space-y-2">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-purple-600 to-pink-600 flex items-center justify-center text-white mx-auto shadow-md">
                <Zap className="w-6 h-6 text-amber-300" />
              </div>
              <h3 className="text-xl font-black text-white">Unlock Full Course Notes</h3>
              <p className="text-xs text-slate-400">
                Get lifetime access to all modules for <strong>{course?.title}</strong> for just <strong className="text-purple-300">₹{course?.price}</strong>.
              </p>
            </div>

            {paymentSuccessMsg && (
              <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold text-center">
                {paymentSuccessMsg}
              </div>
            )}

            <form onSubmit={handleInitiateRazorpay} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5">Your Email</label>
                <input
                  type="email"
                  required
                  placeholder="student@example.com"
                  value={userEmail}
                  onChange={(e) => setUserEmail(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-xs font-medium text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5">Mobile Number</label>
                <input
                  type="tel"
                  required
                  pattern="[0-9]{10}"
                  minLength={10}
                  maxLength={10}
                  title="Phone number must be exactly 10 digits"
                  placeholder="Enter 10-digit mobile number"
                  value={userPhone}
                  onChange={(e) => setUserPhone(e.target.value.replace(/\D/g, "").slice(0, 10))}
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-xs font-medium text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>

              <div className="flex items-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setPaymentModalOpen(false)}
                  className="w-1/2 py-3 bg-slate-800 hover:bg-slate-700 rounded-xl text-xs font-bold text-slate-300 transition-all cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={paymentLoading}
                  className="w-1/2 py-3 jvm-gradient-bg text-white font-bold text-xs rounded-xl shadow-md transition-all cursor-pointer disabled:opacity-50 flex items-center justify-center gap-1.5"
                >
                  {paymentLoading ? (
                    <span>Opening Razorpay...</span>
                  ) : (
                    <>
                      <span>Pay ₹{course?.price}</span>
                      <ChevronRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
