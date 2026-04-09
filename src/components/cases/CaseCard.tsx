"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { fadeInUp } from "@/lib/animations"

interface CaseCardProps {
  id: string
  title: string
  category: string
  imagePath: string
  procedures?: string[]
  index?: number
}

export function CaseCard({
  id,
  title,
  category,
  imagePath,
  procedures,
  index = 0,
}: CaseCardProps) {
  return (
    <motion.div
      {...fadeInUp}
      transition={{ delay: index * 0.1 }}
      className="group"
    >
      <Link
        href={`/surgical-cases/${category}/${id}`}
        className="block bg-white rounded-2xl overflow-hidden shadow-glass hover:shadow-glass-lg transition-all duration-300 hover:-translate-y-1"
      >
        {/* Image */}
        <div className="relative aspect-[4/3] overflow-hidden bg-neutral-100">
          <Image
            src={imagePath}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="text-sm font-medium text-primary-600 mb-2 uppercase tracking-wide">
            {category.replace(/-/g, " ")}
          </div>
          <h3 className="text-xl font-semibold text-neutral-900 mb-3 group-hover:text-primary-600 transition-colors">
            {title}
          </h3>

          {procedures && procedures.length > 0 && (
            <ul className="space-y-1 mb-4">
              {procedures.slice(0, 3).map((procedure, idx) => (
                <li key={idx} className="text-sm text-neutral-600 flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  <span>{procedure}</span>
                </li>
              ))}
              {procedures.length > 3 && (
                <li className="text-sm text-neutral-500 italic">
                  +{procedures.length - 3} more
                </li>
              )}
            </ul>
          )}

          <div className="flex items-center text-primary-600 font-medium group-hover:gap-2 transition-all">
            View Case
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
