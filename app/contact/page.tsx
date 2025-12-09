'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import DemoModal from '@/components/DemoModal';
import Link from 'next/link';

export default function ContactPage() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    restaurant: '',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 5000);
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
              src="/chef.jpg"
              alt="Chef"
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
              <p className="text-energy-red font-semibold text-sm uppercase tracking-wider mb-4">Contact Us</p>
              <h1 className="font-inter text-4xl sm:text-5xl lg:text-6xl text-white mb-6 leading-tight">
                Get in <span className="text-energy-red">Touch</span>
              </h1>
              <p className="text-xl text-white/80">
                We're here to help you transform your restaurant with AI
              </p>
            </div>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <a href="mailto:contact@ringtokitchen.ai" className="bg-soft-gray rounded-2xl p-8 text-center hover:shadow-xl hover:scale-105 transition-all duration-300 group cursor-pointer">
                <div className="w-16 h-16 bg-energy-red/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-energy-red/20 transition-colors">
                  <svg className="w-8 h-8 text-energy-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="font-inter text-xl text-primary-navy mb-3">Email Us</h3>
                <p className="text-gray-600 mb-4">Send us an email and we'll respond within 24 hours</p>
                <span className="text-energy-red font-bold text-lg group-hover:underline">
                  contact@ringtokitchen.ai
                </span>
              </a>

              <a href="tel:+14482299561" className="bg-soft-gray rounded-2xl p-8 text-center hover:shadow-xl hover:scale-105 transition-all duration-300 group cursor-pointer">
                <div className="w-16 h-16 bg-energy-red/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-energy-red/20 transition-colors">
                  <svg className="w-8 h-8 text-energy-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="font-inter text-xl text-primary-navy mb-3">Call Us</h3>
                <p className="text-gray-600 mb-4">Talk to our team directly during business hours</p>
                <span className="text-energy-red font-bold text-lg group-hover:underline">
                  +1 (448) 229-9561
                </span>
              </a>

              <div
                onClick={() => setIsDemoModalOpen(true)}
                className="bg-gradient-to-br from-energy-red to-[#FF6B4A] rounded-2xl p-8 text-center hover:shadow-xl hover:scale-105 transition-all duration-300 group cursor-pointer"
              >
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-white/30 transition-colors">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="font-inter text-xl text-white mb-3">Schedule a Demo</h3>
                <p className="text-white/80 mb-4">Book a personalized demo at your convenience</p>
                <span className="text-white font-bold text-lg group-hover:underline">
                  Book Appointment →
                </span>
              </div>
            </div>

            {/* Contact Form */}
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="font-inter text-3xl sm:text-4xl text-primary-navy mb-4">
                  Send Us a <span className="text-energy-red">Message</span>
                </h2>
                <p className="text-gray-600">
                  Fill out the form below and we'll get back to you as soon as possible
                </p>
              </div>

              {formSubmitted ? (
                <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="font-inter text-2xl text-green-800 mb-2">Message Sent!</h3>
                  <p className="text-green-600">We'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-soft-gray rounded-2xl p-8 shadow-lg">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-primary-navy mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-energy-red focus:border-transparent transition-all"
                        placeholder="John Smith"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-primary-navy mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-energy-red focus:border-transparent transition-all"
                        placeholder="john@restaurant.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-primary-navy mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-energy-red focus:border-transparent transition-all"
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>
                    <div>
                      <label htmlFor="restaurant" className="block text-sm font-medium text-primary-navy mb-2">
                        Restaurant Name
                      </label>
                      <input
                        type="text"
                        id="restaurant"
                        name="restaurant"
                        value={formData.restaurant}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-energy-red focus:border-transparent transition-all"
                        placeholder="Your Restaurant"
                      />
                    </div>
                  </div>

                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-primary-navy mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-energy-red focus:border-transparent transition-all resize-none"
                      placeholder="Tell us about your restaurant and how we can help..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-energy-red text-white py-4 rounded-lg hover:bg-primary-navy transition-all duration-300 font-bold text-lg shadow-lg hover:shadow-xl"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>

        {/* Company Section */}
        <section className="py-20 bg-soft-gray">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <p className="text-energy-red font-semibold text-sm uppercase tracking-wider mb-3">About Us</p>
              <h2 className="font-inter text-4xl sm:text-5xl text-primary-navy mb-4">
                The Company Behind <span className="text-energy-red">Ring to Kitchen AI</span>
              </h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="font-inter text-2xl text-primary-navy mb-4">Our Mission</h3>
                <p className="text-lg text-gray-600 mb-6">
                  To empower restaurants of all sizes with AI technology that enhances customer service,
                  increases efficiency, and drives growth - without replacing the human touch that makes
                  hospitality special.
                </p>
                <h3 className="font-inter text-2xl text-primary-navy mb-4">Our Vision</h3>
                <p className="text-lg text-gray-600">
                  A world where every restaurant can provide exceptional phone service 24/7,
                  where no order is missed, and where staff can focus on creating memorable
                  dining experiences instead of answering repetitive calls.
                </p>
              </div>
              <div className="bg-gradient-to-br from-primary-navy to-[#1a3a5c] rounded-2xl p-8 text-white">
                <h3 className="font-inter text-2xl mb-6">Our Values</h3>
                <div className="space-y-4">
                  {[
                    { title: 'Innovation', desc: 'Pushing the boundaries of AI for hospitality' },
                    { title: 'Reliability', desc: '99.9% uptime, always available for your customers' },
                    { title: 'Partnership', desc: 'Your success is our success' },
                    { title: 'Simplicity', desc: 'Powerful technology made easy to use' },
                  ].map((value, idx) => (
                    <div key={idx} className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-energy-red rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold">{value.title}</h4>
                        <p className="text-white/70 text-sm">{value.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="relative overflow-hidden text-white flex items-center" style={{ minHeight: '500px' }}>
          <div className="absolute inset-0 overflow-hidden">
            <video autoPlay loop muted playsInline className="absolute w-full h-full object-cover" style={{ objectFit: 'cover' }}>
              <source src="/Chica.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/50 to-transparent z-10"></div>
          </div>

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-20">
            <h2 className="font-inter text-4xl sm:text-5xl mb-6 text-primary-navy">
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-8 text-gray-700">
              Schedule a demo and see Ring to Kitchen AI in action
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setIsDemoModalOpen(true)}
                className="bg-energy-red text-white px-8 py-4 rounded-lg hover:bg-primary-navy hover:text-white hover:scale-105 transition-all duration-300 font-bold text-lg shadow-lg"
              >
                Schedule Demo
              </button>
              <Link
                href="/pricing"
                className="border-2 border-primary-navy text-primary-navy px-8 py-4 rounded-lg hover:bg-primary-navy hover:text-white transition-all duration-300 font-bold text-lg"
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
