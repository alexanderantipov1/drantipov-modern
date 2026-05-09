import type { Metadata } from "next";
import { siteConfig } from "@/constants/siteConfig";

export const metadata: Metadata = {
  title: "Часто задаваемые вопросы – Доктор Александр Антипов, DDS",
  description:
    "Ответы на популярные вопросы о дентальных имплантах, All-on-4, All-on-6, костной пластике, седации, восстановлении и челюстно-лицевой хирургии.",
  alternates: {
    canonical: `${siteConfig.url}/ru/faqs`,
    languages: {
      ru: `${siteConfig.url}/ru/faqs`,
      en: `${siteConfig.url}/for-patients/faqs`,
      "x-default": `${siteConfig.url}/for-patients/faqs`,
    },
  },
};

const faqs = [
  {
    question: "Что такое дентальные импланты?",
    answer:
      "Дентальные импланты — это искусственные корни зубов, которые устанавливаются в челюстную кость. После заживления на них фиксируются коронки, мосты или полный несъемный протез, чтобы восстановить улыбку, жевание и уверенность.",
  },
  {
    question: "Чем отличаются All-on-4 и All-on-6?",
    answer:
      "All-on-4 использует четыре импланта для фиксации полного ряда зубов, а All-on-6 — шесть имплантов для дополнительной опоры и распределения нагрузки. Подход выбирается после 3D CT-сканирования и оценки кости, прикуса и целей лечения.",
  },
  {
    question: "Можно ли получить зубы в день операции?",
    answer:
      "Во многих случаях да. При достаточной стабильности имплантов доктор Антипов может установить временные несъемные зубы в день операции. Постоянная циркониевая конструкция обычно изготавливается после периода заживления.",
  },
  {
    question: "Что делать, если мне сказали, что кости недостаточно?",
    answer:
      "Недостаток кости не всегда означает, что импланты невозможны. В зависимости от ситуации могут применяться костная пластика, синус-лифтинг, направленная регенерация кости или зигоматические импланты.",
  },
  {
    question: "Больно ли устанавливать импланты?",
    answer:
      "Операции проводятся с местной анестезией, внутривенной седацией или общей анестезией. Цель — сделать процедуру максимально комфортной и безопасной. После операции возможны отек и дискомфорт, которые контролируются назначенными препаратами.",
  },
  {
    question: "Как долго служат импланты?",
    answer:
      "При правильном уходе, регулярных осмотрах и хорошей гигиене импланты могут служить многие годы. Долгосрочный результат зависит от состояния здоровья, прикуса, ухода и отсутствия курения.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  inLanguage: "ru",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function FaqPageRu() {
  return (
    <div className="bg-light py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="container mx-auto max-w-3xl px-4">
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-primary">
          Вопросы пациентов
        </p>
        <h1 className="mb-6 text-4xl font-bold tracking-tight text-dark">
          Часто задаваемые вопросы
        </h1>
        <p className="mb-10 text-lg leading-8 text-muted">
          Ответы на ключевые вопросы о дентальных имплантах, восстановлении всей дуги, костной пластике, седации и восстановлении после операции.
        </p>
        <div className="space-y-5">
          {faqs.map((faq) => (
            <article key={faq.question} className="rounded-2xl border border-dark/10 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-bold text-dark">{faq.question}</h2>
              <p className="mt-3 leading-7 text-muted">{faq.answer}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
