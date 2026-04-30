/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: [
    '6efc2ed1-0688-4aa2-bf59-9787d0164ab4-00-33jukyh8juh9v.janeway.replit.dev',
    '*.janeway.replit.dev',
    '*.replit.dev',
    '*.replit.app',
  ],
  async redirects() {
    return [
      // Map old plan routes to current architecture for SEO continuity
      { source: '/services', destination: '/expertise', permanent: true },
      { source: '/before-after', destination: '/surgical-cases', permanent: true },
      { source: '/testimonials', destination: '/for-patients/testimonials', permanent: true },
      { source: '/faq', destination: '/for-patients/faqs', permanent: true },
      { source: '/resources', destination: '/for-patients', permanent: true },
    ]
  },
}

export default nextConfig
