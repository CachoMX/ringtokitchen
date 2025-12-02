import Link from 'next/link';
import { COMPANY_INFO, SOCIAL_LINKS } from '@/lib/constants';

export default function Footer() {
  return (
    <footer className="bg-primary-navy text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <img src="/images/logo_footer.svg" alt="Ring to Kitchen AI" className="w-auto" style={{ height: '8rem' }} />
            </div>
            <p className="text-white/70 text-sm">{COMPANY_INFO.tagline}</p>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-bold mb-4">Product</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/pricing" className="text-white/70 hover:text-white transition">Pricing</Link></li>
              <li><Link href="/#how-it-works" className="text-white/70 hover:text-white transition">How It Works</Link></li>
              <li><Link href="/blog" className="text-white/70 hover:text-white transition">Blog</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href={`mailto:${COMPANY_INFO.email}`} className="text-white/70 hover:text-white transition">Contact</a></li>
              <li><Link href="/privacy" className="text-white/70 hover:text-white transition">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-white/70 hover:text-white transition">Terms of Service</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4">Get in Touch</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <a href={`mailto:contact@ringtokitchen.ai`} className="hover:text-white transition">
                  contact@ringtokitchen.ai
                </a>
              </li>
              <li>
                <a href="tel:+14482299561" className="hover:text-white transition font-bold">
                  {COMPANY_INFO.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/20 pt-8 text-center text-sm text-white/60">
          <p>&copy; {new Date().getFullYear()} Ring to Kitchen AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
