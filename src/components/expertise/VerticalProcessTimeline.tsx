"use client"

import { motion } from "framer-motion"
import { Clock } from "lucide-react"

interface TimelineStep {
  step: number
  title: string
  description: string
  duration?: string
}

interface VerticalProcessTimelineProps {
  steps: TimelineStep[]
}

/**
 * VerticalProcessTimeline - animated vertical timeline with connecting line.
 * Replaces flat stacked process cards for a more cinematic journey feel.
 */
export function VerticalProcessTimeline({ steps }: VerticalProcessTimelineProps) {
  return (
    <div className="relative">
      {/* Vertical connecting line */}
      <div
        aria-hidden="true"
        className="absolute left-6 sm:left-8 top-4 bottom-4 w-0.5 bg-gradient-to-b from-primary-600 via-primary-400 to-primary-200"
      />

      <div className="space-y-8">
        {steps.map((item, index) => (
          <motion.div
            key={item.step}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="relative pl-16 sm:pl-20"
          >
            {/* Numbered dot */}
            <div className="absolute left-0 top-0 flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-gradient-to-br from-primary-600 to-primary-700 text-white text-lg font-bold shadow-lg shadow-primary/30 ring-4 ring-white">
              {item.step}
            </div>

            <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                <h3 className="text-xl font-serif font-bold text-neutral-900">
                  {item.title}
                </h3>
                {item.duration && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary-700 text-xs font-bold">
                    <Clock className="h-3.5 w-3.5" />
                    {item.duration}
                  </span>
                )}
              </div>
              <p className="text-neutral-600 leading-relaxed">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
