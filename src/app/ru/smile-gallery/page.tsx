import { finalizeMetadata } from "@/lib/seo-foundation";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SmileGallery from "@/components/SmileGallery";
import type { SmilePhoto } from "@/components/SmileGallery";
import { smileGalleryPhotos, behindTheScenesPhotos } from "@/lib/smileGalleryPhotos";
import RuCTA from "@/components/ru-home/RuCTA";
import { structuredDataScript } from "@/lib/structured-data";

const ogImage = smileGalleryPhotos[0]?.src ?? "/images/smile-gallery/patient-01.jpeg";

const russianCaptions: Record<string, string> = {
  "Full-Arch Restoration": "Восстановление полного зубного ряда",
  "Implant Restoration": "Восстановление зубов на имплантах",
  "Zirconia Smile Detail": "Циркониевый протез: детали",
  "In the Lab": "В лаборатории",
  "In Surgery": "В операционной",
  "Treatment Planning": "Планирование лечения",
  "Patient Care": "Забота о пациенте",
  "Happy Patients": "Довольные пациенты",
  "Before Treatment": "До лечения",
  "Implant Result": "Результат имплантации",
  "Final Result": "Итоговый результат",
};

function translateGalleryPhoto(photo: SmilePhoto): SmilePhoto {
  const { alt, src } = photo;
  let translatedAlt: string;
  if (src.includes("/smile-gallery/")) {
    translatedAlt = /Close-up/.test(alt)
      ? "Крупный план улыбки после восстановления зубного ряда на имплантах"
      : `${/Female/.test(alt) ? "Пациентка" : /Male/.test(alt) ? "Пациент" : "Пациент"} улыбается после ${/full-arch/.test(alt) ? "восстановления полного зубного ряда" : "имплантации зубов"}`;
  } else if (src.includes("/lab-")) {
    translatedAlt = /Technician/.test(alt) ? "Зубной техник подбирает оттенок протеза полного зубного ряда" : "Изготовление и отделка индивидуального протеза на имплантах в лаборатории";
  } else if (src.includes("/with-patients-")) {
    translatedAlt = "Доктор Антипов с довольными пациентами после лечения";
  } else if (src.includes("/before-")) {
    translatedAlt = /missing/.test(alt) ? "Отсутствующие и повреждённые зубы до имплантации" : "Повреждённые зубы до восстановления зубного ряда на имплантах";
  } else if (src.includes("/result-")) {
    translatedAlt = /upper arch/.test(alt) ? "Верхний зубной ряд после восстановления на имплантах" : "Улыбка после восстановления полного зубного ряда на имплантах";
  } else if (/3D scan/.test(alt)) {
    translatedAlt = "Врач изучает 3D-снимок при планировании лечения";
  } else if (/Patient receiving care/.test(alt)) {
    translatedAlt = "Пациент во время стоматологического лечения";
  } else {
    translatedAlt = /Dr. Antipov/.test(alt) ? "Доктор Антипов и команда во время операции по установке имплантов" : "Хирургическая команда во время установки имплантов";
  }
  return {
    ...photo,
    alt: translatedAlt,
    caption: photo.caption ? russianCaptions[photo.caption] : undefined,
  };
}

const russianSmileGalleryPhotos = smileGalleryPhotos.map(translateGalleryPhoto);
const russianBehindTheScenesPhotos = behindTheScenesPhotos.map(translateGalleryPhoto);

export const metadata: Metadata = finalizeMetadata({
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
}, "/ru/smile-gallery");

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
    image: [...russianSmileGalleryPhotos, ...russianBehindTheScenesPhotos].map((p) => ({
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
        locale="ru"
        image="/images/smile-gallery/patient-01.jpeg"
        eyebrow="Реальные результаты пациентов"
        title="Галерея улыбок"
        subtitle="Реальные пациенты, реальные преображения. Посмотрите завершённые случаи имплантации всей челюсти, выполненные доктором Антиповым в Roseville."
        overlay="navy"
      />
      <SmileGallery
         photos={russianSmileGalleryPhotos}
        eyebrow="Результаты пациентов"
        title="Настоящие улыбки наших пациентов"
        description="Подборка завершённых случаев. Каждая улыбка восстановлена с помощью имплантации всей челюсти и индивидуальных протезов работы доктора Антипова."
      />
      <SmileGallery
         photos={russianBehindTheScenesPhotos}
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
