// app/approach/page.tsx
'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';

export default function ApproachPage() {
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

  const principles = [
    {
      title: 'Human First',
      description: 'We start with human psychology, not design trends. Every decision is rooted in how people actually think, feel, and decide.',
      icon: '🧠',
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'Clarity Over Noise',
      description: 'We remove confusion and make the message unmistakable. In a world of endless information, clarity is the ultimate competitive advantage.',
      icon: '🎯',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Trust Through Consistency',
      description: 'Every touchpoint reinforces credibility. Trust isn\'t built in a single interaction—it\'s earned through relentless consistency.',
      icon: '🔗',
      color: 'from-teal-500 to-green-500'
    },
    {
      title: 'Emotion Creates Movement',
      description: 'Emotion gets attention. Clarity gets action. We engineer both to drive meaningful results for your brand.',
      icon: '⚡',
      color: 'from-pink-500 to-rose-500'
    }
  ];

  const methodology = [
    { step: '01', title: 'Discover', description: 'We immerse ourselves in your brand, market, and audience. Deep research uncovers opportunities you never knew existed.', duration: '1-2 weeks' },
    { step: '02', title: 'Strategize', description: 'We build a positioning framework that defines your unique place in the market and creates emotional differentiation.', duration: '2-3 weeks' },
    { step: '03', title: 'Create', description: 'We bring the strategy to life through design, messaging, and experiences that resonate at every touchpoint.', duration: '3-6 weeks' },
    { step: '04', title: 'Launch', description: 'We roll out your new brand system with precision, ensuring every interaction builds trust and drives action.', duration: '1-2 weeks' },
    { step: '05', title: 'Evolve', description: 'We measure, optimize, and evolve your brand continuously. Perception engineering never stops.', duration: 'Ongoing' }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-[#05050A]">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[120px] opacity-30 animate-float-slow"
             style={{ background: 'radial-gradient(circle, rgba(255,90,40,0.4) 0%, transparent 70%)' }} />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full blur-[100px] opacity-20 animate-pulse-soft"
             style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.3) 0%, transparent 70%)' }} />
        
        <div className="container-custom relative z-10 text-center">
          <div className="animate-on-scroll max-w-4xl mx-auto">
            <span className="inline-block px-4 py-1 bg-primary/10 rounded-full text-primary text-sm font-semibold mb-5">
              OUR METHODOLOGY
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-white to-[#FF9F4A] bg-clip-text text-transparent">
              How we build<br />brands that lead
            </h1>
            <p className="text-[#B0B3C0] text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              A proven methodology rooted in psychology, driven by data, and executed with precision.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-[#05050A] to-[#0A0A12]">
        <div className="container-custom">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
              Branding is not decoration. It is perception.
            </h2>
            <p className="text-[#B0B3C0] max-w-2xl mx-auto">
              People don't respond to visuals alone. They respond to confidence, emotional positioning, trust, clarity, and perceived value.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {principles.map((principle, idx) => (
              <div key={principle.title} className="text-center p-6 bg-gradient-to-br from-[#0C0F1A] to-[#07090F] rounded-2xl border border-white/10 hover:border-primary/30 transition-all animate-on-scroll">
                <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${principle.color} flex items-center justify-center text-3xl mb-4`}>
                  {principle.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{principle.title}</h3>
                <p className="text-[#9A9EB0] text-sm leading-relaxed">{principle.description}</p>
              </div>
            ))}
          </div>

          {/* Methodology Timeline */}
          <div className="animate-on-scroll">
            <h2 className="text-3xl font-serif font-bold text-white text-center mb-12">Our 5‑Phase Process</h2>
            <div className="space-y-6">
              {methodology.map((item, idx) => (
                <div key={item.step} className="flex flex-col md:flex-row gap-6 p-6 bg-gradient-to-br from-[#0C0F1A] to-[#07090F] rounded-2xl border border-white/10 hover:border-primary/30 transition-all">
                  <div className="md:w-24">
                    <div className="text-4xl font-bold bg-gradient-to-r from-primary to-[#FF9F4A] bg-clip-text text-transparent">{item.step}</div>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap justify-between items-start mb-2">
                      <h3 className="text-xl font-bold text-white">{item.title}</h3>
                      <span className="text-xs text-primary/60 px-2 py-1 rounded-full bg-primary/10">{item.duration}</span>
                    </div>
                    <p className="text-[#9A9EB0] text-sm leading-relaxed">{item.description}</p>
                  </div>
                  <div className="md:w-12 flex items-center justify-center">
                    <span className="text-2xl text-primary/40">→</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-[#0A0A12]">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center animate-on-scroll">
            <div className="bg-gradient-to-br from-[#0C0F1A] to-[#07090F] rounded-3xl p-10 border border-primary/20">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">Ready to transform your brand?</h3>
              <p className="text-[#B0B3C0] mb-6">Let's apply our methodology to your business</p>
              <Link href="/apply" className="inline-block bg-gradient-to-r from-orange-500 to-pink-500 text-white px-8 py-3 rounded-full font-semibold hover:from-orange-600 hover:to-pink-600 transition shadow-lg">
                Start Your $699 Audit
              </Link>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .container-custom { max-width: 1280px; margin: 0 auto; padding: 0 1.5rem; }
        @media (min-width: 768px) { .container-custom { padding: 0 2rem; } }
        @keyframes float-slow { 0%,100% { transform: translateY(0px); } 50% { transform: translateY(-15px); } }
        @keyframes pulse-soft { 0%,100% { opacity: 0.3; transform: scale(1); } 50% { opacity: 0.6; transform: scale(1.08); } }
        .animate-float-slow { animation: float-slow 10s ease-in-out infinite; }
        .animate-pulse-soft { animation: pulse-soft 6s ease-in-out infinite; }
        .animate-on-scroll { opacity: 0; transform: translateY(25px); transition: opacity 0.6s cubic-bezier(0.2, 0.9, 0.4, 1.1), transform 0.6s cubic-bezier(0.2, 0.9, 0.4, 1.1); }
        .animate-on-scroll.visible { opacity: 1; transform: translateY(0); }
      `}</style>
    </>
  );
}