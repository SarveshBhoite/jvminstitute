import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Contact Us | JVM Institute Karve Nagar, Pune',
  description: 'Get in touch with JVM Institute Pune. Visit our campus at Karve Nagar, Pune, call us at +91 98345 03574, or book a free demo class.',
  keywords: [
    'Contact JVM Institute',
    'JVM Institute Phone Number',
    'JVM Institute Address Pune',
    'JVM Institute Karve Nagar'
  ],
  alternates: {
    canonical: 'https://jvminstitute.com/contact-us',
  },
  openGraph: {
    title: 'Contact Us | JVM Institute Pune',
    description: 'Visit our Karve Nagar Pune campus or get in touch for free career counseling.',
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
