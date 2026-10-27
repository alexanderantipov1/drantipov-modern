import type { Metadata } from "next";
import RuTreatmentServicePage from "@/components/ru-services/RuTreatmentServicePage";
import { getRuServiceBrief } from "@/data/ruServiceBriefs";
import { finalizeMetadata } from "@/lib/seo-foundation";

const service = getRuServiceBrief("pterygoid-implants");

export const metadata: Metadata = finalizeMetadata({
  title: { absolute: "Птеригоидные импланты | Доктор Антипов" },
  description: service.description,
}, "/ru/expertise/pterygoid-implants");

export default function Page() {
  return <RuTreatmentServicePage service={service} />;
}
