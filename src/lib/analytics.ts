/**
 * Google Analytics 4 - Analytics utilities
 *
 * This file contains utilities for tracking events and page views
 * with Google Analytics 4.
 */

// Extend the Window interface to include gtag
declare global {
  interface Window {
    gtag?: (
      command: 'config' | 'event' | 'js' | 'set',
      targetId: string,
      config?: Record<string, any>
    ) => void
    dataLayer?: any[]
  }
}

export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID

/**
 * Check if Google Analytics is enabled
 */
export const isAnalyticsEnabled = () => {
  return !!GA_MEASUREMENT_ID && GA_MEASUREMENT_ID !== 'G-XXXXXXXXXX'
}

/**
 * Track page view
 */
export const pageview = (url: string) => {
  if (!isAnalyticsEnabled()) return

  window.gtag?.('config', GA_MEASUREMENT_ID!, {
    page_path: url,
  })
}

/**
 * Track custom events
 */
export const event = ({
  action,
  category,
  label,
  value,
}: {
  action: string
  category: string
  label?: string
  value?: number
}) => {
  if (!isAnalyticsEnabled()) return

  window.gtag?.('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  })
}

/**
 * Track consultation form submissions
 */
export const trackConsultationSubmission = (interest: string) => {
  event({
    action: 'form_submission',
    category: 'consultation',
    label: interest,
  })
}

/**
 * Track phone clicks
 */
export const trackPhoneClick = () => {
  event({
    action: 'click',
    category: 'contact',
    label: 'phone_number',
  })
}

/**
 * Track email clicks
 */
export const trackEmailClick = () => {
  event({
    action: 'click',
    category: 'contact',
    label: 'email_address',
  })
}

/**
 * Track external link clicks
 */
export const trackExternalLink = (url: string, label?: string) => {
  event({
    action: 'click',
    category: 'external_link',
    label: label || url,
  })
}

/**
 * Track video plays
 */
export const trackVideoPlay = (videoTitle: string) => {
  event({
    action: 'play',
    category: 'video',
    label: videoTitle,
  })
}

/**
 * Track CTA button clicks
 */
export const trackCTAClick = (ctaName: string, location: string) => {
  event({
    action: 'click',
    category: 'cta',
    label: `${ctaName} - ${location}`,
  })
}
