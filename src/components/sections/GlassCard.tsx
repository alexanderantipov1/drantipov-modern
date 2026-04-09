"use client"

import React from "react"
import { cn } from "@/lib/utils"
import { motion, HTMLMotionProps } from "framer-motion"

interface GlassCardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode
  className?: string
  variant?: "default" | "hover" | "dark"
  blur?: "sm" | "md" | "lg"
}

/**
 * GlassCard - Glassmorphism card component
 *
 * Features:
 * - Frosted glass effect with backdrop blur
 * - Semi-transparent background
 * - Subtle border and shadow
 * - Optional hover animation
 * - Responsive and accessible
 *
 * @example
 * <GlassCard variant="hover">
 *   <h3>Card Title</h3>
 *   <p>Card content...</p>
 * </GlassCard>
 */
export function GlassCard({
  children,
  className,
  variant = "default",
  blur = "md",
  ...props
}: GlassCardProps) {
  const blurClasses = {
    sm: "backdrop-blur-sm",
    md: "backdrop-blur-md",
    lg: "backdrop-blur-lg",
  }

  const variantClasses = {
    default: "bg-white/70 border-white/20",
    hover: "bg-white/70 border-white/20 transition-transform hover:scale-[1.02] hover:shadow-glass-lg",
    dark: "bg-neutral-900/70 border-neutral-700/30 text-white",
  }

  return (
    <motion.div
      className={cn(
        // Base styles
        "rounded-2xl border shadow-glass",
        // Glassmorphism effect
        blurClasses[blur],
        variantClasses[variant],
        // Padding and layout
        "p-6 lg:p-8",
        // Custom classes
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  )
}
