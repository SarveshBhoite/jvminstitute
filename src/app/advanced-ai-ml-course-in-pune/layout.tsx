import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Advanced AI & Machine Learning Course in Pune | Deep Learning & PyTorch',
  description: 'Advanced AI & Machine Learning Training in Pune. Master Deep Learning, PyTorch, Computer Vision, NLP & Neural Networks with 100% placement support.',
  keywords: [
    'Advanced AI ML Course in Pune',
    'Deep Learning Training Pune',
    'PyTorch Course Pune',
    'NLP and Computer Vision Pune',
    'AI Specialist Course Pune',
    'JVM Institute Advanced AI ML'
  ],
  alternates: {
    canonical: 'https://jvminstitute.com/advanced-ai-ml-course-in-pune',
  },
  openGraph: {
    title: 'Advanced AI & Machine Learning Course in Pune | JVM Institute',
    description: 'Master Neural Networks, PyTorch, Computer Vision & NLP with industry projects.',
    url: 'https://jvminstitute.com/advanced-ai-ml-course-in-pune',
    siteName: 'JVM Institute',
    images: [
      {
        url: '/advanceaiml.jpeg',
        width: 1200,
        height: 630,
        alt: 'Advanced AI ML Course in Pune - JVM Institute',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function AdvancedAiMlLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
