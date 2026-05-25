// app/page.tsx
'use client';

import Hero from '@/components/sections/Hero';
import CTA from '@/components/sections/CTA';
import WorkPage from './work/page';
import ServicesPage from './services/page';
import ApplyPage from './apply/page';
import InsightsPage from './insights/page';
import ApproachPage from './approach/page';
import AboutPage from './about/page';
export default function Home() {
  return (
    <>
      <Hero />
      <CTA />
      <WorkPage />
      <ServicesPage />
      <ApplyPage />
      <InsightsPage />
      <ApproachPage />
      <AboutPage />
    </>
  );
}