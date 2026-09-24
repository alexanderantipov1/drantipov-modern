import { finalizeMetadata } from "@/lib/seo-foundation";
import CalculatorPackages from "@/components/CalculatorPackages";

// Temporary internal preview page for the calculator funnel. Not linked, not in sitemap.
export const metadata = finalizeMetadata({ robots: { index: false, follow: false } }, "/calc-test");

export default function CalcTestPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      <CalculatorPackages initialSlug="all-on-468-per-arch" />
    </main>
  );
}
