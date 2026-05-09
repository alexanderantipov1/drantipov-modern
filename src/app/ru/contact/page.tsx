import type { Metadata } from "next";
import { siteConfig } from "@/constants/siteConfig";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Контакты – Доктор Александр Антипов, DDS",
  description:
    "Свяжитесь с челюстно-лицевым хирургом Dr. Alexander Antipov для консультации по имплантации, челюстной хирургии и восстановлению улыбки.",
  alternates: {
    canonical: `${siteConfig.url}/ru/contact`,
    languages: {
      ru: `${siteConfig.url}/ru/contact`,
      en: `${siteConfig.url}/contact`,
      "x-default": `${siteConfig.url}/contact`,
    },
  },
};

export default function ContactPageRu() {
  return (
    <div className="bg-white text-dark py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-6">Свяжитесь с нами</h1>
        <p className="mb-8 max-w-2xl text-muted">
          Хотите записаться на консультацию или задать вопросы? Заполните форму ниже, и наша команда
          свяжется с вами как можно скорее.
        </p>
        <Contact />
      </div>
    </div>
  );
}
