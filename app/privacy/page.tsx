'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import DemoModal from '@/components/DemoModal';

export default function PrivacyPage() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  return (
    <main className="min-h-screen bg-white">
      <Header onDemoClick={() => setIsDemoModalOpen(true)} />

      <div className="pt-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="font-inter text-4xl sm:text-5xl text-primary-navy mb-6">
            Privacy Policy
          </h1>

          <p className="text-gray-600 mb-8">
            Last Updated: January 15, 2025
          </p>

          <div className="prose prose-lg max-w-none space-y-8 text-gray-700">
            <section>
              <h2 className="font-inter text-2xl text-primary-navy mb-4">1. Introduction</h2>
              <p className="mb-4">
                Ring to Kitchen AI ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our AI voice agent services for restaurants.
              </p>
              <p className="mb-4">
                By using our services, you agree to the collection and use of information in accordance with this policy. If you do not agree with our policies and practices, please do not use our services.
              </p>
            </section>

            <section>
              <h2 className="font-inter text-2xl text-primary-navy mb-4">2. Information We Collect</h2>

              <h3 className="font-bold text-xl text-primary-navy mb-3 mt-4">2.1 Information You Provide</h3>
              <p className="mb-4">We collect information that you provide directly to us, including:</p>
              <ul className="list-disc ml-6 mb-4 space-y-2">
                <li>Contact information (name, email address, phone number)</li>
                <li>Business information (restaurant name, address, operating hours)</li>
                <li>Menu details and pricing information</li>
                <li>Payment and billing information</li>
                <li>Customer service communications</li>
              </ul>

              <h3 className="font-bold text-xl text-primary-navy mb-3 mt-4">2.2 Information Collected Automatically</h3>
              <p className="mb-4">When you use our services, we automatically collect:</p>
              <ul className="list-disc ml-6 mb-4 space-y-2">
                <li>Call recordings and transcripts (with consent)</li>
                <li>Usage data and analytics</li>
                <li>Device and browser information</li>
                <li>IP addresses and location data</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>

              <h3 className="font-bold text-xl text-primary-navy mb-3 mt-4">2.3 Information from Third Parties</h3>
              <p className="mb-4">We may receive information from:</p>
              <ul className="list-disc ml-6 mb-4 space-y-2">
                <li>POS system integrations</li>
                <li>Payment processors</li>
                <li>Marketing and analytics partners</li>
              </ul>
            </section>

            <section>
              <h2 className="font-inter text-2xl text-primary-navy mb-4">3. How We Use Your Information</h2>
              <p className="mb-4">We use the information we collect to:</p>
              <ul className="list-disc ml-6 mb-4 space-y-2">
                <li>Provide, maintain, and improve our AI voice agent services</li>
                <li>Process orders and reservations</li>
                <li>Send transactional communications and updates</li>
                <li>Provide customer support</li>
                <li>Analyze usage patterns and optimize performance</li>
                <li>Train and improve our AI models</li>
                <li>Detect and prevent fraud or abuse</li>
                <li>Comply with legal obligations</li>
                <li>Send marketing communications (with your consent)</li>
              </ul>
            </section>

            <section>
              <h2 className="font-inter text-2xl text-primary-navy mb-4">4. Information Sharing and Disclosure</h2>
              <p className="mb-4">We may share your information with:</p>

              <h3 className="font-bold text-xl text-primary-navy mb-3 mt-4">4.1 Service Providers</h3>
              <p className="mb-4">
                Third-party vendors who perform services on our behalf, such as cloud hosting, payment processing, and analytics.
              </p>

              <h3 className="font-bold text-xl text-primary-navy mb-3 mt-4">4.2 Business Transfers</h3>
              <p className="mb-4">
                In connection with any merger, sale of company assets, financing, or acquisition of all or a portion of our business.
              </p>

              <h3 className="font-bold text-xl text-primary-navy mb-3 mt-4">4.3 Legal Requirements</h3>
              <p className="mb-4">
                When required by law or to protect our rights, privacy, safety, or property, and that of our users or the public.
              </p>

              <h3 className="font-bold text-xl text-primary-navy mb-3 mt-4">4.4 With Your Consent</h3>
              <p className="mb-4">
                We may share information with third parties when you give us explicit consent to do so.
              </p>
            </section>

            <section>
              <h2 className="font-inter text-2xl text-primary-navy mb-4">5. Data Security</h2>
              <p className="mb-4">
                We implement appropriate technical and organizational security measures to protect your information, including:
              </p>
              <ul className="list-disc ml-6 mb-4 space-y-2">
                <li>Encryption of data in transit and at rest</li>
                <li>Regular security assessments and audits</li>
                <li>Access controls and authentication</li>
                <li>Employee training on data protection</li>
                <li>Incident response procedures</li>
              </ul>
              <p className="mb-4">
                However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="font-inter text-2xl text-primary-navy mb-4">6. Data Retention</h2>
              <p className="mb-4">
                We retain your information for as long as necessary to provide our services and fulfill the purposes outlined in this Privacy Policy. We may also retain information to comply with legal obligations, resolve disputes, and enforce our agreements.
              </p>
              <p className="mb-4">
                Call recordings are typically retained for 90 days unless required for longer periods by law or for legitimate business purposes.
              </p>
            </section>

            <section>
              <h2 className="font-inter text-2xl text-primary-navy mb-4">7. Your Rights and Choices</h2>
              <p className="mb-4">Depending on your location, you may have the following rights:</p>
              <ul className="list-disc ml-6 mb-4 space-y-2">
                <li><strong>Access:</strong> Request access to your personal information</li>
                <li><strong>Correction:</strong> Request correction of inaccurate information</li>
                <li><strong>Deletion:</strong> Request deletion of your information</li>
                <li><strong>Portability:</strong> Request a copy of your data in a portable format</li>
                <li><strong>Opt-out:</strong> Opt-out of marketing communications</li>
                <li><strong>Object:</strong> Object to certain processing of your information</li>
              </ul>
              <p className="mb-4">
                To exercise these rights, please contact us at privacy@ringtokitchen.ai
              </p>
            </section>

            <section>
              <h2 className="font-inter text-2xl text-primary-navy mb-4">8. Cookies and Tracking Technologies</h2>
              <p className="mb-4">
                We use cookies and similar tracking technologies to collect and track information about your use of our services. You can control cookies through your browser settings, but disabling cookies may affect your ability to use certain features.
              </p>
            </section>

            <section>
              <h2 className="font-inter text-2xl text-primary-navy mb-4">9. Children's Privacy</h2>
              <p className="mb-4">
                Our services are not directed to children under 13 years of age. We do not knowingly collect personal information from children under 13. If you become aware that a child has provided us with personal information, please contact us.
              </p>
            </section>

            <section>
              <h2 className="font-inter text-2xl text-primary-navy mb-4">10. California Privacy Rights</h2>
              <p className="mb-4">
                California residents have specific rights under the California Consumer Privacy Act (CCPA), including the right to know what personal information is collected, the right to delete personal information, and the right to opt-out of the sale of personal information.
              </p>
              <p className="mb-4">
                We do not sell personal information as defined by the CCPA.
              </p>
            </section>

            <section>
              <h2 className="font-inter text-2xl text-primary-navy mb-4">11. International Data Transfers</h2>
              <p className="mb-4">
                Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place to protect your information in accordance with this Privacy Policy.
              </p>
            </section>

            <section>
              <h2 className="font-inter text-2xl text-primary-navy mb-4">12. Changes to This Privacy Policy</h2>
              <p className="mb-4">
                We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
              </p>
              <p className="mb-4">
                Your continued use of our services after any changes constitutes your acceptance of the updated Privacy Policy.
              </p>
            </section>

            <section>
              <h2 className="font-inter text-2xl text-primary-navy mb-4">13. Contact Us</h2>
              <p className="mb-4">
                If you have any questions about this Privacy Policy or our privacy practices, please contact us:
              </p>
              <ul className="list-none ml-0 mb-4 space-y-2">
                <li><strong>Email:</strong> privacy@ringtokitchen.ai</li>
                <li><strong>Website:</strong> ringtokitchen.ai</li>
                <li><strong>Address:</strong> Ring to Kitchen AI, Inc.</li>
              </ul>
            </section>
          </div>
        </div>
      </div>

      <Footer />
      <DemoModal isOpen={isDemoModalOpen} onClose={() => setIsDemoModalOpen(false)} />
    </main>
  );
}
