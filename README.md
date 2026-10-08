# davidtung.net

Personal site of David Tung Phan — *Simple & More X10*. Lattice-inspired redesign, bilingual (VI/EN), fully static.

## Stack

- **Next.js 16** (App Router, `output: "export"`) + TypeScript
- **Tailwind CSS v4** — brand tokens in `src/app/globals.css` (ink black + logo orange `#F95B00`, light/dark)
- **Motion** (`motion/react`) for animation, **Lenis** for smooth scroll; respects `prefers-reduced-motion`
- Markdown content via `gray-matter` + `marked`

## Development

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # static site in ./out
npm run typecheck
```

## Bilingual routing

Vietnamese is the default at `/…`, English lives under `/en/…` (same URLs as the previous site).
Each locale has its own root layout so `<html lang>` is correct:

- `src/app/(vi)/…` and `src/app/(en)/en/…` are thin route files
- Shared page components live in `src/views/`
- UI strings: `src/i18n/dictionaries/{vi,en}.ts` (the EN file is type-checked against VI)

## Content

| What | Where |
| --- | --- |
| Blog posts | `content/blog/{vi,en}/<slug>.md` — same slug in both languages; a post may exist in one language only |
| Playbooks | `content/playbooks/{vi,en}/<slug>.md` + PDF in `public/playbooks/` |
| Images | `public/blog/<slug>/*.webp`, `public/playbooks/*.webp` |
| Case studies | `src/content/projects.ts` |
| Hermes / About copy, client names, tech stack | `src/content/pages.ts` |

Blog and playbook content was imported from the old Astro site with `scripts/import-old-site.py` (images converted to WebP, max 1600px). Re-run it to sync again:

```bash
git clone --depth 1 https://github.com/thanhtungdp/thanhtung-website ../thanhtung-website
python3 scripts/import-old-site.py ../thanhtung-website .
```

Interactive blocks go in Markdown as `<div data-embed="Name"></div>` and are mapped in `src/components/blog/Embed.tsx`.

Blog frontmatter: `title`, `description`, `date`, optional `updated`, `image`, `tags`.
Playbook frontmatter adds `series`, `pages`, `pdf`, `summary`, `keyTakeaway`, `toc`, `topic`, `audience`, `tint`.

## Booking survey (`/booking/`)

A Typeform-style survey (one question per screen, Enter to continue, letter keys for choices, draft saved in the browser). Questions live in `src/content/booking.ts`.

Optional environment variables (set in Vercel → Settings → Environment Variables, then redeploy):

| Variable | What it does |
| --- | --- |
| `NEXT_PUBLIC_BOOKING_ENDPOINT` | URL that receives answers as JSON via `POST` — e.g. a [Formspree](https://formspree.io) form endpoint `https://formspree.io/f/xxxx`. Without it, the survey opens the visitor's email app with the answers pre-filled to `thanhtung@simplamo.com`. |
| `NEXT_PUBLIC_CALENDAR_URL` | Optional Cal.com / Calendly link shown on the thank-you screen. |

## Deploy (Vercel)

Import the repo in Vercel — the Next.js preset detects `output: "export"` automatically. `vercel.json` only adds redirects from the old `/solutions/` page.
