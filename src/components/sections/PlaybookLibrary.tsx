"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { ChevronDown, Search, SlidersHorizontal, Trash2 } from "lucide-react";
import { useMemo, useState } from "react";
import type { Dictionary } from "@/i18n";
import { localePath, type Locale } from "@/i18n/config";
import type { Entry } from "@/lib/content";
import { BookCover } from "@/components/mockups/BookCover";

type Labels = Dictionary["playbookPage"] & { pages: string };

export function count(list: Entry[], pick: (e: Entry) => string[]) {
  const m = new Map<string, number>();
  list.forEach((e) => pick(e).forEach((k) => m.set(k, (m.get(k) ?? 0) + 1)));
  return Array.from(m.entries()).sort((a, b) => b[1] - a[1]);
}

export function FilterGroup({
  title,
  items,
  selected,
  onToggle,
  defaultOpen = true,
}: {
  title: string;
  items: [string, number][];
  selected: Set<string>;
  onToggle: (k: string) => void;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="rounded-2xl border border-line bg-elev">
      <button type="button" onClick={() => setOpen((v) => !v)} aria-expanded={open} className="flex w-full items-center justify-between px-4 py-3 text-sm font-semibold">
        {title}
        <ChevronDown className={`size-4 transition-transform ${open ? "rotate-180" : ""}`} aria-hidden="true" />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.ul initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }} className="overflow-hidden">
            <div className="grid gap-0.5 px-2 pb-3">
              {items.map(([k, n]) => (
                <li key={k}>
                  <label className="flex cursor-pointer items-center gap-2.5 rounded-lg px-2 py-1.5 text-sm hover:bg-sunken">
                    <input type="checkbox" checked={selected.has(k)} onChange={() => onToggle(k)} className="size-4 rounded accent-[var(--brand)]" />
                    <span className="flex-1">{k}</span>
                    <span className="text-xs text-subtle tabular-nums">{n}</span>
                  </label>
                </li>
              ))}
            </div>
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}

export function PlaybookCard2({ pb, locale, pagesLabel }: { pb: Entry; locale: Locale; pagesLabel: string }) {
  return (
    <Link href={localePath(locale, `/playbooks/${pb.slug}/`)} className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-elev p-2 transition-shadow duration-500 hover:shadow-[0_20px_50px_-25px_rgb(0_0_0/0.35)]">
      <div className="overflow-hidden rounded-xl">
        <BookCover entry={pb} />
      </div>
      <div className="flex flex-1 flex-col p-3 pt-4">
        <div className="flex flex-wrap items-center gap-1.5">
          {pb.topic && <span className="rounded-full bg-tint-mint px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider">{pb.topic}</span>}
          <span className="text-[11px] font-semibold text-subtle">
            {pb.pages} {pagesLabel}
          </span>
        </div>
        <h3 className="mt-2 text-lg font-bold leading-snug tracking-tight transition-colors group-hover:text-brand">{pb.title}</h3>
      </div>
    </Link>
  );
}

export function PlaybookLibrary({ list, locale, t }: { list: Entry[]; locale: Locale; t: Labels }) {
  const [q, setQ] = useState("");
  const [topics, setTopics] = useState<Set<string>>(new Set());
  const [aud, setAud] = useState<Set<string>>(new Set());
  const [mobileFilters, setMobileFilters] = useState(false);

  const topicCounts = useMemo(() => count(list, (e) => (e.topic ? [e.topic] : [])), [list]);
  const audCounts = useMemo(() => count(list, (e) => e.audience ?? []), [list]);

  const toggle = (set: Set<string>, setter: (s: Set<string>) => void) => (k: string) => {
    const next = new Set(set);
    if (next.has(k)) next.delete(k);
    else next.add(k);
    setter(next);
  };

  const needle = q.trim().toLowerCase();
  const shown = list.filter(
    (e) =>
      (!needle || `${e.title} ${e.description}`.toLowerCase().includes(needle)) &&
      (topics.size === 0 || (e.topic && topics.has(e.topic))) &&
      (aud.size === 0 || (e.audience ?? []).some((a) => aud.has(a))),
  );
  const filtered = needle || topics.size || aud.size;
  const reset = () => {
    setQ("");
    setTopics(new Set());
    setAud(new Set());
  };

  const filters = (
    <div className="grid gap-3">
      <label className="relative block">
        <span className="sr-only">{t.search}</span>
        <input
          type="search"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder={t.search}
          className="h-12 w-full rounded-2xl border border-line bg-elev pl-4 pr-10 text-sm outline-none transition-colors placeholder:text-subtle focus:border-brand"
        />
        <Search className="pointer-events-none absolute right-4 top-1/2 size-4 -translate-y-1/2 text-subtle" aria-hidden="true" />
      </label>
      <FilterGroup title={t.topics} items={topicCounts} selected={topics} onToggle={toggle(topics, setTopics)} />
      <FilterGroup title={t.audiences} items={audCounts} selected={aud} onToggle={toggle(aud, setAud)} />
      <div className="flex items-center justify-between px-1 pt-2 text-sm text-subtle">
        <span>
          {shown.length} {t.of} {list.length} {t.results}
        </span>
        {filtered ? (
          <button type="button" onClick={reset} className="inline-flex items-center gap-1.5 rounded-full bg-sunken px-3 py-1.5 font-semibold text-fg">
            <Trash2 className="size-3.5" aria-hidden="true" />
            {t.reset}
          </button>
        ) : null}
      </div>
    </div>
  );

  return (
    <div className="grid gap-8 lg:grid-cols-[260px_1fr]">
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
            {shown.length}/{list.length}
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
            {shown.map((pb) => (
              <motion.div
                key={pb.slug}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              >
                <PlaybookCard2 pb={pb} locale={locale} pagesLabel={t.pages} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        {shown.length === 0 && (
          <div className="grid place-items-center rounded-3xl border border-dashed border-line py-20 text-center">
            <p className="text-xl font-bold">{t.empty}</p>
            <p className="mt-2 text-muted">{t.emptyHint}</p>
            <button type="button" onClick={reset} className="mt-6 rounded-full bg-invert px-5 py-2.5 text-sm font-semibold text-invert-fg">
              {t.reset}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
