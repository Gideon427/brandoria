// components/sections/Credibility.tsx
'use client';

import { useEffect, useRef } from 'react';
import StatsCard from '@/components/ui/StatsCard';
import GlowCard from '@/components/ui/GlowCard';
import SectionHeading from '@/components/ui/SectionHeading';

const stats = [
  { value: '+320%', label: 'Engagement' },
  { value: '2.7X', label: 'Conversion increase' },
  { value: '+180%', label: 'Brand perception' },
  { value: '250%', label: 'Lead increase' },
  { value: '4.8/5', label: 'Trust score' },
];

const caseStudies = [
  {
    title: 'SaaS Platform',
    before: 'Manage your projects better',
    after: 'Everything connected. Work simplified.',
    metrics: ['2.7X conversion', '+180% perception', '-42% CAC'],
  },
  {
    title: 'E-COMMERCE',
    before: 'Modern living made simple.',
    after: 'From Commodity to Category Leader',
    metrics: ['+320% AOV', '2.3X conversion', '+190% engagement'],
  },
  {
    title: 'HEALTH & WELLNESS',
    before: 'Better health starts here',
    after: 'From Unknown to Unstoppable',
    metrics: ['+400% users', '2.8X conversion', '4.9/5 trust'],
  },
];

export default function Credibility() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 md:py-24 bg-gradient-to-b from-[#FFF8F0] to-white">
      <div className="container-custom">
        <SectionHeading
          title="Credibility is earned. Results make it visible."
          center
          className="animate-on-scroll"
        />

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6 mb-16 animate-on-scroll">
          {stats.map((stat, idx) => (
            <StatsCard key={idx} value={stat.value} label={stat.label} />
          ))}
        </div>

        {/* Case Studies Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {caseStudies.map((study, idx) => (
            <GlowCard key={idx} className="animate-on-scroll">
              <span className="text-sm font-bold text-primary uppercase tracking-wide">{study.title}</span>
              <div className="mt-3 space-y-2">
                <p className="text-xs text-dark/50 line-through">BEFORE: {study.before}</p>
                <p className="font-semibold text-dark">AFTER: {study.after}</p>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {study.metrics.map((m) => (
                  <span key={m} className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">
                    {m}
                  </span>
                ))}
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
}