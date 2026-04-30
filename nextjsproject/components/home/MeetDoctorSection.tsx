import Link from 'next/link';
import { ArrowRight, CheckCheck } from 'lucide-react';
import image1 from '@/assest/sec-img.png';
import IconCircle from '@/assest/icons/circletrink.svg';
import Image from 'next/image';

const highlights = [
  'Board Certified by the American Board of Oral & Maxillofacial Surgery',
  'Fellowship-trained in Complex Implant Reconstruction',
  '15+ years of surgical excellence',
  'Preferred referral partner for 100+ Northern California dentists',
];

export default function MeetDoctorSection() {
  return (
    <section className="py-10 md:py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left Column: Heading + Image */}
          <div className="space-y-10 text-center lg:text-left">
            <div className="space-y-4">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#1D1D1D] tracking-tight leading-[1.1]">
                Meet Dr. Alexander Antipov
              </h2>
              <p className="text-xl sm:text-2xl font-semibold text-[#4887AD]">
                Northern California's Premier Oral & Maxillofacial Surgeon
              </p>
            </div>

            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#4887AD]/20 to-[#0C4C76]/20 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <Image
                src={image1}
                alt="Dr. Alexander Antipov with patient"
                className="relative z-10 w-full h-auto object-cover shadow-2xl rounded-sm"
              />
            </div>
          </div>

          {/* Right Column: Description + List + Button */}
          <div className="lg:pt-4 relative z-10 text-center lg:text-left">
            <p className="text-[#1D1D1D] text-lg sm:text-xl leading-relaxed mb-10 max-w-2xl mx-auto lg:mx-0">
              With over 15 years of experience and advanced fellowship training in
              complex implant reconstruction, Dr. Antipov combines surgical precision
              with compassionate care to deliver exceptional outcomes.
            </p>

            <ul className="space-y-6 mb-12 max-w-2xl mx-auto lg:mx-0">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-4 text-left group">
                  <div className="mt-1 p-1 rounded-full bg-[#4887AD]/10 text-[#4887AD]">
                    <CheckCheck size={18} strokeWidth={3} />
                  </div>
                  <span className="text-[#1D1D1D] font-semibold text-base sm:text-lg leading-snug">{item}</span>
                </li>
              ))}
            </ul>

            <Link
              href="/about"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-[#4887AD] to-[#0C4C76] hover:from-[#0C4C76] hover:to-[#4887AD] text-white font-bold px-10 py-4 rounded-full transition-all duration-300 shadow-xl shadow-[#0C4C76]/20 group"
            >
              <span className="text-lg">Meet Dr. Antipov</span>
              <ArrowRight className="transition-transform duration-300 group-hover:translate-x-2" size={24} />
            </Link>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute -bottom-20 -right-20 pointer-events-none hidden xl:block opacity-20">
          <Image src={IconCircle} alt="Decorative Icon" width={500} height={500} />
        </div>
      </div>
    </section>
  );
}
