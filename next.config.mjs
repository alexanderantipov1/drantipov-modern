import { fileURLToPath } from 'node:url'
import { dirname } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))

/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    root: __dirname,
  },
  images: {
    // Allow all quality values used across the codebase (85/90/92) — Next.js 16 default is [75]
    qualities: [75, 85, 90, 92],
    remotePatterns: [
      { protocol: 'https', hostname: 'i.ytimg.com' },       // YouTube thumbnails
      { protocol: 'https', hostname: 'img.youtube.com' },   // YouTube thumbnails (alt)
      { protocol: 'https', hostname: 'i.vimeocdn.com' },    // Vimeo thumbnails
      { protocol: 'https', hostname: 'lh3.googleusercontent.com' }, // Google profile/business photos
    ],
  },
  allowedDevOrigins: [
    '6efc2ed1-0688-4aa2-bf59-9787d0164ab4-00-33jukyh8juh9v.janeway.replit.dev',
    '*.janeway.replit.dev',
    '*.replit.dev',
    '*.replit.app',
  ],
  async redirects() {
    return [
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
        // Apply security headers to all routes
        source: '/:path*',
        headers: [
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
      {
        // Long-cache static images
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        // No-cache for sitemap/robots so refreshes are picked up quickly
        source: '/(sitemap.xml|robots.txt|manifest.webmanifest)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600',
          },
        ],
      },
    ]
  },
}

export default nextConfig
