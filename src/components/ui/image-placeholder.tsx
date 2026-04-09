/**
 * Image Placeholder Component
 *
 * Provides consistent placeholder images with proper aspect ratios
 * and glassmorphism styling until real images are added.
 */

import { cn } from "@/lib/utils"

interface ImagePlaceholderProps {
  /**
   * Aspect ratio of the image (e.g., "16/9", "4/3", "1/1", "4/5")
   */
  aspectRatio?: string
  /**
   * Text to display in the placeholder
   */
  text?: string
  /**
   * Additional CSS classes
   */
  className?: string
  /**
   * Icon to display (optional)
   */
  icon?: React.ReactNode
  /**
   * Background gradient type
   */
  gradient?: "primary" | "accent" | "neutral"
}

export function ImagePlaceholder({
  aspectRatio = "16/9",
  text = "Image Placeholder",
  className,
  icon,
  gradient = "primary",
}: ImagePlaceholderProps) {
  const gradientClasses = {
    primary: "from-primary-100 via-primary-50 to-accent-50",
    accent: "from-accent-100 via-accent-50 to-primary-50",
    neutral: "from-neutral-100 via-neutral-50 to-neutral-100",
  }

  return (
    <div
      className={cn(
        "relative w-full overflow-hidden rounded-xl bg-gradient-to-br",
        gradientClasses[gradient],
        className
      )}
      style={{ aspectRatio }}
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
        {icon && <div className="mb-3 opacity-40">{icon}</div>}
        <p className="text-center text-sm text-neutral-500 font-medium">{text}</p>
      </div>
      {/* Glassmorphism overlay effect */}
      <div className="absolute inset-0 bg-white/10 backdrop-blur-[2px]" />
    </div>
  )
}

/**
 * Profile Image Placeholder - For doctor/staff photos
 */
export function ProfileImagePlaceholder({
  name,
  className,
}: {
  name: string
  className?: string
}) {
  return (
    <ImagePlaceholder
      aspectRatio="1/1"
      text={`${name}'s Photo`}
      gradient="primary"
      className={cn("rounded-full", className)}
    />
  )
}

/**
 * Office Image Placeholder - For office/facility photos
 */
export function OfficeImagePlaceholder({ className }: { className?: string }) {
  return (
    <ImagePlaceholder
      aspectRatio="16/9"
      text="Office Photo"
      gradient="neutral"
      className={className}
    />
  )
}

/**
 * Video Thumbnail Placeholder - For video thumbnails
 */
export function VideoThumbnailPlaceholder({
  title,
  className,
}: {
  title?: string
  className?: string
}) {
  return (
    <ImagePlaceholder
      aspectRatio="16/9"
      text={title ? `Video: ${title}` : "Video Thumbnail"}
      gradient="primary"
      className={className}
      icon={
        <svg
          className="h-16 w-16"
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M8 5v14l11-7z" />
        </svg>
      }
    />
  )
}

/**
 * Before/After Image Placeholder - For treatment results
 */
export function BeforeAfterPlaceholder({
  type,
  className,
}: {
  type: "before" | "after"
  className?: string
}) {
  return (
    <ImagePlaceholder
      aspectRatio="4/3"
      text={`${type === "before" ? "Before" : "After"} Treatment Photo`}
      gradient={type === "before" ? "neutral" : "accent"}
      className={className}
    />
  )
}

/**
 * Logo Placeholder - For partner/brand logos
 */
export function LogoPlaceholder({ name, className }: { name: string; className?: string }) {
  return (
    <ImagePlaceholder
      aspectRatio="3/2"
      text={`${name} Logo`}
      gradient="neutral"
      className={cn("bg-white border border-neutral-200", className)}
    />
  )
}
