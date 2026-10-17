import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Contact Us | JVM Institute Baner, Pune',
  description: 'Get in touch with JVM Institute Pune. Visit our campus at Lalit Estate, Baner, Pune, call our admissions desk at +91 84462 84162, or book a free demo class.',
  keywords: [
    'Contact JVM Institute',
    'JVM Institute Phone Number',
    'JVM Institute Address Pune',
    'JVM Institute Baner Pune',
    'JVM Institute Admissions'
  ],
  alternates: {
    canonical: 'https://jvminstitute.com/contact-us',
  },
  openGraph: {
    title: 'Contact Us | JVM Institute Baner, Pune',
    description: 'Visit our Baner Pune campus or get in touch at +91 84462 84162 for free career counseling.',
    url: 'https://jvminstitute.com/contact-us',
    siteName: 'JVM Institute',
    images: ['/jvm_logo-bg.png'],
  },
};

export default function ContactUsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
