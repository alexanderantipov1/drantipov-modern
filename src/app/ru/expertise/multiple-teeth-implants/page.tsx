import type { Metadata } from "next";
import RuTreatmentServicePage from "@/components/ru-services/RuTreatmentServicePage";
import { getRuServiceBrief } from "@/data/ruServiceBriefs";
import { finalizeMetadata } from "@/lib/seo-foundation";

const service = getRuServiceBrief("multiple-teeth-implants");

export const metadata: Metadata = finalizeMetadata({
  title: { absolute: "Имплантация нескольких зубов | Доктор Антипов" },
  description: service.description,
}, "/ru/expertise/multiple-teeth-implants");

export default function Page() {
  return <RuTreatmentServicePage service={service} />;
}
