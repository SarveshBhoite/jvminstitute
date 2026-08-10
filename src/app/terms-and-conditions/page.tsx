"use client";

import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  FileText, 
  ShieldAlert, 
  ChevronRight,
  BookOpen,
  UserCheck,
  Building2,
  CreditCard,
  RotateCcw,
  CalendarCheck,
  GraduationCap,
  Award,
  Briefcase,
  Cpu,
  Lock,
  Code2,
  Camera,
  UserX,
  Key,
  Globe,
  HelpCircle,
  AlertTriangle,
  Scale,
  CheckCircle2
} from "lucide-react";

export default function TermsAndConditionsPage() {
  return (
    <main className="min-h-screen bg-[#FAFAFC] dark:bg-[#0B0F19] text-slate-900 dark:text-slate-100 flex flex-col font-sans">
      <Navbar />

      {/* Header Banner */}
      <section className="relative pt-28 pb-16 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#7C3AED15_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-xs font-extrabold text-blue-300 uppercase tracking-wider">
            <FileText className="w-3.5 h-3.5 text-blue-400" /> Legal & Operational Agreement
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight">
            Terms & Conditions
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto">
            Last Updated: 10 August 2026. Official Terms and Conditions governing students and users of JVM Institute Pvt. Ltd.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-12 sm:py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 flex-1">
        
        {/* Intro Box */}
        <div className="bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-4 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
          <p>
            These Terms & Conditions (&quot;Terms&quot;, &quot;Terms and Conditions&quot;, or &quot;Agreement&quot;) govern your access to and use of the website, services, courses, programs, workshops, internships, training, career services, placement assistance, learning resources, and other services offered by <strong>JVM Institute Pvt. Ltd.</strong> (&quot;JVM Institute&quot;, &quot;Institute&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;).
          </p>
          <p>
            JVM Institute is a private IT training institute based in Pune, Maharashtra, India.
          </p>
          <p className="font-semibold text-slate-800 dark:text-slate-200 bg-purple-50 dark:bg-purple-950/40 p-4 rounded-2xl border border-purple-100 dark:border-purple-900/60">
            By accessing our website, submitting an enquiry, registering for a course, making a payment, attending a class, participating in a program, or otherwise using any service provided by JVM Institute, you acknowledge that you have read, understood, and agreed to these Terms & Conditions.
          </p>
        </div>

        {/* Detailed Document Container */}
        <div className="bg-white dark:bg-slate-900 p-6 sm:p-10 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-8 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
          
          {/* 1. Definitions */}
          <div className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold font-heading text-slate-900 dark:text-white flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-purple-600 dark:text-purple-400" /> 1. Definitions
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-slate-700 dark:text-slate-300 font-medium">
              <li><strong>&quot;Student&quot;, &quot;Learner&quot;, &quot;you&quot;, or &quot;your&quot;</strong> means any person who accesses our website, makes an enquiry, enrolls in a course, or uses any service provided by JVM Institute.</li>
              <li><strong>&quot;Course&quot; or &quot;Program&quot;</strong> means any training course, certification program, workshop, bootcamp, internship, or seminar offered by the Institute.</li>
              <li><strong>&quot;Services&quot;</strong> means all educational, training, career guidance, placement assistance, digital learning, and internship services offered by JVM Institute.</li>
              <li><strong>&quot;Website&quot;</strong> means the official website of JVM Institute (www.jvminstitute.com) and related student portals/dashboards.</li>
              <li><strong>&quot;Learning Materials&quot;</strong> means course notes, slides, videos, recordings, assignments, source code, projects, and educational content provided by the Institute.</li>
            </ul>
          </div>

          {/* 2. Acceptance of Terms */}
          <div className="space-y-3 pt-6 border-t border-slate-100 dark:border-slate-800">
            <h2 className="text-xl sm:text-2xl font-bold font-heading text-slate-900 dark:text-white flex items-center gap-2">
              <UserCheck className="w-5 h-5 text-emerald-500" /> 2. Acceptance of Terms
            </h2>
            <p>By using the Website or enrolling in any program, you agree to comply with these Terms, provide accurate details, follow academic/disciplinary rules, respect faculty and property, and pay fees on schedule.</p>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
              These Terms should be read together with our <Link href="/refund-policy" className="text-purple-600 dark:text-purple-400 underline font-semibold">Refund Policy</Link> and <Link href="/privacy-policy" className="text-purple-600 dark:text-purple-400 underline font-semibold">Privacy Policy</Link>.
            </p>
          </div>

          {/* 3. Eligibility */}
          <div className="space-y-3 pt-6 border-t border-slate-100 dark:border-slate-800">
            <h2 className="text-xl sm:text-2xl font-bold font-heading text-slate-900 dark:text-white flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-blue-500" /> 3. Eligibility
            </h2>
            <p>Certain programs may require specific age, educational qualification, programming knowledge, or technical prerequisites. Students are responsible for verifying their eligibility prior to enrollment.</p>
          </div>

          {/* 4. Course Information & Curriculum */}
          <div className="space-y-3 pt-6 border-t border-slate-100 dark:border-slate-800">
            <h2 className="text-xl sm:text-2xl font-bold font-heading text-slate-900 dark:text-white">
              4. Course Information and Curriculum
            </h2>
            <p>The Institute reserves the right to reasonably modify course modules, technologies, trainers, class schedules, or delivery platforms to align with changing IT industry requirements.</p>
          </div>

          {/* 5. Enrollment and Admission */}
          <div className="space-y-3 pt-6 border-t border-slate-100 dark:border-slate-800">
            <h2 className="text-xl sm:text-2xl font-bold font-heading text-slate-900 dark:text-white">
              5. Enrollment and Admission
            </h2>
            <p>Enrollment is confirmed upon completion of admission requirements and receipt of payment. The Institute reserves the right to reject applications containing materially false or misleading information.</p>
          </div>

          {/* 6. Fees and Payments */}
          <div className="space-y-3 pt-6 border-t border-slate-100 dark:border-slate-800">
            <h2 className="text-xl sm:text-2xl font-bold font-heading text-slate-900 dark:text-white flex items-center gap-2">
              <CreditCard className="w-5 h-5 text-indigo-500" /> 6. Fees and Payments
            </h2>
            <p>Fees must be paid per the agreed schedule. For installment options, students remain responsible for all scheduled payments. Failure to pay due installments may result in temporary suspension of portal or class access.</p>
          </div>

          {/* 7. Refunds and Cancellation */}
          <div className="space-y-3 pt-6 border-t border-slate-100 dark:border-slate-800">
            <h2 className="text-xl sm:text-2xl font-bold font-heading text-slate-900 dark:text-white flex items-center gap-2">
              <RotateCcw className="w-5 h-5 text-purple-600 dark:text-purple-400" /> 7. Refunds and Cancellation
            </h2>
            <p>All refund claims and cancellations are strictly governed by the official JVM Institute <Link href="/refund-policy" className="text-purple-600 dark:text-purple-400 underline font-semibold">Refund Policy</Link>.</p>
          </div>

          {/* 8, 9, 10. Batches, Attendance & Academic Requirements */}
          <div className="space-y-3 pt-6 border-t border-slate-100 dark:border-slate-800">
            <h2 className="text-xl sm:text-2xl font-bold font-heading text-slate-900 dark:text-white">
              8, 9 & 10. Batches, Attendance & Academic Requirements
            </h2>
            <p>Students are expected to maintain regular class attendance, submit assignments, and complete capstone projects. Non-attendance does not automatically entitle a student to fee reductions or refunds.</p>
          </div>

          {/* 11. Certificates and Credentials */}
          <div className="space-y-3 pt-6 border-t border-slate-100 dark:border-slate-800">
            <h2 className="text-xl sm:text-2xl font-bold font-heading text-slate-900 dark:text-white flex items-center gap-2">
              <Award className="w-5 h-5 text-amber-500" /> 11. Certificates and Credentials
            </h2>
            <p>Certificates represent course completion subject to academic and fee clearance. Certificates do not constitute a university degree or government statutory license.</p>
          </div>

          {/* 12. Placement Assistance */}
          <div className="space-y-3 pt-6 border-t border-slate-100 dark:border-slate-800">
            <h2 className="text-xl sm:text-2xl font-bold font-heading text-slate-900 dark:text-white flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-purple-600 dark:text-purple-400" /> 12. Placement Assistance (Best-Effort Basis)
            </h2>
            <p className="font-semibold text-slate-800 dark:text-slate-200">
              Placement assistance is provided on a best-effort basis (resume review, mock interviews, job drives).
            </p>
            <p>JVM Institute does not guarantee a job offer, specific salary, employer, or fixed timeframe as final hiring decisions rest solely with independent employers.</p>
          </div>

          {/* 13, 14, 15. Internships, Software & AI Tools */}
          <div className="space-y-3 pt-6 border-t border-slate-100 dark:border-slate-800">
            <h2 className="text-xl sm:text-2xl font-bold font-heading text-slate-900 dark:text-white flex items-center gap-2">
              <Cpu className="w-5 h-5 text-indigo-500" /> 13, 14 & 15. Software, Cloud & AI Tools
            </h2>
            <p>Training may utilize AWS, Azure, GCP, OpenAI, Databricks, PySpark, LangChain, or GitHub. Students must use software tools responsibly and comply with third-party platform licensing terms.</p>
          </div>

          {/* 16. Intellectual Property */}
          <div className="space-y-3 pt-6 border-t border-slate-100 dark:border-slate-800">
            <h2 className="text-xl sm:text-2xl font-bold font-heading text-slate-900 dark:text-white flex items-center gap-2">
              <Lock className="w-5 h-5 text-rose-500" /> 16. Intellectual Property Rights
            </h2>
            <p>All Learning Materials, recordings, code samples, logos, and curriculum provided by JVM Institute are protected by copyright. Unauthorized commercial re-sale, public distribution, or copying is strictly prohibited.</p>
          </div>

          {/* 17, 18, 19. Student Conduct & Recording */}
          <div className="space-y-3 pt-6 border-t border-slate-100 dark:border-slate-800">
            <h2 className="text-xl sm:text-2xl font-bold font-heading text-slate-900 dark:text-white flex items-center gap-2">
              <UserX className="w-5 h-5 text-amber-500" /> 17, 18 & 19. Student Code of Conduct
            </h2>
            <p>Students must maintain professional conduct. Harassment, academic cheating, unauthorized recording of classes, or disruption of institute activities will lead to disciplinary action or suspension.</p>
          </div>

          {/* 20 - 30. Operational Terms */}
          <div className="space-y-3 pt-6 border-t border-slate-100 dark:border-slate-800">
            <h2 className="text-xl sm:text-2xl font-bold font-heading text-slate-900 dark:text-white">
              20 - 30. Account Security, Disclaimers & Results
            </h2>
            <p>Individual career results depend on student effort, background, practice, and market conditions. Past student success examples or salary statistics published by the Institute are contextual benchmarks and not guaranteed outcomes for every individual.</p>
          </div>

          {/* 31 - 35. Liability & Indemnification */}
          <div className="space-y-3 pt-6 border-t border-slate-100 dark:border-slate-800">
            <h2 className="text-xl sm:text-2xl font-bold font-heading text-slate-900 dark:text-white flex items-center gap-2">
              <Scale className="w-5 h-5 text-purple-600 dark:text-purple-400" /> 31 - 35. Limitation of Liability & Student Responsibility
            </h2>
            <p>To the maximum extent permitted by applicable law, JVM Institute is not liable for indirect or consequential damages. Students are responsible for maintaining backups of their personal project code files.</p>
          </div>

          {/* 38 - 44. Governing Law & Acknowledgement */}
          <div className="space-y-4 pt-6 border-t border-slate-100 dark:border-slate-800">
            <h2 className="text-xl sm:text-2xl font-bold font-heading text-slate-900 dark:text-white">
              38 - 44. Governing Law, Contact & Acceptance
            </h2>
            <p>
              These Terms shall be governed by the laws of India, under the exclusive jurisdiction of courts in <strong>Pune, Maharashtra, India</strong>.
            </p>
            
            <div className="bg-slate-50 dark:bg-slate-800/60 p-5 rounded-2xl border border-slate-200 dark:border-slate-700 text-sm font-medium space-y-2">
              <h3 className="font-bold text-slate-900 dark:text-white text-base">JVM Institute Pvt. Ltd.</h3>
              <p>S.No. 82, Suman Ankur, Sahyadri Farms, Lalit Estate, Baner, Pune – 411045, Maharashtra, India</p>
              <p><strong className="text-slate-900 dark:text-white">Phone:</strong> +91 84462 84162</p>
              <p><strong className="text-slate-900 dark:text-white">Email:</strong> infojvminstitute@gmail.com / support@jvminstitute.com</p>
              <p><strong className="text-slate-900 dark:text-white">Website:</strong> www.jvminstitute.com</p>
            </div>

            <div className="p-4 rounded-2xl bg-emerald-50/60 dark:bg-emerald-950/20 border border-emerald-200/60 dark:border-emerald-800/40 text-emerald-900 dark:text-emerald-200 font-semibold text-sm sm:text-base">
              By accessing the Website or using any JVM Institute Service, you acknowledge that you have read, understood, and agreed to be bound by these Terms & Conditions.
            </div>
          </div>

        </div>

        {/* Back Link */}
        <div className="text-center pt-4">
          <Link href="/" className="inline-flex items-center gap-1.5 text-sm font-bold text-[#1E2B88] dark:text-purple-400 hover:underline">
            Back to Home Page <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

      </section>

      <Footer />
    </main>
  );
}
