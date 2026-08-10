"use client";

import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  ShieldCheck, 
  Lock, 
  ChevronRight,
  Building2,
  Mail,
  Phone,
  Globe,
  Database,
  CreditCard,
  Cookie,
  Users,
  Briefcase,
  FileCheck,
  CheckCircle2,
  AlertTriangle,
  Server,
  Cpu,
  UserCheck,
  FileText
} from "lucide-react";

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[#FAFAFC] dark:bg-[#0B0F19] text-slate-900 dark:text-slate-100 flex flex-col font-sans">
      <Navbar />

      {/* Header Banner */}
      <section className="relative pt-28 pb-16 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#7C3AED15_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/20 border border-purple-400/30 text-xs font-extrabold text-purple-300 uppercase tracking-wider">
            <Lock className="w-3.5 h-3.5 text-purple-400" /> Data Privacy & Compliance
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto">
            Last Updated: 10 August 2026. Official Privacy Policy governing JVM Institute Pvt. Ltd.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-12 sm:py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 flex-1">
        
        {/* Intro Card */}
        <div className="bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-4 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
          <p>
            <strong>JVM Institute Pvt. Ltd.</strong> (&quot;JVM Institute&quot;, &quot;Institute&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) respects your privacy and is committed to protecting the personal information entrusted to us.
          </p>
          <p>
            This Privacy Policy explains how JVM Institute collects, uses, stores, processes, discloses, and protects personal information when you visit our website, submit enquiries, register for courses, make payments, attend classes, use student portals, participate in placement assistance, or otherwise interact with us.
          </p>
          <p className="font-semibold text-slate-800 dark:text-slate-200 bg-purple-50 dark:bg-purple-950/40 p-4 rounded-2xl border border-purple-100 dark:border-purple-900/60">
            By using our Website or Services, you acknowledge that you have read and understood this Privacy Policy. This policy should be read together with our <Link href="/terms-and-conditions" className="text-purple-600 dark:text-purple-400 underline">Terms & Conditions</Link> and <Link href="/refund-policy" className="text-purple-600 dark:text-purple-400 underline">Refund Policy</Link>.
          </p>
        </div>

        {/* Detailed Document Sections */}
        <div className="bg-white dark:bg-slate-900 p-6 sm:p-10 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-8 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
          
          {/* Section 1 */}
          <div className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold font-heading text-slate-900 dark:text-white flex items-center gap-2">
              <Building2 className="w-5 h-5 text-purple-600 dark:text-purple-400" /> 1. About JVM Institute
            </h2>
            <p>
              <strong>JVM Institute Pvt. Ltd.</strong> is a private IT training institute based in Pune, Maharashtra, India, providing professional training and educational services in areas including Artificial Intelligence, Machine Learning, Generative AI, Cloud Computing, Software Development, Data Science, and related technologies.
            </p>
            <div className="bg-slate-50 dark:bg-slate-800/60 p-5 rounded-2xl border border-slate-200 dark:border-slate-700 text-sm font-medium space-y-2">
              <p><strong className="text-slate-900 dark:text-white">JVM Institute Pvt. Ltd.</strong></p>
              <p>S.No. 82, Suman Ankur, Sahyadri Farms, Lalit Estate, Baner, Pune – 411045, Maharashtra, India</p>
              <p><strong className="text-slate-900 dark:text-white">Phone:</strong> +91 84462 84162</p>
              <p><strong className="text-slate-900 dark:text-white">Email:</strong> infojvminstitute@gmail.com / support@jvminstitute.com</p>
              <p><strong className="text-slate-900 dark:text-white">Website:</strong> www.jvminstitute.com</p>
            </div>
          </div>

          {/* Section 2 */}
          <div className="space-y-3 pt-6 border-t border-slate-100 dark:border-slate-800">
            <h2 className="text-xl sm:text-2xl font-bold font-heading text-slate-900 dark:text-white flex items-center gap-2">
              <Database className="w-5 h-5 text-emerald-500" /> 2. Information We Collect
            </h2>
            <p>Depending on how you interact with JVM Institute, we may collect different categories of information.</p>
            <h3 className="font-bold text-slate-900 dark:text-white text-base">2.1 Personal Information You Provide</h3>
            <ul className="list-disc pl-6 space-y-1.5 text-slate-700 dark:text-slate-300 font-medium">
              <li>Full name, Date of birth or age (where required);</li>
              <li>Email address, Mobile/telephone number, Residential address, City, state, country;</li>
              <li>Educational qualifications, College or university details;</li>
              <li>Employment information, Professional experience, Technical skills;</li>
              <li>Course preferences, Career interests, Resume/CV details;</li>
              <li>LinkedIn or GitHub profile links;</li>
              <li>Information provided during counseling, enquiry forms, or placement assistance.</li>
            </ul>
            <p className="text-xs text-slate-500 dark:text-slate-400 italic">
              We only seek information that is reasonably relevant to the particular purpose for which it is collected.
            </p>
          </div>

          {/* Section 3 */}
          <div className="space-y-3 pt-6 border-t border-slate-100 dark:border-slate-800">
            <h2 className="text-xl sm:text-2xl font-bold font-heading text-slate-900 dark:text-white flex items-center gap-2">
              <CreditCard className="w-5 h-5 text-indigo-500" /> 3. Payment and Transaction Information
            </h2>
            <p>
              When you purchase a course or service, payment may be processed through third-party payment gateways, banks, UPI providers, card networks, or other payment service providers.
            </p>
            <p>We may receive information such as Transaction ID, payment status, payment date, amount paid, course purchased, and payment method.</p>
            <p className="font-semibold text-slate-800 dark:text-slate-200">
              We generally do not require or store complete credit/debit card numbers, CVV numbers, PINs, or banking passwords on our own systems.
            </p>
          </div>

          {/* Section 4 */}
          <div className="space-y-3 pt-6 border-t border-slate-100 dark:border-slate-800">
            <h2 className="text-xl sm:text-2xl font-bold font-heading text-slate-900 dark:text-white flex items-center gap-2">
              <Server className="w-5 h-5 text-purple-600 dark:text-purple-400" /> 4. Information Collected Automatically
            </h2>
            <p>When you visit our Website, certain technical information may be collected automatically, including IP address, browser type, device type, operating system, pages visited, date/time of visits, referring URLs, and diagnostic logs.</p>
          </div>

          {/* Section 5 */}
          <div className="space-y-3 pt-6 border-t border-slate-100 dark:border-slate-800">
            <h2 className="text-xl sm:text-2xl font-bold font-heading text-slate-900 dark:text-white flex items-center gap-2">
              <Cookie className="w-5 h-5 text-amber-500" /> 5. Cookies and Similar Technologies
            </h2>
            <p>
              Our Website may use cookies, pixels, tags, and analytics tools to keep the website functional, remember preferences, analyze web traffic, improve performance, and detect security issues. You may control cookie settings through your browser.
            </p>
          </div>

          {/* Section 6 */}
          <div className="space-y-3 pt-6 border-t border-slate-100 dark:border-slate-800">
            <h2 className="text-xl sm:text-2xl font-bold font-heading text-slate-900 dark:text-white flex items-center gap-2">
              <Users className="w-5 h-5 text-blue-500" /> 6. Information Received from Third Parties
            </h2>
            <p>
              We may receive information from payment processors, advertising platforms, social media platforms, lead-generation partners, recruitment platforms, or CRM systems.
            </p>
          </div>

          {/* Section 7 */}
          <div className="space-y-4 pt-6 border-t border-slate-100 dark:border-slate-800">
            <h2 className="text-xl sm:text-2xl font-bold font-heading text-slate-900 dark:text-white flex items-center gap-2">
              <FileCheck className="w-5 h-5 text-emerald-500" /> 7. How We Use Personal Information
            </h2>
            
            <div className="space-y-3">
              <h3 className="font-bold text-slate-900 dark:text-white text-base">• Course and Student Administration</h3>
              <p>Processing admissions, managing batches, providing training, tracking attendance, assignments, and issuing certificates.</p>

              <h3 className="font-bold text-slate-900 dark:text-white text-base">• Communication</h3>
              <p>Responding to enquiries, providing class schedules, administrative notices, and payment reminders.</p>

              <h3 className="font-bold text-slate-900 dark:text-white text-base">• Career and Placement Services</h3>
              <p>Career counseling, resume preparation, interview prep, sharing relevant job opportunities, and coordinating employer interviews (placement assistance does not guarantee employment).</p>

              <h3 className="font-bold text-slate-900 dark:text-white text-base">• Security, Fraud Prevention & Legal Compliance</h3>
              <p>Protecting systems, enforcing Terms & Conditions, and complying with applicable statutory regulations.</p>
            </div>
          </div>

          {/* Section 8 & 9 */}
          <div className="space-y-3 pt-6 border-t border-slate-100 dark:border-slate-800">
            <h2 className="text-xl sm:text-2xl font-bold font-heading text-slate-900 dark:text-white">
              8 & 9. Legal Basis for Processing & Consent
            </h2>
            <p>
              We process personal information based on your consent, fulfillment of enrollment contracts, legal obligations, or legitimate operational interests. You may withdraw consent subject to legal and contractual obligations.
            </p>
          </div>

          {/* Section 10 & 11 */}
          <div className="space-y-3 pt-6 border-t border-slate-100 dark:border-slate-800">
            <h2 className="text-xl sm:text-2xl font-bold font-heading text-slate-900 dark:text-white">
              10 & 11. Marketing & WhatsApp Communications
            </h2>
            <p>
              We may contact you regarding courses, workshops, and career opportunities via Email, Phone, SMS, or WhatsApp. You may opt-out of promotional messages at any time while continuing to receive essential transaction notices.
            </p>
          </div>

          {/* Section 12 & 13 */}
          <div className="space-y-3 pt-6 border-t border-slate-100 dark:border-slate-800">
            <h2 className="text-xl sm:text-2xl font-bold font-heading text-slate-900 dark:text-white">
              12 & 13. Sharing Information — We Do Not Sell Data
            </h2>
            <p className="font-semibold text-emerald-600 dark:text-emerald-400">
              JVM Institute does not sell personal information to third parties as a commercial product.
            </p>
            <p>
              Information may be shared only with authorized service providers (cloud hosting, CRM, payment gateways), recruitment partners (for placement support), or legal authorities when required by law.
            </p>
          </div>

          {/* Section 14, 15, 16 */}
          <div className="space-y-3 pt-6 border-t border-slate-100 dark:border-slate-800">
            <h2 className="text-xl sm:text-2xl font-bold font-heading text-slate-900 dark:text-white">
              14, 15 & 16. Placement Data, Public Profiles & AI Tools
            </h2>
            <p>
              For placement assistance, resumes and profile details are shared with hiring partners. When using third-party AI or cloud tools (OpenAI, Gemini, AWS, Azure, Claude) provided during training, students should avoid uploading confidential personal data.
            </p>
          </div>

          {/* Section 17 & 18 & 19 */}
          <div className="space-y-3 pt-6 border-t border-slate-100 dark:border-slate-800">
            <h2 className="text-xl sm:text-2xl font-bold font-heading text-slate-900 dark:text-white">
              17, 18 & 19. Data Retention, Security & Student Responsibilities
            </h2>
            <p>
              We retain personal data only for as long as needed for academic records, certificate verification, and legal compliance. We employ technical safeguards, while students remain responsible for maintaining the security of their portal login credentials.
            </p>
          </div>

          {/* Section 20 - 25 */}
          <div className="space-y-3 pt-6 border-t border-slate-100 dark:border-slate-800">
            <h2 className="text-xl sm:text-2xl font-bold font-heading text-slate-900 dark:text-white">
              20 - 25. Third-Party Links, Minors, Security Incidents
            </h2>
            <p>
              We do not knowingly collect children&apos;s data without guardian consent. In the event of a verified data incident, we maintain protocol to investigate, contain, and notify affected individuals as mandated by law.
            </p>
          </div>

          {/* Section 26 - 29 */}
          <div className="space-y-3 pt-6 border-t border-slate-100 dark:border-slate-800">
            <h2 className="text-xl sm:text-2xl font-bold font-heading text-slate-900 dark:text-white">
              26 - 29. Your Privacy Rights & Grievance Mechanism
            </h2>
            <p>
              Subject to applicable Indian law, you have the right to request access, correction, or deletion of your personal data, or submit privacy grievances to:
            </p>
            <div className="bg-slate-50 dark:bg-slate-800/60 p-4 rounded-2xl border border-slate-200 dark:border-slate-700 text-sm font-medium space-y-1">
              <p><strong className="text-slate-900 dark:text-white">Email:</strong> infojvminstitute@gmail.com / support@jvminstitute.com</p>
              <p><strong className="text-slate-900 dark:text-white">Helpline:</strong> +91 84462 84162</p>
            </div>
          </div>

          {/* Section 30 - 33 */}
          <div className="space-y-3 pt-6 border-t border-slate-100 dark:border-slate-800">
            <h2 className="text-xl sm:text-2xl font-bold font-heading text-slate-900 dark:text-white">
              30 - 33. Governing Law & Acknowledgement
            </h2>
            <p>
              This Privacy Policy shall be governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of competent courts in <strong>Pune, Maharashtra, India</strong>.
            </p>
            <p className="p-4 rounded-2xl bg-emerald-50/60 dark:bg-emerald-950/20 border border-emerald-200/60 dark:border-emerald-800/40 text-emerald-900 dark:text-emerald-200 font-semibold text-sm sm:text-base">
              By using JVM Institute Website or Services, you acknowledge that you have read and understood this Privacy Policy.
            </p>
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
