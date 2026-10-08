# davidtung.net — notes for contributors and AI assistants

See `README.md` for stack, routing and content locations.

## Design rules

- **Do not use the "dash + uppercase label" eyebrow pattern** — a short orange
  line followed by an orange, letter-spaced, uppercase label above a heading
  (e.g. `— ĐỘI NGŨ AI TỰ CHỦ CHO SOLO CEO`). It was removed site-wide at the
  owner's request. Headings stand on their own; if a section needs a tag, use
  the rounded tinted pill (`rounded-full bg-tint-* px-3 py-1`) sparingly.
- Brand colors come from the logo: ink black and orange `--brand` (#F95B00).
  Use the tokens in `src/app/globals.css`, never hard-coded hex values.
- Mobile first: keep phone padding tight (`py-12` sections, `pt-24` heroes,
  ~2rem display headings) and scale up with `sm:`. The floating tab bar must
  fit the viewport width.
- Prototypes/illustrations show sample data; keep the real numbers in copy
  (`src/content/*`) only.
