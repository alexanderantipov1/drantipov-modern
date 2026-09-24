// One-time, syntax-aware migration. Not part of builds. Run only on the pre-migration tree.
const fs = require("node:fs");
const path = require("node:path");
const ts = require("typescript");
const app = "src/app";
if (fs.existsSync(`${app}/(en)`)) throw new Error("Foundation migration already applied");
const walk = (dir) => fs.readdirSync(dir, { withFileTypes: true }).flatMap(e =>
  e.isDirectory() ? walk(path.join(dir, e.name)) : [path.join(dir, e.name)]);
const pages = walk(app).filter(f => f.endsWith("/page.tsx") && !f.includes("/api/"));
const routes = [];
let wrapped = 0;
for (const file of pages) {
  const source = fs.readFileSync(file, "utf8");
  const route = "/" + path.relative(app, path.dirname(file)).split(path.sep).join("/");
  const sf = ts.createSourceFile(file, source, ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX);
  const edits = [];
  let metadataFound = false;
  for (const statement of sf.statements) {
    if (ts.isVariableStatement(statement) && statement.modifiers?.some(m => m.kind === ts.SyntaxKind.ExportKeyword)) {
      for (const declaration of statement.declarationList.declarations) {
        if (declaration.name.getText(sf) !== "metadata" || !declaration.initializer) continue;
        metadataFound = true;
        const n = declaration.initializer;
        edits.push([n.getStart(sf), n.end, `finalizeMetadata(${n.getText(sf)}, ${JSON.stringify(route)})`]);
      }
    }
    if (ts.isFunctionDeclaration(statement) && statement.name?.text === "generateMetadata") {
      metadataFound = true;
      const visit = (n) => {
        if (ts.isReturnStatement(n) && n.expression) {
          const x = n.expression;
          // Empty metadata is the existing invalid-param branch; leave it alone.
          if (ts.isObjectLiteralExpression(x) && x.properties.length === 0) return;
          edits.push([x.getStart(sf), x.end, `finalizeMetadata(${x.getText(sf)}${route.includes("[") ? "" : `, ${JSON.stringify(route)}`})`]);
          return;
        }
        ts.forEachChild(n, visit);
      };
      if (statement.body) visit(statement.body);
    }
  }
  if (!route.includes("[") && metadataFound && !/index:\s*false|robots:\s*["'][^"']*noindex/.test(source)) routes.push(route);
  if (edits.length) {
    let output = source;
    for (const [start, end, replacement] of edits.sort((a, b) => b[0] - a[0])) {
      output = output.slice(0, start) + replacement + output.slice(end);
    }
    output = `import { finalizeMetadata } from "@/lib/seo-foundation";\n` + output;
    fs.writeFileSync(file, output);
    wrapped++;
  } else if (metadataFound) throw new Error(`Unprocessed metadata: ${file}`);
}
fs.writeFileSync("src/lib/seo-route-inventory.json", JSON.stringify(routes.sort(), null, 2) + "\n");
fs.mkdirSync(`${app}/(en)`);
for (const entry of fs.readdirSync(app, { withFileTypes: true })) {
  if (entry.isDirectory() && !["ru", "api", "(en)"].includes(entry.name)) {
    fs.renameSync(`${app}/${entry.name}`, `${app}/(en)/${entry.name}`);
  }
}
for (const file of ["page.tsx", "not-found.tsx"]) fs.renameSync(`${app}/${file}`, `${app}/(en)/${file}`);
fs.copyFileSync(`${app}/(en)/not-found.tsx`, `${app}/ru/not-found.tsx`);
fs.renameSync(`${app}/layout.tsx`, "src/components/SiteDocument.tsx");
console.log(`Wrapped metadata in ${wrapped} pages; inventoried ${routes.length} static indexable routes; moved EN routes without changing URLs.`);