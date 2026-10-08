"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { Search, SlidersHorizontal, Trash2 } from "lucide-react";
import { useMemo, useState } from "react";
import type { Dictionary } from "@/i18n";
import { formatDate, localePath, type Locale } from "@/i18n/config";
import type { Entry } from "@/lib/content";
import { count, FilterGroup } from "./PlaybookLibrary";

const PAGE = 12;
const tagTint = ["bg-tint-mint", "bg-tint-lilac", "bg-tint-orange", "bg-tint-sky", "bg-tint-butter"];

type Labels = Dictionary["blog"] & Pick<Dictionary["playbookPage"], "of" | "results" | "reset" | "filters" | "empty" | "emptyHint">;

/** Lattice-blog card: image with a date chip, category pill, title only. */
export function BlogCard({ post, locale, tints }: { post: Entry; locale: Locale; tints: Record<string, string> }) {
  return (
    <Link href={localePath(locale, `/blog/${post.slug}/`)} className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-elev p-2 transition-shadow duration-500 hover:shadow-[0_20px_50px_-25px_rgb(0_0_0/0.35)]">
      <div className="relative aspect-[16/9] overflow-hidden rounded-xl bg-sunken">
        {post.image && (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={post.image} alt="" loading="lazy" decoding="async" className="size-full object-cover transition-transform duration-700 group-hover:scale-[1.04]" />
        )}
        <time dateTime={post.date} className="absolute left-2 top-2 rounded-full bg-elev/90 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-muted backdrop-blur">
          {formatDate(post.date, locale)}
        </time>
      </div>
      <div className="flex flex-1 flex-col p-3 pt-4">
        {post.tags[0] && <span className={`w-fit rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider ${tints[post.tags[0]] ?? "bg-sunken"}`}>{post.tags[0]}</span>}
        <h3 className="mt-2 line-clamp-3 text-[17px] font-bold leading-snug tracking-tight transition-colors group-hover:text-brand">{post.title}</h3>
      </div>
    </Link>
  );
}

/** lattice.com/blog layout: sidebar search + category/year filters beside a 3-column grid with "load more". */
export function BlogLibrary({ posts, locale, t }: { posts: Entry[]; locale: Locale; t: Labels }) {
  const [q, setQ] = useState("");
  const [cats, setCats] = useState<Set<string>>(new Set());
  const [years, setYears] = useState<Set<string>>(new Set());
  const [limit, setLimit] = useState(PAGE);
  const [mobileFilters, setMobileFilters] = useState(false);

  const yearOf = (e: Entry) => e.date.slice(0, 4);
  const catCounts = useMemo(() => count(posts, (e) => e.tags), [posts]);
  const yearCounts = useMemo(() => count(posts, (e) => [yearOf(e)]).sort((a, b) => b[0].localeCompare(a[0])), [posts]);
  const tints = useMemo(() => Object.fromEntries(catCounts.map(([k], i) => [k, tagTint[i % tagTint.length]])), [catCounts]);

  const toggle = (set: Set<string>, setter: (s: Set<string>) => void) => (k: string) => {
    const next = new Set(set);
    if (next.has(k)) next.delete(k);
    else next.add(k);
    setter(next);
    setLimit(PAGE);
  };

  const needle = q.trim().toLowerCase();
  const filtered = posts.filter(
    (e) =>
      (!needle || `${e.title} ${e.description}`.toLowerCase().includes(needle)) &&
      (cats.size === 0 || e.tags.some((x) => cats.has(x))) &&
      (years.size === 0 || years.has(yearOf(e))),
  );
  const shown = filtered.slice(0, limit);
  const active = needle || cats.size || years.size;
  const reset = () => {
    setQ("");
    setCats(new Set());
    setYears(new Set());
    setLimit(PAGE);
  };

  const filters = (
    <div className="grid gap-3">
      <label className="relative block">
        <span className="sr-only">{t.search}</span>
        <input
          type="search"
          value={q}
          onChange={(e) => {
            setQ(e.target.value);
            setLimit(PAGE);
          }}
          placeholder={t.search}
          className="h-12 w-full rounded-2xl border border-line bg-elev pl-4 pr-10 text-base outline-none transition-colors placeholder:text-subtle focus:border-brand sm:text-sm"
        />
        <Search className="pointer-events-none absolute right-4 top-1/2 size-4 -translate-y-1/2 text-subtle" aria-hidden="true" />
      </label>
      <FilterGroup title={t.categories} items={catCounts} selected={cats} onToggle={toggle(cats, setCats)} />
      <FilterGroup title={t.year} items={yearCounts} selected={years} onToggle={toggle(years, setYears)} defaultOpen={false} />
      <div className="flex items-center justify-between px-1 pt-2 text-sm text-subtle">
        <span>
          {filtered.length} {t.of} {posts.length} {t.results}
        </span>
        {active ? (
          <button type="button" onClick={reset} className="inline-flex items-center gap-1.5 rounded-full bg-sunken px-3 py-1.5 font-semibold text-fg">
            <Trash2 className="size-3.5" aria-hidden="true" />
            {t.reset}
          </button>
        ) : null}
      </div>
    </div>
  );

  return (
    <div className="grid gap-8 lg:grid-cols-[240px_1fr]">
      <aside>
        <button
          type="button"
          onClick={() => setMobileFilters((v) => !v)}
          aria-expanded={mobileFilters}
          className="flex h-12 w-full items-center justify-between rounded-2xl border border-line bg-elev px-4 text-sm font-semibold lg:hidden"
        >
          <span className="flex items-center gap-2">
            <SlidersHorizontal className="size-4" aria-hidden="true" /> {t.filters}
          </span>
          <span className="text-subtle">
            {filtered.length}/{posts.length}
          </span>
        </button>
        <AnimatePresence initial={false}>
          {mobileFilters && (
            <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden lg:hidden">
              <div className="pt-3">{filters}</div>
            </motion.div>
          )}
        </AnimatePresence>
        <div className="sticky top-28 hidden lg:block">{filters}</div>
      </aside>

      <div>
        <motion.div layout className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {shown.map((post) => (
              <motion.div
                key={post.slug}
                layout
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              >
                <BlogCard post={post} locale={locale} tints={tints} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        {filtered.length === 0 && (
          <div className="grid place-items-center rounded-3xl border border-dashed border-line py-20 text-center">
            <p className="text-xl font-bold">{t.empty}</p>
            <p className="mt-2 text-muted">{t.emptyHint}</p>
            <button type="button" onClick={reset} className="mt-6 rounded-full bg-invert px-5 py-2.5 text-sm font-semibold text-invert-fg">
              {t.reset}
            </button>
          </div>
        )}
        {filtered.length > limit && (
          <div className="mt-10 flex justify-center">
            <button type="button" onClick={() => setLimit((l) => l + PAGE)} className="h-11 rounded-full bg-sunken px-6 text-sm font-semibold transition-colors hover:bg-line">
              {t.more} ({filtered.length - limit})
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
