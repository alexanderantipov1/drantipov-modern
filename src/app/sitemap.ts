import type { MetadataRoute } from "next";
import { siteConfig } from "@/constants/siteConfig";
import { allCases, caseCategories } from "@/constants/cases";
import { cities, stateSlugs, getStateName } from "@/constants/cities";
import { insightPosts } from "@/constants/insights";

const siteUrl = siteConfig.url;

// Static ISO dates — Google ignores `lastmod` that churns every build
const lastModRecent = new Date("2026-06-14"); // Hero, About, expertise hub (recent updates)
const lastModBoneGraft = new Date("2026-06-12"); // bone-grafting (new anchors)
const lastModSeason = new Date("2026-06-01"); // procedures + insurance (seasonal refresh)
const lastModLegacy = new Date("2026-05-01"); // legal, locations, cases

export default function sitemap(): MetadataRoute.Sitemap {
  const now = lastModRecent;

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
    ...(["full-arch-implants", "single-tooth", "bone-grafting", "jaw-surgery", "sleep-apnea", "mole-removal", "tmj", "wisdom-teeth", "tooth-extractions", "sedation-anesthesia", "zygomatic-implants", "implant-rescue", "snap-on-dentures", "facial-cosmetic", "oral-pathology"] as const).map((slug) => ({
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
      url: `${siteUrl}/about`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
      alternates: { languages: { en: `${siteUrl}/about`, "x-default": `${siteUrl}/about` } },
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
    // State hubs + Cities (/locations/[state] and /locations/[state]/[city])
    // ============================================================
    ...stateSlugs
      .filter((s) => Boolean(getStateName(s)))
      .map((s) => ({
        url: `${siteUrl}/locations/${s}`,
        lastModified: now,
        changeFrequency: "monthly" as const,
        priority: 0.8,
      })),
    ...cities.map((c) => ({
      url: `${siteUrl}/locations/${c.state.toLowerCase()}/${c.slug}`,
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
    ...insightPosts.map((post) => ({
      url: `${siteUrl}/for-patients/insights/${post.slug}`,
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
      "referring-doctors",
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

    // ============================================================
    // Russian (/ru) mirror pages
    // ============================================================
    {
      url: `${siteUrl}/ru`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.9,
      alternates: {
        languages: {
          ru: `${siteUrl}/ru`,
          en: `${siteUrl}` || siteUrl,
          "x-default": `${siteUrl}` || siteUrl,
        },
      },
    },
    {
      url: `${siteUrl}/ru/about`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
      alternates: {
        languages: {
          ru: `${siteUrl}/ru/about`,
          en: `${siteUrl}/about` || siteUrl,
          "x-default": `${siteUrl}/about` || siteUrl,
        },
      },
    },
    {
      url: `${siteUrl}/ru/all-on-4-clearchoice-alternative`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
      alternates: {
        languages: {
          ru: `${siteUrl}/ru/all-on-4-clearchoice-alternative`,
          en: `${siteUrl}/all-on-4-clearchoice-alternative` || siteUrl,
          "x-default": `${siteUrl}/all-on-4-clearchoice-alternative` || siteUrl,
        },
      },
    },
    {
      url: `${siteUrl}/ru/all-on-4-cost`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
      alternates: {
        languages: {
          ru: `${siteUrl}/ru/all-on-4-cost`,
          en: `${siteUrl}/all-on-4-cost` || siteUrl,
          "x-default": `${siteUrl}/all-on-4-cost` || siteUrl,
        },
      },
    },
    {
      url: `${siteUrl}/ru/contact`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
      alternates: {
        languages: {
          ru: `${siteUrl}/ru/contact`,
          en: `${siteUrl}/contact` || siteUrl,
          "x-default": `${siteUrl}/contact` || siteUrl,
        },
      },
    },
    {
      url: `${siteUrl}/ru/expertise`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
      alternates: {
        languages: {
          ru: `${siteUrl}/ru/expertise`,
          en: `${siteUrl}/expertise` || siteUrl,
          "x-default": `${siteUrl}/expertise` || siteUrl,
        },
      },
    },
    {
      url: `${siteUrl}/ru/expertise/bone-grafting`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
      alternates: {
        languages: {
          ru: `${siteUrl}/ru/expertise/bone-grafting`,
          en: `${siteUrl}/expertise/bone-grafting` || siteUrl,
          "x-default": `${siteUrl}/expertise/bone-grafting` || siteUrl,
        },
      },
    },
    {
      url: `${siteUrl}/ru/expertise/facial-cosmetic`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
      alternates: {
        languages: {
          ru: `${siteUrl}/ru/expertise/facial-cosmetic`,
          en: `${siteUrl}/expertise/facial-cosmetic` || siteUrl,
          "x-default": `${siteUrl}/expertise/facial-cosmetic` || siteUrl,
        },
      },
    },
    {
      url: `${siteUrl}/ru/expertise/full-arch-implants`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
      alternates: {
        languages: {
          ru: `${siteUrl}/ru/expertise/full-arch-implants`,
          en: `${siteUrl}/expertise/full-arch-implants` || siteUrl,
          "x-default": `${siteUrl}/expertise/full-arch-implants` || siteUrl,
        },
      },
    },
    {
      url: `${siteUrl}/ru/expertise/implant-rescue`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
      alternates: {
        languages: {
          ru: `${siteUrl}/ru/expertise/implant-rescue`,
          en: `${siteUrl}/expertise/implant-rescue` || siteUrl,
          "x-default": `${siteUrl}/expertise/implant-rescue` || siteUrl,
        },
      },
    },
    {
      url: `${siteUrl}/ru/expertise/jaw-surgery`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
      alternates: {
        languages: {
          ru: `${siteUrl}/ru/expertise/jaw-surgery`,
          en: `${siteUrl}/expertise/jaw-surgery` || siteUrl,
          "x-default": `${siteUrl}/expertise/jaw-surgery` || siteUrl,
        },
      },
    },
    {
      url: `${siteUrl}/ru/expertise/mole-removal`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
      alternates: {
        languages: {
          ru: `${siteUrl}/ru/expertise/mole-removal`,
          en: `${siteUrl}/expertise/mole-removal` || siteUrl,
          "x-default": `${siteUrl}/expertise/mole-removal` || siteUrl,
        },
      },
    },
    {
      url: `${siteUrl}/ru/expertise/oral-pathology`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
      alternates: {
        languages: {
          ru: `${siteUrl}/ru/expertise/oral-pathology`,
          en: `${siteUrl}/expertise/oral-pathology` || siteUrl,
          "x-default": `${siteUrl}/expertise/oral-pathology` || siteUrl,
        },
      },
    },
    {
      url: `${siteUrl}/ru/expertise/sedation-anesthesia`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
      alternates: {
        languages: {
          ru: `${siteUrl}/ru/expertise/sedation-anesthesia`,
          en: `${siteUrl}/expertise/sedation-anesthesia` || siteUrl,
          "x-default": `${siteUrl}/expertise/sedation-anesthesia` || siteUrl,
        },
      },
    },
    {
      url: `${siteUrl}/ru/expertise/single-tooth`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
      alternates: {
        languages: {
          ru: `${siteUrl}/ru/expertise/single-tooth`,
          en: `${siteUrl}/expertise/single-tooth` || siteUrl,
          "x-default": `${siteUrl}/expertise/single-tooth` || siteUrl,
        },
      },
    },
    {
      url: `${siteUrl}/ru/expertise/sleep-apnea`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
      alternates: {
        languages: {
          ru: `${siteUrl}/ru/expertise/sleep-apnea`,
          en: `${siteUrl}/expertise/sleep-apnea` || siteUrl,
          "x-default": `${siteUrl}/expertise/sleep-apnea` || siteUrl,
        },
      },
    },
    {
      url: `${siteUrl}/ru/expertise/snap-on-dentures`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
      alternates: {
        languages: {
          ru: `${siteUrl}/ru/expertise/snap-on-dentures`,
          en: `${siteUrl}/expertise/snap-on-dentures` || siteUrl,
          "x-default": `${siteUrl}/expertise/snap-on-dentures` || siteUrl,
        },
      },
    },
    {
      url: `${siteUrl}/ru/expertise/tmj`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
      alternates: {
        languages: {
          ru: `${siteUrl}/ru/expertise/tmj`,
          en: `${siteUrl}/expertise/tmj` || siteUrl,
          "x-default": `${siteUrl}/expertise/tmj` || siteUrl,
        },
      },
    },
    {
      url: `${siteUrl}/ru/expertise/tooth-extractions`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
      alternates: {
        languages: {
          ru: `${siteUrl}/ru/expertise/tooth-extractions`,
          en: `${siteUrl}/expertise/tooth-extractions` || siteUrl,
          "x-default": `${siteUrl}/expertise/tooth-extractions` || siteUrl,
        },
      },
    },
    {
      url: `${siteUrl}/ru/expertise/wisdom-teeth`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
      alternates: {
        languages: {
          ru: `${siteUrl}/ru/expertise/wisdom-teeth`,
          en: `${siteUrl}/expertise/wisdom-teeth` || siteUrl,
          "x-default": `${siteUrl}/expertise/wisdom-teeth` || siteUrl,
        },
      },
    },
    {
      url: `${siteUrl}/ru/expertise/zygomatic-implants`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
      alternates: {
        languages: {
          ru: `${siteUrl}/ru/expertise/zygomatic-implants`,
          en: `${siteUrl}/expertise/zygomatic-implants` || siteUrl,
          "x-default": `${siteUrl}/expertise/zygomatic-implants` || siteUrl,
        },
      },
    },
    {
      url: `${siteUrl}/ru/for-dentists`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
      alternates: {
        languages: {
          ru: `${siteUrl}/ru/for-dentists`,
          en: `${siteUrl}/for-dentists` || siteUrl,
          "x-default": `${siteUrl}/for-dentists` || siteUrl,
        },
      },
    },
    {
      url: `${siteUrl}/ru/for-dentists/education/courses`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
      alternates: {
        languages: {
          ru: `${siteUrl}/ru/for-dentists/education/courses`,
          en: `${siteUrl}/for-dentists/education/courses` || siteUrl,
          "x-default": `${siteUrl}/for-dentists/education/courses` || siteUrl,
        },
      },
    },
    {
      url: `${siteUrl}/ru/for-dentists/refer-patients`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
      alternates: {
        languages: {
          ru: `${siteUrl}/ru/for-dentists/refer-patients`,
          en: `${siteUrl}/for-dentists/refer-patients` || siteUrl,
          "x-default": `${siteUrl}/for-dentists/refer-patients` || siteUrl,
        },
      },
    },
    {
      url: `${siteUrl}/ru/for-dentists/referral-partners`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
      alternates: {
        languages: {
          ru: `${siteUrl}/ru/for-dentists/referral-partners`,
          en: `${siteUrl}/for-dentists/referral-partners` || siteUrl,
          "x-default": `${siteUrl}/for-dentists/referral-partners` || siteUrl,
        },
      },
    },
    {
      url: `${siteUrl}/ru/for-patients`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
      alternates: {
        languages: {
          ru: `${siteUrl}/ru/for-patients`,
          en: `${siteUrl}/for-patients` || siteUrl,
          "x-default": `${siteUrl}/for-patients` || siteUrl,
        },
      },
    },
    {
      url: `${siteUrl}/ru/for-patients/consultation`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
      alternates: {
        languages: {
          ru: `${siteUrl}/ru/for-patients/consultation`,
          en: `${siteUrl}/for-patients/consultation` || siteUrl,
          "x-default": `${siteUrl}/for-patients/consultation` || siteUrl,
        },
      },
    },
    {
      url: `${siteUrl}/ru/for-patients/faqs`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
      alternates: {
        languages: {
          ru: `${siteUrl}/ru/for-patients/faqs`,
          en: `${siteUrl}/for-patients/faqs` || siteUrl,
          "x-default": `${siteUrl}/for-patients/faqs` || siteUrl,
        },
      },
    },
    {
      url: `${siteUrl}/ru/for-patients/insights`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
      alternates: {
        languages: {
          ru: `${siteUrl}/ru/for-patients/insights`,
          en: `${siteUrl}/for-patients/insights` || siteUrl,
          "x-default": `${siteUrl}/for-patients/insights` || siteUrl,
        },
      },
    },
    {
      url: `${siteUrl}/ru/for-patients/insights/all-on-4-vs-all-on-6`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
      alternates: {
        languages: {
          ru: `${siteUrl}/ru/for-patients/insights/all-on-4-vs-all-on-6`,
          en: `${siteUrl}/for-patients/insights/all-on-4-vs-all-on-6` || siteUrl,
          "x-default": `${siteUrl}/for-patients/insights/all-on-4-vs-all-on-6` || siteUrl,
        },
      },
    },
    {
      url: `${siteUrl}/ru/for-patients/insights/all-on-x-dental-implants-cost`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
      alternates: {
        languages: {
          ru: `${siteUrl}/ru/for-patients/insights/all-on-x-dental-implants-cost`,
          en: `${siteUrl}/for-patients/insights/all-on-x-dental-implants-cost` || siteUrl,
          "x-default": `${siteUrl}/for-patients/insights/all-on-x-dental-implants-cost` || siteUrl,
        },
      },
    },
    {
      url: `${siteUrl}/ru/for-patients/insights/bone-grafting-for-dental-implants-explained`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
      alternates: {
        languages: {
          ru: `${siteUrl}/ru/for-patients/insights/bone-grafting-for-dental-implants-explained`,
          en: `${siteUrl}/for-patients/insights/bone-grafting-for-dental-implants-explained` || siteUrl,
          "x-default": `${siteUrl}/for-patients/insights/bone-grafting-for-dental-implants-explained` || siteUrl,
        },
      },
    },
    {
      url: `${siteUrl}/ru/for-patients/insights/can-a-loose-dental-implant-be-saved`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
      alternates: {
        languages: {
          ru: `${siteUrl}/ru/for-patients/insights/can-a-loose-dental-implant-be-saved`,
          en: `${siteUrl}/for-patients/insights/can-a-loose-dental-implant-be-saved` || siteUrl,
          "x-default": `${siteUrl}/for-patients/insights/can-a-loose-dental-implant-be-saved` || siteUrl,
        },
      },
    },
    {
      url: `${siteUrl}/ru/for-patients/insights/can-dental-implants-get-cavities-or-gum-disease`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
      alternates: {
        languages: {
          ru: `${siteUrl}/ru/for-patients/insights/can-dental-implants-get-cavities-or-gum-disease`,
          en: `${siteUrl}/for-patients/insights/can-dental-implants-get-cavities-or-gum-disease` || siteUrl,
          "x-default": `${siteUrl}/for-patients/insights/can-dental-implants-get-cavities-or-gum-disease` || siteUrl,
        },
      },
    },
    {
      url: `${siteUrl}/ru/for-patients/insights/can-you-fix-an-overbite-naturally`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
      alternates: {
        languages: {
          ru: `${siteUrl}/ru/for-patients/insights/can-you-fix-an-overbite-naturally`,
          en: `${siteUrl}/for-patients/insights/can-you-fix-an-overbite-naturally` || siteUrl,
          "x-default": `${siteUrl}/for-patients/insights/can-you-fix-an-overbite-naturally` || siteUrl,
        },
      },
    },
    {
      url: `${siteUrl}/ru/for-patients/insights/correcting-bite-problems-after-implant-work`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
      alternates: {
        languages: {
          ru: `${siteUrl}/ru/for-patients/insights/correcting-bite-problems-after-implant-work`,
          en: `${siteUrl}/for-patients/insights/correcting-bite-problems-after-implant-work` || siteUrl,
          "x-default": `${siteUrl}/for-patients/insights/correcting-bite-problems-after-implant-work` || siteUrl,
        },
      },
    },
    {
      url: `${siteUrl}/ru/for-patients/insights/dental-implant-aftercare`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
      alternates: {
        languages: {
          ru: `${siteUrl}/ru/for-patients/insights/dental-implant-aftercare`,
          en: `${siteUrl}/for-patients/insights/dental-implant-aftercare` || siteUrl,
          "x-default": `${siteUrl}/for-patients/insights/dental-implant-aftercare` || siteUrl,
        },
      },
    },
    {
      url: `${siteUrl}/ru/for-patients/insights/dental-implant-complications`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
      alternates: {
        languages: {
          ru: `${siteUrl}/ru/for-patients/insights/dental-implant-complications`,
          en: `${siteUrl}/for-patients/insights/dental-implant-complications` || siteUrl,
          "x-default": `${siteUrl}/for-patients/insights/dental-implant-complications` || siteUrl,
        },
      },
    },
    {
      url: `${siteUrl}/ru/for-patients/insights/dental-implant-procedure-complete-guide`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
      alternates: {
        languages: {
          ru: `${siteUrl}/ru/for-patients/insights/dental-implant-procedure-complete-guide`,
          en: `${siteUrl}/for-patients/insights/dental-implant-procedure-complete-guide` || siteUrl,
          "x-default": `${siteUrl}/for-patients/insights/dental-implant-procedure-complete-guide` || siteUrl,
        },
      },
    },
    {
      url: `${siteUrl}/ru/for-patients/insights/dental-implants-after-tooth-extraction-timing-healing-and-options`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
      alternates: {
        languages: {
          ru: `${siteUrl}/ru/for-patients/insights/dental-implants-after-tooth-extraction-timing-healing-and-options`,
          en: `${siteUrl}/for-patients/insights/dental-implants-after-tooth-extraction-timing-healing-and-options` || siteUrl,
          "x-default": `${siteUrl}/for-patients/insights/dental-implants-after-tooth-extraction-timing-healing-and-options` || siteUrl,
        },
      },
    },
    {
      url: `${siteUrl}/ru/for-patients/insights/dental-implants-for-diabetics`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
      alternates: {
        languages: {
          ru: `${siteUrl}/ru/for-patients/insights/dental-implants-for-diabetics`,
          en: `${siteUrl}/for-patients/insights/dental-implants-for-diabetics` || siteUrl,
          "x-default": `${siteUrl}/for-patients/insights/dental-implants-for-diabetics` || siteUrl,
        },
      },
    },
    {
      url: `${siteUrl}/ru/for-patients/insights/dental-implants-for-seniors-age-limit`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
      alternates: {
        languages: {
          ru: `${siteUrl}/ru/for-patients/insights/dental-implants-for-seniors-age-limit`,
          en: `${siteUrl}/for-patients/insights/dental-implants-for-seniors-age-limit` || siteUrl,
          "x-default": `${siteUrl}/for-patients/insights/dental-implants-for-seniors-age-limit` || siteUrl,
        },
      },
    },
    {
      url: `${siteUrl}/ru/for-patients/insights/dental-implants-for-smokers`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
      alternates: {
        languages: {
          ru: `${siteUrl}/ru/for-patients/insights/dental-implants-for-smokers`,
          en: `${siteUrl}/for-patients/insights/dental-implants-for-smokers` || siteUrl,
          "x-default": `${siteUrl}/for-patients/insights/dental-implants-for-smokers` || siteUrl,
        },
      },
    },
    {
      url: `${siteUrl}/ru/for-patients/insights/dental-implants-with-osteoporosis-and-autoimmune-conditions`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
      alternates: {
        languages: {
          ru: `${siteUrl}/ru/for-patients/insights/dental-implants-with-osteoporosis-and-autoimmune-conditions`,
          en: `${siteUrl}/for-patients/insights/dental-implants-with-osteoporosis-and-autoimmune-conditions` || siteUrl,
          "x-default": `${siteUrl}/for-patients/insights/dental-implants-with-osteoporosis-and-autoimmune-conditions` || siteUrl,
        },
      },
    },
    {
      url: `${siteUrl}/ru/for-patients/insights/dental-implants-with-severe-bone-loss-options`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
      alternates: {
        languages: {
          ru: `${siteUrl}/ru/for-patients/insights/dental-implants-with-severe-bone-loss-options`,
          en: `${siteUrl}/for-patients/insights/dental-implants-with-severe-bone-loss-options` || siteUrl,
          "x-default": `${siteUrl}/for-patients/insights/dental-implants-with-severe-bone-loss-options` || siteUrl,
        },
      },
    },
    {
      url: `${siteUrl}/ru/for-patients/insights/fixing-a-failed-all-on-4-revision-options`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
      alternates: {
        languages: {
          ru: `${siteUrl}/ru/for-patients/insights/fixing-a-failed-all-on-4-revision-options`,
          en: `${siteUrl}/for-patients/insights/fixing-a-failed-all-on-4-revision-options` || siteUrl,
          "x-default": `${siteUrl}/for-patients/insights/fixing-a-failed-all-on-4-revision-options` || siteUrl,
        },
      },
    },
    {
      url: `${siteUrl}/ru/for-patients/insights/full-mouth-dental-implants-cost-process`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
      alternates: {
        languages: {
          ru: `${siteUrl}/ru/for-patients/insights/full-mouth-dental-implants-cost-process`,
          en: `${siteUrl}/for-patients/insights/full-mouth-dental-implants-cost-process` || siteUrl,
          "x-default": `${siteUrl}/for-patients/insights/full-mouth-dental-implants-cost-process` || siteUrl,
        },
      },
    },
    {
      url: `${siteUrl}/ru/for-patients/insights/full-mouth-reconstruction-for-failed-dental-work`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
      alternates: {
        languages: {
          ru: `${siteUrl}/ru/for-patients/insights/full-mouth-reconstruction-for-failed-dental-work`,
          en: `${siteUrl}/for-patients/insights/full-mouth-reconstruction-for-failed-dental-work` || siteUrl,
          "x-default": `${siteUrl}/for-patients/insights/full-mouth-reconstruction-for-failed-dental-work` || siteUrl,
        },
      },
    },
    {
      url: `${siteUrl}/ru/for-patients/insights/guided-dental-implant-surgery-how-3d-planning-improves-accuracy`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
      alternates: {
        languages: {
          ru: `${siteUrl}/ru/for-patients/insights/guided-dental-implant-surgery-how-3d-planning-improves-accuracy`,
          en: `${siteUrl}/for-patients/insights/guided-dental-implant-surgery-how-3d-planning-improves-accuracy` || siteUrl,
          "x-default": `${siteUrl}/for-patients/insights/guided-dental-implant-surgery-how-3d-planning-improves-accuracy` || siteUrl,
        },
      },
    },
    {
      url: `${siteUrl}/ru/for-patients/insights/how-to-fix-an-overbite-treatment-options-and-cost`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
      alternates: {
        languages: {
          ru: `${siteUrl}/ru/for-patients/insights/how-to-fix-an-overbite-treatment-options-and-cost`,
          en: `${siteUrl}/for-patients/insights/how-to-fix-an-overbite-treatment-options-and-cost` || siteUrl,
          "x-default": `${siteUrl}/for-patients/insights/how-to-fix-an-overbite-treatment-options-and-cost` || siteUrl,
        },
      },
    },
    {
      url: `${siteUrl}/ru/for-patients/insights/hybrid-dentures-vs-fixed-implant-bridges`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
      alternates: {
        languages: {
          ru: `${siteUrl}/ru/for-patients/insights/hybrid-dentures-vs-fixed-implant-bridges`,
          en: `${siteUrl}/for-patients/insights/hybrid-dentures-vs-fixed-implant-bridges` || siteUrl,
          "x-default": `${siteUrl}/for-patients/insights/hybrid-dentures-vs-fixed-implant-bridges` || siteUrl,
        },
      },
    },
    {
      url: `${siteUrl}/ru/for-patients/insights/implant-revision-after-bone-loss`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
      alternates: {
        languages: {
          ru: `${siteUrl}/ru/for-patients/insights/implant-revision-after-bone-loss`,
          en: `${siteUrl}/for-patients/insights/implant-revision-after-bone-loss` || siteUrl,
          "x-default": `${siteUrl}/for-patients/insights/implant-revision-after-bone-loss` || siteUrl,
        },
      },
    },
    {
      url: `${siteUrl}/ru/for-patients/insights/implants-vs-dentures`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
      alternates: {
        languages: {
          ru: `${siteUrl}/ru/for-patients/insights/implants-vs-dentures`,
          en: `${siteUrl}/for-patients/insights/implants-vs-dentures` || siteUrl,
          "x-default": `${siteUrl}/for-patients/insights/implants-vs-dentures` || siteUrl,
        },
      },
    },
    {
      url: `${siteUrl}/ru/for-patients/insights/normal-healing-vs-infection-after-dental-implant-surgery`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
      alternates: {
        languages: {
          ru: `${siteUrl}/ru/for-patients/insights/normal-healing-vs-infection-after-dental-implant-surgery`,
          en: `${siteUrl}/for-patients/insights/normal-healing-vs-infection-after-dental-implant-surgery` || siteUrl,
          "x-default": `${siteUrl}/for-patients/insights/normal-healing-vs-infection-after-dental-implant-surgery` || siteUrl,
        },
      },
    },
    {
      url: `${siteUrl}/ru/for-patients/insights/poor-oral-health-systemic-diseases`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
      alternates: {
        languages: {
          ru: `${siteUrl}/ru/for-patients/insights/poor-oral-health-systemic-diseases`,
          en: `${siteUrl}/for-patients/insights/poor-oral-health-systemic-diseases` || siteUrl,
          "x-default": `${siteUrl}/for-patients/insights/poor-oral-health-systemic-diseases` || siteUrl,
        },
      },
    },
    {
      url: `${siteUrl}/ru/for-patients/insights/redoing-dental-implants-done-abroad-recovery-plan`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
      alternates: {
        languages: {
          ru: `${siteUrl}/ru/for-patients/insights/redoing-dental-implants-done-abroad-recovery-plan`,
          en: `${siteUrl}/for-patients/insights/redoing-dental-implants-done-abroad-recovery-plan` || siteUrl,
          "x-default": `${siteUrl}/for-patients/insights/redoing-dental-implants-done-abroad-recovery-plan` || siteUrl,
        },
      },
    },
    {
      url: `${siteUrl}/ru/for-patients/insights/repairing-a-broken-implant-crown-or-prosthesis`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
      alternates: {
        languages: {
          ru: `${siteUrl}/ru/for-patients/insights/repairing-a-broken-implant-crown-or-prosthesis`,
          en: `${siteUrl}/for-patients/insights/repairing-a-broken-implant-crown-or-prosthesis` || siteUrl,
          "x-default": `${siteUrl}/for-patients/insights/repairing-a-broken-implant-crown-or-prosthesis` || siteUrl,
        },
      },
    },
    {
      url: `${siteUrl}/ru/for-patients/insights/replacing-a-failed-dental-implant-what-to-expect`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
      alternates: {
        languages: {
          ru: `${siteUrl}/ru/for-patients/insights/replacing-a-failed-dental-implant-what-to-expect`,
          en: `${siteUrl}/for-patients/insights/replacing-a-failed-dental-implant-what-to-expect` || siteUrl,
          "x-default": `${siteUrl}/for-patients/insights/replacing-a-failed-dental-implant-what-to-expect` || siteUrl,
        },
      },
    },
    {
      url: `${siteUrl}/ru/for-patients/insights/replacing-old-failing-bridges-with-implants`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
      alternates: {
        languages: {
          ru: `${siteUrl}/ru/for-patients/insights/replacing-old-failing-bridges-with-implants`,
          en: `${siteUrl}/for-patients/insights/replacing-old-failing-bridges-with-implants` || siteUrl,
          "x-default": `${siteUrl}/for-patients/insights/replacing-old-failing-bridges-with-implants` || siteUrl,
        },
      },
    },
    {
      url: `${siteUrl}/ru/for-patients/insights/same-day-implants`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
      alternates: {
        languages: {
          ru: `${siteUrl}/ru/for-patients/insights/same-day-implants`,
          en: `${siteUrl}/for-patients/insights/same-day-implants` || siteUrl,
          "x-default": `${siteUrl}/for-patients/insights/same-day-implants` || siteUrl,
        },
      },
    },
    {
      url: `${siteUrl}/ru/for-patients/insights/second-opinion-on-failed-dental-implants`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
      alternates: {
        languages: {
          ru: `${siteUrl}/ru/for-patients/insights/second-opinion-on-failed-dental-implants`,
          en: `${siteUrl}/for-patients/insights/second-opinion-on-failed-dental-implants` || siteUrl,
          "x-default": `${siteUrl}/for-patients/insights/second-opinion-on-failed-dental-implants` || siteUrl,
        },
      },
    },
    {
      url: `${siteUrl}/ru/for-patients/insights/sedation-options-dental-implant-surgery`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
      alternates: {
        languages: {
          ru: `${siteUrl}/ru/for-patients/insights/sedation-options-dental-implant-surgery`,
          en: `${siteUrl}/for-patients/insights/sedation-options-dental-implant-surgery` || siteUrl,
          "x-default": `${siteUrl}/for-patients/insights/sedation-options-dental-implant-surgery` || siteUrl,
        },
      },
    },
    {
      url: `${siteUrl}/ru/for-patients/insights/severe-overbite-when-jaw-surgery-is-needed`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
      alternates: {
        languages: {
          ru: `${siteUrl}/ru/for-patients/insights/severe-overbite-when-jaw-surgery-is-needed`,
          en: `${siteUrl}/for-patients/insights/severe-overbite-when-jaw-surgery-is-needed` || siteUrl,
          "x-default": `${siteUrl}/for-patients/insights/severe-overbite-when-jaw-surgery-is-needed` || siteUrl,
        },
      },
    },
    {
      url: `${siteUrl}/ru/for-patients/insights/single-dental-implant-cost-northern-california`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
      alternates: {
        languages: {
          ru: `${siteUrl}/ru/for-patients/insights/single-dental-implant-cost-northern-california`,
          en: `${siteUrl}/for-patients/insights/single-dental-implant-cost-northern-california` || siteUrl,
          "x-default": `${siteUrl}/for-patients/insights/single-dental-implant-cost-northern-california` || siteUrl,
        },
      },
    },
    {
      url: `${siteUrl}/ru/for-patients/insights/titanium-vs-zirconia-dental-implants`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
      alternates: {
        languages: {
          ru: `${siteUrl}/ru/for-patients/insights/titanium-vs-zirconia-dental-implants`,
          en: `${siteUrl}/for-patients/insights/titanium-vs-zirconia-dental-implants` || siteUrl,
          "x-default": `${siteUrl}/for-patients/insights/titanium-vs-zirconia-dental-implants` || siteUrl,
        },
      },
    },
    {
      url: `${siteUrl}/ru/for-patients/insights/tooth-lost-emotional-toll`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
      alternates: {
        languages: {
          ru: `${siteUrl}/ru/for-patients/insights/tooth-lost-emotional-toll`,
          en: `${siteUrl}/for-patients/insights/tooth-lost-emotional-toll` || siteUrl,
          "x-default": `${siteUrl}/for-patients/insights/tooth-lost-emotional-toll` || siteUrl,
        },
      },
    },
    {
      url: `${siteUrl}/ru/for-patients/insights/understanding-sinus-lift-for-dental-implants`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
      alternates: {
        languages: {
          ru: `${siteUrl}/ru/for-patients/insights/understanding-sinus-lift-for-dental-implants`,
          en: `${siteUrl}/for-patients/insights/understanding-sinus-lift-for-dental-implants` || siteUrl,
          "x-default": `${siteUrl}/for-patients/insights/understanding-sinus-lift-for-dental-implants` || siteUrl,
        },
      },
    },
    {
      url: `${siteUrl}/ru/for-patients/insights/what-is-an-oral-surgeon-and-what-do-they-do`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
      alternates: {
        languages: {
          ru: `${siteUrl}/ru/for-patients/insights/what-is-an-oral-surgeon-and-what-do-they-do`,
          en: `${siteUrl}/for-patients/insights/what-is-an-oral-surgeon-and-what-do-they-do` || siteUrl,
          "x-default": `${siteUrl}/for-patients/insights/what-is-an-oral-surgeon-and-what-do-they-do` || siteUrl,
        },
      },
    },
    {
      url: `${siteUrl}/ru/for-patients/insights/who-is-a-candidate-for-dental-implants`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
      alternates: {
        languages: {
          ru: `${siteUrl}/ru/for-patients/insights/who-is-a-candidate-for-dental-implants`,
          en: `${siteUrl}/for-patients/insights/who-is-a-candidate-for-dental-implants` || siteUrl,
          "x-default": `${siteUrl}/for-patients/insights/who-is-a-candidate-for-dental-implants` || siteUrl,
        },
      },
    },
    {
      url: `${siteUrl}/ru/for-patients/insights/why-are-dental-implants-so-expensive`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
      alternates: {
        languages: {
          ru: `${siteUrl}/ru/for-patients/insights/why-are-dental-implants-so-expensive`,
          en: `${siteUrl}/for-patients/insights/why-are-dental-implants-so-expensive` || siteUrl,
          "x-default": `${siteUrl}/for-patients/insights/why-are-dental-implants-so-expensive` || siteUrl,
        },
      },
    },
    {
      url: `${siteUrl}/ru/for-patients/insights/zirconia-arches`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
      alternates: {
        languages: {
          ru: `${siteUrl}/ru/for-patients/insights/zirconia-arches`,
          en: `${siteUrl}/for-patients/insights/zirconia-arches` || siteUrl,
          "x-default": `${siteUrl}/for-patients/insights/zirconia-arches` || siteUrl,
        },
      },
    },
    {
      url: `${siteUrl}/ru/for-patients/insights/zygomatic-dental-implants-when-traditional-implants-not-possible`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
      alternates: {
        languages: {
          ru: `${siteUrl}/ru/for-patients/insights/zygomatic-dental-implants-when-traditional-implants-not-possible`,
          en: `${siteUrl}/for-patients/insights/zygomatic-dental-implants-when-traditional-implants-not-possible` || siteUrl,
          "x-default": `${siteUrl}/for-patients/insights/zygomatic-dental-implants-when-traditional-implants-not-possible` || siteUrl,
        },
      },
    },
    {
      url: `${siteUrl}/ru/for-patients/insights/zygomatic-implants`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
      alternates: {
        languages: {
          ru: `${siteUrl}/ru/for-patients/insights/zygomatic-implants`,
          en: `${siteUrl}/for-patients/insights/zygomatic-implants` || siteUrl,
          "x-default": `${siteUrl}/for-patients/insights/zygomatic-implants` || siteUrl,
        },
      },
    },
    {
      url: `${siteUrl}/ru/for-patients/insights/zygomatic-implants-vs-bone-grafting-for-severe-bone-loss`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
      alternates: {
        languages: {
          ru: `${siteUrl}/ru/for-patients/insights/zygomatic-implants-vs-bone-grafting-for-severe-bone-loss`,
          en: `${siteUrl}/for-patients/insights/zygomatic-implants-vs-bone-grafting-for-severe-bone-loss` || siteUrl,
          "x-default": `${siteUrl}/for-patients/insights/zygomatic-implants-vs-bone-grafting-for-severe-bone-loss` || siteUrl,
        },
      },
    },
    {
      url: `${siteUrl}/ru/for-patients/post-op`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
      alternates: {
        languages: {
          ru: `${siteUrl}/ru/for-patients/post-op`,
          en: `${siteUrl}/for-patients/post-op` || siteUrl,
          "x-default": `${siteUrl}/for-patients/post-op` || siteUrl,
        },
      },
    },
    {
      url: `${siteUrl}/ru/for-patients/pre-op`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
      alternates: {
        languages: {
          ru: `${siteUrl}/ru/for-patients/pre-op`,
          en: `${siteUrl}/for-patients/pre-op` || siteUrl,
          "x-default": `${siteUrl}/for-patients/pre-op` || siteUrl,
        },
      },
    },
    {
      url: `${siteUrl}/ru/for-patients/travel`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
      alternates: {
        languages: {
          ru: `${siteUrl}/ru/for-patients/travel`,
          en: `${siteUrl}/for-patients/travel` || siteUrl,
          "x-default": `${siteUrl}/for-patients/travel` || siteUrl,
        },
      },
    },
    {
      url: `${siteUrl}/ru/full-arch-dental-implants`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
      alternates: {
        languages: {
          ru: `${siteUrl}/ru/full-arch-dental-implants`,
          en: `${siteUrl}/full-arch-dental-implants` || siteUrl,
          "x-default": `${siteUrl}/full-arch-dental-implants` || siteUrl,
        },
      },
    },
    {
      url: `${siteUrl}/ru/glossary`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
      alternates: {
        languages: {
          ru: `${siteUrl}/ru/glossary`,
          en: `${siteUrl}/glossary` || siteUrl,
          "x-default": `${siteUrl}/glossary` || siteUrl,
        },
      },
    },
    {
      url: `${siteUrl}/ru/insurance`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
      alternates: {
        languages: {
          ru: `${siteUrl}/ru/insurance`,
          en: `${siteUrl}/insurance` || siteUrl,
          "x-default": `${siteUrl}/insurance` || siteUrl,
        },
      },
    },
    {
      url: `${siteUrl}/ru/insurance/aetna`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
      alternates: {
        languages: {
          ru: `${siteUrl}/ru/insurance/aetna`,
          en: `${siteUrl}/insurance/aetna` || siteUrl,
          "x-default": `${siteUrl}/insurance/aetna` || siteUrl,
        },
      },
    },
    {
      url: `${siteUrl}/ru/insurance/anthem-blue-cross`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
      alternates: {
        languages: {
          ru: `${siteUrl}/ru/insurance/anthem-blue-cross`,
          en: `${siteUrl}/insurance/anthem-blue-cross` || siteUrl,
          "x-default": `${siteUrl}/insurance/anthem-blue-cross` || siteUrl,
        },
      },
    },
    {
      url: `${siteUrl}/ru/insurance/delta-dental`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
      alternates: {
        languages: {
          ru: `${siteUrl}/ru/insurance/delta-dental`,
          en: `${siteUrl}/insurance/delta-dental` || siteUrl,
          "x-default": `${siteUrl}/insurance/delta-dental` || siteUrl,
        },
      },
    },
    {
      url: `${siteUrl}/ru/jaw-surgery-recovery-timeline`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
      alternates: {
        languages: {
          ru: `${siteUrl}/ru/jaw-surgery-recovery-timeline`,
          en: `${siteUrl}/jaw-surgery-recovery-timeline` || siteUrl,
          "x-default": `${siteUrl}/jaw-surgery-recovery-timeline` || siteUrl,
        },
      },
    },
    {
      url: `${siteUrl}/ru/legal/hipaa-notice`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
      alternates: {
        languages: {
          ru: `${siteUrl}/ru/legal/hipaa-notice`,
          en: `${siteUrl}/legal/hipaa-notice` || siteUrl,
          "x-default": `${siteUrl}/legal/hipaa-notice` || siteUrl,
        },
      },
    },
    {
      url: `${siteUrl}/ru/legal/medical-disclaimer`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
      alternates: {
        languages: {
          ru: `${siteUrl}/ru/legal/medical-disclaimer`,
          en: `${siteUrl}/legal/medical-disclaimer` || siteUrl,
          "x-default": `${siteUrl}/legal/medical-disclaimer` || siteUrl,
        },
      },
    },
    {
      url: `${siteUrl}/ru/legal/privacy-policy`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
      alternates: {
        languages: {
          ru: `${siteUrl}/ru/legal/privacy-policy`,
          en: `${siteUrl}/legal/privacy-policy` || siteUrl,
          "x-default": `${siteUrl}/legal/privacy-policy` || siteUrl,
        },
      },
    },
    {
      url: `${siteUrl}/ru/legal/terms-of-service`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
      alternates: {
        languages: {
          ru: `${siteUrl}/ru/legal/terms-of-service`,
          en: `${siteUrl}/legal/terms-of-service` || siteUrl,
          "x-default": `${siteUrl}/legal/terms-of-service` || siteUrl,
        },
      },
    },
    {
      url: `${siteUrl}/ru/locations`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
      alternates: {
        languages: {
          ru: `${siteUrl}/ru/locations`,
          en: `${siteUrl}/locations` || siteUrl,
          "x-default": `${siteUrl}/locations` || siteUrl,
        },
      },
    },
    {
      url: `${siteUrl}/ru/media/speaking`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
      alternates: {
        languages: {
          ru: `${siteUrl}/ru/media/speaking`,
          en: `${siteUrl}/media/speaking` || siteUrl,
          "x-default": `${siteUrl}/media/speaking` || siteUrl,
        },
      },
    },
    {
      url: `${siteUrl}/ru/media/videos`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
      alternates: {
        languages: {
          ru: `${siteUrl}/ru/media/videos`,
          en: `${siteUrl}/media/videos` || siteUrl,
          "x-default": `${siteUrl}/media/videos` || siteUrl,
        },
      },
    },
    {
      url: `${siteUrl}/ru/our-team`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
      alternates: {
        languages: {
          ru: `${siteUrl}/ru/our-team`,
          en: `${siteUrl}/our-team` || siteUrl,
          "x-default": `${siteUrl}/our-team` || siteUrl,
        },
      },
    },
    {
      url: `${siteUrl}/ru/results`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
      alternates: {
        languages: {
          ru: `${siteUrl}/ru/results`,
          en: `${siteUrl}/results` || siteUrl,
          "x-default": `${siteUrl}/results` || siteUrl,
        },
      },
    },
    {
      url: `${siteUrl}/ru/smile-again-foundation`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
      alternates: {
        languages: {
          ru: `${siteUrl}/ru/smile-again-foundation`,
          en: `${siteUrl}/smile-again-foundation` || siteUrl,
          "x-default": `${siteUrl}/smile-again-foundation` || siteUrl,
        },
      },
    },
    {
      url: `${siteUrl}/ru/smile-gallery`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
      alternates: {
        languages: {
          ru: `${siteUrl}/ru/smile-gallery`,
          en: `${siteUrl}/smile-gallery` || siteUrl,
          "x-default": `${siteUrl}/smile-gallery` || siteUrl,
        },
      },
    },
    {
      url: `${siteUrl}/ru/surgical-cases`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
      alternates: {
        languages: {
          ru: `${siteUrl}/ru/surgical-cases`,
          en: `${siteUrl}/surgical-cases` || siteUrl,
          "x-default": `${siteUrl}/surgical-cases` || siteUrl,
        },
      },
    },
    {
      url: `${siteUrl}/ru/surgical-cases/corrective-jaw-surgery`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
      alternates: {
        languages: {
          ru: `${siteUrl}/ru/surgical-cases/corrective-jaw-surgery`,
          en: `${siteUrl}/surgical-cases/corrective-jaw-surgery` || siteUrl,
          "x-default": `${siteUrl}/surgical-cases/corrective-jaw-surgery` || siteUrl,
        },
      },
    },
    {
      url: `${siteUrl}/ru/surgical-cases/dental-implants`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
      alternates: {
        languages: {
          ru: `${siteUrl}/ru/surgical-cases/dental-implants`,
          en: `${siteUrl}/surgical-cases/dental-implants` || siteUrl,
          "x-default": `${siteUrl}/surgical-cases/dental-implants` || siteUrl,
        },
      },
    },
    {
      url: `${siteUrl}/ru/surgical-cases/facial-cosmetic-surgery`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
      alternates: {
        languages: {
          ru: `${siteUrl}/ru/surgical-cases/facial-cosmetic-surgery`,
          en: `${siteUrl}/surgical-cases/facial-cosmetic-surgery` || siteUrl,
          "x-default": `${siteUrl}/surgical-cases/facial-cosmetic-surgery` || siteUrl,
        },
      },
    },
  ];
}
