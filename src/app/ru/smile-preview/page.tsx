import type { Metadata } from "next";
import SmilePreview from "@/components/SmilePreview";

export const metadata: Metadata = {
  title: {
    absolute: "AI-превью улыбки - увидьте свою новую улыбку | Доктор Антипов",
  },
  description:
    "Загрузите селфи и увидите AI-превью вашей будущей улыбки за секунды. Бесплатная виртуальная примерка улыбки у доктора Александра Антипова, Roseville, CA.",
  alternates: {
    canonical: "/ru/smile-preview",
    languages: {
      en: "/smile-preview",
      ru: "/ru/smile-preview",
      "x-default": "/smile-preview",
    },
  },
  openGraph: {
    locale: "ru_RU",
    title: "AI-превью улыбки - увидьте свою новую улыбку",
    description:
      "Загрузите селфи и увидите AI-превью вашей будущей улыбки за секунды. Бесплатно.",
  },
};

export default function RuSmilePreviewPage() {
  return <SmilePreview locale="ru" />;
}
