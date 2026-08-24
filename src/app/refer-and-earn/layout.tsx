import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Refer & Earn | Earn ₹2000 per Student Referral - JVM Institute',
  description: 'Refer your friends to JVM Institute Pune and earn ₹2,000 cash reward for every successful course enrollment. Direct bank transfer payout.',
  keywords: [
    'JVM Institute Refer and Earn',
    'Student Referral Program Pune',
    'Earn Money Referring Courses'
  ],
  alternates: {
    canonical: 'https://jvminstitute.com/refer-and-earn',
  },
  openGraph: {
    title: 'Refer & Earn ₹2000 | JVM Institute',
    description: 'Earn ₹2,000 cash reward for every student referral at JVM Institute Pune.',
    url: 'https://jvminstitute.com/refer-and-earn',
    siteName: 'JVM Institute',
    images: ['/jvm_logo-bg.png'],
  },
};

export default function ReferAndEarnLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
