// components/layout/Navbar.tsx
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import ThemeToggle from '@/components/ui/ThemeToggle';

const navLinks = [
  { name: 'Work', href: '/work' },
  { name: 'Services', href: '/services' },
  { name: 'Approach', href: '/approach' },
  { name: 'About', href: '/about' },
  { name: 'Insights', href: '/insights' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? 'py-4'
            : 'py-6'
        }`}
      >

        {/* BACKGROUND */}
        <div
          className={`absolute inset-0 transition-all duration-500 ${
            scrolled
              ? 'bg-black/20 backdrop-blur-2xl border-b border-white/10'
              : 'bg-transparent'
          }`}
        />

        {/* GRADIENT GLOW */}
        <div
          className="absolute inset-0 opacity-60 pointer-events-none"
          style={{
            background:
              'linear-gradient(90deg, rgba(255,255,255,0.02) 0%, rgba(255,140,80,0.04) 40%, rgba(72,120,255,0.05) 100%)',
          }}
        />

        <div className="container-custom relative z-10 flex justify-between items-center">

          {/* LOGO */}
          <Link
            href="/"
            className="flex items-center gap-3 group"
          >

            {/* ICON WITH CONTINUOUS SPINNING */}
            <div className="relative w-8 h-8 rounded-xl overflow-hidden bg-gradient-to-br from-[#FF7A3D] via-[#FF5C35] to-[#4D7CFF] shadow-lg shadow-orange-500/20 flex items-center justify-center animate-spin" style={{ animationDuration: '3s' }}>
              <div className="w-3 h-3 bg-white rounded-sm rotate-45"></div>
            </div>

            {/* TEXT */}
            <span className="text-xl md:text-2xl font-semibold tracking-[0.22em] text-white uppercase">
              BRANDORIA
            </span>
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-2">

            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="
                  relative
                  px-5
                  py-3
                  rounded-2xl
                  text-sm
                  font-medium
                  text-[#D5D8E2]
                  transition-all
                  duration-300
                  hover:text-white
                  hover:bg-white/5
                  border
                  border-transparent
                  hover:border-white/10
                  backdrop-blur-xl
                  group
                "
              >

                {/* HOVER GLOW */}
                <div
                  className="
                    absolute
                    inset-0
                    rounded-2xl
                    opacity-0
                    group-hover:opacity-100
                    transition-opacity
                    duration-300
                  "
                  style={{
                    background:
                      'linear-gradient(135deg, rgba(255,120,60,0.12), rgba(72,120,255,0.10))',
                  }}
                />

                <span className="relative z-10">
                  {link.name}
                </span>
              </Link>
            ))}

            {/* CTA */}
            <Link
              href="/apply"
              className="
                ml-2
                px-6
                py-3
                rounded-2xl
                text-sm
                font-semibold
                text-white
                transition-all
                duration-300
                hover:scale-[1.03]
                shadow-xl
              "
              style={{
                background:
                  'linear-gradient(135deg, #FF6A3D 0%, #FF875F 50%, #FF5A36 100%)',
              }}
            >
              Let’s Talk
            </Link>

            <div className="ml-2">
              <ThemeToggle />
            </div>
          </div>

          {/* MOBILE */}
          <div className="md:hidden flex items-center gap-3">

            <ThemeToggle />

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
              className="
                relative
                w-12
                h-12
                rounded-2xl
                border
                border-white/10
                bg-white/5
                backdrop-blur-xl
                flex
                items-center
                justify-center
                transition-all
                duration-300
              "
            >

              <div className="flex flex-col gap-1.5">
                <span
                  className={`block h-[2px] w-5 bg-white rounded-full transition-all duration-300 ${
                    mobileMenuOpen
                      ? 'rotate-45 translate-y-[7px]'
                      : ''
                  }`}
                />

                <span
                  className={`block h-[2px] w-5 bg-white rounded-full transition-all duration-300 ${
                    mobileMenuOpen
                      ? 'opacity-0'
                      : ''
                  }`}
                />

                <span
                  className={`block h-[2px] w-5 bg-white rounded-full transition-all duration-300 ${
                    mobileMenuOpen
                      ? '-rotate-45 -translate-y-[7px]'
                      : ''
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        <div
          className={`
            md:hidden
            absolute
            top-full
            left-0
            w-full
            transition-all
            duration-500
            overflow-hidden
            ${
              mobileMenuOpen
                ? 'opacity-100 visible translate-y-0'
                : 'opacity-0 invisible -translate-y-4'
            }
          `}
        >

          <div
            className="
              mx-4
              mt-3
              rounded-[2rem]
              border
              border-white/10
              bg-[#0B0C12]/90
              backdrop-blur-2xl
              p-5
              shadow-2xl
            "
          >

            <div className="flex flex-col gap-2">

              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-2xl
                    border
                    border-transparent
                    px-5
                    py-4
                    text-[#D6D8E3]
                    transition-all
                    duration-300
                    hover:text-white
                    hover:border-white/10
                    hover:bg-white/5
                  "
                >

                  <div
                    className="
                      absolute
                      inset-0
                      opacity-0
                      group-hover:opacity-100
                      transition-opacity
                      duration-300
                    "
                    style={{
                      background:
                        'linear-gradient(135deg, rgba(255,120,60,0.10), rgba(72,120,255,0.08))',
                    }}
                  />

                  <span className="relative z-10">
                    {link.name}
                  </span>
                </Link>
              ))}

              <Link
                href="/apply"
                onClick={() => setMobileMenuOpen(false)}
                className="
                  mt-3
                  rounded-2xl
                  px-5
                  py-4
                  text-center
                  text-white
                  font-semibold
                  shadow-xl
                "
                style={{
                  background:
                    'linear-gradient(135deg, #FF6A3D 0%, #FF875F 50%, #FF5A36 100%)',
                }}
              >
                Let’s Talk
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}