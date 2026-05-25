// app/page.tsx
'use client';

import Hero from '@/components/sections/Hero';
import Credibility from '@/components/sections/Credibility';
import Philosophy from '@/components/sections/Philosophy';
import FeaturedWork from '@/components/sections/FeaturedWork';
import CTA from '@/components/sections/CTA';

export default function Home() {
  return (
    <>
      <Hero />
      <Credibility />
      <Philosophy />
      <FeaturedWork />
      <CTA />
    </>
  );
}