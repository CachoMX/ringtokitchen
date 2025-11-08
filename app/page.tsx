'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import DemoModal from '@/components/DemoModal';
import { VALUE_PROPOSITIONS, HOW_IT_WORKS_STEPS, PRICING_TIERS, TESTIMONIALS, USE_CASES } from '@/lib/constants';
import { getAllBlogPosts } from '@/lib/blogData';
import Link from 'next/link';

export default function HomePage() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const latestPosts = getAllBlogPosts().slice(0, 3);

  return (
    <main className="min-h-screen">
      <Header onDemoClick={() => setIsDemoModalOpen(true)} />

      <div className="pt-24">
        {/* Hero Section */}
        <section className="relative min-h-screen bg-gradient-to-br from-primary-navy to-[#0d1f3c] overflow-hidden flex items-center">
        {/* Wave Pattern Background */}
        <div className="absolute inset-0 opacity-10">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full">
            <path d="M0,50 Q300,0 600,50 T1200,50 L1200,120 L0,120 Z" fill="currentColor" className="text-energy-red" />
          </svg>
        </div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          {/* Trust Badges */}
          <div className="flex justify-center gap-4 mb-8 flex-wrap">
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
          <h1 className="font-marcellus text-5xl sm:text-6xl lg:text-7xl text-white mb-6 leading-tight">
            AI that Speaks<br />
            <span className="bg-gradient-to-r from-energy-red to-[#FF6B4A] text-transparent bg-clip-text">Restaurant</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto mb-10">
            Let your AI handle calls, reservations, and orders. Your team focuses on hospitality.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setIsDemoModalOpen(true)}
              className="bg-energy-red hover:bg-[#E63D23] text-white px-8 py-4 rounded-lg font-bold text-lg transition transform hover:scale-105"
            >
              Schedule Demo
            </button>
            <Link
              href="/pricing"
              className="border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-lg font-bold text-lg transition text-center"
            >
              View Pricing
            </Link>
          </div>

          {/* Social Proof */}
          <div className="mt-16 text-white/60 text-sm">
            ⭐ <span className="text-white font-bold">4.9/5 average rating</span> from restaurant owners
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-marcellus text-4xl sm:text-5xl text-primary-navy mb-4">
              Why Restaurants Choose Ring to Kitchen
            </h2>
            <p className="text-lg text-gray-600">
              Smarter calls. Better service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {VALUE_PROPOSITIONS.map((value, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-energy-red/5 to-warm-taupe/5 border border-soft-gray rounded-2xl p-8 hover:shadow-lg transition transform hover:-translate-y-2"
              >
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="font-marcellus text-2xl text-primary-navy mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 bg-soft-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-marcellus text-4xl sm:text-5xl text-primary-navy mb-4">
              How It Works
            </h2>
            <p className="text-lg text-gray-600">
              From ring to kitchen in four simple steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {HOW_IT_WORKS_STEPS.map((step, idx) => (
              <div key={idx} className="text-center">
                <div className="bg-white rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center text-4xl shadow-lg">
                  {step.icon}
                </div>
                <div className="bg-energy-red text-white rounded-full w-8 h-8 mx-auto mb-4 flex items-center justify-center font-bold">
                  {step.number}
                </div>
                <h3 className="font-marcellus text-xl text-primary-navy mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-marcellus text-4xl sm:text-5xl text-primary-navy mb-4">
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
                  <h3 className="font-marcellus text-2xl text-primary-navy mb-2">{tier.name}</h3>
                  <p className="text-gray-600 text-sm mb-6">{tier.description}</p>

                  {/* Price */}
                  {tier.price !== null ? (
                    <div className="mb-6">
                      <span className="font-marcellus text-5xl text-primary-navy">${tier.price}</span>
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
                        ? 'bg-energy-red text-white hover:bg-[#E63D23]'
                        : 'bg-soft-gray text-primary-navy hover:bg-gray-300'
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
            <Link href="/pricing" className="text-energy-red hover:underline font-bold">
              View full feature comparison →
            </Link>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-soft-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-marcellus text-4xl sm:text-5xl text-primary-navy mb-4">
              Perfect For Every Restaurant Type
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {USE_CASES.map((useCase, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition">
                <div className="text-4xl mb-3">{useCase.icon}</div>
                <h3 className="font-bold text-primary-navy mb-2">{useCase.title}</h3>
                <p className="text-sm text-gray-600">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-marcellus text-4xl sm:text-5xl text-primary-navy mb-4">
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
      <section className="py-20 bg-soft-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-marcellus text-4xl sm:text-5xl text-primary-navy mb-4">
              Latest Insights
            </h2>
            <p className="text-lg text-gray-600">
              Stay ahead of the restaurant industry
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {latestPosts.map((post, idx) => (
              <Link key={idx} href={`/blog/${post.slug}`} className="bg-white rounded-xl overflow-hidden hover:shadow-xl transition group">
                <div className="h-48 bg-gradient-to-br from-primary-navy to-energy-red flex items-center justify-center text-white text-4xl">
                  📝
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-energy-red text-white text-xs px-2 py-1 rounded">{post.category}</span>
                    <span className="text-sm text-gray-500">{post.readTime}</span>
                  </div>
                  <h3 className="font-marcellus text-xl text-primary-navy mb-2 group-hover:text-energy-red transition">
                    {post.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="text-sm text-gray-500">{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/blog" className="bg-primary-navy text-white px-8 py-3 rounded-lg hover:bg-[#024270] transition font-bold inline-block">
              View All Articles
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-primary-navy to-energy-red text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-marcellus text-4xl sm:text-5xl mb-6">
            Ready to Transform Your Restaurant?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Join 100+ restaurants already using Ring to Kitchen AI
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setIsDemoModalOpen(true)}
              className="bg-white text-primary-navy px-8 py-4 rounded-lg hover:bg-gray-100 transition font-bold text-lg"
            >
              Schedule Demo
            </button>
            <Link
              href="/pricing"
              className="border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-lg font-bold text-lg transition text-center"
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
