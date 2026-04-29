import type { MetadataRoute } from "next";
import { fullArchLanding } from "@/data/fullArchLanding";
import { russianArticlePages, russianCityPages, siteUrl } from "@/data/russianImplantFunnel";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const russianRoutes: MetadataRoute.Sitemap = [
    {
      url: `${siteUrl}/ru`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
      alternates: {
        languages: {
          en: siteUrl,
          ru: `${siteUrl}/ru`,
        },
      },
    },
    ...russianCityPages.map((page) => ({
      url: `${siteUrl}/ru/${page.slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: ["roseville", "sacramento", "rocklin", "folsom"].includes(page.slug) ? 0.86 : 0.72,
      alternates: {
        languages: {
          ru: `${siteUrl}/ru/${page.slug}`,
        },
      },
    })),
    {
      url: `${siteUrl}/ru/questions`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.78,
      alternates: {
        languages: {
          ru: `${siteUrl}/ru/questions`,
        },
      },
    },
    ...russianArticlePages.map((article) => ({
      url: `${siteUrl}/ru/questions/${article.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
      alternates: {
        languages: {
          ru: `${siteUrl}/ru/questions/${article.slug}`,
        },
      },
    })),
  ];

  return [
    {
      url: siteUrl,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1,
      alternates: {
        languages: {
          en: siteUrl,
          ru: `${siteUrl}/ru`,
        },
      },
    },
    {
      url: `${siteUrl}${fullArchLanding.en.path}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.92,
      alternates: {
        languages: {
          en: `${siteUrl}${fullArchLanding.en.path}`,
          ru: `${siteUrl}${fullArchLanding.ru.path}`,
        },
      },
    },
    {
      url: `${siteUrl}${fullArchLanding.ru.path}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.92,
      alternates: {
        languages: {
          en: `${siteUrl}${fullArchLanding.en.path}`,
          ru: `${siteUrl}${fullArchLanding.ru.path}`,
        },
      },
    },
    ...russianRoutes,
  ];
}
