import ServicePageTemplate, { buildServiceMetadata } from "@/components/expertise/ServicePageTemplate";
import { servicePages } from "@/constants/servicePages";

const data = servicePages["snap-on-dentures"];

export const metadata = buildServiceMetadata(data);

export default function Page() {
  return <ServicePageTemplate data={data} />;
}
