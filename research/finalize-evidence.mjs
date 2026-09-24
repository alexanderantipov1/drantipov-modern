import fs from 'node:fs/promises';
import { execFileSync } from 'node:child_process';

const dir = new URL('./sources/', import.meta.url);
const sources = [];
for (const file of (await fs.readdir(dir)).filter(f => f.endsWith('.md'))) {
  const body = await fs.readFile(new URL(file, dir), 'utf8');
  const date = body.match(/Last updated\s+([A-Za-z]+\s+\d{1,2},?\s+\d{4}|\d{4}-\d{2}-\d{2})/i)?.[1]
    || body.match(/(?:Published|Updated)\s*:\s*(\d{4}-\d{2}-\d{2})/i)?.[1] || 'Not extracted; see saved source';
  sources.push({key: file.replace(/\.md$/, ''), title: body.match(/^Title: (.+)$/m)?.[1], url: body.match(/^Source: (.+)$/m)?.[1], accessed: '2026-09-24', publicationDate: date, quality: 'Primary official documentation (authoritative for own platform/specification)', evidence: `research/sources/${file}`});
}
const publicResults = JSON.parse(await fs.readFile(new URL('./public-fetch-results.json', import.meta.url), 'utf8'));
sources.push(...publicResults.map(r => ({key: r.key, title: r.kind === 'public' ? `Public HTML sample: ${r.url}` : `Supplied audit linked ${r.kind}`, url: r.url, accessed: r.date, publicationDate: r.key.startsWith('1Nwu') ? '2026-08-28' : 'Not stated', quality: r.kind === 'public' ? 'First-party observed response; not clinical verification' : 'Contractor evidence; historical crawl, not independently validated in full', evidence: r.evidence})));
await fs.writeFile(new URL('./sources.json', import.meta.url), JSON.stringify(sources, null, 2));
const files = ['package.json', 'src/app/layout.tsx', 'src/app/ru/layout.tsx', 'src/components/HtmlLangSetter.tsx', 'next-sitemap.config.js', 'next.config.mjs', 'src/components/JsonLd.tsx'];
let baseline = `# Workspace baseline evidence\n\nRead from HEAD on 2026-09-24; other workers are editing the working tree concurrently.\n\nCommit: ${execFileSync('git', ['rev-parse', 'HEAD'], {encoding:'utf8'}).trim()}\nInstalled Next.js: ${execFileSync('node', ['-p', 'require("next/package.json").version'], {encoding:'utf8'}).trim()}\n`;
for (const file of files) {
  try { baseline += `\n## ${file}\n\n\`\`\`\n${execFileSync('git', ['show', `HEAD:${file}`], {encoding:'utf8',maxBuffer:4000000})}\n\`\`\`\n`; } catch {}
}
await fs.writeFile(new URL('workspace-baseline.md', dir), baseline);
console.log(`Registered ${sources.length} fetched sources; preserved baseline.`);