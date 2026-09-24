import { finalizeMetadata } from "@/lib/seo-foundation";
import type { Metadata } from "next";
import RuExpertiseTemplate from "@/components/ru-home/RuExpertiseTemplate";
import { jawSurgeryData as data } from "@/data/ruExpertiseData";
import { siteUrl } from "@/data/russianImplantFunnel";

export const metadata: Metadata = finalizeMetadata({
  title: data.title,
  description: data.subtitle,
  alternates: {
    canonical: `${siteUrl}/ru/expertise/jaw-surgery`,
    languages: {
      ru: `${siteUrl}/ru/expertise/jaw-surgery`,
      en: `${siteUrl}/expertise/jaw-surgery`,
      "x-default": `${siteUrl}/expertise/jaw-surgery`,
    },
  },
  openGraph: {
    title: `${data.title} — Доктор Антипов`,
    description: data.subtitle,
    url: `${siteUrl}/ru/expertise/jaw-surgery`,
    locale: "ru_RU",
    type: "website",
  },
}, "/ru/expertise/jaw-surgery");

export default function Page() {
  return <RuExpertiseTemplate data={data} />;
}
