"use client";

import Image from "next/image";
import { Award, Building2, ScanLine, Sparkles, Users } from "lucide-react";

type SurgeonAuthorityProps = {
  lang?: "en" | "ru";
};

const copy = {
  en: {
    eyebrow: "Full-arch authority",
    title: "Dr. Alexander Antipov plans the whole smile, not just the implants",
    intro:
      "Dr. Alexander V. Antipov, DDS is a board-certified oral and maxillofacial surgeon in Roseville, California. His full-arch cases combine implant surgery, zygomatic implants, bone grafting, prosthodontic training, bite planning, and an in-house dental lab into one controlled clinical process.",
    education:
      "His education and advanced surgical training include Loma Linda University School of Dentistry, fellowship training in Oral and Maxillofacial Surgery at Columbia University Harlem Hospital Center, and surgical and anesthesia training at Montefiore Medical Center / Albert Einstein College of Medicine in New York.",
    lab:
      "The practice advantage is the team behind the surgery: an in-house dental lab and more than 50 people involved in patient care, surgical coordination, prosthetic design, temporary teeth, final arch fabrication, follow-up, and long-term prosthetic management.",
    art:
      "A beautiful full arch is surgery, engineering, and art at the same time: tooth shape, smile line, lip support, shade, speech, bite, cleanability, and stability all have to work together.",
    philosophy: "Do it once. Do it right. Do it forever.",
    caveat:
      "That is the planning philosophy: design the case for long-term success with anatomy, materials, maintenance, and future service in mind.",
    stats: [
      ["ABOMS", "Board-certified oral & maxillofacial surgeon"],
      ["25+", "Years of surgical experience"],
      ["10,000+", "Smiles restored across complex surgical care"],
      ["50+", "Team members supporting patient and prosthetic management"],
    ],
    pillars: [
      "All-on-4 / All-on-6 full-arch implants",
      "Zygomatic implants for severe bone loss",
      "Advanced prosthodontic and bite planning",
      "In-house lab for beautiful full-arch design",
    ],
  },
  ru: {
    eyebrow: "Авторитет в full-arch лечении",
    title: "Dr. Alexander Antipov планирует всю улыбку, а не только импланты",
    intro:
      "Dr. Alexander V. Antipov, DDS - board-certified oral & maxillofacial surgeon в Roseville, California. Его full-arch случаи объединяют implant surgery, zygomatic implants, bone grafting, prosthodontic training, bite planning и собственную зуботехническую лабораторию в один управляемый процесс.",
    education:
      "Образование и подготовка включают Loma Linda University School of Dentistry, fellowship in Oral & Maxillofacial Surgery at Columbia University Harlem Hospital Center и surgical and anesthesia training at Montefiore Medical Center / Albert Einstein College of Medicine in New York.",
    lab:
      "Главное преимущество практики - команда за хирургией: собственная лаборатория и более 50 человек, участвующих в patient care, surgical coordination, prosthetic design, temporary teeth, final arch fabrication, follow-up и long-term prosthetic management.",
    art:
      "Красивая полная дуга - это хирургия, инженерия и искусство одновременно: форма зубов, smile line, lip support, цвет, речь, прикус, гигиена и стабильность должны работать вместе.",
    philosophy: "Сделать один раз. Сделать правильно. Сделать навсегда.",
    caveat:
      "Это философия планирования: проектировать случай на долгий срок с учетом анатомии, материалов, ухода и будущего обслуживания.",
    stats: [
      ["ABOMS", "Board-certified oral & maxillofacial surgeon"],
      ["25+", "лет хирургического опыта"],
      ["10,000+", "восстановленных улыбок в сложной хирургии"],
      ["50+", "человек в patient и prosthetic management"],
    ],
    pillars: [
      "All-on-4 / All-on-6 full-arch implants",
      "Zygomatic implants при сильной потере кости",
      "Advanced prosthodontic и bite planning",
      "In-house lab для красивого full-arch дизайна",
    ],
  },
} as const;

const icons = [Award, ScanLine, Users, Building2];

export default function SurgeonAuthority({ lang = "en" }: SurgeonAuthorityProps) {
  const content = copy[lang];

  return (
    <section id="surgeon-authority" className="overflow-hidden bg-slate-950 py-20 text-white sm:py-24 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:px-8">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary-light">{content.eyebrow}</p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            {content.title}
          </h2>
          <p className="mt-6 text-lg leading-8 text-white/80">{content.intro}</p>

          <div className="mt-8 border-l-4 border-primary bg-white/[0.07] p-6">
            <p className="text-2xl font-bold tracking-tight text-white">{content.philosophy}</p>
            <p className="mt-3 text-sm leading-6 text-white/70">{content.caveat}</p>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {content.pillars.map((pillar) => (
              <div key={pillar} className="flex items-center gap-3 border border-white/10 bg-white/[0.06] p-4">
                <Sparkles className="h-5 w-5 shrink-0 text-primary-light" aria-hidden="true" />
                <span className="text-sm font-semibold leading-5 text-white/90">{pillar}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="grid gap-4 sm:grid-cols-2">
            {content.stats.map(([value, label], index) => {
              const Icon = icons[index] ?? Award;
              return (
                <div key={value} className="border border-white/10 bg-white/[0.06] p-5">
                  <Icon className="h-6 w-6 text-primary-light" aria-hidden="true" />
                  <p className="mt-4 text-3xl font-bold text-white">{value}</p>
                  <p className="mt-2 text-sm leading-6 text-white/65">{label}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-6 grid gap-6 lg:grid-cols-[0.82fr_1fr] lg:items-stretch">
            <div className="relative min-h-[300px] overflow-hidden bg-white/5">
              <Image
                src="/images/meetdrantipov.png"
                alt="Dr. Alexander Antipov"
                fill
                className="object-cover object-top"
                sizes="(min-width: 1024px) 30vw, 100vw"
              />
            </div>
            <div className="space-y-4 border border-white/10 bg-white/[0.06] p-6 text-sm leading-7 text-white/75">
              <p>{content.education}</p>
              <p>{content.lab}</p>
              <p>{content.art}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
