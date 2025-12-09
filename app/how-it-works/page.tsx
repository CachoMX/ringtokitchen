'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import DemoModal from '@/components/DemoModal';
import { HOW_IT_WORKS_STEPS } from '@/lib/constants';
import Link from 'next/link';

export default function HowItWorksPage() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  const stepIcons = ['10.png', 'RK.png', '4.png', 'Resultados .png'];

  const detailedSteps = [
    {
      title: 'Customer Calls',
      subtitle: 'Call Capture',
      description: 'When a customer calls your restaurant, our system immediately picks up. No more missed calls during busy periods.',
      details: [
        'Instant call pickup - no wait times',
        'Handles multiple simultaneous calls',
        'Works 24/7, 365 days a year',
        'Seamless handoff to staff when needed',
      ],
    },
    {
      title: 'AI Answers',
      subtitle: 'Natural Conversation',
      description: 'Our AI engages in natural, human-like conversation. It understands context, accents, and complex requests.',
      details: [
        'Natural language understanding',
        'Supports English and Spanish',
        'Handles interruptions gracefully',
        'Remembers conversation context',
      ],
    },
    {
      title: 'Takes Action',
      subtitle: 'Order Processing',
      description: 'The AI processes orders, books reservations, and answers questions accurately and efficiently.',
      details: [
        '99% order accuracy rate',
        'Handles modifications and special requests',
        'Processes complex multi-item orders',
        'Confirms details before completing',
      ],
    },
    {
      title: 'Syncs Data',
      subtitle: 'System Integration',
      description: 'All information syncs directly to your POS system in real-time. No manual entry required.',
      details: [
        'Real-time POS integration',
        'Automatic menu sync',
        'Order goes straight to kitchen',
        'Analytics and reporting included',
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      <Header onDemoClick={() => setIsDemoModalOpen(true)} />

      <div className="pt-24">
        {/* Hero */}
        <section className="relative min-h-[600px] flex items-center overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src="/calle2.png"
              alt="Restaurant Street"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary-navy/95 via-primary-navy/80 to-primary-navy/60"></div>
          </div>

          {/* Animated decorative elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 left-10 w-64 h-64 bg-energy-red/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-energy-red/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
            <div className="max-w-3xl">
              <p className="text-energy-red font-semibold text-sm uppercase tracking-wider mb-4">Our Process</p>
              <h1 className="font-inter text-4xl sm:text-5xl lg:text-6xl text-white mb-6 leading-tight">
                From Ring to Kitchen in{' '}
                <span className="text-energy-red">Four Simple Steps</span>
              </h1>
              <p className="text-xl text-white/80 max-w-2xl">
                See exactly how our AI transforms every phone call into a seamless customer experience
              </p>
            </div>
          </div>
        </section>

        {/* Detailed Steps */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {detailedSteps.map((step, idx) => (
              <div key={idx} className={`py-16 ${idx !== 0 ? 'border-t border-gray-200' : ''}`}>
                <div className={`grid lg:grid-cols-2 gap-12 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  <div className={idx % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-energy-red to-[#FF6B4A] rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-lg">
                        {idx + 1}
                      </div>
                      <div>
                        <p className="text-energy-red font-semibold text-sm uppercase tracking-wider">{step.subtitle}</p>
                        <h2 className="font-inter text-3xl text-primary-navy">{step.title}</h2>
                      </div>
                    </div>

                    <p className="text-lg text-gray-600 mb-8">
                      {step.description}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {step.details.map((detail, didx) => (
                        <div key={didx} className="flex items-center gap-3">
                          <div className="w-6 h-6 bg-soft-gray rounded-full flex items-center justify-center flex-shrink-0">
                            <svg className="w-4 h-4 text-energy-red" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <span className="text-gray-700">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className={idx % 2 === 1 ? 'lg:order-1' : ''}>
                    <div className="bg-gradient-to-br from-soft-gray to-white rounded-2xl p-8 shadow-xl border border-gray-100">
                      <div className="relative rounded-full w-48 h-48 mx-auto flex items-center justify-center shadow-lg overflow-hidden bg-white">
                        <img
                          src={`/${stepIcons[idx]}`}
                          alt={step.title}
                          className="w-40 h-40 object-contain"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Visual Process Flow */}
        <section className="py-20 bg-soft-gray">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-inter text-4xl text-primary-navy mb-4">
                The Complete Flow
              </h2>
              <p className="text-lg text-gray-600">
                A visual representation of how Ring to Kitchen AI works
              </p>
            </div>

            <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
              {HOW_IT_WORKS_STEPS.map((step, idx) => (
                <div key={idx} className="flex items-center">
                  <div className="bg-white rounded-2xl p-6 shadow-lg text-center min-w-[200px]">
                    <div className="w-12 h-12 bg-energy-red rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                      {step.number}
                    </div>
                    <h3 className="font-bold text-primary-navy mb-2">{step.title}</h3>
                    <p className="text-sm text-gray-600">{step.description}</p>
                  </div>
                  {idx < HOW_IT_WORKS_STEPS.length - 1 && (
                    <div className="hidden lg:block w-12 h-1 bg-gradient-to-r from-energy-red to-primary-navy mx-2"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Integration Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-energy-red font-semibold text-sm uppercase tracking-wider mb-3">Integration</p>
                <h2 className="font-inter text-4xl text-primary-navy mb-6">
                  Seamless POS Integration
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Ring to Kitchen AI integrates directly with your existing point-of-sale system.
                  Orders flow automatically from call to kitchen with zero manual entry.
                </p>

                <div className="space-y-4">
                  {[
                    { title: 'Real-Time Sync', desc: 'Orders appear in your POS instantly' },
                    { title: 'Menu Updates', desc: 'Changes sync automatically to our AI' },
                    { title: 'Price Changes', desc: 'Always uses current pricing' },
                    { title: 'Inventory Aware', desc: 'Knows what\'s available to sell' },
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-4 bg-soft-gray rounded-xl p-4">
                      <div className="w-10 h-10 bg-energy-red rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold text-primary-navy">{item.title}</h4>
                        <p className="text-sm text-gray-600">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-primary-navy to-[#1a3a5c] rounded-2xl p-8 text-white">
                <h3 className="font-inter text-2xl mb-6">Supported Systems</h3>
                <div className="grid grid-cols-2 gap-4">
                  {['Toast', 'Square', 'Clover', 'Lightspeed', 'Revel', 'Custom API'].map((system, idx) => (
                    <div key={idx} className="bg-white/10 rounded-lg p-4 text-center">
                      <p className="font-bold">{system}</p>
                    </div>
                  ))}
                </div>
                <p className="text-white/70 text-sm mt-6 text-center">
                  Don't see your system? Contact us for custom integration options.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-r from-energy-red to-[#FF6B4A]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-inter text-4xl text-white mb-6">
              Ready to See It in Action?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Schedule a personalized demo and see how Ring to Kitchen AI can transform your restaurant
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setIsDemoModalOpen(true)}
                className="bg-white text-energy-red px-8 py-4 rounded-lg hover:bg-primary-navy hover:text-white transition-all duration-300 font-bold text-lg shadow-lg"
              >
                Schedule Demo
              </button>
              <Link
                href="/pricing"
                className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-energy-red transition-all duration-300 font-bold text-lg"
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
