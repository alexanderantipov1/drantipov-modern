const aiCrawlerAgents = [
  'GPTBot',
  'OAI-SearchBot',
  'ChatGPT-User',
  'ClaudeBot',
  'anthropic-ai',
  'PerplexityBot',
  'Googlebot',
  'Google-Extended',
  'Bingbot',
  'BingPreview',
]

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://drantipov.com',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: ['/api/*', '/admin/*'],
  robotsTxtOptions: {
    policies: [
      ...aiCrawlerAgents.map((userAgent) => ({
        userAgent,
        allow: '/',
        disallow: ['/api/', '/admin/'],
      })),
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/'],
      },
    ],
    additionalSitemaps: [
      // If blog integration is added later
      // 'https://drantipov.com/blog/sitemap.xml',
    ],
  },
  // Set change frequencies and priorities for different page types
  changefreq: 'weekly',
  priority: 0.7,
  transform: async (config, path) => {
    // Customize priority and changefreq based on path
    let priority = 0.7
    let changefreq = 'weekly'

    // Homepage - highest priority, changes more frequently
    if (path === '/') {
      priority = 1.0
      changefreq = 'daily'
    }
    // Main landing pages - high priority
    else if (['/about', '/contact', '/expertise'].includes(path)) {
      priority = 0.9
      changefreq = 'weekly'
    }
    // Expertise pages - high priority for SEO
    else if (path.startsWith('/expertise/')) {
      priority = 0.8
      changefreq = 'monthly'
    }
    // For Dentists pages - important for referrals
    else if (path.startsWith('/for-dentists/')) {
      priority = 0.8
      changefreq = 'monthly'
    }
    // Patient resources - frequently updated
    else if (path.startsWith('/for-patients/')) {
      priority = 0.7
      changefreq = 'weekly'
    }
    // Media pages - updated with new content
    else if (path.startsWith('/media/')) {
      priority = 0.6
      changefreq = 'monthly'
    }
    // Legal pages - rarely change, noindex
    else if (path.startsWith('/legal/')) {
      priority = 0.3
      changefreq = 'yearly'
    }

    return {
      loc: path,
      changefreq,
      priority,
      lastmod: new Date().toISOString(),
    }
  },
}
