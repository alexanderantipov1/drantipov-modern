import type { Metadata } from "next";
import RuTreatmentServicePage from "@/components/ru-services/RuTreatmentServicePage";
import { getRuServiceBrief } from "@/data/ruServiceBriefs";
import { finalizeMetadata } from "@/lib/seo-foundation";

const service = getRuServiceBrief("all-on-5");

export const metadata: Metadata = finalizeMetadata({
  title: { absolute: "All-on-5: зубы на 5 имплантах | Доктор Антипов" },
  description: service.description,
}, "/ru/expertise/all-on-5");

export default function Page() {
  return <RuTreatmentServicePage service={service} />;
}
