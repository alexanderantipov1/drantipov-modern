import type { Metadata } from "next";
import RuTreatmentServicePage from "@/components/ru-services/RuTreatmentServicePage";
import { getRuServiceBrief } from "@/data/ruServiceBriefs";
import { finalizeMetadata } from "@/lib/seo-foundation";

const service = getRuServiceBrief("peri-implantitis");

export const metadata: Metadata = finalizeMetadata({
  title: { absolute: "Периимплантит: диагностика и лечение | Доктор Антипов" },
  description: service.description,
}, "/ru/expertise/peri-implantitis");

export default function Page() {
  return <RuTreatmentServicePage service={service} />;
}
