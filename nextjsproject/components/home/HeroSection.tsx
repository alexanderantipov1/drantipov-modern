import Link from 'next/link';
import { Star, Award, Users, Clock, ArrowRight } from 'lucide-react';
import image1 from '@/assest/hero-img.png';
import Image from 'next/image';
import Icon1 from '@/assest/icons/board-certified.svg';
import Icon2 from '@/assest/icons/advanced-training.svg';
import Icon3 from '@/assest/icons/trusted-by-dentists.svg';

const stats = [
  { icon: Icon1, name: 'Board Certified', paragraph: 'Diplomate of the American Board of Oral & Maxillofacial Surgery' },
  { icon: Icon2, name: 'Advanced Training', paragraph: 'Fellowship-trained in complex implant reconstruction' },
  { icon: Icon3, name: 'Trusted By Dentists', paragraph: 'Preferred referral partner across Northern California' },
];

export default function HeroSection() {
  return (
    <>
      <section className="relative min-h-screen bg-[#010510] overflow-hidden flex items-center">
        {/* Background Layered System */}
        <div className="absolute inset-0 z-0">
          {/* Base Grid */}
          <div className="absolute inset-0 bg-grid-white opacity-20" />

          {/* Light Beam */}
          <div className="absolute inset-0 bg-beam mix-blend-screen opacity-60" />

          {/* Glowing Pulses (Vertical Lines - Rain Animation) */}
          <div className="absolute top-[-20%] left-[25%] w-[1px] h-32 bg-gradient-to-b from-transparent via-[#3b9fd1] to-transparent opacity-40 animate-rain" style={{ animationDuration: '4s' }} />
          <div className="absolute top-[-20%] left-[65%] w-[1px] h-48 bg-gradient-to-b from-transparent via-[#3b9fd1] to-transparent opacity-30 animate-rain" style={{ animationDuration: '6s', animationDelay: '1s' }} />
          <div className="absolute top-[-20%] left-[15%] w-[1px] h-24 bg-gradient-to-b from-transparent via-[#3b9fd1] to-transparent opacity-50 animate-rain" style={{ animationDuration: '3s', animationDelay: '2s' }} />
          <div className="absolute top-[-20%] left-[85%] w-[1px] h-40 bg-gradient-to-b from-transparent via-[#3b9fd1] to-transparent opacity-20 animate-rain" style={{ animationDuration: '5s', animationDelay: '3s' }} />

          {/* Subtle Squares */}
          <div className="absolute top-[30%] left-[20%] w-16 h-16 bg-[#3b9fd1]/5 blur-xl" />
          <div className="absolute top-[70%] left-[60%] w-24 h-24 bg-[#3b9fd1]/5 blur-2xl" />
          <div className="absolute top-[15%] left-[75%] w-12 h-12 bg-[#3b9fd1]/5 blur-lg" />

          {/* Bottom Fade */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#010510] via-transparent to-transparent" />
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-0">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text */}
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
                Dr. Alexander Antipov
              </h1>
              <p className="text-2xl text-white font-bold mb-2">
                Northern California's Trusted Oral Surgery Innovator
              </p>
              <p className="text-white text-lg leading-relaxed mb-8 max-w-lg">
                Board-certified oral surgeon specializing in dental implants, full-arch restoration, and corrective jaw surgery
              </p>

              <div className="flex flex-wrap gap-4 mb-12">
                <Link
                  href="/contact"
                  className="bg-[#A9DFFF] hover:bg-[#2d8ab8] hover:text-white text-base text-[#1A6286] font-semibold px-8 py-3.5 rounded-full transition-all duration-200 shadow-lg shadow-[#3b9fd1]/20 hover:shadow-xl hover:shadow-[#3b9fd1]/30"
                >
                  Schedule a Consultation <ArrowRight size={20} className="inline-block" />
                </Link>
                <Link
                  href="/about"
                  className="text-base border border-white hover:border-white/60 text-white font-semibold px-8 py-3.5 rounded-full transition-all duration-200 hover:bg-white/5 bg-[#ffffff2d]"
                >
                  View Services
                </Link>
              </div>


            </div>

            {/* Doctor image */}
            <div className="hidden lg:flex justify-end items-end relative">
              <div className="absolute inset-0 bg-gradient-radial from-[#3b9fd1]/10 to-transparent rounded-full blur-3xl" />
              <Image
                src={image1}
                alt="Dr. Alexander Antipov"
                className="relative z-10 h-[733px] w-auto object-cover object-top rounded-2xl shadow-2xl"
              />
            </div>
          </div>


        </div>
      </section>
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 -mt-24">
        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {stats.map(({ icon: Icon, name, paragraph }) => (
            <div key={paragraph} className="bg-[#F5FAFE] border border-white p-8 text-left hover:bg-[#e1ebf2] transition-colors shadow-md hover:shadow-xl">
              <Image src={Icon} alt={name} className="text-[#3b9fd1] mr-auto mb-3" />
              <div className="text-[#1D1D1D] font-bold text-2xl mb-3">{name}</div>
              <div className="text-[#1D1D1D]/80 text-lg">{paragraph}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
