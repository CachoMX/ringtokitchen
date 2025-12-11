'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import DemoModal from '@/components/DemoModal';
import { USE_CASES } from '@/lib/constants';
import Link from 'next/link';

export default function SolutionsPage() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  const integrations = [
    { name: 'Toast', logo: '🍞' },
    { name: 'Square', logo: '⬜' },
    { name: 'Clover', logo: '🍀' },
    { name: 'Lightspeed', logo: '⚡' },
    { name: 'Revel', logo: '🎯' },
    { name: 'Custom API', logo: '🔗' },
  ];

  return (
    <main className="min-h-screen bg-white">
      <Header onDemoClick={() => setIsDemoModalOpen(true)} />

      <div className="pt-24">
        {/* Hero */}
        <section className="relative min-h-[600px] flex items-center overflow-hidden">
          <div className="absolute inset-0">
            <img src="/calle.png" alt="Restaurant" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-primary-navy/95 via-primary-navy/80 to-primary-navy/60"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
            <div className="max-w-3xl">
              <p className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Our Solutions</p>
              <h1 className="font-inter text-4xl sm:text-5xl lg:text-6xl text-white mb-6 leading-tight">
                Complete AI Solutions for{' '}
                <span className="text-energy-red">Every Restaurant</span>
              </h1>
              <p className="text-xl text-white/80 mb-8">
                From voice ordering to reservation management, our AI platform handles it all.
                Designed specifically for the restaurant industry.
              </p>
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => setIsDemoModalOpen(true)}
                  className="bg-energy-red text-white px-8 py-4 rounded-lg hover:bg-white hover:text-energy-red transition-all duration-300 font-bold text-lg shadow-lg"
                >
                  Schedule Demo
                </button>
                <Link
                  href="/pricing"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-primary-navy transition-all duration-300 font-bold text-lg"
                >
                  View Pricing
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Voice Agent Solution */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-energy-red font-semibold text-sm uppercase tracking-wider mb-3">Core Product</p>
                <h2 className="font-inter text-4xl text-primary-navy mb-6">
                  AI Voice Agent
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Our flagship product handles phone calls with human-like conversation.
                  Take orders, manage reservations, and answer questions - all automatically.
                </p>

                <div className="space-y-4">
                  {[
                    'Natural language understanding for complex orders',
                    'Supports English and Spanish natively',
                    '99% order accuracy rate',
                    '24/7 availability - never miss a call',
                    'Handles multiple calls simultaneously',
                  ].map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-energy-red rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="bg-gradient-to-br from-primary-navy to-[#1a3a5c] rounded-2xl p-8 shadow-2xl">
                  <div className="bg-white/10 rounded-xl p-6 mb-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-energy-red rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-white font-bold">Voice AI Active</p>
                        <p className="text-white/60 text-sm">Processing order...</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 h-12">
                      {[...Array(20)].map((_, i) => (
                        <div
                          key={i}
                          className="w-1 bg-energy-red/60 rounded-full animate-pulse"
                          style={{ height: `${30 + Math.random() * 70}%`, animationDelay: `${i * 0.05}s` }}
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-white/80 text-center italic">
                    "I'd like to order a large pepperoni pizza with extra cheese..."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases by Restaurant Type */}
        <section className="py-20 bg-soft-gray">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <p className="text-energy-red font-semibold text-sm uppercase tracking-wider mb-3">Use Cases</p>
              <h2 className="font-inter text-4xl sm:text-5xl text-primary-navy mb-4">
                Perfect for Every Restaurant Type
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Whether you're a food truck or fine dining establishment, our AI adapts to your needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {USE_CASES.map((useCase, idx) => {
                const getIcon = (title: string) => {
                  switch (title) {
                    case 'Fast Casual': return '/Hamburguesa.png';
                    case 'Fine Dining': return '/Restauran.png';
                    case 'Food Trucks': return '/foodtruck.png';
                    case 'Multi-Location Chains': return '/Logistica.png';
                    case 'Cafés & Bakeries': return '/Cafeteria.png';
                    default: return null;
                  }
                };

                const getDetails = (title: string) => {
                  switch (title) {
                    case 'Fast Casual':
                      return ['High-volume order processing', 'Quick modification handling', 'Rush hour management', 'Combo and upsell suggestions'];
                    case 'Fine Dining':
                      return ['Elegant reservation management', 'Special occasion handling', 'Dietary restriction notes', 'VIP guest recognition'];
                    case 'Food Trucks':
                      return ['Location updates', 'Wait time estimates', 'Mobile ordering', 'Event scheduling'];
                    case 'Multi-Location Chains':
                      return ['Centralized management', 'Location routing', 'Consistent experience', 'Chain-wide analytics'];
                    case 'Cafés & Bakeries':
                      return ['Morning rush handling', 'Custom order details', 'Pickup coordination', 'Daily specials promotion'];
                    default:
                      return [];
                  }
                };

                const iconSrc = getIcon(useCase.title);
                const details = getDetails(useCase.title);

                return (
                  <div key={idx} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
                    <div className="flex items-center gap-4 mb-6">
                      {iconSrc ? (
                        <img src={iconSrc} alt={useCase.title} className="w-16 h-16 object-contain" />
                      ) : (
                        <span className="text-4xl">{useCase.icon}</span>
                      )}
                      <h3 className="font-inter text-xl text-primary-navy font-bold">{useCase.title}</h3>
                    </div>
                    <p className="text-gray-600 mb-6">{useCase.description}</p>
                    <ul className="space-y-2">
                      {details.map((detail, didx) => (
                        <li key={didx} className="flex items-center gap-2 text-sm text-gray-600">
                          <svg className="w-4 h-4 text-energy-red flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Integrations */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <p className="text-energy-red font-semibold text-sm uppercase tracking-wider mb-3">Integrations</p>
              <h2 className="font-inter text-4xl sm:text-5xl text-primary-navy mb-4">
                Works With Your Existing Systems
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Seamless integration with the POS systems you already use
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {integrations.map((integration, idx) => (
                <div key={idx} className="bg-soft-gray rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="text-4xl mb-3">{integration.logo}</div>
                  <p className="font-bold text-primary-navy">{integration.name}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-gradient-to-r from-primary-navy to-[#1a3a5c] rounded-2xl p-8 text-center">
              <h3 className="font-inter text-2xl text-white mb-4">Don't see your POS?</h3>
              <p className="text-white/80 mb-6">
                We're constantly adding new integrations. Contact us to discuss your specific needs.
              </p>
              <button
                onClick={() => setIsDemoModalOpen(true)}
                className="bg-energy-red text-white px-8 py-3 rounded-lg hover:bg-white hover:text-energy-red transition-all duration-300 font-bold"
              >
                Request Integration
              </button>
            </div>
          </div>
        </section>

        {/* Voice Demo Section */}
        <section className="py-20 bg-gradient-to-br from-primary-navy via-[#1a3a5c] to-primary-navy relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 1440 320" preserveAspectRatio="none">
              <path fill="#F04833" fillOpacity="0.3" d="M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,138.7C672,128,768,160,864,186.7C960,213,1056,235,1152,218.7C1248,203,1344,149,1392,122.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
                <animate attributeName="d" dur="10s" repeatCount="indefinite" values="M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,138.7C672,128,768,160,864,186.7C960,213,1056,235,1152,218.7C1248,203,1344,149,1392,122.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;M0,128L48,144C96,160,192,192,288,186.7C384,181,480,139,576,128C672,117,768,139,864,165.3C960,192,1056,224,1152,213.3C1248,203,1344,149,1392,122.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,138.7C672,128,768,160,864,186.7C960,213,1056,235,1152,218.7C1248,203,1344,149,1392,122.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" />
              </path>
            </svg>
          </div>

          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <p className="text-energy-red font-semibold text-sm uppercase tracking-wider mb-3">Voice Experience</p>
              <h2 className="font-inter text-4xl sm:text-5xl text-white mb-4">
                Hear Our <span className="text-energy-red">AI Agent</span>
              </h2>
              <p className="text-lg text-white/80 max-w-2xl mx-auto">
                Experience natural conversation with our intelligent voice assistant
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Audio Slot 1 */}
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-energy-red/50 transition-all duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-energy-red to-[#FF6B4A] rounded-full flex items-center justify-center shadow-lg">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-inter text-xl text-white font-bold">Order Taking</h3>
                    <p className="text-white/60 text-sm">Phone order example</p>
                  </div>
                </div>
                <div className="bg-primary-navy/50 rounded-xl p-6 border border-white/10">
                  <div className="flex items-center gap-4">
                    <button className="w-14 h-14 bg-energy-red rounded-full flex items-center justify-center hover:bg-white hover:text-energy-red transition-all duration-300 shadow-lg group">
                      <svg className="w-6 h-6 text-white group-hover:text-energy-red ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </button>
                    <div className="flex-1">
                      <div className="flex items-center gap-1 h-12">
                        {[...Array(30)].map((_, i) => (
                          <div key={i} className="w-1 bg-energy-red/60 rounded-full animate-pulse" style={{ height: `${Math.random() * 100}%`, animationDelay: `${i * 0.05}s` }} />
                        ))}
                      </div>
                      <p className="text-white/40 text-xs mt-2 text-center">[AUDIO SLOT 1]</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Audio Slot 2 */}
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-energy-red/50 transition-all duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-navy to-[#2a4a6c] rounded-full flex items-center justify-center shadow-lg border-2 border-energy-red">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-inter text-xl text-white font-bold">Menu Inquiry</h3>
                    <p className="text-white/60 text-sm">Information example</p>
                  </div>
                </div>
                <div className="bg-primary-navy/50 rounded-xl p-6 border border-white/10">
                  <div className="flex items-center gap-4">
                    <button className="w-14 h-14 bg-energy-red rounded-full flex items-center justify-center hover:bg-white hover:text-energy-red transition-all duration-300 shadow-lg group">
                      <svg className="w-6 h-6 text-white group-hover:text-energy-red ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </button>
                    <div className="flex-1">
                      <div className="flex items-center gap-1 h-12">
                        {[...Array(30)].map((_, i) => (
                          <div key={i} className="w-1 bg-white/40 rounded-full animate-pulse" style={{ height: `${Math.random() * 100}%`, animationDelay: `${i * 0.05}s` }} />
                        ))}
                      </div>
                      <p className="text-white/40 text-xs mt-2 text-center">[AUDIO SLOT 2]</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="relative overflow-hidden text-white flex items-center" style={{ minHeight: '600px', backgroundImage: 'url(/footer.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 w-full">
            <h2 className="font-inter text-4xl sm:text-5xl mb-6 text-white">
              Ready to <span className="text-energy-red">Get Started?</span>
            </h2>
            <p className="text-xl mb-8 text-white/90">
              See how Ring to Kitchen AI can transform your restaurant operations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setIsDemoModalOpen(true)}
                className="bg-white text-energy-red px-8 py-4 rounded-lg hover:bg-energy-red hover:text-white hover:scale-105 transition-all duration-300 font-bold text-lg shadow-lg"
              >
                Schedule Demo
              </button>
              <Link
                href="/pricing"
                className="border-2 border-white text-white hover:bg-white hover:text-primary-navy hover:scale-105 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 text-center shadow-lg"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </section>
      </div>

      <Footer />
      <DemoModal isOpen={isDemoModalOpen} onClose={() => setIsDemoModalOpen(false)} />
    </main>
  );
}
