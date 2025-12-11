'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import DemoModal from '@/components/DemoModal';
import Link from 'next/link';

export default function CaseStudiesPage() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    // Simulate authentication delay
    await new Promise(resolve => setTimeout(resolve, 1500));

    // For demo purposes - you can customize this logic
    if (email && password) {
      setError('Access credentials are provided to verified partners only. Please contact our sales team to request access.');
    } else {
      setError('Please enter both email and password.');
    }
    setIsLoading(false);
  };

  return (
    <main className="min-h-screen bg-white">
      <Header onDemoClick={() => setIsDemoModalOpen(true)} />

      <div className="pt-24">
        {/* Hero */}
        <section className="relative min-h-[600px] flex items-center overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src="/31.png"
              alt="Case Studies"
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
              <p className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Protected Content</p>
              <h1 className="font-inter text-4xl sm:text-5xl lg:text-6xl text-white mb-6 leading-tight">
                <span className="text-energy-red">Exclusive</span> Case Studies
              </h1>
              <p className="text-xl text-white/80">
                Access detailed success stories and confidential client data
              </p>
            </div>
          </div>
        </section>

        {/* Login Section */}
        <section className="py-20 bg-gradient-to-b from-soft-gray to-white">
          <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
            {/* Security Badge */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-primary-navy rounded-full mb-6 shadow-xl">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h2 className="font-inter text-2xl text-primary-navy mb-2">Secure Access Required</h2>
              <p className="text-gray-600">Enter your credentials to view case studies</p>
            </div>

            {/* Login Form */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-primary-navy mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-energy-red focus:border-transparent transition-all text-gray-900"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-primary-navy mb-2">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-energy-red focus:border-transparent transition-all text-gray-900"
                    placeholder="••••••••"
                  />
                </div>

                {error && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <p className="text-sm text-red-700">{error}</p>
                    </div>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-energy-red text-white py-4 rounded-lg hover:bg-primary-navy transition-colors font-bold text-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isLoading ? (
                    <>
                      <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Verifying...
                    </>
                  ) : (
                    <>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                      </svg>
                      Access Case Studies
                    </>
                  )}
                </button>
              </form>

              {/* Forgot Password Link */}
              <div className="text-center mt-6">
                <button
                  onClick={() => setIsDemoModalOpen(true)}
                  className="text-energy-red hover:text-primary-navy transition-colors text-sm font-medium"
                >
                  Request Access Credentials
                </button>
              </div>
            </div>

            {/* Security Notice */}
            <div className="mt-8 bg-primary-navy/5 rounded-xl p-6 border border-primary-navy/10">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary-navy rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-primary-navy mb-1">Client Information Protected</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Our case studies contain confidential business data and performance metrics from our valued clients.
                    Access is restricted to verified partners and authorized personnel to protect the privacy and
                    competitive advantage of the restaurants we serve.
                  </p>
                </div>
              </div>
            </div>

            {/* Additional Security Badges */}
            <div className="mt-8 flex items-center justify-center gap-6 text-gray-400">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <span className="text-xs">256-bit SSL</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span className="text-xs">SOC 2 Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
                </svg>
                <span className="text-xs">GDPR Ready</span>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative overflow-hidden text-white flex items-center" style={{ minHeight: '500px', backgroundImage: 'url(/footer.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 w-full">
            <h2 className="font-inter text-4xl sm:text-5xl mb-6 text-white">
              Want to <span className="text-energy-red">Become</span> a Success Story?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Schedule a demo and see how Ring to Kitchen AI can transform your restaurant
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setIsDemoModalOpen(true)}
                className="bg-white text-energy-red px-8 py-4 rounded-lg hover:bg-energy-red hover:text-white hover:scale-105 transition-all duration-300 font-bold text-lg shadow-lg"
              >
                Schedule Demo
              </button>
              <Link
                href="/testimonials"
                className="border-2 border-white text-white hover:bg-white hover:text-primary-navy hover:scale-105 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 text-center shadow-lg"
              >
                View Testimonials
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
