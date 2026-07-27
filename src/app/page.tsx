import React from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturedCourses from "@/components/FeaturedCourses";
import NewFeaturesSpotlight from "@/components/NewFeaturesSpotlight";
import BlogCrossLinkSection from "@/components/BlogCrossLinkSection";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAFC]">
      {/* Navigation Header */}
      <Navbar />

      {/* Main Page Content */}
      <main className="flex-grow">
        {/* Asymmetric Light Theme Hero Section */}
        <HeroSection />

        {/* Featured Courses Track & Fee Deposit Options */}
        <FeaturedCourses />

        {/* New Features Spotlight: Refer & Earn, PDF Store, Placements */}
        <NewFeaturesSpotlight />

        {/* High-Authority SEO Ranking Blog Cross-links */}
        <BlogCrossLinkSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
