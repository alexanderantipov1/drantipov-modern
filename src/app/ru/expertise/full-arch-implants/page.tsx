import type { Metadata } from "next";
import RuExpertiseTemplate from "@/components/ru-home/RuExpertiseTemplate";
import { fullArchImplantsData as data } from "@/data/ruExpertiseData";
import { siteUrl } from "@/data/russianImplantFunnel";

export const metadata: Metadata = {
  title: `${data.title} - Доктор Антипов | Roseville, California`,
  description: data.subtitle,
  alternates: {
    canonical: `${siteUrl}/ru/expertise/full-arch-implants`,
    languages: {
      ru: `${siteUrl}/ru/expertise/full-arch-implants`,
      en: `${siteUrl}/expertise/full-arch-implants`,
      "x-default": `${siteUrl}/expertise/full-arch-implants`,
    },
  },
  openGraph: {
    title: `${data.title} - Доктор Антипов`,
    description: data.subtitle,
    url: `${siteUrl}/ru/expertise/full-arch-implants`,
    locale: "ru_RU",
    type: "website",
  },
};

export default function Page() {
  return <RuExpertiseTemplate data={data} calculatorSlug="all-on-468-per-arch" />;
}
