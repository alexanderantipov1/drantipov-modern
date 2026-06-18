import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: [
          "GPTBot",
          "OAI-SearchBot",
          "ChatGPT-User",
          "ClaudeBot",
          "anthropic-ai",
          "PerplexityBot",
          "Googlebot",
          "Google-Extended",
          "Bingbot",
          "BingPreview",
        ],
        allow: ["/", "/api/llms"],
        disallow: ["/api/", "/admin/"],
      },
      {
        userAgent: ["AhrefsBot", "SemrushBot", "Screaming Frog SEO Spider"],
        allow: ["/", "/api/llms"],
        disallow: ["/api/", "/admin/"],
      },
      {
        userAgent: "*",
        allow: ["/", "/api/llms"],
        disallow: ["/api/", "/admin/"],
      },
    ],
    sitemap: "https://drantipov.com/sitemap.xml",
  };
}
