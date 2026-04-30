import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, ArrowRight } from 'lucide-react';
import logoWhite from '@/assest/logo-white.png';

export default function Footer() {
  return (
    <footer className="bg-[#1A516E] text-white pt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand & Contact */}
          <div className="space-y-8">
            <Link href="/" className="inline-block">
              <Image src={logoWhite} alt="Dr. Antipov" width={220} height={60} className="h-12 w-auto" />
            </Link>

            <ul className="space-y-6">
              <li className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center transition-colors group-hover:bg-white/20">
                  <Phone size={20} />
                </div>
                <span className="text-lg font-medium">000-876-235</span>
              </li>
              <li className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center transition-colors group-hover:bg-white/20">
                  <Mail size={20} />
                </div>
                <span className="text-lg font-medium">info@drantipov.co.uk</span>
              </li>
              <li className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center transition-colors group-hover:bg-white/20">
                  <MapPin size={20} />
                </div>
                <span className="text-lg font-medium">123 lorem ipsum dollar smiths</span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-2xl font-bold mb-8">Quick Links</h4>
            <ul className="grid grid-cols-1 gap-4">
              {[
                { label: 'Home', href: '/' },
                { label: 'Financing Options', href: '/financing' },
                { label: 'Patient Information', href: '/patients' },
                { label: 'Book Appointment', href: '/book' },
                { label: 'Procedures', href: '/procedures' },
                { label: 'Post-Op Instructions', href: '/post-op' },
                { label: 'Referring Doctors', href: '/referring' },
                { label: 'Meet Us', href: '/about' },
                { label: 'Contact Us', href: '/contact' },
              ].map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-white/80 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Others */}
          <div>
            <h4 className="text-2xl font-bold mb-8">Others</h4>
            <ul className="space-y-4">
              {[
                { label: 'Privacy Policy', href: '/privacy' },
                { label: 'Cookie Policy', href: '/cookies' },
                { label: 'Terms & Conditions', href: '/terms' },
              ].map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-white/80 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter & Socials */}
          <div>
            <h4 className="text-2xl font-bold mb-8">Subscribe To Our Newsletter</h4>
            <div className="space-y-6">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter Your Email Address"
                  className="w-full bg-white text-gray-800 rounded-full px-6 py-4 outline-none placeholder:text-gray-400"
                />
              </div>
              <button className="w-full bg-gradient-to-r from-[#4887AD] to-[#0C4C76] hover:from-[#0C4C76] hover:to-[#4887AD] text-white font-bold py-4 rounded-full transition-all duration-300 flex items-center justify-center gap-2 group">
                Submit
                <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
              </button>

              <div className="flex items-center gap-4 pt-4">
                {[
                  { icon: Instagram, href: '#' },
                  { icon: Facebook, href: '#' },
                  { icon: Twitter, href: '#' }, // Using Twitter as 'X' replacement
                  { icon: Linkedin, href: '#' },
                ].map(({ icon: Icon, href }, i) => (
                  <a
                    key={i}
                    href={href}
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 border border-white/30 text-white hover:bg-white hover:text-[#1A516E]`}
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-10 border-t border-white/20 text-center">
          <p className="text-white/80">
            © Copyright 2026, galleriaoms, All Right Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
