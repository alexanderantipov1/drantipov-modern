import type { Metadata } from "next";
import RuExpertiseTemplate from "@/components/ru-home/RuExpertiseTemplate";
import { singleToothData as data } from "@/data/ruExpertiseData";
import { siteUrl } from "@/data/russianImplantFunnel";

export const metadata: Metadata = {
  title: `${data.title} — Доктор Антипов | Roseville, California`,
  description: data.subtitle,
  alternates: {
    canonical: `${siteUrl}/ru/expertise/single-tooth`,
    languages: {
      ru: `${siteUrl}/ru/expertise/single-tooth`,
      en: `${siteUrl}/expertise/single-tooth`,
      "x-default": `${siteUrl}/expertise/single-tooth`,
    },
  },
  openGraph: {
    title: `${data.title} — Доктор Антипов`,
    description: data.subtitle,
    url: `${siteUrl}/ru/expertise/single-tooth`,
    locale: "ru_RU",
    type: "website",
  },
};

export default function Page() {
  return <RuExpertiseTemplate data={data} />;
}
