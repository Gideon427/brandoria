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
    img: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=600",
    text: "Strategic brand architecture that earns trust and drives valuation."
  },
  {
    img: "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=600",
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
  
  // Mouse position for parallax orbs
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  // Scroll animation observer
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

  // Parallax mouse move effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 30;
      const y = (e.clientY / window.innerHeight - 0.5) * 30;
      setMousePosition({ x, y });
    };
    
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
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
      
      {/* ===== PARALLAX BACKGROUND ORBS ===== */}
      <div 
        className="parallax-orb absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-[120px] animate-float-slow"
        style={{ 
          background: 'radial-gradient(circle, rgba(151, 27, 154, 0.94) 0%, rgba(88, 8, 146, 0.95) 40%, transparent 70%)',
          transform: `translate(${mousePosition.x * 0.3}px, ${mousePosition.y * 0.3 + scrollY * 0.1}px)`
        }} 
      />
      
      <div 
        className="parallax-orb absolute top-1/3 left-0 w-[450px] h-[450px] rounded-full blur-[100px] animate-pulse-soft"
        style={{ 
          background: 'radial-gradient(circle, rgba(5, 49, 179, 0.95) 0%, rgba(246, 241, 242, 0.94) 50%, transparent 80%)',
          transform: `translate(${-mousePosition.x * 0.2}px, ${-mousePosition.y * 0.2 + scrollY * 0.05}px)`,
          animationDelay: '1s'
        }} 
      />
      
      <div 
        className="parallax-orb absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full blur-[90px] animate-float"
        style={{ 
          background: 'radial-gradient(circle, rgba(246, 236, 233, 0.91) 0%, rgba(247, 36, 8, 0.88) 50%, transparent 70%)',
          transform: `translate(${mousePosition.x * 0.15}px, ${-mousePosition.y * 0.25 + scrollY * 0.08}px)`,
          animationDelay: '2s'
        }} 
      />
      
      <div 
        className="parallax-orb absolute top-2/3 left-1/3 w-[350px] h-[350px] rounded-full blur-[100px] animate-float-slow"
        style={{ 
          background: 'radial-gradient(circle, rgba(59, 131, 246, 0.94) 0%, rgba(96, 165, 250, 0.96) 40%, transparent 75%)',
          transform: `translate(${-mousePosition.x * 0.25}px, ${mousePosition.y * 0.15 + scrollY * 0.03}px)`,
          animationDelay: '0.5s'
        }} 
      />
      
      <div 
        className="parallax-orb absolute top-1/2 right-1/3 w-[300px] h-[300px] rounded-full blur-[80px] animate-pulse-soft"
        style={{ 
          background: 'radial-gradient(circle, rgba(232, 244, 142, 0.89) 0%, rgba(185, 227, 248, 0.96) 50%, transparent 80%)',
          transform: `translate(${mousePosition.x * 0.2}px, ${-mousePosition.y * 0.2}px)`,
          animationDelay: '3s'
        }} 
      />
      
      <div 
        className="parallax-orb absolute -bottom-20 -left-20 w-[500px] h-[500px] rounded-full blur-[110px] animate-float"
        style={{ 
          background: 'radial-gradient(circle, rgba(253, 7, 23, 0.95) 0%, rgba(19, 19, 248, 0.94) 50%, transparent 70%)',
          transform: `translate(${-mousePosition.x * 0.1}px, ${mousePosition.y * 0.1}px)`
        }} 
      />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 opacity-20 pointer-events-none"
        style={{ background: 'linear-gradient(125deg, rgba(49, 43, 48, 0.95) 0%, rgba(61, 59, 58, 0.93) 30%, rgba(59,130,246,0.05) 60%, rgba(255,80,120,0.1) 100%)' }} 
      />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* LEFT SIDE - Brand Statement */}
          <div className="animate-on-scroll">
            <div className="brand-statement">
              <h1 className="font-semibold animate-gradient text-3xl sm:text-4xl md:text-[4.2rem] bg-gradient-to-r from-[#FF6A3D] via-[#FF9F4A] to-[#4D7CFF] bg-[length:200%_auto] bg-clip-text text-transparent">
                     PREMIUM
                <br />
                BRANDS ARE
                <br />
                 NOT BUILT BY
                 <br />
                  AESTHETICS ALONE.
              </h1>
              
              <div className="text-[var(--text)] text-base md:text-lg mb-6 leading-relaxed">
                We build strategic brand systems that shape perception, earn trust, and position businesses for{' '}
                <span className="font-semibold animate-gradient bg-gradient-to-r from-[#FF6A3D] via-[#FF9F4A] to-[#4D7CFF] bg-[length:200%_auto] bg-clip-text text-transparent">
                  long-term market leadership
                </span>.
              </div>
              
              {/* BUTTONS with shine effect */}
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <Link 
                  href="/apply" 
                  className="group relative overflow-hidden rounded-full bg-gradient-to-r from-orange-500 to-pink-500 text-white font-semibold py-3 px-6 sm:py-4 sm:px-8 w-full sm:w-auto text-center transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
                >
                  <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-white/0 via-white/30 to-white/0 transition-transform duration-500 group-hover:translate-x-full" />
                  <span className="relative z-10">Apply to Work Together</span>
                </Link>
                
                <Link 
                  href="/audit" 
                  className="group relative overflow-hidden rounded-full bg-[var(--surface-strong)] border border-[var(--border)] text-[var(--text)] font-semibold py-3 px-6 sm:py-4 sm:px-8 w-full sm:w-auto text-center transition-all duration-300 hover:scale-[1.02] hover:border-primary/50"
                >
                  <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0 transition-transform duration-500 group-hover:translate-x-full" />
                  <span className="relative z-10">Request Brand Audit</span>
                </Link>
              </div>

              {/* Stats Mini Cards with Progress Bar */}
              <div className="flex flex-wrap gap-6 bg-[var(--surface)] backdrop-blur-sm rounded-3xl p-4 md:p-5 mb-6 border border-[var(--border)]">
                <div className="group stat-mini flex-1 text-center">
                  <div className="stat-number-mixed text-2xl md:text-3xl">+180%</div>
                  <p className="text-[10px] uppercase tracking-wider text-[var(--text-secondary)]">Brand Perception</p>
                  <div className="mt-2 h-[2px] w-0 rounded-full bg-gradient-to-r from-orange-500 to-pink-500 transition-all duration-700 group-hover:w-full mx-auto" />
                </div>
                <div className="group stat-mini flex-1 text-center">
                  <div className="stat-number-mixed text-2xl md:text-3xl">2.7X</div>
                  <p className="text-[10px] uppercase tracking-wider text-[var(--text-secondary)]">Conversion Rate</p>
                  <div className="mt-2 h-[2px] w-0 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 transition-all duration-700 group-hover:w-full mx-auto" />
                </div>
                <div className="group stat-mini flex-1 text-center">
                  <div className="stat-number-mixed text-2xl md:text-3xl">+2K</div>
                  <p className="text-[10px] uppercase tracking-wider text-[var(--text-secondary)]">Happy clients</p>
                  <div className="mt-2 h-[2px] w-0 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 transition-all duration-700 group-hover:w-full mx-auto" />
                </div>
              </div>

              {/* Before/After Tag */}
              <div className="inline-flex items-center gap-3 bg-[var(--surface-strong)] rounded-full px-4 py-2 text-sm border border-[var(--border)]">
                <span className="px-3 py-1 rounded-full bg-[var(--surface)] text-[var(--text-secondary)] text-xs">⬤ Outdated positioning</span>
                <span className="text-[var(--text-secondary)]">→</span>
                <span className="px-3 py-1 rounded-full bg-gradient-to-r from-orange-500/30 to-pink-500/30 text-white text-xs">⬤ Clear positioning</span>
                <span className="text-primary text-xs ml-2">Stronger market impact</span>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - Aurora Card + Automation */}
          <div className="space-y-6">
            {/* Aurora Card with hover effect */}
            <div className="animate-on-scroll group">
              <div className="relative bg-[var(--surface)] backdrop-blur-sm border rounded-3xl p-5 md:p-6 shadow-2xl transition-all duration-500 hover:scale-[1.02]">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="relative z-10">
                  <div className="text-xs uppercase tracking-wider mb-2 flex items-center gap-1"
                    style={{ background: 'linear-gradient(135deg, #FF5A28, #FF80A0, #3B82F6)', backgroundClip: 'text', WebkitBackgroundClip: 'text', color: 'transparent' }}>
                    <span className="animate-pulse">⚡</span> AURORA
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                    Intelligence that moves business forward.
                  </h3>
                  <p className="text-[var(--text-secondary)] text-sm md:text-base mb-5 leading-relaxed">
                    AI-powered solutions designed to elevate performance and drive real impact.
                  </p>
                  <div className="flex gap-3">
                    <Link href="/get-started" className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-5 py-2 rounded-full text-sm font-semibold hover:from-orange-600 hover:to-pink-600 transition shadow-lg hover:scale-105 inline-block">Get Started</Link>
                    <Link href="/video" className="border border-white/30 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-white/5 transition hover:scale-105 inline-block">Watch Video</Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Automation Block with Typewriter */}
            <div className="animate-on-scroll group">
              <div className="bg-[var(--surface)] backdrop-blur-md border rounded-3xl p-5 transition-all duration-500 hover:scale-[1.01]" style={{ borderColor: 'rgba(var(--primary-rgb),0.18)' }}>
                <div className="text-xs uppercase tracking-wider mb-3 flex items-center gap-2"
                  style={{ background: 'linear-gradient(135deg, #FF5A28, #FF80A0, #60A5FA)', backgroundClip: 'text', WebkitBackgroundClip: 'text', color: 'transparent' }}>
                  <span className="animate-bounce">✦</span> AUTOMATED BRAND STORYTELLING <span className="animate-bounce-delay">✦</span>
                </div>
                <div className="flex flex-col items-center gap-4">
                  <div className="relative w-full max-w-sm mx-auto">
                    <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 via-pink-500 to-blue-500 rounded-2xl blur opacity-30 group-hover:opacity-60 transition-opacity duration-500"></div>
                    <img
                      src={currentImage}
                      alt="Brand strategy visual"
                      className="relative w-full h-48 object-cover rounded-2xl shadow-xl border border-white/10 transition-all duration-500 group-hover:scale-105"
                      style={{ opacity: imageOpacity }}
                    />
                  </div>
                  <div className="bg-[rgba(var(--text-rgb),0.08)] backdrop-blur-sm rounded-full px-5 py-3 w-full text-center min-h-[80px] flex items-center justify-center border border-primary/20">
                    <span className="text-[var(--text)] text-sm md:text-base font-medium">
                      {displayText}
                      <span className="inline-block w-0.5 h-5 ml-1 align-middle animate-blink"
                        style={{ background: 'linear-gradient(135deg, #FF5A28, #FF80A0, #3B82F6)' }} />
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
        <div className="flex flex-wrap justify-between gap-6 bg-[var(--surface)] rounded-3xl p-6 md:p-8 mt-10 border border-[var(--border)] animate-on-scroll">
          <div className="group text-center flex-1 min-w-[120px]">
            <div className="stat-number-mixed text-3xl md:text-4xl transition-all duration-300 group-hover:scale-110">320%</div>
            <div className="text-xs text-[var(--text-secondary)] mt-1">Engagement Increase</div>
            <div className="mt-2 h-[2px] w-0 rounded-full bg-gradient-to-r from-orange-500 to-pink-500 transition-all duration-700 group-hover:w-full mx-auto" />
          </div>
          <div className="group text-center flex-1 min-w-[120px]">
            <div className="stat-number-mixed text-3xl md:text-4xl transition-all duration-300 group-hover:scale-110">4.8/5</div>
            <div className="text-xs text-[var(--text-secondary)] mt-1">Brand Trust Score</div>
            <div className="mt-2 h-[2px] w-0 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 transition-all duration-700 group-hover:w-full mx-auto" />
          </div>
          <div className="group text-center flex-1 min-w-[120px]">
            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-400 via-pink-400 to-blue-400 bg-clip-text text-transparent transition-all duration-300 group-hover:scale-110">Strategic</div>
            <div className="text-xs text-[var(--text-secondary)] mt-1">Solutions. Real results.</div>
            <div className="mt-2 h-[2px] w-0 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-700 group-hover:w-full mx-auto" />
          </div>
        </div>

        {/* Trust Logos */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-10 py-6 mt-6 border-y border-[var(--border)] animate-on-scroll">
          {['loom', 'Webflow', 'Notion', 'Linear', 'mongoDB', 'slack', 'Brevo', 'ramp'].map((logo, idx) => (
            <span 
              key={logo} 
              className="text-[var(--text-secondary)] text-sm md:text-base font-medium tracking-wide hover:text-primary transition-all duration-300 hover:scale-110 cursor-default animate-fade-in"
              style={{ animationDelay: `${idx * 50}ms` }}
            >
              {logo}
            </span>
          ))}
        </div>

        {/* Happy Row */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-6 animate-on-scroll">
          <div className="text-[var(--text-secondary)] text-sm bg-[var(--surface-strong)] px-5 py-2 rounded-full border border-primary/20 transition-all duration-300 hover:scale-105">
            ✓ Trusted by ambitious brands worldwide — from early-stage startups to global leaders
          </div>
          <div className="text-[var(--text)] text-sm bg-gradient-to-r from-orange-500/20 to-pink-500/20 px-5 py-2 rounded-full flex items-center gap-2 border border-primary/30 transition-all duration-300 hover:scale-105">
            <span className="text-orange-400 animate-pulse">⭐⭐⭐</span> +2K Happy clients
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
        
        @keyframes bounce-delay {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
        }
        
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0px);
          }
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
        
        .animate-blink {
          animation: blink 0.8s step-end infinite;
        }
        
        .animate-bounce {
          animation: bounce-delay 1s ease-in-out infinite;
        }
        
        .animate-bounce-delay {
          animation: bounce-delay 1s ease-in-out infinite;
          animation-delay: 0.5s;
        }
        
        .animate-fade-in {
          opacity: 0;
          animation: fade-in 0.5s ease forwards;
        }
        
        .animate-on-scroll {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.7s cubic-bezier(0.2, 0.9, 0.4, 1.1), transform 0.7s cubic-bezier(0.2, 0.9, 0.4, 1.1);
        }
        
        .animate-on-scroll.visible {
          opacity: 1;
          transform: translateY(0);
        }
        
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
      `}</style>
    </section>
  );
}