import { finalizeMetadata } from "@/lib/seo-foundation";
import ServicePageTemplate, { buildServiceMetadata } from "@/components/expertise/ServicePageTemplate";
import { servicePages } from "@/constants/servicePages";

const data = servicePages["snap-on-dentures"];

export const metadata = finalizeMetadata(buildServiceMetadata(data), "/expertise/snap-on-dentures");

export default function Page() {
  return <ServicePageTemplate data={data} />;
}
