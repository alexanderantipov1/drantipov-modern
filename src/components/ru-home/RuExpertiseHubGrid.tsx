"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Smile, Bone, Wind, ScissorsLineDashed, Sparkles, ArrowRight } from "lucide-react";

const iconMap = {
  teeth: Smile,
  tooth: Smile,
  bone: Bone,
  jaw: ScissorsLineDashed,
  sleep: Wind,
  sparkles: Sparkles,
} as const;

type IconKey = keyof typeof iconMap;

interface RuService {
  title: string;
  description: string;
  icon: IconKey;
  href: string;
}

const ruExpertise: RuService[] = [
  {
    title: "Имплантация полной дуги",
    description: "Реставрация All-on-X с зубами за один день с использованием передовых техник",
    icon: "teeth",
    href: "/ru/expertise/full-arch-implants",
  },
  {
    title: "Имплантация одного зуба",
    description: "Прецизионная установка имплантов для естественного, эстетичного результата",
    icon: "tooth",
    href: "/ru/expertise/single-tooth",
  },
  {
    title: "Костная пластика",
    description: "Передовые техники восстановления объёма костной ткани для успешной имплантации",
    icon: "bone",
    href: "/ru/expertise/bone-grafting",
  },
  {
    title: "Хирургия челюсти",
    description: "Ортогнатическая хирургия для коррекции прикуса и структуры лица",
    icon: "jaw",
    href: "/ru/expertise/jaw-surgery",
  },
  {
    title: "Хирургия апноэ сна",
    description: "Хирургическое лечение обструктивного апноэ сна",
    icon: "sleep",
    href: "/ru/expertise/sleep-apnea",
  },
  {
    title: "Бесшрамное удаление родинок",
    description: "Передовая радиоволновая хирургия для бескровного удаления родинок без шрамов",
    icon: "sparkles",
    href: "/ru/expertise/mole-removal",
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function RuExpertiseHubGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {ruExpertise.map((service, index) => {
        const Icon = iconMap[service.icon] || Smile;
        return (
          <motion.div
            key={service.href}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUp}
            transition={{ delay: index * 0.1 }}
          >
            <div className="h-full flex flex-col rounded-3xl border border-dark/5 bg-white/85 backdrop-blur-xl p-8 shadow-md hover:shadow-[0_25px_70px_-15px_rgba(14,62,94,0.3)] hover:-translate-y-1 transition-all duration-500">
              <div className="flex flex-col items-center text-center space-y-4 flex-1">
                <div className="p-4 rounded-2xl bg-primary/10">
                  <Icon className="h-12 w-12 text-primary" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-dark">{service.title}</h3>
                <p className="text-muted leading-relaxed flex-1">{service.description}</p>
                <Link
                  href={service.href}
                  className="group inline-flex items-center justify-center w-full px-5 py-3 rounded-xl border border-dark/15 text-dark font-semibold hover:border-primary hover:text-primary transition-colors"
                >
                  Подробнее
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
