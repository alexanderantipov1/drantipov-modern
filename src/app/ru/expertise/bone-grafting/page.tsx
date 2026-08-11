import type { Metadata } from "next";
import RuExpertiseTemplate from "@/components/ru-home/RuExpertiseTemplate";
import { boneGraftingData as data } from "@/data/ruExpertiseData";
import { siteUrl } from "@/data/russianImplantFunnel";

export const metadata: Metadata = {
  title: data.title,
  description: data.subtitle,
  alternates: {
    canonical: `${siteUrl}/ru/expertise/bone-grafting`,
    languages: {
      ru: `${siteUrl}/ru/expertise/bone-grafting`,
      en: `${siteUrl}/expertise/bone-grafting`,
      "x-default": `${siteUrl}/expertise/bone-grafting`,
    },
  },
  openGraph: {
    title: `${data.title} — Доктор Антипов`,
    description: data.subtitle,
    url: `${siteUrl}/ru/expertise/bone-grafting`,
    locale: "ru_RU",
    type: "website",
  },
};

export default function Page() {
  return <RuExpertiseTemplate data={data} />;
}
