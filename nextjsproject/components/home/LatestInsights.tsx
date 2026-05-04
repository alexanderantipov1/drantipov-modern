import Link from 'next/link';
import { ArrowRight, MoveRight } from 'lucide-react';
import Image from 'next/image';
import dentalimplants from '@/assest/dentalimplants.png';
import wisdomteeth from '@/assest/wisdomteeth.png';
import teethinanhour from '@/assest/teethinanhour.png';
const insights = [
  {
    title: 'Dental Implants',
    description: 'Dental implants are changing the way people live. They are designed to provide a foundation for replacement teeth that look, feel, and function like natural teeth.',
    image: dentalimplants,
  },
  {
    title: 'Wisdom Teeth',
    description: 'By the age of 18, the average adult has 32 teeth; 16 teeth on the top and 16 teeth on the bottom. Each tooth in the mouth has a specific name and function.',
    image: wisdomteeth,
  },
  {
    title: 'Teeth-in-an-Hour',
    description: 'TEETH-IN-AN-HOUR is a revolutionary concept providing patients with fully functioning teeth on dental implants in one single procedure that lasts about an hour.',
    image: teethinanhour,
  },
];

export default function LatestInsights() {
  return (
    <section className="py-10 md:py-24 bg-[#F5FAFE]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#1D1D1D] mb-6 tracking-tight">
            Latest Insights
          </h2>
          <p className="text-[#1D1D1D] text-xl font-medium leading-relaxed">
            Stay informed with expert insights on dental implants, oral surgery, and oral health
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {insights.map((post, index) => (
            <div
              key={index}
              className="bg-white px-6 py-3 rounded-sm overflow-hidden shadow-xl flex flex-col h-full transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
            >
              {/* Post Image */}
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>

              {/* Post Content */}
              <div className="flex flex-col flex-grow mt-4">
                <h3 className="text-2xl font-bold text-[#191C1E] mb-4">
                  {post.title}
                </h3>
                <p className="text-[#40484E] text-lg leading-relaxed mb-8 flex-grow">
                  {post.description}
                </p>

                <div>
                  <Link
                    href="/blog"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-[#4887AD] to-[#0C4C76] text-white font-bold px-8 py-3 rounded-full text-sm group transition-all duration-300"
                  >
                    Read More
                    <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
