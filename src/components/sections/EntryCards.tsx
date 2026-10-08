import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { formatDate, localePath, type Locale } from "@/i18n/config";
import type { Entry } from "@/lib/content";
import { Reveal } from "@/components/motion/Reveal";

export function PostCard({ post, locale, readLabel, minutesLabel, i = 0 }: { post: Entry; locale: Locale; readLabel: string; minutesLabel: string; i?: number }) {
  return (
    <Reveal delay={(i % 3) * 0.08} className="h-full">
      <Link href={localePath(locale, `/blog/${post.slug}/`)} className="card group flex h-full flex-col overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:border-brand/40">
        {post.image && (
          <div className="aspect-[16/9] overflow-hidden bg-sunken">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={post.image} alt="" loading="lazy" decoding="async" className="size-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
          </div>
        )}
        <div className="flex flex-1 flex-col p-5 sm:p-6">
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
        </div>
      </Link>
    </Reveal>
  );
}
