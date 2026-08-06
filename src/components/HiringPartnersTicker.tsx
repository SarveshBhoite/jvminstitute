"use client";

import React from "react";
import { Building2 } from "lucide-react";
import LogoLoop, { LogoItem } from "./LogoLoop";

// List of real company logos stored in /public/logo/
const companyLogos = [
  { src: "/logo/TCS.NS.png", title: "TCS" },
  { src: "/logo/INFY.png", title: "Infosys" },
  { src: "/logo/PERSISTENT.NS.png", title: "Persistent Systems" },
  { src: "/logo/HCLTECH.NS_BIG.png", title: "HCL Tech" },
  { src: "/logo/CAP.PA_BIG.png", title: "Capgemini" },
  { src: "/logo/deloitte_BIG.png", title: "Deloitte" },
  { src: "/logo/LTIM.NS.png", title: "LTIMindtree" },
  { src: "/logo/LTTS.NS.png", title: "L&T Technology Services" },
  { src: "/logo/CTSH.png", title: "Cognizant" },
  { src: "/logo/TECHM.NS_BIG.png", title: "Tech Mahindra" },
  { src: "/logo/HEXAWARE.NS.png", title: "Hexaware" },
  { src: "/logo/MPHASIS.NS.png", title: "Mphasis" },
  { src: "/logo/KPITTECH.NS.png", title: "KPIT Technologies" },
  { src: "/logo/JPM.png", title: "JPMorgan Chase" },
  { src: "/logo/GS.png", title: "Goldman Sachs" },
  { src: "/logo/MS.png", title: "Morgan Stanley" },
  { src: "/logo/BAC.png", title: "Bank of America" },
  { src: "/logo/citibank-4-logo-png-transparent.png", title: "Citibank" },
  { src: "/logo/UBER.png", title: "Uber" },
  { src: "/logo/WMT.png", title: "Walmart" },
  { src: "/logo/meesho_BIG.png", title: "Meesho" },
  { src: "/logo/openai_BIG.png", title: "OpenAI" },
  { src: "/logo/anthropic.png", title: "Anthropic" },
  { src: "/logo/icons8-google-48.png", title: "Google" },
  { src: "/logo/icons8-microsoft-48.png", title: "Microsoft" },
  { src: "/logo/icons8-amazon-48.png", title: "Amazon" },
  { src: "/logo/icons8-apple-50.png", title: "Apple" },
  { src: "/logo/icons8-meta-94.png", title: "Meta" },
  { src: "/logo/icons8-nvidia-50.png", title: "NVIDIA" },
  { src: "/logo/icons8-ibm-48.png", title: "IBM" },
  { src: "/logo/icons8-salesforce-50.png", title: "Salesforce" },
  { src: "/logo/icons8-sap-48.png", title: "SAP" },
  { src: "/logo/icons8-intel-24.png", title: "Intel" },
  { src: "/logo/icons8-amd-50.png", title: "AMD" },
  { src: "/logo/icons8-dell-50.png", title: "Dell" },
  { src: "/logo/icons8-hp-50.png", title: "HP" },
];

const partnerLogos: LogoItem[] = companyLogos.map((logo) => ({
  src: logo.src,
  alt: logo.title,
  title: logo.title,
}));

export default function HiringPartnersTicker() {
  return (
    <section className="py-8 bg-slate-50/80 dark:bg-slate-900/60 border-y border-slate-200/80 dark:border-slate-800 overflow-hidden relative">
      
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-5 text-center">
        <p className="text-xs font-extrabold uppercase tracking-widest text-slate-500 dark:text-slate-400 flex items-center justify-center gap-2">
          <Building2 className="w-4 h-4 text-[#1E2B88] dark:text-purple-400" />
          Top MNCs & Hiring Partners
        </p>
      </div>

      {/* Real Company Logos Continuous Ticker */}
      <div className="w-full relative">
        <LogoLoop
          logos={partnerLogos}
          speed={50}
          direction="left"
          logoHeight={48}
          gap={48}
          pauseOnHover={true}
          scaleOnHover={true}
          fadeOut={true}
          ariaLabel="JVM Institute Hiring Partner Logos"
        />
      </div>

    </section>
  );
}

