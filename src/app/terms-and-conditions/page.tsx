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
  CheckCircle2,
  Users,
  Shield,
  Layers,
  FileCheck,
  Bot,
  Laptop,
  Video,
  UserCheck2,
  Globe2,
  ExternalLink,
  MessageSquare,
  AlertCircle,
  Clock,
  TrendingUp,
  UserCog,
  FileCode,
  MessagesSquare,
  Zap,
  Check
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
          <p>
            By accessing our website, submitting an enquiry, registering for a course, making a payment, attending a class, participating in a program, or otherwise using any service provided by JVM Institute, you acknowledge that you have read, understood, and agreed to these Terms & Conditions.
          </p>
          <p className="font-semibold text-slate-800 dark:text-slate-200 bg-purple-50 dark:bg-purple-950/40 p-4 rounded-2xl border border-purple-100 dark:border-purple-900/60">
            If you do not agree with these Terms, you should not use the website or enroll in any program or service offered by JVM Institute.
          </p>
        </div>

        {/* Detailed Document Container - All 44 Standalone Sections */}
        <div className="bg-white dark:bg-slate-900 p-6 sm:p-10 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-10 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
          
          {/* Section 1 */}
          <div id="section-1" className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold font-heading text-slate-900 dark:text-white flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-purple-600 dark:text-purple-400 shrink-0" /> 1. Definitions
            </h2>
            <p>For the purposes of these Terms:</p>
            <ul className="list-disc pl-6 space-y-2 text-slate-700 dark:text-slate-300 font-medium">
              <li><strong>&quot;Student&quot;, &quot;Learner&quot;, &quot;you&quot;, or &quot;your&quot;</strong> means any person who accesses our website, makes an enquiry, enrolls in a course, participates in a program, or uses any service provided by JVM Institute.</li>
              <li><strong>&quot;Course&quot; or &quot;Program&quot;</strong> means any training course, certification program, workshop, bootcamp, internship, seminar, webinar, or other educational program offered by the Institute.</li>
              <li><strong>&quot;Services&quot;</strong> means all educational, training, career guidance, placement assistance, counseling, internship, workshop, digital learning, and other services offered by JVM Institute.</li>
              <li><strong>&quot;Website&quot;</strong> means the official website of JVM Institute and any related webpages, portals, student dashboards, or digital platforms operated by or on behalf of the Institute.</li>
              <li><strong>&quot;Learning Materials&quot;</strong> means course notes, presentations, videos, recordings, assignments, source code, exercises, documents, study materials, project files, assessments, and other educational content supplied by the Institute.</li>
            </ul>
          </div>

          {/* Section 2 */}
          <div id="section-2" className="space-y-3 pt-8 border-t border-slate-100 dark:border-slate-800">
            <h2 className="text-xl sm:text-2xl font-bold font-heading text-slate-900 dark:text-white flex items-center gap-2">
              <UserCheck className="w-5 h-5 text-emerald-500 shrink-0" /> 2. Acceptance of Terms
            </h2>
            <p>By using the Website or enrolling in any JVM Institute program, you agree to:</p>
            <ul className="list-disc pl-6 space-y-1.5 text-slate-700 dark:text-slate-300">
              <li>Comply with these Terms & Conditions.</li>
              <li>Provide accurate and complete information.</li>
              <li>Follow the Institute&apos;s academic and disciplinary rules.</li>
              <li>Make payments according to the applicable fee structure.</li>
              <li>Respect faculty members, staff, mentors, other students, and Institute property.</li>
              <li>Use Learning Materials only for permitted educational purposes.</li>
              <li>Comply with all applicable laws and regulations.</li>
            </ul>
            <p>These Terms should be read together with the Institute&apos;s:</p>
            <ul className="list-disc pl-6 space-y-1 text-slate-700 dark:text-slate-300">
              <li><Link href="/refund-policy" className="text-purple-600 dark:text-purple-400 underline">Refund Policy</Link></li>
              <li><Link href="/privacy-policy" className="text-purple-600 dark:text-purple-400 underline">Privacy Policy</Link></li>
              <li>Course-specific policies</li>
              <li>Student/academic guidelines</li>
              <li>Payment and enrollment terms</li>
              <li>Any other policies specifically applicable to a particular program</li>
            </ul>
            <p>
              In case of a conflict between these Terms and a specific written agreement applicable to a particular program, the specific agreement shall prevail to the extent of the inconsistency.
            </p>
          </div>

          {/* Section 3 */}
          <div id="section-3" className="space-y-3 pt-8 border-t border-slate-100 dark:border-slate-800">
            <h2 className="text-xl sm:text-2xl font-bold font-heading text-slate-900 dark:text-white flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-blue-500 shrink-0" /> 3. Eligibility
            </h2>
            <p>JVM Institute generally accepts students who satisfy the eligibility requirements specified for the relevant course or program.</p>
            <p>Certain programs may have specific requirements relating to:</p>
            <ul className="list-disc pl-6 space-y-1.5 text-slate-700 dark:text-slate-300">
              <li>Age</li>
              <li>Educational qualifications</li>
              <li>Programming knowledge</li>
              <li>Work experience</li>
              <li>Technical prerequisites</li>
              <li>Device or software requirements</li>
              <li>English-language proficiency</li>
              <li>Other academic or technical requirements</li>
            </ul>
            <p>The Institute reserves the right to specify or modify eligibility criteria for individual programs.</p>
            <p>Students are responsible for ensuring that they meet the applicable requirements before enrolling.</p>
          </div>

          {/* Section 4 */}
          <div id="section-4" className="space-y-3 pt-8 border-t border-slate-100 dark:border-slate-800">
            <h2 className="text-xl sm:text-2xl font-bold font-heading text-slate-900 dark:text-white flex items-center gap-2">
              <Layers className="w-5 h-5 text-indigo-500 shrink-0" /> 4. Course Information and Curriculum
            </h2>
            <p>
              JVM Institute makes reasonable efforts to ensure that course descriptions, curriculum information, schedules, faculty information, duration, and other details published on the Website are accurate.
            </p>
            <p>However, the Institute may reasonably modify:</p>
            <ul className="list-disc pl-6 space-y-1.5 text-slate-700 dark:text-slate-300">
              <li>Course content</li>
              <li>Curriculum</li>
              <li>Modules</li>
              <li>Tools and technologies</li>
              <li>Faculty or trainers</li>
              <li>Class schedules</li>
              <li>Delivery methods</li>
              <li>Projects</li>
              <li>Learning resources</li>
              <li>Platforms or software used for training</li>
            </ul>
            <p>
              Such changes may be made to reflect changes in technology, industry requirements, software versions, instructor availability, or operational requirements.
            </p>
            <p>
              The Institute will make reasonable efforts to ensure that such changes do not materially defeat the overall purpose of the enrolled program.
            </p>
          </div>

          {/* Section 5 */}
          <div id="section-5" className="space-y-3 pt-8 border-t border-slate-100 dark:border-slate-800">
            <h2 className="text-xl sm:text-2xl font-bold font-heading text-slate-900 dark:text-white flex items-center gap-2">
              <FileCheck className="w-5 h-5 text-emerald-500 shrink-0" /> 5. Enrollment and Admission
            </h2>
            <p>
              Enrollment is considered confirmed only after completion of the Institute&apos;s admission requirements and receipt of the applicable payment, unless otherwise communicated in writing by JVM Institute.
            </p>
            <p>The Institute may require students to provide:</p>
            <ul className="list-disc pl-6 space-y-1.5 text-slate-700 dark:text-slate-300">
              <li>Full name</li>
              <li>Contact details</li>
              <li>Identification or academic information where applicable</li>
              <li>Payment details or transaction information</li>
              <li>Other information reasonably required for enrollment</li>
            </ul>
            <p>Students must ensure that all information submitted to the Institute is accurate and up to date.</p>
            <p>
              The Institute reserves the right to reject or cancel an application where information provided is materially false, misleading, fraudulent, or incomplete.
            </p>
          </div>

          {/* Section 6 */}
          <div id="section-6" className="space-y-3 pt-8 border-t border-slate-100 dark:border-slate-800">
            <h2 className="text-xl sm:text-2xl font-bold font-heading text-slate-900 dark:text-white flex items-center gap-2">
              <CreditCard className="w-5 h-5 text-indigo-500 shrink-0" /> 6. Fees and Payments
            </h2>
            <p>Course and service fees shall be communicated to the student before enrollment.</p>
            <p>Unless expressly stated otherwise:</p>
            <ul className="list-disc pl-6 space-y-1.5 text-slate-700 dark:text-slate-300">
              <li>Fees must be paid according to the applicable payment schedule.</li>
              <li>Applicable taxes or statutory charges may be additional where required by law.</li>
              <li>Students are responsible for making payments within the specified due dates.</li>
              <li>Payment gateway, banking, or transaction charges may apply where applicable.</li>
              <li>Admission or enrollment is subject to successful receipt and verification of payment.</li>
            </ul>
            <p>Where installment payment facilities are offered, the student remains responsible for all installments agreed upon at the time of enrollment.</p>
            <p>
              Failure to make payments when due may result in suspension of access to classes, Learning Materials, student portals, certificates, examinations, projects, or other Institute services, subject to applicable law and the terms communicated for the relevant program.
            </p>
          </div>

          {/* Section 7 */}
          <div id="section-7" className="space-y-3 pt-8 border-t border-slate-100 dark:border-slate-800">
            <h2 className="text-xl sm:text-2xl font-bold font-heading text-slate-900 dark:text-white flex items-center gap-2">
              <RotateCcw className="w-5 h-5 text-purple-600 dark:text-purple-400 shrink-0" /> 7. Refunds and Cancellation
            </h2>
            <p>
              All refunds and cancellation requests shall be governed by the JVM Institute <Link href="/refund-policy" className="text-purple-600 dark:text-purple-400 underline font-semibold">Refund Policy</Link> in effect and applicable to the student&apos;s enrollment.
            </p>
            <p>The Refund Policy forms an integral part of these Terms & Conditions.</p>
            <p>Students should carefully review the Refund Policy before making any payment.</p>
            <p>Nothing in these Terms is intended to exclude or restrict any right or remedy that cannot lawfully be excluded or restricted under applicable law.</p>
          </div>

          {/* Section 8 */}
          <div id="section-8" className="space-y-3 pt-8 border-t border-slate-100 dark:border-slate-800">
            <h2 className="text-xl sm:text-2xl font-bold font-heading text-slate-900 dark:text-white flex items-center gap-2">
              <CalendarCheck className="w-5 h-5 text-teal-500 shrink-0" /> 8. Course Commencement and Batch Allocation
            </h2>
            <p>The Institute may allocate students to a particular batch based on:</p>
            <ul className="list-disc pl-6 space-y-1.5 text-slate-700 dark:text-slate-300">
              <li>Enrollment date</li>
              <li>Course availability</li>
              <li>Student capacity</li>
              <li>Trainer availability</li>
              <li>Timetable</li>
              <li>Technical requirements</li>
              <li>Operational considerations</li>
            </ul>
            <p>The Institute may change the batch schedule, classroom, trainer, or delivery format where reasonably necessary.</p>
            <p>Students will be informed of material schedule changes through the contact details available in the Institute&apos;s records.</p>
          </div>

          {/* Section 9 */}
          <div id="section-9" className="space-y-3 pt-8 border-t border-slate-100 dark:border-slate-800">
            <h2 className="text-xl sm:text-2xl font-bold font-heading text-slate-900 dark:text-white flex items-center gap-2">
              <UserCheck2 className="w-5 h-5 text-amber-500 shrink-0" /> 9. Attendance and Participation
            </h2>
            <p>Students are expected to attend classes regularly and participate actively in the program.</p>
            <p>Students are responsible for:</p>
            <ul className="list-disc pl-6 space-y-1.5 text-slate-700 dark:text-slate-300">
              <li>Attending scheduled sessions.</li>
              <li>Completing assignments.</li>
              <li>Participating in practical exercises.</li>
              <li>Completing projects.</li>
              <li>Meeting applicable assessment requirements.</li>
              <li>Maintaining required academic progress.</li>
            </ul>
            <p>Non-attendance does not automatically entitle a student to a refund, fee reduction, extension, or repeat training.</p>
            <p>Where recordings or alternative learning resources are provided, their availability may depend on the particular course or program.</p>
          </div>

          {/* Section 10 */}
          <div id="section-10" className="space-y-3 pt-8 border-t border-slate-100 dark:border-slate-800">
            <h2 className="text-xl sm:text-2xl font-bold font-heading text-slate-900 dark:text-white flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0" /> 10. Academic Requirements
            </h2>
            <p>Students may be required to complete:</p>
            <ul className="list-disc pl-6 space-y-1.5 text-slate-700 dark:text-slate-300">
              <li>Assignments</li>
              <li>Tests</li>
              <li>Practical exercises</li>
              <li>Projects</li>
              <li>Capstone projects</li>
              <li>Presentations</li>
              <li>Assessments</li>
              <li>Attendance requirements</li>
              <li>Other academic activities</li>
            </ul>
            <p>Certificates or other completion credentials may be subject to fulfillment of the applicable requirements.</p>
            <p>JVM Institute may withhold or decline to issue a certificate where a student has not satisfied the applicable academic, attendance, payment, or disciplinary requirements.</p>
          </div>

          {/* Section 11 */}
          <div id="section-11" className="space-y-3 pt-8 border-t border-slate-100 dark:border-slate-800">
            <h2 className="text-xl sm:text-2xl font-bold font-heading text-slate-900 dark:text-white flex items-center gap-2">
              <Award className="w-5 h-5 text-amber-500 shrink-0" /> 11. Certificates and Credentials
            </h2>
            <p>Where a certificate is offered, the certificate shall represent completion of the applicable JVM Institute program subject to the Institute&apos;s stated requirements.</p>
            <p>A certificate does not constitute:</p>
            <ul className="list-disc pl-6 space-y-1.5 text-slate-700 dark:text-slate-300">
              <li>A government qualification unless specifically stated as such;</li>
              <li>A university degree;</li>
              <li>A statutory professional license;</li>
              <li>A guarantee of employment;</li>
              <li>A guarantee of salary;</li>
              <li>A guarantee of admission to another institution.</li>
            </ul>
            <p>Students must not represent an Institute certificate as a government-issued, university-issued, or statutory qualification unless such status has been expressly and accurately stated by the Institute.</p>
          </div>

          {/* Section 12 */}
          <div id="section-12" className="space-y-3 pt-8 border-t border-slate-100 dark:border-slate-800">
            <h2 className="text-xl sm:text-2xl font-bold font-heading text-slate-900 dark:text-white flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-purple-600 dark:text-purple-400 shrink-0" /> 12. Placement Assistance
            </h2>
            <p>JVM Institute may provide career guidance and placement assistance as part of selected programs or services.</p>
            <p>Placement assistance may include:</p>
            <ul className="list-disc pl-6 space-y-1.5 text-slate-700 dark:text-slate-300">
              <li>Resume guidance</li>
              <li>Interview preparation</li>
              <li>Mock interviews</li>
              <li>Job search guidance</li>
              <li>LinkedIn profile guidance</li>
              <li>GitHub portfolio guidance</li>
              <li>Job opportunity sharing</li>
              <li>Career counseling</li>
              <li>Employer interaction where available</li>
            </ul>
            <p className="font-bold text-slate-900 dark:text-white text-base">Placement assistance is provided on a best-effort basis.</p>
            <p>JVM Institute does not guarantee:</p>
            <ul className="list-disc pl-6 space-y-1.5 text-slate-700 dark:text-slate-300">
              <li>A job offer;</li>
              <li>Employment within a specific period;</li>
              <li>A particular employer;</li>
              <li>A particular job title;</li>
              <li>A particular salary;</li>
              <li>A particular location;</li>
              <li>A specific number of interviews;</li>
              <li>Selection by any employer.</li>
            </ul>
            <p>Final hiring decisions are made solely by employers.</p>
            <p>Failure to secure employment does not, by itself, create a right to a refund unless expressly provided under the applicable Refund Policy or required by applicable law.</p>
          </div>

          {/* Section 13 */}
          <div id="section-13" className="space-y-3 pt-8 border-t border-slate-100 dark:border-slate-800">
            <h2 className="text-xl sm:text-2xl font-bold font-heading text-slate-900 dark:text-white flex items-center gap-2">
              <Laptop className="w-5 h-5 text-blue-500 shrink-0" /> 13. Internships and Practical Training
            </h2>
            <p>Where internships, projects, industry assignments, or practical training opportunities are offered, their availability may depend on:</p>
            <ul className="list-disc pl-6 space-y-1.5 text-slate-700 dark:text-slate-300">
              <li>Student eligibility;</li>
              <li>Academic performance;</li>
              <li>Availability of opportunities;</li>
              <li>Employer requirements;</li>
              <li>Project availability;</li>
              <li>Student participation;</li>
              <li>Selection by third parties.</li>
            </ul>
            <p>The Institute does not guarantee that every student will receive a specific internship, employer assignment, or external project opportunity unless expressly stated in a written agreement.</p>
          </div>

          {/* Section 14 */}
          <div id="section-14" className="space-y-3 pt-8 border-t border-slate-100 dark:border-slate-800">
            <h2 className="text-xl sm:text-2xl font-bold font-heading text-slate-900 dark:text-white flex items-center gap-2">
              <Cpu className="w-5 h-5 text-indigo-500 shrink-0" /> 14. Third-Party Platforms and Software
            </h2>
            <p>
              Courses may involve third-party software, platforms, APIs, cloud services, development tools, AI platforms, or other technologies, including but not limited to:
            </p>
            <ul className="list-disc pl-6 space-y-1.5 text-slate-700 dark:text-slate-300">
              <li>AWS</li>
              <li>Microsoft Azure</li>
              <li>Google Cloud</li>
              <li>OpenAI products</li>
              <li>Anthropic products</li>
              <li>Google Gemini</li>
              <li>GitHub</li>
              <li>TensorFlow</li>
              <li>PyTorch</li>
              <li>LangChain</li>
              <li>CrewAI</li>
              <li>Docker</li>
              <li>Other third-party software or services</li>
            </ul>
            <p>Third-party products and services are governed by their respective terms, licenses, and policies.</p>
            <p>JVM Institute does not control third-party platforms and is not responsible for changes, interruptions, pricing, availability, account restrictions, policy changes, or discontinuation of third-party services.</p>
            <p>Students are responsible for complying with applicable third-party terms and licenses.</p>
          </div>

          {/* Section 15 */}
          <div id="section-15" className="space-y-3 pt-8 border-t border-slate-100 dark:border-slate-800">
            <h2 className="text-xl sm:text-2xl font-bold font-heading text-slate-900 dark:text-white flex items-center gap-2">
              <Bot className="w-5 h-5 text-purple-600 dark:text-purple-400 shrink-0" /> 15. AI Tools and Responsible Use
            </h2>
            <p>Students may be taught or permitted to use Artificial Intelligence tools as part of their learning.</p>
            <p>Students must use AI tools responsibly and must not:</p>
            <ul className="list-disc pl-6 space-y-1.5 text-slate-700 dark:text-slate-300">
              <li>Use AI to commit unlawful activity;</li>
              <li>Submit another person&apos;s work as their own;</li>
              <li>Circumvent examinations or assessments;</li>
              <li>Generate fraudulent documents;</li>
              <li>Infringe intellectual property rights;</li>
              <li>Upload confidential third-party information without authorization;</li>
              <li>Use AI tools to harass, impersonate, deceive, or harm another person.</li>
            </ul>
            <p>Where an assignment or assessment prohibits the use of AI tools, students must comply with the applicable instructions.</p>
          </div>

          {/* Section 16 */}
          <div id="section-16" className="space-y-3 pt-8 border-t border-slate-100 dark:border-slate-800">
            <h2 className="text-xl sm:text-2xl font-bold font-heading text-slate-900 dark:text-white flex items-center gap-2">
              <Lock className="w-5 h-5 text-rose-500 shrink-0" /> 16. Learning Materials and Intellectual Property
            </h2>
            <p>All Learning Materials provided by JVM Institute are intended for the student&apos;s personal educational use unless otherwise expressly permitted.</p>
            <p>The Institute or its licensors retain all applicable intellectual property rights in:</p>
            <ul className="list-disc pl-6 space-y-1.5 text-slate-700 dark:text-slate-300">
              <li>Course content</li>
              <li>Training materials</li>
              <li>Presentations</li>
              <li>Videos</li>
              <li>Recordings</li>
              <li>Source code created by the Institute</li>
              <li>Course documents</li>
              <li>Logos</li>
              <li>Branding</li>
              <li>Graphics</li>
              <li>Website content</li>
              <li>Assessments</li>
              <li>Proprietary teaching methodologies</li>
            </ul>
            <p>Students may not, without prior written permission:</p>
            <ul className="list-disc pl-6 space-y-1.5 text-slate-700 dark:text-slate-300">
              <li>Copy or reproduce substantial portions of Learning Materials;</li>
              <li>Sell or commercially distribute Learning Materials;</li>
              <li>Upload Learning Materials to public websites;</li>
              <li>Share paid course content with unauthorized persons;</li>
              <li>Record classes for commercial distribution;</li>
              <li>Resell course recordings;</li>
              <li>Create competing commercial training products using proprietary Institute materials.</li>
            </ul>
            <p>Nothing in these Terms prevents students from using their own independently created work or publicly available third-party materials in accordance with applicable law.</p>
          </div>

          {/* Section 17 */}
          <div id="section-17" className="space-y-3 pt-8 border-t border-slate-100 dark:border-slate-800">
            <h2 className="text-xl sm:text-2xl font-bold font-heading text-slate-900 dark:text-white flex items-center gap-2">
              <Code2 className="w-5 h-5 text-cyan-500 shrink-0" /> 17. Student Projects and Portfolio Work
            </h2>
            <p>Students may create projects as part of their learning.</p>
            <p>Subject to applicable intellectual property rights and project-specific terms, students may generally use their independently created project work for:</p>
            <ul className="list-disc pl-6 space-y-1.5 text-slate-700 dark:text-slate-300">
              <li>Personal portfolios;</li>
              <li>GitHub repositories;</li>
              <li>Resume purposes;</li>
              <li>LinkedIn profiles;</li>
              <li>Job applications;</li>
              <li>Academic demonstrations.</li>
            </ul>
            <p>Students must not publish confidential information, proprietary third-party information, personal data, or Institute confidential information without appropriate authorization.</p>
            <p>Where a project is created using Institute-owned proprietary code, materials, datasets, or confidential information, additional restrictions may apply.</p>
          </div>

          {/* Section 18 */}
          <div id="section-18" className="space-y-3 pt-8 border-t border-slate-100 dark:border-slate-800">
            <h2 className="text-xl sm:text-2xl font-bold font-heading text-slate-900 dark:text-white flex items-center gap-2">
              <Video className="w-5 h-5 text-pink-500 shrink-0" /> 18. Class Recordings and Photography
            </h2>
            <p>
              Where classes are recorded for educational, quality, security, or administrative purposes, the Institute may retain and use such recordings in accordance with its Privacy Policy and applicable law.
            </p>
            <p>Students must not independently record, reproduce, distribute, or commercially exploit Institute classes without prior authorization.</p>
            <p>
              Where the Institute intends to use identifiable student photographs, testimonials, videos, or other personal content for promotional purposes, such use should be handled in accordance with applicable consent and privacy requirements.
            </p>
          </div>

          {/* Section 19 */}
          <div id="section-19" className="space-y-3 pt-8 border-t border-slate-100 dark:border-slate-800">
            <h2 className="text-xl sm:text-2xl font-bold font-heading text-slate-900 dark:text-white flex items-center gap-2">
              <UserX className="w-5 h-5 text-amber-500 shrink-0" /> 19. Student Code of Conduct
            </h2>
            <p>Students are expected to maintain professional and respectful conduct.</p>
            <p>Students must not:</p>
            <ul className="list-disc pl-6 space-y-1.5 text-slate-700 dark:text-slate-300">
              <li>Harass or threaten another student, faculty member, employee, or visitor;</li>
              <li>Engage in abusive, discriminatory, or offensive conduct;</li>
              <li>Disrupt classes;</li>
              <li>Damage Institute property;</li>
              <li>Engage in cheating or academic misconduct;</li>
              <li>Impersonate another person;</li>
              <li>Share unauthorized account credentials;</li>
              <li>Attempt to gain unauthorized access to Institute systems;</li>
              <li>Distribute malware or malicious software;</li>
              <li>Engage in unlawful activity through Institute facilities or systems;</li>
              <li>Misuse Institute branding or resources;</li>
              <li>Record or distribute classes without authorization.</li>
            </ul>
            <p>The Institute may take appropriate disciplinary action for violations, including suspension or termination of access to services, subject to applicable law and any applicable institutional procedure.</p>
          </div>

          {/* Section 20 */}
          <div id="section-20" className="space-y-3 pt-8 border-t border-slate-100 dark:border-slate-800">
            <h2 className="text-xl sm:text-2xl font-bold font-heading text-slate-900 dark:text-white flex items-center gap-2">
              <Key className="w-5 h-5 text-violet-500 shrink-0" /> 20. Account and Login Credentials
            </h2>
            <p>Where the Institute provides a student account, portal, Learning Management System, email account, or other credentials, the student is responsible for maintaining the confidentiality of their login information.</p>
            <p>Students must not:</p>
            <ul className="list-disc pl-6 space-y-1.5 text-slate-700 dark:text-slate-300">
              <li>Share passwords;</li>
              <li>Allow unauthorized persons to access their account;</li>
              <li>Sell or transfer their account;</li>
              <li>Attempt to access another student&apos;s account;</li>
              <li>Circumvent security controls.</li>
            </ul>
            <p>The Institute may suspend or terminate access where it reasonably believes that an account has been misused or compromised.</p>
          </div>

          {/* Section 21 */}
          <div id="section-21" className="space-y-3 pt-8 border-t border-slate-100 dark:border-slate-800">
            <h2 className="text-xl sm:text-2xl font-bold font-heading text-slate-900 dark:text-white flex items-center gap-2">
              <Globe className="w-5 h-5 text-blue-500 shrink-0" /> 21. Website Use
            </h2>
            <p>You agree to use the Website only for lawful purposes.</p>
            <p>You must not:</p>
            <ul className="list-disc pl-6 space-y-1.5 text-slate-700 dark:text-slate-300">
              <li>Attempt unauthorized access to the Website or its systems;</li>
              <li>Introduce malicious code, viruses, or harmful software;</li>
              <li>Scrape or systematically copy Website content without authorization;</li>
              <li>Interfere with Website operation;</li>
              <li>Use automated systems in a manner that places unreasonable load on the Website;</li>
              <li>Attempt to bypass security measures;</li>
              <li>Use the Website for fraudulent purposes;</li>
              <li>Publish unlawful or harmful content through any feature provided by the Website.</li>
            </ul>
            <p>The Institute may suspend or restrict access to Website features where necessary for security, maintenance, legal compliance, or operational reasons.</p>
          </div>

          {/* Section 22 */}
          <div id="section-22" className="space-y-3 pt-8 border-t border-slate-100 dark:border-slate-800">
            <h2 className="text-xl sm:text-2xl font-bold font-heading text-slate-900 dark:text-white flex items-center gap-2">
              <FileText className="w-5 h-5 text-slate-500 shrink-0" /> 22. Website Content and Accuracy
            </h2>
            <p>JVM Institute makes reasonable efforts to maintain accurate information on the Website.</p>
            <p>However, information may occasionally contain:</p>
            <ul className="list-disc pl-6 space-y-1.5 text-slate-700 dark:text-slate-300">
              <li>Typographical errors;</li>
              <li>Outdated information;</li>
              <li>Technical inaccuracies;</li>
              <li>Pricing errors;</li>
              <li>Scheduling changes;</li>
              <li>Third-party information that has changed.</li>
            </ul>
            <p>The Institute reserves the right to correct errors and update Website information at any time.</p>
            <p>Website content should not be treated as a substitute for specific written confirmation from the Institute where a particular commercial or enrollment commitment is material.</p>
          </div>

          {/* Section 23 */}
          <div id="section-23" className="space-y-3 pt-8 border-t border-slate-100 dark:border-slate-800">
            <h2 className="text-xl sm:text-2xl font-bold font-heading text-slate-900 dark:text-white flex items-center gap-2">
              <ExternalLink className="w-5 h-5 text-pink-500 shrink-0" /> 23. Third-Party Links
            </h2>
            <p>The Website may contain links to third-party websites, applications, services, or resources.</p>
            <p>Such links are provided for convenience or informational purposes.</p>
            <p>JVM Institute does not necessarily endorse or control third-party websites and is not responsible for their:</p>
            <ul className="list-disc pl-6 space-y-1.5 text-slate-700 dark:text-slate-300">
              <li>Content;</li>
              <li>Availability;</li>
              <li>Privacy practices;</li>
              <li>Security;</li>
              <li>Products or services;</li>
              <li>Terms and conditions.</li>
            </ul>
            <p>Students should review the policies of third-party websites before using them.</p>
          </div>

          {/* Section 24 */}
          <div id="section-24" className="space-y-3 pt-8 border-t border-slate-100 dark:border-slate-800">
            <h2 className="text-xl sm:text-2xl font-bold font-heading text-slate-900 dark:text-white flex items-center gap-2">
              <Shield className="w-5 h-5 text-emerald-500 shrink-0" /> 24. Privacy and Personal Data
            </h2>
            <p>JVM Institute may collect and process personal information for purposes including:</p>
            <ul className="list-disc pl-6 space-y-1.5 text-slate-700 dark:text-slate-300">
              <li>Student registration;</li>
              <li>Course administration;</li>
              <li>Payment processing;</li>
              <li>Communication;</li>
              <li>Academic administration;</li>
              <li>Certification;</li>
              <li>Career services;</li>
              <li>Placement assistance;</li>
              <li>Website operation;</li>
              <li>Customer support;</li>
              <li>Legal and regulatory compliance.</li>
            </ul>
            <p>Such processing shall be governed by the JVM Institute <Link href="/privacy-policy" className="text-purple-600 dark:text-purple-400 underline font-semibold">Privacy Policy</Link> and applicable data protection laws.</p>
            <p>The Institute&apos;s Privacy Policy should be reviewed separately for information regarding collection, use, storage, sharing, retention, and protection of personal data.</p>
          </div>

          {/* Section 25 */}
          <div id="section-25" className="space-y-3 pt-8 border-t border-slate-100 dark:border-slate-800">
            <h2 className="text-xl sm:text-2xl font-bold font-heading text-slate-900 dark:text-white flex items-center gap-2">
              <MessagesSquare className="w-5 h-5 text-indigo-500 shrink-0" /> 25. Communications
            </h2>
            <p>By submitting an enquiry, registering for a course, or otherwise providing contact details, you may receive communications relating to:</p>
            <ul className="list-disc pl-6 space-y-1.5 text-slate-700 dark:text-slate-300">
              <li>Enrollment;</li>
              <li>Course schedules;</li>
              <li>Payments;</li>
              <li>Classes;</li>
              <li>Assignments;</li>
              <li>Academic matters;</li>
              <li>Career services;</li>
              <li>Support;</li>
              <li>Important Institute announcements.</li>
            </ul>
            <p>Where required by applicable law, promotional communications will be subject to applicable consent and opt-out requirements.</p>
            <p>Students should ensure that their contact information remains accurate.</p>
          </div>

          {/* Section 26 */}
          <div id="section-26" className="space-y-3 pt-8 border-t border-slate-100 dark:border-slate-800">
            <h2 className="text-xl sm:text-2xl font-bold font-heading text-slate-900 dark:text-white flex items-center gap-2">
              <CreditCard className="w-5 h-5 text-blue-500 shrink-0" /> 26. Payment Gateway and Online Transactions
            </h2>
            <p>Where payments are processed through third-party payment gateways, the transaction may also be subject to the gateway provider&apos;s terms and policies.</p>
            <p>JVM Institute is not responsible for technical failures originating solely from a bank, payment gateway, card network, UPI service provider, or other third-party financial institution.</p>
            <p>Students should retain payment confirmations, receipts, and transaction references for their records.</p>
          </div>

          {/* Section 27 */}
          <div id="section-27" className="space-y-3 pt-8 border-t border-slate-100 dark:border-slate-800">
            <h2 className="text-xl sm:text-2xl font-bold font-heading text-slate-900 dark:text-white flex items-center gap-2">
              <ShieldAlert className="w-5 h-5 text-rose-500 shrink-0" /> 27. Suspension or Termination of Services
            </h2>
            <p>JVM Institute may suspend or terminate a student&apos;s access to a program or service where reasonably necessary due to:</p>
            <ul className="list-disc pl-6 space-y-1.5 text-slate-700 dark:text-slate-300">
              <li>Serious misconduct;</li>
              <li>Fraudulent activity;</li>
              <li>Non-payment of applicable fees;</li>
              <li>Unauthorized sharing of Learning Materials;</li>
              <li>Unauthorized access to systems;</li>
              <li>Violation of these Terms;</li>
              <li>Violation of applicable law;</li>
              <li>Conduct that materially disrupts the learning environment.</li>
            </ul>
            <p>Where appropriate, the Institute may provide notice and an opportunity to address the issue before taking action.</p>
            <p>Termination or suspension shall not automatically extinguish payment obligations already incurred, subject to applicable law and the applicable Refund Policy.</p>
          </div>

          {/* Section 28 */}
          <div id="section-28" className="space-y-3 pt-8 border-t border-slate-100 dark:border-slate-800">
            <h2 className="text-xl sm:text-2xl font-bold font-heading text-slate-900 dark:text-white flex items-center gap-2">
              <Zap className="w-5 h-5 text-amber-500 shrink-0" /> 28. Force Majeure
            </h2>
            <p>JVM Institute shall not be responsible for delays or interruptions caused by circumstances beyond its reasonable control, including but not limited to:</p>
            <ul className="list-disc pl-6 space-y-1.5 text-slate-700 dark:text-slate-300">
              <li>Natural disasters;</li>
              <li>Fire;</li>
              <li>Flood;</li>
              <li>Epidemics or pandemics;</li>
              <li>Government restrictions;</li>
              <li>War;</li>
              <li>Civil unrest;</li>
              <li>Strikes;</li>
              <li>Power failures;</li>
              <li>Internet or telecommunications failures;</li>
              <li>Cybersecurity incidents;</li>
              <li>Third-party platform failures;</li>
              <li>Acts of God;</li>
              <li>Other circumstances beyond the reasonable control of the Institute.</li>
            </ul>
            <p>Where such circumstances materially affect a program, the Institute may reasonably modify schedules, delivery methods, venues, or other arrangements.</p>
            <p>Any refund or credit arising from such circumstances shall be governed by the applicable Refund Policy and applicable law.</p>
          </div>

          {/* Section 29 */}
          <div id="section-29" className="space-y-3 pt-8 border-t border-slate-100 dark:border-slate-800">
            <h2 className="text-xl sm:text-2xl font-bold font-heading text-slate-900 dark:text-white flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-purple-600 dark:text-purple-400 shrink-0" /> 29. No Guarantee of Results
            </h2>
            <p>JVM Institute provides education, training, mentoring, and career support designed to help students develop skills.</p>
            <p>However, the Institute does not guarantee any particular:</p>
            <ul className="list-disc pl-6 space-y-1.5 text-slate-700 dark:text-slate-300">
              <li>Academic result;</li>
              <li>Examination score;</li>
              <li>Certification outcome;</li>
              <li>Employment outcome;</li>
              <li>Salary;</li>
              <li>Promotion;</li>
              <li>Business result;</li>
              <li>Freelance income;</li>
              <li>Career progression.</li>
            </ul>
            <p>Individual results depend on factors including the student&apos;s effort, prior knowledge, attendance, practical experience, interview performance, market conditions, employer requirements, and other factors outside the Institute&apos;s control.</p>
          </div>

          {/* Section 30 */}
          <div id="section-30" className="space-y-3 pt-8 border-t border-slate-100 dark:border-slate-800">
            <h2 className="text-xl sm:text-2xl font-bold font-heading text-slate-900 dark:text-white flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-indigo-500 shrink-0" /> 30. Disclaimer Regarding Career and Salary Claims
            </h2>
            <p>
              Any salary figures, career outcomes, employment examples, testimonials, success stories, placement statistics, or industry projections published by JVM Institute should be understood in their proper context.
            </p>
            <p>Such information is not a guarantee that a particular student will achieve the same result.</p>
            <p>Students should make enrollment decisions based on their own circumstances and should seek clarification from the Institute regarding any specific claim that materially influences their decision.</p>
          </div>

          {/* Section 31 */}
          <div id="section-31" className="space-y-3 pt-8 border-t border-slate-100 dark:border-slate-800">
            <h2 className="text-xl sm:text-2xl font-bold font-heading text-slate-900 dark:text-white flex items-center gap-2">
              <Scale className="w-5 h-5 text-rose-500 shrink-0" /> 31. Limitation of Liability
            </h2>
            <p>To the maximum extent permitted by applicable law, JVM Institute shall not be liable for indirect, incidental, consequential, special, or exemplary losses arising from the use of the Website or Services.</p>
            <p>This may include, subject to applicable law:</p>
            <ul className="list-disc pl-6 space-y-1.5 text-slate-700 dark:text-slate-300">
              <li>Loss of profits;</li>
              <li>Loss of employment opportunities;</li>
              <li>Loss of business opportunities;</li>
              <li>Loss of data;</li>
              <li>Loss of anticipated income;</li>
              <li>Loss arising from third-party platforms;</li>
              <li>Temporary interruption of services.</li>
            </ul>
            <p>Nothing in these Terms is intended to exclude or limit liability where such exclusion or limitation is prohibited by applicable law.</p>
          </div>

          {/* Section 32 */}
          <div id="section-32" className="space-y-3 pt-8 border-t border-slate-100 dark:border-slate-800">
            <h2 className="text-xl sm:text-2xl font-bold font-heading text-slate-900 dark:text-white flex items-center gap-2">
              <UserCog className="w-5 h-5 text-teal-500 shrink-0" /> 32. Student Responsibility
            </h2>
            <p>Students are responsible for:</p>
            <ul className="list-disc pl-6 space-y-1.5 text-slate-700 dark:text-slate-300">
              <li>Their own learning and academic progress;</li>
              <li>Maintaining required equipment and internet access for online learning;</li>
              <li>Keeping their credentials secure;</li>
              <li>Meeting deadlines;</li>
              <li>Completing assignments and projects;</li>
              <li>Following applicable software licenses;</li>
              <li>Maintaining backups of their personal work;</li>
              <li>Providing accurate information;</li>
              <li>Complying with applicable laws.</li>
            </ul>
            <p>JVM Institute shall not be responsible for loss of a student&apos;s personal files where the student has failed to maintain appropriate backups.</p>
          </div>

          {/* Section 33 */}
          <div id="section-33" className="space-y-3 pt-8 border-t border-slate-100 dark:border-slate-800">
            <h2 className="text-xl sm:text-2xl font-bold font-heading text-slate-900 dark:text-white flex items-center gap-2">
              <ShieldAlert className="w-5 h-5 text-amber-500 shrink-0" /> 33. Indemnification
            </h2>
            <p>To the extent permitted by applicable law, a student may be responsible for losses, claims, damages, or reasonable expenses arising from the student&apos;s:</p>
            <ul className="list-disc pl-6 space-y-1.5 text-slate-700 dark:text-slate-300">
              <li>Material breach of these Terms;</li>
              <li>Fraudulent conduct;</li>
              <li>Intentional misuse of Institute systems;</li>
              <li>Unauthorized use or distribution of Institute intellectual property;</li>
              <li>Violation of applicable law;</li>
              <li>Infringement of third-party rights.</li>
            </ul>
            <p>This clause shall not apply to the extent that the relevant loss was caused by the negligence, wilful misconduct, or breach of law by JVM Institute.</p>
          </div>

          {/* Section 34 */}
          <div id="section-34" className="space-y-3 pt-8 border-t border-slate-100 dark:border-slate-800">
            <h2 className="text-xl sm:text-2xl font-bold font-heading text-slate-900 dark:text-white flex items-center gap-2">
              <Building2 className="w-5 h-5 text-purple-600 dark:text-purple-400 shrink-0" /> 34. Intellectual Property of JVM Institute
            </h2>
            <p>
              The JVM Institute name, logo, trademarks, branding, Website design, graphics, written content, course materials, and other proprietary materials are owned by or licensed to the Institute unless otherwise stated.
            </p>
            <p>No right or license to use the Institute&apos;s intellectual property is granted merely by accessing the Website or enrolling in a course.</p>
            <p>Any authorized use of Institute branding must comply with the permission granted by JVM Institute.</p>
          </div>

          {/* Section 35 */}
          <div id="section-35" className="space-y-3 pt-8 border-t border-slate-100 dark:border-slate-800">
            <h2 className="text-xl sm:text-2xl font-bold font-heading text-slate-900 dark:text-white flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-blue-500 shrink-0" /> 35. Student Feedback and Testimonials
            </h2>
            <p>Students may voluntarily provide feedback, reviews, testimonials, or suggestions concerning JVM Institute.</p>
            <p>The Institute may use such feedback for service improvement and, where appropriate and lawfully permitted, promotional purposes.</p>
            <p>
              Where identifiable personal information, photographs, video, audio, or testimonials are intended for promotional use, the Institute should obtain the necessary consent or otherwise rely on a lawful basis under applicable law.
            </p>
            <p>Students should not submit confidential information or third-party personal information as part of public feedback.</p>
          </div>

          {/* Section 36 */}
          <div id="section-36" className="space-y-3 pt-8 border-t border-slate-100 dark:border-slate-800">
            <h2 className="text-xl sm:text-2xl font-bold font-heading text-slate-900 dark:text-white flex items-center gap-2">
              <Layers className="w-5 h-5 text-emerald-500 shrink-0" /> 36. Changes to Courses and Services
            </h2>
            <p>Technology and industry requirements change rapidly.</p>
            <p>JVM Institute therefore reserves the right to update or modify its courses, services, tools, technologies, schedules, faculty, and Learning Materials from time to time.</p>
            <p>Where a change is material to an already enrolled program, the Institute will make reasonable efforts to communicate the change to affected students.</p>
          </div>

          {/* Section 37 */}
          <div id="section-37" className="space-y-3 pt-8 border-t border-slate-100 dark:border-slate-800">
            <h2 className="text-xl sm:text-2xl font-bold font-heading text-slate-900 dark:text-white flex items-center gap-2">
              <FileCode className="w-5 h-5 text-cyan-500 shrink-0" /> 37. Changes to These Terms
            </h2>
            <p>JVM Institute may update these Terms from time to time to reflect:</p>
            <ul className="list-disc pl-6 space-y-1.5 text-slate-700 dark:text-slate-300">
              <li>Changes in law;</li>
              <li>Changes in services;</li>
              <li>Changes in technology;</li>
              <li>Operational requirements;</li>
              <li>Security requirements;</li>
              <li>Changes in Institute policies.</li>
            </ul>
            <p>The updated version will be published on the Website with a revised &quot;Last Updated&quot; date.</p>
            <p>
              The Terms applicable to a student&apos;s enrollment shall generally be those in effect at the time of enrollment, except where changes are required by law or are otherwise applicable to ongoing use of the Website or Services.
            </p>
          </div>

          {/* Section 38 */}
          <div id="section-38" className="space-y-3 pt-8 border-t border-slate-100 dark:border-slate-800">
            <h2 className="text-xl sm:text-2xl font-bold font-heading text-slate-900 dark:text-white flex items-center gap-2">
              <Scale className="w-5 h-5 text-purple-600 dark:text-purple-400 shrink-0" /> 38. Governing Law
            </h2>
            <p>These Terms shall be governed by and interpreted in accordance with the laws of India.</p>
            <p>
              Subject to applicable law, disputes arising from these Terms or the Services shall be subject to the jurisdiction of the competent courts and authorities having jurisdiction in <strong>Pune, Maharashtra, India</strong>.
            </p>
            <p>
              Nothing in this clause prevents a consumer from exercising any non-waivable rights or remedies available under applicable consumer protection or other applicable laws.
            </p>
          </div>

          {/* Section 39 */}
          <div id="section-39" className="space-y-3 pt-8 border-t border-slate-100 dark:border-slate-800">
            <h2 className="text-xl sm:text-2xl font-bold font-heading text-slate-900 dark:text-white flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-indigo-500 shrink-0" /> 39. Dispute Resolution
            </h2>
            <p>JVM Institute encourages students to first contact the Institute and attempt to resolve any complaint or dispute amicably.</p>
            <p>Students should provide sufficient details and supporting documents so that the Institute can investigate the matter.</p>
            <p>Where a dispute cannot be resolved informally, either party may pursue remedies available under applicable law.</p>
            <p>
              Nothing in these Terms shall prevent a party from approaching a competent statutory authority, consumer forum/commission, court, or other legally available dispute-resolution mechanism where permitted by law.
            </p>
          </div>

          {/* Section 40 */}
          <div id="section-40" className="space-y-3 pt-8 border-t border-slate-100 dark:border-slate-800">
            <h2 className="text-xl sm:text-2xl font-bold font-heading text-slate-900 dark:text-white flex items-center gap-2">
              <Check className="w-5 h-5 text-emerald-500 shrink-0" /> 40. Severability
            </h2>
            <p>
              If any provision of these Terms is found to be invalid, unlawful, or unenforceable by a competent authority, that provision shall be modified or interpreted to the minimum extent necessary to make it enforceable, where legally permissible.
            </p>
            <p>The remaining provisions shall continue in full force and effect.</p>
          </div>

          {/* Section 41 */}
          <div id="section-41" className="space-y-3 pt-8 border-t border-slate-100 dark:border-slate-800">
            <h2 className="text-xl sm:text-2xl font-bold font-heading text-slate-900 dark:text-white flex items-center gap-2">
              <FileCheck className="w-5 h-5 text-teal-500 shrink-0" /> 41. Waiver
            </h2>
            <p>
              Failure by JVM Institute to enforce any provision of these Terms shall not constitute a waiver of its right to enforce that provision in the future.
            </p>
            <p>Any waiver must be made expressly and, where appropriate, in writing.</p>
          </div>

          {/* Section 42 */}
          <div id="section-42" className="space-y-3 pt-8 border-t border-slate-100 dark:border-slate-800">
            <h2 className="text-xl sm:text-2xl font-bold font-heading text-slate-900 dark:text-white flex items-center gap-2">
              <FileText className="w-5 h-5 text-blue-500 shrink-0" /> 42. Entire Agreement
            </h2>
            <p>
              These Terms, together with the applicable Refund Policy, Privacy Policy, course-specific terms, enrollment documents, payment terms, and other written policies expressly incorporated into the student&apos;s enrollment, constitute the applicable agreement between the student and JVM Institute concerning the relevant Services.
            </p>
          </div>

          {/* Section 43 */}
          <div id="section-43" className="space-y-3 pt-8 border-t border-slate-100 dark:border-slate-800">
            <h2 className="text-xl sm:text-2xl font-bold font-heading text-slate-900 dark:text-white flex items-center gap-2">
              <Building2 className="w-5 h-5 text-purple-600 dark:text-purple-400 shrink-0" /> 43. Contact Information
            </h2>
            <p>For questions regarding these Terms & Conditions, course enrollment, or Institute policies, you may contact JVM Institute through the following details:</p>
            <div className="bg-slate-50 dark:bg-slate-800/60 p-5 rounded-2xl border border-slate-200 dark:border-slate-700 text-sm font-medium space-y-2">
              <p><strong className="text-slate-900 dark:text-white">JVM Institute Pvt. Ltd.</strong></p>
              <p><strong className="text-slate-900 dark:text-white">Address:</strong> S.No. 82, Suman Ankur, Sahyadri Farms, Lalit Estate, Baner, Pune – 411045, Maharashtra, India</p>
              <p><strong className="text-slate-900 dark:text-white">Phone:</strong> +91 84462 84162</p>
              <p><strong className="text-slate-900 dark:text-white">Email:</strong> <a href="mailto:infojvminstitute@gmail.com" className="text-purple-600 dark:text-purple-400 underline">infojvminstitute@gmail.com</a> / <a href="mailto:support@jvminstitute.com" className="text-purple-600 dark:text-purple-400 underline">support@jvminstitute.com</a></p>
              <p><strong className="text-slate-900 dark:text-white">Website:</strong> <a href="http://www.jvminstitute.com" target="_blank" rel="noopener noreferrer" className="text-purple-600 dark:text-purple-400 underline">www.jvminstitute.com</a></p>
            </div>
          </div>

          {/* Section 44 */}
          <div id="section-44" className="space-y-3 pt-8 border-t border-slate-100 dark:border-slate-800">
            <h2 className="text-xl sm:text-2xl font-bold font-heading text-slate-900 dark:text-white flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" /> 44. Acknowledgement and Acceptance
            </h2>
            <p>By accessing the JVM Institute Website, submitting an enquiry, registering for a program, making a payment, attending classes, or using any JVM Institute Service, you acknowledge that:</p>
            <ol className="list-decimal pl-6 space-y-1.5 text-slate-700 dark:text-slate-300 font-medium">
              <li>You have read these Terms & Conditions.</li>
              <li>You understand the provisions contained herein.</li>
              <li>You agree to comply with these Terms.</li>
              <li>You have reviewed the applicable Refund Policy.</li>
              <li>You understand that placement assistance does not guarantee employment unless expressly stated otherwise in writing.</li>
              <li>You understand that course completion and certification may be subject to academic, attendance, payment, and other applicable requirements.</li>
              <li>You agree to comply with applicable laws and Institute policies.</li>
            </ol>
            <div className="mt-4 p-5 rounded-2xl bg-emerald-50/70 dark:bg-emerald-950/30 border border-emerald-200/80 dark:border-emerald-800/50 text-emerald-900 dark:text-emerald-200 text-center font-bold text-sm sm:text-base space-y-1">
              <p>By continuing to use the Website or Services, you agree to be bound by these Terms & Conditions.</p>
              <p className="text-xs sm:text-sm font-semibold opacity-90">JVM Institute Pvt. Ltd. — Terms & Conditions — Last Updated: 10 August 2026</p>
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
