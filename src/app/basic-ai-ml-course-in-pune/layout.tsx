import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Basic AI & Machine Learning Course in Pune | Python & ML Fundamentals',
  description: 'Beginner-friendly Basic AI & ML Course in Pune. Learn Python, Data Processing, NumPy, Pandas, Scikit-Learn & ML Algorithms at JVM Institute Pune.',
  keywords: [
    'Basic AI ML Course in Pune',
    'Machine Learning Classes Pune',
    'Python for Machine Learning Pune',
    'AI Fundamentals Training Pune',
    'JVM Institute Basic AI ML'
  ],
  alternates: {
    canonical: 'https://jvminstitute.com/basic-ai-ml-course-in-pune',
  },
  openGraph: {
    title: 'Basic AI & Machine Learning Course in Pune | JVM Institute',
    description: 'Learn Python, ML Algorithms, Scikit-Learn & Data Analysis from scratch with placement assistance.',
    url: 'https://jvminstitute.com/basic-ai-ml-course-in-pune',
    siteName: 'JVM Institute',
    images: [
      {
        url: '/basicaiml.jpeg',
        width: 1200,
        height: 630,
        alt: 'Basic AI ML Course in Pune - JVM Institute',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function BasicAiMlLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
