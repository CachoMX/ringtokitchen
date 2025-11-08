'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

interface HeaderProps {
  onDemoClick: () => void;
}

export default function Header({ onDemoClick }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-300 ${isScrolled ? 'shadow-md' : 'shadow-sm'}`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <img
            src="/images/logo.svg"
            alt="Ring to Kitchen AI"
            className="w-auto transition-all duration-300"
            style={{ height: isScrolled ? '5rem' : '7.5rem' }}
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-primary-navy hover:text-energy-red transition font-medium">
            Home
          </Link>
          <Link href="/pricing" className="text-primary-navy hover:text-energy-red transition font-medium">
            Pricing
          </Link>
          <Link href="/blog" className="text-primary-navy hover:text-energy-red transition font-medium">
            Blog
          </Link>
        </div>

        {/* CTA Button & Mobile Menu */}
        <div className="flex items-center gap-4">
          <button
            onClick={onDemoClick}
            className="hidden sm:inline-block bg-energy-red text-white px-6 py-2.5 rounded hover:bg-[#E63D23] transition font-bold text-sm"
          >
            Schedule Demo
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-soft-gray rounded-lg transition"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-soft-gray bg-white">
          <div className="px-4 py-3 space-y-2">
            <Link href="/" className="block py-2 text-primary-navy hover:text-energy-red font-medium">Home</Link>
            <Link href="/pricing" className="block py-2 text-primary-navy hover:text-energy-red font-medium">Pricing</Link>
            <Link href="/blog" className="block py-2 text-primary-navy hover:text-energy-red font-medium">Blog</Link>
            <button
              onClick={onDemoClick}
              className="w-full bg-energy-red text-white px-4 py-2 rounded hover:bg-[#E63D23] transition font-bold mt-4"
            >
              Schedule Demo
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
