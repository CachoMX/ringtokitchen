'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import DemoModal from '@/components/DemoModal';
import { PRICING_TIERS } from '@/lib/constants';
import type { Metadata } from 'next';

export default function PricingPage() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: 'Can I cancel anytime?',
      answer: 'Yes! There are no long-term contracts. You can cancel your subscription at any time with no penalties or fees.'
    },
    {
      question: 'Is there a setup fee?',
      answer: 'No setup fees for Starter and Professional tiers. Enterprise may have custom implementation fees depending on complexity.'
    },
    {
      question: 'What POS systems do you integrate with?',
      answer: 'We integrate with Toast, Square, Clover, Lightspeed, Revel, and many others. Custom integrations available for Enterprise tier.'
    },
    {
      question: 'How long does implementation take?',
      answer: 'Most restaurants are up and running within 3-7 days. Enterprise implementations may take 2-4 weeks depending on customization needs.'
    },
    {
      question: 'What happens if I exceed my minutes?',
      answer: 'We\'ll notify you when you reach 80% of your limit. You can upgrade to the next tier or purchase additional minutes at $0.15/minute.'
    },
    {
      question: 'Do you offer a free trial?',
      answer: 'We offer a 14-day money-back guarantee. Try the service risk-free and get a full refund if you\'re not satisfied.'
    },
    {
      question: 'Can the AI handle multiple languages?',
      answer: 'Yes! Our AI supports English and Spanish natively. Additional languages available on Professional and Enterprise tiers.'
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      <Header onDemoClick={() => setIsDemoModalOpen(true)} />

      <div className="pt-24">
        {/* Hero */}
        <section className="py-20 bg-gradient-to-br from-primary-navy to-[#0d1f3c] text-white relative overflow-hidden flex items-center" style={{ minHeight: '600px', backgroundImage: 'url(/calle.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        {/* Overlay para mantener legibilidad del texto */}
        <div className="absolute inset-0 bg-primary-navy/80 z-0"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 w-full">
          <h1 className="font-inter text-5xl sm:text-6xl mb-6">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-white/80">
            No hidden fees. No long-term contracts. Cancel anytime.
          </p>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-6">
            {PRICING_TIERS.map((tier, idx) => (
              <div
                key={idx}
                className={`rounded-2xl transition transform hover:-translate-y-2 ${
                  tier.highlighted
                    ? 'bg-white shadow-2xl ring-2 ring-energy-red md:scale-105'
                    : 'bg-white shadow-lg border border-soft-gray'
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
                    <div className="mb-6">
                      <span className="font-inter text-5xl text-primary-navy">${tier.price}</span>
                      <span className="text-gray-600">/month</span>
                    </div>
                  ) : (
                    <div className="mb-6 py-4">
                      <p className="font-inter text-3xl text-primary-navy">Custom</p>
                      <p className="text-sm text-gray-600">Based on your needs</p>
                    </div>
                  )}

                  {/* Best For */}
                  <div className="bg-soft-gray rounded-lg p-3 mb-6">
                    <p className="text-xs font-bold text-primary-navy mb-1">BEST FOR</p>
                    <p className="text-sm text-gray-700">{tier.bestFor}</p>
                  </div>

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
                    {tier.features.map((feature, fidx) => (
                      <div key={fidx} className="flex items-start gap-3">
                        <span className={`text-xl mt-0.5 ${feature.included ? 'text-green-600' : 'text-gray-300'}`}>
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

          {/* Annual Savings */}
          <div className="text-center mt-12 p-6 bg-soft-gray rounded-xl">
            <p className="text-lg">
              💰 <span className="font-bold text-primary-navy">Save 20%</span> when billed annually
            </p>
          </div>
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="py-20 bg-soft-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-inter text-4xl text-primary-navy text-center mb-12">
            Full Feature Comparison
          </h2>

          <div className="bg-white rounded-xl shadow-lg overflow-x-auto">
            <table className="w-full">
              <thead className="bg-primary-navy text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-bold">Feature</th>
                  <th className="px-6 py-4 text-center font-bold">Starter</th>
                  <th className="px-6 py-4 text-center font-bold">Professional</th>
                  <th className="px-6 py-4 text-center font-bold">Enterprise</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {[
                  { name: 'Monthly Minutes', starter: '500', pro: '2,000', enterprise: 'Unlimited' },
                  { name: 'Concurrent Lines', starter: '2', pro: '5', enterprise: 'Unlimited' },
                  { name: 'System Integrations', starter: '1', pro: '3', enterprise: 'Unlimited' },
                  { name: 'Order Processing', starter: 'Basic', pro: 'Advanced', enterprise: 'Advanced' },
                  { name: 'Reservation Management', starter: '✗', pro: '✓', enterprise: '✓' },
                  { name: 'Custom Voice Options', starter: '✗', pro: '✓', enterprise: '✓' },
                  { name: 'Analytics & Reporting', starter: 'Basic', pro: 'Daily', enterprise: 'Real-time' },
                  { name: 'Support Response Time', starter: 'Email', pro: '24h', enterprise: 'Dedicated Manager' },
                  { name: 'API Access', starter: '✗', pro: '✗', enterprise: '✓' },
                  { name: 'White-label Options', starter: '✗', pro: '✗', enterprise: '✓' },
                ].map((row, idx) => (
                  <tr key={idx} className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">{row.name}</td>
                    <td className="px-6 py-4 text-center text-gray-700">{row.starter}</td>
                    <td className="px-6 py-4 text-center text-gray-700">{row.pro}</td>
                    <td className="px-6 py-4 text-center text-gray-700">{row.enterprise}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-inter text-4xl text-primary-navy text-center mb-12">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white border border-soft-gray rounded-xl overflow-hidden">
                <button
                  onClick={() => setExpandedFAQ(expandedFAQ === idx ? null : idx)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition"
                >
                  <span className="font-bold text-primary-navy">{faq.question}</span>
                  <span className="text-2xl text-energy-red">{expandedFAQ === idx ? '−' : '+'}</span>
                </button>
                {expandedFAQ === idx && (
                  <div className="px-6 py-4 bg-gray-50 border-t border-soft-gray">
                    <p className="text-gray-700">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 relative overflow-hidden text-white">
        {/* Video Background */}
        <div className="absolute inset-0 overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute h-full object-cover"
            style={{ minWidth: '100%', width: 'auto', left: '50%', transform: 'translateX(-60%)' }}
          >
            <source src="/Chica.mp4" type="video/mp4" />
          </video>
          {/* White Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/50 to-transparent z-10"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-20">
          <h2 className="font-inter text-4xl sm:text-5xl mb-6 text-primary-navy">
            Still Not Sure? Let's Talk.
          </h2>
          <p className="text-xl mb-8 text-gray-700">
            Schedule a personalized demo and see Ring to Kitchen AI in action
          </p>
          <button
            onClick={() => setIsDemoModalOpen(true)}
            className="bg-energy-red text-white px-8 py-4 rounded-lg hover:bg-primary-navy hover:text-white hover:scale-105 transition-all duration-300 font-bold text-lg shadow-lg"
          >
            Schedule Demo
          </button>
        </div>
      </section>
      </div>

      <Footer />
      <DemoModal isOpen={isDemoModalOpen} onClose={() => setIsDemoModalOpen(false)} />
    </main>
  );
}
