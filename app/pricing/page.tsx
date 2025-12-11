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

  // Needs Assessment State
  const [selectedCalls, setSelectedCalls] = useState<number | null>(null);
  const [selectedLocations, setSelectedLocations] = useState<number | null>(null);
  const [selectedFeatures, setSelectedFeatures] = useState<number | null>(null);
  const [selectedSupport, setSelectedSupport] = useState<number | null>(null);

  // Calculate recommended tier based on selections
  const getRecommendedTier = () => {
    const total = (selectedCalls || 0) + (selectedLocations || 0) + (selectedFeatures || 0) + (selectedSupport || 0);
    if (total <= 4) return 'Starter';
    if (total <= 8) return 'Professional';
    return 'Enterprise';
  };

  const allSelected = selectedCalls !== null && selectedLocations !== null && selectedFeatures !== null && selectedSupport !== null;

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
        <section className="relative min-h-[600px] flex items-center overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src="/Copia de 7.png"
              alt="Restaurant Technology"
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
              <p className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Pricing</p>
              <h1 className="font-inter text-4xl sm:text-5xl lg:text-6xl text-white mb-6 leading-tight whitespace-nowrap">
                Simple, <span className="text-energy-red">Transparent Pricing</span>
              </h1>
              <p className="text-xl text-white/80">
                No hidden fees. No long-term contracts. Cancel anytime.
              </p>
            </div>
          </div>
        </section>

      {/* Pricing Tiers */}
      <section className="py-20 relative overflow-hidden bg-soft-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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

      {/* Needs Assessment Table */}
      <section className="py-20 relative" style={{ backgroundImage: 'url(/onda.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-gradient-to-br from-primary-navy/90 to-[#0d1f3c]/95"></div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <p className="text-energy-red font-semibold text-sm uppercase tracking-wider mb-3">Find Your Plan</p>
            <h2 className="font-inter text-4xl sm:text-5xl text-white mb-4">
              Which Plan is <span className="text-energy-red">Right for You?</span>
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Select the option that best describes your restaurant in each row
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            {/* Table Header */}
            <div className="grid grid-cols-5 bg-soft-gray border-b border-gray-200">
              <div className="p-4 font-bold text-primary-navy text-center">Category</div>
              <div className="p-4 font-bold text-primary-navy text-center border-l border-gray-200">Low</div>
              <div className="p-4 font-bold text-primary-navy text-center border-l border-gray-200">Medium</div>
              <div className="p-4 font-bold text-primary-navy text-center border-l border-gray-200">High</div>
              <div className="p-4 font-bold text-primary-navy text-center border-l border-gray-200">Very High</div>
            </div>

            {/* Row 1: Daily Calls */}
            <div className="grid grid-cols-5 border-b border-gray-200">
              <div className="p-4 bg-soft-gray/50 flex items-center justify-center">
                <span className="font-semibold text-primary-navy text-sm text-center">Daily Calls</span>
              </div>
              {[
                { label: '10-30', value: 1 },
                { label: '31-60', value: 2 },
                { label: '61-100', value: 3 },
                { label: '100+', value: 4 },
              ].map((option) => (
                <button
                  key={option.value}
                  onClick={() => setSelectedCalls(option.value)}
                  className={`p-4 border-l border-gray-200 transition-all duration-200 hover:bg-energy-red/10 ${
                    selectedCalls === option.value
                      ? 'bg-energy-red text-white font-bold'
                      : 'bg-white text-gray-700'
                  }`}
                >
                  <span className="text-sm">{option.label}</span>
                </button>
              ))}
            </div>

            {/* Row 2: Number of Locations */}
            <div className="grid grid-cols-5 border-b border-gray-200">
              <div className="p-4 bg-soft-gray/50 flex items-center justify-center">
                <span className="font-semibold text-primary-navy text-sm text-center">Locations</span>
              </div>
              {[
                { label: '1', value: 1 },
                { label: '2-3', value: 2 },
                { label: '4-6', value: 3 },
                { label: '7+', value: 4 },
              ].map((option) => (
                <button
                  key={option.value}
                  onClick={() => setSelectedLocations(option.value)}
                  className={`p-4 border-l border-gray-200 transition-all duration-200 hover:bg-energy-red/10 ${
                    selectedLocations === option.value
                      ? 'bg-energy-red text-white font-bold'
                      : 'bg-white text-gray-700'
                  }`}
                >
                  <span className="text-sm">{option.label}</span>
                </button>
              ))}
            </div>

            {/* Row 3: Features Needed */}
            <div className="grid grid-cols-5 border-b border-gray-200">
              <div className="p-4 bg-soft-gray/50 flex items-center justify-center">
                <span className="font-semibold text-primary-navy text-sm text-center">Features</span>
              </div>
              {[
                { label: 'Basic Orders', value: 1 },
                { label: '+ Reservations', value: 2 },
                { label: '+ Custom Voice', value: 3 },
                { label: 'Full Suite', value: 4 },
              ].map((option) => (
                <button
                  key={option.value}
                  onClick={() => setSelectedFeatures(option.value)}
                  className={`p-4 border-l border-gray-200 transition-all duration-200 hover:bg-energy-red/10 ${
                    selectedFeatures === option.value
                      ? 'bg-energy-red text-white font-bold'
                      : 'bg-white text-gray-700'
                  }`}
                >
                  <span className="text-sm">{option.label}</span>
                </button>
              ))}
            </div>

            {/* Row 4: Support Level */}
            <div className="grid grid-cols-5">
              <div className="p-4 bg-soft-gray/50 flex items-center justify-center">
                <span className="font-semibold text-primary-navy text-sm text-center">Support</span>
              </div>
              {[
                { label: 'Email', value: 1 },
                { label: '24h Response', value: 2 },
                { label: 'Priority', value: 3 },
                { label: 'Dedicated', value: 4 },
              ].map((option) => (
                <button
                  key={option.value}
                  onClick={() => setSelectedSupport(option.value)}
                  className={`p-4 border-l border-gray-200 transition-all duration-200 hover:bg-energy-red/10 ${
                    selectedSupport === option.value
                      ? 'bg-energy-red text-white font-bold'
                      : 'bg-white text-gray-700'
                  }`}
                >
                  <span className="text-sm">{option.label}</span>
                </button>
              ))}
            </div>

            {/* Result Section */}
            <div className="p-8 bg-gradient-to-r from-soft-gray to-white border-t-2 border-energy-red">
              {allSelected ? (
                <div className="text-center">
                  <p className="text-gray-600 mb-2">Based on your selections, we recommend:</p>
                  <div className="inline-block bg-gradient-to-r from-energy-red to-[#FF6B4A] text-white px-8 py-4 rounded-xl shadow-lg mb-6">
                    <span className="text-3xl font-bold">{getRecommendedTier()}</span>
                  </div>
                  <p className="text-gray-500 text-sm mb-6">
                    {getRecommendedTier() === 'Starter' && 'Perfect for single-location restaurants with moderate call volume.'}
                    {getRecommendedTier() === 'Professional' && 'Ideal for growing restaurants with multiple locations or high call volume.'}
                    {getRecommendedTier() === 'Enterprise' && 'Best for large operations requiring custom solutions and dedicated support.'}
                  </p>
                  <button
                    onClick={() => setIsDemoModalOpen(true)}
                    className="bg-energy-red text-white px-8 py-4 rounded-lg hover:bg-primary-navy transition-all duration-300 font-bold text-lg shadow-lg"
                  >
                    Get Started with {getRecommendedTier()}
                  </button>
                </div>
              ) : (
                <div className="text-center">
                  <p className="text-gray-500 mb-4">Select an option in each row to see your recommended plan</p>
                  <div className="flex justify-center gap-2">
                    <span className={`w-3 h-3 rounded-full ${selectedCalls ? 'bg-energy-red' : 'bg-gray-300'}`}></span>
                    <span className={`w-3 h-3 rounded-full ${selectedLocations ? 'bg-energy-red' : 'bg-gray-300'}`}></span>
                    <span className={`w-3 h-3 rounded-full ${selectedFeatures ? 'bg-energy-red' : 'bg-gray-300'}`}></span>
                    <span className={`w-3 h-3 rounded-full ${selectedSupport ? 'bg-energy-red' : 'bg-gray-300'}`}></span>
                  </div>
                </div>
              )}
            </div>
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
      <section className="relative overflow-hidden text-white flex items-center" style={{ minHeight: '600px', backgroundImage: 'url(/footer.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 w-full">
          <h2 className="font-inter text-4xl sm:text-5xl mb-6 text-white">
            Still Not Sure? <span className="text-energy-red">Let's Talk.</span>
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Schedule a personalized demo and see Ring to Kitchen AI in action
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setIsDemoModalOpen(true)}
              className="bg-white text-energy-red px-8 py-4 rounded-lg hover:bg-energy-red hover:text-white hover:scale-105 transition-all duration-300 font-bold text-lg shadow-lg"
            >
              Schedule Demo
            </button>
            <a
              href="/contact"
              className="border-2 border-white text-white hover:bg-white hover:text-primary-navy hover:scale-105 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 text-center shadow-lg"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
      </div>

      <Footer />
      <DemoModal isOpen={isDemoModalOpen} onClose={() => setIsDemoModalOpen(false)} />
    </main>
  );
}
