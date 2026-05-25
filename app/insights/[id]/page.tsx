// app/insights/[id]/page.tsx
'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { notFound, useParams } from 'next/navigation';

// Article data (same as your insights page)
const articles = [
  { 
    id: 1, 
    title: 'Why 87% of decisions are emotional, not logical', 
    category: 'psychology', 
    readTime: '5 min', 
    date: 'Mar 15, 2025', 
    excerpt: 'Understanding the psychology behind brand perception and purchase decisions.',
    content: `
      <p>Every day, we make thousands of decisions. From what to eat for breakfast to which car to buy. But here's the surprising truth: most of those decisions aren't logical at all.</p>
      
      <h2>The Science Behind Emotional Decision Making</h2>
      <p>Research in neuroscience has shown that people with damage to the emotional centers of their brain struggle to make even simple decisions. Without emotion, logic alone isn't enough.</p>
      
      <p>Brands that understand this create emotional connections that bypass rational analysis. They don't just sell products—they sell feelings, identities, and belonging.</p>
      
      <h2>What This Means for Your Brand</h2>
      <p>If 87% of decisions are emotional, then your brand strategy needs to prioritize emotional resonance over feature lists. People don't remember what you said—they remember how you made them feel.</p>
      
      <p>At Brandoria, we engineer perception to create emotional connections that drive preference, loyalty, and premium pricing power.</p>
    `
  },
  { 
    id: 2, 
    title: 'The hidden cost of unclear positioning', 
    category: 'strategy', 
    readTime: '4 min', 
    date: 'Mar 10, 2025', 
    excerpt: 'How ambiguity kills conversions and what to do about it.',
    content: `
      <p>Unclear positioning is the silent killer of conversions. When customers don't immediately understand what you do and why it matters, they leave.</p>
      
      <h2>The Cost of Confusion</h2>
      <p>Every second of ambiguity costs you trust, attention, and revenue. Studies show that websites with clear value propositions convert up to 2.7X more than ambiguous alternatives.</p>
      
      <p>Clarity isn't just about simplicity—it's about removing every doubt from the customer's journey.</p>
      
      <h2>How to Achieve Clarity</h2>
      <p>Start with one core message. One thing you want people to remember. Everything else supports that central idea. At Brandoria, we help brands find and amplify their unique positioning with surgical precision.</p>
    `
  },
  { 
    id: 3, 
    title: 'Perception engineering: The new competitive advantage', 
    category: 'growth', 
    readTime: '7 min', 
    date: 'Mar 5, 2025', 
    excerpt: 'Why leading brands are investing in how they are perceived.',
    content: `
      <p>Perception engineering is the strategic discipline of shaping how people think, feel, and decide about your brand.</p>
      
      <h2>Beyond Traditional Branding</h2>
      <p>Traditional branding focuses on aesthetics. Perception engineering focuses on psychology. It's the difference between looking premium and being perceived as premium.</p>
      
      <p>Leading brands are investing millions in perception engineering because they understand: in a crowded market, perception is the only sustainable differentiator.</p>
      
      <h2>The ROI of Perception</h2>
      <p>Brands with strong perception command premium pricing, enjoy higher loyalty, and spend less on customer acquisition. At Brandoria, we've helped clients achieve +180% perception improvements and 2.7X conversion lifts.</p>
    `
  },
  { 
    id: 4, 
    title: 'Design systems that build trust', 
    category: 'design', 
    readTime: '6 min', 
    date: 'Feb 28, 2025', 
    excerpt: 'How consistency across touchpoints creates credibility.',
    content: `
      <p>Trust isn't built in a single interaction—it's earned through relentless consistency across every touchpoint.</p>
      
      <h2>The Psychology of Consistency</h2>
      <p>When your brand looks and feels the same everywhere, it signals reliability. Inconsistency signals chaos. Which would you trust with your money?</p>
      
      <p>Design systems create the framework for consistency at scale. They ensure every interaction reinforces your brand's credibility.</p>
      
      <h2>Building Your Design System</h2>
      <p>A strong design system includes typography, color, spacing, components, and voice guidelines. At Brandoria, we build systems that scale with your business while maintaining emotional resonance.</p>
    `
  },
  { 
    id: 5, 
    title: 'The relationship between confidence and pricing power', 
    category: 'strategy', 
    readTime: '5 min', 
    date: 'Feb 20, 2025', 
    excerpt: 'How strong brands justify premium pricing.',
    content: `
      <p>Why can Apple charge premium prices? Because they've engineered confidence into every interaction.</p>
      
      <h2>Confidence = Pricing Power</h2>
      <p>When customers are confident in your brand, price becomes secondary. They're not buying a product—they're buying certainty, status, and peace of mind.</p>
      
      <p>Weak brands compete on price. Strong brands compete on perception. At Brandoria, we build the confidence that justifies premium positioning.</p>
      
      <h2>Building Brand Confidence</h2>
      <p>Confidence comes from clarity, consistency, and social proof. Every testimonial, every design choice, every interaction should build confidence in your brand's ability to deliver.</p>
    `
  },
  { 
    id: 6, 
    title: 'Memory, emotion, and brand preference', 
    category: 'psychology', 
    readTime: '8 min', 
    date: 'Feb 15, 2025', 
    excerpt: 'The neuroscience behind why we choose certain brands.',
    content: `
      <p>Memory is the battlefield where brand preference is won or lost.</p>
      
      <h2>How Memory Works</h2>
      <p>Emotional events create stronger memories. That's why people remember how your brand made them feel long after they forget what you said.</p>
      
      <p>Brands that create positive emotional associations build memory structures that drive automatic preference.</p>
      
      <h2>Engineering Memorable Brands</h2>
      <p>Every touchpoint is an opportunity to create emotional memory. At Brandoria, we design experiences that stick—so your brand is top-of-mind when it matters most.</p>
    `
  }
];

export default function ArticlePage() {
  const params = useParams();
  const id = Number(params.id);
  const article = articles.find(a => a.id === id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('visible');
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll('.animate-on-scroll').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  if (!article) {
    notFound();
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden bg-[var(--bg)] text-[var(--text)]">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[120px] opacity-30 animate-float-slow" 
             style={{ background: 'radial-gradient(circle, rgba(255,90,40,0.4) 0%, transparent 70%)' }} />
        <div className="container-custom relative z-10">
          <div className="animate-on-scroll max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-4 flex-wrap">
              <span className="inline-block px-3 py-1 bg-primary/10 rounded-full text-primary text-xs font-semibold uppercase">
                {article.category}
              </span>
              <span className="text-muted text-sm">{article.readTime} read</span>
              <span className="text-muted text-sm">{article.date}</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-[#D4AF37] to-[#FF9F4A] bg-clip-text text-transparent">
              {article.title}
            </h1>
            <p className="text-muted text-lg md:text-xl leading-relaxed">
              {article.excerpt}
            </p>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16 md:py-24 bg-[var(--surface)] text-[var(--text)]">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div 
              className="prose prose-lg animate-on-scroll"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
            
            <div className="mt-12 pt-8 border-t border-surface animate-on-scroll">
              <Link 
                href="/insights" 
                className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all"
              >
                ← Back to all insights
              </Link>
            </div>
          </div>
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