'use client';

import { useRef, useEffect } from 'react';
import Link from 'next/link';

export default function VideoPage() {
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

  const relatedVideos = [
    {
      title: 'Brand Positioning 101',
      description: 'Learn the fundamentals of building a strong, differentiated brand position.',
      thumbnail: 'https://placehold.co/400x225/FF5A28/FFFFFF?text=Brand+Positioning',
    },
    {
      title: 'Perception vs Reality',
      description: 'How to bridge the gap between your brand\'s intended and perceived positioning.',
      thumbnail: 'https://placehold.co/400x225/E63E17/FFFFFF?text=Perception',
    },
    {
      title: 'Building Trust at Scale',
      description: 'Strategies for establishing credibility and trust with your market.',
      thumbnail: 'https://placehold.co/400x225/FF9F4A/FFFFFF?text=Trust+Building',
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

          {/* Main Video */}
          <div className="max-w-4xl mx-auto mb-16 animate-on-scroll">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              AURORA: Intelligence that moves business forward
            </h1>
            <p className="text-[#B0B3C0] text-lg mb-8">
              Discover how AI-powered brand positioning can transform your market perception and drive sustainable growth.
            </p>

            {/* Video Player Placeholder */}
            <div className="relative w-full bg-black/60 rounded-3xl overflow-hidden border border-white/10 mb-8">
              <div className="aspect-video flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-pink-500/20"></div>
                <div className="relative z-10 flex flex-col items-center gap-4">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-r from-orange-500 to-pink-500 flex items-center justify-center hover:scale-110 transition cursor-pointer">
                    <span className="text-4xl">▶</span>
                  </div>
                  <p className="text-white text-center px-4">
                    <strong>Video: The Future of Brand Positioning</strong>
                    <br />
                    <span className="text-[#B0B3C0] text-sm">Duration: 12:45</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Video Description */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 mb-8">
              <h3 className="text-white font-bold text-lg mb-4">In this video:</h3>
              <ul className="space-y-3 text-[#B0B3C0]">
                <li className="flex items-start gap-3">
                  <span className="text-[#FF9F4A]">✓</span>
                  <span>How top brands use strategic positioning to command premium pricing</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#FF9F4A]">✓</span>
                  <span>The 3 components of unshakeable brand perception</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#FF9F4A]">✓</span>
                  <span>Real case studies: How our clients achieved 2.7X conversion rates</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#FF9F4A]">✓</span>
                  <span>A framework you can apply to your brand immediately</span>
                </li>
              </ul>
            </div>

            {/* CTA */}
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/get-started"
                className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-8 py-3 rounded-full font-semibold hover:from-orange-600 hover:to-pink-600 transition"
              >
                Get Started
              </Link>
              <Link
                href="/apply"
                className="border border-white/30 text-white px-8 py-3 rounded-full font-semibold hover:bg-white/5 transition"
              >
                Apply to Work Together
              </Link>
            </div>
          </div>

          {/* Related Videos */}
          <div className="max-w-6xl mx-auto animate-on-scroll">
            <h2 className="text-3xl font-bold text-white mb-8">Related Videos</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedVideos.map((video, i) => (
                <div key={i} className="group cursor-pointer">
                  <div className="relative mb-4 rounded-2xl overflow-hidden border border-white/10 hover:border-orange-500/50 transition">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full aspect-video object-cover group-hover:scale-105 transition duration-300"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-orange-500 to-pink-500 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                        <span className="text-xl">▶</span>
                      </div>
                    </div>
                  </div>
                  <h3 className="text-white font-semibold group-hover:text-orange-400 transition">{video.title}</h3>
                  <p className="text-[#B0B3C0] text-sm">{video.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Video Course Teaser */}
          <div className="max-w-3xl mx-auto mt-16 bg-gradient-to-r from-orange-500/10 to-pink-500/10 border border-orange-500/30 rounded-3xl p-10 md:p-12 text-center animate-on-scroll">
            <h3 className="text-2xl font-bold text-white mb-4">Want to go deeper?</h3>
            <p className="text-[#B0B3C0] mb-6">
              Join our Brand Mastery course and learn the complete framework we use to build category leaders.
            </p>
            <button className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-8 py-3 rounded-full font-semibold hover:from-orange-600 hover:to-pink-600 transition">
              Explore Course
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
