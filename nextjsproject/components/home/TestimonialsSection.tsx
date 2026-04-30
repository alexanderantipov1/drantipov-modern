'use client';

import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import testimonialicon from '@/assest/icons/testimonialicon.svg';

const testimonials = [
  {
    name: 'Val M.',
    location: 'Honolulu, HI',
    text: "I love the knowledge of the doctors and the staff. That made me feel confident of the surgery on my teeth.",
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=compress&cs=tinysrgb&w=150',
  },
  {
    name: 'Vadim S.',
    location: 'Citrus Heights, CA',
    text: "I was transferred here from my dentist saying this is the best oral surgeon in town... I had four teeth removed, two wisdom teeth, and 2 that were growing sideways.",
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=compress&cs=tinysrgb&w=150',
  },
  {
    name: 'Chieko T.',
    location: 'Yuba City, CA',
    text: "My 20 year old son had severe underbite... needed upper and lower jaw surgery which was very involved procedure. The results were amazing!",
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=compress&cs=tinysrgb&w=150',
  },
  {
    name: 'Evelina C.',
    location: 'Citrus Heights, CA',
    text: "I got all 4 of my impacted wisdom teeth pulled out in one day... The surgery took about 45 minutes. Dr. Antipov was professional and caring.",
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=compress&cs=tinysrgb&w=150',
  },
  {
    name: 'Chieko T.',
    location: 'Yuba City, CA',
    text: "My 20 year old son had severe underbite... needed upper and lower jaw surgery which was very involved procedure. The results were amazing!",
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=compress&cs=tinysrgb&w=150',
  },
  {
    name: 'Evelina C.',
    location: 'Citrus Heights, CA',
    text: "I got all 4 of my impacted wisdom teeth pulled out in one day... The surgery took about 45 minutes. Dr. Antipov was professional and caring.",
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=compress&cs=tinysrgb&w=150',
  },
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) setItemsPerPage(1);
      else if (window.innerWidth < 1024) setItemsPerPage(2);
      else setItemsPerPage(4);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex, itemsPerPage]);

  const next = () => {
    const maxIndex = testimonials.length - itemsPerPage;
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prev = () => {
    const maxIndex = testimonials.length - itemsPerPage;
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  return (
    <section className="py-10 md:py-24 bg-[#F5FAFE] relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1D1D1D] mb-4 md:mb-6 tracking-tight">
            What Our Patients Say!
          </h2>
          <p className="text-[#1D1D1D] text-lg md:text-xl font-medium leading-relaxed">
            Experience the difference of specialized oral surgery care with proven expertise and patient-centered approach
          </p>
        </div>

        <div className="relative max-w-7xl mx-auto">
          {/* Navigation Arrows */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 z-20 flex justify-between pointer-events-none px-2 sm:-mx-6 lg:-mx-12">
            <button
              onClick={prev}
              className="w-10 h-10 sm:w-12 sm:h-12 bg-[#0C4C76] text-white rounded-full shadow-lg flex items-center justify-center hover:bg-[#4887AD] transition-all pointer-events-auto"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={next}
              className="w-10 h-10 sm:w-12 sm:h-12 bg-[#0C4C76] text-white rounded-full shadow-lg flex items-center justify-center hover:bg-[#4887AD] transition-all pointer-events-auto"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Slider Container */}
          <div className="overflow-hidden px-1">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)` }}
            >
              {testimonials.map((t, i) => (
                <div
                  key={i}
                  className="shrink-0 px-3 transition-all duration-300"
                  style={{ width: `${100 / itemsPerPage}%` }}
                >
                  <div className="bg-white p-6 md:p-8 rounded-sm shadow-md flex flex-col justify-between h-[450px] md:h-[420px]">
                    <div className="space-y-6">
                      <Image src={testimonialicon} alt="Icon" width={40} height={40} />
                      <p className="text-[#525252] text-lg leading-relaxed font-normal">
                        "{t.text}"
                      </p>
                    </div>

                    <div className="mt-8 flex items-center gap-4">
                      <div className="relative w-12 h-12 flex-shrink-0">
                        <img
                          src={t.avatar}
                          alt={t.name}
                          className="rounded-full w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
                        />
                      </div>
                      <div>
                        <div className="text-[#212121] font-semibold text-base">
                          {t.name} – {t.location}
                        </div>
                        <div className="text-[#525252] text-xs uppercase tracking-widest font-medium">
                          Patient
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
