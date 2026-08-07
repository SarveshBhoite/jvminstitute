"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EnrollmentFormSection from "@/components/EnrollmentFormSection";

export default function EnrollPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAFC] dark:bg-[#0B0F19] transition-colors duration-300 overflow-x-hidden selection:bg-[#7C248C] selection:text-white">
      <Navbar />
      <main className="flex-grow pt-0">
        <EnrollmentFormSection />
      </main>
      <Footer />
    </div>
  );
}
