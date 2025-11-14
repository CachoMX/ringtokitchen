'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import DemoModal from '@/components/DemoModal';
import { VALUE_PROPOSITIONS, HOW_IT_WORKS_STEPS, PRICING_TIERS, TESTIMONIALS, USE_CASES } from '@/lib/constants';
import { getAllBlogPosts } from '@/lib/blogData';
import Link from 'next/link';
import dynamic from 'next/dynamic';

const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

export default function HomePage() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const latestPosts = getAllBlogPosts().slice(0, 3);

  // Simple Lottie animation data for each step
  const phoneRingAnimation = {
    "v": "5.7.4",
    "fr": 60,
    "ip": 0,
    "op": 60,
    "w": 200,
    "h": 200,
    "ddd": 0,
    "assets": [],
    "layers": [{
      "ddd": 0,
      "ind": 1,
      "ty": 4,
      "nm": "Phone",
      "sr": 1,
      "ks": {
        "o": {"a": 0, "k": 100},
        "r": {"a": 1, "k": [{"t": 0, "s": [-10]}, {"t": 30, "s": [10]}, {"t": 60, "s": [-10]}]},
        "p": {"a": 0, "k": [100, 100]},
        "a": {"a": 0, "k": [0, 0]},
        "s": {"a": 0, "k": [100, 100]}
      },
      "shapes": [{
        "ty": "gr",
        "it": [{
          "ty": "rc",
          "d": 1,
          "s": {"a": 0, "k": [60, 100]},
          "p": {"a": 0, "k": [0, 0]},
          "r": {"a": 0, "k": 10}
        }, {
          "ty": "fl",
          "c": {"a": 0, "k": [0.004, 0.2, 0.365, 1]},
          "o": {"a": 0, "k": 100}
        }]
      }]
    }]
  };

  const aiProcessAnimation = {
    "v": "5.7.4",
    "fr": 60,
    "ip": 0,
    "op": 60,
    "w": 200,
    "h": 200,
    "ddd": 0,
    "assets": [],
    "layers": [{
      "ddd": 0,
      "ind": 1,
      "ty": 4,
      "nm": "Circle",
      "sr": 1,
      "ks": {
        "o": {"a": 0, "k": 100},
        "r": {"a": 1, "k": [{"t": 0, "s": [0]}, {"t": 60, "s": [360]}]},
        "p": {"a": 0, "k": [100, 100]},
        "s": {"a": 1, "k": [{"t": 0, "s": [80, 80]}, {"t": 30, "s": [120, 120]}, {"t": 60, "s": [80, 80]}]}
      },
      "shapes": [{
        "ty": "gr",
        "it": [{
          "ty": "el",
          "d": 1,
          "s": {"a": 0, "k": [80, 80]},
          "p": {"a": 0, "k": [0, 0]}
        }, {
          "ty": "st",
          "c": {"a": 0, "k": [0.941, 0.282, 0.2, 1]},
          "o": {"a": 0, "k": 100},
          "w": {"a": 0, "k": 5}
        }]
      }]
    }]
  };

  const kitchenAnimation = {
    "v": "5.7.4",
    "fr": 60,
    "ip": 0,
    "op": 60,
    "w": 200,
    "h": 200,
    "ddd": 0,
    "assets": [],
    "layers": [{
      "ddd": 0,
      "ind": 1,
      "ty": 4,
      "nm": "Checkmark",
      "sr": 1,
      "ks": {
        "o": {"a": 0, "k": 100},
        "p": {"a": 1, "k": [{"t": 0, "s": [100, 120]}, {"t": 20, "s": [100, 100]}]},
        "s": {"a": 1, "k": [{"t": 0, "s": [0, 0]}, {"t": 20, "s": [100, 100]}]}
      },
      "shapes": [{
        "ty": "gr",
        "it": [{
          "ty": "sh",
          "d": 1,
          "ks": {"a": 0, "k": {"c": false, "v": [[-20, 0], [-5, 15], [20, -15]]}}
        }, {
          "ty": "st",
          "c": {"a": 0, "k": [0.004, 0.2, 0.365, 1]},
          "o": {"a": 0, "k": 100},
          "w": {"a": 0, "k": 8},
          "lc": 2
        }]
      }]
    }]
  };

  const happyCustomerAnimation = {
    "v": "5.7.4",
    "fr": 60,
    "ip": 0,
    "op": 60,
    "w": 200,
    "h": 200,
    "ddd": 0,
    "assets": [],
    "layers": [{
      "ddd": 0,
      "ind": 1,
      "ty": 4,
      "nm": "Star",
      "sr": 1,
      "ks": {
        "o": {"a": 1, "k": [{"t": 0, "s": [0]}, {"t": 15, "s": [100]}, {"t": 45, "s": [100]}, {"t": 60, "s": [0]}]},
        "r": {"a": 1, "k": [{"t": 0, "s": [0]}, {"t": 60, "s": [180]}]},
        "p": {"a": 0, "k": [100, 100]},
        "s": {"a": 1, "k": [{"t": 0, "s": [50, 50]}, {"t": 15, "s": [100, 100]}, {"t": 60, "s": [50, 50]}]}
      },
      "shapes": [{
        "ty": "gr",
        "it": [{
          "ty": "sr",
          "sy": 1,
          "d": 1,
          "pt": {"a": 0, "k": 5},
          "p": {"a": 0, "k": [0, 0]},
          "r": {"a": 0, "k": 0},
          "ir": {"a": 0, "k": 20},
          "or": {"a": 0, "k": 40}
        }, {
          "ty": "fl",
          "c": {"a": 0, "k": [0.941, 0.282, 0.2, 1]},
          "o": {"a": 0, "k": 100}
        }]
      }]
    }]
  };

  const animations = [phoneRingAnimation, aiProcessAnimation, kitchenAnimation, happyCustomerAnimation];

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
            Never Miss<br />
            <span className="bg-gradient-to-r from-energy-red to-[#FF6B4A] text-transparent bg-clip-text">Another Order</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto mb-8 leading-relaxed">
            Restaurant voice AI that handles every call, takes perfect orders, and works 24/7.
            Works standalone or integrates with your existing POS.
          </p>

          {/* Key Features Pills */}
          <div className="flex flex-wrap justify-center gap-3 mb-10 max-w-3xl mx-auto">
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

      {/* Results Stats Section */}
      <section className="py-16 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-marcellus text-3xl sm:text-4xl text-primary-navy mb-3">
              Real Results from Real Restaurants
            </h2>
            <p className="text-lg text-gray-600">
              Proven impact on your bottom line
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-energy-red/5 to-energy-red/10 border border-energy-red/20">
              <div className="text-5xl font-bold text-energy-red mb-2">100%</div>
              <div className="text-sm text-gray-600 font-medium">Calls captured in queue</div>
              <div className="text-xs text-gray-500 mt-1">Never miss an order</div>
            </div>

            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-primary-navy/5 to-primary-navy/10 border border-primary-navy/20">
              <div className="text-5xl font-bold text-primary-navy mb-2">75%</div>
              <div className="text-sm text-gray-600 font-medium">Reduction in labor costs</div>
              <div className="text-xs text-gray-500 mt-1">Per order efficiency gain</div>
            </div>

            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-energy-red/5 to-energy-red/10 border border-energy-red/20">
              <div className="text-5xl font-bold text-energy-red mb-2">25%</div>
              <div className="text-sm text-gray-600 font-medium">Increase in average check</div>
              <div className="text-xs text-gray-500 mt-1">AI-driven upselling</div>
            </div>

            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-primary-navy/5 to-primary-navy/10 border border-primary-navy/20">
              <div className="text-5xl font-bold text-primary-navy mb-2">20%</div>
              <div className="text-sm text-gray-600 font-medium">Increase in repeat orders</div>
              <div className="text-xs text-gray-500 mt-1">Within first month</div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-20 bg-soft-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-marcellus text-4xl sm:text-5xl text-primary-navy mb-4">
              Why Restaurants Choose Ring to Kitchen AI
            </h2>
            <p className="text-lg text-gray-600">
              Restaurant-trained AI that understands your business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="font-marcellus text-2xl text-primary-navy mb-3">Restaurant-Trained AI</h3>
              <p className="text-gray-600 leading-relaxed">
                Understands "extra cheese," "gluten-free crust," and complex restaurant conversations. 99% accuracy on food orders.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-5xl mb-4">🔧</div>
              <h3 className="font-marcellus text-2xl text-primary-navy mb-3">Works Your Way</h3>
              <p className="text-gray-600 leading-relaxed">
                Complete standalone solution or seamless integration with your existing POS. You choose what works for your restaurant.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-5xl mb-4">📈</div>
              <h3 className="font-marcellus text-2xl text-primary-navy mb-3">Proven Results</h3>
              <p className="text-gray-600 leading-relaxed">
                30% average increase in phone orders, 99.9% uptime, and enterprise-grade reliability. Real restaurants, real results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 bg-gradient-to-br from-soft-gray via-white to-soft-gray relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-72 h-72 bg-energy-red rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-navy rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-marcellus text-4xl sm:text-5xl text-primary-navy mb-4">
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
                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${idx * 0.15}s both`
                }}
              >
                {/* Step number badge - top right */}
                <div className="absolute -top-4 -right-4 bg-gradient-to-br from-energy-red to-[#E63D23] text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg shadow-lg group-hover:scale-110 transition-transform duration-300">
                  {step.number}
                </div>

                {/* Connecting line for desktop */}
                {idx < HOW_IT_WORKS_STEPS.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-energy-red/50 to-transparent"></div>
                )}

                {/* Icon with animated gradient background */}
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-energy-red/10 to-primary-navy/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                  <div className="relative rounded-2xl w-24 h-24 mx-auto flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-500">
                    <Lottie
                      animationData={animations[idx]}
                      loop={true}
                      style={{ width: 80, height: 80 }}
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="text-center">
                  <h3 className="font-marcellus text-xl text-primary-navy mb-3 group-hover:text-energy-red transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Hover glow effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-energy-red/5 to-primary-navy/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
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
        `}</style>
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
