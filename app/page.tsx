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

  const stepIcons = ['10.png', 'Rk.png', '4.png', 'Resultados .png'];

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

      {/* Title in solid orange banner - full width */}
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

      {/* Value Proposition Section */}
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
                          <div className="relative rounded-full w-32 h-32 mx-auto flex items-center justify-center shadow-lg overflow-hidden">
                            <img
                              src={`/${stepIcons[idx]}`}
                              alt={step.title}
                              className="w-28 h-28 object-contain"
                              style={stepIcons[idx] === 'Rk.png' ? { mixBlendMode: 'multiply' } : {}}
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
              Perfect For Every <span className="text-energy-red">Restaurant Type</span>
            </h2>
            <p className="text-white/90 text-lg">From food trucks to fine dining, we've got you covered</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {USE_CASES.map((useCase, idx) => {
              const getIcon = (title: string) => {
                switch (title) {
                  case 'Fast Casual':
                    return (
                      <img src="/hamburguesa.png" alt="Fast Casual" className="w-16 h-16 mx-auto object-contain" />
                    );
                  case 'Fine Dining':
                    return (
                      <img src="/Restauran.png" alt="Fine Dining" className="w-16 h-16 mx-auto object-contain" />
                    );
                  case 'Food Trucks':
                    return (
                      <img src="/foodtruck.png" alt="Food Trucks" className="w-16 h-16 mx-auto object-contain" />
                    );
                  case 'Multi-Location Chains':
                    return (
                      <img src="/logistica.png" alt="Multi-Location Chains" className="w-16 h-16 mx-auto object-contain" />
                    );
                  case 'Cafés & Bakeries':
                    return (
                      <img src="/cafeteria.png" alt="Cafés & Bakeries" className="w-16 h-16 mx-auto object-contain" />
                    );
                  default:
                    return <div className="text-4xl mb-3">{useCase.icon}</div>;
                }
              };

              return (
                <div key={idx} className="relative h-full">
                  {/* Connecting line for desktop */}
                  {idx < USE_CASES.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-energy-red/50 to-transparent z-0"></div>
                  )}

                  <div className="bg-white/95 backdrop-blur rounded-xl p-6 text-center hover:shadow-2xl hover:scale-105 transition-all duration-300 border-2 border-white/50 h-full flex flex-col justify-between min-h-[200px]">
                    <div className="mb-3">{getIcon(useCase.title)}</div>
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
                {/* Quote icon */}
                <div className="absolute -top-4 left-8">
                  <div className="bg-energy-red w-10 h-10 rounded-full flex items-center justify-center shadow-lg">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-6 mt-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Quote */}
                <p className="text-gray-700 mb-8 leading-relaxed text-lg">
                  "{testimonial.quote}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                  {idx === 0 ? (
                    <img
                      src="/Maria.png"
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover shadow-md"
                    />
                  ) : idx === 1 ? (
                    <img
                      src="/James.png"
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover shadow-md"
                    />
                  ) : (
                    <img
                      src="/Sofia2.png"
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover shadow-md"
                    />
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
        </div>
      </section>

      {/* Blog Preview */}
      <section className="py-20 relative overflow-hidden bg-warm-taupe/30">

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
      <section className="relative overflow-hidden text-white flex items-center" style={{ minHeight: '600px', backgroundImage: 'url(/salema.png)', backgroundSize: '150%', backgroundPosition: 'right center' }}>
        {/* White Gradient Overlay */}
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
