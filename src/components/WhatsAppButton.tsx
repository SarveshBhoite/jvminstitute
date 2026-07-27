"use client";

import React from "react";
import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  // Replace with official JVM Institute WhatsApp contact number
  const whatsappNumber = "919876543210"; 
  const defaultMessage = encodeURIComponent(
    "Hello JVM Institute team! I would like to inquire about your Data Engineering & Tech courses, upcoming batches, and fee details."
  );

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${defaultMessage}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 group">
      {/* Tooltip text popup on hover */}
      <div className="absolute right-full top-1/2 -translate-y-1/2 mr-3 px-3 py-1.5 bg-slate-900 dark:bg-slate-800 text-white text-xs font-semibold rounded-xl shadow-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none translate-x-2 group-hover:translate-x-0 border border-slate-700/80">
        Chat with JVM Admissions
      </div>

      {/* Floating Animated WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with JVM Institute on WhatsApp"
        className="relative flex items-center justify-center w-14 h-14 sm:w-15 sm:h-15 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-2xl hover:shadow-emerald-500/50 transition-all duration-300 transform group-hover:scale-110 active:scale-95"
      >
        {/* Pulsing Ripple Aura Ring */}
        <span className="absolute inset-0 rounded-full bg-emerald-500 opacity-75 animate-ping pointer-events-none"></span>

        {/* WhatsApp Icon */}
        <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8 text-white relative z-10 fill-white stroke-emerald-500" />
      </a>
    </div>
  );
}
