---
name: next.config.mjs city redirect slugs
description: Why legacy location redirect slugs are hardcoded and must be kept in sync with cities.ts
---

`next.config.mjs` cannot `import` TypeScript files — Node throws `ERR_UNKNOWN_FILE_EXTENSION` for `.ts` at config-load time.

**Rule:** `LEGACY_CITY_REDIRECTS` in `next.config.mjs` (308 redirects from old `/locations/[city]` to `/locations/ca/[city]`) hardcodes the CA city slugs. These must be kept in sync by hand with the city slugs defined in `src/constants/cities.ts`.

**Why:** the location URL structure was migrated from `/locations/[city]` to `/locations/[state]/[city]`; old URLs stay alive via 308. If a city is added/renamed in `cities.ts` but not mirrored in the config, its legacy URL silently 404s instead of redirecting.

**How to apply:** any change to city slugs in `cities.ts` must be mirrored in `LEGACY_CITY_REDIRECTS`. A small assertion/test comparing the two lists would prevent drift.
