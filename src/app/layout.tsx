import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "JVM Institute - Premier Data Engineering, Python & Tech Training Institute in Pune",
  description: "JVM Institute Pune offers industry-aligned training in Data Engineering, Python for Data Analysis, Big Data, SQL, and Cloud Technologies. Transform your career with 100% placement assistance.",
  keywords: [
    "JVM Institute",
    "Data Engineering Course in Pune",
    "Python for Data Analysis Pune",
    "Big Data Institute Pune",
    "Tech Training Institute Pune",
    "Software Training Pune"
  ],
  icons: {
    icon: "/jvm_logo-bg.png",
    shortcut: "/jvm_logo-bg.png",
    apple: "/jvm_logo-bg.png",
  },
  openGraph: {
    title: "JVM Institute - Premier Data Engineering & Tech Training",
    description: "Industry-led courses in Data Engineering, Python, SQL & Cloud with placement assistance.",
    url: "https://jvminstitute.com",
    siteName: "JVM Institute",
    images: [
      {
        url: "/jvm_logo-bg.png",
        width: 1200,
        height: 630,
        alt: "JVM Institute Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-[#FAFAFC] text-slate-900 antialiased selection:bg-[#7C248C] selection:text-white">
        {children}
      </body>
    </html>
  );
}
