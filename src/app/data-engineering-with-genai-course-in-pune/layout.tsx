import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Data Engineering with GenAI Course in Pune | PySpark, LLMs & Cloud Pipelines',
  description: 'Master Data Engineering with Generative AI in Pune. Hands-on PySpark, Databricks, LLM Data Pipelines, LangChain, Vector DBs & 100% placement support at JVM Institute.',
  keywords: [
    'Data Engineering with GenAI Course in Pune',
    'GenAI Data Engineering Classes Pune',
    'PySpark and LLM Training Pune',
    'AI Data Engineering Institute Pune',
    'Databricks and Vector DB Course Pune',
    'JVM Institute GenAI Data Engineering'
  ],
  alternates: {
    canonical: 'https://jvminstitute.com/data-engineering-with-genai-course-in-pune',
  },
  openGraph: {
    title: 'Data Engineering with GenAI Course in Pune | JVM Institute',
    description: 'Master PySpark, Databricks, LLMs, LangChain & Vector Databases with 100% placement support in Pune.',
    url: 'https://jvminstitute.com/data-engineering-with-genai-course-in-pune',
    siteName: 'JVM Institute',
    images: [
      {
        url: '/dataengineeringwithgenai.jpeg',
        width: 1200,
        height: 630,
        alt: 'Data Engineering with GenAI Course in Pune - JVM Institute',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Data Engineering with GenAI Course in Pune | JVM Institute',
    description: 'Join top-rated Data Engineering with GenAI training in Pune with 100% placement assistance.',
    images: ['/dataengineeringwithgenai.jpeg'],
  },
};

export default function DataEngineeringGenAiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Course',
        name: 'Data Engineering with GenAI Course in Pune',
        description: 'Advanced training program combining Data Engineering with Generative AI, PySpark, LLM pipelines, and Vector DBs.',
        provider: {
          '@type': 'EducationalOrganization',
          name: 'JVM Institute',
          sameAs: 'https://jvminstitute.com',
          url: 'https://jvminstitute.com',
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}
