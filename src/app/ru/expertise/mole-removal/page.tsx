import type { Metadata } from "next";
import RuExpertiseTemplate from "@/components/ru-home/RuExpertiseTemplate";
import { moleRemovalData as data } from "@/data/ruExpertiseData";
import { siteUrl } from "@/data/russianImplantFunnel";

export const metadata: Metadata = {
  title: `${data.title} — Доктор Антипов | Roseville, California`,
  description: data.subtitle,
  alternates: {
    canonical: `${siteUrl}/ru/expertise/mole-removal`,
    languages: {
      ru: `${siteUrl}/ru/expertise/mole-removal`,
      en: `${siteUrl}/expertise/mole-removal`,
      "x-default": `${siteUrl}/expertise/mole-removal`,
    },
  },
  openGraph: {
    title: `${data.title} — Доктор Антипов`,
    description: data.subtitle,
    url: `${siteUrl}/ru/expertise/mole-removal`,
    locale: "ru_RU",
    type: "website",
  },
};

export default function Page() {
  return <RuExpertiseTemplate data={data} />;
}
