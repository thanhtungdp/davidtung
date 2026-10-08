import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";
import { formatDate, localePath, type Locale } from "@/i18n/config";
import type { Entry } from "@/lib/content";
import { Reveal } from "@/components/motion/Reveal";

export function PostCard({ post, locale, readLabel, minutesLabel, i = 0 }: { post: Entry; locale: Locale; readLabel: string; minutesLabel: string; i?: number }) {
  return (
    <Reveal delay={(i % 3) * 0.08} className="h-full">
      <Link href={localePath(locale, `/blog/${post.slug}/`)} className="card group flex h-full flex-col p-6 transition-all duration-500 hover:-translate-y-1 hover:border-brand/40 sm:p-7">
        <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-subtle">
          <time dateTime={post.date}>{formatDate(post.date, locale)}</time>
          <span aria-hidden="true">·</span>
          <span>
            {post.readingMinutes} {minutesLabel}
          </span>
        </div>
        <h3 className="mt-4 text-xl font-extrabold leading-snug tracking-tight transition-colors group-hover:text-brand">{post.title}</h3>
        <p className="mt-3 line-clamp-3 leading-relaxed text-muted">{post.description}</p>
        <div className="mt-auto flex items-center justify-between pt-6">
          <div className="flex flex-wrap gap-1.5">
            {post.tags.slice(0, 2).map((t) => (
              <span key={t} className="rounded-full bg-sunken px-2.5 py-1 text-xs font-semibold text-muted">
                {t}
              </span>
            ))}
          </div>
          <span className="flex items-center gap-1 text-sm font-semibold text-brand">
            {readLabel}
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </span>
        </div>
      </Link>
    </Reveal>
  );
}

export function PlaybookCard({ pb, locale, readLabel, pagesLabel, i = 0 }: { pb: Entry; locale: Locale; readLabel: string; pagesLabel: string; i?: number }) {
  return (
    <Reveal delay={(i % 3) * 0.08} className="h-full">
      <Link
        href={localePath(locale, `/playbooks/${pb.slug}/`)}
        className="group relative flex h-full flex-col overflow-hidden rounded-[1.5rem] bg-invert p-7 text-invert-fg transition-transform duration-500 hover:-translate-y-1"
      >
        <span className="absolute -right-10 -top-10 size-40 rounded-full bg-brand/30 blur-2xl transition-transform duration-700 group-hover:scale-150" aria-hidden="true" />
        <div className="relative flex items-center justify-between text-xs font-bold uppercase tracking-widest">
          <span className="text-brand">{pb.series}</span>
          <span className="flex items-center gap-1 opacity-60">
            <BookOpen className="size-3.5" aria-hidden="true" />
            {pb.pages} {pagesLabel}
          </span>
        </div>
        <h3 className="relative mt-10 text-2xl font-extrabold leading-tight tracking-tight">{pb.title}</h3>
        <p className="relative mt-3 line-clamp-3 text-sm leading-relaxed opacity-70">{pb.description}</p>
        <span className="relative mt-auto flex items-center gap-1 pt-8 text-sm font-semibold">
          {readLabel}
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
        </span>
      </Link>
    </Reveal>
  );
}
