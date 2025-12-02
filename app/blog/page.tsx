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
  const categories = Array.from(new Set(allPosts.map(post => post.category)));

  // Filter posts based on selected category
  const filteredPosts = selectedCategory
    ? allPosts.filter(post => post.category === selectedCategory)
    : allPosts;

  return (
    <main className="min-h-screen bg-white">
      <Header onDemoClick={() => setIsDemoModalOpen(true)} />

      <div className="pt-24">
        {/* Hero */}
        <section className="py-20 bg-gradient-to-br from-primary-navy to-[#0d1f3c] text-white flex items-center relative overflow-hidden" style={{ minHeight: '800px', backgroundImage: 'url(/chef.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        {/* Overlay para mantener legibilidad del texto */}
        <div className="absolute inset-0 bg-primary-navy/80 z-0"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full relative z-10">
          <h1 className="font-inter text-5xl sm:text-6xl mb-6" style={{ textShadow: '0 0 4px rgba(255,255,255,0.3), 0 0 8px rgba(255,255,255,0.2)' }}>
            Restaurant <span className="text-energy-red">AI Insights</span>
          </h1>
          <p className="text-xl text-white/80" style={{ textShadow: '0 0 3px rgba(255,255,255,0.25), 0 0 6px rgba(255,255,255,0.15)' }}>
            Stay ahead of the industry with expert tips, case studies, and technology insights
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-soft-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-4 py-2 rounded-full font-bold text-sm transition ${
                selectedCategory === null
                  ? 'bg-energy-red text-white hover:bg-primary-navy hover:text-white'
                  : 'bg-white text-primary-navy hover:bg-gray-100 border border-gray-300'
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
                  className={`px-4 py-2 rounded-full font-bold text-sm transition ${
                    selectedCategory === category
                      ? 'bg-energy-red text-white hover:bg-primary-navy hover:text-white'
                      : 'bg-white text-primary-navy hover:bg-gray-100 border border-gray-300'
                  }`}
                >
                  {category} ({count})
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Results count */}
          <div className="mb-8 text-center">
            <p className="text-gray-600">
              {selectedCategory ? (
                <>Showing <span className="font-bold text-primary-navy">{filteredPosts.length}</span> articles in <span className="font-bold text-energy-red">{selectedCategory}</span></>
              ) : (
                <>Showing <span className="font-bold text-primary-navy">{filteredPosts.length}</span> articles</>
              )}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, idx) => (
              <Link
                key={idx}
                href={`/blog/${post.slug}`}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition group border border-soft-gray"
              >
                {/* Featured Image */}
                <div className="h-48 bg-gradient-to-br from-primary-navy to-energy-red flex items-center justify-center text-white text-5xl overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Category & Read Time */}
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-energy-red text-white text-xs px-2 py-1 rounded font-bold">
                      {post.category}
                    </span>
                    <span className="text-sm text-gray-500">{post.readTime}</span>
                  </div>

                  {/* Title */}
                  <h3 className="font-inter text-xl text-primary-navy mb-3 group-hover:text-energy-red transition line-clamp-2">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Meta */}
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>{post.author}</span>
                    <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* No results message */}
          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No articles found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden flex items-center" style={{ backgroundImage: 'url(/vino2.png)', backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '600px' }}>
        {/* White Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/70 to-white/30 z-0"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 w-full">
          <h2 className="font-inter text-4xl text-primary-navy mb-6">
            Ready to See AI in Action?
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Transform your restaurant operations with Ring to Kitchen AI
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
