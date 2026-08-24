import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Data Engineering Course in Pune | Best Data Engineering Classes & Training Institute',
  description: 'Top-rated Data Engineering Course in Pune with 100% Placement Assistance. Master PySpark, AWS, Databricks, Snowflake, Apache Airflow, SQL & Python with real-time projects at JVM Institute Pune.',
  keywords: [
    'Data Engineering Course in Pune',
    'Data Engineering Classes in Pune',
    'Data Engineering Training in Pune',
    'Data Engineering Course Pune',
    'Data Engineering Class in Pune',
    'Data Engineer Course in Pune',
    'Best Data Engineering Institute in Pune',
    'PySpark Training Pune',
    'Databricks Course Pune',
    'Big Data Course in Pune',
    'SQL and Python for Data Engineering Pune',
    'JVM Institute Data Engineering'
  ],
  alternates: {
    canonical: 'https://jvminstitute.com/data-engineering-course-in-pune',
  },
  openGraph: {
    title: 'Data Engineering Course in Pune | 100% Placement - JVM Institute',
    description: 'Master SQL, Python, PySpark, AWS, Snowflake & Databricks with hands-on projects and 100% placement support in Pune.',
    url: 'https://jvminstitute.com/data-engineering-course-in-pune',
    siteName: 'JVM Institute',
    images: [
      {
        url: '/dataengineering.jpeg',
        width: 1200,
        height: 630,
        alt: 'Data Engineering Course in Pune - JVM Institute',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Data Engineering Course in Pune | JVM Institute',
    description: 'Join top-ranked Data Engineering training in Pune. PySpark, Databricks, AWS & 100% Placement Assistance.',
    images: ['/dataengineering.jpeg'],
  },
};

export default function DataEngineeringLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Course',
        name: 'Data Engineering Master Track Course in Pune',
        description: 'Comprehensive industry-aligned Data Engineering training covering SQL, Python, PySpark, AWS, Databricks, Airflow & Snowflake with 100% placement support.',
        provider: {
          '@type': 'EducationalOrganization',
          name: 'JVM Institute',
          sameAs: 'https://jvminstitute.com',
          url: 'https://jvminstitute.com',
        },
        hasCourseInstance: {
          '@type': 'CourseInstance',
          courseMode: 'Blended',
          courseWorkload: 'PT12W',
          instructor: {
            '@type': 'Person',
            name: 'Jayesh Bhoite',
            jobTitle: 'Lead Data Architect & Founder',
          },
        },
      },
      {
        '@type': 'EducationalOrganization',
        name: 'JVM Institute Pune',
        url: 'https://jvminstitute.com',
        logo: 'https://jvminstitute.com/jvm_logo-bg.png',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Pune',
          addressRegion: 'Maharashtra',
          addressCountry: 'IN',
        },
        areaServed: 'Pune',
        description: 'Premier Data Engineering and AI Tech Training Institute in Pune.',
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Which is the best Data Engineering course in Pune?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'JVM Institute provides the premier Data Engineering course in Pune with hands-on training in SQL, Python, PySpark, AWS, Databricks, Kafka, and 100% placement assistance.',
            },
          },
          {
            '@type': 'Question',
            name: 'Does JVM Institute offer placement assistance for Data Engineering classes in Pune?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes, JVM Institute provides 100% placement support, including ATS resume building, 1-on-1 mock interviews, and direct referrals to over 250+ partner MNCs.',
            },
          },
        ],
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
