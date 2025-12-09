'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import DemoModal from '@/components/DemoModal';
import { TESTIMONIALS } from '@/lib/constants';
import Link from 'next/link';

export default function TestimonialsPage() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  const videoTestimonials = [
    { id: 1, name: 'Carlos Mendoza', restaurant: 'Taquería El Sol', metric: '+45%', metricDesc: 'More orders captured' },
    { id: 2, name: 'Lisa Chen', restaurant: 'Golden Dragon Kitchen', metric: '3 hrs', metricDesc: 'Daily time saved' },
    { id: 3, name: 'Roberto Esparza', restaurant: 'La Cocina de Abuela', metric: '98%', metricDesc: 'Customer satisfaction' },
  ];

  const successCases = [
    {
      id: 1,
      image: '/calle.png',
      name: 'Bella Italia Trattoria',
      description: 'Family-owned Italian restaurant that struggled with missed dinner rush calls. After implementing Ring to Kitchen AI, they captured every order and increased weekend revenue significantly.',
      metric1Value: '+38%',
      metric1Label: 'Revenue Increase',
      metric2Value: '0',
      metric2Label: 'Missed Calls'
    },
    {
      id: 2,
      image: '/chef.jpg',
      name: 'Sakura Sushi House',
      description: 'High-volume sushi restaurant that needed to handle complex phone orders during peak hours. AI now manages all takeout orders while staff focuses on dine-in guests.',
      metric1Value: '150+',
      metric1Label: 'Daily Orders',
      metric2Value: '4.9★',
      metric2Label: 'Customer Rating'
    },
    {
      id: 3,
      image: '/vino.png',
      name: 'El Rancho Mexicano',
      description: 'Popular Mexican restaurant that was losing customers to voicemail. Now their AI assistant handles bilingual orders 24/7, even during the busiest lunch hours.',
      metric1Value: '24/7',
      metric1Label: 'Availability',
      metric2Value: '+52%',
      metric2Label: 'Order Volume'
    },
  ];

  const quotes = [
    {
      id: 1,
      image: '/James.png',
      quote: 'Ring to Kitchen AI transformed our business. We went from missing 30% of our calls to capturing every single order. Our weekend revenue increased by 40% in just two months.',
      name: 'Antonio Reyes',
      position: 'Owner',
      restaurant: 'Casa del Mar Restaurant'
    },
    {
      id: 2,
      image: '/Sofia.png',
      quote: 'The AI understands our menu better than some of our staff! It handles modifications, allergies, and special requests flawlessly. Our customers love the quick, professional service.',
      name: 'Jennifer Walsh',
      position: 'General Manager',
      restaurant: 'The Green Table Bistro'
    },
    {
      id: 3,
      image: '/Sofia2.png',
      quote: 'We were skeptical at first, but the results speak for themselves. Staff is happier, customers are satisfied, and we\'re making more money. It\'s a no-brainer investment.',
      name: 'Marco DiStefano',
      position: 'Co-Owner',
      restaurant: 'Nonna\'s Kitchen'
    },
  ];

  return (
    <main className="min-h-screen">
      <Header onDemoClick={() => setIsDemoModalOpen(true)} />

      <div className="pt-24">
        {/* Hero */}
        <section className="relative min-h-[600px] flex items-center overflow-hidden">
          <div className="absolute inset-0">
            <img src="/chef.png" alt="Restaurant Chef" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-primary-navy/95 via-primary-navy/80 to-primary-navy/60"></div>
          </div>

          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 left-10 w-64 h-64 bg-energy-red/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-energy-red/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
            <div className="max-w-3xl">
              <p className="text-energy-red font-semibold text-sm uppercase tracking-wider mb-4">Real Testimonials</p>
              <h1 className="font-inter text-4xl sm:text-5xl lg:text-6xl text-white mb-6 leading-tight">
                Real Stories from Restaurants that{' '}
                <span className="text-energy-red">Transformed Their Service</span> with AI
              </h1>
              <p className="text-xl text-white/80 mb-8">
                Discover how restaurants like yours are revolutionizing customer service
                and increasing sales with Ring to Kitchen AI.
              </p>
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => setIsDemoModalOpen(true)}
                  className="bg-energy-red text-white px-8 py-4 rounded-lg hover:bg-white hover:text-energy-red transition-all duration-300 font-bold text-lg shadow-lg"
                >
                  Schedule Demo
                </button>
                <Link href="#videos" className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-primary-navy transition-all duration-300 font-bold text-lg">
                  Watch Testimonials
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Testimonials */}
        <section className="py-20 bg-gradient-to-b from-white to-soft-gray">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <p className="text-energy-red font-semibold text-sm uppercase tracking-wider mb-3">What They Say</p>
              <h2 className="font-inter text-4xl sm:text-5xl text-primary-navy mb-4">
                Loved by Restaurant <span className="text-energy-red">Owners</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Real feedback from real restaurant owners using Ring to Kitchen AI
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {TESTIMONIALS.map((testimonial, idx) => (
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

                  <p className="text-gray-700 mb-8 leading-relaxed">"{testimonial.quote}"</p>

                  <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                    {idx === 0 && <img src="/Maria.png" alt={testimonial.name} className="w-14 h-14 rounded-full object-cover shadow-md" />}
                    {idx === 1 && <img src="/James.png" alt={testimonial.name} className="w-14 h-14 rounded-full object-cover shadow-md" />}
                    {idx === 2 && <img src="/Sofia2.png" alt={testimonial.name} className="w-14 h-14 rounded-full object-cover shadow-md" />}
                    {idx === 3 && <div className="w-14 h-14 rounded-full bg-gradient-to-br from-energy-red to-primary-navy flex items-center justify-center text-white text-xl">DP</div>}
                    <div>
                      <p className="font-bold text-primary-navy">{testimonial.name}</p>
                      <p className="text-sm text-gray-600">{testimonial.restaurant}</p>
                      <p className="text-xs text-gray-400">{testimonial.location}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Video Testimonials Grid */}
        <section id="videos" className="py-20 bg-gradient-to-b from-energy-red to-[#FF9470]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full mb-4">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-white font-semibold text-sm uppercase tracking-wider">Coming Soon</span>
              </div>
              <h2 className="font-inter text-4xl sm:text-5xl text-white mb-4">
                Hear From Our <span className="text-primary-navy">Clients</span>
              </h2>
              <p className="text-lg text-white/90 max-w-2xl mx-auto">
                Video testimonials from real restaurants sharing their success stories with Ring to Kitchen AI
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {videoTestimonials.map((testimonial) => (
                <div key={testimonial.id} className="group">
                  <div className="relative bg-gradient-to-br from-primary-navy to-[#1a3a5c] rounded-2xl overflow-hidden aspect-video mb-4 shadow-xl">
                    <div className="absolute inset-0 flex items-center justify-center flex-col gap-3">
                      <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center">
                        <svg className="w-10 h-10 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <p className="text-white/70 text-sm font-medium">Video Coming Soon</p>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="bg-energy-red/90 text-white text-xs px-3 py-1 rounded-full font-bold">Coming Soon</span>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-energy-red to-[#FF6B4A] rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-lg">{testimonial.name.charAt(0)}</span>
                      </div>
                      <div>
                        <h3 className="font-bold text-primary-navy">{testimonial.name}</h3>
                        <p className="text-sm text-gray-600">{testimonial.restaurant}</p>
                      </div>
                    </div>
                    <div className="bg-soft-gray rounded-lg p-4 text-center">
                      <p className="text-energy-red font-bold text-2xl mb-1">{testimonial.metric}</p>
                      <p className="text-gray-600 text-sm">{testimonial.metricDesc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Success Cases */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <p className="text-energy-red font-semibold text-sm uppercase tracking-wider mb-3">Success Stories</p>
              <h2 className="font-inter text-4xl sm:text-5xl text-primary-navy mb-4">
                Proven <span className="text-energy-red">Results</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Detailed case studies from restaurants that transformed their operations
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {successCases.map((caseItem) => (
                <div key={caseItem.id} className="group bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100">
                  <div className="relative h-64 overflow-hidden">
                    <img src={caseItem.image} alt={caseItem.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-navy/80 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="inline-block bg-energy-red text-white text-xs px-3 py-1 rounded-full">SUCCESS STORY</span>
                    </div>
                  </div>

                  <div className="p-8">
                    <h3 className="font-inter text-2xl text-primary-navy mb-3">{caseItem.name}</h3>
                    <p className="text-gray-600 mb-6">{caseItem.description}</p>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-soft-gray rounded-lg p-4 text-center">
                        <p className="text-energy-red font-bold text-xl">{caseItem.metric1Value}</p>
                        <p className="text-gray-600 text-xs">{caseItem.metric1Label}</p>
                      </div>
                      <div className="bg-soft-gray rounded-lg p-4 text-center">
                        <p className="text-primary-navy font-bold text-xl">{caseItem.metric2Value}</p>
                        <p className="text-gray-600 text-xs">{caseItem.metric2Label}</p>
                      </div>
                    </div>

                    <button className="w-full bg-primary-navy text-white py-3 rounded-lg hover:bg-energy-red transition-colors font-bold">
                      Read Full Case
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quotes Carousel */}
        <section className="py-20 bg-gradient-to-b from-primary-navy to-[#2a6aa8] relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '50px 50px' }}></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <p className="text-energy-red font-semibold text-sm uppercase tracking-wider mb-3">What They Say</p>
              <h2 className="font-inter text-4xl sm:text-5xl text-white mb-4">
                Words from Our <span className="text-energy-red">Clients</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {quotes.map((quoteItem) => (
                <div key={quoteItem.id} className="relative group">
                  <div className="absolute inset-0 rounded-2xl overflow-hidden">
                    <img src={quoteItem.image} alt="" className="w-full h-full object-cover opacity-30 blur-sm group-hover:blur-none group-hover:opacity-40 transition-all duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-b from-primary-navy/60 to-primary-navy/90"></div>
                  </div>

                  <div className="relative p-8 min-h-[350px] flex flex-col justify-between">
                    <div className="mb-6">
                      <div className="w-16 h-16 bg-energy-red/20 rounded-full flex items-center justify-center">
                        <svg className="w-8 h-8 text-energy-red" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                        </svg>
                      </div>
                    </div>

                    <div className="flex-1">
                      <p className="text-white text-xl font-light leading-relaxed mb-6">"{quoteItem.quote}"</p>
                    </div>

                    <div className="border-t border-white/20 pt-6">
                      <p className="text-white font-bold">{quoteItem.name}</p>
                      <p className="text-white/60 text-sm">{quoteItem.position} - {quoteItem.restaurant}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Bar */}
        <section className="py-16 bg-gradient-to-r from-energy-red to-[#FF6B4A]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <p className="text-white text-5xl font-bold mb-2">150+</p>
                <p className="text-white/80">Active Restaurants</p>
              </div>
              <div>
                <p className="text-white text-5xl font-bold mb-2">50K+</p>
                <p className="text-white/80">Calls Processed</p>
              </div>
              <div>
                <p className="text-white text-5xl font-bold mb-2">4.9/5</p>
                <p className="text-white/80">Avg Satisfaction</p>
              </div>
              <div>
                <p className="text-white text-5xl font-bold mb-2">+35%</p>
                <p className="text-white/80">Avg Sales Increase</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-navy via-[#1a3a5c] to-primary-navy"></div>
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-energy-red/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-energy-red/5 rounded-full blur-3xl"></div>
          </div>

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <div className="w-24 h-24 bg-energy-red/20 rounded-full flex items-center justify-center mx-auto mb-8">
              <svg className="w-12 h-12 text-energy-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
            </div>

            <h2 className="font-inter text-4xl sm:text-5xl text-white mb-6">
              Join the Restaurants That{' '}
              <span className="text-energy-red">Transformed Their Business</span>
            </h2>
            <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
              Schedule a personalized demo and discover how Ring to Kitchen AI
              can revolutionize your restaurant's phone service.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setIsDemoModalOpen(true)}
                className="bg-energy-red text-white px-10 py-5 rounded-xl hover:bg-white hover:text-energy-red transition-all duration-300 font-bold text-xl shadow-2xl hover:scale-105"
              >
                Schedule a Demo
              </button>
              <Link href="/pricing" className="border-2 border-white text-white px-10 py-5 rounded-xl hover:bg-white hover:text-primary-navy transition-all duration-300 font-bold text-xl">
                View Plans
              </Link>
            </div>

            <div className="mt-12 flex flex-wrap justify-center gap-6">
              {['No commitment', 'Personalized demo', 'English & Spanish support'].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-white/60">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      <Footer />
      <DemoModal isOpen={isDemoModalOpen} onClose={() => setIsDemoModalOpen(false)} />
    </main>
  );
}
