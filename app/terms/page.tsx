'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import DemoModal from '@/components/DemoModal';

export default function TermsPage() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  return (
    <main className="min-h-screen bg-white">
      <Header onDemoClick={() => setIsDemoModalOpen(true)} />

      <div className="pt-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="font-inter text-4xl sm:text-5xl text-primary-navy mb-6">
            Terms of Service
          </h1>

          <p className="text-gray-600 mb-8">
            Last Updated: January 15, 2025
          </p>

          <div className="prose prose-lg max-w-none space-y-8 text-gray-700">
            <section>
              <h2 className="font-inter text-2xl text-primary-navy mb-4">1. Agreement to Terms</h2>
              <p className="mb-4">
                These Terms of Service ("Terms") constitute a legally binding agreement between you and Ring to Kitchen AI, Inc. ("Ring to Kitchen AI," "we," "us," or "our") concerning your access to and use of our AI voice agent services for restaurants.
              </p>
              <p className="mb-4">
                By accessing or using our services, you agree to be bound by these Terms. If you do not agree to these Terms, you may not access or use our services.
              </p>
            </section>

            <section>
              <h2 className="font-inter text-2xl text-primary-navy mb-4">2. Description of Services</h2>
              <p className="mb-4">
                Ring to Kitchen AI provides AI-powered voice agent technology that enables restaurants to automate phone interactions, including:
              </p>
              <ul className="list-disc ml-6 mb-4 space-y-2">
                <li>Taking orders via phone calls</li>
                <li>Managing reservations and bookings</li>
                <li>Answering customer inquiries</li>
                <li>Integration with POS and reservation systems</li>
                <li>Call analytics and reporting</li>
              </ul>
              <p className="mb-4">
                We reserve the right to modify, suspend, or discontinue any aspect of our services at any time, with or without notice.
              </p>
            </section>

            <section>
              <h2 className="font-inter text-2xl text-primary-navy mb-4">3. Account Registration and Eligibility</h2>

              <h3 className="font-bold text-xl text-primary-navy mb-3 mt-4">3.1 Eligibility</h3>
              <p className="mb-4">
                You must be at least 18 years old and have the authority to enter into these Terms on behalf of your restaurant or business. By using our services, you represent and warrant that you meet these requirements.
              </p>

              <h3 className="font-bold text-xl text-primary-navy mb-3 mt-4">3.2 Account Security</h3>
              <p className="mb-4">
                You are responsible for:
              </p>
              <ul className="list-disc ml-6 mb-4 space-y-2">
                <li>Maintaining the confidentiality of your account credentials</li>
                <li>All activities that occur under your account</li>
                <li>Notifying us immediately of any unauthorized access or security breach</li>
                <li>Ensuring all information provided is accurate and current</li>
              </ul>
            </section>

            <section>
              <h2 className="font-inter text-2xl text-primary-navy mb-4">4. Subscription Plans and Billing</h2>

              <h3 className="font-bold text-xl text-primary-navy mb-3 mt-4">4.1 Pricing</h3>
              <p className="mb-4">
                Our services are offered through subscription plans as detailed on our pricing page. Prices are subject to change with 30 days' notice to existing subscribers.
              </p>

              <h3 className="font-bold text-xl text-primary-navy mb-3 mt-4">4.2 Payment Terms</h3>
              <ul className="list-disc ml-6 mb-4 space-y-2">
                <li>Subscription fees are billed monthly or annually in advance</li>
                <li>Payment is due immediately upon subscription</li>
                <li>All fees are non-refundable except as required by law</li>
                <li>You authorize us to charge your payment method automatically</li>
                <li>Failed payments may result in service suspension or termination</li>
              </ul>

              <h3 className="font-bold text-xl text-primary-navy mb-3 mt-4">4.3 Free Trial</h3>
              <p className="mb-4">
                We may offer a free trial period. At the end of the trial, your subscription will automatically convert to a paid plan unless you cancel before the trial ends.
              </p>

              <h3 className="font-bold text-xl text-primary-navy mb-3 mt-4">4.4 Cancellation</h3>
              <p className="mb-4">
                You may cancel your subscription at any time. Cancellation takes effect at the end of your current billing period. You will not receive a refund for the remaining portion of your billing period.
              </p>
            </section>

            <section>
              <h2 className="font-inter text-2xl text-primary-navy mb-4">5. Acceptable Use Policy</h2>
              <p className="mb-4">You agree not to:</p>
              <ul className="list-disc ml-6 mb-4 space-y-2">
                <li>Use our services for any illegal or unauthorized purpose</li>
                <li>Violate any laws, regulations, or third-party rights</li>
                <li>Transmit harmful code, viruses, or malicious software</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Interfere with or disrupt our services or servers</li>
                <li>Use our services to harass, abuse, or harm others</li>
                <li>Reverse engineer or attempt to extract source code</li>
                <li>Remove or alter any proprietary notices or labels</li>
                <li>Use our services in a manner that exceeds reasonable usage limits</li>
                <li>Resell or redistribute our services without authorization</li>
              </ul>
            </section>

            <section>
              <h2 className="font-inter text-2xl text-primary-navy mb-4">6. Intellectual Property Rights</h2>

              <h3 className="font-bold text-xl text-primary-navy mb-3 mt-4">6.1 Our Property</h3>
              <p className="mb-4">
                All rights, title, and interest in and to our services, including all software, technology, designs, trademarks, and content, are owned by Ring to Kitchen AI or our licensors. These Terms do not grant you any ownership rights.
              </p>

              <h3 className="font-bold text-xl text-primary-navy mb-3 mt-4">6.2 Your Content</h3>
              <p className="mb-4">
                You retain ownership of any content you provide to us (menu items, restaurant information, etc.). By using our services, you grant us a license to use, store, and process your content solely to provide our services.
              </p>

              <h3 className="font-bold text-xl text-primary-navy mb-3 mt-4">6.3 Feedback</h3>
              <p className="mb-4">
                Any feedback, suggestions, or ideas you provide to us become our property, and we may use them without obligation to you.
              </p>
            </section>

            <section>
              <h2 className="font-inter text-2xl text-primary-navy mb-4">7. Call Recording and Privacy</h2>
              <p className="mb-4">
                Our AI voice agents may record calls for quality assurance, training, and service improvement purposes. You are responsible for:
              </p>
              <ul className="list-disc ml-6 mb-4 space-y-2">
                <li>Complying with all applicable call recording laws and regulations</li>
                <li>Obtaining necessary consent from callers when required by law</li>
                <li>Providing appropriate disclosures to customers</li>
              </ul>
              <p className="mb-4">
                Please review our Privacy Policy for more information about how we handle data.
              </p>
            </section>

            <section>
              <h2 className="font-inter text-2xl text-primary-navy mb-4">8. Service Level and Support</h2>

              <h3 className="font-bold text-xl text-primary-navy mb-3 mt-4">8.1 Service Availability</h3>
              <p className="mb-4">
                While we strive for high availability, we do not guarantee uninterrupted or error-free service. We may perform maintenance, updates, or modifications that temporarily affect service availability.
              </p>

              <h3 className="font-bold text-xl text-primary-navy mb-3 mt-4">8.2 Support</h3>
              <p className="mb-4">
                Support is provided according to your subscription plan. Response times and support channels vary by plan level.
              </p>
            </section>

            <section>
              <h2 className="font-inter text-2xl text-primary-navy mb-4">9. Disclaimers and Limitations of Liability</h2>

              <h3 className="font-bold text-xl text-primary-navy mb-3 mt-4">9.1 Disclaimer of Warranties</h3>
              <p className="mb-4">
                OUR SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
              </p>

              <h3 className="font-bold text-xl text-primary-navy mb-3 mt-4">9.2 AI Technology Disclaimer</h3>
              <p className="mb-4">
                While our AI technology is designed to be accurate and reliable, it may occasionally make errors or misunderstand requests. You are responsible for monitoring and verifying orders and information processed through our services.
              </p>

              <h3 className="font-bold text-xl text-primary-navy mb-3 mt-4">9.3 Limitation of Liability</h3>
              <p className="mb-4">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, RING TO KITCHEN AI SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES.
              </p>
              <p className="mb-4">
                OUR TOTAL LIABILITY SHALL NOT EXCEED THE AMOUNT YOU PAID US IN THE 12 MONTHS PRECEDING THE CLAIM.
              </p>
            </section>

            <section>
              <h2 className="font-inter text-2xl text-primary-navy mb-4">10. Indemnification</h2>
              <p className="mb-4">
                You agree to indemnify, defend, and hold harmless Ring to Kitchen AI and its officers, directors, employees, and agents from any claims, liabilities, damages, losses, and expenses arising out of or related to:
              </p>
              <ul className="list-disc ml-6 mb-4 space-y-2">
                <li>Your use of our services</li>
                <li>Your violation of these Terms</li>
                <li>Your violation of any rights of another party</li>
                <li>Your violation of any applicable laws or regulations</li>
              </ul>
            </section>

            <section>
              <h2 className="font-inter text-2xl text-primary-navy mb-4">11. Third-Party Services and Integrations</h2>
              <p className="mb-4">
                Our services may integrate with third-party platforms (POS systems, payment processors, etc.). We are not responsible for the functionality, availability, or practices of third-party services. Your use of third-party services is subject to their respective terms and policies.
              </p>
            </section>

            <section>
              <h2 className="font-inter text-2xl text-primary-navy mb-4">12. Termination</h2>

              <h3 className="font-bold text-xl text-primary-navy mb-3 mt-4">12.1 Termination by You</h3>
              <p className="mb-4">
                You may terminate your account at any time by canceling your subscription through your account settings or contacting us.
              </p>

              <h3 className="font-bold text-xl text-primary-navy mb-3 mt-4">12.2 Termination by Us</h3>
              <p className="mb-4">
                We may suspend or terminate your access to our services at any time, with or without cause or notice, including if you violate these Terms or engage in fraudulent or illegal activity.
              </p>

              <h3 className="font-bold text-xl text-primary-navy mb-3 mt-4">12.3 Effect of Termination</h3>
              <p className="mb-4">
                Upon termination, your right to use our services immediately ceases. We may delete your data in accordance with our retention policies. Provisions that by their nature should survive termination will remain in effect.
              </p>
            </section>

            <section>
              <h2 className="font-inter text-2xl text-primary-navy mb-4">13. Dispute Resolution</h2>

              <h3 className="font-bold text-xl text-primary-navy mb-3 mt-4">13.1 Governing Law</h3>
              <p className="mb-4">
                These Terms are governed by the laws of the State of Delaware, without regard to conflict of law principles.
              </p>

              <h3 className="font-bold text-xl text-primary-navy mb-3 mt-4">13.2 Arbitration</h3>
              <p className="mb-4">
                Any dispute arising from these Terms or our services shall be resolved through binding arbitration in accordance with the American Arbitration Association's rules, rather than in court, except that you may assert claims in small claims court if they qualify.
              </p>

              <h3 className="font-bold text-xl text-primary-navy mb-3 mt-4">13.3 Class Action Waiver</h3>
              <p className="mb-4">
                You agree that any arbitration or proceeding shall be limited to the dispute between you and Ring to Kitchen AI individually. You waive any right to participate in a class action lawsuit or class-wide arbitration.
              </p>
            </section>

            <section>
              <h2 className="font-inter text-2xl text-primary-navy mb-4">14. Changes to Terms</h2>
              <p className="mb-4">
                We may modify these Terms at any time. We will provide notice of material changes by email or through our services. Your continued use of our services after changes become effective constitutes acceptance of the modified Terms.
              </p>
            </section>

            <section>
              <h2 className="font-inter text-2xl text-primary-navy mb-4">15. General Provisions</h2>

              <h3 className="font-bold text-xl text-primary-navy mb-3 mt-4">15.1 Entire Agreement</h3>
              <p className="mb-4">
                These Terms, together with our Privacy Policy and any other policies referenced herein, constitute the entire agreement between you and Ring to Kitchen AI.
              </p>

              <h3 className="font-bold text-xl text-primary-navy mb-3 mt-4">15.2 Severability</h3>
              <p className="mb-4">
                If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions will remain in full force and effect.
              </p>

              <h3 className="font-bold text-xl text-primary-navy mb-3 mt-4">15.3 Waiver</h3>
              <p className="mb-4">
                Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.
              </p>

              <h3 className="font-bold text-xl text-primary-navy mb-3 mt-4">15.4 Assignment</h3>
              <p className="mb-4">
                You may not assign or transfer these Terms or your account without our prior written consent. We may assign our rights and obligations without restriction.
              </p>
            </section>

            <section>
              <h2 className="font-inter text-2xl text-primary-navy mb-4">16. Contact Information</h2>
              <p className="mb-4">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <ul className="list-none ml-0 mb-4 space-y-2">
                <li><strong>Email:</strong> legal@ringtokitchen.ai</li>
                <li><strong>Website:</strong> ringtokitchen.ai</li>
                <li><strong>Address:</strong> Ring to Kitchen AI, Inc.</li>
              </ul>
            </section>

            <div className="mt-12 p-6 bg-soft-gray rounded-lg">
              <p className="text-sm text-gray-600">
                By using Ring to Kitchen AI services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <DemoModal isOpen={isDemoModalOpen} onClose={() => setIsDemoModalOpen(false)} />
    </main>
  );
}
