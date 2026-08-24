import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Tech & Data Engineering Blog | JVM Institute Pune',
  description: 'Read the latest technical articles, PySpark tutorials, SQL guides, Data Engineering career tips & Cloud ETL insights from industry experts at JVM Institute.',
  keywords: [
    'Data Engineering Blog',
    'PySpark Tutorials',
    'SQL for Data Engineering',
    'Data Engineer Career Guide',
    'JVM Institute Tech Articles'
  ],
  alternates: {
    canonical: 'https://jvminstitute.com/blog',
  },
  openGraph: {
    title: 'Tech & Data Engineering Blog | JVM Institute',
    description: 'Technical articles, PySpark guides & Data Engineering career advice.',
    url: 'https://jvminstitute.com/blog',
    siteName: 'JVM Institute',
    images: ['/jvm_logo-bg.png'],
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
