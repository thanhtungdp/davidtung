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
| Blog posts | `content/blog/{vi,en}/<slug>.md` — use the same slug in both languages |
| Playbooks | `content/playbooks/{vi,en}/<slug>.md` (`series`, `pages` in frontmatter) |
| Case studies | `src/content/projects.ts` |
| Hermes / About copy, client names, tech stack | `src/content/pages.ts` |

Blog and playbook bodies are currently **placeholders** — replace the Markdown files with the real articles.

Frontmatter:

```yaml
---
title: "…"
description: "…"
date: 2026-07-06
tags: ["AI", "Chiến lược"]
---
```

## Deploy (Vercel)

Import the repo in Vercel — the Next.js preset detects `output: "export"` automatically. No env vars needed.
