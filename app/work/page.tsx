// app/work/page.tsx
'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function WorkPage() {
  const sectionRef = useRef<HTMLElement>(null);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

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

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      id: 1,
      title: 'Nexus SaaS Platform',
      category: 'Digital Transformation',
      before: 'Low engagement, confusing UX, 1.2% conversion',
      after: '+320% engagement, 2.7X conversion, -42% CAC',
      image: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=800',
      logo: '🚀',
      metrics: ['+320%', '2.7X', '-42%']
    },
    {
      id: 2,
      title: 'Luxe Wellness Collective',
      category: 'Brand Identity & Positioning',
      before: 'Commodity pricing, low trust, 2.1% repeat rate',
      after: '+400% users, 2.8X conversion, 4.9/5 trust',
      image: 'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=800',
      logo: '🌸',
      metrics: ['+400%', '2.8X', '4.9/5']
    },
    {
      id: 3,
      title: 'FinTech One',
      category: 'Perception Engineering',
      before: 'Outdated positioning, weak authority signals',
      after: '+250% leads, +180% perception, industry leader',
      image: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=800',
      logo: '💰',
      metrics: ['+250%', '+180%', 'Leader']
    },
    {
      id: 4,
      title: 'Aurora AI',
      category: 'Product Launch & Digital Experience',
      before: 'Unclear value prop, low beta signups',
      after: '2.3X conversion, +190% engagement, waitlist overflow',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
      logo: '⚡',
      metrics: ['2.3X', '+190%', 'Waitlist']
    },
    {
      id: 5,
      title: 'Heritage Retail Co.',
      category: 'Brand Modernization',
      before: 'Aging perception, declining market share',
      after: '+75% traffic, +320% AOV, category leader',
      image: 'https://images.pexels.com/photos/5632397/pexels-photo-5632397.jpeg?auto=compress&cs=tinysrgb&w=800',
      logo: '🏛️',
      metrics: ['+75%', '+320%', 'Leader']
    },
    {
      id: 6,
      title: 'Velocity Logistics',
      category: 'B2B Brand Strategy',
      before: 'Invisible to decision makers, low trust',
      after: '2.7X qualified leads, +180% perception, enterprise clients',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      logo: '📦',
      metrics: ['2.7X', '+180%', 'Enterprise']
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-[var(--surface)] to-[var(--bg)] text-[var(--text)]">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[120px] opacity-30 animate-float-slow"
             style={{ background: 'radial-gradient(circle, rgba(255,90,40,0.4) 0%, transparent 70%)' }} />
        
        <div className="container-custom relative z-10 text-center">
          <div className="animate-on-scroll max-w-4xl mx-auto">
            <span className="inline-block px-4 py-1 bg-primary/10 rounded-full text-primary text-sm font-semibold mb-5">
              OUR WORK
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-[#D4AF37] to-[#FF9F4A] bg-clip-text text-transparent">
              Brands we've transformed
            </h1>
            <p className="text-[#B0B3C0] text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              From invisible to irresistible. See how we've shaped perception and driven growth for ambitious brands.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 md:py-24 bg-[var(--surface)] text-[var(--text)]">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, idx) => (
              <div 
                key={project.id}
                className="group relative bg-gradient-to-br from-[#0C0F1A] to-[#07090F] rounded-2xl overflow-hidden border border-white/10 hover:border-primary/30 transition-all duration-500 animate-on-scroll"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
                style={{ transitionDelay: `${idx * 50}ms` }}
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className={`w-full h-full object-cover transition-transform duration-700 ${hoveredProject === project.id ? 'scale-110' : 'scale-100'}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#05050A] via-transparent to-transparent" />
                  <div className="absolute top-4 left-4 w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-pink-500 flex items-center justify-center text-xl shadow-lg">
                    {project.logo}
                  </div>
                </div>
                <div className="p-6">
                  <span className="text-xs text-primary/80 uppercase tracking-wider">{project.category}</span>
                  <h3 className="text-xl font-bold text-white mt-2 mb-3">{project.title}</h3>
                  
                  <div className="space-y-2 mb-4">
                    <p className="text-muted text-xs line-through">Before: {project.before}</p>
                    <p className="text-[#FF9F4A] text-xs font-semibold">After: {project.after}</p>
                  </div>
                  
                  <div className="flex gap-2 mb-4">
                    {project.metrics.map((metric) => (
                      <span key={metric} className="text-[10px] px-2 py-1 rounded-full bg-[var(--surface)] text-[var(--text)] font-mono">
                        {metric}
                      </span>
                    ))}
                  </div>
                  
                  <Link 
                    href={`/work/${project.id}`} 
                    className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-primary transition group-hover:gap-3"
                  >
                    View Case Study <span className="text-primary">→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Summary */}
      <section className="py-16 md:py-24 bg-[var(--surface)] text-[var(--text)]">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8 text-center animate-on-scroll">
            <div className="p-8 bg-gradient-to-br from-[#0C0F1A] to-[#07090F] rounded-2xl border border-white/10">
              <div className="stat-number-mixed text-5xl font-bold mb-2">120+</div>
              <p className="text-white font-semibold mb-1">Brands Transformed</p>
              <p className="text-[#6B7195] text-sm">From startups to global leaders</p>
            </div>
            <div className="p-8 bg-gradient-to-br from-[#0C0F1A] to-[#07090F] rounded-2xl border border-white/10">
              <div className="stat-number-mixed text-5xl font-bold mb-2">$2.1M</div>
              <p className="text-white font-semibold mb-1">Revenue Leaks Found</p>
              <p className="text-[#6B7195] text-sm">Uncovered through brand audits</p>
            </div>
            <div className="p-8 bg-gradient-to-br from-[#0C0F1A] to-[#07090F] rounded-2xl border border-white/10">
              <div className="stat-number-mixed text-5xl font-bold mb-2">2.7X</div>
              <p className="text-white font-semibold mb-1">Average Conversion Lift</p>
              <p className="text-[#6B7195] text-sm">Across redesigned experiences</p>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .container-custom {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 1.5rem;
        }
        @media (min-width: 768px) {
          .container-custom { padding: 0 2rem; }
        }
        .stat-number-mixed {
          font-weight: 800;
          background: linear-gradient(135deg, #FF5A28, #FF80A0, #3B82F6, #A06040);
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
          background-size: 200% 200%;
          animation: gradientShift 4s ease infinite;
        }
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        .animate-float-slow {
          animation: float-slow 10s ease-in-out infinite;
        }
        .animate-on-scroll {
          opacity: 0;
          transform: translateY(25px);
          transition: opacity 0.6s cubic-bezier(0.2, 0.9, 0.4, 1.1), transform 0.6s cubic-bezier(0.2, 0.9, 0.4, 1.1);
        }
        .animate-on-scroll.visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </>
  );
}