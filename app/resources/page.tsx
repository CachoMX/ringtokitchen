'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import DemoModal from '@/components/DemoModal';
import Link from 'next/link';
import { getAllBlogPosts } from '@/lib/blogData';

export default function ResourcesPage() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  const allPosts = getAllBlogPosts();
  const featuredPost = allPosts[0];
  const recentPosts = allPosts.slice(1, 4);

  return (
    <main className="min-h-screen bg-white">
      <Header onDemoClick={() => setIsDemoModalOpen(true)} />

      <div className="pt-24">
        {/* Hero */}
        <section className="relative min-h-[600px] flex items-center overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src="/Futuristic AI Recepcionist.png"
              alt="AI Restaurant Technology"
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
              <p className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Resources</p>
              <h1 className="font-inter text-4xl sm:text-5xl lg:text-6xl text-white mb-6 leading-tight">
                AI Hub & <span className="text-energy-red">Knowledge Center</span>
              </h1>
              <p className="text-xl text-white/80">
                Everything you need to know about AI in the restaurant industry
              </p>
            </div>
          </div>
        </section>

        {/* Blog Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <p className="text-energy-red font-semibold text-sm uppercase tracking-wider mb-3">Blog</p>
              <h2 className="font-inter text-4xl sm:text-5xl text-primary-navy mb-4">
                Latest <span className="text-energy-red">Insights</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Stay up to date with the latest trends in restaurant AI and technology
              </p>
            </div>

            {/* Featured Article */}
            {featuredPost && (
              <div className="mb-16">
                <Link href={`/blog/${featuredPost.slug}`} className="block group">
                  <div className="bg-soft-gray rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300">
                    <div className="grid lg:grid-cols-2">
                      <div className="relative h-64 lg:h-auto">
                        <img
                          src={featuredPost.image}
                          alt={featuredPost.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="bg-energy-red text-white px-4 py-1 rounded-full text-sm font-bold">
                            Featured
                          </span>
                        </div>
                      </div>
                      <div className="p-8 lg:p-12 flex flex-col justify-center">
                        <div className="flex items-center gap-4 mb-4">
                          <span className="bg-primary-navy/10 text-primary-navy px-3 py-1 rounded-full text-sm font-medium">
                            {featuredPost.category}
                          </span>
                          <span className="text-gray-500 text-sm">{featuredPost.readTime} read</span>
                        </div>
                        <h3 className="font-inter text-2xl lg:text-3xl text-primary-navy mb-4 group-hover:text-energy-red transition-colors">
                          {featuredPost.title}
                        </h3>
                        <p className="text-gray-600 mb-6 line-clamp-3">
                          {featuredPost.excerpt}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-gray-500 text-sm">{featuredPost.date}</span>
                          <span className="text-energy-red font-bold group-hover:translate-x-2 transition-transform inline-flex items-center gap-2">
                            Read Article
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            )}

            {/* Recent Articles Grid */}
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {recentPosts.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="block group">
                  <div className="bg-soft-gray rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 h-full">
                    <div className="relative h-48">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="bg-primary-navy/10 text-primary-navy px-3 py-1 rounded-full text-xs font-medium">
                          {post.category}
                        </span>
                        <span className="text-gray-500 text-xs">{post.readTime}</span>
                      </div>
                      <h3 className="font-inter text-lg text-primary-navy mb-3 group-hover:text-energy-red transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 text-sm line-clamp-2 mb-4">
                        {post.excerpt}
                      </p>
                      <span className="text-energy-red font-bold text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                        Read More
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* View All Button */}
            {allPosts.length > 4 && (
              <div className="text-center">
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 bg-primary-navy text-white px-8 py-4 rounded-lg hover:bg-energy-red transition-all duration-300 font-bold text-lg shadow-lg hover:scale-105"
                >
                  View All Articles
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            )}
          </div>
        </section>

        {/* Support Section */}
        <section className="py-20 bg-gradient-to-br from-energy-red to-[#FF6B4A]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <p className="text-white/80 font-semibold text-sm uppercase tracking-wider mb-3">Support</p>
              <h2 className="font-inter text-4xl sm:text-5xl text-white mb-4">
                Need <span className="text-primary-navy">Help?</span>
              </h2>
              <p className="text-lg text-white/90">
                Our team is here to support you every step of the way
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-8 text-center hover:shadow-2xl hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-primary-navy rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="font-inter text-xl text-primary-navy mb-3">Email Support</h3>
                <p className="text-gray-600 mb-4">Get help from our team via email</p>
                <a href="mailto:contact@ringtokitchen.ai" className="text-energy-red font-bold hover:underline">
                  contact@ringtokitchen.ai
                </a>
              </div>

              <div className="bg-white rounded-2xl p-8 text-center hover:shadow-2xl hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-primary-navy rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="font-inter text-xl text-primary-navy mb-3">Phone Support</h3>
                <p className="text-gray-600 mb-4">Talk to our team directly</p>
                <a href="tel:+19167593687" className="text-energy-red font-bold hover:underline">
                  +1 (916) 759-3687
                </a>
              </div>

              <div className="bg-white rounded-2xl p-8 text-center hover:shadow-2xl hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-primary-navy rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="font-inter text-xl text-primary-navy mb-3">Schedule a Call</h3>
                <p className="text-gray-600 mb-4">Book a time that works for you</p>
                <button
                  onClick={() => setIsDemoModalOpen(true)}
                  className="text-energy-red font-bold hover:underline"
                >
                  Book Appointment
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative overflow-hidden text-white flex items-center" style={{ minHeight: '600px', backgroundImage: 'url(/footer.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 w-full">
            <h2 className="font-inter text-4xl sm:text-5xl mb-6 text-white">
              Ready to <span className="text-energy-red">Get Started?</span>
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Schedule a demo and see Ring to Kitchen AI in action
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
