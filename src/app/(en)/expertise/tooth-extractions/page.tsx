import { finalizeMetadata } from "@/lib/seo-foundation";
import ServicePageTemplate, { buildServiceMetadata } from "@/components/expertise/ServicePageTemplate";
import { servicePages } from "@/constants/servicePages";

const data = servicePages["tooth-extractions"];

export const metadata = finalizeMetadata(buildServiceMetadata(data), "/expertise/tooth-extractions");

export default function Page() {
  return <ServicePageTemplate data={data} />;
}
