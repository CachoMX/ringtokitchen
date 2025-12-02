'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import DemoModal from '@/components/DemoModal';
import Link from 'next/link';
import type { BlogPost } from '@/lib/blogData';

interface BlogPostClientProps {
  post: BlogPost;
  relatedPosts: BlogPost[];
}

export default function BlogPostClient({ post, relatedPosts }: BlogPostClientProps) {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  // Process content to convert markdown-like formatting to HTML
  const processContent = (content: string) => {
    return content
      .split('\n')
      .map(line => {
        // Headers
        if (line.startsWith('# ')) return `<h1 class="text-4xl font-inter text-primary-navy mb-6 mt-8">${line.slice(2)}</h1>`;
        if (line.startsWith('## ')) return `<h2 class="text-3xl font-inter text-primary-navy mb-4 mt-6">${line.slice(3)}</h2>`;
        if (line.startsWith('### ')) return `<h3 class="text-2xl font-bold text-primary-navy mb-3 mt-4">${line.slice(4)}</h3>`;
        if (line.startsWith('#### ')) return `<h4 class="text-xl font-bold text-primary-navy mb-2 mt-3">${line.slice(5)}</h4>`;

        // Bold
        if (line.startsWith('**') && line.endsWith('**')) {
          return `<p class="font-bold text-gray-900 mb-2">${line.slice(2, -2)}</p>`;
        }

        // Lists
        if (line.startsWith('- ')) return `<li class="ml-6 mb-1">${line.slice(2)}</li>`;

        // Code blocks
        if (line.startsWith('```') || line.startsWith('\\`\\`\\`')) return '';

        // Horizontal rule
        if (line === '---') return '<hr class="my-8 border-gray-300" />';

        // Empty lines
        if (!line.trim()) return '<br />';

        // Regular paragraphs
        return `<p class="mb-4 text-gray-700 leading-relaxed">${line}</p>`;
      })
      .join('');
  };

  return (
    <main className="min-h-screen bg-white">
      <Header onDemoClick={() => setIsDemoModalOpen(true)} />

      <div className="pt-24">
        {/* Article Header */}
        <article className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Badge */}
          <div className="mb-6">
            <Link href="/blog" className="text-energy-red hover:underline text-sm font-bold">
              ← Back to Blog
            </Link>
          </div>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="bg-energy-red text-white text-sm px-3 py-1 rounded font-bold">
              {post.category}
            </span>
            <span className="text-gray-500 text-sm">{post.readTime} read</span>
            <span className="text-gray-500 text-sm">
              {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </span>
          </div>

          {/* Title */}
          <h1 className="font-inter text-4xl sm:text-5xl lg:text-6xl text-primary-navy mb-6 leading-tight">
            {post.title}
          </h1>

          {/* Author */}
          <div className="flex items-center gap-3 mb-8 pb-8 border-b border-gray-200">
            <div className="w-12 h-12 bg-primary-navy rounded-full flex items-center justify-center text-white text-xl">
              👤
            </div>
            <div>
              <p className="font-bold text-primary-navy">{post.author}</p>
              <p className="text-sm text-gray-500">Published on {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
            </div>
          </div>

          {/* Featured Image */}
          <div className="mb-12 rounded-2xl overflow-hidden bg-gradient-to-br from-primary-navy to-energy-red h-96 flex items-center justify-center text-white text-6xl">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <div dangerouslySetInnerHTML={{ __html: processContent(post.content) }} />
          </div>

          {/* Share Buttons */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="font-bold text-primary-navy mb-4">Share this article</h3>
            <div className="flex gap-3">
              <button className="px-4 py-2 bg-[#1DA1F2] text-white rounded hover:bg-[#1a8cd8] transition">
                Twitter
              </button>
              <button className="px-4 py-2 bg-[#0A66C2] text-white rounded hover:bg-[#004182] transition">
                LinkedIn
              </button>
              <button className="px-4 py-2 bg-[#1877F2] text-white rounded hover:bg-[#145dbf] transition">
                Facebook
              </button>
            </div>
          </div>
        </div>
      </article>

      {/* CTA Section */}
      <section className="py-16 bg-soft-gray">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-inter text-3xl text-primary-navy mb-4">
            Ready to automate your restaurant?
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            See how Ring to Kitchen AI can transform your operations
          </p>
          <button
            onClick={() => setIsDemoModalOpen(true)}
            className="bg-energy-red text-white px-8 py-3 rounded-lg hover:bg-primary-navy hover:text-white transition font-bold"
          >
            Schedule Demo
          </button>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-inter text-3xl text-primary-navy mb-8">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost, idx) => (
                <Link
                  key={idx}
                  href={`/blog/${relatedPost.slug}`}
                  className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition group border border-soft-gray"
                >
                  <div className="h-40 bg-gradient-to-br from-primary-navy to-energy-red flex items-center justify-center text-white text-4xl">
                    📝
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="bg-energy-red text-white text-xs px-2 py-1 rounded font-bold">
                        {relatedPost.category}
                      </span>
                      <span className="text-sm text-gray-500">{relatedPost.readTime}</span>
                    </div>
                    <h3 className="font-inter text-lg text-primary-navy mb-2 group-hover:text-energy-red transition line-clamp-2">
                      {relatedPost.title}
                    </h3>
                    <p className="text-sm text-gray-600 line-clamp-2">{relatedPost.excerpt}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
      </div>

      <Footer />
      <DemoModal isOpen={isDemoModalOpen} onClose={() => setIsDemoModalOpen(false)} />
    </main>
  );
}
