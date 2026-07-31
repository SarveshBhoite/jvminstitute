"use client";

import React, { useState, useEffect } from "react";
import { X, Send, PhoneCall, CheckCircle2 } from "lucide-react";

interface LeadEnquiryModalProps {
  isOpen?: boolean;
  onClose?: () => void;
  courseTitle?: string;
}

export default function LeadEnquiryModal({
  isOpen: externalIsOpen,
  onClose: externalOnClose,
  courseTitle,
}: LeadEnquiryModalProps) {
  const [internalIsOpen, setInternalIsOpen] = useState(false);

  // Automatically trigger modal after 2.5 seconds when visiting home page if uncontrolled
  useEffect(() => {
    if (externalIsOpen === undefined) {
      const timer = setTimeout(() => {
        setInternalIsOpen(true);
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, [externalIsOpen]);

  const isOpen = externalIsOpen !== undefined ? externalIsOpen : internalIsOpen;

  const handleClose = () => {
    if (externalOnClose) {
      externalOnClose();
    } else {
      setInternalIsOpen(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-lg bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden">
        
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Top Header */}
        <div className="space-y-2 text-center mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-50 dark:bg-purple-950/60 text-[#7C248C] dark:text-purple-300 text-xs font-extrabold uppercase tracking-wider">
            <PhoneCall className="w-3.5 h-3.5 text-[#E01E6A]" /> Free Career Counselling
          </div>

          <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-slate-900 dark:text-white">
            {courseTitle ? courseTitle : "Book Free Demo & Syllabus PDF"}
          </h3>

          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
            Talk directly with senior Data Engineers from JVM Institute Pune.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={(e) => { e.preventDefault(); handleClose(); }} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Full Name</label>
            <input 
              type="text" 
              required
              placeholder="e.g. Sarvesh Bhoite" 
              className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-[#1E2B88] dark:focus:ring-purple-500 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">WhatsApp Phone Number</label>
            <input 
              type="tel" 
              required
              placeholder="+91 98765 43210" 
              className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-[#1E2B88] dark:focus:ring-purple-500 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Select Course Interest</label>
            <select className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-[#1E2B88] dark:focus:ring-purple-500 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white">
              <option value="de">Data Engineering Master Program</option>
              <option value="python">Python for Data Analysis</option>
              <option value="pyspark">PySpark & Databricks Track</option>
            </select>
          </div>

          <button 
            type="submit" 
            className="w-full jvm-gradient-bg text-white font-extrabold py-3.5 px-4 rounded-xl text-sm transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
          >
            <Send className="w-4 h-4" /> Reserve Free Callback Seat
          </button>
        </form>

        <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
          <span className="flex items-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> 100% Privacy Guaranteed
          </span>
          <span>No Spam, Only Course Updates</span>
        </div>

      </div>
    </div>
  );
}
