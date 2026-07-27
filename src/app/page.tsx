import React from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import LeadEnquiryModal from "@/components/LeadEnquiryModal";
import HiringPartnersTicker from "@/components/HiringPartnersTicker";
import FeaturedCourses from "@/components/FeaturedCourses";
import GlobeTechEcoSection from "@/components/GlobeTechEcoSection";
import KeyFeaturesBentoSection from "@/components/KeyFeaturesBentoSection";
import PlacedStudentsCarousel from "@/components/PlacedStudentsCarousel";
import NewFeaturesSpotlight from "@/components/NewFeaturesSpotlight";
import WhyOurCourseRanksSection from "@/components/WhyOurCourseRanksSection";
import BlogCrossLinkSection from "@/components/BlogCrossLinkSection";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAFC] dark:bg-[#0B0F19] transition-colors duration-300">
      {/* Navigation Header */}
      <Navbar />

      {/* Automatic Lead Enquiry Popup Modal */}
      <LeadEnquiryModal />

      {/* Main Page Content */}
      <main className="flex-grow">
        {/* Asymmetric Curved Hero Section */}
        <HeroSection />

        {/* 1. Infinite Ticker: Top MNC Hiring Partners */}
        <HiringPartnersTicker />

        {/* 2. Featured Courses Track & Fee Deposit Options */}
        <FeaturedCourses />

        {/* 3. Key Features Bento Grid & Arched Circular Marquee */}
        <KeyFeaturesBentoSection />

        {/* 4. Interactive Orbiting Tech Globe Ecosystem */}
        <GlobeTechEcoSection />

        {/* 5. Rotating Placed Alumni Carousel with Salary Hikes */}
        <PlacedStudentsCarousel />

        {/* 6. New Features Spotlight: Refer & Earn, PDF Store, Placements */}
        <NewFeaturesSpotlight />

        {/* 7. Why Our Course Ranks Among the Best (Video & Track Record) */}
        <WhyOurCourseRanksSection />

        {/* 8. High-Authority SEO Ranking Blog Cross-links */}
        <BlogCrossLinkSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
