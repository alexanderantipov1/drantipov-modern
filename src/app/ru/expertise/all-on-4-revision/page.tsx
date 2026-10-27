import type { Metadata } from "next";
import RuTreatmentServicePage from "@/components/ru-services/RuTreatmentServicePage";
import { getRuServiceBrief } from "@/data/ruServiceBriefs";
import { finalizeMetadata } from "@/lib/seo-foundation";

const service = getRuServiceBrief("all-on-4-revision");

export const metadata: Metadata = finalizeMetadata({
  title: { absolute: "Переделка All-on-4: варианты и риски | Доктор Антипов" },
  description: service.description,
}, "/ru/expertise/all-on-4-revision");

export default function Page() {
  return <RuTreatmentServicePage service={service} />;
}
