import type { Metadata } from "next";
import RuTreatmentServicePage from "@/components/ru-services/RuTreatmentServicePage";
import { getRuServiceBrief } from "@/data/ruServiceBriefs";
import { finalizeMetadata } from "@/lib/seo-foundation";

const service = getRuServiceBrief("lip-augmentation");

export const metadata: Metadata = finalizeMetadata({
  title: { absolute: "Увеличение губ: филлеры и риски | Доктор Антипов" },
  description: service.description,
}, "/ru/expertise/lip-augmentation");

export default function Page() {
  return <RuTreatmentServicePage service={service} />;
}
