import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Our Courses | Data Engineering, AI & Cloud Training in Pune',
  description: 'Explore industry-leading tech courses at JVM Institute Pune: Data Engineering, PySpark, GenAI, Claude AI, and Machine Learning with 100% placement support.',
  keywords: [
    'JVM Institute Courses',
    'Data Engineering Courses Pune',
    'AI ML Training Courses Pune',
    'PySpark Databricks Courses Pune',
    'Tech Certification Courses Pune'
  ],
  alternates: {
    canonical: 'https://jvminstitute.com/our-courses',
  },
  openGraph: {
    title: 'Our Courses | JVM Institute Pune',
    description: 'Explore Data Engineering, PySpark, GenAI & Cloud courses with 100% placement support in Pune.',
    url: 'https://jvminstitute.com/our-courses',
    siteName: 'JVM Institute',
    images: ['/jvm_logo-bg.png'],
  },
};

export default function OurCoursesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
