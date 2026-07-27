"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Globe, 
  Database, 
  Code2, 
  Cloud, 
  Layers, 
  Cpu, 
  Server, 
  CheckCircle,
  ArrowRight
} from "lucide-react";

const techNodes = [
  { id: 1, name: "PySpark", role: "Distributed Processing", icon: Cpu, angle: 0 },
  { id: 2, name: "Databricks", role: "Lakehouse Platform", icon: Cloud, angle: 60 },
  { id: 3, name: "Snowflake", role: "Data Warehousing", icon: Server, angle: 120 },
  { id: 4, name: "AWS Glue", role: "Cloud ETL Service", icon: Layers, angle: 180 },
  { id: 5, name: "Apache Airflow", role: "Pipeline Orchestration", icon: Database, angle: 240 },
  { id: 6, name: "Python & SQL", role: "Core Data Language", icon: Code2, angle: 300 },
];

export default function GlobeTechEcoSection() {
  const [activeNode, setActiveNode] = useState(techNodes[0]);

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white via-slate-50 to-white dark:from-[#0B0F19] dark:via-[#0F172A] dark:to-[#0B0F19] relative overflow-hidden transition-colors duration-300">
      
      {/* Decorative Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-50 dark:bg-purple-950/60 border border-purple-100 dark:border-purple-900/60 text-xs font-extrabold text-[#7C248C] dark:text-purple-300 uppercase tracking-wider">
            <Globe className="w-4 h-4 text-[#E01E6A] dark:text-pink-400" /> Global Tech Ecosystem
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-slate-900 dark:text-white tracking-tight">
            Learn Technologies Demanded Across <span className="jvm-gradient-text">Global Data Engineering</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            JVM Institute curriculum integrates real cloud infrastructure, streaming tools, and big data engines used by Fortune 500 tech teams.
          </p>
        </div>

        {/* 2-Column Grid: Interactive Orbiting Globe Visual & Tech Details */}
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Interactive Orbiting Globe Canvas */}
          <div className="lg:col-span-7 relative flex items-center justify-center py-8">
            
            {/* Outer Orbit Ring 1 */}
            <div className="w-[340px] h-[340px] sm:w-[420px] sm:h-[420px] rounded-full border-2 border-dashed border-purple-200 dark:border-purple-900/60 absolute animate-globe-spin"></div>
            
            {/* Outer Orbit Ring 2 */}
            <div className="w-[260px] h-[260px] sm:w-[320px] sm:h-[320px] rounded-full border border-indigo-200 dark:border-indigo-900/60 absolute animate-globe-spin-reverse"></div>

            {/* Central Globe Core */}
            <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-full jvm-gradient-bg p-1 shadow-2xl flex flex-col items-center justify-center text-center text-white z-20 group">
              <div className="w-full h-full rounded-full bg-slate-950/80 backdrop-blur-md flex flex-col items-center justify-center p-4">
                <Globe className="w-10 h-10 text-amber-300 mb-1 animate-pulse" />
                <span className="text-xs font-extrabold font-heading tracking-wider">
                  JVM ECOSYSTEM
                </span>
                <span className="text-[10px] text-purple-200 font-medium">Pune & Global</span>
              </div>
            </div>

            {/* Orbiting Tech Badges Around Center */}
            {techNodes.map((node) => {
              const NodeIcon = node.icon;
              const isSelected = activeNode.id === node.id;
              
              // Calculate positioning around the 360 circle radius
              const radius = 160; // radius in px
              const x = radius * Math.cos((node.angle * Math.PI) / 180);
              const y = radius * Math.sin((node.angle * Math.PI) / 180);

              return (
                <button
                  key={node.id}
                  onClick={() => setActiveNode(node)}
                  style={{
                    transform: `translate(${x}px, ${y}px)`,
                  }}
                  className={`absolute z-30 transition-all duration-300 p-3 rounded-2xl flex items-center gap-2 border shadow-lg cursor-pointer hover:scale-110 ${
                    isSelected
                      ? "bg-gradient-to-r from-[#1E2B88] to-[#7C248C] text-white border-transparent ring-4 ring-purple-300 dark:ring-purple-900"
                      : "bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 border-slate-200 dark:border-slate-700 hover:border-[#1E2B88]"
                  }`}
                >
                  <NodeIcon className={`w-4 h-4 ${isSelected ? "text-amber-300" : "text-[#7C248C] dark:text-purple-400"}`} />
                  <span className="text-xs font-extrabold whitespace-nowrap">{node.name}</span>
                </button>
              );
            })}

          </div>

          {/* Right Column: Selected Node Spotlight Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 shadow-xl space-y-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl pointer-events-none"></div>

              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl jvm-gradient-bg text-white flex items-center justify-center shadow-md">
                  {React.createElement(activeNode.icon, { className: "w-7 h-7" })}
                </div>
                <div>
                  <span className="text-xs font-bold text-[#E01E6A] dark:text-pink-400 uppercase tracking-wider">
                    {activeNode.role}
                  </span>
                  <h3 className="text-2xl font-bold font-heading text-slate-900 dark:text-white">
                    {activeNode.name} Mastery
                  </h3>
                </div>
              </div>

              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                At JVM Institute, you don&apos;t just read theory — you build production ETL pipelines, configure cluster nodes, and process million-row datasets using <strong>{activeNode.name}</strong>.
              </p>

              <div className="space-y-3 pt-2 border-t border-slate-100 dark:border-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Integrated into Data Engineering Master Program</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Real-time Databricks / Cloud Workspace Access</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>MNC Interview Questions & Code Snippets</span>
                </div>
              </div>

              <div className="pt-4">
                <Link
                  href="/data-engineering-course-in-pune"
                  className="w-full jvm-gradient-bg text-white font-extrabold py-3.5 px-6 rounded-2xl text-sm transition-all flex items-center justify-center gap-2 shadow-md hover:opacity-95"
                >
                  View Data Engineering Syllabus <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
