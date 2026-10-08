import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { Marked } from "marked";
import type { Locale } from "@/i18n/config";

type Collection = "blog" | "playbooks";

export type Heading = { id: string; text: string };

export type Entry = {
  slug: string;
  locale: Locale;
  title: string;
  description: string;
  date: string;
  tags: string[];
  /** Playbook-only label, e.g. "SỔ TAY VẬN HÀNH 2026". */
  series?: string;
  pages?: number;
  topic?: string;
  audience?: string[];
  tint?: "orange" | "mint" | "lilac" | "butter" | "sky" | "rose";
  cover?: "arcs" | "steps" | "rings" | "grid" | "waves" | "dots";
  featured?: boolean;
  /** Cover image URL (blog hero image or playbook cover). */
  image?: string;
  updated?: string;
  /** Playbook PDF URL. */
  pdf?: string;
  summary?: string[];
  keyTakeaway?: string;
  toc?: { id: string; title: string; description?: string }[];
  readingMinutes: number;
};

/** Article body split around interactive embeds (`<div data-embed="Name"></div>` in Markdown). */
export type BodyPart = { type: "html"; html: string } | { type: "embed"; name: string };

export type EntryWithBody = Entry & { html: string; parts: BodyPart[]; headings: Heading[] };

const root = path.join(process.cwd(), "content");

export function slugify(text: string) {
  return text
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/đ/gi, "d")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function readFile(collection: Collection, locale: Locale, file: string) {
  const raw = fs.readFileSync(path.join(root, collection, locale, file), "utf8");
  const { data, content } = matter(raw);
  const words = content.split(/\s+/).filter(Boolean).length;
  const entry: Entry = {
    slug: file.replace(/\.md$/, ""),
    locale,
    title: data.title,
    description: data.description ?? "",
    date: new Date(data.date).toISOString(),
    tags: data.tags ?? [],
    series: data.series,
    pages: data.pages,
    topic: data.topic,
    audience: data.audience,
    tint: data.tint,
    cover: data.cover,
    featured: data.featured,
    image: data.image,
    updated: data.updated ? new Date(data.updated).toISOString() : undefined,
    pdf: data.pdf,
    summary: data.summary,
    keyTakeaway: data.keyTakeaway,
    toc: data.toc,
    readingMinutes: Math.max(1, Math.round(words / 220)),
  };
  return { entry, content };
}

function files(collection: Collection, locale: Locale) {
  const dir = path.join(root, collection, locale);
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir).filter((f) => f.endsWith(".md"));
}

export function getEntries(collection: Collection, locale: Locale): Entry[] {
  return files(collection, locale)
    .map((f) => readFile(collection, locale, f).entry)
    .sort((a, b) => +new Date(b.date) - +new Date(a.date));
}

export function getEntry(collection: Collection, locale: Locale, slug: string): EntryWithBody | null {
  const file = `${slug}.md`;
  if (!files(collection, locale).includes(file)) return null;
  const { entry, content } = readFile(collection, locale, file);

  const headings: Heading[] = [];
  const seen = new Map<string, number>();
  const marked = new Marked({
    renderer: {
      heading({ tokens, depth }) {
        const text = this.parser.parseInline(tokens);
        const plain = text.replace(/<[^>]+>/g, "");
        const base = slugify(plain) || "section";
        const n = seen.get(base) ?? 0;
        seen.set(base, n + 1);
        const id = n ? `${base}-${n}` : base;
        if (depth === 2) headings.push({ id, text: plain });
        return `<h${depth} id="${id}">${text}</h${depth}>`;
      },
      image({ href, title, text }) {
        const t = title ? ` title="${title}"` : "";
        return `<img src="${href}" alt="${text}"${t} loading="lazy" decoding="async" />`;
      },
    },
  });
  const html = marked.parse(content, { async: false });
  const parts: BodyPart[] = html
    .split(/<div data-embed="([A-Za-z]+)"><\/div>/)
    .map((chunk, i) => (i % 2 ? { type: "embed" as const, name: chunk } : { type: "html" as const, html: chunk }))
    .filter((p) => p.type === "embed" || p.html.trim());
  return { ...entry, html, parts, headings };
}

export function getSlugs(collection: Collection, locale: Locale) {
  return files(collection, locale).map((f) => f.replace(/\.md$/, ""));
}
