// components/sections/Hero.tsx
'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

interface AutomationItem {
  img: string;
  text: string;
}

const automationItems: AutomationItem[] = [
  {
    img: "https://placehold.co/600x400/FF5A28/FFFFFF?text=Strategic+Blueprint+%7C+Perception+Shift",
    text: "Strategic brand architecture that earns trust and drives valuation."
  },
  {
    img: "https://placehold.co/600x400/E63E17/FFFFFF?text=AI+Positioning+%7C+Market+Intelligence",
    text: "Intelligent systems that elevate positioning & long-term leadership."
  }
];

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [imageOpacity, setImageOpacity] = useState(1);
  const [currentImage, setCurrentImage] = useState(automationItems[0].img);

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

  // Typewriter effect
  useEffect(() => {
    const targetText = automationItems[currentIndex].text;
    let timeout: NodeJS.Timeout;

    if (!isDeleting && displayText.length < targetText.length) {
      timeout = setTimeout(() => {
        setDisplayText(targetText.substring(0, displayText.length + 1));
      }, 70);
    } else if (!isDeleting && displayText.length === targetText.length) {
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 2200);
    } else if (isDeleting && displayText.length > 0) {
      timeout = setTimeout(() => {
        setDisplayText(displayText.substring(0, displayText.length - 1));
      }, 45);
    } else if (isDeleting && displayText.length === 0) {
      setIsDeleting(false);
      const nextIndex = (currentIndex + 1) % automationItems.length;
      setCurrentIndex(nextIndex);
      setImageOpacity(0);
      setTimeout(() => {
        setCurrentImage(automationItems[nextIndex].img);
        setImageOpacity(1);
      }, 150);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentIndex]);

  return (
    <section ref={sectionRef} className="relative pt-28 pb-16 md:pt-32 md:pb-20 overflow-hidden bg-[var(--bg)] text-[var(--text)]">
      {/* ===== MIXED COLOR BACKGROUND ORBS ===== */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-[120px] animate-float-slow" 
           style={{ background: 'radial-gradient(circle, rgba(151, 27, 154, 0.94) 0%, rgba(88, 8, 146, 0.95) 40%, transparent 70%)' }} />
      <div className="absolute top-1/3 left-0 w-[450px] h-[450px] rounded-full blur-[100px] animate-pulse-soft" 
           style={{ background: 'radial-gradient(circle, rgba(5, 49, 179, 0.95) 0%, rgba(246, 241, 242, 0.94) 50%, transparent 80%)', animationDelay: '1s' }} />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full blur-[90px] animate-float" 
           style={{ background: 'radial-gradient(circle, rgba(246, 236, 233, 0.91) 0%, rgba(247, 36, 8, 0.88) 50%, transparent 70%)', animationDelay: '2s' }} />
      <div className="absolute top-2/3 left-1/3 w-[350px] h-[350px] rounded-full blur-[100px] animate-float-slow" 
           style={{ background: 'radial-gradient(circle, rgba(59, 131, 246, 0.94) 0%, rgba(96, 165, 250, 0.96) 40%, transparent 75%)', animationDelay: '0.5s' }} />
      <div className="absolute top-1/2 right-1/3 w-[300px] h-[300px] rounded-full blur-[80px] animate-pulse-soft" 
           style={{ background: 'radial-gradient(circle, rgba(232, 244, 142, 0.89) 0%, rgba(185, 227, 248, 0.96) 50%, transparent 80%)', animationDelay: '3s' }} />
      <div className="absolute -bottom-20 -left-20 w-[500px] h-[500px] rounded-full blur-[110px] animate-float" 
           style={{ background: 'radial-gradient(circle, rgba(253, 7, 23, 0.95) 0%, rgba(19, 19, 248, 0.94) 50%, transparent 70%)' }} />
      <div className="absolute inset-0 opacity-20 pointer-events-none"
           style={{ background: 'linear-gradient(125deg, rgba(49, 43, 48, 0.95) 0%, rgba(61, 59, 58, 0.93) 30%, rgba(59,130,246,0.05) 60%, rgba(255,80,120,0.1) 100%)' }} />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* LEFT SIDE - Brand Statement */}
          <div className="animate-on-scroll">
            <div className="brand-statement">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight mb-5 bg-gradient-to-r from-white via-white to-[#FF9F4A] bg-clip-text text-transparent">
                Premium brands are not built by aesthetics alone.
              </h2>
              <div className="text-[var(--text)] text-base md:text-lg mb-6 leading-relaxed">
                We build strategic brand systems that shape perception, earn trust, and position businesses for{' '}
                <span className="font-semibold animate-gradient bg-gradient-to-r from-[#FF6A3D] via-[#FF9F4A] to-[#4D7CFF] bg-[length:200%_auto] bg-clip-text text-transparent">
                  long-term market leadership
                </span>
                .
              </div>
              
              {/* BUTTONS - Fixed styling */}
              <div className="flex flex-wrap gap-4 mb-6">
                <Link 
                  href="/apply" 
                  className="inline-block bg-gradient-to-r from-orange-500 to-pink-500 text-[#fff] font-semibold py-5 px-10 rounded-full text-sm transition-all duration-300 hover:bg-white/90 hover:-translate-y-0.5 hover:shadow-lg"
                >
                 <h3> Apply to Work Together </h3>
                </Link>
                <Link 
                  href="/audit" 
                  className="inline-block bg-black border border-white/40 text-white font-semibold py-3 px-8 rounded-full text-sm transition-all duration-300 hover:border-white hover:bg-white/5 hover:-translate-y-0.5"
                >
                  <h3>Request Brand Audit</h3>
                </Link>
              </div>

              {/* Stats Mini Cards */}
                <div className="flex flex-wrap gap-6 bg-surface backdrop-blur-sm rounded-3xl p-4 md:p-5 mb-6 border border-surface">
                <div className="stat-mini">
                  <div className="stat-number-mixed text-2xl md:text-3xl">+180%</div>
                  <p className="text-[10px] uppercase tracking-wider text-[var(--text)]">Brand Perception</p>
                </div>
                <div className="stat-mini">
                  <div className="stat-number-mixed text-2xl md:text-3xl">2.7X</div>
                  <p className="text-[10px] uppercase tracking-wider text-[var(--text)]">Conversion Rate</p>
                </div>
                <div className="stat-mini">
                  <div className="stat-number-mixed text-2xl md:text-3xl">+2K</div>
                  <p className="text-[10px] uppercase tracking-wider text-[var(--text)]">Happy clients</p>
                </div>
              </div>

              {/* Before/After Tag */}
              <div className="inline-flex items-center gap-3 bg-[var(--surface-strong)] rounded-full px-4 py-2 text-sm border border-surface">
                <span className="px-3 py-1 rounded-full bg-[var(--surface)] text-muted text-xs">⬤ Outdated positioning</span>
                <span className="text-muted">→</span>
                <span className="px-3 py-1 rounded-full bg-gradient-to-r from-orange-500/30 to-pink-500/30 text-white text-xs">⬤ Clear positioning</span>
                <span className="text-primary text-xs ml-2">Stronger market impact</span>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - Aurora Card + Automation */}
          <div className="space-y-6">
            {/* Aurora Card */}
            <div className="animate-on-scroll">
                  <div className="bg-surface backdrop-blur-sm border rounded-3xl p-5 md:p-6 shadow-2xl"
                    style={{ borderImage: 'linear-gradient(135deg, #FF5A28, #FF80A0, #3B82F6, #A06040) 1', borderWidth: '1px', borderStyle: 'solid' }}>
                <div className="text-xs uppercase tracking-wider mb-2 flex items-center gap-1"
                     style={{ background: 'linear-gradient(135deg, #FF5A28, #FF80A0, #3B82F6)', backgroundClip: 'text', WebkitBackgroundClip: 'text', color: 'transparent' }}>
                  <span>⚡</span> AURORA
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  Intelligence that moves business forward.
                </h3>
                <p className="text-muted text-sm md:text-base mb-5 leading-relaxed">
                  AI-powered solutions designed to elevate performance and drive real impact.
                </p>
                <div className="flex gap-3">
                  <Link href="/get-started" className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-5 py-2 rounded-full text-sm font-semibold hover:from-orange-600 hover:to-pink-600 transition shadow-lg inline-block" style={{ textDecoration: 'none' }}>Get Started</Link>
                  <Link href="/video" className="border border-white/30 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-white/5 transition inline-block" style={{ textDecoration: 'none' }}>Watch Video</Link>
                </div>
              </div>
            </div>

            {/* Automation Block */}
            <div className="animate-on-scroll">
              <div className="bg-surface backdrop-blur-md border rounded-3xl p-5 transition-all" style={{ borderColor: 'rgba(var(--primary-rgb),0.18)' }}>
                <div className="text-xs uppercase tracking-wider mb-3 flex items-center gap-2"
                     style={{ background: 'linear-gradient(135deg, #FF5A28, #FF80A0, #60A5FA)', backgroundClip: 'text', WebkitBackgroundClip: 'text', color: 'transparent' }}>
                  <span>✦</span> AUTOMATED BRAND STORYTELLING <span>✦</span>
                </div>
                <div className="flex flex-col items-center gap-4">
                  <div className="relative w-full max-w-sm mx-auto">
                    <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 via-pink-500 to-blue-500 rounded-2xl blur opacity-30"></div>
                    <img
                      src={currentImage}
                      alt="Brand strategy visual"
                      className="relative w-full h-48 object-cover rounded-2xl shadow-xl border border-white/10 transition-opacity duration-300"
                      style={{ opacity: imageOpacity }}
                    />
                  </div>
                  <div className="bg-[rgba(var(--text-rgb),0.08)] backdrop-blur-sm rounded-full px-5 py-3 w-full text-center min-h-[80px] flex items-center justify-center border border-primary/20">
                      <span className="text-[var(--text)] text-sm md:text-base font-medium">
                        {displayText}
                        <span className="inline-block w-0.5 h-5 ml-1 align-middle"
                              style={{ background: 'linear-gradient(135deg, #FF5A28, #FF80A0, #3B82F6)', animation: 'blink 0.8s step-end infinite' }}></span>
                      </span>
                  </div>
                </div>
                <div className="text-center text-[#6B7195] text-[10px] mt-3">
                  ✨ looped automation — image + animated text ✨
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Metrics Row */}
        <div className="flex flex-wrap justify-between gap-6 bg-[var(--surface)] rounded-3xl p-6 md:p-8 mt-10 border border-surface animate-on-scroll">
          <div className="text-center flex-1 min-w-[120px]">
            <div className="stat-number-mixed text-3xl md:text-4xl">320%</div>
            <div className="text-xs text-[var(--text)] mt-1">Engagement Increase</div>
          </div>
          <div className="text-center flex-1 min-w-[120px]">
            <div className="stat-number-mixed text-3xl md:text-4xl">4.8/5</div>
            <div className="text-xs text-[var(--text)] mt-1">Brand Trust Score</div>
          </div>
          <div className="text-center flex-1 min-w-[120px]">
            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">Strategic</div>
            <div className="text-xs text-[var(--text)] mt-1">Solutions. Real results.</div>
          </div>
        </div>

        {/* Trust Logos */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-10 py-6 mt-6 border-y border-surface animate-on-scroll">
          {['loom', 'Webflow', 'Notion', 'Linear', 'mongoDB', 'slack', 'Brevo', 'ramp'].map((logo) => (
            <span key={logo} className="text-[var(--text)] text-sm md:text-base font-medium tracking-wide hover:text-primary transition-colors cursor-default">
              {logo}
            </span>
          ))}
        </div>

        {/* Happy Row */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-6 animate-on-scroll">
          <div className="text-muted text-sm bg-[var(--surface-strong)] px-5 py-2 rounded-full border border-primary/20">
            ✓ Trusted by ambitious brands worldwide — from early-stage startups to global leaders
          </div>
          <div className="text-[var(--text)] text-sm bg-gradient-to-r from-orange-500/20 to-pink-500/20 px-5 py-2 rounded-full flex items-center gap-2 border border-primary/30">
            <span className="text-orange-400">⭐</span> +2K Happy clients
          </div>
        </div>
      </div>

      <style jsx>{`
        .stat-mini {
          flex: 1;
          text-align: center;
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
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-20px) translateX(10px); }
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-15px) translateX(-10px); }
        }
        @keyframes pulse-soft {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.08); }
        }
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          animation: gradient 3s ease infinite;
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        .animate-float-slow {
          animation: float-slow 10s ease-in-out infinite;
        }
        .animate-pulse-soft {
          animation: pulse-soft 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}