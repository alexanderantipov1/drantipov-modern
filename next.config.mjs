import { fileURLToPath } from 'node:url'
import { dirname } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))

// Content Security Policy — permissive enough for current third parties but no inline-everything
const csp = [
  "default-src 'self'",
  // Scripts: self + GTM/GA/Clarity + reCAPTCHA + Calendly + Resend tracking
  "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://*.clarity.ms https://www.google.com/recaptcha/ https://www.gstatic.com/recaptcha/ https://assets.calendly.com https://static.hsforms.net https://js.hsforms.net",
  // Styles: self + inline (next/image, framer-motion) + Google Fonts
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  // Fonts: self + Google Fonts
  "font-src 'self' data: https://fonts.gstatic.com",
  // Images: self + youtube/vimeo/google thumbnails + GA pixel + data URIs
  "img-src 'self' data: blob: https://i.ytimg.com https://img.youtube.com https://i.vimeocdn.com https://lh3.googleusercontent.com https://www.google-analytics.com https://www.googletagmanager.com https://*.clarity.ms",
  // Connect: API endpoints
  "connect-src 'self' https://www.google-analytics.com https://*.clarity.ms https://api.anthropic.com https://api.fusiondentalimplants.com https://webto.salesforce.com https://api.resend.com https://api.hsforms.com",
  // Iframes: reCAPTCHA + YouTube + Vimeo + Calendly + Maps
  "frame-src 'self' https://www.google.com/recaptcha/ https://www.youtube.com https://www.youtube-nocookie.com https://player.vimeo.com https://calendly.com https://www.google.com/maps/",
  // Media: video + audio
  "media-src 'self' blob:",
  // Workers
  "worker-src 'self' blob:",
  // Object/embed
  "object-src 'none'",
  // Base URI
  "base-uri 'self'",
  // Form actions (forms submit to self only)
  "form-action 'self'",
  // Frame ancestors (clickjacking — same as X-Frame-Options SAMEORIGIN)
  "frame-ancestors 'self'",
  // Upgrade HTTP→HTTPS
  "upgrade-insecure-requests",
].join('; ')

/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    root: __dirname,
  },
  images: {
    qualities: [75, 85, 90, 92],
    remotePatterns: [
      { protocol: 'https', hostname: 'i.ytimg.com', pathname: '/vi/**' },         // YouTube thumbnails only
      { protocol: 'https', hostname: 'img.youtube.com', pathname: '/vi/**' },     // YouTube thumbnails (alt)
      { protocol: 'https', hostname: 'i.vimeocdn.com', pathname: '/video/**' },   // Vimeo video thumbnails
      { protocol: 'https', hostname: 'lh3.googleusercontent.com', pathname: '/**' }, // Google business photos
    ],
  },
  async redirects() {
    return [
      { source: '/about-us', destination: '/about', permanent: true },
      { source: '/services', destination: '/expertise', permanent: true },
      { source: '/before-after', destination: '/surgical-cases', permanent: true },
      { source: '/testimonials', destination: '/for-patients/testimonials', permanent: true },
      { source: '/faq', destination: '/for-patients/faqs', permanent: true },
      { source: '/resources', destination: '/for-patients', permanent: true },
    ]
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'Content-Security-Policy', value: csp },
          { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(self), microphone=(), geolocation=(), interest-cohort=()' },
          // X-XSS-Protection removed — deprecated by modern browsers, CSP replaces it
        ],
      },
      {
        source: '/images/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      {
        source: '/videos/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      {
        source: '/(sitemap.xml|robots.txt|manifest.webmanifest)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=3600' },
        ],
      },
    ]
  },
}

export default nextConfig
