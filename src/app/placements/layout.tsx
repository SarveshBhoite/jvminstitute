import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Student Placements | 200+ Alumni Placed at Top MNCs - JVM Institute',
  description: 'Explore 200+ verified student placement success stories at JVM Institute Pune. High salary packages up to 24.75 LPA at Accenture, Persistent, TCS, LTI Mindtree & Cognizant.',
  keywords: [
    'JVM Institute Placements',
    'Data Engineering Placements Pune',
    'IT Job Placements Pune',
    'Placed Students JVM Institute',
    'Highest Package Data Engineer Pune'
  ],
  alternates: {
    canonical: 'https://jvminstitute.com/placements',
  },
  openGraph: {
    title: 'Student Placements | 200+ Alumni Placed - JVM Institute',
    description: 'Explore student placement records, company offers & packages up to 24.75 LPA at JVM Institute Pune.',
    url: 'https://jvminstitute.com/placements',
    siteName: 'JVM Institute',
    images: ['/place1.png'],
  },
};

export default function PlacementsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
