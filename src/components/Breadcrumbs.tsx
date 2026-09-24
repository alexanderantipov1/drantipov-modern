import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

export interface BreadcrumbItem {
  name: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
  locale?: "en" | "ru";
}

/**
 * Visible, accessible breadcrumbs for leaf pages.
 * The corresponding BreadcrumbList JSON-LD should be emitted separately
 * via getBreadcrumbSchema() from @/lib/structured-data.
 */
export default function Breadcrumbs({ items, className = "", locale = "en" }: BreadcrumbsProps) {
  const isRu = locale === "ru" || items.some((item) => item.href === "/ru" || item.href?.startsWith("/ru/"));
  return (
    <nav
      aria-label={isRu ? "Навигационная цепочка" : "Breadcrumb"}
      className={`text-sm ${className}`}
    >
      <ol className="flex flex-wrap items-center gap-1.5">
        <li className="flex items-center">
          <Link
            href={isRu ? "/ru" : "/"}
            className="flex items-center gap-1 text-neutral-500 hover:text-primary transition-colors"
          >
            <Home className="h-3.5 w-3.5" />
            <span className="sr-only sm:not-sr-only">{isRu ? "Главная" : "Home"}</span>
          </Link>
        </li>
        {items.map((item, idx) => {
          const isLast = idx === items.length - 1;
          return (
            <li key={item.name} className="flex items-center gap-1.5">
              <ChevronRight className="h-3.5 w-3.5 text-neutral-300" aria-hidden="true" />
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className="text-neutral-500 hover:text-primary transition-colors"
                >
                  {item.name}
                </Link>
              ) : (
                <span
                  className="text-neutral-900 font-medium"
                  aria-current={isLast ? "page" : undefined}
                >
                  {item.name}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
