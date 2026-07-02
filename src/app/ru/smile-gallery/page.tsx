import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SmileGallery from "@/components/SmileGallery";
import { smileGalleryPhotos, behindTheScenesPhotos } from "@/lib/smileGalleryPhotos";
import RuCTA from "@/components/ru-home/RuCTA";
import { structuredDataScript } from "@/lib/structured-data";

const ogImage = smileGalleryPhotos[0]?.src ?? "/images/smile-gallery/patient-01.jpeg";

export const metadata: Metadata = {
  title: { absolute: "Галерея улыбок — реальные результаты пациентов | Доктор Антипов" },
  description:
    "Реальные результаты пациентов после восстановления зубов на имплантах (полная челюсть) у доктора Александра Антипова в Roseville, Калифорния.",
  alternates: {
    canonical: "/ru/smile-gallery",
    languages: {
      ru: "/ru/smile-gallery",
      en: "/smile-gallery",
      "x-default": "/smile-gallery",
    },
  },
  openGraph: {
    title: "Галерея улыбок — реальные результаты пациентов",
    description:
      "Реальные преображения улыбок после имплантации всей челюсти в Roseville, Калифорния.",
    locale: "ru_RU",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Результат улыбки пациента",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Галерея улыбок — реальные результаты пациентов",
    description:
      "Реальные преображения улыбок после имплантации всей челюсти в Roseville, Калифорния.",
    images: [ogImage],
  },
};

const SITE_URL = "https://www.drantipov.com";

export default function RuSmileGalleryPage() {
  const imageGallerySchema = {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    inLanguage: "ru",
    name: "Галерея улыбок и закулисье",
    description:
      "Реальные преображения улыбок пациентов, а также фото из лаборатории и операционной практики доктора Александра Антипова по имплантации всей челюсти в Roseville, Калифорния.",
    url: `${SITE_URL}/ru/smile-gallery`,
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
      <PageHero
        image="/images/smile-gallery/patient-01.jpeg"
        eyebrow="Реальные результаты пациентов"
        title="Галерея улыбок"
        subtitle="Реальные пациенты, реальные преображения. Посмотрите завершённые случаи имплантации всей челюсти, выполненные доктором Антиповым в Roseville."
        overlay="navy"
      />
      <SmileGallery
        photos={smileGalleryPhotos}
        eyebrow="Результаты пациентов"
        title="Настоящие улыбки наших пациентов"
        description="Подборка завершённых случаев. Каждая улыбка восстановлена с помощью имплантации всей челюсти и индивидуальных протезов работы доктора Антипова."
      />
      <SmileGallery
        photos={behindTheScenesPhotos}
        id="behind-the-scenes"
        background="white"
        eyebrow="Закулисье"
        title="В лаборатории, в операционной и клинические результаты"
        description="Взгляд изнутри операционной и лаборатории: доктор Антипов с командой изготавливают индивидуальные протезы и устанавливают импланты с высокой точностью, а рядом — клинические снимки «до и после» реальных случаев."
      />
      <RuCTA />
    </>
  );
}
