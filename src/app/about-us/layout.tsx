import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'About Us | Premier Tech & Data Engineering Training Institute in Pune',
  description: 'Learn about JVM Institute Pune. Founded in 2020 by senior industry data architects to deliver hands-on practical training in Data Engineering, PySpark, AI & Cloud with 100% placement support.',
  keywords: [
    'About JVM Institute',
    'JVM Institute Pune Founders',
    'Best Data Engineering Training Institute Pune',
    'JVM Institute Karve Nagar Pune'
  ],
  alternates: {
    canonical: 'https://jvminstitute.com/about-us',
  },
  openGraph: {
    title: 'About Us | JVM Institute Pune',
    description: 'Premier Tech & Data Engineering Training Institute in Karve Nagar, Pune.',
    url: 'https://jvminstitute.com/about-us',
    siteName: 'JVM Institute',
    images: ['/about.jpg'],
  },
};

export default function AboutUsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
