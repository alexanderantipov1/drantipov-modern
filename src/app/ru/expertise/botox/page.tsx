import type { Metadata } from "next";
import RuTreatmentServicePage from "@/components/ru-services/RuTreatmentServicePage";
import { getRuServiceBrief } from "@/data/ruServiceBriefs";
import { finalizeMetadata } from "@/lib/seo-foundation";

const service = getRuServiceBrief("botox");

export const metadata: Metadata = finalizeMetadata({
  title: { absolute: "Botox: мимические морщины и риски | Доктор Антипов" },
  description: service.description,
}, "/ru/expertise/botox");

export default function Page() {
  return <RuTreatmentServicePage service={service} />;
}
