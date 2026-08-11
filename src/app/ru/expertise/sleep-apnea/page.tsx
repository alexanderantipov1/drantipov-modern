import type { Metadata } from "next";
import RuExpertiseTemplate from "@/components/ru-home/RuExpertiseTemplate";
import { sleepApneaData as data } from "@/data/ruExpertiseData";
import { siteUrl } from "@/data/russianImplantFunnel";

export const metadata: Metadata = {
  title: data.title,
  description: data.subtitle,
  alternates: {
    canonical: `${siteUrl}/ru/expertise/sleep-apnea`,
    languages: {
      ru: `${siteUrl}/ru/expertise/sleep-apnea`,
      en: `${siteUrl}/expertise/sleep-apnea`,
      "x-default": `${siteUrl}/expertise/sleep-apnea`,
    },
  },
  openGraph: {
    title: `${data.title} — Доктор Антипов`,
    description: data.subtitle,
    url: `${siteUrl}/ru/expertise/sleep-apnea`,
    locale: "ru_RU",
    type: "website",
  },
};

export default function Page() {
  return <RuExpertiseTemplate data={data} />;
}
