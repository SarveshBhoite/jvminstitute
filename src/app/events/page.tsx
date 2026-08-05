"use client";

import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LeadEnquiryModal, { openEnrollModal } from "@/components/LeadEnquiryModal";
import Link from "next/link";
import Image from "next/image";
import { 
  Calendar, 
  Clock, 
  User, 
  Video, 
  MapPin, 
  Sparkles, 
  Search, 
  Filter, 
  CheckCircle2, 
  Share2, 
  Download, 
  ExternalLink, 
  ChevronDown, 
  ChevronUp, 
  Play, 
  X, 
  Award, 
  Users, 
  Trophy, 
  Laptop, 
  Code, 
  ArrowRight, 
  BookOpen, 
  Bell, 
  Send, 
  Check, 
  Zap, 
  Building2, 
  HelpCircle,
  Ticket,
  AlertCircle
} from "lucide-react";

// Types
interface EventItem {
  id: string;
  title: string;
  category: "upcoming" | "past" | "hackathon" | "free";
  date: string;
  time: string;
  mode: "Virtual (Zoom Live)" | "JVM Pune Campus & Online" | "Hybrid";
  speaker: {
    name: string;
    role: string;
    company: string;
    avatar: string;
  };
  description: string;
  tags: string[];
  seatsTotal: number;
  seatsFilled: number;
  isFeatured?: boolean;
  videoUrl?: string;
  githubUrl?: string;
  slidesUrl?: string;
}

interface SpeakerItem {
  name: string;
  role: string;
  company: string;
  avatar: string;
  specialization: string;
  sessionsCount: number;
}

// Initial Events Data
const ALL_EVENTS: EventItem[] = [
  {
    id: "evt-101",
    title: "Enterprise Data Streaming with PySpark, Apache Kafka & Databricks",
    category: "upcoming",
    date: "Aug 15, 2026",
    time: "06:00 PM - 08:30 PM IST",
    mode: "JVM Pune Campus & Online",
    speaker: {
      name: "Rahul Deshmukh",
      role: "Principal Data Architect",
      company: "Tier-1 Cloud Enterprise",
      avatar: "/place1.png"
    },
    description: "Learn how to architect end-to-end real-time data streaming pipelines using PySpark Structured Streaming, Apache Kafka topics, and Delta Lake on Databricks with hands-on code walkthrough.",
    tags: ["PySpark", "Apache Kafka", "Databricks", "Data Streaming", "Delta Lake"],
    seatsTotal: 250,
    seatsFilled: 218,
    isFeatured: true
  },
  {
    id: "evt-102",
    title: "Snowflake Modern Data Warehousing & Zero-Copy Cloning Masterclass",
    category: "upcoming",
    date: "Aug 22, 2026",
    time: "11:00 AM - 01:30 PM IST",
    mode: "Virtual (Zoom Live)",
    speaker: {
      name: "Priya Sharma",
      role: "Senior Snowflake Consultant",
      company: "Global Tech Solutions",
      avatar: "/place2.png"
    },
    description: "Master Snowflake virtual warehouses, Micro-partitioning, Time Travel, Dynamic Tables, and Cost Optimization strategies used by Fortune 500 companies.",
    tags: ["Snowflake", "Data Warehousing", "SQL", "Cloud Data", "Time Travel"],
    seatsTotal: 300,
    seatsFilled: 245
  },
  {
    id: "evt-103",
    title: "JVM Tech-a-Thon 2026: 48-Hour National Data Engineering Hackathon",
    category: "hackathon",
    date: "Sep 05 - Sep 07, 2026",
    time: "Starts 06:00 PM IST",
    mode: "Hybrid",
    speaker: {
      name: "JVM Technical Board",
      role: "Hackathon Jury & Mentors",
      company: "JVM Institute",
      avatar: "/jvm logo.jpeg"
    },
    description: "Compete against India's top tech talent to build high-scale analytics engines & GenAI RAG applications. Prize Pool worth ₹1,00,000 + direct interview calls!",
    tags: ["Hackathon", "PySpark", "GenAI", "SQL", "AWS", "Snowflake"],
    seatsTotal: 500,
    seatsFilled: 380
  },
  {
    id: "evt-104",
    title: "Building Production RAG Pipelines & AI Agents for Data Engineers",
    category: "upcoming",
    date: "Sep 12, 2026",
    time: "07:00 PM - 09:00 PM IST",
    mode: "Virtual (Zoom Live)",
    speaker: {
      name: "Amitabh Verma",
      role: "Lead AI Systems Engineer",
      company: "Enterprise AI Lab",
      avatar: "/place3.jpeg"
    },
    description: "Explore LangChain, LlamaIndex, Vector Databases (Pinecone/Milvus), and PySpark text processing to deploy enterprise-grade Gen AI agents.",
    tags: ["GenAI", "LangChain", "Vector DB", "PySpark", "Python"],
    seatsTotal: 200,
    seatsFilled: 172
  },
  {
    id: "evt-105",
    title: "Hands-on SQL Window Functions & Complex Query Optimization Workshop",
    category: "free",
    date: "Aug 10, 2026",
    time: "08:00 PM - 09:30 PM IST",
    mode: "Virtual (Zoom Live)",
    speaker: {
      name: "Sneha Kulkarni",
      role: "Staff Data Engineer",
      company: "FinTech Corp",
      avatar: "/placements_hero_graduate.png"
    },
    description: "Free intensive drill solving top 20 tricky SQL interview questions asked at Amazon, Flipkart, Google, and TCS with live execution.",
    tags: ["SQL", "Query Optimization", "Interviews", "Free Workshop"],
    seatsTotal: 400,
    seatsFilled: 385
  },
  {
    id: "evt-106",
    title: "Masterclass Recording: AWS Glue, EMR & Redshift Data Architecture",
    category: "past",
    date: "Jul 25, 2026",
    time: "2 Hours 15 Mins Recording",
    mode: "Virtual (Zoom Live)",
    speaker: {
      name: "Rajesh Patil",
      role: "Principal Cloud Architect",
      company: "AWS Partner Network",
      avatar: "/students1.jpeg"
    },
    description: "Watch full recording & download code repo on building serverless data lakes using AWS Glue Crawlers, Athena, and Redshift Spectrum.",
    tags: ["AWS", "Redshift", "AWS EMR", "PySpark", "Cloud"],
    seatsTotal: 300,
    seatsFilled: 300,
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    githubUrl: "https://github.com",
    slidesUrl: "#"
  },
  {
    id: "evt-107",
    title: "Masterclass Recording: PySpark Performance Tuning & Memory Management",
    category: "past",
    date: "Jul 12, 2026",
    time: "2 Hours Recording",
    mode: "Virtual (Zoom Live)",
    speaker: {
      name: "Rahul Deshmukh",
      role: "Principal Data Architect",
      company: "Tier-1 Cloud Enterprise",
      avatar: "/place1.png"
    },
    description: "Deep dive into PySpark Executor Memory, GC Overhead, Data Skewness mitigation, Broadcast Joins, and AQE (Adaptive Query Execution).",
    tags: ["PySpark", "Performance Tuning", "Databricks", "Big Data"],
    seatsTotal: 250,
    seatsFilled: 250,
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    githubUrl: "https://github.com",
    slidesUrl: "#"
  }
];

