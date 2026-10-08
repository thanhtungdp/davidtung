import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { getDictionary } from "@/i18n";
import { formatDate, localePath, type Locale } from "@/i18n/config";
import { getEntries, type EntryWithBody } from "@/lib/content";
import { Reveal } from "@/components/motion/Reveal";
import { ScrollProgress } from "@/components/motion/ScrollProgress";
import { CtaBand } from "@/components/sections/CtaBand";
import { PostCard } from "@/components/sections/EntryCards";
import { PlaybookCard2 } from "@/components/sections/PlaybookLibrary";
import { BookCover } from "@/components/mockups/BookCover";

/** Shared reading layout for blog posts and playbooks. */
export function ArticleView({ entry, locale, kind }: { entry: EntryWithBody; locale: Locale; kind: "blog" | "playbooks" }) {
  const t = getDictionary(locale);
  const base = kind === "blog" ? "/blog/" : "/playbooks/";
  const related = getEntries(kind, locale)
    .filter((e) => e.slug !== entry.slug)
    .slice(0, 3);

  return (
    <>
      <ScrollProgress />
      <article>
        <header className="relative overflow-hidden pb-12 pt-36 sm:pt-44">
          <div className="grain absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,#000_10%,transparent_60%)]" aria-hidden="true" />
          <div className="container-x relative max-w-4xl">
            <Reveal y={10}>
              <Link href={localePath(locale, base)} className="inline-flex items-center gap-2 text-sm font-semibold text-muted transition-colors hover:text-brand">
                <ArrowLeft className="size-4" aria-hidden="true" />
                {kind === "blog" ? t.blog.back : t.playbookPage.back}
              </Link>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="mt-8 flex flex-wrap items-center gap-2 text-sm font-semibold text-subtle">
                {entry.series && <span className="rounded-full bg-brand-soft px-3 py-1 text-brand">{entry.series}</span>}
                {entry.tags.map((tag) => (
                  <span key={tag} className="rounded-full bg-sunken px-3 py-1">
                    {tag}
                  </span>
                ))}
                <time dateTime={entry.date}>{formatDate(entry.date, locale)}</time>
                <span aria-hidden="true">·</span>
                <span>
                  {entry.readingMinutes} {t.blog.minutes}
                </span>
              </div>
              <h1 className="display mt-6 text-4xl sm:text-5xl lg:text-6xl">{entry.title}</h1>
              <p className="mt-6 text-xl leading-relaxed text-muted">{entry.description}</p>
            </Reveal>
            {kind === "playbooks" && (
              <Reveal delay={0.25} y={40} className="mt-10 overflow-hidden rounded-[1.75rem]">
                <div className="group">
                  <BookCover entry={entry} size="lg" />
                </div>
              </Reveal>
            )}
          </div>
        </header>

        <div className="container-x grid max-w-6xl gap-12 lg:grid-cols-[1fr_220px]">
          <Reveal delay={0.2}>
            <div className="prose prose-lg prose-dt max-w-none prose-headings:font-extrabold prose-a:font-semibold" dangerouslySetInnerHTML={{ __html: entry.html }} />
          </Reveal>
          {entry.headings.length > 0 && (
            <aside className="hidden lg:block">
              <nav className="sticky top-28" aria-label={t.blog.toc}>
                <p className="text-xs font-semibold uppercase tracking-widest text-subtle">{t.blog.toc}</p>
                <ol className="mt-4 grid gap-1 border-l border-line">
                  {entry.headings.map((h) => (
                    <li key={h.id}>
                      <a href={`#${h.id}`} className="-ml-px block border-l-2 border-transparent py-1.5 pl-4 text-sm text-muted transition-colors hover:border-brand hover:text-fg">
                        {h.text}
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>
            </aside>
          )}
        </div>
      </article>

      {related.length > 0 && (
        <section className="container-x py-20">
          <h2 className="display text-3xl sm:text-4xl">{t.blog.related}</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {related.map((e, i) =>
              kind === "blog" ? (
                <PostCard key={e.slug} post={e} locale={locale} readLabel={t.notes.read} minutesLabel={t.blog.minutes} i={i} />
              ) : (
                <Reveal key={e.slug} delay={i * 0.08} className="h-full">
                  <PlaybookCard2 pb={e} locale={locale} pagesLabel={t.playbooks.pages} />
                </Reveal>
              ),
            )}
          </div>
        </section>
      )}
      <CtaBand t={t.cta} secondaryHref={localePath(locale, "/playbooks/")} />
    </>
  );
}
