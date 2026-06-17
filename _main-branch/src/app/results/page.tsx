import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import heroContent from "@/lib/heroContent";
import Results from "@/components/Results";
import Gallery from "@/components/Gallery";
import StatsCounter from "@/components/StatsCounter";
import CTA from "@/components/CTA";
import { getAggregateRatingSchema, structuredDataScript } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: { absolute: "Patient Results & Office Gallery | Dr. Antipov" },
  description: "Real patient transformations, before-and-after surgical cases, and our state-of-the-art Roseville oral surgery facility.",
  alternates: {
    canonical: "/results",
    languages: {
      "en": "/results",
      "x-default": "/results",
    },
  },
  openGraph: {
    title: "Patient Results & Gallery",
    description: "Real patient transformations, before-and-after surgical cases, and our Roseville oral surgery facility.",
    images: [
      {
        url: "/images/office-tour/1/gallery@2x-ecef5848.jpg",
        width: 1200,
        height: 630,
        alt: "Patient Results & Gallery",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Patient Results & Gallery",
    description: "Real patient transformations, before-and-after surgical cases, and our Roseville oral surgery facility.",
    images: ["/images/office-tour/1/gallery@2x-ecef5848.jpg"],
  }
};

export default function ResultsPage() {
  const aggregateRating = getAggregateRatingSchema({ ratingValue: 4.9, reviewCount: 312 });

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={structuredDataScript([aggregateRating])} />
      <PageHero {...heroContent["/results"]!} />
      <Results />
      <Gallery />
      <StatsCounter />
      <CTA />
    </>
  );
}
