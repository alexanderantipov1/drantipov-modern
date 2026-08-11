import type { Metadata } from "next";
import RuExpertiseTemplate from "@/components/ru-home/RuExpertiseTemplate";
import { tmjData as data } from "@/data/ruExpertiseData";
import { siteUrl } from "@/data/russianImplantFunnel";

export const metadata: Metadata = {
  title: data.title,
  description: data.subtitle,
  alternates: {
    canonical: `${siteUrl}/ru/expertise/tmj`,
    languages: {
      ru: `${siteUrl}/ru/expertise/tmj`,
      en: `${siteUrl}/expertise/tmj`,
      "x-default": `${siteUrl}/expertise/tmj`,
    },
  },
  openGraph: {
    title: `${data.title} — Доктор Антипов`,
    description: data.subtitle,
    url: `${siteUrl}/ru/expertise/tmj`,
    locale: "ru_RU",
    type: "website",
  },
};

export default function Page() {
  return <RuExpertiseTemplate data={data} />;
}
