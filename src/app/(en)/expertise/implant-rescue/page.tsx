import { finalizeMetadata } from "@/lib/seo-foundation";
import ServicePageTemplate, { buildServiceMetadata } from "@/components/expertise/ServicePageTemplate";
import { servicePages } from "@/constants/servicePages";

const data = servicePages["implant-rescue"];

export const metadata = finalizeMetadata(buildServiceMetadata(data), "/expertise/implant-rescue");

export default function Page() {
  return <ServicePageTemplate data={data} />;
}
