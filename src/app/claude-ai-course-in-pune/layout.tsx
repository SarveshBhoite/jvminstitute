import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Claude AI & Agentic Workflows Course in Pune | Anthropic Claude AI',
  description: 'Master Claude AI, Anthropic API, AI Agentic Workflows, Tool Use & Multi-Agent Systems in Pune. Hands-on projects with 100% placement support at JVM Institute.',
  keywords: [
    'Claude AI Course in Pune',
    'Anthropic Claude Training Pune',
    'Agentic AI Workflows Pune',
    'AI Agents Course Pune',
    'JVM Institute Claude AI'
  ],
  alternates: {
    canonical: 'https://jvminstitute.com/claude-ai-course-in-pune',
  },
  openGraph: {
    title: 'Claude AI & Agentic Workflows Course in Pune | JVM Institute',
    description: 'Learn Anthropic Claude, AI Agents, Tool Use & Automated Workflows in Pune.',
    url: 'https://jvminstitute.com/claude-ai-course-in-pune',
    siteName: 'JVM Institute',
    images: [
      {
        url: '/claudeai.jpeg',
        width: 1200,
        height: 630,
        alt: 'Claude AI Course in Pune - JVM Institute',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function ClaudeAiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
