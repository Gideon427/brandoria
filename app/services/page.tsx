
// app/services/page.tsx
'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function ServicesPage() {
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

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      id: 1,
      title: 'Brand Strategy & Positioning',
      description: 'We uncover your brand\'s unique position in the market through deep audience research, competitive analysis, and psychological frameworks.',
      longDescription: 'Your brand isn\'t what you say it is. It\'s what they perceive. We build positioning that shapes how people think, feel, and decide.',
      icon: '🎯',
      metrics: ['+180% perception', '2.7X conversion', '87% influence'],
      color: 'from-orange-500 to-red-500'
    },
    {
      id: 2,
      title: 'Visual Identity System',
      description: 'Strategic design that communicates authority, trust, and emotional resonance across every brand touchpoint.',
      longDescription: 'Not just a logo. A complete visual language that works across digital, print, and environmental applications.',
      icon: '✨',
      metrics: ['+320% engagement', '4.8/5 trust', '2.3X recall'],
      color: 'from-pink-500 to-rose-500'
    },
    {
      id: 3,
      title: 'Digital Experience Design',
      description: 'High-conversion websites and interfaces built on clarity, psychology, and seamless user journeys.',
      longDescription: 'Every pixel serves a purpose. We design digital experiences that remove friction and drive action.',
      icon: '💻',
      metrics: ['+250% leads', '-42% CAC', '2.7X conversion'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 4,
      title: 'Perception Engineering',
      description: 'Advanced frameworks that shape how your audience perceives value, trust, and authority.',
      longDescription: 'We engineer every interaction to build confidence and reduce friction in the buyer journey.',
      icon: '🧠',
      metrics: ['+180% trust', '4.9/5 score', '320% growth'],
      color: 'from-purple-500 to-indigo-500'
    },
    {
      id: 5,
      title: 'Messaging & Voice',
      description: 'Crystal-clear communication that resonates emotionally and drives action at every stage.',
      longDescription: 'Words matter. We craft messaging that cuts through noise and creates emotional connection.',
      icon: '✍️',
      metrics: ['+190% engagement', '2.8X response', '75% retention'],
      color: 'from-teal-500 to-green-500'
    },
    {
      id: 6,
      title: 'Brand Audit & Analytics',
      description: 'Data-driven analysis that uncovers revenue leaks and opportunities for brand optimization.',
      longDescription: 'Find $3,500+ in revenue leaks or it\'s free. Real data. Real insights. Real growth.',
      icon: '📊',
      metrics: ['$2.1M found', '120+ audits', '48hr delivery'],
      color: 'from-amber-500 to-orange-500'
    }
  ];

  const processSteps = [
    { step: '01', title: 'Discover', description: 'Deep research into your market, audience, and competitive landscape.' },
    { step: '02', title: 'Strategize', description: 'Positioning framework and strategic roadmap development.' },
    { step: '03', title: 'Create', description: 'Design and messaging execution across all touchpoints.' },
    { step: '04', title: 'Launch', description: 'Strategic rollout and performance measurement.' },
    { step: '05', title: 'Evolve', description: 'Continuous optimization and brand evolution.' }
  ];

  const clients = ['loom', 'Webflow', 'Notion', 'Linear', 'mongoDB', 'slack', 'Brevo', 'ramp'];

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-[var(--bg)] text-[var(--text)]">
        {/* Background Orbs */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[120px] opacity-30 animate-float-slow"
             style={{ background: 'radial-gradient(circle, rgba(255,90,40,0.4) 0%, transparent 70%)' }} />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full blur-[100px] opacity-20 animate-pulse-soft"
             style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.3) 0%, transparent 70%)' }} />
        
        <div className="container-custom relative z-10 text-center">
          <div className="animate-on-scroll max-w-4xl mx-auto">
            <span className="inline-block px-4 py-1 bg-primary/10 rounded-full text-primary text-sm font-semibold mb-5">
              WHAT WE DO
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-[#D4AF37] to-[#FF9F4A] bg-clip-text text-transparent">
              Services that shape<br />how brands are perceived
            </h1>
            <p className="text-muted text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              We don't just offer services. We build strategic systems that transform how your audience thinks, feels, and decides.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24 bg-[var(--surface)] text-[var(--text)]">
        <div className="container-custom">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[var(--text)] mb-4">
              Strategic capabilities
            </h2>
            <p className="text-muted max-w-2xl mx-auto">
              Every service is built on the intersection of psychology, design, and business strategy
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, idx) => (
              <div 
                key={service.id}
                className="group relative bg-[var(--surface-strong)] rounded-2xl p-6 border border-surface hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 animate-on-scroll"
                style={{ transitionDelay: `${idx * 50}ms` }}
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-[var(--text)] mb-2">{service.title}</h3>
                <p className="text-muted text-sm leading-relaxed mb-4">{service.description}</p>
                <p className="text-muted text-xs italic mb-4">{service.longDescription}</p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {service.metrics.map((metric) => (
                    <span key={metric} className="text-[10px] px-2 py-1 rounded-full bg-[var(--surface-strong)] text-primary">
                      {metric}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-24 bg-[var(--surface)] text-[var(--text)]">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll">
              <span className="inline-block px-4 py-1 bg-primary/10 rounded-full text-primary text-sm font-semibold mb-4">
                OUR PROCESS
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-[var(--text)] mb-4">
                From perception to<br />positioning to impact
              </h2>
              <p className="text-muted mb-6 leading-relaxed">
                We follow a proven methodology that ensures every brand touchpoint works together to build trust and drive conversion.
              </p>
              <div className="space-y-4">
                {processSteps.map((step) => (
                  <div key={step.step} className="flex gap-4 items-start group cursor-pointer">
                    <div className="text-2xl font-bold bg-gradient-to-r from-primary to-[#FF9F4A] bg-clip-text text-transparent min-w-[60px]">
                      {step.step}
                    </div>
                    <div>
                      <h4 className="font-semibold text-[var(--text)] group-hover:text-primary transition">{step.title}</h4>
                      <p className="text-muted text-sm">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="animate-on-scroll relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-blue-500/20 rounded-3xl blur-2xl opacity-30" />
              <div className="relative bg-[var(--surface-strong)] rounded-2xl p-8 border border-surface">
                <div className="text-center mb-6">
                  <div className="text-5xl mb-3">⚡</div>
                  <h3 className="text-2xl font-bold text-[var(--text)]">Ready to transform?</h3>
                  <p className="text-muted text-sm mt-2">Get a $699 brand audit — find $3,500+ in revenue leaks or it's free</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Link href="/apply" className="text-center bg-gradient-to-r from-orange-500 to-pink-500 text-white px-6 py-3 rounded-full text-sm font-semibold hover:from-orange-600 hover:to-pink-600 transition shadow-lg">
                    Start Your Audit
                  </Link>
                  <Link href="/contact" className="text-center border border-surface text-[var(--text)] px-6 py-3 rounded-full text-sm font-medium hover:bg-[var(--surface-strong)] transition">
                    Talk to Strategy
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16 md:py-24 bg-[var(--surface)] text-[var(--text)]">
        <div className="container-custom">
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[var(--text)] mb-4">
              Proven impact across industries
            </h2>
            <p className="text-muted max-w-2xl mx-auto">
              Real results from brands who trusted us with their perception
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 animate-on-scroll">
            <div className="text-center p-6 bg-[var(--surface-strong)] rounded-2xl border border-surface">
              <div className="stat-number-mixed text-4xl font-bold">+180%</div>
              <p className="text-muted text-sm mt-2">Brand Perception</p>
            </div>
            <div className="text-center p-6 bg-[var(--surface-strong)] rounded-2xl border border-surface">
              <div className="stat-number-mixed text-4xl font-bold">2.7X</div>
              <p className="text-muted text-sm mt-2">Conversion Rate</p>
            </div>
            <div className="text-center p-6 bg-[var(--surface-strong)] rounded-2xl border border-surface">
              <div className="stat-number-mixed text-4xl font-bold">320%</div>
              <p className="text-muted text-sm mt-2">Engagement</p>
            </div>
            <div className="text-center p-6 bg-[var(--surface-strong)] rounded-2xl border border-surface">
              <div className="stat-number-mixed text-4xl font-bold">4.9/5</div>
              <p className="text-muted text-sm mt-2">Client Trust Score</p>
            </div>
          </div>

          {/* Client Logos */}
          <div className="text-center pt-6 border-t border-surface animate-on-scroll">
            <p className="text-xs uppercase tracking-wider text-muted mb-4">Trusted by ambitious brands worldwide</p>
            <div className="flex justify-center gap-6 md:gap-10 flex-wrap">
              {clients.map((client) => (
                <span key={client} className="text-muted text-sm md:text-base font-medium tracking-wide hover:text-orange-400 transition-colors cursor-default">
                  {client}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-[var(--surface)] text-[var(--text)]">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-[var(--surface-strong)] rounded-3xl p-10 md:p-12 border border-primary/20 animate-on-scroll">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-[var(--text)] mb-4">
                Ready to build a brand people can't ignore?
              </h2>
              <p className="text-muted mb-8 max-w-xl mx-auto">
                Join 120+ brands that transformed their positioning and unlocked measurable growth.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/apply" className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-8 py-3 rounded-full font-semibold hover:from-orange-600 hover:to-pink-600 transition shadow-lg inline-block">
                  Start Your $699 Audit
                </Link>
                <Link href="/contact" className="border border-surface text-[var(--text)] px-8 py-3 rounded-full font-medium hover:bg-[var(--surface-strong)] transition inline-block">
                  Schedule a Call
                </Link>
              </div>
              <p className="text-muted text-xs mt-6">Find $3,500+ in revenue leaks or it's free</p>
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
          .container-custom {
            padding: 0 2rem;
          }
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
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-15px) translateX(-10px); }
        }
        @keyframes pulse-soft {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.08); }
        }
        .animate-float-slow {
          animation: float-slow 10s ease-in-out infinite;
        }
        .animate-pulse-soft {
          animation: pulse-soft 6s ease-in-out infinite;
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