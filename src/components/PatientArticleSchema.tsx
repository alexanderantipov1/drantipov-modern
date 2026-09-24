import { Children, cloneElement, isValidElement, type ReactElement, type ReactNode } from "react";
import { getFAQSchema, getWebPageSchema, structuredDataScript } from "@/lib/structured-data";

type Props = { children?: ReactNode; dangerouslySetInnerHTML?: { __html: string }; type?: string };
type Entity = Record<string, unknown>;
const SITE = "https://www.drantipov.com";

/** Plain text from the actual server-rendered JSX, including inline links/emphasis. */
function text(node: ReactNode): string {
  if (typeof node === "string" || typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(text).join("");
  return isValidElement<Props>(node) ? text(node.props.children) : "";
}
const compact = (value: string) => value.replace(/\s+/g, " ").trim();

/**
 * Legacy hand-authored patient guides carry duplicated JSON-LD strings.
 * This server-only boundary preserves all visible JSX and treats it as the
 * source of truth for headline and FAQs. It replaces, rather than adds to,
 * the legacy scripts, preventing stale Q&A and scholarly types from escaping.
 * It never calls child components or accesses browser/document state.
 */
export function patientArticleData(children: ReactNode, path: string) {
  const entities: Entity[] = [];
  const faqs: { question: string; answer: string }[] = [];
  let title = "";
  let current: { question: string; answer: string } | undefined;
  function collectFaq(node: ReactNode) {
    Children.forEach(node, (child) => {
      if (!isValidElement<Props>(child)) return;
      if (child.type === "h3") {
        current = { question: compact(text(child.props.children)), answer: "" };
        faqs.push(current);
      } else if (current && (child.type === "p" || child.type === "ul" || child.type === "ol")) {
        current.answer = compact(`${current.answer} ${text(child.props.children)}`);
        return;
      }
      collectFaq(child.props.children);
    });
  }
  function visit(node: ReactNode) {
    let nextIsFaqContainer = false;
    Children.forEach(node, (child) => {
      if (!isValidElement<Props>(child)) return;
      if (nextIsFaqContainer) {
        current = undefined;
        collectFaq(child);
        nextIsFaqContainer = false;
      }
      if (child.type === "script" && child.props.type === "application/ld+json") {
        const raw = child.props.dangerouslySetInnerHTML?.__html;
        if (!raw) throw new Error(`Missing article JSON-LD: ${path}`);
        const data = JSON.parse(raw);
        entities.push(...(Array.isArray(data) ? data : [data]));
        return;
      }
      if (child.type === "h1") title = compact(text(child.props.children));
      if (child.type === "h2") {
        nextIsFaqContainer = /frequently asked|частые вопросы|часто задаваемые|faq/i.test(text(child.props.children));
      }
      visit(child.props.children);
    });
  }
  visit(children);
  const original = entities.find((entity) => /Article$/.test(String(entity["@type"])));
  if (!original || !title) throw new Error(`Patient article requires visible H1 and article data: ${path}`);
  const locale = path.startsWith("/ru/") ? "ru" : "en";
  const url = `${SITE}${path}`;
  const article: Entity = {
    ...original,
    "@type": "Article",
    "@id": `${url}#article`,
    headline: title,
    url,
    inLanguage: locale,
    author: { "@type": "Person", "@id": `${SITE}/#physician` },
    publisher: { "@id": `${SITE}/#organization` },
    mainEntityOfPage: { "@id": `${url}#webpage` },
  };
  delete article.aggregateRating;
  delete article.review;
  // These guides show a back link, not the four-level breadcrumb in old JSON-LD.
  // Other legacy entities are intentionally not inherited without visible evidence.
  return [
    getWebPageSchema({ path, name: title, locale }),
    article,
    ...(faqs.length ? [getFAQSchema(faqs.filter((faq) => faq.question && faq.answer))] : []),
  ];
}

function withoutLegacyScripts(children: ReactNode): ReactNode {
  return Children.map(children, (child) => {
    if (!isValidElement<Props>(child)) return child;
    if (child.type === "script" && child.props.type === "application/ld+json") return null;
    if (child.props.children === undefined) return child;
    return cloneElement(child as ReactElement<Props>, {}, withoutLegacyScripts(child.props.children));
  });
}

export default function PatientArticleSchema({ children, path }: { children: ReactNode; path: string }) {
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={structuredDataScript(patientArticleData(children, path))} />
    {withoutLegacyScripts(children)}
  </>;
}