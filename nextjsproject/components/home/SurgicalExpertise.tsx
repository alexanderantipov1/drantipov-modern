import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import teethinanhour from '@/assest/icons/teeth-in-an-hour.svg';
import dentalimplant from '@/assest/icons/dental-implants.svg';
import bonegrafting from '@/assest/icons/bone-grafting.svg';
import jawsurgery from '@/assest/icons/jaw-surgery.svg';
import sleepapnea from '@/assest/icons/sleep-apnea.svg';
import facialtrauma from '@/assest/icons/facial-trauma.svg';
import Image from 'next/image';

const services = [
  {
    title: 'Teeth-In-An-Hour',
    description: 'Permanent, natural-looking solutions for missing teeth using the latest guided surgery technology.',
    icon: teethinanhour,
    isWide: true,
    bgColor: 'bg-white',
    hasButton: true,
  },
  {
    title: 'Dental Implants',
    description: 'The implants themselves are tiny titanium posts that are surgically placed into the jawbone where teeth are missing.',
    icon: dentalimplant,
    bgColor: 'bg-white',
  },
  {
    title: 'Bone Grafting',
    description: 'Over a period of time, the jawbone associated with missing teeth atrophies or is reabsorbed.',
    icon: bonegrafting,
    bgColor: 'bg-[#F2F3F7]',
  },
  {
    title: 'Jaw Surgery',
    description: "Orthognathic surgery is needed when jaws don't meet correctly and/or teeth don't seem to fit with jaws.",
    icon: jawsurgery,
    bgColor: 'bg-[#F2F3F7]',
  },
  {
    title: 'Sleep Apnea',
    description: 'People with obstructive sleep apnea (OSA) have disrupted sleep and low blood oxygen levels.',
    icon: sleepapnea,
    bgColor: 'bg-[#0C4C76]',
    isDark: true,
    isWide: true,
  },
  {
    title: 'Facial Trauma',
    description: 'The dental specialist performs the proper treatment of facial injuries.',
    icon: facialtrauma,
    bgColor: 'bg-white',
  },
];

export default function SurgicalExpertise() {
  return (
    <section className="py-10 md:py-24 bg-[#F5FAFE]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-16 gap-10 text-center lg:text-left">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#1D1D1D] tracking-tight">
            Surgical Expertise
          </h2>
          <p className="text-[#1D1D1D] text-lg sm:text-xl max-w-xl lg:max-w-sm font-normal leading-relaxed mx-auto lg:mx-0">
            Advanced oral and maxillofacial surgical procedures with precision, compassion, and proven results
          </p>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className={`
                  p-8 sm:p-10 flex flex-col justify-between transition-all duration-300 min-h-[350px]
                  ${service.isWide ? 'lg:col-span-3' : 'lg:col-span-2'}
                  ${service.bgColor}
                  ${service.isDark ? 'text-white' : 'text-[#1D1D1D]'}
                  hover:shadow-2xl hover:-translate-y-1 group rounded-sm
                `}
              >
                <div className="space-y-8">
                  <div className={`transition-transform duration-300 group-hover:scale-110 inline-block`}>
                    <Image src={Icon} alt={service.title} width={48} height={48} />
                  </div>

                  <div className="space-y-4">
                    <h3 className={`text-2xl sm:text-3xl font-bold tracking-tight ${service.isDark ? 'text-white' : 'text-[#191C1E]'}`}>
                      {service.title}
                    </h3>
                    <p className={`text-lg leading-relaxed ${service.isDark ? 'text-white/80' : 'text-[#40484E]'}`}>
                      {service.description}
                    </p>
                  </div>
                </div>

                {service.hasButton && (
                  <div className="mt-10">
                    <Link
                      href="/services"
                      className="inline-flex items-center gap-2 bg-gradient-to-r from-[#4887AD] to-[#0C4C76] text-white font-bold px-8 py-3.5 rounded-full text-sm group transition-all duration-300 shadow-lg shadow-[#0C4C76]/20"
                    >
                      View Dental Protocols
                      <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
