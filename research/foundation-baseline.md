# Multilingual foundation baseline

Reviewed the revised `Fusion_Dental_Implant_Center_—_RU_Technical_SEO_Audit_&_Remedi_1790187118945.pdf` with pdftotext (document reader failed). Its P0 requirements are reciprocal real translation clusters, self canonicals, deterministic initial language, and EN regression protection. Generic en/ru and English x-default retain the approved existing convention.

Source baseline (before foundation edits):
- Installed Next is **16.2.3**, React 19. Root layout hardcodes `lang="en"` and mounts a client HtmlLangSetter. RU layout incorrectly comments that the root resolves language from request pathname.
- Root canonical is already absent (correct); EN `about` has only en/x-default while RU about declares en/ru/x-default. `src/lib/seo.ts` explicitly assumes English-only. RU and EN dynamic city/case pages already exist.
- Both `src/app/sitemap.ts` and `public/sitemap.xml` exist. `postbuild: next-sitemap` recreates the competing public artifact and uses apex by default. Dynamic sitemap manually lists RU static routes and omits RU dynamic city/case detail coverage.
- Root metadata contains keywords and homepage OG URL/text inherited by children. Noindex declarations exist and must be retained.
- Relevant memories: canonical-domain-www, nextjs-metadata-alternates-leak, ru-bilingual-subtree, sitemap-static-shadow. Older English-only/client-lang/postbuild advice is superseded by this implementation.

Architecture research: Next App Router supports multiple root layouts in route groups without changing public paths; each root emits html/body. Navigation between roots is a full page load. This avoids request `headers()`/cookies, middleware rewrites, user-agent variation, and opting static pages into dynamic rendering. Reference: https://nextjs.org/docs/app/api-reference/file-conventions/route-groups and https://nextjs.org/docs/app/api-reference/file-conventions/layout#root-layout .

This is source evidence, not a baseline production crawl or a claim of live 200/indexability validation. Main agent owns running-app checks. Deployment gate: representative home/service/article/location/case/funnel EN and RU raw HTML, mobile/desktop, cookie/cache variants, no-JS, canonical reciprocity, sitemap/noindex, and conversion smoke tests.