"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LeadEnquiryModal from "@/components/LeadEnquiryModal";
import SplitText from "@/components/SplitText";
import LineSidebar from "@/components/LineSidebar";
import { 
  Gift, 
  Zap, 
  CheckCircle2, 
  Copy, 
  Check, 
  TrendingUp, 
  ShieldCheck, 
  HelpCircle,
  ChevronDown,
  Calculator,
  Award,
  Share2,
  Sparkles
} from "lucide-react";

export default function ReferAndEarnPage() {
  const [copiedLink, setCopiedLink] = useState(false);
  const [referrerName, setReferrerName] = useState("");
  const [referrerPhone, setReferrerPhone] = useState("");
  const [friendName, setFriendName] = useState("");
  const [friendPhone, setFriendPhone] = useState("");
  const [courseInterest, setCourseInterest] = useState("Data Engineering");
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Interactive Earnings Calculator State
  const [deCount, setDeCount] = useState(3);
  const [daCount, setDaCount] = useState(2);

  const sampleReferralCode = "JVM-REF-2026";

  // Calculation Logic
  const totalEarnings = (deCount * 2000) + (daCount * 1000);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(`https://jvminstitute.com/enroll?ref=${sampleReferralCode}`);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  const handleShareWhatsApp = () => {
    const text = encodeURIComponent(
      `Hey! Learn Data Engineering & PySpark at JVM Institute Pune with 100% placement support. Use my link to get ₹1,000 scholarship: https://jvminstitute.com/enroll?ref=${sampleReferralCode}`
    );
    window.open(`https://api.whatsapp.com/send?text=${text}`, "_blank");
  };

  const handleSubmitReferral = (e: React.FormEvent) => {
    e.preventDefault();
    if (referrerName && friendName && friendPhone) {
      setSubmitted(true);
    }
  };

  const FaqItems = [
    {
      q: "Who is eligible to participate in the Refer & Earn Program?",
      a: "Anyone! Current JVM Institute students, alumni, working professionals, and IT enthusiasts are eligible to refer candidates and claim cash rewards."
    },
    {
      q: "How much cash reward do I earn per successful referral?",
      a: "You earn ₹2,000 for every candidate who enrolls in our flagship Data Engineering & PySpark Master track, and ₹1,000 for Python/SQL Data Analytics courses."
    },
    {
      q: "When and how will I receive my referral payout?",
      a: "Referral rewards are disbursed via UPI, Google Pay, PhonePe, or direct Bank Transfer within 48 hours of your candidate's confirmed enrollment batch start date."
    },
    {
      q: "Is there any limit to the number of friends I can refer?",
      a: "No! There is zero upper limit. You can refer unlimited friends and earn rewards for every single successful admission."
    }
  ];

  const topReferrers = [
    { name: "Siddharth Bhoite", course: "Data Engineering", referrals: 18, earned: "₹36,000", badge: "🏆 Gold Champion" },
    { name: "Neha Kulkarni", course: "PySpark & Cloud", referrals: 12, earned: "₹24,000", badge: "🥈 Silver Elite" },
    { name: "Amit Deshmukh", course: "Data Analytics", referrals: 9, earned: "₹15,000", badge: "🥉 Star Leader" }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAFC] dark:bg-[#0B0F19] transition-colors duration-300">
      <Navbar />
      <LeadEnquiryModal />

      <main className="flex-grow">
        
        {/* Section 1: Hero Banner (Compact for Mobile) */}
        <section className="relative overflow-hidden bg-[#FAFAFC] dark:bg-[#0B0F19] py-8 sm:py-16 md:py-24 transition-colors duration-300 border-b border-slate-200/80 dark:border-slate-800/80">
          
          {/* Background Ambient Glows */}
          <div className="ambient-glow w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-[#1E2B88] dark:bg-[#4F46E5] top-[-10%] left-[-10%] opacity-15 pointer-events-none" />
          <div className="ambient-glow w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] bg-[#E01E6A] dark:bg-[#BE185D] bottom-[-10%] right-[-5%] opacity-10 pointer-events-none" />

          <div className="max-w-[1400px] mx-auto px-3.5 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl mx-auto text-center space-y-4 sm:space-y-6">
              
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-[10px] sm:text-xs font-extrabold text-amber-600 dark:text-amber-400 uppercase tracking-wider shadow-xs">
                <Gift className="w-3.5 h-3.5 text-amber-500" /> Student &amp; Alumni Rewards Hub
              </div>

              <div className="space-y-2">
                <SplitText
                  text="Refer Your Friends & Earn Up to ₹2,000 Per Enrollment"
                  tag="h1"
                  className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-slate-900 dark:text-white tracking-tight leading-[1.15]"
                  delay={25}
                  duration={0.6}
                  splitType="words"
                />
              </div>

              <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-lg max-w-2xl mx-auto font-normal leading-relaxed">
                Help your friends launch a high-paying tech career in Data Engineering &amp; AI. Share the gift of learning and get instant cash payouts directly to your UPI!
              </p>

              {/* Instant Referral Link Copy Box & WhatsApp Share */}
              <div className="pt-2 max-w-lg mx-auto space-y-2.5 sm:space-y-3">
                <div className="flex items-center bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-full p-1.5 sm:p-2 shadow-lg">
                  <input
                    type="text"
                    readOnly
                    value={`https://jvminstitute.com/enroll?ref=${sampleReferralCode}`}
                    className="w-full bg-transparent px-3 sm:px-4 text-[10px] sm:text-xs font-mono text-slate-700 dark:text-slate-300 focus:outline-none truncate"
                  />
                  <button
                    onClick={handleCopyLink}
                    className="jvm-gradient-bg text-white px-3.5 py-2 sm:px-5 sm:py-2.5 rounded-full text-[10px] sm:text-xs font-bold shrink-0 flex items-center gap-1 sm:gap-1.5 shadow-md hover:opacity-95 transition-all"
                  >
                    {copiedLink ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                    {copiedLink ? "Copied!" : "Copy Link"}
                  </button>
                </div>

                <div className="flex items-center justify-center">
                  <button
                    onClick={handleShareWhatsApp}
                    className="w-full sm:w-auto px-5 py-2.5 sm:py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold flex items-center justify-center gap-2 shadow-md transition-all"
                  >
                    <Share2 className="w-3.5 h-3.5" /> Share directly on WhatsApp
                  </button>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Section 2: Interactive Live Earnings Calculator */}
        <section className="py-6 sm:py-14 bg-gradient-to-b from-purple-900/5 via-indigo-950/10 to-transparent dark:from-purple-950/40 dark:to-slate-950 border-b border-purple-200/50 dark:border-purple-900/40">
          <div className="max-w-[1240px] mx-auto px-3.5 sm:px-6 lg:px-8">
            
            <div className="bg-white dark:bg-[#0F172A] border border-purple-200 dark:border-purple-900/60 rounded-2xl sm:rounded-3xl p-4 sm:p-10 shadow-xl relative overflow-hidden">
              
              <div className="grid lg:grid-cols-12 gap-6 sm:gap-8 items-center relative z-10">
                
                {/* Calculator Controls Left */}
                <div className="lg:col-span-7 space-y-4 sm:space-y-6">
                  <div className="space-y-1.5 sm:space-y-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 text-[10px] sm:text-xs font-extrabold border border-amber-500/30">
                      <Calculator className="w-3.5 h-3.5" /> Earnings Simulator
                    </span>
                    <h2 className="text-xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-heading">
                      Calculate Your Expected Referral Income
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                      Adjust the sliders below to estimate your total cash payout:
                    </p>
                  </div>

                  {/* Sliders */}
                  <div className="space-y-4 sm:space-y-5 bg-slate-50 dark:bg-slate-900/80 p-3.5 sm:p-5 rounded-xl sm:rounded-2xl border border-slate-200/80 dark:border-slate-800">
                    
                    {/* Slider 1: Data Engineering */}
                    <div className="space-y-1.5">
                      <div className="flex justify-between items-center text-xs font-bold">
                        <span className="text-slate-800 dark:text-slate-200 flex items-center gap-1.5 text-[11px] sm:text-xs">
                          <Sparkles className="w-3.5 h-3.5 text-purple-600 shrink-0" /> Data Engineering (₹2,000/student):
                        </span>
                        <span className="text-purple-600 dark:text-purple-400 font-extrabold text-xs sm:text-sm">{deCount} Friends</span>
                      </div>
                      <input 
                        type="range" 
                        min="0" 
                        max="20" 
                        value={deCount}
                        onChange={(e) => setDeCount(parseInt(e.target.value))}
                        className="w-full accent-purple-600 cursor-pointer h-2 bg-slate-200 dark:bg-slate-700 rounded-lg"
                      />
                    </div>

                    {/* Slider 2: Data Analytics */}
                    <div className="space-y-1.5">
                      <div className="flex justify-between items-center text-xs font-bold">
                        <span className="text-slate-800 dark:text-slate-200 flex items-center gap-1.5 text-[11px] sm:text-xs">
                          <Zap className="w-3.5 h-3.5 text-amber-500 shrink-0" /> Data Analytics (₹1,000/student):
                        </span>
                        <span className="text-amber-600 dark:text-amber-400 font-extrabold text-xs sm:text-sm">{daCount} Friends</span>
                      </div>
                      <input 
                        type="range" 
                        min="0" 
                        max="20" 
                        value={daCount}
                        onChange={(e) => setDaCount(parseInt(e.target.value))}
                        className="w-full accent-amber-500 cursor-pointer h-2 bg-slate-200 dark:bg-slate-700 rounded-lg"
                      />
                    </div>

                  </div>
                </div>

                {/* Live Output Card Right */}
                <div className="lg:col-span-5">
                  <div className="bg-gradient-to-br from-purple-900 via-indigo-900 to-slate-950 text-white rounded-2xl sm:rounded-3xl p-5 sm:p-7 text-center space-y-3 sm:space-y-4 shadow-xl border border-purple-500/30">
                    <span className="text-[10px] sm:text-xs font-extrabold uppercase tracking-widest text-amber-400 bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/30">
                      Estimated Direct Cash Payout
                    </span>

                    <div className="py-1 sm:py-2">
                      <div className="text-3xl xs:text-4xl sm:text-5xl font-black text-amber-400 font-heading tracking-tight">
                        ₹{totalEarnings.toLocaleString()}
                      </div>
                      <p className="text-[10px] sm:text-xs text-purple-200 mt-0.5 font-medium">
                        Instant UPI Payout within 48 hrs of batch start
                      </p>
                    </div>

                    <div className="pt-2 sm:pt-3 border-t border-white/10 text-[11px] sm:text-xs font-medium text-slate-300 space-y-1">
                      <div className="flex justify-between">
                        <span>Total Candidates Referred:</span>
                        <strong className="text-white">{deCount + daCount} Friends</strong>
                      </div>
                      <div className="flex justify-between">
                        <span>Friend Scholarship Discount:</span>
                        <strong className="text-emerald-400">₹{(deCount + daCount) * 1000} Total Off</strong>
                      </div>
                    </div>

                    <button 
                      onClick={() => {
                        const elem = document.getElementById("referral-form-section");
                        elem?.scrollIntoView({ behavior: "smooth" });
                      }}
                      className="w-full py-2.5 sm:py-3 rounded-full jvm-gradient-bg text-white font-extrabold text-xs shadow-md hover:opacity-95 transition-all flex items-center justify-center gap-1.5 mt-2"
                    >
                      <Gift className="w-3.5 h-3.5" /> Claim This Payout Now
                    </button>
                  </div>
                </div>

              </div>

            </div>

          </div>
        </section>

        {/* Section 3: Real-time Leaderboard & Hall of Fame */}
        <section className="py-8 sm:py-14 max-w-[1240px] mx-auto px-3.5 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto space-y-2 mb-6 sm:mb-10">
            <span className="text-[10px] sm:text-xs font-black text-amber-600 dark:text-amber-400 uppercase tracking-widest bg-amber-50 dark:bg-amber-950/60 px-3.5 py-1.5 rounded-full border border-amber-200 dark:border-amber-800">
              Alumni Hall of Fame
            </span>
            <h2 className="text-xl sm:text-3xl font-extrabold font-heading text-slate-900 dark:text-white">
              Top Student Referral Champions
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
              Meet our active students &amp; alumni who earned maximum cash rewards:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-6">
            {topReferrers.map((item, idx) => (
              <div 
                key={idx}
                className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-sm space-y-3 sm:space-y-4"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] sm:text-xs font-extrabold px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700">
                    {item.badge}
                  </span>
                  <Award className="w-4 h-4 sm:w-5 sm:h-5 text-amber-500" />
                </div>

                <div>
                  <h3 className="text-base sm:text-lg font-extrabold text-slate-900 dark:text-white font-heading">
                    {item.name}
                  </h3>
                  <p className="text-[11px] sm:text-xs font-medium text-slate-500 dark:text-slate-400">
                    {item.course}
                  </p>
                </div>

                <div className="pt-2 sm:pt-3 border-t border-slate-100 dark:border-slate-800 flex justify-between items-center">
                  <div>
                    <span className="text-[9px] sm:text-[10px] uppercase text-slate-400 font-bold block">Candidates Placed</span>
                    <strong className="text-xs sm:text-sm font-extrabold text-purple-600 dark:text-purple-400">{item.referrals} Candidates</strong>
                  </div>
                  <div className="text-right">
                    <span className="text-[9px] sm:text-[10px] uppercase text-slate-400 font-bold block">Total Cash Earned</span>
                    <strong className="text-sm sm:text-base font-black text-emerald-600 dark:text-emerald-400">{item.earned}</strong>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4: 3-Step Process */}
        <section className="py-8 sm:py-16 md:py-24 max-w-[1360px] mx-auto px-3.5 sm:px-6 lg:px-8 border-t border-slate-200/80 dark:border-slate-800/80">
          
          <div className="text-center max-w-3xl mx-auto space-y-2 mb-8 sm:mb-14">
            <span className="text-[10px] sm:text-xs font-black text-[#1E2B88] dark:text-purple-400 uppercase tracking-widest bg-blue-50 dark:bg-purple-950/60 px-3.5 py-1.5 rounded-full border border-blue-200 dark:border-purple-800">
              Simple 3-Step Rewards Payout
            </span>
            <h2 className="text-xl sm:text-4xl font-extrabold font-heading text-slate-900 dark:text-white tracking-tight">
              How the Refer &amp; Earn Program Works
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8 items-stretch">
            
            {/* Box 1 */}
            <div className="bg-slate-50/90 dark:bg-[#0F172A]/90 border border-slate-200 dark:border-slate-800 rounded-2xl sm:rounded-3xl p-4 sm:p-7 flex flex-col justify-between shadow-sm">
              <div className="space-y-3 sm:space-y-4">
                <h3 className="text-base sm:text-lg font-bold font-heading text-[#1E2B88] dark:text-purple-400 border-b border-slate-200 dark:border-slate-800 pb-3 sm:pb-4 text-center">
                  1. Share Referral Link:
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                  Send your unique referral link to friends or fill out the candidate recommendation form:
                </p>
                <div className="pt-1 px-1">
                  <LineSidebar
                    items={[
                      "Copy your unique referral link above",
                      "Share via WhatsApp, LinkedIn, or Instagram",
                      "Submit candidate contact directly to team"
                    ]}
                    accentColor="#A855F7"
                    textColor="#334155"
                    markerColor="#F59E0B"
                    showIndex={false}
                    showMarker={true}
                    proximityRadius={80}
                    maxShift={15}
                    markerLength={24}
                    itemGap={12}
                    fontSize={0.75}
                    smoothing={100}
                    defaultActive={0}
                  />
                </div>
              </div>
            </div>

            {/* Box 2 */}
            <div className="bg-slate-50/90 dark:bg-[#0F172A]/90 border border-slate-200 dark:border-slate-800 rounded-2xl sm:rounded-3xl p-4 sm:p-7 flex flex-col justify-between shadow-sm">
              <div className="space-y-3 sm:space-y-4">
                <h3 className="text-base sm:text-lg font-bold font-heading text-[#1E2B88] dark:text-purple-400 border-b border-slate-200 dark:border-slate-800 pb-3 sm:pb-4 text-center">
                  2. Free Demo &amp; Counselling:
                </h3>
                <div className="pt-1 px-1">
                  <LineSidebar
                    items={[
                      "Friend attends 1:1 expert tech demo session",
                      "Curriculum guidance & career roadmap clear",
                      "Candidate selects Data Engineering batch"
                    ]}
                    accentColor="#A855F7"
                    textColor="#334155"
                    markerColor="#F59E0B"
                    showIndex={false}
                    showMarker={true}
                    proximityRadius={80}
                    maxShift={15}
                    markerLength={24}
                    itemGap={12}
                    fontSize={0.75}
                    smoothing={100}
                    defaultActive={0}
                  />
                </div>
              </div>
            </div>

            {/* Box 3 */}
            <div className="bg-slate-50/90 dark:bg-[#0F172A]/90 border border-slate-200 dark:border-slate-800 rounded-2xl sm:rounded-3xl p-4 sm:p-7 flex flex-col justify-between shadow-sm">
              <div className="space-y-3 sm:space-y-4">
                <h3 className="text-base sm:text-lg font-bold font-heading text-[#1E2B88] dark:text-purple-400 border-b border-slate-200 dark:border-slate-800 pb-3 sm:pb-4 text-center">
                  3. Instant Payout:
                </h3>
                <div className="pt-1 px-1">
                  <LineSidebar
                    items={[
                      "Earn ₹2,000 for Data Engineering track",
                      "Earn ₹1,000 for Data Analytics track",
                      "Direct UPI / PhonePe / GPay payout"
                    ]}
                    accentColor="#A855F7"
                    textColor="#334155"
                    markerColor="#F59E0B"
                    showIndex={false}
                    showMarker={true}
                    proximityRadius={80}
                    maxShift={15}
                    markerLength={24}
                    itemGap={12}
                    fontSize={0.75}
                    smoothing={100}
                    defaultActive={0}
                  />
                </div>
              </div>
            </div>

          </div>

        </section>

        {/* Section 5: Direct Referral Form & Perks Grid */}
        <section id="referral-form-section" className="py-8 sm:py-16 bg-white dark:bg-[#0B0F19] border-t border-slate-200/80 dark:border-slate-800/80">
          <div className="max-w-[1360px] mx-auto px-3.5 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-12 gap-6 sm:gap-12 items-center">
              
              {/* Form Left Side */}
              <div className="lg:col-span-6 space-y-4 sm:space-y-6">
                <div className="space-y-2 sm:space-y-3">
                  <span className="text-[10px] sm:text-xs font-black text-[#E01E6A] uppercase tracking-widest bg-pink-50 dark:bg-pink-950/60 px-3.5 py-1.5 rounded-full border border-pink-200 dark:border-pink-800">
                    Quick Referral Submission
                  </span>
                  <h2 className="text-xl sm:text-3xl font-extrabold font-heading text-slate-900 dark:text-white">
                    Submit Candidate Details
                  </h2>
                </div>

                <div className="bg-slate-50 dark:bg-[#0F172A] border border-slate-200 dark:border-slate-800 rounded-2xl sm:rounded-3xl p-4 sm:p-8 shadow-xl">
                  {submitted ? (
                    <div className="text-center py-6 space-y-3">
                      <div className="w-12 h-12 rounded-full bg-emerald-500/10 text-emerald-500 border border-emerald-500/30 flex items-center justify-center mx-auto">
                        <CheckCircle2 className="w-6 h-6" />
                      </div>
                      <h3 className="text-lg font-extrabold text-slate-900 dark:text-white font-heading">
                        Referral Registered Successfully!
                      </h3>
                      <p className="text-xs text-slate-600 dark:text-slate-300 max-w-sm mx-auto">
                        Thank you, <strong className="text-slate-900 dark:text-white">{referrerName}</strong>. We have logged <strong className="text-slate-900 dark:text-white">{friendName}</strong> for free counselling.
                      </p>
                      <button
                        onClick={() => setSubmitted(false)}
                        className="text-xs font-bold text-purple-600 dark:text-purple-400 hover:underline pt-2"
                      >
                        + Submit Another Referral
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmitReferral} className="space-y-3 sm:space-y-4">
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                        <div>
                          <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                            Your Name (Referrer)
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="Siddharth Bhoite"
                            value={referrerName}
                            onChange={(e) => setReferrerName(e.target.value)}
                            className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs text-slate-900 dark:text-white focus:ring-2 focus:ring-purple-500/50 outline-none"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                            Your Phone / UPI Number
                          </label>
                          <input
                            type="tel"
                            required
                            placeholder="9876543210"
                            value={referrerPhone}
                            onChange={(e) => setReferrerPhone(e.target.value)}
                            className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs text-slate-900 dark:text-white focus:ring-2 focus:ring-purple-500/50 outline-none"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                        <div>
                          <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                            Friend&apos;s Full Name *
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="Rahul Deshmukh"
                            value={friendName}
                            onChange={(e) => setFriendName(e.target.value)}
                            className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs text-slate-900 dark:text-white focus:ring-2 focus:ring-purple-500/50 outline-none"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                            Friend&apos;s Phone Number *
                          </label>
                          <input
                            type="tel"
                            required
                            placeholder="9123456789"
                            value={friendPhone}
                            onChange={(e) => setFriendPhone(e.target.value)}
                            className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs text-slate-900 dark:text-white focus:ring-2 focus:ring-purple-500/50 outline-none"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                          Interested Tech Track *
                        </label>
                        <select
                          value={courseInterest}
                          onChange={(e) => setCourseInterest(e.target.value)}
                          className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs text-slate-900 dark:text-white focus:ring-2 focus:ring-purple-500/50 outline-none"
                        >
                          <option value="Data Engineering">Data Engineering &amp; PySpark (₹2,000 Cash Reward)</option>
                          <option value="Data Analytics">Data Analytics &amp; SQL (₹1,000 Cash Reward)</option>
                          <option value="Data Science">Data Science &amp; AI Track (₹1,500 Cash Reward)</option>
                        </select>
                      </div>

                      <button
                        type="submit"
                        className="w-full py-3 sm:py-3.5 rounded-xl jvm-gradient-bg text-white font-extrabold text-xs sm:text-sm shadow-lg hover:opacity-95 transition-all flex items-center justify-center gap-2"
                      >
                        <Gift className="w-4 h-4" /> Submit Candidate &amp; Claim Reward
                      </button>

                    </form>
                  )}
                </div>
              </div>

              {/* Right Side: Perks Highlights Cards */}
              <div className="lg:col-span-6 space-y-3 sm:space-y-5">
                
                <div className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/30 dark:to-orange-950/20 border border-amber-200/80 dark:border-amber-900/60 rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-amber-500 text-white flex items-center justify-center shrink-0 shadow-md">
                    <Zap className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div className="space-y-0.5">
                    <h4 className="text-xs sm:text-base font-extrabold text-slate-900 dark:text-white font-heading">
                      Unlimited Payout Capability
                    </h4>
                    <p className="text-[10px] sm:text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      Zero cap on how many candidates you can refer. Students have earned over ₹40,000+!
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-950/30 dark:to-indigo-950/20 border border-purple-200/80 dark:border-purple-900/60 rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-purple-600 text-white flex items-center justify-center shrink-0 shadow-md">
                    <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div className="space-y-0.5">
                    <h4 className="text-xs sm:text-base font-extrabold text-slate-900 dark:text-white font-heading">
                      100% Verified Tracking
                    </h4>
                    <p className="text-[10px] sm:text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      Every candidate is tagged with your unique referral ID with real-time tracking updates.
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/20 border border-emerald-200/80 dark:border-emerald-900/60 rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-md">
                    <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div className="space-y-0.5">
                    <h4 className="text-xs sm:text-base font-extrabold text-slate-900 dark:text-white font-heading">
                      Scholarship Option for Friends
                    </h4>
                    <p className="text-[10px] sm:text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      Referred candidates receive an extra ₹1,000 scholarship discount on course fee.
                    </p>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </section>

        {/* Section 6: Frequently Asked Questions Accordion */}
        <section className="py-8 sm:py-16 max-w-4xl mx-auto px-3.5 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-2 mb-6 sm:mb-12">
            <span className="text-[10px] sm:text-xs font-black text-purple-600 dark:text-purple-400 uppercase tracking-widest">
              Got Questions?
            </span>
            <h2 className="text-xl sm:text-3xl font-extrabold font-heading text-slate-900 dark:text-white">
              Referral Program FAQs
            </h2>
          </div>

          <div className="space-y-3 sm:space-y-4">
            {FaqItems.map((faq, idx) => (
              <div 
                key={idx}
                className="bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 rounded-xl sm:rounded-2xl p-3.5 sm:p-5 shadow-xs"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full text-left flex items-center justify-between gap-3 font-bold text-xs sm:text-sm text-slate-900 dark:text-white"
                >
                  <span className="flex items-center gap-2">
                    <HelpCircle className="w-4 h-4 text-purple-500 shrink-0" />
                    {faq.q}
                  </span>
                  <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-300 ${openFaq === idx ? 'rotate-180 text-purple-500' : ''}`} />
                </button>
                
                {openFaq === idx && (
                  <p className="text-[11px] sm:text-xs text-slate-600 dark:text-slate-300 pt-2.5 border-t border-slate-100 dark:border-slate-800 mt-2.5 leading-relaxed">
                    {faq.a}
                  </p>
                )}
              </div>
            ))}
          </div>

        </section>

      </main>

      <Footer />
    </div>
  );
}
