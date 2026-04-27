import type { MetadataRoute } from "next";
import { russianCityPages, siteUrl } from "@/data/russianImplantFunnel";

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
      priority: page.slug === "sacramento" ? 0.86 : 0.72,
      alternates: {
        languages: {
          ru: `${siteUrl}/ru/${page.slug}`,
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
    ...russianRoutes,
  ];
}
