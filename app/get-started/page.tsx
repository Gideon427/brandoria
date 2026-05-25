'use client';

import { useRef, useEffect } from 'react';
import Link from 'next/link';

export default function GetStartedPage() {
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

  const steps = [
    {
      number: '01',
      title: 'Discovery Call',
      description: 'We learn about your brand, market position, and goals to understand the opportunity.',
      duration: '30 mins',
    },
    {
      number: '02',
      title: 'Strategic Analysis',
      description: 'Our team conducts a deep-dive analysis of your positioning, perception, and competitive landscape.',
      duration: '1-2 weeks',
    },
    {
      number: '03',
      title: 'Strategy Development',
      description: 'We develop a comprehensive brand strategy tailored to your market opportunity and business goals.',
      duration: '2-3 weeks',
    },
    {
      number: '04',
      title: 'Implementation Support',
      description: 'We guide your team through execution, ensuring your new positioning lands with impact.',
      duration: 'Ongoing',
    },
  ];

  const offerings = [
    {
      icon: '📊',
      title: 'Brand Audit',
      description: 'Deep-dive analysis of your current positioning, perception gaps, and revenue opportunities.',
      price: '$699',
      duration: '48 hours',
      link: '/audit',
    },
    {
      icon: '🎯',
      title: 'Positioning Strategy',
      description: 'Custom brand strategy to reshape market perception and drive long-term leadership.',
      price: 'Custom',
      duration: '4-6 weeks',
      link: '/apply',
    },
    {
      icon: '⚡',
      title: 'Full Brand Transformation',
      description: 'End-to-end brand positioning, messaging, identity, and market launch strategy.',
      price: 'Custom',
      duration: '8-12 weeks',
      link: '/apply',
    },
  ];

  return (
    <main className="min-h-screen bg-[#05050A]">
      {/* Background Orbs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-[120px] animate-float-slow opacity-30" 
           style={{ background: 'radial-gradient(circle, rgba(255,90,40,0.35) 0%, rgba(255,140,60,0.15) 40%, transparent 70%)' }} />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full blur-[100px] animate-pulse-soft opacity-20" 
           style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.3) 0%, rgba(96,165,250,0.12) 40%, transparent 75%)' }} />

      <section ref={sectionRef} className="relative z-10 pt-24 pb-16">
        <div className="container-custom">
          {/* Back Link */}
          <Link href="/" className="inline-flex items-center gap-2 text-[#B0B3C0] hover:text-white transition mb-12 animate-on-scroll">
            <span>←</span> Back to home
          </Link>

          {/* Hero */}
          <div className="max-w-3xl animate-on-scroll mb-20">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight mb-6 bg-gradient-to-r from-white via-white to-[#FF9F4A] bg-clip-text text-transparent">
              Begin Your Brand Transformation Today
            </h1>
            <p className="text-[#B0B3C0] text-lg md:text-xl leading-relaxed">
              Choose the right engagement model for your business. From quick audits to full transformations, we have a solution that matches your needs and timeline.
            </p>
          </div>

          {/* Offerings Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-20 animate-on-scroll">
            {offerings.map((offering, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 flex flex-col hover:border-orange-500/50 transition">
                <div className="text-4xl mb-4">{offering.icon}</div>
                <h3 className="text-white font-bold text-xl mb-2">{offering.title}</h3>
                <p className="text-[#B0B3C0] text-sm mb-6 flex-grow">{offering.description}</p>
                <div className="border-t border-white/10 pt-4 mb-4">
                  <div className="text-[#FF9F4A] font-bold text-lg">{offering.price}</div>
                  <p className="text-[#9A9EB0] text-xs">{offering.duration}</p>
                </div>
                <Link
                  href={offering.link}
                  className="w-full bg-gradient-to-r from-orange-500 to-pink-500 text-white px-4 py-3 rounded-full font-semibold text-center hover:from-orange-600 hover:to-pink-600 transition"
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>

          {/* Process Section */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 animate-on-scroll">Our Process</h2>
            <div className="grid md:grid-cols-4 gap-6 animate-on-scroll">
              {steps.map((step, i) => (
                <div key={i} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                  <div className="text-4xl font-bold bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-white font-bold mb-3">{step.title}</h3>
                  <p className="text-[#B0B3C0] text-sm mb-4">{step.description}</p>
                  <div className="text-[#FF9F4A] text-xs font-semibold">{step.duration}</div>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ Section */}
          <div className="max-w-3xl animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {[
                {
                  q: "How long does the process take?",
                  a: "It depends on your needs. A brand audit takes 48 hours. Full positioning strategy takes 4-6 weeks. We work with your timeline.",
                },
                {
                  q: "What if we're not satisfied?",
                  a: "We stand behind our work. If we don't deliver measurable value, we'll work with you to make it right or offer a full refund.",
                },
                {
                  q: "Do you work with startups?",
                  a: "Absolutely. We work with ambitious brands at any stage—from early-stage startups to global enterprises.",
                },
                {
                  q: "Can we start with an audit?",
                  a: "Yes! Many clients start with a $699 brand audit to validate opportunities before committing to a full engagement.",
                },
              ].map((faq, i) => (
                <div key={i} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                  <h3 className="text-white font-semibold mb-3">{faq.q}</h3>
                  <p className="text-[#B0B3C0] text-sm">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-20 bg-gradient-to-r from-orange-500/10 to-pink-500/10 border border-orange-500/30 rounded-3xl p-10 md:p-12 text-center animate-on-scroll">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">Ready to Transform Your Brand?</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/apply"
                className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-8 py-3 rounded-full font-semibold hover:from-orange-600 hover:to-pink-600 transition"
              >
                Apply to Work Together
              </Link>
              <Link
                href="/audit"
                className="border border-white/30 text-white px-8 py-3 rounded-full font-semibold hover:bg-white/5 transition"
              >
                Get a Brand Audit
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
