import type { Metadata } from "next";
import FullArchAdLanding from "@/components/FullArchAdLanding";
import { fullArchLanding, getFullArchLandingStructuredData } from "@/data/fullArchLanding";
import { structuredDataScript } from "@/lib/structured-data";
import { siteConfig } from "@/constants/siteConfig";

const content = fullArchLanding.ru;

export const metadata: Metadata = {
  title: content.title,
  description: content.description,
  keywords: content.keywords,
  alternates: {
    canonical: `${siteConfig.url}${content.path}`,
    languages: {
      en: `${siteConfig.url}${content.alternatePath}`,
      ru: `${siteConfig.url}${content.path}`,
    },
  },
  openGraph: {
    title: content.title,
    description: content.description,
    url: `${siteConfig.url}${content.path}`,
    locale: "ru_RU",
    type: "website",
    images: [
      {
        url: "/images/meetdrantipov.png",
        width: 608,
        height: 800,
        alt: content.hero.imageAlt,
      },
    ],
  },
};

export default function RuFullArchDentalImplantsLandingPage() {
  const structuredData = getFullArchLandingStructuredData(content);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={structuredDataScript(structuredData)} />
      <FullArchAdLanding content={content} />
    </>
  );
}
