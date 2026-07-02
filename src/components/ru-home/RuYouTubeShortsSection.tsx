"use client";

import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import { useRef, useState } from "react";

/**
 * RuYouTubeShortsSection — Russian mirror of YouTubeShortsSection.
 * "Жизни, которые изменили улыбки" — short educational videos by Dr. Antipov.
 */
const youtubeShorts = [
  { id: "SeRKRyjpKaQ", title: "Имплантация зубов — выпуск 1" },
  { id: "7I060R2iX18", title: "Имплантация зубов — выпуск 2" },
  { id: "S7dsanzl7hU", title: "Имплантация зубов — выпуск 3" },
  { id: "aQ8OgEezyZY", title: "Имплантация зубов — выпуск 4" },
  { id: "iMJgKHUcdvI", title: "Имплантация зубов — выпуск 5" },
  { id: "5mdw3XD26sY", title: "Имплантация зубов — выпуск 6" },
  { id: "mjKzzQzT3rk", title: "Имплантация зубов — выпуск 7" },
];

export default function RuYouTubeShortsSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 320;
      const newScrollLeft =
        direction === "left"
          ? scrollContainerRef.current.scrollLeft - scrollAmount
          : scrollContainerRef.current.scrollLeft + scrollAmount;

      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      });

      setTimeout(checkScroll, 300);
    }
  };

  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-3xl lg:text-4xl font-bold text-dark mb-4">
            Улыбки, которые меняют жизнь
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Посмотрите, как преображаются наши пациенты — и услышите их истории из первых уст.
          </p>
        </motion.div>

        <div className="relative">
          {canScrollLeft && (
            <button
              onClick={() => scroll("left")}
              className="hidden lg:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 items-center justify-center bg-white rounded-full shadow-lg hover:bg-neutral-50 transition-colors"
              aria-label="Прокрутить влево"
            >
              <ChevronLeft className="w-6 h-6 text-dark" />
            </button>
          )}

          {canScrollRight && (
            <button
              onClick={() => scroll("right")}
              className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 items-center justify-center bg-white rounded-full shadow-lg hover:bg-neutral-50 transition-colors"
              aria-label="Прокрутить вправо"
            >
              <ChevronRight className="w-6 h-6 text-dark" />
            </button>
          )}

          <div
            ref={scrollContainerRef}
            onScroll={checkScroll}
            className="flex gap-4 lg:gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {youtubeShorts.map((short, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex-shrink-0 w-[280px] lg:w-[300px]"
              >
                <div className="group relative aspect-[9/16] rounded-2xl overflow-hidden bg-neutral-100 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <iframe
                    src={`https://www.youtube.com/embed/${short.id}?controls=1&modestbranding=1&color=white`}
                    title={short.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center shadow-lg transform scale-90 group-hover:scale-100 transition-transform duration-300">
                      <Play className="w-8 h-8 text-white fill-white ml-1" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          className="text-center mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <a
            href="https://www.youtube.com/@FusionDentalImplants/shorts"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-primary hover:text-primary-dark transition-colors"
          >
            Смотреть больше на YouTube →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
