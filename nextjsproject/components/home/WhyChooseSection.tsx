import { Award, Lightbulb, ShieldCheck, Heart } from 'lucide-react';
import Image from 'next/image';
import circletrinkleft from '@/assest/icons/circletrinkleft.svg';
import circletrinkright from '@/assest/icons/circletrinkright.svg';
import emailcertifiedoutline from '@/assest/icons/emailcertifiedoutline.svg';
import advancedtechnology from '@/assest/icons/advancedtechnology.svg';
import trustedbydentists from '@/assest/icons/trustedbydentists.svg';
import comprehensivecare from '@/assest/icons/comprehensivecare.svg';


const reasons = [
  {
    title: 'Board Certified Excellence',
    description: 'Diplomate of the American Board of Oral & Maxillofacial Surgery with rigorous continuing education and skill mastery.',
    icon: emailcertifiedoutline,
    bgColor: 'bg-[#0C4C76]',
  },
  {
    title: 'Advanced Technology',
    description: 'Utilizing the latest surgical techniques, 3D imaging, and computer-guided surgery for superior precision and outcomes.',
    icon: advancedtechnology,
    bgColor: 'bg-[#4887AD]',
  },
  {
    title: 'Trusted by Dentists',
    description: 'Preferred referral partner for 100+ general dentists across Northern California who trust us with their most complex cases.',
    icon: trustedbydentists,
    bgColor: 'bg-[#0C4C76]',
  },
  {
    title: 'Comprehensive Care',
    description: 'From initial consultation through recovery, we provide personalized attention and support every step of the way.',
    icon: comprehensivecare,
    bgColor: 'bg-[#4887AD]',
  },
];

export default function WhyChooseSection() {
  return (
    <section className=" bg-white relative overflow-hidden">

      <div className="container mx-auto py-10 md:py-24 px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Background Decorations */}
        <div className="absolute top-0 left-[-5%] pointer-events-none hidden lg:block">
          <Image src={circletrinkleft} alt="Icon" width={400} height={400} />
        </div>
        <div className="absolute top-0 right-[-5%] pointer-events-none hidden lg:block">
          <Image src={circletrinkright} alt="Icon" width={400} height={400} />
        </div>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#1D1D1D] mb-6 tracking-tight">
            Why Choose Dr. Antipov
          </h2>
          <p className="text-[#1D1D1D] text-xl font-medium leading-relaxed">
            Experience the difference of specialized oral surgery care with proven expertise and patient-centered approach
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 shadow-2xl gap-2">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div
                key={reason.title}
                className={`p-8 flex flex-col items-start ${reason.bgColor} text-white transition-transform duration-300 hover:scale-[1.02] hover:z-20`}
              >
                <div className="mb-8">
                  <Image src={Icon} alt="Icon" width={48} height={48} />
                </div>
                <h3 className="text-xl font-bold mb-4 leading-tight">
                  {reason.title}
                </h3>
                <p className="text-white text-lg leading-relaxed">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
