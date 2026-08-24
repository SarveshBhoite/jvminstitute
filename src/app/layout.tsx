import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Outfit } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import WhatsAppButton from "@/components/WhatsAppButton";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jvminstitute.com"),
  title: "JVM Institute - Premier Data Engineering & Tech Training Institute in Pune",
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
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
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
    <html lang="en" className={`${plusJakarta.variable} ${outfit.variable} scroll-smooth`} suppressHydrationWarning>
      <body className="min-h-screen bg-[#FAFAFC] dark:bg-[#0B0F19] text-slate-900 dark:text-slate-100 font-sans antialiased selection:bg-[#7C248C] selection:text-white transition-colors duration-300">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
          {/* Floating WhatsApp Button across all pages */}
          <WhatsAppButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
