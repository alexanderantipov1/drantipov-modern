import type { Metadata } from "next";
import RuTreatmentServicePage from "@/components/ru-services/RuTreatmentServicePage";
import { getRuServiceBrief } from "@/data/ruServiceBriefs";
import { finalizeMetadata } from "@/lib/seo-foundation";

const service = getRuServiceBrief("dermal-fillers");

export const metadata: Metadata = finalizeMetadata({
  title: { absolute: "Филлеры для лица: объём и риски | Доктор Антипов" },
  description: service.description,
}, "/ru/expertise/dermal-fillers");

export default function Page() {
  return <RuTreatmentServicePage service={service} />;
}
