import type { MetadataRoute } from "next";
import { siteConfig } from "@/constants/siteConfig";
import { allCases, caseCategories } from "@/constants/cases";
import { cities } from "@/constants/cities";

const siteUrl = siteConfig.url;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    {
      url: siteUrl,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1,
      alternates: { languages: { en: siteUrl, "x-default": siteUrl } },
    },

    // ============================================================
    // Expertise
    // ============================================================
    {
      url: `${siteUrl}/expertise`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.92,
      alternates: { languages: { en: `${siteUrl}/expertise`, "x-default": `${siteUrl}/expertise` } },
    },
    ...(["full-arch-implants", "single-tooth", "bone-grafting", "jaw-surgery", "sleep-apnea", "mole-removal", "tmj", "wisdom-teeth"] as const).map((slug) => ({
      url: `${siteUrl}/expertise/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.88,
      alternates: { languages: { en: `${siteUrl}/expertise/${slug}`, "x-default": `${siteUrl}/expertise/${slug}` } },
    })),

    // ============================================================
    // Top-level pages
    // ============================================================
    {
      url: `${siteUrl}/about-us`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
      alternates: { languages: { en: `${siteUrl}/about-us`, "x-default": `${siteUrl}/about-us` } },
    },
    {
      url: `${siteUrl}/our-team`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.88,
      alternates: { languages: { en: `${siteUrl}/our-team`, "x-default": `${siteUrl}/our-team` } },
    },
    {
      url: `${siteUrl}/contact`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.85,
      alternates: { languages: { en: `${siteUrl}/contact`, "x-default": `${siteUrl}/contact` } },
    },
    {
      url: `${siteUrl}/insurance`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.82,
      alternates: { languages: { en: `${siteUrl}/insurance`, "x-default": `${siteUrl}/insurance` } },
    },
    {
      url: `${siteUrl}/results`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.75,
      alternates: { languages: { en: `${siteUrl}/results`, "x-default": `${siteUrl}/results` } },
    },
    {
      url: `${siteUrl}/locations`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.75,
      alternates: { languages: { en: `${siteUrl}/locations`, "x-default": `${siteUrl}/locations` } },
    },
    {
      url: `${siteUrl}/glossary`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
      alternates: { languages: { en: `${siteUrl}/glossary`, "x-default": `${siteUrl}/glossary` } },
    },
    {
      url: `${siteUrl}/full-arch-dental-implants`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.92,
      alternates: { languages: { en: `${siteUrl}/full-arch-dental-implants`, "x-default": `${siteUrl}/full-arch-dental-implants` } },
    },

    // ============================================================
    // Conversion landing pages
    // ============================================================
    {
      url: `${siteUrl}/all-on-4-cost`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.88,
      alternates: { languages: { en: `${siteUrl}/all-on-4-cost`, "x-default": `${siteUrl}/all-on-4-cost` } },
    },
    {
      url: `${siteUrl}/all-on-4-clearchoice-alternative`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.86,
      alternates: { languages: { en: `${siteUrl}/all-on-4-clearchoice-alternative`, "x-default": `${siteUrl}/all-on-4-clearchoice-alternative` } },
    },
    {
      url: `${siteUrl}/jaw-surgery-recovery-timeline`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.78,
      alternates: { languages: { en: `${siteUrl}/jaw-surgery-recovery-timeline`, "x-default": `${siteUrl}/jaw-surgery-recovery-timeline` } },
    },
    {
      url: `${siteUrl}/smile-again-foundation`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
      alternates: { languages: { en: `${siteUrl}/smile-again-foundation`, "x-default": `${siteUrl}/smile-again-foundation` } },
    },

    // ============================================================
    // Insurance carriers
    // ============================================================
    ...(["aetna", "delta-dental", "anthem-blue-cross"] as const).map((carrier) => ({
      url: `${siteUrl}/insurance/${carrier}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
      alternates: { languages: { en: `${siteUrl}/insurance/${carrier}`, "x-default": `${siteUrl}/insurance/${carrier}` } },
    })),

    // ============================================================
    // Surgical cases
    // ============================================================
    {
      url: `${siteUrl}/surgical-cases`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.78,
      alternates: { languages: { en: `${siteUrl}/surgical-cases`, "x-default": `${siteUrl}/surgical-cases` } },
    },
    ...caseCategories.map((cat) => ({
      url: `${siteUrl}/surgical-cases/${cat.id}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.72,
    })),
    ...allCases.map((c) => ({
      url: `${siteUrl}/surgical-cases/${c.category}/${c.id}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),

    // ============================================================
    // Cities
    // ============================================================
    ...cities.map((c) => ({
      url: `${siteUrl}/locations/${c.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.75,
    })),

    // ============================================================
    // For Patients
    // ============================================================
    {
      url: `${siteUrl}/for-patients`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.85,
      alternates: { languages: { en: `${siteUrl}/for-patients`, "x-default": `${siteUrl}/for-patients` } },
    },
    {
      url: `${siteUrl}/for-patients/faqs`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.85,
    },
    {
      url: `${siteUrl}/for-patients/consultation`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${siteUrl}/for-patients/pre-op`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${siteUrl}/for-patients/post-op`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${siteUrl}/for-patients/travel`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.75,
    },
    {
      url: `${siteUrl}/for-patients/insights`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.75,
    },
    ...[
      "zygomatic-implants",
      "same-day-implants",
      "dental-implant-aftercare",
      "dental-implant-complications",
      "implants-vs-dentures",
      "poor-oral-health-systemic-diseases",
      "tooth-lost-emotional-toll",
    ].map((slug) => ({
      url: `${siteUrl}/for-patients/insights/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.72,
    })),

    // ============================================================
    // For Dentists
    // ============================================================
    {
      url: `${siteUrl}/for-dentists`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    ...[
      "refer-patients",
      "referral-partners",
      "education/courses",
    ].map((slug) => ({
      url: `${siteUrl}/for-dentists/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.65,
    })),

    // ============================================================
    // Media
    // ============================================================
    {
      url: `${siteUrl}/media/speaking`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    },
    {
      url: `${siteUrl}/media/videos`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    },

    // ============================================================
    // Legal
    // ============================================================
    ...[
      "privacy-policy",
      "terms-of-service",
      "hipaa-notice",
      "medical-disclaimer",
    ].map((slug) => ({
      url: `${siteUrl}/legal/${slug}`,
      lastModified: now,
      changeFrequency: "yearly" as const,
      priority: 0.3,
    })),
  ];
}
