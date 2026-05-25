'use client';

import { useRef, useEffect, useState } from 'react';
import Link from 'next/link';

export default function ApplyPage() {
  const sectionRef = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  return (
    <main className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
      {/* Background Orbs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-[120px] animate-float-slow opacity-30" 
           style={{ background: 'radial-gradient(circle, rgba(255,90,40,0.35) 0%, rgba(255,140,60,0.15) 40%, transparent 70%)' }} />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full blur-[100px] animate-pulse-soft opacity-20" 
           style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.3) 0%, rgba(96,165,250,0.12) 40%, transparent 75%)' }} />

      <section ref={sectionRef} className="relative z-10 pt-24 pb-16">
        <div className="container-custom">
          {/* Back Link */}
          <Link href="/" className="inline-flex items-center gap-2 text-muted hover:text-[var(--text)] transition mb-12 animate-on-scroll">
            <span>←</span> Back to home
          </Link>

          {/* Heading */}
          <div className="max-w-3xl animate-on-scroll mb-12">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight mb-6 bg-gradient-to-r from-[#D4AF37] to-[#FF9F4A] bg-clip-text text-transparent">
              Let's Build Something Exceptional Together
            </h1>
            <p className="text-muted text-lg md:text-xl leading-relaxed">
              Tell us about your brand, your vision, and your goals. We'll evaluate the opportunity and get back to you within 48 hours with a custom proposal.
            </p>
          </div>

          {/* Form */}
          <div className="max-w-2xl animate-on-scroll">
            <form onSubmit={handleSubmit} className="space-y-6 bg-[var(--surface)] backdrop-blur-sm border border-surface rounded-3xl p-8 md:p-10">
              {/* Name */}
              <div>
                <label className="block text-[var(--text)] font-semibold mb-2">Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full bg-[rgba(var(--text-rgb),0.08)] border border-surface rounded-xl px-4 py-3 text-[var(--text)] placeholder:text-muted focus:outline-none focus:border-orange-500/50 transition"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-[var(--text)] font-semibold mb-2">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@company.com"
                  className="w-full bg-[rgba(var(--text-rgb),0.08)] border border-surface rounded-xl px-4 py-3 text-[var(--text)] placeholder:text-muted focus:outline-none focus:border-orange-500/50 transition"
                  required
                />
              </div>

              {/* Company */}
              <div>
                <label className="block text-[var(--text)] font-semibold mb-2">Company / Brand</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Your company name"
                  className="w-full bg-[rgba(var(--text-rgb),0.08)] border border-surface rounded-xl px-4 py-3 text-[var(--text)] placeholder:text-muted focus:outline-none focus:border-orange-500/50 transition"
                  required
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-[var(--text)] font-semibold mb-2">Tell us about your project</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="What are your brand challenges? What's your ideal outcome?"
                  rows={5}
                  className="w-full bg-[rgba(var(--text-rgb),0.08)] border border-surface rounded-xl px-4 py-3 text-[var(--text)] placeholder:text-muted focus:outline-none focus:border-orange-500/50 transition resize-none"
                  required
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-orange-500 to-pink-500 text-white px-6 py-3 rounded-full font-semibold hover:from-orange-600 hover:to-pink-600 transition shadow-lg"
              >
                Send Application
              </button>

              <p className="text-center text-muted text-sm">
                We'll review your application and respond within 48 hours.
              </p>
            </form>
          </div>

          {/* Info Cards */}
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mt-16 animate-on-scroll">
            <div className="bg-[var(--surface)] backdrop-blur-sm border border-surface rounded-2xl p-6">
              <div className="text-[#FF9F4A] text-2xl mb-3">⚡</div>
              <h3 className="text-[var(--text)] font-semibold mb-2">Fast Turnaround</h3>
              <p className="text-muted text-sm">We evaluate applications and respond with custom proposals in 48 hours.</p>
            </div>

            <div className="bg-[var(--surface)] backdrop-blur-sm border border-surface rounded-2xl p-6">
              <div className="text-[#FF9F4A] text-2xl mb-3">🎯</div>
              <h3 className="text-[var(--text)] font-semibold mb-2">Selective Partners</h3>
              <p className="text-muted text-sm">We work with brands serious about positioning, perception, and growth.</p>
            </div>

            <div className="bg-[var(--surface)] backdrop-blur-sm border border-surface rounded-2xl p-6">
              <div className="text-[#FF9F4A] text-2xl mb-3">💡</div>
              <h3 className="text-[var(--text)] font-semibold mb-2">Custom Solutions</h3>
              <p className="text-muted text-sm">Every proposal is tailored to your specific brand challenges and goals.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
