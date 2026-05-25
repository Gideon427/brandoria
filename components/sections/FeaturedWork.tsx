// components/sections/FeaturedWork.tsx
'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link'; // ← ADD THIS IMPORT

export default function FeaturedWork() {
  const sectionRef = useRef<HTMLElement>(null);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

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

  const clients = ['loom', 'Webflow', 'Notion', 'Linear', 'mongoDB', 'slack', 'Brevo', 'ramp'];

  // Before/After image data
  const beforeAfterData = {
    before: {
      title: 'Outdated Dashboard UI',
      description: 'Cluttered interface, poor hierarchy, low conversion',
      image: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=600',
      alt: 'Outdated website design example'
    },
    after: {
      title: 'Modern Brand System',
      description: 'Clean hierarchy, emotional design, 2.7X conversion',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600',
      alt: 'Modern brand design example'
    }
  };

  // Alternative images for different case studies
  const caseStudies = [
    {
      name: 'SaaS Platform',
      beforeImg: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=600',
      afterImg: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=600',
      beforeLabel: 'Low engagement, confusing UX',
      afterLabel: '+180% perception, 2.7X conversion'
    },
    {
      name: 'E-Commerce Brand',
      beforeImg: 'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=600',
      afterImg: 'https://images.pexels.com/photos/5632397/pexels-photo-5632397.jpeg?auto=compress&cs=tinysrgb&w=600',
      beforeLabel: 'Commodity pricing, low trust',
      afterLabel: '+320% AOV, category leader'
    }
  ];

  return (
    <section ref={sectionRef} className="py-16 md:py-24 bg-gradient-to-b from-white to-warm">
      <div className="container-custom">
        {/* AURORA Feature Section */}
        <div className="max-w-4xl mx-auto text-center mb-16 animate-on-scroll">
          <div className="inline-block px-4 py-1 bg-primary/10 rounded-full text-primary text-sm font-semibold mb-4">FEATURED</div>
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4">AURORA</h2>
          <p className="text-xl md:text-2xl font-serif italic text-dark/70 mb-3">Intelligence that moves business forward.</p>
          <p className="text-dark/50 mb-6">AI-powered solutions designed to elevate performance and drive real impact.</p>
          <div className="flex justify-center gap-4">
            <Link href="/get-started" className="btn-primary text-sm" style={{ display: 'inline-block', textDecoration: 'none' }}>Get Started</Link>
            <Link href="/video" className="btn-secondary text-sm" style={{ display: 'inline-block', textDecoration: 'none' }}>Watch Video</Link>
          </div>
        </div>

        {/* Before/After Demo - Main Comparison */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-20 animate-on-scroll">
          {/* BEFORE Card */}
          <div 
            className="glass-card p-6 text-center transition-all duration-300 hover:shadow-xl"
            onMouseEnter={() => setHoveredCard('before')}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="text-sm font-mono text-dark/40 mb-2 flex items-center justify-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-500"></span>
              BEFORE
            </div>
            <div className="w-16 h-0.5 bg-gray-300 mx-auto mb-4"></div>
            <div className="relative rounded-xl overflow-hidden mb-4 group">
              <Image
                src={beforeAfterData.before.image}
                alt={beforeAfterData.before.alt}
                width={500}
                height={300}
                className={`w-full h-48 object-cover transition-transform duration-500 ${hoveredCard === 'before' ? 'scale-105' : 'scale-100'}`}
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white text-xs font-medium">View case study →</span>
              </div>
            </div>
            <p className="font-semibold text-dark">{beforeAfterData.before.title}</p>
            <p className="text-dark/50 text-sm mt-1">{beforeAfterData.before.description}</p>
            <div className="mt-3 inline-block px-3 py-1 bg-red-500/10 text-red-600 text-xs rounded-full">
              Poor performance
            </div>
          </div>

          {/* AFTER Card */}
          <div 
            className="glass-card p-6 text-center border-primary/20 bg-gradient-to-br from-white to-primary/5 transition-all duration-300 hover:shadow-xl"
            onMouseEnter={() => setHoveredCard('after')}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="text-sm font-bold text-primary mb-2 flex items-center justify-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              AFTER
            </div>
            <div className="w-16 h-0.5 bg-primary mx-auto mb-4"></div>
            <div className="relative rounded-xl overflow-hidden mb-4 group">
              <Image
                src={beforeAfterData.after.image}
                alt={beforeAfterData.after.alt}
                width={500}
                height={300}
                className={`w-full h-48 object-cover transition-transform duration-500 ${hoveredCard === 'after' ? 'scale-105' : 'scale-100'}`}
              />
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white text-xs font-medium bg-primary/80 px-3 py-1 rounded-full">+180% improvement →</span>
              </div>
            </div>
            <p className="font-semibold text-dark">{beforeAfterData.after.title}</p>
            <p className="text-dark/50 text-sm mt-1">{beforeAfterData.after.description}</p>
            <div className="mt-3 inline-block px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-semibold">
              +180% perception
            </div>
          </div>
        </div>

        {/* Additional Case Studies with Images */}
        <div className="mb-16 animate-on-scroll">
          <h3 className="text-2xl font-serif font-semibold text-center mb-8">Featured Transformations</h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {caseStudies.map((study, idx) => (
              <div key={idx} className="glass-card p-5 transition-all duration-300 hover:shadow-lg">
                <h4 className="font-bold text-lg mb-3 text-dark">{study.name}</h4>
                <div className="grid grid-cols-2 gap-3 mb-3">
                  <div className="relative rounded-lg overflow-hidden">
                    <Image
                      src={study.beforeImg}
                      alt={`${study.name} before`}
                      width={250}
                      height={150}
                      className="w-full h-28 object-cover grayscale hover:grayscale-0 transition-all"
                    />
                    <div className="absolute top-1 left-1 bg-red-500/80 text-white text-[8px] px-1 rounded">BEFORE</div>
                  </div>
                  <div className="relative rounded-lg overflow-hidden">
                    <Image
                      src={study.afterImg}
                      alt={`${study.name} after`}
                      width={250}
                      height={150}
                      className="w-full h-28 object-cover"
                    />
                    <div className="absolute top-1 left-1 bg-primary/80 text-white text-[8px] px-1 rounded">AFTER</div>
                  </div>
                </div>
                <div className="flex justify-between items-center text-xs mt-2">
                  <span className="text-dark/50 line-through">{study.beforeLabel}</span>
                  <span className="text-primary font-semibold">→ {study.afterLabel}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Results Stats */}
        <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto text-center mb-12 animate-on-scroll">
          <div className="p-4 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent">
            <div className="stat-number text-3xl md:text-4xl">320%</div>
            <p className="text-sm text-dark/50">Engagement Increase</p>
          </div>
          <div className="p-4 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent">
            <div className="stat-number text-3xl md:text-4xl">4.8/5</div>
            <p className="text-sm text-dark/50">Brand Trust Score</p>
          </div>
          <div className="p-4 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent">
            <div className="stat-number text-3xl md:text-4xl">+2K</div>
            <p className="text-sm text-dark/50">Happy clients</p>
          </div>
        </div>

        {/* Client Logos */}
        <div className="text-center pt-6 border-t border-primary/10 animate-on-scroll">
          <p className="text-xs uppercase tracking-wider text-dark/40 mb-4">happy clients</p>
          <div className="flex justify-center gap-4 md:gap-8 flex-wrap">
            {clients.map((client) => (
              <span key={client} className="text-dark/40 font-mono text-sm uppercase tracking-wide hover:text-primary/60 transition-colors cursor-default">
                {client}
              </span>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .glass-card {
          background: rgba(255, 251, 240, 0.8);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 90, 40, 0.12);
          border-radius: 1.5rem;
          box-shadow: 0 12px 30px -12px rgba(0, 0, 0, 0.06);
        }
        .stat-number {
          font-weight: 800;
          background: linear-gradient(135deg, #FF5A28, #FF9F4A);
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
        }
      `}</style>
    </section>
  );
}