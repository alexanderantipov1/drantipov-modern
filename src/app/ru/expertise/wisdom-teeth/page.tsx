import type { Metadata } from "next";
import RuExpertiseTemplate from "@/components/ru-home/RuExpertiseTemplate";
import { wisdomTeethData as data } from "@/data/ruExpertiseData";
import { siteUrl } from "@/data/russianImplantFunnel";

export const metadata: Metadata = {
  title: `${data.title} - Доктор Антипов | Roseville, California`,
  description: data.subtitle,
  alternates: {
    canonical: `${siteUrl}/ru/expertise/wisdom-teeth`,
    languages: {
      ru: `${siteUrl}/ru/expertise/wisdom-teeth`,
      en: `${siteUrl}/expertise/wisdom-teeth`,
      "x-default": `${siteUrl}/expertise/wisdom-teeth`,
    },
  },
  openGraph: {
    title: `${data.title} - Доктор Антипов`,
    description: data.subtitle,
    url: `${siteUrl}/ru/expertise/wisdom-teeth`,
    locale: "ru_RU",
    type: "website",
  },
};

export default function Page() {
  return <RuExpertiseTemplate data={data} />;
}
