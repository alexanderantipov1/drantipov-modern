import React from "react"
import { cn } from "@/lib/utils"

interface SectionProps {
  children: React.ReactNode
  className?: string
  id?: string
  background?: "default" | "primary" | "accent" | "neutral" | "gradient"
  padding?: "none" | "sm" | "md" | "lg" | "xl"
  as?: "section" | "div" | "article"
}

/**
 * Section - Semantic section wrapper with consistent spacing and backgrounds
 *
 * Features:
 * - Consistent vertical spacing
 * - Multiple background options
 * - Responsive padding
 * - Semantic HTML elements
 *
 * @example
 * <Section background="gradient" padding="xl">
 *   <Container>
 *     <h2>Section Title</h2>
 *     <p>Content...</p>
 *   </Container>
 * </Section>
 */
export function Section({
  children,
  className,
  id,
  background = "default",
  padding = "lg",
  as: Component = "section",
}: SectionProps) {
  const backgroundClasses = {
    default: "bg-white",
    primary: "bg-primary-50",
    accent: "bg-accent-50",
    neutral: "bg-neutral-50",
    gradient: "bg-gradient-to-br from-primary-50 via-white to-accent-50",
  }

  const paddingClasses = {
    none: "",
    sm: "py-8 md:py-12",
    md: "py-12 md:py-16",
    lg: "py-16 md:py-24",
    xl: "py-24 md:py-32",
  }

  return (
    <Component
      id={id}
      className={cn(
        // Background
        backgroundClasses[background],
        // Padding
        paddingClasses[padding],
        // Full width
        "w-full",
        // Custom classes
        className
      )}
    >
      {children}
    </Component>
  )
}
