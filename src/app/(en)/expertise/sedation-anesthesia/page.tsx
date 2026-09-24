import { finalizeMetadata } from "@/lib/seo-foundation";
import ServicePageTemplate, { buildServiceMetadata } from "@/components/expertise/ServicePageTemplate";
import { servicePages } from "@/constants/servicePages";

const data = servicePages["sedation-anesthesia"];

export const metadata = finalizeMetadata(buildServiceMetadata(data), "/expertise/sedation-anesthesia");

export default function Page() {
  return <ServicePageTemplate data={data} />;
}
