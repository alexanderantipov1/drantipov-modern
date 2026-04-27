import type { Metadata } from "next";
import { notFound } from "next/navigation";
import RussianImplantLanding from "@/components/RussianImplantLanding";
import { getRussianCityPage, russianCityPages, siteUrl } from "@/data/russianImplantFunnel";

type CityPageProps = {
  params: Promise<{ city: string }>;
};

export function generateStaticParams() {
  return russianCityPages.map((page) => ({
    city: page.slug,
  }));
}

export async function generateMetadata({ params }: CityPageProps): Promise<Metadata> {
  const { city } = await params;
  const page = getRussianCityPage(city);

  if (!page) {
    return {};
  }

  const url = `${siteUrl}/ru/${page.slug}`;
  return {
    title: page.title,
    description: page.description,
    alternates: {
      canonical: url,
      languages: {
        ru: url,
      },
    },
    openGraph: {
      title: page.title,
      description: page.description,
      url,
      locale: "ru_RU",
      type: "website",
      images: [
        {
          url: "/images/landing-pages/dental-implants/art/slider02-ff45c735.jpg",
          width: 1920,
          height: 1080,
          alt: "Dr. Antipov dental implant consultation for Russian-speaking patients",
        },
      ],
    },
  };
}

export default async function RussianCityPage({ params }: CityPageProps) {
  const { city } = await params;
  const page = getRussianCityPage(city);
  if (!page) notFound();
  return <RussianImplantLanding page={page} path={`/ru/${page.slug}`} />;
}
