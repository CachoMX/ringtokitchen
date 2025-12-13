import Link from 'next/link';
import { COMPANY_INFO, SOCIAL_LINKS } from '@/lib/constants';

export default function Footer() {
  return (
    <>
      {/* Separator */}
      <div className="h-4 bg-white"></div>
      <div className="h-1 bg-energy-red/30"></div>

      <footer className="bg-primary-navy text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between gap-8 mb-8">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start">
            <div className="mb-4 md:ml-4">
              <img src="/images/logo_footer.svg" alt="Ring to Kitchen AI" className="w-auto" style={{ height: '8rem' }} />
            </div>
            <p className="text-white/70 text-sm text-center max-w-[200px]">
              From ring to kitchen<br />AI that speaks restaurant
            </p>
          </div>

          {/* Product */}
          <div className="md:pt-6 text-center md:text-left">
            <h4 className="font-bold mb-4">Product</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/pricing" className="text-white/70 hover:text-energy-red transition">Pricing</Link></li>
              <li><Link href="/#how-it-works" className="text-white/70 hover:text-energy-red transition">How It Works</Link></li>
              <li><Link href="/blog" className="text-white/70 hover:text-energy-red transition">Blog</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div className="md:pt-6 text-center md:text-left">
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/contact" className="text-white/70 hover:text-energy-red transition">Contact</Link></li>
              <li><Link href="/privacy" className="text-white/70 hover:text-energy-red transition">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-white/70 hover:text-energy-red transition">Terms of Service</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="md:pt-6 text-center md:text-left">
            <h4 className="font-bold mb-4">Get in Touch</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <a href="tel:+19167593687" className="hover:text-energy-red transition font-bold">
                  {COMPANY_INFO.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
      </div>
      <div className="border-t border-white/20 mx-4 sm:mx-6 lg:mx-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 text-center text-sm text-white/60">
          <p>&copy; {new Date().getFullYear()} Ring to Kitchen AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
    </>
  );
}
