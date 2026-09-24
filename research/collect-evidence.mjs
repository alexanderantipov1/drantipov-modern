import fs from 'node:fs/promises';

const out = new URL('./sources/', import.meta.url);
const names = await fs.readdir(out);
const auditName = names.find(n => n.startsWith('Базовы') && n.endsWith('.txt'));
const audit = await fs.readFile(new URL(auditName, out), 'utf8');
const targets = [...new Map([...audit.matchAll(/docs\.google\.com\/(spreadsheets|document)\/d\/([A-Za-z0-9_-]+)/g)].map(m => [m[2], {
  key: m[2],
  kind: m[1],
  url: `https://docs.google.com/${m[1]}/d/${m[2]}/export?format=${m[1] === 'spreadsheets' ? 'csv' : 'txt'}`,
}])).values()];
const paths = ['/', '/ru', '/ru/contact', '/ru/expertise/full-arch-implants', '/expertise/full-arch-implants', '/ru/locations/sacramento', '/robots.txt', '/sitemap.xml', '/ru/legal/privacy-policy', '/locations/ca/loomis', '/ru/locations/ca/roseville', '/smile-gallery'];
for (const [i, path] of paths.entries()) {
  targets.push({key: `live-${i}`, kind: 'public', url: `https://www.drantipov.com${path}`});
}
const results = [];
for (let i = 0; i < targets.length; i += 5) {
  await Promise.all(targets.slice(i, i + 5).map(async target => {
    try {
      const response = await fetch(target.url, {signal: AbortSignal.timeout(35000)});
      const body = await response.text();
      const file = `${target.key}.${target.kind === 'spreadsheets' ? 'csv' : target.kind === 'public' ? 'html' : 'txt'}`;
      await fs.writeFile(new URL(file, out), body);
      results.push({...target, status: response.status, finalUrl: response.url, contentType: response.headers.get('content-type'), hsts: response.headers.get('strict-transport-security'), date: new Date().toISOString(), evidence: `research/sources/${file}`, bytes: body.length, lang: body.match(/<html[^>]*lang="([^"]+)"/)?.[1], title: body.match(/<title>([^<]+)/)?.[1], canonicals: [...body.matchAll(/<link[^>]*rel="canonical"[^>]*>/g)].map(m=>m[0]), alternates: [...body.matchAll(/<link[^>]*hrefLang[^>]*>/gi)].map(m=>m[0])});
    } catch (error) {
      results.push({...target, error: error.message, date: new Date().toISOString()});
    }
  }));
}
await fs.writeFile(new URL('../public-fetch-results.json', out), JSON.stringify(results, null, 2));
console.log(JSON.stringify(results.map(({key,status,error,bytes,lang,title,hsts,canonicals,alternates})=>({key,status,error,bytes,lang,title,hsts,canonicals,alternates})), null, 2));