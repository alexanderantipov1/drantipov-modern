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
import { siteUrl } from "@/data/russianImplantFunnel";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute:
      "Русскоговорящий челюстно-лицевой хирург — доктор Антипов, Roseville CA",
  },
  description:
    "Русскоговорящий сертифицированный челюстно-лицевой хирург в Roseville, California (район Сакраменто). Импланты в день операции (All-on-4, All-on-6, скуловые), ортогнатика, лечение апноэ сна, костная пластика. 25+ лет опыта.",
  keywords: [
    "русскоговорящий челюстно-лицевой хирург",
    "русскоговорящий стоматолог Сакраменто",
    "русский хирург-стоматолог Калифорния",
    "челюстно-лицевой хирург Roseville",
    "зубные импланты All-on-4 цена",
    "несъёмные зубы за один день",
    "имплантация всей челюсти Сакраменто",
    "ортогнатическая хирургия",
    "скуловые импланты",
  ],
  alternates: {
    canonical: `${siteUrl}/ru`,
    languages: {
      ru: `${siteUrl}/ru`,
      en: `${siteUrl}/`,
      "x-default": `${siteUrl}/`,
    },
  },
  openGraph: {
    title:
      "Русскоговорящий челюстно-лицевой хирург — доктор Антипов, Roseville CA",
    description:
      "Русскоговорящий сертифицированный челюстно-лицевой хирург. Импланты в день операции, ортогнатика, апноэ сна, костная пластика. 25+ лет опыта.",
    url: `${siteUrl}/ru`,
    locale: "ru_RU",
    type: "website",
    images: [
      {
        url: "/images/Antipov_white.jpg",
        width: 1016,
        height: 1400,
        alt: "Доктор Александр Антипов, DDS — сертифицированный челюстно-лицевой хирург, Roseville CA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Доктор Антипов, DDS — челюстно-лицевой хирург в Roseville, CA",
    description:
      "Сертифицированный челюстно-лицевой хирург. Импланты в день операции, ортогнатика, апноэ сна.",
    images: ["/images/Antipov_white.jpg"],
  },
};

/**
 * /ru — главная русскоязычная страница.
 * Структура 1:1 с EN /page.tsx (после обновлений sysadmin).
 */
export default function RuHomePage() {
  return (
    <>
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
