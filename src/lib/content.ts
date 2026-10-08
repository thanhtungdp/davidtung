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
  readingMinutes: number;
};

export type EntryWithBody = Entry & { html: string; headings: Heading[] };

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
  const marked = new Marked({
    renderer: {
      heading({ tokens, depth }) {
        const text = this.parser.parseInline(tokens);
        const plain = text.replace(/<[^>]+>/g, "");
        const id = slugify(plain);
        if (depth === 2) headings.push({ id, text: plain });
        return `<h${depth} id="${id}">${text}</h${depth}>`;
      },
    },
  });
  const html = marked.parse(content, { async: false });
  return { ...entry, html, headings };
}

export function getSlugs(collection: Collection, locale: Locale) {
  return files(collection, locale).map((f) => f.replace(/\.md$/, ""));
}