// Speakers Data
const FEATURED_SPEAKERS: SpeakerItem[] = [
  {
    name: "Rahul Deshmukh",
    role: "Principal Data Architect",
    company: "Tier-1 Tech Cloud",
    avatar: "/place1.png",
    specialization: "PySpark, Databricks & Delta Lake",
    sessionsCount: 14
  },
  {
    name: "Priya Sharma",
    role: "Senior Snowflake Specialist",
    company: "Global IT Services",
    avatar: "/place2.png",
    specialization: "Snowflake & Cloud Data Vault",
    sessionsCount: 9
  },
  {
    name: "Amitabh Verma",
    role: "Lead AI Systems Engineer",
    company: "Enterprise AI Solutions",
    avatar: "/place3.jpeg",
    specialization: "GenAI, LLMs & PySpark RAG",
    sessionsCount: 6
  },
  {
    name: "Sneha Kulkarni",
    role: "Staff Data Analyst",
    company: "FinTech Unicorn",
    avatar: "/placements_hero_graduate.png",
    specialization: "Advanced SQL & Analytics Engineering",
    sessionsCount: 11
  }
];

// FAQs Data
const EVENT_FAQS = [
  {
    q: "Are live webinars and workshops at JVM Institute free to attend?",
    a: "Yes! Most of our weekend masterclasses, tech webinars, and live coding bootcamps are 100% free for students and working professionals. Premium hands-on bootcamps may require prior registration due to limited seats."
  },
  {
    q: "Will I receive a Certificate of Participation for attending events?",
    a: "Absolutely! All registered attendees who complete the live workshop session or hackathon submission receive an official verifiable digital Certificate of Accomplishment from JVM Institute."
  },
  {
    q: "What if I miss the live event session?",
    a: "Don't worry! All registered participants receive lifetime access to the recorded video session, code repository, presentation slides, and notes within 24 hours after the live session ends."
  },
  {
    q: "Where are in-person workshops conducted in Pune?",
    a: "Our physical sessions are held at JVM Institute Live Campus, Karve Nagar / Deccan Gymkhana, Pune, Maharashtra. Virtual attendees can join seamlessly via our HD Zoom Live stream."
  },
  {
    q: "How can I participate in the JVM Tech-a-Thon Hackathon?",
    a: "You can register as an individual participant or form a team of up to 4 members. Problem statements will be released on the event launch date, and mentors will guide you throughout the 48-hour build phase."
  }
];

