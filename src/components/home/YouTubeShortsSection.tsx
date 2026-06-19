"use client"

import { Section, Container } from "@/components/sections"
import { motion } from "framer-motion"
import { fadeInUp, staggerContainer } from "@/lib/animations"
import { ChevronLeft, ChevronRight, Play } from "lucide-react"
import { useRef, useState } from "react"

/**
 * YouTube Shorts from Fusion Dental Implants channel
 */
const youtubeShorts = [
  {
    id: "SeRKRyjpKaQ",
    title: "Dental Implant Education #1",
  },
  {
    id: "7I060R2iX18",
    title: "Dental Implant Education #2",
  },
  {
    id: "S7dsanzl7hU",
    title: "Dental Implant Education #3",
  },
  {
    id: "aQ8OgEezyZY",
    title: "Dental Implant Education #4",
  },
  {
    id: "iMJgKHUcdvI",
    title: "Dental Implant Education #5",
  },
  {
    id: "5mdw3XD26sY",
    title: "Dental Implant Education #6",
  },
  {
    id: "mjKzzQzT3rk",
    title: "Dental Implant Education #7",
  },
]

export function YouTubeShortsSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 320 // Width of one video card + gap
      const newScrollLeft =
        direction === "left"
          ? scrollContainerRef.current.scrollLeft - scrollAmount
          : scrollContainerRef.current.scrollLeft + scrollAmount

      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      })

      setTimeout(checkScroll, 300)
    }
  }

  return (
    <Section background="default" padding="lg">
      <Container size="lg">
        <motion.div
          className="text-center mb-12"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.h2
            className="text-3xl lg:text-4xl font-serif font-bold text-neutral-900 mb-4"
            variants={fadeInUp}
          >
            Life-Changing Smiles
          </motion.h2>
          <motion.p
            className="text-lg text-neutral-600 max-w-2xl mx-auto"
            variants={fadeInUp}
          >
            See the incredible transformations and hear from our happy patients
          </motion.p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Left Arrow */}
          {canScrollLeft && (
            <button
              onClick={() => scroll("left")}
              className="hidden lg:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 items-center justify-center bg-white rounded-full shadow-lg hover:bg-neutral-50 transition-colors"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-6 h-6 text-neutral-700" />
            </button>
          )}

          {/* Right Arrow */}
          {canScrollRight && (
            <button
              onClick={() => scroll("right")}
              className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 items-center justify-center bg-white rounded-full shadow-lg hover:bg-neutral-50 transition-colors"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-6 h-6 text-neutral-700" />
            </button>
          )}

          {/* Scrollable Container */}
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
                  {/* YouTube Shorts Embed */}
                  <iframe
                    src={`https://www.youtube.com/embed/${short.id}?controls=1&modestbranding=1&color=white`}
                    title={short.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                  />

                  {/* Blue-themed hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-primary-600 flex items-center justify-center shadow-lg transform scale-90 group-hover:scale-100 transition-transform duration-300">
                      <Play className="w-8 h-8 text-white fill-white ml-1" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Link to full YouTube channel */}
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
            className="text-primary-600 hover:text-primary-700 font-medium transition-colors"
          >
            View More on YouTube →
          </a>
        </motion.div>
      </Container>
    </Section>
  )
}
