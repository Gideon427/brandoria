// components/sections/CTA.tsx
'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import GlowCard from '@/components/ui/GlowCard';
import GradientOrb from '@/components/effects/GradientOrb';

export default function CTA() {
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
    <section ref={sectionRef} className="py-20">
      <div className="container-custom">
        <GlowCard className="p-10 md:p-16 text-center max-w-4xl mx-auto relative overflow-hidden animate-on-scroll">
          <GradientOrb className="-top-20 -right-20 w-64 h-64 opacity-30" />
          <GradientOrb className="-bottom-20 -left-20 w-64 h-64 opacity-20" color="blue" />

          <h3 className="text-2xl md:text-3xl font-serif font-bold">
            This is for brands serious about positioning, perception, and growth.
          </h3>

          <div className="flex flex-wrap justify-center gap-5 mt-8">
            <Link href="/audit" className="inline-block">
              <Button variant="primary" size="lg">
                Get $699 Audit → 48hrs
              </Button>
            </Link>
            <Link href="/apply" className="inline-block">
              <Button variant="secondary" size="lg">
                Apply to Work Together
              </Button>
            </Link>
          </div>

          <p className="text-primary font-semibold mt-5 text-sm">Find $3,500+ in revenue leaks or it's free</p>
          <p className="text-dark/40 text-xs mt-6">Trusted by ambitious brands worldwide — from startups to global leaders.</p>
        </GlowCard>
      </div>
    </section>
  );
}