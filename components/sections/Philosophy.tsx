// components/sections/Philosophy.tsx
'use client';

import { useEffect, useRef } from 'react';

export default function Philosophy() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

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

    // Play video when section becomes visible
    if (videoRef.current) {
      videoRef.current.play().catch((e) => {
        console.log('Video autoplay prevented:', e);
      });
    }

    return () => observer.disconnect();
  }, []);

  const beliefs = [
    { title: 'Human First', desc: 'We start with human psychology, not design trends.' },
    { title: 'Clarity Over Noise', desc: 'We remove confusion and make the message unmistakable.' },
    { title: 'Trust Through Consistency', desc: 'Every touchpoint reinforces credibility.' },
    { title: 'Emotion Creates Movement', desc: 'Emotion gets attention. Clarity gets action.' },
  ];

  const impacts = [
    { stat: '87%', label: 'of decisions are influenced by perception and brand confidence' },
    { stat: 'BRANDORIA', label: 'People remember how brands feel. Emotion creates memory, and memory drives preference.' },
    { stat: 'STRATEGIC TRUTH', label: 'Strong positioning creates trust. Clarity removes doubt. Doubt kills conversions.' },
    { stat: 'MARKET REALITY', label: 'Confidence changes pricing power. A strong brand shifts how people justify the cost.' },
    { stat: 'BUSINESS IMPACT', label: 'Higher conversion with strong positioning and clear messaging.' },
  ];

  return (
    <section ref={sectionRef} className="py-16 md:py-24 relative overflow-hidden">
      {/* Local Background Video Loop */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
          poster="/videos/poster.jpg"
        >
          <source src="/videos/brand-perception-loop.mp4" type="video/mp4" />
          <source src="/videos/brand-perception-loop.webm" type="video/webm" />
          {/* Fallback gradient if video fails to load */}
          <div className="absolute inset-0 bg-gradient-to-br from-warm to-primary/5" />
        </video>
        {/* Dark/Warm Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-warm/95 via-warm/90 to-warm/95" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-blue-500/5 mix-blend-overlay" />
      </div>

      <div className="container-custom relative z-10">
        {/* Main Quote */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
          <h2 className="heading-lg mb-4">Branding is not decoration.<br />It is perception.</h2>
          <p className="text-dark/70 text-lg leading-relaxed">
            People do not respond to visuals alone. They respond to confidence, emotional positioning, trust, clarity, communication, and perceived value.
          </p>
          <p className="text-dark/80 font-medium mt-4 italic">
            We build brands that shape how people think, feel, and decide — across every touchpoint.
          </p>
        </div>

        {/* OUR BELIEF Section */}
        <div className="mb-16 animate-on-scroll">
          <h3 className="text-2xl md:text-3xl font-serif font-bold mb-8 text-center">OUR BELIEF</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {beliefs.map((belief) => (
              <div key={belief.title} className="p-6 glass-card text-center hover:shadow-lg transition-shadow backdrop-blur-sm">
                <h4 className="font-bold text-lg mb-2 text-primary">{belief.title}</h4>
                <p className="text-dark/60 text-sm">{belief.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* BRAND IMPACT Section */}
        <div className="animate-on-scroll">
          <h3 className="text-2xl md:text-3xl font-serif font-bold mb-8 text-center">BRAND IMPACT</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {impacts.map((impact, idx) => (
              <div key={idx} className="p-6 glass-card backdrop-blur-sm">
                <div className="stat-number text-2xl md:text-3xl font-bold mb-2">{impact.stat}</div>
                <p className="text-dark/60 text-sm leading-relaxed">{impact.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* STRATEGIC POSITIONING Footer */}
        <div className="text-center mt-12 pt-8 animate-on-scroll">
          <div className="inline-block p-6 glass-card backdrop-blur-sm">
            <p className="text-xl md:text-2xl font-serif font-semibold">
              Better perception. Stronger positioning. Bigger impact.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}