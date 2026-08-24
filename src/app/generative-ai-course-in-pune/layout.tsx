import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Generative AI Course in Pune | GenAI & LLM Training Institute',
  description: 'Master Generative AI, Prompt Engineering, RAG Architectures, LangChain & OpenAI APIs in Pune. 100% placement support at JVM Institute Pune.',
  keywords: [
    'Generative AI Course in Pune',
    'GenAI Training Institute Pune',
    'LLM Course in Pune',
    'LangChain Training Pune',
    'Prompt Engineering Course Pune',
    'JVM Institute Generative AI'
  ],
  alternates: {
    canonical: 'https://jvminstitute.com/generative-ai-course-in-pune',
  },
  openGraph: {
    title: 'Generative AI Course in Pune | 100% Placement - JVM Institute',
    description: 'Master LLMs, Prompt Engineering, LangChain, Fine-Tuning & RAG Pipelines in Pune with placement support.',
    url: 'https://jvminstitute.com/generative-ai-course-in-pune',
    siteName: 'JVM Institute',
    images: [
      {
        url: '/generativeai.jpeg',
        width: 1200,
        height: 630,
        alt: 'Generative AI Course in Pune - JVM Institute',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function GenerativeAiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
