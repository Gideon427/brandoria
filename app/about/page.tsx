// app/about/page.tsx
'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';

export default function AboutPage() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll('.animate-on-scroll').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const values = [
    { title: 'Strategic First', desc: 'Every decision is rooted in business outcomes and psychological principles.' },
    { title: 'Uncompromising Quality', desc: 'We don\'t ship work that doesn\'t meet our exacting standards.' },
    { title: 'Partnership Mindset', desc: 'Your success is our success. We invest in long-term relationships.' },
    { title: 'Data-Informed', desc: 'We measure everything and optimize continuously.' }
  ];

  return (
    <>
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-[#05050A]">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[120px] opacity-30 animate-float-slow"
             style={{ background: 'radial-gradient(circle, rgba(255,90,40,0.4) 0%, transparent 70%)' }} />
        <div className="container-custom relative z-10 text-center">
          <div className="animate-on-scroll max-w-4xl mx-auto">
            <span className="inline-block px-4 py-1 bg-primary/10 rounded-full text-primary text-sm font-semibold mb-5">WHO WE ARE</span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-white to-[#FF9F4A] bg-clip-text text-transparent">
              We engineer perception
            </h1>
            <p className="text-[#B0B3C0] text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Brandoria is a strategic brand studio that builds systems shaping how people think, feel, and decide.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gradient-to-b from-[#05050A] to-[#0A0A12]">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="animate-on-scroll">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">Not decoration.<br />Perception.</h2>
              <p className="text-[#B0B3C0] mb-4 leading-relaxed">People don't respond to visuals alone. They respond to confidence, emotional positioning, trust, clarity, communication, and perceived value.</p>
              <p className="text-[#9A9EB0] leading-relaxed">We build brands that shape how people think, feel, and decide — across every touchpoint.</p>
            </div>
            <div className="animate-on-scroll bg-gradient-to-br from-[#0C0F1A] to-[#07090F] rounded-2xl p-8 border border-white/10">
              <div className="grid grid-cols-2 gap-4 text-center">
                <div><div className="stat-number-mixed text-4xl font-bold">120+</div><p className="text-[#9A9EB0] text-sm">Brands Transformed</p></div>
                <div><div className="stat-number-mixed text-4xl font-bold">$2.1M</div><p className="text-[#9A9EB0] text-sm">Leaks Found</p></div>
                <div><div className="stat-number-mixed text-4xl font-bold">2.7X</div><p className="text-[#9A9EB0] text-sm">Avg. Conversion Lift</p></div>
                <div><div className="stat-number-mixed text-4xl font-bold">4.8/5</div><p className="text-[#9A9EB0] text-sm">Trust Score</p></div>
              </div>
            </div>
          </div>

          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="text-3xl font-serif font-bold text-white mb-4">Our Values</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-6 mb-20">
            {values.map((value) => (
              <div key={value.title} className="text-center p-6 bg-gradient-to-br from-[#0C0F1A] to-[#07090F] rounded-2xl border border-white/10 animate-on-scroll">
                <h3 className="text-xl font-bold text-white mb-2">{value.title}</h3>
                <p className="text-[#9A9EB0] text-sm">{value.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center animate-on-scroll">
            <Link href="/apply" className="inline-block bg-gradient-to-r from-orange-500 to-pink-500 text-white px-8 py-3 rounded-full font-semibold hover:from-orange-600 hover:to-pink-600 transition shadow-lg">Work With Us</Link>
          </div>
        </div>
      </section>

      <style jsx>{`
        .container-custom { max-width: 1280px; margin: 0 auto; padding: 0 1.5rem; }
        @media (min-width:768px){ .container-custom { padding: 0 2rem; } }
        .stat-number-mixed { font-weight:800; background:linear-gradient(135deg,#FF5A28,#FF80A0,#3B82F6,#A06040); background-clip:text; -webkit-background-clip:text; color:transparent; background-size:200% 200%; animation:gradientShift 4s ease infinite; }
        @keyframes gradientShift { 0%{background-position:0% 50%;} 50%{background-position:100% 50%;} 100%{background-position:0% 50%;} }
        @keyframes float-slow { 0%,100%{transform:translateY(0px);} 50%{transform:translateY(-15px);} }
        .animate-float-slow { animation:float-slow 10s ease-in-out infinite; }
        .animate-on-scroll { opacity:0; transform:translateY(25px); transition:opacity 0.6s cubic-bezier(0.2,0.9,0.4,1.1), transform 0.6s cubic-bezier(0.2,0.9,0.4,1.1); }
        .animate-on-scroll.visible { opacity:1; transform:translateY(0); }
      `}</style>
    </>
  );
}