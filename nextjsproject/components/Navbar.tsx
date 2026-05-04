'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowRight } from 'lucide-react';
import logo from '@/assest/logo.png';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Financing Options', href: '/financing' },
  { label: 'Patients Information', href: '/patients' },
  { label: 'Book Appointment', href: '/book' },
  { label: 'Procedure', href: '/procedure' },
  { label: 'Post-Op Instructions', href: '/post-op' },
  { label: 'Referring Doctors', href: '/referring' },
  { label: 'Meet Us', href: '/about' },
  { label: 'Contact Us', href: '/contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [open]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${scrolled ? 'bg-white shadow-md h-20' : 'bg-white/95 h-24'
        }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex items-center justify-between h-full">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src={logo}
              alt="Dr. Antipov"
              width={180}
              height={50}
              className="h-8 sm:h-10 w-auto"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex flex-wrap items-center gap-4 xl:gap-3">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`
                    text-[13px] xl:text-sm font-medium transition-all duration-200 whitespace-nowrap
                    ${isActive
                      ? 'text-[#1D1D1D] font-bold border-b-2 border-[#1D1D1D] pb-1'
                      : 'text-[#1D1D1D]/70 hover:text-[#1D1D1D]'}
                  `}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Action Button */}
          <div className="hidden lg:flex items-center">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-[#4887AD] to-[#0C4C76] text-white text-[13px] xl:text-sm font-bold px-5 xl:px-7 py-2.5 xl:py-3 rounded-full flex items-center gap-2 group transition-all duration-300 shadow-lg shadow-[#0C4C76]/20"
            >
              Schedule a Consultation
              <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-[#1D1D1D] p-2 hover:bg-gray-100 rounded-lg transition-colors relative z-[1000]"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-white z-[90] transition-all duration-500 ease-in-out lg:hidden ${open ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
          }`}
      >
        <div className="flex flex-col h-full pt-24 px-6 pb-10">
          <nav className="flex-grow overflow-y-auto py-6 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-[#1D1D1D]/80 hover:text-[#1D1D1D] py-4 text-xl font-semibold border-b border-gray-50 transition-colors"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="pt-6">
            <Link
              href="/contact"
              className="block text-center bg-gradient-to-r from-[#4887AD] to-[#0C4C76] text-white text-lg font-bold px-5 py-5 rounded-full shadow-xl shadow-[#0C4C76]/20"
              onClick={() => setOpen(false)}
            >
              Schedule a Consultation
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
