import type { Metadata } from "next";
import RuTreatmentServicePage from "@/components/ru-services/RuTreatmentServicePage";
import { getRuServiceBrief } from "@/data/ruServiceBriefs";
import { finalizeMetadata } from "@/lib/seo-foundation";

const service = getRuServiceBrief("sinus-lift");

export const metadata: Metadata = finalizeMetadata({
  title: { absolute: "Синус-лифтинг перед имплантацией | Доктор Антипов" },
  description: service.description,
}, "/ru/expertise/sinus-lift");

export default function Page() {
  return <RuTreatmentServicePage service={service} />;
}
