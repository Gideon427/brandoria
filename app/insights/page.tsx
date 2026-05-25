// app/insights/page.tsx
'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

export default function InsightsPage() {
  const [activeCategory, setActiveCategory] = useState('all');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => { entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible'); }); },
      { threshold: 0.1 }
    );
    document.querySelectorAll('.animate-on-scroll').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const categories = ['all', 'strategy', 'psychology', 'design', 'growth'];
  
  const articles = [
    { id:1, title:'Why 87% of decisions are emotional, not logical', category:'psychology', readTime:'5 min', date:'Mar 15, 2025', excerpt:'Understanding the psychology behind brand perception and purchase decisions.' },
    { id:2, title:'The hidden cost of unclear positioning', category:'strategy', readTime:'4 min', date:'Mar 10, 2025', excerpt:'How ambiguity kills conversions and what to do about it.' },
    { id:3, title:'Perception engineering: The new competitive advantage', category:'growth', readTime:'7 min', date:'Mar 5, 2025', excerpt:'Why leading brands are investing in how they are perceived.' },
    { id:4, title:'Design systems that build trust', category:'design', readTime:'6 min', date:'Feb 28, 2025', excerpt:'How consistency across touchpoints creates credibility.' },
    { id:5, title:'The relationship between confidence and pricing power', category:'strategy', readTime:'5 min', date:'Feb 20, 2025', excerpt:'How strong brands justify premium pricing.' },
    { id:6, title:'Memory, emotion, and brand preference', category:'psychology', readTime:'8 min', date:'Feb 15, 2025', excerpt:'The neuroscience behind why we choose certain brands.' }
  ];

  const filtered = activeCategory === 'all' ? articles : articles.filter(a => a.category === activeCategory);

  return (
    <>
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-[var(--bg)] text-[var(--text)]">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[120px] opacity-30 animate-float-slow" style={{ background: 'radial-gradient(circle, rgba(255,90,40,0.4) 0%, transparent 70%)' }} />
        <div className="container-custom relative z-10 text-center">
          <div className="animate-on-scroll max-w-4xl mx-auto">
            <span className="inline-block px-4 py-1 bg-primary/10 rounded-full text-primary text-sm font-semibold mb-5">INSIGHTS</span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-[#D4AF37] to-[#FF9F4A] bg-clip-text text-transparent">Thoughts on perception<br />& brand strategy</h1>
            <p className="text-muted text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">Exploring the intersection of psychology, design, and business growth.</p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-[var(--surface)] text-[var(--text)]">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-3 mb-12 animate-on-scroll">
            {categories.map(cat => (
              <button key={cat} onClick={() => setActiveCategory(cat)} className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${activeCategory === cat ? 'bg-gradient-to-r from-orange-500 to-pink-500 text-white shadow-lg' : 'bg-[var(--surface-strong)] text-muted hover:bg-[var(--surface)]'}`}>
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((article, idx) => (
              <div key={article.id} className="bg-[var(--surface-strong)] rounded-2xl p-6 border border-surface hover:border-primary/30 transition-all animate-on-scroll" style={{ transitionDelay: `${idx * 50}ms` }}>
                <div className="flex justify-between items-start mb-3"><span className="text-xs text-primary/80 uppercase">{article.category}</span><span className="text-muted text-xs">{article.readTime}</span></div>
                <h3 className="text-xl font-bold text-[var(--text)] mb-2 leading-tight">{article.title}</h3>
                <p className="text-muted text-sm mb-4">{article.excerpt}</p>
                <div className="flex justify-between items-center"><span className="text-muted text-xs">{article.date}</span><Link href={`/insights/${article.id}`} className="text-primary text-sm hover:underline">Read more →</Link></div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && <div className="text-center py-12"><p className="text-muted">No articles found in this category.</p></div>}
        </div>
      </section>

      <style jsx>{`
        .container-custom { max-width: 1280px; margin: 0 auto; padding: 0 1.5rem; }
        @media (min-width:768px){ .container-custom { padding: 0 2rem; } }
        @keyframes float-slow { 0%,100%{transform:translateY(0px);} 50%{transform:translateY(-15px);} }
        .animate-float-slow { animation:float-slow 10s ease-in-out infinite; }
        .animate-on-scroll { opacity:0; transform:translateY(25px); transition:opacity 0.6s cubic-bezier(0.2,0.9,0.4,1.1), transform 0.6s cubic-bezier(0.2,0.9,0.4,1.1); }
        .animate-on-scroll.visible { opacity:1; transform:translateY(0); }
      `}</style>
    </>
  );
}