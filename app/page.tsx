// app/page.tsx
'use client';

import Hero from '@/components/sections/Hero';
import Credibility from '@/components/sections/Credibility';
import Philosophy from '@/components/sections/Philosophy';
import FeaturedWork from '@/components/sections/FeaturedWork';
import CTA from '@/components/sections/CTA';
import WorkPage from './work/page';
import ServicesPage from './services/page';
import ApplyPage from './apply/page';
import AboutPage from './about/page';
import InsightsPage from './insights/page';
import ApproachPage from './approach/page';
export default function Home() {
  return (
    <>
      <Hero />
      <Credibility />
      <Philosophy />
      <FeaturedWork />
      <CTA />
      <WorkPage />
      <ServicesPage />
      <ApplyPage />
      <AboutPage />
      <InsightsPage />
      <ApproachPage />
    </>
  );
}