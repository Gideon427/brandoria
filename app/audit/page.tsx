'use client';

import { useRef, useEffect, useState } from 'react';
import Link from 'next/link';

export default function AuditPage() {
  const sectionRef = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    website: '',
  });
  const [submitted, setSubmitted] = useState(false);

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Audit request submitted:', formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: '', email: '', website: '' });
  };

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

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl">
            {/* Left: Description */}
            <div className="animate-on-scroll">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight mb-6 bg-gradient-to-r from-white via-white to-[#FF9F4A] bg-clip-text text-transparent">
                Brand Perception Audit
              </h1>
              <p className="text-[#B0B3C0] text-lg mb-6 leading-relaxed">
                Get a comprehensive analysis of how your brand is perceived in the market. We'll identify perception gaps, positioning weaknesses, and $3,500+ in revenue leaks.
              </p>

              {/* What's Included */}
              <div className="space-y-4 mb-8">
                <h3 className="text-white font-semibold text-lg">What's Included:</h3>
                <ul className="space-y-3">
                  {[
                    'Perception mapping analysis',
                    'Competitive positioning review',
                    'Message architecture assessment',
                    'Brand identity consistency audit',
                    'Revenue leak identification',
                    'Custom recommendations report',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-[#B0B3C0]">
                      <span className="text-[#FF9F4A] font-bold">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Value Prop */}
              <div className="bg-gradient-to-r from-orange-500/10 to-pink-500/10 border border-orange-500/30 rounded-2xl p-6 mb-8">
                <p className="text-white font-semibold mb-2">Find $3,500+ in revenue leaks or it's free</p>
                <p className="text-[#B0B3C0] text-sm">If we don't identify actionable opportunities worth at least $3,500, the audit is completely free.</p>
              </div>

              {/* Timeline */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                <h3 className="text-white font-semibold mb-4">Timeline</h3>
                <div className="space-y-3 text-sm text-[#B0B3C0]">
                  <div className="flex justify-between">
                    <span>Day 1:</span>
                    <span>Discovery call & brand analysis</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Day 2:</span>
                    <span>Deep-dive research & assessment</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Day 3:</span>
                    <span>Strategic recommendations report</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div className="animate-on-scroll">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-10 sticky top-24">
                <div className="mb-8">
                  <div className="inline-block bg-gradient-to-r from-orange-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                    Special Offer: $699 Audit → Complete in 48hrs
                  </div>
                </div>

                {submitted ? (
                  <div className="text-center py-12">
                    <div className="text-4xl mb-4">✓</div>
                    <h3 className="text-white font-semibold text-lg mb-2">Thank you!</h3>
                    <p className="text-[#B0B3C0] mb-6">We'll be in touch within 48 hours to schedule your discovery call.</p>
                    <Link href="/" className="inline-flex items-center gap-2 text-[#FF9F4A] hover:text-orange-400 transition">
                      ← Return home
                    </Link>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name */}
                    <div>
                      <label className="block text-white font-semibold mb-2">Your Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-[#9A9EB0] focus:outline-none focus:border-orange-500/50 transition"
                        required
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-white font-semibold mb-2">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@company.com"
                        className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-[#9A9EB0] focus:outline-none focus:border-orange-500/50 transition"
                        required
                      />
                    </div>

                    {/* Website */}
                    <div>
                      <label className="block text-white font-semibold mb-2">Brand Website</label>
                      <input
                        type="url"
                        name="website"
                        value={formData.website}
                        onChange={handleChange}
                        placeholder="https://yourwebsite.com"
                        className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-[#9A9EB0] focus:outline-none focus:border-orange-500/50 transition"
                        required
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-orange-500 to-pink-500 text-white px-6 py-3 rounded-full font-semibold hover:from-orange-600 hover:to-pink-600 transition shadow-lg"
                    >
                      Get Your Audit ($699)
                    </button>

                    <p className="text-center text-[#9A9EB0] text-xs">
                      Risk-free: Find $3,500+ in revenue leaks or it's free.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
