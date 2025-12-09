'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import DemoModal from '@/components/DemoModal';
import { getAllBlogPosts } from '@/lib/blogData';
import Link from 'next/link';

export default function BlogPage() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const allPosts = getAllBlogPosts();
  const featuredPost = allPosts[0];
  const categories = Array.from(new Set(allPosts.map(post => post.category)));

  // Filter posts based on selected category (exclude featured when showing all)
  const filteredPosts = selectedCategory
    ? allPosts.filter(post => post.category === selectedCategory)
    : allPosts.slice(1); // Exclude featured post from grid when showing all

  return (
    <main className="min-h-screen bg-white">
      <Header onDemoClick={() => setIsDemoModalOpen(true)} />

      <div className="pt-24">
        {/* Hero - Estilo consistente con testimonials */}
        <section className="relative min-h-[600px] flex items-center overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src="/mecera.jpg"
              alt="Restaurant"
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
              <p className="text-energy-red font-semibold text-sm uppercase tracking-wider mb-4">Blog & Resources</p>
              <h1 className="font-inter text-4xl sm:text-5xl lg:text-6xl text-white mb-6 leading-tight">
                Restaurant <span className="text-energy-red">AI</span> Insights
              </h1>
              <p className="text-xl text-white/80 mb-8">
                Expert tips, case studies, and technology insights to help you stay ahead in the restaurant industry
              </p>

              {/* Stats bar */}
              <div className="flex flex-wrap gap-8 mt-8">
                <div className="text-center">
                  <p className="text-3xl font-bold text-white">{allPosts.length}</p>
                  <p className="text-white/60 text-sm">Articles</p>
                </div>
                <div className="w-px h-12 bg-white/20 hidden sm:block"></div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-white">{categories.length}</p>
                  <p className="text-white/60 text-sm">Categories</p>
                </div>
                <div className="w-px h-12 bg-white/20 hidden sm:block"></div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-energy-red">Weekly</p>
                  <p className="text-white/60 text-sm">Updates</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Categories - Una sola fila */}
        <section className="py-8 bg-white relative overflow-x-auto">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-center gap-2 min-w-max">
              <button
                onClick={() => setSelectedCategory(null)}
                className={`px-4 py-2 rounded-full font-semibold text-sm whitespace-nowrap transition-all duration-300 ${
                  selectedCategory === null
                    ? 'bg-energy-red text-white'
                    : 'bg-soft-gray text-primary-navy hover:bg-energy-red hover:text-white'
                }`}
              >
                All Articles ({allPosts.length})
              </button>
              {categories.map((category, idx) => {
                const count = allPosts.filter(post => post.category === category).length;
                return (
                  <button
                    key={idx}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full font-semibold text-sm whitespace-nowrap transition-all duration-300 ${
                      selectedCategory === category
                        ? 'bg-energy-red text-white'
                        : 'bg-soft-gray text-primary-navy hover:bg-energy-red hover:text-white'
                    }`}
                  >
                    {category} ({count})
                  </button>
                );
              })}
            </div>
          </div>
        </section>

      {/* Featured Article - Only show when no category filter */}
      {!selectedCategory && featuredPost && (
        <section className="py-20 bg-gradient-to-br from-energy-red via-[#FF6B4A] to-energy-red relative overflow-hidden">
          {/* Neural Network Pattern Background */}
          <div className="absolute inset-0">
            <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="neural-network" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                  <circle cx="10" cy="10" r="2" fill="white" />
                  <circle cx="50" cy="10" r="2" fill="white" />
                  <circle cx="90" cy="10" r="2" fill="white" />
                  <circle cx="30" cy="50" r="2" fill="white" />
                  <circle cx="70" cy="50" r="2" fill="white" />
                  <circle cx="10" cy="90" r="2" fill="white" />
                  <circle cx="50" cy="90" r="2" fill="white" />
                  <circle cx="90" cy="90" r="2" fill="white" />
                  <line x1="10" y1="10" x2="30" y2="50" stroke="white" strokeWidth="0.5" opacity="0.5" />
                  <line x1="50" y1="10" x2="30" y2="50" stroke="white" strokeWidth="0.5" opacity="0.5" />
                  <line x1="50" y1="10" x2="70" y2="50" stroke="white" strokeWidth="0.5" opacity="0.5" />
                  <line x1="90" y1="10" x2="70" y2="50" stroke="white" strokeWidth="0.5" opacity="0.5" />
                  <line x1="30" y1="50" x2="10" y2="90" stroke="white" strokeWidth="0.5" opacity="0.5" />
                  <line x1="30" y1="50" x2="50" y2="90" stroke="white" strokeWidth="0.5" opacity="0.5" />
                  <line x1="70" y1="50" x2="50" y2="90" stroke="white" strokeWidth="0.5" opacity="0.5" />
                  <line x1="70" y1="50" x2="90" y2="90" stroke="white" strokeWidth="0.5" opacity="0.5" />
                  <line x1="30" y1="50" x2="70" y2="50" stroke="white" strokeWidth="0.5" opacity="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#neural-network)" />
            </svg>
          </div>

          {/* Animated glowing orbs */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-10 right-10 w-48 h-48 bg-white/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4 border border-white/30">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="text-white font-semibold text-sm uppercase tracking-wider">Featured Article</span>
              </div>
              <h2 className="font-inter text-3xl sm:text-4xl text-white">
                Must <span className="text-primary-navy">Read</span>
              </h2>
            </div>

            <Link href={`/blog/${featuredPost.slug}`} className="block group">
              <div className="bg-white rounded-3xl overflow-hidden shadow-2xl hover:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.3)] transition-all duration-500 border border-white/50">
                <div className="grid lg:grid-cols-2">
                  <div className="relative h-72 lg:h-auto lg:min-h-[450px] overflow-hidden">
                    <img
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                    <div className="absolute top-4 left-4 flex gap-2">
                      <span className="bg-primary-navy text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg flex items-center gap-2">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        Featured
                      </span>
                    </div>
                  </div>
                  <div className="p-8 lg:p-12 flex flex-col justify-center bg-gradient-to-br from-white to-soft-gray/30">
                    <div className="flex items-center gap-4 mb-6">
                      <span className="bg-energy-red text-white px-4 py-2 rounded-full text-sm font-bold">
                        {featuredPost.category}
                      </span>
                      <span className="text-gray-500 text-sm flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {featuredPost.readTime} read
                      </span>
                    </div>
                    <h3 className="font-inter text-2xl lg:text-4xl text-primary-navy mb-4 group-hover:text-energy-red transition-colors leading-tight">
                      {featuredPost.title}
                    </h3>
                    <p className="text-gray-600 mb-8 line-clamp-3 text-lg leading-relaxed">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex items-center justify-between pt-6 border-t border-gray-200">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-primary-navy rounded-full flex items-center justify-center text-white font-bold">
                          {featuredPost.author.charAt(0)}
                        </div>
                        <div>
                          <p className="text-primary-navy font-medium text-sm">{featuredPost.author}</p>
                          <p className="text-gray-400 text-xs">{new Date(featuredPost.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
                        </div>
                      </div>
                      <span className="bg-primary-navy text-white px-6 py-3 rounded-full font-bold group-hover:bg-energy-red transition-colors inline-flex items-center gap-2 shadow-lg">
                        Read Article
                        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="py-20 bg-gradient-to-br from-primary-navy via-[#0d1f3c] to-primary-navy relative">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-energy-red via-white to-energy-red"></div>
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-10 w-64 h-64 bg-energy-red/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-energy-red/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="font-inter text-4xl text-white mb-4">
              {selectedCategory ? (
                <><span className="text-energy-red">{selectedCategory}</span> Articles</>
              ) : (
                <>Explore <span className="text-energy-red">More</span> Articles</>
              )}
            </h2>
            <p className="text-white/70 text-lg">
              {selectedCategory ? (
                <>Showing <span className="font-bold text-energy-red">{filteredPosts.length}</span> articles in this category</>
              ) : (
                <>Browse our collection of <span className="font-bold text-energy-red">{filteredPosts.length}</span> insightful articles</>
              )}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, idx) => (
              <Link
                key={idx}
                href={`/blog/${post.slug}`}
                className="group bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/20 hover:-translate-y-2 hover:bg-white/15"
              >
                {/* Featured Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-navy/80 via-transparent to-transparent"></div>
                  {/* Category badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-energy-red text-white text-xs px-3 py-1.5 rounded-full font-bold shadow-lg">
                      {post.category}
                    </span>
                  </div>
                  {/* Read time badge */}
                  <div className="absolute top-4 right-4">
                    <span className="bg-white/90 backdrop-blur-sm text-primary-navy text-xs px-3 py-1.5 rounded-full font-medium flex items-center gap-1">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {post.readTime}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Title */}
                  <h3 className="font-inter text-xl text-white mb-3 group-hover:text-energy-red transition-colors duration-300 line-clamp-2 leading-tight">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-white/70 text-sm mb-6 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>

                  {/* Meta & CTA */}
                  <div className="flex items-center justify-between pt-4 border-t border-white/20">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-energy-red/20 rounded-full flex items-center justify-center text-energy-red text-xs font-bold">
                        {post.author.charAt(0)}
                      </div>
                      <div className="text-xs">
                        <p className="text-white font-medium">{post.author}</p>
                        <p className="text-white/50">{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</p>
                      </div>
                    </div>
                    <span className="text-energy-red font-bold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                      Read
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* No results message */}
          {filteredPosts.length === 0 && (
            <div className="text-center py-16">
              <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p className="text-white text-xl font-medium mb-2">No articles found</p>
              <p className="text-white/60">Try selecting a different category</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter / CTA Section */}
      <section className="py-20 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/food.jpg"
            alt="Restaurant food"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary-navy/90 via-primary-navy/80 to-primary-navy/70"></div>
        </div>
        {/* Background decorations */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-64 h-64 bg-energy-red/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-energy-red/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12 border border-white/10">
            <div className="text-center">
              <div className="inline-flex items-center gap-2 bg-energy-red/20 px-4 py-2 rounded-full mb-6">
                <svg className="w-5 h-5 text-energy-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span className="text-energy-red font-semibold text-sm uppercase tracking-wider">Take Action</span>
              </div>
              <h2 className="font-inter text-4xl sm:text-5xl text-white mb-6 leading-tight">
                Ready to <span className="text-energy-red">Transform</span> Your Restaurant?
              </h2>
              <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto">
                Join hundreds of restaurants already using AI to increase revenue and improve customer experience
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => setIsDemoModalOpen(true)}
                  className="bg-energy-red text-white px-8 py-4 rounded-full hover:bg-white hover:text-energy-red transition-all duration-300 font-bold text-lg shadow-lg hover:shadow-energy-red/30 hover:scale-105 flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Schedule Free Demo
                </button>
                <Link
                  href="/pricing"
                  className="border-2 border-white/30 text-white px-8 py-4 rounded-full hover:bg-white hover:text-primary-navy transition-all duration-300 font-bold text-lg flex items-center justify-center gap-2"
                >
                  View Pricing
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>

              {/* Trust badges */}
              <div className="flex flex-wrap justify-center gap-8 mt-12 pt-8 border-t border-white/10">
                <div className="flex items-center gap-2 text-white/60">
                  <svg className="w-5 h-5 text-energy-red" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm">No credit card required</span>
                </div>
                <div className="flex items-center gap-2 text-white/60">
                  <svg className="w-5 h-5 text-energy-red" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm">15-minute setup</span>
                </div>
                <div className="flex items-center gap-2 text-white/60">
                  <svg className="w-5 h-5 text-energy-red" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm">24/7 Support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>

      <Footer />
      <DemoModal isOpen={isDemoModalOpen} onClose={() => setIsDemoModalOpen(false)} />
    </main>
  );
}
