import { finalizeMetadata } from "@/lib/seo-foundation";
import ServicePageTemplate, { buildServiceMetadata } from "@/components/expertise/ServicePageTemplate";
import { servicePages } from "@/constants/servicePages";

const data = servicePages["facial-cosmetic"];

export const metadata = finalizeMetadata(buildServiceMetadata(data), "/expertise/facial-cosmetic");

export default function Page() {
  return <ServicePageTemplate data={data} />;
}
