import RuHero from "@/components/ru-home/RuHero";
import RuReviewBanner from "@/components/ru-home/RuReviewBanner";
import RuAbout from "@/components/ru-home/RuAbout";
import RuServices from "@/components/ru-home/RuServices";
import RuPracticePhilosophy from "@/components/ru-home/RuPracticePhilosophy";
import RuWallOfSmiles from "@/components/ru-home/RuWallOfSmiles";
import RuBeforeAfter from "@/components/ru-home/RuBeforeAfter";
import RuTestimonials from "@/components/ru-home/RuTestimonials";
import RuFAQ from "@/components/ru-home/RuFAQ";
import RuOfficeTour from "@/components/ru-home/RuOfficeTour";
import RuServiceArea from "@/components/ru-home/RuServiceArea";
import RuLocations from "@/components/ru-home/RuLocations";
import RuReferringDoctors from "@/components/ru-home/RuReferringDoctors";
import RuCTA from "@/components/ru-home/RuCTA";

import type { Metadata } from "next";
import { getBreadcrumbSchema, structuredDataScript } from "@/lib/structured-data";
import { siteConfig } from "@/constants/siteConfig";

export const metadata: Metadata = {
  title: { absolute: "О нас - Доктор Александр В. Антипов, DDS" },
  description:
    "Доктор Антипов и доктор Кахвач - сертифицированные челюстно-лицевые хирурги с 25+ годами совокупного опыта в Roseville, CA.",
  alternates: {
    canonical: `${siteConfig.url}/ru/about`,
    languages: {
      ru: `${siteConfig.url}/ru/about`,
      en: `${siteConfig.url}/about`,
      "x-default": `${siteConfig.url}/about`,
    },
  },
  openGraph: {
    title: "О докторе Александре Антипове",
    description:
      "Сертифицированный челюстно-лицевой хирург - Diplomate ABOMS. 25+ лет возвращает улыбки в Roseville, CA.",
    locale: "ru_RU",
    images: [
      {
        url: "/images/drantipov-about-v6.jpg",
        width: 1200,
        height: 630,
        alt: "О докторе Александре Антипове",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "О докторе Александре Антипове",
    description:
      "Сертифицированный челюстно-лицевой хирург - Diplomate ABOMS. 25+ лет возвращает улыбки в Roseville, CA.",
    images: ["/images/drantipov-about-v6.jpg"],
  },
};

/**
 * /ru/about - зеркало главной /ru, с собственным URL для пункта «О нас» в меню.
 */
export default function RuAboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={structuredDataScript([
          {
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "@id": `${siteConfig.url}/ru/about`,
            url: `${siteConfig.url}/ru/about`,
            name: "О докторе Александре Антипове, DDS",
            description:
              "Сертифицированный челюстно-лицевой хирург, практикующий в Roseville, Калифорния. Diplomate American Board of Oral and Maxillofacial Surgery (ABOMS), 25+ лет хирургического опыта.",
            inLanguage: "ru",
            mainEntity: { "@id": `${siteConfig.url}/#physician` },
          },
          getBreadcrumbSchema([
            { name: "Главная", url: `${siteConfig.url}/ru` },
            { name: "О нас", url: `${siteConfig.url}/ru/about` },
          ]),
        ])}
      />
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:bg-primary focus:text-white focus:px-4 focus:py-2 focus:rounded-lg"
      >
        Перейти к основному содержимому
      </a>
      <div id="main-content">
        <RuHero />
        <RuReviewBanner />
        <RuAbout />
        <RuServices />
        <RuPracticePhilosophy />
        <RuWallOfSmiles />
        <RuBeforeAfter />
        <RuTestimonials />
        <RuFAQ />
        <RuOfficeTour />
        <RuServiceArea />
        <RuLocations />
        <RuReferringDoctors />
        <RuCTA />
      </div>
    </>
  );
}
