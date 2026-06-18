---
name: Schema.org Physician is a business type, not a person
description: Why JSON-LD on this site models the doctors as Person, not Physician
---

# Model humans as `Person`, never `Physician`, in JSON-LD

**Rule:** In Schema.org, `Physician` is a *business/place* type (subtype of
`MedicalBusiness` + `MedicalOrganization`, which are `LocalBusiness`). It is NOT
a subtype of `Person`. So a human doctor node typed `Physician` that carries
Person props (givenName, familyName, jobTitle, alumniOf, affiliation, worksFor)
throws "property not recognized" under BOTH Local Business and Organization
report groups (doubling counts), AND triggers "address required" because it's a
LocalBusiness. Model the human as `@type: "Person"` instead.

**Also:** nested org stubs used in `affiliation`/`worksFor` must not be
`Hospital` or `MedicalBusiness` (both LocalBusiness -> need address). Use
`MedicalOrganization` (Organization, no address required). `NGO`,
`EducationalOrganization` are fine (Organization subtypes). `Person` does NOT
support `medicalSpecialty` (that's a MedicalBusiness/Physician prop) — fold
specialties into `knowsAbout`.

**ItemList:** every `ListItem` needs `item` (full entity) OR `url`, or GSC flags
a carousel error. On-page lists use the all-in-one `item` form.

**Why:** this was the root cause of ~1,421 GSC structured-data errors across 54
pages (June 2026). The site-wide graph is in `src/components/JsonLd.tsx`
(rendered via layout); the top-level *practice* node correctly stays
`[Dentist, MedicalBusiness, LocalBusiness]` WITH address — only the human nodes
became Person.

**How to apply:** when editing any JSON-LD on drantipov.com, keep doctors as
Person, org references as MedicalOrganization/Organization, and validate with
Google Rich Results Test before relying on GSC recrawl. `@id` anchors
(`#physician`, `#physician-kahwach`) are referenced as `provider` by
getCaseSchema — keep them stable.
