'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import DemoModal from '@/components/DemoModal';
import CounterAnimation from '@/components/CounterAnimation';
import { HOW_IT_WORKS_STEPS, PRICING_TIERS, TESTIMONIALS } from '@/lib/constants';
import { getAllBlogPosts } from '@/lib/blogData';
import Link from 'next/link';

export default function HomePage() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const latestPosts = getAllBlogPosts().slice(0, 3);

  // Savings Calculator State
  const [dailyCalls, setDailyCalls] = useState(50);
  const [missedCallPercent, setMissedCallPercent] = useState(20);
  const [avgOrderValue, setAvgOrderValue] = useState(35);

  // Calculate savings (simplified)
  const missedCallsPerMonth = Math.round(dailyCalls * 30 * (missedCallPercent / 100));
  const potentialRevenueLost = missedCallsPerMonth * avgOrderValue * 0.6;
  const totalMonthlySavings = Math.round(potentialRevenueLost);

  const stepIcons = ['10.png', 'RK.png', '4.png', 'Resultados .png'];

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
          <div className="max-w-3xl mx-auto text-center">
          {/* Trust Badges */}
          <div className="flex justify-center gap-4 mb-8 flex-wrap">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full border border-white/20">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-white text-sm">100+ Restaurants</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full border border-white/20">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span className="text-white text-sm">99.9% Uptime</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full border border-white/20">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
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
          <div className="flex flex-wrap justify-center gap-3 mb-10">
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
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
            <svg className="w-5 h-5 text-white inline-block mr-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            <span className="text-white font-bold">4.9/5 average rating</span> from restaurant owners
          </div>
          </div>
        </div>
      </section>

      {/* How It Works - Brief Version */}
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
                {idx < HOW_IT_WORKS_STEPS.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-energy-red/50 to-transparent z-0"></div>
                )}

                <div
                  className={`flip-card group relative w-full h-full ${flippedCards.includes(idx) ? 'flipped' : ''}`}
                  onMouseEnter={() => handleCardFlip(idx)}
                >
                  <div className="flip-card-inner relative w-full h-full transition-transform duration-700">
                    <div className="flip-card-front absolute w-full h-full">
                      <div className="w-full h-full bg-primary-navy rounded-2xl shadow-lg flex items-center justify-center border-2 border-primary-navy">
                        <span className="flip-number text-white font-bold transition-colors duration-300" style={{ fontSize: '8rem' }}>
                          {step.number}
                        </span>
                      </div>
                    </div>

                    <div className="flip-card-back absolute w-full h-full">
                      <div className="w-full h-full bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                        <div className="relative mb-6">
                          <div className="absolute inset-0 bg-gradient-to-br from-energy-red/10 to-primary-navy/10 rounded-full blur-xl transition-all duration-500"></div>
                          <div className="relative rounded-full w-32 h-32 mx-auto flex items-center justify-center shadow-lg overflow-hidden">
                            <img
                              src={`/${stepIcons[idx]}`}
                              alt={step.title}
                              className="w-28 h-28 object-contain"
                            />
                          </div>
                        </div>
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

          <div className="text-center mt-12">
            <Link href="/how-it-works" className="inline-block bg-primary-navy text-white px-8 py-4 rounded-lg hover:bg-energy-red hover:scale-105 transition-all duration-300 font-bold text-lg shadow-lg">
              Learn More About Our Process
            </Link>
          </div>
        </div>

        <style jsx>{`
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .flip-card-inner { transform-style: preserve-3d; }
          .flip-card:hover .flip-card-inner, .flip-card.flipped .flip-card-inner { transform: rotateY(180deg); }
          .flip-card:hover .flip-number { color: #F04833; }
          .flip-card-front, .flip-card-back { backface-visibility: hidden; -webkit-backface-visibility: hidden; }
          .flip-card-back { transform: rotateY(180deg); }
        `}</style>
      </section>

      {/* Voice Simulator Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-energy-red font-semibold text-sm uppercase tracking-wider mb-3">Voice AI Demo</p>
            <h2 className="font-inter text-4xl sm:text-5xl text-primary-navy mb-4">
              Hear Our AI in <span className="text-energy-red">Action</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Listen to real examples of how our AI handles customer calls
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Audio Sample 1 */}
            <div className="bg-soft-gray rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-primary-navy rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="font-inter text-xl text-primary-navy text-center mb-3">Taking an Order</h3>
              <p className="text-gray-600 text-center text-sm mb-6">
                Listen to how our AI handles a real customer call with natural conversation
              </p>
              {/* Real Audio Player */}
              <div className="bg-white rounded-xl p-4 border border-gray-200">
                <audio controls className="w-full" style={{ height: '40px' }}>
                  <source src="/recording (2).wav" type="audio/wav" />
                  Your browser does not support the audio element.
                </audio>
              </div>
            </div>

            {/* Audio Sample 2 */}
            <div className="bg-soft-gray rounded-2xl p-8 hover:shadow-xl transition-all duration-300 relative">
              <div className="w-16 h-16 bg-energy-red rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-inter text-xl text-primary-navy text-center mb-3">Booking Reservation</h3>
              <p className="text-gray-600 text-center text-sm mb-6">
                Listen to a seamless reservation booking experience
              </p>
              {/* Coming Soon */}
              <div className="bg-gradient-to-br from-primary-navy to-[#1a3a5c] rounded-xl p-6 text-center">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p className="text-white font-bold">Coming Soon</p>
                <p className="text-white/60 text-xs mt-1">Audio demo in production</p>
              </div>
            </div>

            {/* Audio Sample 3 */}
            <div className="bg-soft-gray rounded-2xl p-8 hover:shadow-xl transition-all duration-300 relative">
              <div className="w-16 h-16 bg-primary-navy rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-inter text-xl text-primary-navy text-center mb-3">Answering Questions</h3>
              <p className="text-gray-600 text-center text-sm mb-6">
                See how AI responds to menu and hours inquiries
              </p>
              {/* Coming Soon */}
              <div className="bg-gradient-to-br from-primary-navy to-[#1a3a5c] rounded-xl p-6 text-center">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p className="text-white font-bold">Coming Soon</p>
                <p className="text-white/60 text-xs mt-1">Audio demo in production</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => setIsDemoModalOpen(true)}
              className="bg-energy-red text-white px-8 py-4 rounded-lg hover:bg-primary-navy transition-all duration-300 font-bold text-lg shadow-lg hover:scale-105"
            >
              Schedule a Live Demo
            </button>
          </div>
        </div>
      </section>

      {/* Why Restaurants Choose Us - Benefits */}
      <section className="bg-energy-red pt-16 pb-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-inter text-4xl sm:text-5xl text-white mb-4">
            Why Restaurants Choose <br /><span className="text-primary-navy">Ring to Kitchen AI</span>
          </h2>
          <p className="text-xl text-white/90">
            Restaurant-trained AI that understands your business
          </p>
        </div>
      </section>

      <section className="pt-0 pb-16 bg-gradient-to-b from-energy-red to-[#FF9470]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            <div className="flex items-center gap-6">
              <img src="/RK.png" alt="Restaurant-Trained AI" className="w-20 h-20 flex-shrink-0 object-contain" />
              <div className="border-l-4 border-white pl-6 py-2 flex-1">
                <h3 className="font-inter text-2xl text-primary-navy mb-2 font-bold">Restaurant-Trained AI</h3>
                <p className="text-white/90 text-lg leading-relaxed">
                  Understands "extra cheese," "gluten-free crust," and complex restaurant conversations. 99% accuracy on food orders.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <img src="/Ventas.png" alt="Works Your Way" className="w-20 h-20 flex-shrink-0 object-contain" />
              <div className="border-l-4 border-white pl-6 py-2 flex-1">
                <h3 className="font-inter text-2xl text-primary-navy mb-2 font-bold">Works Your Way</h3>
                <p className="text-white/90 text-lg leading-relaxed">
                  Complete standalone solution or seamless integration with your existing POS. You choose what works for your restaurant.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <img src="/expancion.png" alt="Proven Results" className="w-20 h-20 flex-shrink-0 object-contain" />
              <div className="border-l-4 border-white pl-6 py-2 flex-1">
                <h3 className="font-inter text-2xl text-primary-navy mb-2 font-bold">Proven Results</h3>
                <p className="text-white/90 text-lg leading-relaxed">
                  30% average increase in phone orders, 99.9% uptime, and enterprise-grade reliability. Real restaurants, real results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Stats Section */}
      <section className="py-16 bg-white relative overflow-hidden" style={{ backgroundImage: 'url(/15.png)', backgroundSize: '80%', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
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

      {/* Use Cases - Compact Version */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
            <source src="/Restaurant.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-primary-navy/80 z-10"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="text-center mb-16">
            <h2 className="font-inter text-4xl sm:text-5xl text-white mb-4 drop-shadow-lg" style={{ fontStyle: 'italic' }}>
              Perfect For Every <span className="text-energy-red">Restaurant Type</span>
            </h2>
            <p className="text-white/90 text-lg">From food trucks to fine dining, we've got you covered</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {/* Fast Casual */}
            <div className="bg-white rounded-2xl p-6 text-center hover:shadow-2xl hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <img src="/Hamburguesa.png" alt="Fast Casual" className="w-14 h-14 object-contain" />
              </div>
              <h3 className="font-bold text-primary-navy text-lg mb-2">Fast Casual</h3>
              <p className="text-sm text-gray-600">High-volume order processing during peak hours</p>
            </div>

            {/* Fine Dining */}
            <div className="bg-white rounded-2xl p-6 text-center hover:shadow-2xl hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <img src="/Restauran.png" alt="Fine Dining" className="w-14 h-14 object-contain" />
              </div>
              <h3 className="font-bold text-primary-navy text-lg mb-2">Fine Dining</h3>
              <p className="text-sm text-gray-600">Elegant reservation management and special requests</p>
            </div>

            {/* Food Trucks */}
            <div className="bg-white rounded-2xl p-6 text-center hover:shadow-2xl hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <img src="/foodtruck.png" alt="Food Trucks" className="w-14 h-14 object-contain" />
              </div>
              <h3 className="font-bold text-primary-navy text-lg mb-2">Food Trucks</h3>
              <p className="text-sm text-gray-600">Mobile ordering and location updates</p>
            </div>

            {/* Multi-Location Chains */}
            <div className="bg-white rounded-2xl p-6 text-center hover:shadow-2xl hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <img src="/Logistica.png" alt="Multi-Location Chains" className="w-14 h-14 object-contain" />
              </div>
              <h3 className="font-bold text-primary-navy text-lg mb-2">Multi-Location Chains</h3>
              <p className="text-sm text-gray-600">Centralized AI management across all locations</p>
            </div>

            {/* Cafés & Bakeries */}
            <div className="bg-white rounded-2xl p-6 text-center hover:shadow-2xl hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <img src="/Cafeteria.png" alt="Cafés & Bakeries" className="w-14 h-14 object-contain" />
              </div>
              <h3 className="font-bold text-primary-navy text-lg mb-2">Cafés & Bakeries</h3>
              <p className="text-sm text-gray-600">Morning rush order handling and pickup coordination</p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Quiz Section */}
      <section className="py-20 bg-soft-gray">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-energy-red font-semibold text-sm uppercase tracking-wider mb-3">Quick Assessment</p>
            <h2 className="font-inter text-4xl sm:text-5xl text-primary-navy mb-4">
              Is Your Restaurant <span className="text-energy-red">Ready for AI?</span>
            </h2>
            <p className="text-lg text-gray-600">
              Answer a few quick questions to see how AI could benefit your restaurant
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="space-y-8">
              <div className="border-b border-gray-200 pb-8">
                <p className="text-sm text-energy-red font-medium mb-4">Question 1 of 5</p>
                <h3 className="font-inter text-xl text-primary-navy mb-6">How many phone calls does your restaurant receive daily?</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <button className="text-left p-4 border-2 border-gray-200 rounded-xl hover:border-energy-red hover:bg-energy-red/5 transition-all">
                    <span className="text-gray-700">Less than 20 calls</span>
                  </button>
                  <button className="text-left p-4 border-2 border-gray-200 rounded-xl hover:border-energy-red hover:bg-energy-red/5 transition-all">
                    <span className="text-gray-700">20-50 calls</span>
                  </button>
                  <button className="text-left p-4 border-2 border-gray-200 rounded-xl hover:border-energy-red hover:bg-energy-red/5 transition-all">
                    <span className="text-gray-700">50-100 calls</span>
                  </button>
                  <button className="text-left p-4 border-2 border-gray-200 rounded-xl hover:border-energy-red hover:bg-energy-red/5 transition-all">
                    <span className="text-gray-700">More than 100 calls</span>
                  </button>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="flex items-center gap-4">
                <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-energy-red rounded-full" style={{ width: '20%' }}></div>
                </div>
                <span className="text-sm text-gray-500 font-medium">20%</span>
              </div>

              {/* Quiz CTA */}
              <div className="text-center pt-4">
                <Link
                  href="/pricing"
                  className="inline-block bg-energy-red text-white px-8 py-4 rounded-lg hover:bg-primary-navy transition-all duration-300 font-bold text-lg shadow-lg hover:scale-105"
                >
                  Find Your Perfect Plan
                </Link>
                <p className="text-sm text-gray-500 mt-4">Get personalized recommendations based on your needs</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Savings Calculator - Compact Version */}
      <section className="py-20 bg-gradient-to-br from-primary-navy to-[#0d1f3c]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-energy-red font-semibold text-sm uppercase tracking-wider mb-3">Calculate Your Savings</p>
            <h2 className="font-inter text-4xl sm:text-5xl text-white mb-4">
              How Much Are <span className="text-energy-red">Missed Calls</span> Costing You?
            </h2>
          </div>

          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              {/* Daily Calls */}
              <div>
                <div className="flex justify-between mb-2">
                  <label className="font-medium text-gray-700">Daily calls</label>
                  <span className="font-bold text-energy-red text-xl">{dailyCalls}</span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="200"
                  value={dailyCalls}
                  onChange={(e) => setDailyCalls(Number(e.target.value))}
                  className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-energy-red"
                />
              </div>

              {/* Missed Call Percentage */}
              <div>
                <div className="flex justify-between mb-2">
                  <label className="font-medium text-gray-700">Missed calls</label>
                  <span className="font-bold text-energy-red text-xl">{missedCallPercent}%</span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="50"
                  value={missedCallPercent}
                  onChange={(e) => setMissedCallPercent(Number(e.target.value))}
                  className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-energy-red"
                />
              </div>

              {/* Average Order Value */}
              <div>
                <div className="flex justify-between mb-2">
                  <label className="font-medium text-gray-700">Avg order</label>
                  <span className="font-bold text-energy-red text-xl">${avgOrderValue}</span>
                </div>
                <input
                  type="range"
                  min="15"
                  max="100"
                  value={avgOrderValue}
                  onChange={(e) => setAvgOrderValue(Number(e.target.value))}
                  className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-energy-red"
                />
              </div>
            </div>

            {/* Results */}
            <div className="bg-gradient-to-r from-energy-red to-[#FF6B4A] rounded-xl p-6 text-center text-white">
              <div className="grid md:grid-cols-3 gap-6 items-center">
                <div>
                  <p className="text-white/80 text-sm mb-1">Missed calls/month</p>
                  <p className="text-3xl font-bold">{missedCallsPerMonth}</p>
                </div>
                <div className="md:border-x md:border-white/20 py-4">
                  <p className="text-white/80 text-sm mb-1">Monthly revenue lost</p>
                  <p className="text-4xl font-bold">${totalMonthlySavings.toLocaleString()}</p>
                </div>
                <div>
                  <Link
                    href="/pricing"
                    className="inline-block bg-white text-energy-red px-6 py-3 rounded-lg font-bold hover:bg-primary-navy hover:text-white transition-all duration-300"
                  >
                    See Full Calculator →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials - Featured */}
      <section className="py-20 bg-gradient-to-b from-white to-soft-gray relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <p className="text-energy-red font-semibold text-sm uppercase tracking-wider mb-3">Testimonials</p>
            <h2 className="font-inter text-4xl sm:text-5xl text-primary-navy mb-4">
              Loved by Restaurant Owners
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              See what restaurant owners are saying about Ring to Kitchen AI
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TESTIMONIALS.slice(0, 3).map((testimonial, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 relative border border-gray-100">
                <div className="absolute -top-4 left-8">
                  <div className="bg-energy-red w-10 h-10 rounded-full flex items-center justify-center shadow-lg">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>
                </div>

                <div className="flex gap-1 mb-6 mt-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <p className="text-gray-700 mb-8 leading-relaxed text-lg">"{testimonial.quote}"</p>

                <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                  {idx === 0 ? (
                    <img src="/Maria.png" alt={testimonial.name} className="w-16 h-16 rounded-full object-cover shadow-md" />
                  ) : idx === 1 ? (
                    <img src="/James.png" alt={testimonial.name} className="w-16 h-16 rounded-full object-cover shadow-md" />
                  ) : (
                    <img src="/Sofia2.png" alt={testimonial.name} className="w-16 h-16 rounded-full object-cover shadow-md" />
                  )}
                  <div>
                    <p className="font-bold text-primary-navy text-lg">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.restaurant}</p>
                    <p className="text-xs text-gray-400">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/testimonials" className="inline-block bg-primary-navy text-white px-8 py-4 rounded-lg hover:bg-energy-red hover:scale-105 transition-all duration-300 font-bold text-lg shadow-lg">
              Read All Testimonials
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
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
              View Full Pricing Details
            </Link>
          </div>
        </div>
      </section>

      {/* Blog Preview - Featured Only */}
      <section className="py-20 bg-primary-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-energy-red font-semibold text-sm uppercase tracking-wider mb-3">Blog</p>
            <h2 className="font-inter text-4xl sm:text-5xl text-white mb-4">
              Latest <span className="text-energy-red">Insights</span>
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Stay ahead of the restaurant industry
            </p>
          </div>

          {/* Featured Post Only */}
          {latestPosts[0] && (
            <Link href={`/blog/${latestPosts[0].slug}`} className="block bg-white rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-300 group">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="h-64 md:h-80 overflow-hidden">
                  <img
                    src={latestPosts[0].image}
                    alt={latestPosts[0].title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center bg-soft-gray">
                  <span className="inline-block bg-energy-red text-white text-xs px-3 py-1 rounded-full mb-4 w-fit">FEATURED</span>
                  <h3 className="font-inter text-2xl md:text-3xl text-primary-navy mb-4 group-hover:text-energy-red transition-colors">
                    {latestPosts[0].title}
                  </h3>
                  <p className="text-gray-600 mb-6 line-clamp-3">{latestPosts[0].excerpt}</p>
                  <div className="flex items-center gap-4 flex-wrap">
                    <span className="text-energy-red text-sm font-medium">{latestPosts[0].category}</span>
                    <span className="text-gray-400">•</span>
                    <span className="text-gray-500 text-sm">{latestPosts[0].readTime}</span>
                    <span className="text-gray-400">•</span>
                    <span className="text-gray-500 text-sm">{new Date(latestPosts[0].date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                  </div>
                </div>
              </div>
            </Link>
          )}

          <div className="text-center mt-12">
            <Link href="/resources" className="inline-block bg-energy-red text-white px-8 py-4 rounded-lg hover:bg-white hover:text-energy-red hover:scale-105 transition-all duration-300 font-bold shadow-lg">
              View All Articles
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden text-white flex items-center" style={{ minHeight: '600px', backgroundImage: 'url(/food.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/50 to-transparent z-10"></div>

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
