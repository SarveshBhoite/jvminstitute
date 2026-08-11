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
  AlertTriangle,
  Server,
  Cpu,
  UserCheck,
  FileText,
  Scale,
  Bell,
  MessageSquare,
  Share2,
  Shield,
  Bot,
  Clock,
  Key,
  Baby,
  Globe2,
  ExternalLink,
  Share,
  BarChart,
  AlertCircle,
  User,
  HelpCircle,
  CheckCircle2
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
            <Lock className="w-3.5 h-3.5 text-purple-400" /> Data Privacy & Protection Policy
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
            This Privacy Policy explains how JVM Institute collects, uses, stores, processes, discloses, and protects personal information when you:
          </p>
          <ul className="list-disc pl-6 space-y-1.5 text-slate-700 dark:text-slate-300">
            <li>Visit or use our website;</li>
            <li>Submit an enquiry or contact form;</li>
            <li>Register for a course or program;</li>
            <li>Make a payment;</li>
            <li>Attend our classes or training programs;</li>
            <li>Use our student portals or digital learning platforms;</li>
            <li>Participate in internships or placement assistance;</li>
            <li>Communicate with our faculty, staff, counselors, or support team; or</li>
            <li>Otherwise interact with JVM Institute.</li>
          </ul>
          <p className="pt-2">
            By using our Website or Services, you acknowledge that you have read and understood this Privacy Policy.
          </p>
          <p className="font-semibold text-slate-800 dark:text-slate-200 bg-purple-50 dark:bg-purple-950/40 p-4 rounded-2xl border border-purple-100 dark:border-purple-900/60">
            This Privacy Policy should be read together with our <Link href="/terms-and-conditions" className="text-purple-600 dark:text-purple-400 underline">Terms & Conditions</Link> and <Link href="/refund-policy" className="text-purple-600 dark:text-purple-400 underline">Refund Policy</Link>.
          </p>
        </div>

        {/* Detailed Document Sections - 33 Standalone Sections */}
        <div className="bg-white dark:bg-slate-900 p-6 sm:p-10 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-10 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
          
          {/* Section 1 */}
          <div id="section-1" className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold font-heading text-slate-900 dark:text-white flex items-center gap-2">
              <Building2 className="w-5 h-5 text-purple-600 dark:text-purple-400 shrink-0" /> 1. About JVM Institute
            </h2>
            <p>
              <strong>JVM Institute Pvt. Ltd.</strong> is a private IT training institute based in Pune, Maharashtra, India, providing professional training and educational services in areas including Artificial Intelligence, Machine Learning, Generative AI, Cloud Computing, Software Development, Data Science, and related technologies.
            </p>
            <div className="bg-slate-50 dark:bg-slate-800/60 p-5 rounded-2xl border border-slate-200 dark:border-slate-700 text-sm font-medium space-y-2">
              <p><strong className="text-slate-900 dark:text-white">JVM Institute Pvt. Ltd.</strong></p>
              <p>S.No. 82, Suman Ankur, Sahyadri Farms, Lalit Estate, Baner, Pune – 411045, Maharashtra, India</p>
              <p><strong className="text-slate-900 dark:text-white">Phone:</strong> +91 84462 84162</p>
              <p><strong className="text-slate-900 dark:text-white">Email:</strong> <a href="mailto:infojvminstitute@gmail.com" className="text-purple-600 dark:text-purple-400 underline">infojvminstitute@gmail.com</a> / <a href="mailto:support@jvminstitute.com" className="text-purple-600 dark:text-purple-400 underline">support@jvminstitute.com</a></p>
              <p><strong className="text-slate-900 dark:text-white">Website:</strong> <a href="http://www.jvminstitute.com" target="_blank" rel="noopener noreferrer" className="text-purple-600 dark:text-purple-400 underline">www.jvminstitute.com</a></p>
            </div>
          </div>

          {/* Section 2 */}
          <div id="section-2" className="space-y-3 pt-8 border-t border-slate-100 dark:border-slate-800">
            <h2 className="text-xl sm:text-2xl font-bold font-heading text-slate-900 dark:text-white flex items-center gap-2">
              <Database className="w-5 h-5 text-emerald-500 shrink-0" /> 2. Information We Collect
            </h2>
            <p>Depending on how you interact with JVM Institute, we may collect different categories of information.</p>
            <h3 className="font-bold text-slate-900 dark:text-white text-base">2.1 Personal Information You Provide</h3>
            <p>You may provide information such as:</p>
            <ul className="list-disc pl-6 space-y-1.5 text-slate-700 dark:text-slate-300 font-medium">
              <li>Full name;</li>
              <li>Date of birth or age, where required;</li>
              <li>Email address;</li>
              <li>Mobile/telephone number;</li>
              <li>Residential or correspondence address;</li>
              <li>City, state, and country;</li>
              <li>Educational qualifications;</li>
              <li>College or university details;</li>
              <li>Employment information;</li>
              <li>Professional experience;</li>
              <li>Technical skills;</li>
              <li>Course preferences;</li>
              <li>Career interests;</li>
              <li>Resume/CV information;</li>
              <li>LinkedIn or GitHub profile information;</li>
              <li>Information provided during counseling;</li>
              <li>Information submitted through enquiry forms;</li>
              <li>Information provided for internship or placement assistance.</li>
            </ul>
            <p className="text-xs text-slate-500 dark:text-slate-400 italic pt-1">
              We only seek information that is reasonably relevant to the particular purpose for which it is collected.
            </p>
          </div>

          {/* Section 3 */}
          <div id="section-3" className="space-y-3 pt-8 border-t border-slate-100 dark:border-slate-800">
            <h2 className="text-xl sm:text-2xl font-bold font-heading text-slate-900 dark:text-white flex items-center gap-2">
              <CreditCard className="w-5 h-5 text-indigo-500 shrink-0" /> 3. Payment and Transaction Information
            </h2>
            <p>
              When you purchase a course or service, payment may be processed through third-party payment gateways, banks, UPI providers, card networks, or other payment service providers.
            </p>
            <p>Depending on the payment method, we may receive information such as:</p>
            <ul className="list-disc pl-6 space-y-1.5 text-slate-700 dark:text-slate-300">
              <li>Transaction ID;</li>
              <li>Payment status;</li>
              <li>Payment date;</li>
              <li>Amount paid;</li>
              <li>Course or service purchased;</li>
              <li>Payment method;</li>
              <li>Limited transaction-related information.</li>
            </ul>
            <p className="font-semibold text-slate-800 dark:text-slate-200">
              We generally do not require or store complete credit/debit card numbers, CVV numbers, PINs, or banking passwords on our own systems.
            </p>
            <p>
              Payment information may be processed directly by the relevant payment gateway or financial institution according to its own privacy policy and terms.
            </p>
          </div>

          {/* Section 4 */}
          <div id="section-4" className="space-y-3 pt-8 border-t border-slate-100 dark:border-slate-800">
            <h2 className="text-xl sm:text-2xl font-bold font-heading text-slate-900 dark:text-white flex items-center gap-2">
              <Server className="w-5 h-5 text-purple-600 dark:text-purple-400 shrink-0" /> 4. Information Collected Automatically
            </h2>
            <p>When you visit our Website, certain technical information may be collected automatically.</p>
            <p>This may include:</p>
            <ul className="list-disc pl-6 space-y-1.5 text-slate-700 dark:text-slate-300">
              <li>IP address;</li>
              <li>Browser type;</li>
              <li>Device type;</li>
              <li>Operating system;</li>
              <li>Language preferences;</li>
              <li>Approximate location derived from technical information;</li>
              <li>Pages visited;</li>
              <li>Date and time of visits;</li>
              <li>Referring website;</li>
              <li>Website interaction information;</li>
              <li>Device and browser identifiers;</li>
              <li>Error and diagnostic information.</li>
            </ul>
            <p>
              This information may be used to maintain Website security, understand Website usage, improve our Services, and diagnose technical problems.
            </p>
          </div>

          {/* Section 5 */}
          <div id="section-5" className="space-y-3 pt-8 border-t border-slate-100 dark:border-slate-800">
            <h2 className="text-xl sm:text-2xl font-bold font-heading text-slate-900 dark:text-white flex items-center gap-2">
              <Cookie className="w-5 h-5 text-amber-500 shrink-0" /> 5. Cookies and Similar Technologies
            </h2>
            <p>Our Website may use cookies, pixels, tags, analytics tools, and similar technologies.</p>
            <p>Cookies may be used for purposes such as:</p>
            <ul className="list-disc pl-6 space-y-1.5 text-slate-700 dark:text-slate-300">
              <li>Keeping the Website functional;</li>
              <li>Remembering preferences;</li>
              <li>Understanding Website traffic;</li>
              <li>Improving Website performance;</li>
              <li>Measuring marketing campaigns;</li>
              <li>Providing relevant communications;</li>
              <li>Detecting security issues;</li>
              <li>Understanding how visitors interact with our Website.</li>
            </ul>
            <p>
              You may be able to control or disable certain cookies through your browser settings. Disabling cookies may affect the functionality of certain Website features.
            </p>
            <p>
              Where required by applicable law, we will seek appropriate consent before placing non-essential cookies or similar tracking technologies.
            </p>
          </div>

          {/* Section 6 */}
          <div id="section-6" className="space-y-3 pt-8 border-t border-slate-100 dark:border-slate-800">
            <h2 className="text-xl sm:text-2xl font-bold font-heading text-slate-900 dark:text-white flex items-center gap-2">
              <Users className="w-5 h-5 text-blue-500 shrink-0" /> 6. Information Received from Third Parties
            </h2>
            <p>We may receive information about you from third parties where permitted by applicable law.</p>
            <p>These sources may include:</p>
            <ul className="list-disc pl-6 space-y-1.5 text-slate-700 dark:text-slate-300">
              <li>Payment processors;</li>
              <li>Advertising platforms;</li>
              <li>Social media platforms;</li>
              <li>Lead-generation platforms;</li>
              <li>Recruitment or employment platforms;</li>
              <li>Partner organizations;</li>
              <li>Referral partners;</li>
              <li>Educational partners;</li>
              <li>Analytics providers;</li>
              <li>Customer relationship management systems;</li>
              <li>Publicly available professional profiles.</li>
            </ul>
            <p>
              For example, if you submit an enquiry through an advertising or social-media platform, information provided through that platform may be shared with JVM Institute so that we can respond to your enquiry.
            </p>
          </div>

          {/* Section 7 */}
          <div id="section-7" className="space-y-4 pt-8 border-t border-slate-100 dark:border-slate-800">
            <h2 className="text-xl sm:text-2xl font-bold font-heading text-slate-900 dark:text-white flex items-center gap-2">
              <FileCheck className="w-5 h-5 text-emerald-500 shrink-0" /> 7. How We Use Personal Information
            </h2>
            <p>We may use personal information for purposes including:</p>

            <div className="space-y-4 pl-2 sm:pl-4">
              <div className="space-y-1.5">
                <h3 className="font-bold text-slate-900 dark:text-white text-base">Course and Student Administration</h3>
                <ul className="list-disc pl-6 space-y-1 text-slate-700 dark:text-slate-300">
                  <li>Processing admissions;</li>
                  <li>Registering students;</li>
                  <li>Managing batches;</li>
                  <li>Providing classes and training;</li>
                  <li>Tracking attendance;</li>
                  <li>Managing assignments and projects;</li>
                  <li>Conducting assessments;</li>
                  <li>Issuing certificates;</li>
                  <li>Providing academic support.</li>
                </ul>
              </div>

              <div className="space-y-1.5">
                <h3 className="font-bold text-slate-900 dark:text-white text-base">Communication</h3>
                <ul className="list-disc pl-6 space-y-1 text-slate-700 dark:text-slate-300">
                  <li>Responding to enquiries;</li>
                  <li>Contacting prospective students;</li>
                  <li>Sending course information;</li>
                  <li>Providing class schedules;</li>
                  <li>Sending important administrative notices;</li>
                  <li>Providing customer support;</li>
                  <li>Communicating payment-related information.</li>
                </ul>
              </div>

              <div className="space-y-1.5">
                <h3 className="font-bold text-slate-900 dark:text-white text-base">Career and Placement Services</h3>
                <p>Where applicable, we may use relevant information to:</p>
                <ul className="list-disc pl-6 space-y-1 text-slate-700 dark:text-slate-300">
                  <li>Provide career counseling;</li>
                  <li>Assist with resume preparation;</li>
                  <li>Support interview preparation;</li>
                  <li>Provide placement assistance;</li>
                  <li>Share relevant employment opportunities;</li>
                  <li>Coordinate interviews or employer interactions;</li>
                  <li>Help students build professional profiles.</li>
                </ul>
                <p className="text-xs text-slate-500 dark:text-slate-400 italic">Placement assistance does not guarantee employment.</p>
              </div>

              <div className="space-y-1.5">
                <h3 className="font-bold text-slate-900 dark:text-white text-base">Payments and Financial Administration</h3>
                <p>We may process information necessary to:</p>
                <ul className="list-disc pl-6 space-y-1 text-slate-700 dark:text-slate-300">
                  <li>Confirm payments;</li>
                  <li>Issue receipts;</li>
                  <li>Manage installments;</li>
                  <li>Process approved refunds;</li>
                  <li>Maintain accounting records;</li>
                  <li>Detect or investigate payment-related issues.</li>
                </ul>
              </div>

              <div className="space-y-1.5">
                <h3 className="font-bold text-slate-900 dark:text-white text-base">Website and Service Improvement</h3>
                <p>We may use information to:</p>
                <ul className="list-disc pl-6 space-y-1 text-slate-700 dark:text-slate-300">
                  <li>Improve Website functionality;</li>
                  <li>Understand user behavior;</li>
                  <li>Analyze course demand;</li>
                  <li>Improve teaching and support services;</li>
                  <li>Develop new programs;</li>
                  <li>Troubleshoot technical problems;</li>
                  <li>Monitor Website performance.</li>
                </ul>
              </div>

              <div className="space-y-1.5">
                <h3 className="font-bold text-slate-900 dark:text-white text-base">Security and Fraud Prevention</h3>
                <p>We may process information to:</p>
                <ul className="list-disc pl-6 space-y-1 text-slate-700 dark:text-slate-300">
                  <li>Detect unauthorized activity;</li>
                  <li>Prevent fraud;</li>
                  <li>Protect our systems;</li>
                  <li>Investigate security incidents;</li>
                  <li>Enforce our Terms & Conditions;</li>
                  <li>Protect students, employees, and the Institute.</li>
                </ul>
              </div>

              <div className="space-y-1.5">
                <h3 className="font-bold text-slate-900 dark:text-white text-base">Legal and Regulatory Compliance</h3>
                <p>We may process and retain information where necessary to:</p>
                <ul className="list-disc pl-6 space-y-1 text-slate-700 dark:text-slate-300">
                  <li>Comply with applicable law;</li>
                  <li>Respond to lawful requests;</li>
                  <li>Establish or defend legal claims;</li>
                  <li>Maintain required records;</li>
                  <li>Cooperate with competent authorities.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Section 8 */}
          <div id="section-8" className="space-y-3 pt-8 border-t border-slate-100 dark:border-slate-800">
            <h2 className="text-xl sm:text-2xl font-bold font-heading text-slate-900 dark:text-white flex items-center gap-2">
              <Scale className="w-5 h-5 text-purple-600 dark:text-purple-400 shrink-0" /> 8. Legal Basis for Processing
            </h2>
            <p>Depending on the circumstances and applicable law, JVM Institute may process personal information based on:</p>
            <ul className="list-disc pl-6 space-y-1.5 text-slate-700 dark:text-slate-300">
              <li>Your consent;</li>
              <li>Your request to receive a service;</li>
              <li>Performance of an agreement or enrollment arrangement;</li>
              <li>Compliance with a legal obligation;</li>
              <li>Legitimate operational purposes where permitted by applicable law;</li>
              <li>Protection of rights, security, and property;</li>
              <li>Other lawful grounds available under applicable law.</li>
            </ul>
            <p>Where consent is required by law, we will seek consent in an appropriate manner.</p>
          </div>

          {/* Section 9 */}
          <div id="section-9" className="space-y-3 pt-8 border-t border-slate-100 dark:border-slate-800">
            <h2 className="text-xl sm:text-2xl font-bold font-heading text-slate-900 dark:text-white flex items-center gap-2">
              <UserCheck className="w-5 h-5 text-teal-500 shrink-0" /> 9. Consent
            </h2>
            <p>
              Where we rely on consent to process personal information, you may have the right to withdraw that consent, subject to applicable law and legitimate reasons for continued processing.
            </p>
            <p>
              Withdrawal of consent may affect our ability to provide certain services where the relevant information is necessary to provide those services.
            </p>
            <p>
              For example, if certain information is required to administer your course, withdrawing permission to process that information may prevent us from providing some course-related services.
            </p>
          </div>

          {/* Section 10 */}
          <div id="section-10" className="space-y-3 pt-8 border-t border-slate-100 dark:border-slate-800">
            <h2 className="text-xl sm:text-2xl font-bold font-heading text-slate-900 dark:text-white flex items-center gap-2">
              <Bell className="w-5 h-5 text-pink-500 shrink-0" /> 10. Marketing Communications
            </h2>
            <p>If permitted by applicable law and where appropriate consent has been obtained, JVM Institute may contact you about:</p>
            <ul className="list-disc pl-6 space-y-1.5 text-slate-700 dark:text-slate-300">
              <li>Courses;</li>
              <li>Workshops;</li>
              <li>New programs;</li>
              <li>Events;</li>
              <li>Career opportunities;</li>
              <li>Offers;</li>
              <li>Educational resources;</li>
              <li>Institute announcements.</li>
            </ul>
            <p>Marketing communications may be sent through channels such as:</p>
            <ul className="list-disc pl-6 space-y-1.5 text-slate-700 dark:text-slate-300">
              <li>Email;</li>
              <li>Telephone;</li>
              <li>SMS;</li>
              <li>WhatsApp;</li>
              <li>Other communication platforms.</li>
            </ul>
            <p>
              You may request to stop receiving promotional communications by using an available unsubscribe mechanism or contacting us directly.
            </p>
            <p>
              Even after opting out of marketing communications, you may continue to receive essential transactional or administrative communications relating to an existing enrollment or service.
            </p>
          </div>

          {/* Section 11 */}
          <div id="section-11" className="space-y-3 pt-8 border-t border-slate-100 dark:border-slate-800">
            <h2 className="text-xl sm:text-2xl font-bold font-heading text-slate-900 dark:text-white flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-emerald-500 shrink-0" /> 11. WhatsApp and Messaging Communications
            </h2>
            <p>
              Where you contact JVM Institute through WhatsApp or another messaging platform, or where such communication is permitted by applicable law, your communication may be processed through the relevant platform.
            </p>
            <p>
              Such platforms are operated by independent third parties and are subject to their own terms and privacy policies.
            </p>
            <p>
              JVM Institute does not control the privacy practices or security systems of third-party messaging providers.
            </p>
          </div>

          {/* Section 12 */}
          <div id="section-12" className="space-y-4 pt-8 border-t border-slate-100 dark:border-slate-800">
            <h2 className="text-xl sm:text-2xl font-bold font-heading text-slate-900 dark:text-white flex items-center gap-2">
              <Share2 className="w-5 h-5 text-indigo-500 shrink-0" /> 12. Sharing of Personal Information
            </h2>
            <p>
              We may share personal information where reasonably necessary for the purposes described in this Privacy Policy. Recipients may include:
            </p>

            <div className="space-y-3 pl-2 sm:pl-4">
              <div className="space-y-1">
                <h3 className="font-bold text-slate-900 dark:text-white text-base">Service Providers</h3>
                <ul className="list-disc pl-6 space-y-1 text-slate-700 dark:text-slate-300">
                  <li>Hosting providers;</li>
                  <li>Cloud service providers;</li>
                  <li>Learning management systems;</li>
                  <li>Email service providers;</li>
                  <li>CRM providers;</li>
                  <li>Payment processors;</li>
                  <li>IT service providers;</li>
                  <li>Analytics providers;</li>
                  <li>Communication service providers.</li>
                </ul>
              </div>

              <div className="space-y-1">
                <h3 className="font-bold text-slate-900 dark:text-white text-base">Professional and Educational Partners</h3>
                <p>
                  Where relevant to a course, internship, project, or placement service, information may be shared with authorized educational, training, internship, or employer partners.
                </p>
                <p>
                  Where appropriate, we will seek consent or provide relevant notice before sharing personal information for such purposes.
                </p>
              </div>

              <div className="space-y-1">
                <h3 className="font-bold text-slate-900 dark:text-white text-base">Legal and Regulatory Authorities</h3>
                <p>
                  We may disclose information where required or permitted by applicable law, legal process, court order, governmental authority, or regulatory requirement.
                </p>
              </div>

              <div className="space-y-1">
                <h3 className="font-bold text-slate-900 dark:text-white text-base">Business Transactions</h3>
                <p>
                  If JVM Institute undergoes a merger, acquisition, restructuring, sale of assets, or similar corporate transaction, personal information may be transferred as part of that transaction, subject to applicable law.
                </p>
              </div>
            </div>
          </div>

          {/* Section 13 */}
          <div id="section-13" className="space-y-3 pt-8 border-t border-slate-100 dark:border-slate-800">
            <h2 className="text-xl sm:text-2xl font-bold font-heading text-slate-900 dark:text-white flex items-center gap-2">
              <Shield className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" /> 13. We Do Not Sell Personal Information
            </h2>
            <p className="font-bold text-slate-900 dark:text-white text-base bg-emerald-50 dark:bg-emerald-950/40 p-4 rounded-2xl border border-emerald-200 dark:border-emerald-900/60">
              JVM Institute does not sell personal information to third parties as a commercial product.
            </p>
            <p>
              We may, however, share information with service providers, partners, employers, or other authorized recipients where necessary for providing Services, operating our business, fulfilling your requests, or complying with applicable law.
            </p>
          </div>

          {/* Section 14 */}
          <div id="section-14" className="space-y-3 pt-8 border-t border-slate-100 dark:border-slate-800">
            <h2 className="text-xl sm:text-2xl font-bold font-heading text-slate-900 dark:text-white flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0" /> 14. Placement and Employer Information
            </h2>
            <p>
              If you participate in placement assistance, internship, or career services, we may share relevant professional information with potential employers or authorized recruitment partners where appropriate.
            </p>
            <p>Such information may include:</p>
            <ul className="list-disc pl-6 space-y-1.5 text-slate-700 dark:text-slate-300">
              <li>Name;</li>
              <li>Contact details;</li>
              <li>Resume;</li>
              <li>Educational qualifications;</li>
              <li>Technical skills;</li>
              <li>Work experience;</li>
              <li>Portfolio information;</li>
              <li>GitHub or LinkedIn profile;</li>
              <li>Interview-related information;</li>
              <li>Other professional information relevant to the opportunity.</li>
            </ul>
            <p>We will seek appropriate consent or rely on another lawful basis where required.</p>
            <p>Students should ensure that information contained in their resume and professional profiles is accurate.</p>
          </div>

          {/* Section 15 */}
          <div id="section-15" className="space-y-3 pt-8 border-t border-slate-100 dark:border-slate-800">
            <h2 className="text-xl sm:text-2xl font-bold font-heading text-slate-900 dark:text-white flex items-center gap-2">
              <Globe className="w-5 h-5 text-cyan-500 shrink-0" /> 15. Student Projects and Public Profiles
            </h2>
            <p>
              Students may choose to publish their own projects, GitHub repositories, portfolios, LinkedIn profiles, or other professional information publicly.
            </p>
            <p>
              Once information is intentionally made publicly available by the student, it may be accessible to others and may be copied or processed by third parties.
            </p>
            <p>
              Students should avoid publishing confidential information, personal data belonging to others, proprietary Institute information, or other information they are not authorized to disclose.
            </p>
          </div>

          {/* Section 16 */}
          <div id="section-16" className="space-y-3 pt-8 border-t border-slate-100 dark:border-slate-800">
            <h2 className="text-xl sm:text-2xl font-bold font-heading text-slate-900 dark:text-white flex items-center gap-2">
              <Bot className="w-5 h-5 text-purple-600 dark:text-purple-400 shrink-0" /> 16. Artificial Intelligence and Technology Tools
            </h2>
            <p>
              JVM Institute may use or provide access to third-party technology and AI tools as part of its educational Services.
            </p>
            <p>These may include platforms such as:</p>
            <ul className="list-disc pl-6 space-y-1.5 text-slate-700 dark:text-slate-300">
              <li>OpenAI products;</li>
              <li>Google Gemini;</li>
              <li>Anthropic products;</li>
              <li>Microsoft services;</li>
              <li>AWS services;</li>
              <li>Google Cloud;</li>
              <li>Microsoft Azure;</li>
              <li>GitHub;</li>
              <li>Other AI, cloud, software, or development platforms.</li>
            </ul>
            <p>
              Third-party platforms may independently collect and process information according to their own privacy policies.
            </p>
            <p>
              Students should not submit confidential, sensitive, or third-party personal information to AI or other third-party platforms unless they are authorized to do so and the applicable platform permits such use.
            </p>
          </div>

          {/* Section 17 */}
          <div id="section-17" className="space-y-3 pt-8 border-t border-slate-100 dark:border-slate-800">
            <h2 className="text-xl sm:text-2xl font-bold font-heading text-slate-900 dark:text-white flex items-center gap-2">
              <Clock className="w-5 h-5 text-amber-500 shrink-0" /> 17. Data Retention
            </h2>
            <p>
              We retain personal information only for as long as reasonably necessary for the purposes for which it was collected, including:
            </p>
            <ul className="list-disc pl-6 space-y-1.5 text-slate-700 dark:text-slate-300">
              <li>Providing Services;</li>
              <li>Maintaining student records;</li>
              <li>Accounting and financial requirements;</li>
              <li>Certificate verification;</li>
              <li>Resolving disputes;</li>
              <li>Maintaining business records;</li>
              <li>Meeting legal and regulatory obligations;</li>
              <li>Protecting legal rights;</li>
              <li>Preventing fraud and misuse.</li>
            </ul>
            <p>Retention periods may vary depending on the type of information and the purpose for which it is used.</p>
            <p>
              When information is no longer required, we may delete, anonymize, or otherwise dispose of it in accordance with applicable law and our operational requirements.
            </p>
          </div>

          {/* Section 18 */}
          <div id="section-18" className="space-y-3 pt-8 border-t border-slate-100 dark:border-slate-800">
            <h2 className="text-xl sm:text-2xl font-bold font-heading text-slate-900 dark:text-white flex items-center gap-2">
              <Lock className="w-5 h-5 text-emerald-500 shrink-0" /> 18. Data Security
            </h2>
            <p>
              JVM Institute takes reasonable measures designed to protect personal information against unauthorized access, loss, misuse, alteration, disclosure, or destruction.
            </p>
            <p>Security measures may include, where appropriate:</p>
            <ul className="list-disc pl-6 space-y-1.5 text-slate-700 dark:text-slate-300">
              <li>Access controls;</li>
              <li>Password protection;</li>
              <li>Authentication controls;</li>
              <li>Secure hosting arrangements;</li>
              <li>Data backups;</li>
              <li>Staff access restrictions;</li>
              <li>Security monitoring;</li>
              <li>Reasonable technical and organizational safeguards.</li>
            </ul>
            <p>However, no method of electronic transmission, storage, or processing can be guaranteed to be completely secure.</p>
            <p>Accordingly, while we take reasonable precautions, we cannot guarantee absolute security.</p>
          </div>

          {/* Section 19 */}
          <div id="section-19" className="space-y-3 pt-8 border-t border-slate-100 dark:border-slate-800">
            <h2 className="text-xl sm:text-2xl font-bold font-heading text-slate-900 dark:text-white flex items-center gap-2">
              <Key className="w-5 h-5 text-violet-500 shrink-0" /> 19. Student Responsibilities for Data Security
            </h2>
            <p>Students are responsible for maintaining the confidentiality of:</p>
            <ul className="list-disc pl-6 space-y-1.5 text-slate-700 dark:text-slate-300">
              <li>Account passwords;</li>
              <li>Student portal credentials;</li>
              <li>Course login credentials;</li>
              <li>Personal devices;</li>
              <li>Authentication codes.</li>
            </ul>
            <p>
              Students should immediately notify JVM Institute if they believe their account has been compromised or used without authorization.
            </p>
          </div>

          {/* Section 20 */}
          <div id="section-20" className="space-y-3 pt-8 border-t border-slate-100 dark:border-slate-800">
            <h2 className="text-xl sm:text-2xl font-bold font-heading text-slate-900 dark:text-white flex items-center gap-2">
              <Baby className="w-5 h-5 text-orange-500 shrink-0" /> 20. Children&apos;s and Minors&apos; Privacy
            </h2>
            <p>Our Services may have specific eligibility requirements depending on the program.</p>
            <p>
              Where a student is a minor or where applicable law requires parental or guardian involvement, JVM Institute may request appropriate information or consent from a parent or legal guardian.
            </p>
            <p>We do not knowingly seek to collect personal information from children in violation of applicable law.</p>
            <p>
              If you believe that a child has provided personal information to us in circumstances where such collection was not appropriate, please contact us so that we can review the matter and take appropriate action.
            </p>
          </div>

          {/* Section 21 */}
          <div id="section-21" className="space-y-3 pt-8 border-t border-slate-100 dark:border-slate-800">
            <h2 className="text-xl sm:text-2xl font-bold font-heading text-slate-900 dark:text-white flex items-center gap-2">
              <Globe2 className="w-5 h-5 text-blue-500 shrink-0" /> 21. International Data Transfers
            </h2>
            <p>Some service providers used by JVM Institute may process information on servers or systems located outside India.</p>
            <p>
              Where personal information is transferred, stored, or processed outside India, we will take reasonable steps to comply with applicable legal requirements relating to such transfers.
            </p>
            <p>
              Third-party service providers may also be subject to the laws and privacy requirements of the jurisdictions in which they operate.
            </p>
          </div>

          {/* Section 22 */}
          <div id="section-22" className="space-y-3 pt-8 border-t border-slate-100 dark:border-slate-800">
            <h2 className="text-xl sm:text-2xl font-bold font-heading text-slate-900 dark:text-white flex items-center gap-2">
              <ExternalLink className="w-5 h-5 text-slate-500 shrink-0" /> 22. Third-Party Websites
            </h2>
            <p>
              Our Website may contain links to third-party websites, applications, social media platforms, payment services, cloud services, or other external resources.
            </p>
            <p>We are not responsible for the privacy practices, security, content, or policies of third-party websites.</p>
            <p>You should review the privacy policy of any third-party service before providing personal information to it.</p>
          </div>

          {/* Section 23 */}
          <div id="section-23" className="space-y-3 pt-8 border-t border-slate-100 dark:border-slate-800">
            <h2 className="text-xl sm:text-2xl font-bold font-heading text-slate-900 dark:text-white flex items-center gap-2">
              <Share className="w-5 h-5 text-pink-500 shrink-0" /> 23. Social Media
            </h2>
            <p>
              JVM Institute may maintain profiles or pages on platforms such as LinkedIn, Instagram, Facebook, YouTube, and other social networks.
            </p>
            <p>
              Interactions with our social media pages may be visible to other users depending on the settings of the relevant platform.
            </p>
            <p>Social media platforms independently process personal information according to their own policies.</p>
            <p>JVM Institute does not control the privacy practices of these platforms.</p>
          </div>

          {/* Section 24 */}
          <div id="section-24" className="space-y-3 pt-8 border-t border-slate-100 dark:border-slate-800">
            <h2 className="text-xl sm:text-2xl font-bold font-heading text-slate-900 dark:text-white flex items-center gap-2">
              <BarChart className="w-5 h-5 text-indigo-500 shrink-0" /> 24. Cookies and Analytics
            </h2>
            <p>
              We may use third-party analytics and advertising services to understand Website traffic and measure the effectiveness of our communications and marketing.
            </p>
            <p>Depending on the tools implemented on the Website, these services may collect information such as:</p>
            <ul className="list-disc pl-6 space-y-1.5 text-slate-700 dark:text-slate-300">
              <li>Browser information;</li>
              <li>Device information;</li>
              <li>IP address;</li>
              <li>Website interactions;</li>
              <li>Referral information;</li>
              <li>Approximate geographic information;</li>
              <li>Advertising identifiers.</li>
            </ul>
            <p>Where required, appropriate consent mechanisms may be implemented.</p>
            <p>You may also be able to manage certain tracking technologies through your browser or device settings.</p>
          </div>

          {/* Section 25 */}
          <div id="section-25" className="space-y-3 pt-8 border-t border-slate-100 dark:border-slate-800">
            <h2 className="text-xl sm:text-2xl font-bold font-heading text-slate-900 dark:text-white flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-red-500 shrink-0" /> 25. Data Breach and Security Incidents
            </h2>
            <p>
              If JVM Institute becomes aware of a personal data breach or security incident affecting personal information, we will take reasonable steps to:
            </p>
            <ol className="list-decimal pl-6 space-y-1.5 text-slate-700 dark:text-slate-300 font-medium">
              <li>Investigate the incident;</li>
              <li>Contain and mitigate the impact;</li>
              <li>Restore affected systems where appropriate;</li>
              <li>Maintain relevant records;</li>
              <li>Notify affected individuals or authorities where required by applicable law.</li>
            </ol>
            <p>The specific response will depend on the nature, severity, and legal requirements applicable to the incident.</p>
          </div>

          {/* Section 26 */}
          <div id="section-26" className="space-y-3 pt-8 border-t border-slate-100 dark:border-slate-800">
            <h2 className="text-xl sm:text-2xl font-bold font-heading text-slate-900 dark:text-white flex items-center gap-2">
              <User className="w-5 h-5 text-purple-600 dark:text-purple-400 shrink-0" /> 26. Your Privacy Rights
            </h2>
            <p>Subject to applicable law, you may have rights relating to your personal information, which may include:</p>
            <ul className="list-disc pl-6 space-y-1.5 text-slate-700 dark:text-slate-300">
              <li>The right to obtain information about processing;</li>
              <li>The right to access certain personal information;</li>
              <li>The right to request correction of inaccurate information;</li>
              <li>The right to request deletion where legally applicable;</li>
              <li>The right to withdraw consent where processing is based on consent;</li>
              <li>The right to raise a grievance;</li>
              <li>The right to nominate or exercise other rights where provided by applicable law.</li>
            </ul>
            <p>The availability and scope of these rights may depend on applicable law and the nature of the processing.</p>
          </div>

          {/* Section 27 */}
          <div id="section-27" className="space-y-3 pt-8 border-t border-slate-100 dark:border-slate-800">
            <h2 className="text-xl sm:text-2xl font-bold font-heading text-slate-900 dark:text-white flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-teal-500 shrink-0" /> 27. How to Exercise Your Rights
            </h2>
            <p>
              If you wish to exercise an applicable privacy right or raise a privacy-related request, contact us using the details below.
            </p>
            <p>Please include sufficient information to help us identify:</p>
            <ul className="list-disc pl-6 space-y-1.5 text-slate-700 dark:text-slate-300">
              <li>Your name;</li>
              <li>Contact information;</li>
              <li>Your relationship with JVM Institute;</li>
              <li>The nature of your request;</li>
              <li>Any relevant supporting information.</li>
            </ul>
            <p>
              We may need to verify your identity before processing certain requests in order to protect your information from unauthorized access.
            </p>
            <p>We will respond within the timeframe required by applicable law.</p>
          </div>

          {/* Section 28 */}
          <div id="section-28" className="space-y-3 pt-8 border-t border-slate-100 dark:border-slate-800">
            <h2 className="text-xl sm:text-2xl font-bold font-heading text-slate-900 dark:text-white flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-amber-500 shrink-0" /> 28. Privacy Grievances
            </h2>
            <p>If you have a concern regarding the processing of your personal information, you may contact JVM Institute using:</p>
            <div className="bg-slate-50 dark:bg-slate-800/60 p-5 rounded-2xl border border-slate-200 dark:border-slate-700 text-sm font-medium space-y-2">
              <p><strong className="text-slate-900 dark:text-white">Email:</strong> <a href="mailto:infojvminstitute@gmail.com" className="text-purple-600 dark:text-purple-400 underline">infojvminstitute@gmail.com</a></p>
              <p><strong className="text-slate-900 dark:text-white">Support Email:</strong> <a href="mailto:support@jvminstitute.com" className="text-purple-600 dark:text-purple-400 underline">support@jvminstitute.com</a></p>
              <p><strong className="text-slate-900 dark:text-white">Phone:</strong> +91 84462 84162</p>
              <p><strong className="text-slate-900 dark:text-white">Postal Address:</strong></p>
              <p className="pl-4">
                JVM Institute Pvt. Ltd.<br />
                S.No. 82, Suman Ankur,<br />
                Sahyadri Farms, Lalit Estate,<br />
                Baner, Pune – 411045,<br />
                Maharashtra, India
              </p>
            </div>
            <p>
              We will make reasonable efforts to review and address privacy-related complaints in accordance with applicable law and our internal procedures.
            </p>
          </div>

          {/* Section 29 */}
          <div id="section-29" className="space-y-3 pt-8 border-t border-slate-100 dark:border-slate-800">
            <h2 className="text-xl sm:text-2xl font-bold font-heading text-slate-900 dark:text-white flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" /> 29. Accuracy of Personal Information
            </h2>
            <p>You are responsible for ensuring that the information you provide to JVM Institute is accurate, complete, and up to date.</p>
            <p>
              If your contact details, educational information, or other relevant information changes, you should notify us where necessary.
            </p>
            <p>Providing false, misleading, or fraudulent information may affect your enrollment or access to Services.</p>
          </div>

          {/* Section 30 */}
          <div id="section-30" className="space-y-3 pt-8 border-t border-slate-100 dark:border-slate-800">
            <h2 className="text-xl sm:text-2xl font-bold font-heading text-slate-900 dark:text-white flex items-center gap-2">
              <FileText className="w-5 h-5 text-blue-500 shrink-0" /> 30. Changes to This Privacy Policy
            </h2>
            <p>JVM Institute may update this Privacy Policy from time to time to reflect:</p>
            <ul className="list-disc pl-6 space-y-1.5 text-slate-700 dark:text-slate-300">
              <li>Changes in applicable law;</li>
              <li>Changes in our Services;</li>
              <li>Changes in technology;</li>
              <li>Changes in data-processing practices;</li>
              <li>Security requirements;</li>
              <li>Operational requirements.</li>
            </ul>
            <p>When we update this Policy, we will publish the revised version on our Website and update the &quot;Last Updated&quot; date.</p>
            <p>We encourage users to periodically review this Privacy Policy.</p>
          </div>

          {/* Section 31 */}
          <div id="section-31" className="space-y-3 pt-8 border-t border-slate-100 dark:border-slate-800">
            <h2 className="text-xl sm:text-2xl font-bold font-heading text-slate-900 dark:text-white flex items-center gap-2">
              <Scale className="w-5 h-5 text-purple-600 dark:text-purple-400 shrink-0" /> 31. Governing Law
            </h2>
            <p>This Privacy Policy shall be governed by the applicable laws of India.</p>
            <p>
              Subject to applicable law, disputes relating to this Privacy Policy shall be subject to the jurisdiction of competent courts and authorities in <strong>Pune, Maharashtra, India</strong>.
            </p>
            <p>
              Nothing in this provision is intended to restrict any non-waivable rights or remedies available to an individual under applicable law.
            </p>
          </div>

          {/* Section 32 */}
          <div id="section-32" className="space-y-3 pt-8 border-t border-slate-100 dark:border-slate-800">
            <h2 className="text-xl sm:text-2xl font-bold font-heading text-slate-900 dark:text-white flex items-center gap-2">
              <Mail className="w-5 h-5 text-indigo-500 shrink-0" /> 32. Contact Us
            </h2>
            <p>For questions, requests, or concerns regarding this Privacy Policy or the handling of personal information, please contact:</p>
            <div className="bg-slate-50 dark:bg-slate-800/60 p-5 rounded-2xl border border-slate-200 dark:border-slate-700 text-sm font-medium space-y-2">
              <p><strong className="text-slate-900 dark:text-white">JVM Institute Pvt. Ltd.</strong></p>
              <p><strong className="text-slate-900 dark:text-white">Address:</strong> S.No. 82, Suman Ankur, Sahyadri Farms, Lalit Estate, Baner, Pune – 411045, Maharashtra, India</p>
              <p><strong className="text-slate-900 dark:text-white">Phone:</strong> +91 84462 84162</p>
              <p><strong className="text-slate-900 dark:text-white">Email:</strong> <a href="mailto:infojvminstitute@gmail.com" className="text-purple-600 dark:text-purple-400 underline">infojvminstitute@gmail.com</a></p>
              <p><strong className="text-slate-900 dark:text-white">Support:</strong> <a href="mailto:support@jvminstitute.com" className="text-purple-600 dark:text-purple-400 underline">support@jvminstitute.com</a></p>
              <p><strong className="text-slate-900 dark:text-white">Website:</strong> <a href="http://www.jvminstitute.com" target="_blank" rel="noopener noreferrer" className="text-purple-600 dark:text-purple-400 underline">www.jvminstitute.com</a></p>
            </div>
          </div>

          {/* Section 33 */}
          <div id="section-33" className="space-y-3 pt-8 border-t border-slate-100 dark:border-slate-800">
            <h2 className="text-xl sm:text-2xl font-bold font-heading text-slate-900 dark:text-white flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-500 shrink-0" /> 33. Acknowledgement
            </h2>
            <p>By using the JVM Institute Website or Services, you acknowledge that you have read and understood this Privacy Policy.</p>
            <p>
              Where applicable law requires specific consent for the collection or processing of personal information, JVM Institute will obtain such consent through an appropriate mechanism.
            </p>
            <div className="mt-4 p-5 rounded-2xl bg-emerald-50/70 dark:bg-emerald-950/30 border border-emerald-200/80 dark:border-emerald-800/50 text-emerald-900 dark:text-emerald-200 text-center font-bold text-sm sm:text-base space-y-1">
              <p>JVM Institute Pvt. Ltd.</p>
              <p className="text-xs sm:text-sm font-semibold opacity-90">Privacy Policy — Last Updated: 10 August 2026</p>
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
