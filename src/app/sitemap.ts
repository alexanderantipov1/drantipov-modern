import type { MetadataRoute } from "next";
import { siteConfig } from "@/constants/siteConfig";
import { allCases, caseCategories } from "@/constants/cases";
import { cities, stateSlugs, getStateName } from "@/constants/cities";
import { insightPosts } from "@/constants/insights";

const siteUrl = siteConfig.url;

// Static ISO date - Google ignores `lastmod` that churns every build.
const now = new Date("2026-06-14");

type Cf = "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";

/**
 * Emit reciprocal EN + RU sitemap entries with BIDIRECTIONAL hreflang.
 * Every public route is mirrored at /ru/*, so both versions are listed and
 * each declares { en, ru, x-default } - the reciprocity Google requires.
 */
function bi(path: string, priority: number, changeFrequency: Cf = "monthly"): MetadataRoute.Sitemap {
  const en = path ? `${siteUrl}/${path}` : siteUrl;
  const ru = path ? `${siteUrl}/ru/${path}` : `${siteUrl}/ru`;
  const languages = { en, ru, "x-default": en };
  return [
    { url: en, lastModified: now, changeFrequency, priority, alternates: { languages } },
    {
      url: ru,
      lastModified: now,
      changeFrequency,
      priority: Math.max(0.1, Math.round((priority - 0.02) * 100) / 100),
      alternates: { languages },
    },
  ];
}

const EXPERTISE = [
  "full-arch-implants", "single-tooth", "bone-grafting", "jaw-surgery", "sleep-apnea",
  "mole-removal", "tmj", "wisdom-teeth", "tooth-extractions", "sedation-anesthesia",
  "zygomatic-implants", "implant-rescue", "snap-on-dentures", "facial-cosmetic", "oral-pathology",
];
const CARRIERS = ["aetna", "delta-dental", "anthem-blue-cross"];
const DENTISTS = ["refer-patients", "referral-partners", "education/courses"];
const LEGAL = ["privacy-policy", "terms-of-service", "hipaa-notice", "medical-disclaimer"];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    // Home
    ...bi("", 1),

    // Expertise
    ...bi("expertise", 0.92),
    ...EXPERTISE.flatMap((slug) => bi(`expertise/${slug}`, 0.88)),

    // Top-level pages
    ...bi("about", 0.9),
    ...bi("our-team", 0.88),
    ...bi("contact", 0.85),
    ...bi("insurance", 0.82),
    ...bi("results", 0.75),
    ...bi("locations", 0.75),
    ...bi("glossary", 0.7),
    ...bi("full-arch-dental-implants", 0.92, "weekly"),

    // Conversion landing pages
    ...bi("all-on-4-cost", 0.88),
    ...bi("all-on-4-clearchoice-alternative", 0.86),
    ...bi("jaw-surgery-recovery-timeline", 0.78),
    ...bi("smile-again-foundation", 0.7),

    // Insurance carriers
    ...CARRIERS.flatMap((c) => bi(`insurance/${c}`, 0.7)),

    // Surgical cases
    ...bi("surgical-cases", 0.78),
    ...caseCategories.flatMap((cat) => bi(`surgical-cases/${cat.id}`, 0.72)),
    ...allCases.flatMap((c) => bi(`surgical-cases/${c.category}/${c.id}`, 0.6)),

    // Locations
    ...stateSlugs
      .filter((s) => Boolean(getStateName(s)))
      .flatMap((s) => bi(`locations/${s}`, 0.8)),
    ...cities.flatMap((c) => bi(`locations/${c.state.toLowerCase()}/${c.slug}`, 0.75)),

    // For Patients
    ...bi("for-patients", 0.85),
    ...bi("for-patients/faqs", 0.85),
    ...bi("for-patients/consultation", 0.8),
    ...bi("for-patients/pre-op", 0.7),
    ...bi("for-patients/post-op", 0.7),
    ...bi("for-patients/travel", 0.75),
    ...bi("for-patients/insights", 0.75, "weekly"),
    ...insightPosts.flatMap((post) => bi(`for-patients/insights/${post.slug}`, 0.72)),

    // For Dentists
    ...bi("for-dentists", 0.7),
    ...DENTISTS.flatMap((slug) => bi(`for-dentists/${slug}`, 0.65)),

    // Media
    ...bi("media/speaking", 0.6),
    ...bi("media/videos", 0.6),

    // Legal
    ...LEGAL.flatMap((slug) => bi(`legal/${slug}`, 0.3, "yearly")),
  ];
}
