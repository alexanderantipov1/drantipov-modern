import type { Metadata } from "next";
import RuTreatmentServicePage from "@/components/ru-services/RuTreatmentServicePage";
import { getRuServiceBrief } from "@/data/ruServiceBriefs";
import { finalizeMetadata } from "@/lib/seo-foundation";

const service = getRuServiceBrief("implant-consultation");

export const metadata: Metadata = finalizeMetadata({
  title: { absolute: "Консультация имплантолога: второе мнение | Доктор Антипов" },
  description: service.description,
}, "/ru/expertise/implant-consultation");

export default function Page() {
  return <RuTreatmentServicePage service={service} />;
}
