'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import DemoModal from '@/components/DemoModal';
import CounterAnimation from '@/components/CounterAnimation';
import { VALUE_PROPOSITIONS, HOW_IT_WORKS_STEPS, PRICING_TIERS, TESTIMONIALS, USE_CASES } from '@/lib/constants';
import { getAllBlogPosts } from '@/lib/blogData';
import Link from 'next/link';

export default function HomePage() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const latestPosts = getAllBlogPosts().slice(0, 3);

  const stepIcons = ['10.png', '3.png', '4.png', '7.png'];

  const handleCardFlip = (index: number) => {
    if (!flippedCards.includes(index)) {
      setFlippedCards([...flippedCards, index]);
    }
  };

  return (
    <main className="min-h-screen">
      <Header onDemoClick={() => setIsDemoModalOpen(true)} />

      <div className="pt-24">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary-navy to-[#0d1f3c] overflow-hidden flex items-center" style={{ minHeight: '800px' }}>
        {/* Background Image with Blur Overlay */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-navy/90 via-primary-navy/60 to-transparent z-10"></div>
          <img
            src="/LLamada 1.png"
            alt="Customer Service"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ objectPosition: '35% center' }}
          />
        </div>

        {/* Wave Pattern Background */}
        <div className="absolute inset-0 opacity-10 z-10">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full">
            <path d="M0,50 Q300,0 600,50 T1200,50 L1200,120 L0,120 Z" fill="currentColor" className="text-energy-red" />
          </svg>
        </div>

        {/* Content */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-2xl text-left">
          {/* Trust Badges */}
          <div className="flex justify-start gap-4 mb-8 flex-wrap">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full border border-white/20">
              <span className="text-2xl">✓</span>
              <span className="text-white text-sm">100+ Restaurants</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full border border-white/20">
              <span className="text-2xl">⚡</span>
              <span className="text-white text-sm">99.9% Uptime</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full border border-white/20">
              <span className="text-2xl">🚀</span>
              <span className="text-white text-sm">24/7 Support</span>
            </div>
          </div>

          {/* Headline */}
          <h1 className="font-inter text-5xl sm:text-6xl lg:text-7xl text-white mb-6 leading-tight">
            Never Miss<br />
            <span className="bg-gradient-to-r from-energy-red to-[#FF6B4A] text-transparent bg-clip-text">Another Order</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-white/90 mb-8 leading-relaxed">
            Restaurant voice AI that handles every call, takes perfect orders, and works 24/7.
            Works standalone or integrates with your existing POS.
          </p>

          {/* Key Features Pills */}
          <div className="flex flex-wrap justify-start gap-3 mb-10">
            <div className="bg-white/10 backdrop-blur px-4 py-2 rounded-full border border-white/30 text-white text-sm font-medium">
              99% Order Accuracy Voice AI
            </div>
            <div className="bg-white/10 backdrop-blur px-4 py-2 rounded-full border border-white/30 text-white text-sm font-medium">
              Supports English & Spanish
            </div>
            <div className="bg-white/10 backdrop-blur px-4 py-2 rounded-full border border-white/30 text-white text-sm font-medium">
              Enterprise-Scale Volume
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-start">
            <button
              onClick={() => setIsDemoModalOpen(true)}
              className="bg-energy-red hover:bg-primary-navy hover:text-white text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Schedule Demo
            </button>
            <Link
              href="/pricing"
              className="border-2 border-white text-white hover:bg-white hover:text-primary-navy px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 hover:scale-105 text-center shadow-lg"
            >
              View Pricing
            </Link>
          </div>

          {/* Social Proof */}
          <div className="mt-16 text-white/60 text-sm">
            ⭐ <span className="text-white font-bold">4.9/5 average rating</span> from restaurant owners
          </div>
          </div>
        </div>
      </section>

      {/* Results Stats Section */}
      <section className="py-16 bg-white relative overflow-hidden" style={{ backgroundImage: 'url(/15.png)', backgroundSize: '80%', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
        {/* Overlay blanco para mantener legibilidad */}
        <div className="absolute inset-0 bg-white/85 z-0"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="font-inter text-3xl sm:text-4xl text-primary-navy mb-3">
              Real Results from Real Restaurants
            </h2>
            <p className="text-lg text-gray-600">
              Proven impact on your bottom line
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 rounded-xl bg-white border border-energy-red/20 shadow-lg">
              <CounterAnimation end={100} suffix="%" className="text-5xl font-bold text-energy-red mb-2" />
              <div className="text-sm text-gray-600 font-medium">Calls captured in queue</div>
              <div className="text-xs text-gray-500 mt-1">Never miss an order</div>
            </div>

            <div className="text-center p-6 rounded-xl bg-white border border-primary-navy/20 shadow-lg">
              <CounterAnimation end={75} suffix="%" className="text-5xl font-bold text-primary-navy mb-2" />
              <div className="text-sm text-gray-600 font-medium">Reduction in labor costs</div>
              <div className="text-xs text-gray-500 mt-1">Per order efficiency gain</div>
            </div>

            <div className="text-center p-6 rounded-xl bg-white border border-energy-red/20 shadow-lg">
              <CounterAnimation end={25} suffix="%" className="text-5xl font-bold text-energy-red mb-2" />
              <div className="text-sm text-gray-600 font-medium">Increase in average check</div>
              <div className="text-xs text-gray-500 mt-1">AI-driven upselling</div>
            </div>

            <div className="text-center p-6 rounded-xl bg-white border border-primary-navy/20 shadow-lg">
              <CounterAnimation end={20} suffix="%" className="text-5xl font-bold text-primary-navy mb-2" />
              <div className="text-sm text-gray-600 font-medium">Increase in repeat orders</div>
              <div className="text-xs text-gray-500 mt-1">Within first month</div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-20 bg-gradient-to-br from-energy-red via-[#F17A5C] to-[#FF9470]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-inter text-4xl sm:text-5xl text-white mb-4">
              Why Restaurants Choose <br />Ring to Kitchen AI
            </h2>
            <p className="text-xl text-white/90">
              Restaurant-trained AI that understands your business
            </p>
          </div>

          <div className="space-y-8">
            <div className="flex items-center gap-6">
              <svg className="w-12 h-12 text-white flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
              </svg>
              <div className="border-l-4 border-white pl-6 py-2 flex-1">
                <h3 className="font-inter text-2xl text-white mb-2 font-bold">Restaurant-Trained AI</h3>
                <p className="text-white/90 text-lg leading-relaxed">
                  Understands "extra cheese," "gluten-free crust," and complex restaurant conversations. 99% accuracy on food orders.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <svg className="w-12 h-12 text-white flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
              </svg>
              <div className="border-l-4 border-white pl-6 py-2 flex-1">
                <h3 className="font-inter text-2xl text-white mb-2 font-bold">Works Your Way</h3>
                <p className="text-white/90 text-lg leading-relaxed">
                  Complete standalone solution or seamless integration with your existing POS. You choose what works for your restaurant.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <svg className="w-12 h-12 text-white flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
              </svg>
              <div className="border-l-4 border-white pl-6 py-2 flex-1">
                <h3 className="font-inter text-2xl text-white mb-2 font-bold">Proven Results</h3>
                <p className="text-white/90 text-lg leading-relaxed">
                  30% average increase in phone orders, 99.9% uptime, and enterprise-grade reliability. Real restaurants, real results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 relative overflow-hidden" style={{ backgroundColor: '#E9E9E9' }}>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-inter text-4xl sm:text-5xl text-primary-navy mb-4">
              How It Works
            </h2>
            <p className="text-lg text-gray-600">
              From ring to kitchen in four simple steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {HOW_IT_WORKS_STEPS.map((step, idx) => (
              <div
                key={idx}
                className="flip-card-container h-80"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${idx * 0.15}s both`,
                  perspective: '1000px'
                }}
              >
                {/* Connecting line for desktop */}
                {idx < HOW_IT_WORKS_STEPS.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-energy-red/50 to-transparent z-0"></div>
                )}

                <div
                  className={`flip-card group relative w-full h-full ${flippedCards.includes(idx) ? 'flipped' : ''}`}
                  onMouseEnter={() => handleCardFlip(idx)}
                >
                  <div className="flip-card-inner relative w-full h-full transition-transform duration-700">

                    {/* CARA FRONTAL - Azul con número */}
                    <div className="flip-card-front absolute w-full h-full">
                      <div className="w-full h-full bg-primary-navy rounded-2xl shadow-lg flex items-center justify-center border-2 border-primary-navy">
                        <span className="flip-number text-white font-bold transition-colors duration-300" style={{ fontSize: '8rem' }}>
                          {step.number}
                        </span>
                      </div>
                    </div>

                    {/* CARA TRASERA - Contenido actual */}
                    <div className="flip-card-back absolute w-full h-full">
                      <div className="w-full h-full bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                        {/* Icon with animated gradient background */}
                        <div className="relative mb-6">
                          <div className="absolute inset-0 bg-gradient-to-br from-energy-red/10 to-primary-navy/10 rounded-full blur-xl transition-all duration-500"></div>
                          <div className="relative rounded-full w-32 h-32 mx-auto flex items-center justify-center shadow-lg">
                            <img
                              src={`/${stepIcons[idx]}`}
                              alt={step.title}
                              className="w-28 h-28 object-contain"
                            />
                          </div>
                        </div>

                        {/* Content */}
                        <div className="text-center">
                          <h3 className="font-inter text-xl text-primary-navy mb-3">
                            {step.title}
                          </h3>
                          <p className="text-gray-600 text-sm leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <style jsx>{`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          /* Flip Card Styles */
          .flip-card-inner {
            transform-style: preserve-3d;
          }

          .flip-card:hover .flip-card-inner,
          .flip-card.flipped .flip-card-inner {
            transform: rotateY(180deg);
          }

          .flip-card:hover .flip-number {
            color: #F04833;
          }

          .flip-card-front,
          .flip-card-back {
            backface-visibility: hidden;
            -webkit-backface-visibility: hidden;
          }

          .flip-card-back {
            transform: rotateY(180deg);
          }

          @keyframes float {
            0%, 100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-10px);
            }
          }
        `}</style>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-inter text-4xl sm:text-5xl text-primary-navy mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-lg text-gray-600">
              No hidden fees. Cancel anytime.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-6">
            {PRICING_TIERS.map((tier, idx) => (
              <div
                key={idx}
                className={`rounded-2xl transition transform hover:-translate-y-2 ${
                  tier.highlighted
                    ? 'bg-white shadow-2xl ring-2 ring-energy-red md:scale-105'
                    : 'bg-white shadow-lg'
                }`}
              >
                {tier.highlighted && (
                  <div className="bg-energy-red text-white py-2 text-center font-bold text-sm rounded-t-2xl">
                    ⭐ MOST POPULAR
                  </div>
                )}

                <div className="p-8">
                  <h3 className="font-inter text-2xl text-primary-navy mb-2">{tier.name}</h3>
                  <p className="text-gray-600 text-sm mb-6">{tier.description}</p>

                  {/* Price */}
                  {tier.price !== null ? (
                    <div className="mb-6 text-center">
                      <span className="font-inter text-5xl text-primary-navy">${tier.price}</span>
                      <span className="text-gray-600">/month</span>
                    </div>
                  ) : (
                    <div className="mb-6 text-center">
                      <p className="text-lg text-gray-600">Custom pricing</p>
                    </div>
                  )}

                  {/* CTA */}
                  <button
                    onClick={() => setIsDemoModalOpen(true)}
                    className={`w-full py-3 rounded-lg font-bold transition mb-8 ${
                      tier.highlighted
                        ? 'bg-energy-red text-white hover:bg-primary-navy hover:text-white'
                        : 'bg-soft-gray text-primary-navy hover:bg-primary-navy hover:text-white'
                    }`}
                  >
                    {tier.cta}
                  </button>

                  {/* Features */}
                  <div className="space-y-4">
                    {tier.features.slice(0, 5).map((feature, fidx) => (
                      <div key={fidx} className="flex items-start gap-3">
                        <span className={`text-xl mt-0.5`}>
                          {feature.included ? '✓' : '✗'}
                        </span>
                        <span className={`text-sm ${feature.included ? 'text-gray-700' : 'text-gray-400 line-through'}`}>
                          {feature.text}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/pricing" className="inline-block bg-primary-navy text-white px-8 py-4 rounded-lg hover:bg-energy-red hover:text-white hover:scale-105 transition-all duration-300 font-bold text-lg shadow-lg">
              View full feature comparison
            </Link>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 relative overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/Restaurant.mp4" type="video/mp4" />
          </video>
          {/* Blue Gradient Overlay */}
          <div className="absolute inset-0 bg-primary-navy/80 z-10"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="text-center mb-16">
            <h2 className="font-inter text-4xl sm:text-5xl text-white mb-4 drop-shadow-lg">
              Perfect For Every Restaurant Type
            </h2>
            <p className="text-white/90 text-lg">From food trucks to fine dining, we've got you covered</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {USE_CASES.map((useCase, idx) => {
              const getIcon = (title: string) => {
                switch (title) {
                  case 'Fast Casual':
                    return (
                      <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                      </svg>
                    );
                  case 'Fine Dining':
                    return (
                      <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                        <circle cx="12" cy="12" r="8" strokeWidth={2} />
                      </svg>
                    );
                  case 'Food Trucks':
                    return (
                      <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
                      </svg>
                    );
                  case 'Multi-Location Chains':
                    return (
                      <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    );
                  case 'Cafés & Bakeries':
                    return (
                      <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 6l3.5 3.5M6 18l3.5-3.5" />
                      </svg>
                    );
                  default:
                    return <div className="text-4xl mb-3">{useCase.icon}</div>;
                }
              };

              return (
                <div key={idx} className="relative">
                  {/* Connecting line for desktop */}
                  {idx < USE_CASES.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-energy-red/50 to-transparent z-0"></div>
                  )}

                  <div className="bg-white/95 backdrop-blur rounded-xl p-6 text-center hover:shadow-2xl hover:scale-105 transition-all duration-300 border-2 border-white/50">
                    <div className="text-energy-red mb-3">{getIcon(useCase.title)}</div>
                    <h3 className="font-bold text-primary-navy mb-2">{useCase.title}</h3>
                    <p className="text-sm text-gray-600">{useCase.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white relative overflow-hidden" style={{ backgroundImage: 'url(/14.png)', backgroundSize: 'cover', backgroundPosition: 'center top' }}>
        {/* Overlay blanco sólido */}
        <div className="absolute inset-0 bg-white z-0"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-inter text-4xl sm:text-5xl text-primary-navy mb-4">
              Loved by Restaurant Owners
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TESTIMONIALS.slice(0, 3).map((testimonial, idx) => (
              <div key={idx} className="bg-soft-gray rounded-2xl p-8 hover:shadow-xl transition">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-energy-red">⭐</span>
                  ))}
                </div>

                <p className="text-gray-700 mb-6 italic leading-relaxed">
                  "{testimonial.quote}"
                </p>

                <div className="flex items-center gap-4 pt-6 border-t border-gray-300">
                  <div className="text-4xl">{testimonial.image}</div>
                  <div>
                    <p className="font-bold text-primary-navy">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.restaurant}</p>
                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="py-20 relative overflow-hidden" style={{ backgroundColor: '#E5D4C1', backgroundImage: 'url(/14.png)', backgroundSize: 'cover', backgroundPosition: 'center bottom' }}>
        {/* Overlay beige sólido */}
        <div className="absolute inset-0 z-0" style={{ backgroundColor: '#E5D4C1' }}></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-inter text-4xl sm:text-5xl text-primary-navy mb-4">
              Latest Insights
            </h2>
            <p className="text-lg text-gray-600">
              Stay ahead of the restaurant industry
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {latestPosts.map((post, idx) => (
              <Link key={idx} href={`/blog/${post.slug}`} className="bg-white rounded-xl overflow-hidden hover:shadow-xl transition group">
                <div className="h-48 bg-gradient-to-br from-primary-navy to-energy-red flex items-center justify-center text-white text-4xl overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-energy-red text-white text-xs px-2 py-1 rounded">{post.category}</span>
                    <span className="text-sm text-gray-500">{post.readTime}</span>
                  </div>
                  <h3 className="font-inter text-xl text-primary-navy mb-2 group-hover:text-energy-red transition">
                    {post.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="text-sm text-gray-500">{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/blog" className="bg-primary-navy text-white px-8 py-3 rounded-lg hover:bg-energy-red hover:scale-105 transition-all duration-300 font-bold inline-block shadow-lg">
              View All Articles
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden text-white flex items-center" style={{ minHeight: '600px', backgroundImage: 'url(/food.jpg)', backgroundSize: 'cover', backgroundPosition: 'right center' }}>
        {/* White Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/70 to-white/20 z-10"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-20 w-full">
          <h2 className="font-inter text-4xl sm:text-5xl mb-6 text-primary-navy">
            Ready to Transform Your Restaurant?
          </h2>
          <p className="text-xl mb-8 text-gray-700">
            Join 100+ restaurants already using Ring to Kitchen AI
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setIsDemoModalOpen(true)}
              className="bg-energy-red text-white px-8 py-4 rounded-lg hover:bg-primary-navy hover:text-white hover:scale-105 transition-all duration-300 font-bold text-lg shadow-lg"
            >
              Schedule Demo
            </button>
            <Link
              href="/pricing"
              className="border-2 border-primary-navy text-primary-navy hover:bg-primary-navy hover:text-white hover:scale-105 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 text-center shadow-lg"
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
