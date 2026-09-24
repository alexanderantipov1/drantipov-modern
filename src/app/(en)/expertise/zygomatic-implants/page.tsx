import { finalizeMetadata } from "@/lib/seo-foundation";
import ServicePageTemplate, { buildServiceMetadata } from "@/components/expertise/ServicePageTemplate";
import { servicePages } from "@/constants/servicePages";

const data = servicePages["zygomatic-implants"];

export const metadata = finalizeMetadata(buildServiceMetadata(data), "/expertise/zygomatic-implants");

export default function Page() {
  return <ServicePageTemplate data={data} />;
}
