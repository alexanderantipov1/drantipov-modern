import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import heroContent from "@/lib/heroContent";
import SmileGallery from "@/components/SmileGallery";
import { smileGalleryPhotos, behindTheScenesPhotos } from "@/lib/smileGalleryPhotos";
import CTA from "@/components/CTA";
import { structuredDataScript } from "@/lib/structured-data";

const ogImage = smileGalleryPhotos[0]?.src ?? "/images/smile-gallery/patient-01.jpeg";

export const metadata: Metadata = {
  title: { absolute: "Smile Gallery — Real Patient Results | Dr. Antipov" },
  description:
    "Browse real patient smile transformations after full-arch dental implant restoration with Dr. Alexander Antipov in Roseville, CA.",
  alternates: {
    canonical: "/smile-gallery",
    languages: {
      en: "/smile-gallery",
      "x-default": "/smile-gallery",
    },
  },
  openGraph: {
    title: "Smile Gallery — Real Patient Results",
    description:
      "Real patient smile transformations after full-arch dental implant restoration in Roseville, CA.",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Patient smile result",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Smile Gallery — Real Patient Results",
    description:
      "Real patient smile transformations after full-arch dental implant restoration in Roseville, CA.",
    images: [ogImage],
  },
};

const SITE_URL = "https://www.drantipov.com";

export default function SmileGalleryPage() {
  const imageGallerySchema = {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    name: "Smile Gallery & Behind the Scenes",
    description:
      "Real patient smile transformations plus behind-the-scenes lab and surgery photos from Dr. Alexander Antipov's full-arch dental implant practice in Roseville, CA.",
    url: `${SITE_URL}/smile-gallery`,
    image: [...smileGalleryPhotos, ...behindTheScenesPhotos].map((p) => ({
      "@type": "ImageObject",
      contentUrl: `${SITE_URL}${p.src}`,
      caption: p.caption ?? p.alt,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={structuredDataScript([imageGallerySchema])}
      />
      <PageHero {...heroContent["/smile-gallery"]!} />
      <SmileGallery photos={smileGalleryPhotos} />
      <SmileGallery
        photos={behindTheScenesPhotos}
        id="behind-the-scenes"
        background="white"
        eyebrow="Behind the Scenes"
        title="In the Lab, In Surgery & Clinical Results"
        description="A look inside the operatory and lab — Dr. Antipov and his team crafting custom prosthetics and placing implants with precision — alongside clinical before and after close-ups of real cases."
      />
      <CTA />
    </>
  );
}