export default function EventsPage() {
  // Filters & Search
  const [selectedTab, setSelectedTab] = useState<"all" | "upcoming" | "past" | "hackathon" | "free">("all");
  const [searchQuery, setSearchQuery] = useState("");

  // Registration Modal State
  const [registerModalOpen, setRegisterModalOpen] = useState(false);
  const [selectedEventForReg, setSelectedEventForReg] = useState<EventItem | null>(null);

  // Form inputs
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [expLevel, setExpLevel] = useState("Fresh Graduate / Student");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [registrationPass, setRegistrationPass] = useState<{
    passId: string;
    name: string;
    eventTitle: string;
    date: string;
    time: string;
  } | null>(null);

  // Video Player Modal State for Past Webinars
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [activeVideoEvent, setActiveVideoEvent] = useState<EventItem | null>(null);

  // Toast Notification
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Expanded FAQs
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0);

  // Countdown timer state for featured event
  const [timeLeft, setTimeLeft] = useState({ days: 12, hours: 8, minutes: 42, seconds: 15 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: 59, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Show Toast
  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  // Trigger Confetti
  const triggerConfetti = () => {
    if (typeof window !== "undefined") {
      import("canvas-confetti")
        .then((confettiModule) => {
          const confetti = confettiModule.default;
          confetti({
            particleCount: 110,
            spread: 90,
            origin: { y: 0.55 }
          });
        })
        .catch((err) => console.log("Confetti error:", err));
    }
  };

  // Open Registration Modal
  const handleOpenRegister = (evt: EventItem) => {
    setSelectedEventForReg(evt);
    setRegistrationPass(null);
    setRegisterModalOpen(true);
  };

  // Submit Registration Form
  const handleSubmitRegistration = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email || !phone) return;

    setIsSubmitting(true);
    try {
      const res = await fetch("/api/events", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          eventId: selectedEventForReg?.id,
          name: fullName,
          email,
          phone,
          expLevel,
        }),
      });

      const data = await res.json();
      if (data.success && data.registration) {
        setRegistrationPass(data.registration);
      } else {
        const generatedPassId = `JVM-PASS-${Math.floor(100000 + Math.random() * 900000)}`;
        setRegistrationPass({
          passId: generatedPassId,
          name: fullName,
          eventTitle: selectedEventForReg?.title || "JVM Live Masterclass",
          date: selectedEventForReg?.date || "Upcoming Date",
          time: selectedEventForReg?.time || "Scheduled Time"
        });
      }
      triggerConfetti();
    } catch (err) {
      console.error("API Error:", err);
      const generatedPassId = `JVM-PASS-${Math.floor(100000 + Math.random() * 900000)}`;
      setRegistrationPass({
        passId: generatedPassId,
        name: fullName,
        eventTitle: selectedEventForReg?.title || "JVM Live Masterclass",
        date: selectedEventForReg?.date || "Upcoming Date",
        time: selectedEventForReg?.time || "Scheduled Time"
      });
      triggerConfetti();
    } finally {
      setIsSubmitting(false);
    }
  };

  // Share Event Link
  const handleShareEvent = (evt: EventItem) => {
    const url = typeof window !== "undefined" ? window.location.href : "";
    if (navigator.clipboard) {
      navigator.clipboard.writeText(`${url}#${evt.id}`);
      showToast(`Copied link for "${evt.title.substring(0, 30)}..." to clipboard!`);
    } else {
      showToast("Link copied to clipboard!");
    }
  };

  // Add to Calendar Simulator
  const handleAddToCalendar = (evt: EventItem) => {
    const title = encodeURIComponent(evt.title);
    const details = encodeURIComponent(`${evt.description}\n\nHosted by JVM Institute with ${evt.speaker.name} (${evt.speaker.role} @ ${evt.speaker.company})`);
    const googleCalUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&details=${details}&location=${encodeURIComponent(evt.mode)}`;
    window.open(googleCalUrl, "_blank");
    showToast("Opening Google Calendar to add event...");
  };

  // Filtered Events List
  const filteredEvents = ALL_EVENTS.filter(evt => {
    // Category match
    if (selectedTab !== "all" && evt.category !== selectedTab) {
      return false;
    }
    // Search match
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchTitle = evt.title.toLowerCase().includes(q);
      const matchDesc = evt.description.toLowerCase().includes(q);
      const matchSpeaker = evt.speaker.name.toLowerCase().includes(q) || evt.speaker.company.toLowerCase().includes(q);
      const matchTags = evt.tags.some(t => t.toLowerCase().includes(q));
      return matchTitle || matchDesc || matchSpeaker || matchTags;
    }
    return true;
  });

  const featuredEvent = ALL_EVENTS.find(e => e.isFeatured) || ALL_EVENTS[0];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#0B0F19] text-slate-900 dark:text-slate-100 font-sans selection:bg-pink-500 selection:text-white transition-colors duration-300">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-[9999] bg-slate-900 dark:bg-slate-800 text-white px-5 py-3.5 rounded-2xl shadow-2xl border border-slate-700/80 flex items-center gap-3 animate-bounce">
          <Sparkles className="w-5 h-5 text-pink-400 animate-spin" />
          <span className="text-sm font-medium">{toastMessage}</span>
        </div>
      )}

      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background Glowing Ambient Orbs */}
        <div className="ambient-glow w-96 h-96 bg-blue-600 top-10 left-1/4"></div>
        <div className="ambient-glow w-96 h-96 bg-purple-600 top-20 right-1/4"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            {/* Live Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 dark:bg-blue-400/10 border border-blue-500/20 text-blue-700 dark:text-blue-300 text-sm font-semibold mb-6 backdrop-blur-md shadow-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-500"></span>
              </span>
              JVM LIVE CAMPUS & VIRTUAL TECH MASTERCLASSES
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
              Elevate Your Tech & Data Career with{" "}
              <span className="jvm-gradient-text">Live Masterclasses</span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed">
              Join interactive webinars, real-time PySpark & Snowflake bootcamps, and hackathons hosted by Lead Architects & Principal Engineers from top tier tech giants.
            </p>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto bg-white/70 dark:bg-slate-900/70 p-4 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-xl backdrop-blur-xl mb-12">
              <div className="p-3 text-center border-r border-slate-200 dark:border-slate-800 last:border-r-0">
                <div className="text-2xl sm:text-3xl font-extrabold text-blue-600 dark:text-blue-400">15,000+</div>
                <div className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1 font-medium">Engineers Trained</div>
              </div>
              <div className="p-3 text-center border-r border-slate-200 dark:border-slate-800 last:border-r-0">
                <div className="text-2xl sm:text-3xl font-extrabold text-purple-600 dark:text-purple-400">65+</div>
                <div className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1 font-medium">Masterclasses</div>
              </div>
              <div className="p-3 text-center border-r border-slate-200 dark:border-slate-800 last:border-r-0">
                <div className="text-2xl sm:text-3xl font-extrabold text-pink-600 dark:text-pink-400">4.9 ★</div>
                <div className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1 font-medium">Student Rating</div>
              </div>
              <div className="p-3 text-center">
                <div className="text-2xl sm:text-3xl font-extrabold text-emerald-600 dark:text-emerald-400">88%</div>
                <div className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1 font-medium">Career Hikes</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Flagship Event Spotlight */}
      {featuredEvent && (
        <section className="py-8 relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl p-6 sm:p-10 overflow-hidden border border-blue-500/30 dark:border-blue-500/20 jvm-glass-card shadow-2xl bg-gradient-to-br from-blue-900/10 via-purple-900/10 to-pink-900/10 dark:from-slate-900/90 dark:to-slate-900/90">
            {/* Header Tag */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <span className="px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md flex items-center gap-1.5">
                <Trophy className="w-3.5 h-3.5" /> Flagship Upcoming Masterclass
              </span>
              <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300 font-semibold bg-white/80 dark:bg-slate-800/80 px-3.5 py-1.5 rounded-full border border-slate-200 dark:border-slate-700">
                <MapPin className="w-4 h-4 text-pink-500" /> {featuredEvent.mode}
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Details */}
              <div className="lg:col-span-7 space-y-5">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 dark:text-white leading-snug">
                  {featuredEvent.title}
                </h2>
                <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
                  {featuredEvent.description}
                </p>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {featuredEvent.tags.map((tag, idx) => (
                    <span key={idx} className="text-xs font-medium px-3 py-1 rounded-lg bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Speaker Card */}
                <div className="flex items-center gap-4 pt-4 border-t border-slate-200/80 dark:border-slate-800">
                  <div className="relative w-14 h-14 rounded-2xl overflow-hidden border-2 border-purple-500 shadow-md">
                    <Image 
                      src={featuredEvent.speaker.avatar} 
                      alt={featuredEvent.speaker.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-white text-base">
                      {featuredEvent.speaker.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium">
                      {featuredEvent.speaker.role} • <span className="text-purple-600 dark:text-purple-400 font-semibold">{featuredEvent.speaker.company}</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Registration Card & Countdown */}
              <div className="lg:col-span-5 bg-white/90 dark:bg-slate-800/90 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 shadow-xl space-y-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-3">
                    ⏰ Live Event Starts In
                  </span>
                  <div className="grid grid-cols-4 gap-2 text-center">
                    <div className="bg-slate-100 dark:bg-slate-900/80 p-2.5 rounded-xl border border-slate-200 dark:border-slate-700">
                      <span className="text-xl sm:text-2xl font-black text-blue-600 dark:text-blue-400">{timeLeft.days}</span>
                      <span className="block text-[10px] text-slate-500 uppercase font-semibold">Days</span>
                    </div>
                    <div className="bg-slate-100 dark:bg-slate-900/80 p-2.5 rounded-xl border border-slate-200 dark:border-slate-700">
                      <span className="text-xl sm:text-2xl font-black text-purple-600 dark:text-purple-400">{timeLeft.hours}</span>
                      <span className="block text-[10px] text-slate-500 uppercase font-semibold">Hours</span>
                    </div>
                    <div className="bg-slate-100 dark:bg-slate-900/80 p-2.5 rounded-xl border border-slate-200 dark:border-slate-700">
                      <span className="text-xl sm:text-2xl font-black text-pink-600 dark:text-pink-400">{timeLeft.minutes}</span>
                      <span className="block text-[10px] text-slate-500 uppercase font-semibold">Mins</span>
                    </div>
                    <div className="bg-slate-100 dark:bg-slate-900/80 p-2.5 rounded-xl border border-slate-200 dark:border-slate-700">
                      <span className="text-xl sm:text-2xl font-black text-emerald-600 dark:text-emerald-400">{timeLeft.seconds}</span>
                      <span className="block text-[10px] text-slate-500 uppercase font-semibold">Secs</span>
                    </div>
                  </div>
                </div>

                {/* Date & Time Slot */}
                <div className="space-y-2 text-sm text-slate-700 dark:text-slate-300 font-medium bg-slate-50 dark:bg-slate-900/50 p-3.5 rounded-xl">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-blue-500" />
                    <span>{featuredEvent.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-purple-500" />
                    <span>{featuredEvent.time}</span>
                  </div>
                </div>

                {/* Seat Capacity Bar */}
                <div>
                  <div className="flex justify-between text-xs font-semibold mb-1.5">
                    <span className="text-slate-600 dark:text-slate-300">Seats Reserved</span>
                    <span className="text-blue-600 dark:text-blue-400">{featuredEvent.seatsFilled} / {featuredEvent.seatsTotal} Seats</span>
                  </div>
                  <div className="w-full bg-slate-200 dark:bg-slate-700 h-2.5 rounded-full overflow-hidden">
                    <div 
                      className="jvm-gradient-bg h-full rounded-full transition-all duration-500" 
                      style={{ width: `${(featuredEvent.seatsFilled / featuredEvent.seatsTotal) * 100}%` }}
                    ></div>
                  </div>
                </div>

                {/* CTAs */}
                <div className="space-y-3 pt-2">
                  <button
                    onClick={() => handleOpenRegister(featuredEvent)}
                    className="w-full py-3.5 px-6 rounded-xl font-bold text-white jvm-gradient-bg hover:opacity-95 shadow-lg hover:shadow-blue-500/25 transition-all flex items-center justify-center gap-2 group"
                  >
                    <Ticket className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    Register Free Seat Now
                  </button>

                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => handleAddToCalendar(featuredEvent)}
                      className="py-2.5 px-3 rounded-xl text-xs font-semibold bg-slate-100 dark:bg-slate-700/60 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors flex items-center justify-center gap-1.5"
                    >
                      <Calendar className="w-3.5 h-3.5 text-blue-500" /> Add to Calendar
                    </button>
                    <button
                      onClick={() => handleShareEvent(featuredEvent)}
                      className="py-2.5 px-3 rounded-xl text-xs font-semibold bg-slate-100 dark:bg-slate-700/60 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors flex items-center justify-center gap-1.5"
                    >
                      <Share2 className="w-3.5 h-3.5 text-purple-500" /> Share Event
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Main Filterable Events Directory */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
          <div>
            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">
              Explore All Workshops & Events
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-1">
              Browse upcoming live masterclasses, hackathons, and past recording archives.
            </p>
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search by topic, PySpark, SQL..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-900 dark:text-white shadow-sm"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          <button
            onClick={() => setSelectedTab("all")}
            className={`px-4 py-2.5 rounded-xl text-sm font-semibold whitespace-nowrap transition-all ${
              selectedTab === "all"
                ? "jvm-gradient-bg text-white shadow-md"
                : "bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800"
            }`}
          >
            All Events ({ALL_EVENTS.length})
          </button>
          <button
            onClick={() => setSelectedTab("upcoming")}
            className={`px-4 py-2.5 rounded-xl text-sm font-semibold whitespace-nowrap transition-all ${
              selectedTab === "upcoming"
                ? "jvm-gradient-bg text-white shadow-md"
                : "bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800"
            }`}
          >
            Upcoming Workshops
          </button>
          <button
            onClick={() => setSelectedTab("free")}
            className={`px-4 py-2.5 rounded-xl text-sm font-semibold whitespace-nowrap transition-all ${
              selectedTab === "free"
                ? "jvm-gradient-bg text-white shadow-md"
                : "bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800"
            }`}
          >
            Free Bootcamps
          </button>
          <button
            onClick={() => setSelectedTab("hackathon")}
            className={`px-4 py-2.5 rounded-xl text-sm font-semibold whitespace-nowrap transition-all ${
              selectedTab === "hackathon"
                ? "jvm-gradient-bg text-white shadow-md"
                : "bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800"
            }`}
          >
            🏆 Hackathons
          </button>
          <button
            onClick={() => setSelectedTab("past")}
            className={`px-4 py-2.5 rounded-xl text-sm font-semibold whitespace-nowrap transition-all ${
              selectedTab === "past"
                ? "jvm-gradient-bg text-white shadow-md"
                : "bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800"
            }`}
          >
            📹 Past Video Archives
          </button>
        </div>

        {/* Events Grid */}
        {filteredEvents.length === 0 ? (
          <div className="text-center py-16 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-8">
            <AlertCircle className="w-12 h-12 text-slate-400 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200">No events matched your filter</h3>
            <p className="text-sm text-slate-500 mt-1">Try clearing your search or selecting another event category.</p>
            <button
              onClick={() => { setSelectedTab("all"); setSearchQuery(""); }}
              className="mt-4 px-4 py-2 rounded-xl text-xs font-semibold bg-blue-600 text-white hover:bg-blue-700 transition-colors"
            >
              Reset All Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map((evt) => (
              <div 
                key={evt.id}
                id={evt.id}
                className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:-translate-y-1.5"
              >
                <div className="p-6 space-y-4">
                  {/* Category & Status Badge */}
                  <div className="flex items-center justify-between gap-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                      evt.category === "hackathon"
                        ? "bg-purple-100 dark:bg-purple-950/80 text-purple-600 dark:text-purple-300"
                        : evt.category === "past"
                        ? "bg-amber-100 dark:bg-amber-950/80 text-amber-600 dark:text-amber-300"
                        : evt.category === "free"
                        ? "bg-emerald-100 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-300"
                        : "bg-blue-100 dark:bg-blue-950/80 text-blue-600 dark:text-blue-300"
                    }`}>
                      {evt.category === "hackathon" ? "🏆 Hackathon" : evt.category === "past" ? "📹 On-Demand" : evt.category === "free" ? "FREE" : "Live Workshop"}
                    </span>
                    <span className="text-xs text-slate-500 dark:text-slate-400 font-medium flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-pink-500" /> {evt.mode.split(" ")[0]}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                    {evt.title}
                  </h3>

                  {/* Date & Time */}
                  <div className="space-y-1 text-xs font-medium text-slate-600 dark:text-slate-400 bg-slate-50 dark:bg-slate-800/50 p-3 rounded-xl border border-slate-100 dark:border-slate-800">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-3.5 h-3.5 text-blue-500" />
                      <span>{evt.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5 text-purple-500" />
                      <span>{evt.time}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 line-clamp-3 leading-relaxed">
                    {evt.description}
                  </p>

                  {/* Speaker */}
                  <div className="flex items-center gap-3 pt-3 border-t border-slate-100 dark:border-slate-800">
                    <div className="relative w-10 h-10 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700">
                      <Image 
                        src={evt.speaker.avatar}
                        alt={evt.speaker.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-900 dark:text-white">{evt.speaker.name}</h4>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400">{evt.speaker.role} • {evt.speaker.company}</p>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {evt.tags.slice(0, 3).map((t, idx) => (
                      <span key={idx} className="text-[10px] font-semibold px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Action Buttons */}
                <div className="p-6 pt-0 space-y-3">
                  {evt.category === "past" ? (
                    <button
                      onClick={() => {
                        setActiveVideoEvent(evt);
                        setVideoModalOpen(true);
                      }}
                      className="w-full py-2.5 px-4 rounded-xl font-bold text-xs bg-amber-500 hover:bg-amber-600 text-white shadow-md transition-all flex items-center justify-center gap-2"
                    >
                      <Play className="w-4 h-4 fill-white" /> Watch Recording
                    </button>
                  ) : (
                    <button
                      onClick={() => handleOpenRegister(evt)}
                      className="w-full py-2.5 px-4 rounded-xl font-bold text-xs text-white jvm-gradient-bg hover:opacity-95 shadow-md transition-all flex items-center justify-center gap-2"
                    >
                      <Ticket className="w-4 h-4" /> Register Free Pass
                    </button>
                  )}

                  <div className="flex items-center justify-between text-xs pt-1 border-t border-slate-100 dark:border-slate-800 text-slate-500">
                    <button 
                      onClick={() => handleAddToCalendar(evt)} 
                      className="hover:text-blue-500 font-medium transition-colors flex items-center gap-1"
                    >
                      <Calendar className="w-3 h-3" /> Calendar
                    </button>
                    <button 
                      onClick={() => handleShareEvent(evt)} 
                      className="hover:text-purple-500 font-medium transition-colors flex items-center gap-1"
                    >
                      <Share2 className="w-3 h-3" /> Share
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* JVM Tech-a-Thon Hackathon Banner */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl p-8 sm:p-12 overflow-hidden jvm-gradient-bg text-white shadow-2xl">
          <div className="absolute -right-10 -bottom-10 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-4">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/20 backdrop-blur-md">
                🏆 National Competition
              </span>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight leading-tight">
                JVM Tech-a-Thon 2026: 48-Hour Data & AI Challenge
              </h2>
              <p className="text-white/90 text-sm sm:text-base max-w-2xl leading-relaxed">
                Build real-time PySpark analytics engines, Snowflake pipelines, or GenAI RAG applications. Compete for ₹1,00,000 in cash prizes, direct placement interviews, and mentorship from lead cloud architects!
              </p>
              
              <div className="flex flex-wrap gap-6 pt-2 text-sm font-semibold">
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-amber-300" /> ₹1,00,000 Prize Pool
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-blue-200" /> Teams of 1 - 4 Members
                </div>
                <div className="flex items-center gap-2">
                  <Laptop className="w-5 h-5 text-pink-200" /> Virtual & Pune Hybrid
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 text-center lg:text-right">
              <button
                onClick={() => openEnrollModal("JVM Tech-a-Thon Hackathon")}
                className="w-full sm:w-auto px-8 py-4 rounded-2xl font-black text-slate-900 bg-white hover:bg-slate-100 shadow-xl hover:scale-105 transition-all text-base"
              >
                Register Your Team Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Guest Speakers & Mentor Panel */}
      <section className="py-16 bg-white dark:bg-slate-900/60 border-y border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">
              Learn from Industry Experts
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-2">
              Our masterclasses are taught by practicing Lead Architects, Principal Engineers, and Senior Consultants.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {FEATURED_SPEAKERS.map((speaker, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700 text-center space-y-4 hover:shadow-xl transition-all"
              >
                <div className="relative w-20 h-20 rounded-full overflow-hidden mx-auto border-2 border-purple-500 shadow-md">
                  <Image
                    src={speaker.avatar}
                    alt={speaker.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white text-base">{speaker.name}</h3>
                  <p className="text-xs font-semibold text-purple-600 dark:text-purple-400 mt-0.5">{speaker.role}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">{speaker.company}</p>
                </div>
                <div className="pt-2 border-t border-slate-200 dark:border-slate-700 text-xs text-slate-600 dark:text-slate-300 font-medium">
                  <span className="block font-semibold text-slate-900 dark:text-slate-100">{speaker.specialization}</span>
                  <span className="text-[11px] text-slate-400 mt-1 block">{speaker.sessionsCount}+ Masterclasses Conducted</span>
                </div>
              </div>
            ))}
          </div>

          {/* Speaker CTA */}
          <div className="mt-10 text-center">
            <button
              onClick={() => openEnrollModal("Guest Speaker Proposal")}
              className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 dark:text-blue-400 hover:underline"
            >
              Interested in conducting a masterclass or guest lecture at JVM Institute? <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-2">
            Everything you need to know about JVM Institute events & masterclasses.
          </p>
        </div>

        <div className="space-y-4">
          {EVENT_FAQS.map((faq, idx) => {
            const isOpen = expandedFaq === idx;
            return (
              <div 
                key={idx}
                className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm transition-all"
              >
                <button
                  onClick={() => setExpandedFaq(isOpen ? null : idx)}
                  className="w-full p-5 text-left font-bold text-slate-900 dark:text-white flex items-center justify-between gap-4 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
                >
                  <span className="text-base sm:text-lg">{faq.q}</span>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0" />
                  )}
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-800/60 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Community Alert Banner */}
      <section className="py-12 bg-slate-900 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="space-y-2">
            <h3 className="text-2xl font-bold">Never Miss an Upcoming Live Masterclass</h3>
            <p className="text-slate-400 text-sm max-w-xl">
              Join 5,000+ tech aspirants on our official WhatsApp & Telegram community groups to receive instant event reminders, free project code files, and placement alerts.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => openEnrollModal("WhatsApp Event Alerts")}
              className="px-6 py-3 rounded-xl font-bold bg-emerald-500 hover:bg-emerald-600 text-white shadow-lg transition-all flex items-center gap-2 text-sm"
            >
              <Send className="w-4 h-4" /> Join WhatsApp Group
            </button>
          </div>
        </div>
      </section>

      <Footer />
      <LeadEnquiryModal />

      {/* Full Page Event Registration View */}
      {registerModalOpen && selectedEventForReg && (
        <div className="fixed inset-0 z-[99999] bg-slate-950/95 backdrop-blur-2xl text-slate-100 overflow-y-auto animate-fadeIn min-h-screen w-full flex flex-col">
          {/* Top Header Navigation Bar */}
          <div className="sticky top-0 z-20 bg-slate-900/90 backdrop-blur-md border-b border-slate-800 px-6 py-4 flex items-center justify-between">
            <button
              onClick={() => setRegisterModalOpen(false)}
              className="inline-flex items-center gap-2 text-sm font-bold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 px-4 py-2 rounded-xl transition-all"
            >
              <ArrowRight className="w-4 h-4 rotate-180" /> Back to Events
            </button>

            <span className="hidden sm:inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold bg-blue-500/10 text-blue-400 border border-blue-500/20">
              <Sparkles className="w-3.5 h-3.5" /> JVM MASTERCLASS FREE REGISTRATION
            </span>

            <button
              onClick={() => setRegisterModalOpen(false)}
              className="p-2 rounded-full text-slate-400 hover:text-white bg-slate-800"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Full Page Body */}
          <div className="flex-1 max-w-6xl w-full mx-auto p-4 sm:p-8 lg:p-12 flex items-center justify-center">
            {registrationPass ? (
              /* Success Digital Ticket Pass View */
              <div className="max-w-xl w-full bg-slate-900 rounded-3xl p-8 sm:p-10 border border-slate-800 shadow-2xl text-center space-y-6">
                <div className="w-16 h-16 bg-emerald-950/80 text-emerald-400 rounded-full flex items-center justify-center mx-auto shadow-inner border border-emerald-500/30">
                  <CheckCircle2 className="w-10 h-10" />
                </div>

                <div>
                  <h3 className="text-3xl font-extrabold text-white">
                    Seat Reserved Successfully!
                  </h3>
                  <p className="text-sm text-slate-400 mt-1">
                    Your digital event pass is generated below. Confirmation email has been sent to <span className="text-blue-400 font-semibold">{email}</span>.
                  </p>
                </div>

                {/* Digital Ticket Card */}
                <div className="bg-gradient-to-br from-blue-900 via-purple-900 to-slate-900 text-white rounded-2xl p-6 sm:p-8 shadow-2xl relative overflow-hidden border border-blue-400/40 text-left space-y-5">
                  <div className="flex justify-between items-center border-b border-white/20 pb-3">
                    <span className="text-xs font-mono tracking-widest text-blue-300 uppercase">
                      {registrationPass.passId}
                    </span>
                    <span className="px-2.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-xs font-bold uppercase border border-emerald-500/30">
                      CONFIRMED PASS
                    </span>
                  </div>

                  <div>
                    <span className="text-xs text-blue-200 uppercase font-semibold block">ATTENDEE</span>
                    <h4 className="text-xl font-bold">{registrationPass.name}</h4>
                  </div>

                  <div>
                    <span className="text-xs text-blue-200 uppercase font-semibold block">EVENT MASTERCLASS</span>
                    <h5 className="text-base font-semibold leading-tight text-blue-100">{registrationPass.eventTitle}</h5>
                  </div>

                  <div className="flex justify-between items-center text-sm text-blue-200 pt-3 border-t border-white/20">
                    <div>
                      <span className="block text-xs text-blue-300 font-semibold">SCHEDULE DATE</span>
                      {registrationPass.date}
                    </div>
                    <div>
                      <span className="block text-xs text-blue-300 font-semibold">SESSION TIME</span>
                      {registrationPass.time}
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                  <button
                    onClick={() => {
                      setRegisterModalOpen(false);
                      showToast("Event ticket pass saved!");
                    }}
                    className="w-full py-3.5 rounded-xl font-bold text-sm text-white jvm-gradient-bg shadow-lg hover:opacity-95"
                  >
                    Done & Save Pass
                  </button>
                  <button
                    onClick={() => handleAddToCalendar(selectedEventForReg)}
                    className="w-full py-3.5 rounded-xl font-bold text-sm bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors flex items-center justify-center gap-2"
                  >
                    <Calendar className="w-4 h-4 text-blue-400" /> Add to Calendar
                  </button>
                </div>
              </div>
            ) : (
              /* Full Page 2-Column Registration Form View */
              <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                {/* Left Column: Event Overview */}
                <div className="lg:col-span-6 bg-slate-900/90 rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-xl space-y-6 flex flex-col justify-between">
                  <div className="space-y-4">
                    <span className="px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-500/20 text-blue-300 border border-blue-500/30">
                      FREE LIVE WORKSHOP
                    </span>

                    <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-snug">
                      {selectedEventForReg.title}
                    </h2>

                    <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                      {selectedEventForReg.description}
                    </p>

                    {/* Schedule Info */}
                    <div className="space-y-2 bg-slate-800/80 p-4 rounded-2xl border border-slate-700/60 text-sm text-slate-200">
                      <div className="flex items-center gap-2.5">
                        <Calendar className="w-4 h-4 text-blue-400" />
                        <span className="font-semibold">{selectedEventForReg.date}</span>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <Clock className="w-4 h-4 text-purple-400" />
                        <span className="font-semibold">{selectedEventForReg.time}</span>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <MapPin className="w-4 h-4 text-pink-400" />
                        <span className="font-semibold">{selectedEventForReg.mode}</span>
                      </div>
                    </div>

                    {/* Speaker Highlight */}
                    <div className="flex items-center gap-4 pt-4 border-t border-slate-800">
                      <div className="relative w-14 h-14 rounded-2xl overflow-hidden border-2 border-purple-500">
                        <Image
                          src={selectedEventForReg.speaker.avatar}
                          alt={selectedEventForReg.speaker.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-bold text-white text-base">{selectedEventForReg.speaker.name}</h4>
                        <p className="text-xs text-slate-400">{selectedEventForReg.speaker.role} • <span className="text-purple-400 font-semibold">{selectedEventForReg.speaker.company}</span></p>
                      </div>
                    </div>
                  </div>

                  {/* Highlights List */}
                  <div className="pt-4 border-t border-slate-800 space-y-2">
                    <h5 className="text-xs font-bold uppercase tracking-wider text-slate-400">WHAT YOU WILL GET</h5>
                    <ul className="space-y-1.5 text-xs text-slate-300">
                      <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400" /> Free Verifiable Digital Certificate of Participation</li>
                      <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400" /> Access to GitHub Code Repository & Notes</li>
                      <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400" /> Live Interactive Q&A with Lead Architect</li>
                    </ul>
                  </div>
                </div>

                {/* Right Column: Registration Form */}
                <div className="lg:col-span-6 bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-2xl space-y-6 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-white">
                      Complete Registration Form
                    </h3>
                    <p className="text-xs text-slate-400 mt-1">
                      Fill out your details below to generate your official event pass.
                    </p>
                  </div>

                  <form onSubmit={handleSubmitRegistration} className="space-y-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Rahul Patil"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-slate-700 bg-slate-800/90 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-slate-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="rahul@gmail.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-slate-700 bg-slate-800/90 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-slate-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1">
                        WhatsApp / Mobile Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 9876543210"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-slate-700 bg-slate-800/90 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-slate-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1">
                        Current Role / Experience Status
                      </label>
                      <select
                        value={expLevel}
                        onChange={(e) => setExpLevel(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-slate-700 bg-slate-800/90 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                      >
                        <option value="Fresh Graduate / Student">Fresh Graduate / Student</option>
                        <option value="0-2 Years Experience">0-2 Years Experience</option>
                        <option value="3-5 Years Experience">3-5 Years Experience</option>
                        <option value="5+ Years Experience">5+ Years Experience</option>
                      </select>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 px-6 rounded-xl font-bold text-white jvm-gradient-bg hover:opacity-95 shadow-xl transition-all flex items-center justify-center gap-2 text-base mt-2"
                    >
                      {isSubmitting ? (
                        <span>Generating Digital Pass...</span>
                      ) : (
                        <>
                          <Ticket className="w-5 h-5" /> Confirm Free Registration
                        </>
                      )}
                    </button>
                  </form>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Past Webinar Video Player Modal */}
      {videoModalOpen && activeVideoEvent && (
        <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-3xl bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden p-6 sm:p-8 space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <span className="px-2.5 py-1 rounded bg-amber-100 dark:bg-amber-950/80 text-amber-600 dark:text-amber-300 text-xs font-bold uppercase">
                  RECORDED WEBINAR
                </span>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-1">
                  {activeVideoEvent.title}
                </h3>
              </div>
              <button
                onClick={() => setVideoModalOpen(false)}
                className="p-2 rounded-full text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 bg-slate-100 dark:bg-slate-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Video Player Placeholder / Iframe */}
            <div className="relative aspect-video rounded-2xl bg-slate-950 overflow-hidden border border-slate-800 flex items-center justify-center group shadow-xl">
              <iframe
                src={activeVideoEvent.videoUrl || "https://www.youtube.com/embed/dQw4w9WgXcQ"}
                title={activeVideoEvent.title}
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            {/* Downloads & Links */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-slate-200 dark:border-slate-800">
              <div className="text-xs text-slate-500 font-medium">
                Speaker: <span className="font-bold text-slate-900 dark:text-white">{activeVideoEvent.speaker.name}</span> ({activeVideoEvent.speaker.company})
              </div>
              <div className="flex items-center gap-3">
                <a
                  href={activeVideoEvent.githubUrl || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl text-xs font-bold bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors flex items-center gap-1.5"
                >
                  <Code className="w-3.5 h-3.5 text-blue-500" /> GitHub Code Repo
                </a>
                <button
                  onClick={() => showToast("Downloading Webinar Presentation PDF...")}
                  className="px-4 py-2 rounded-xl text-xs font-bold bg-blue-600 text-white hover:bg-blue-700 transition-colors flex items-center gap-1.5"
                >
                  <Download className="w-3.5 h-3.5" /> PDF Slides
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
