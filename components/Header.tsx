'use client';

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';

interface HeaderProps {
  onDemoClick: () => void;
}

export default function Header({ onDemoClick }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const resourcesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (resourcesRef.current && !resourcesRef.current.contains(event.target as Node)) {
        setResourcesOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
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
        <div className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-primary-navy hover:text-energy-red transition font-medium">
            Home
          </Link>
          <Link href="/how-it-works" className="text-primary-navy hover:text-energy-red transition font-medium">
            How It Works
          </Link>
          <Link href="/pricing" className="text-primary-navy hover:text-energy-red transition font-medium">
            Pricing
          </Link>

          {/* Resources Dropdown */}
          <div className="relative" ref={resourcesRef}>
            <button
              onClick={() => setResourcesOpen(!resourcesOpen)}
              className="flex items-center gap-1 text-primary-navy hover:text-energy-red transition font-medium"
            >
              Resources
              <svg className={`w-4 h-4 transition-transform ${resourcesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {resourcesOpen && (
              <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-100 py-2 z-50">
                <Link
                  href="/blog"
                  className="block px-4 py-2 text-primary-navy hover:bg-soft-gray hover:text-energy-red transition"
                  onClick={() => setResourcesOpen(false)}
                >
                  Blog
                </Link>
                <Link
                  href="/testimonials"
                  className="block px-4 py-2 text-primary-navy hover:bg-soft-gray hover:text-energy-red transition"
                  onClick={() => setResourcesOpen(false)}
                >
                  Testimonials
                </Link>
              </div>
            )}
          </div>

          <Link href="/contact" className="text-primary-navy hover:text-energy-red transition font-medium">
            Contact
          </Link>
        </div>

        {/* Phone & CTA Button & Mobile Menu */}
        <div className="flex items-center gap-4">
          <a
            href="tel:+19167593687"
            className="hidden lg:flex items-center gap-2 text-primary-navy hover:text-energy-red transition font-medium"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span className="font-bold">+1 (916) 759-3687</span>
          </a>
          <button
            onClick={onDemoClick}
            className="hidden sm:inline-block bg-energy-red text-white px-6 py-2.5 rounded hover:bg-primary-navy hover:text-white hover:scale-105 transition-all duration-300 font-bold text-sm shadow-lg"
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
            <Link href="/" className="block py-2 text-primary-navy hover:text-energy-red font-medium" onClick={() => setIsOpen(false)}>Home</Link>
            <Link href="/how-it-works" className="block py-2 text-primary-navy hover:text-energy-red font-medium" onClick={() => setIsOpen(false)}>How It Works</Link>
            <Link href="/pricing" className="block py-2 text-primary-navy hover:text-energy-red font-medium" onClick={() => setIsOpen(false)}>Pricing</Link>
            <div className="border-t border-gray-200 pt-2 mt-2">
              <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">Resources</p>
              <Link href="/blog" className="block py-2 pl-4 text-primary-navy hover:text-energy-red font-medium" onClick={() => setIsOpen(false)}>Blog</Link>
              <Link href="/testimonials" className="block py-2 pl-4 text-primary-navy hover:text-energy-red font-medium" onClick={() => setIsOpen(false)}>Testimonials</Link>
            </div>
            <Link href="/contact" className="block py-2 text-primary-navy hover:text-energy-red font-medium" onClick={() => setIsOpen(false)}>Contact</Link>
            <a
              href="tel:+19167593687"
              className="flex items-center gap-2 py-2 text-primary-navy hover:text-energy-red font-bold"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>+1 (916) 759-3687</span>
            </a>
            <button
              onClick={onDemoClick}
              className="w-full bg-energy-red text-white px-4 py-2 rounded hover:bg-primary-navy hover:text-white hover:scale-105 transition-all duration-300 font-bold mt-4 shadow-lg"
            >
              Schedule Demo
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
