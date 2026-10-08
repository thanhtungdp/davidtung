import Link from "next/link";
import { ArrowLeft, Download, FileText, Sparkles } from "lucide-react";
import { getDictionary } from "@/i18n";
import { formatDate, localePath, type Locale } from "@/i18n/config";
import { getEntries, type EntryWithBody } from "@/lib/content";
import { Reveal } from "@/components/motion/Reveal";
import { ScrollProgress } from "@/components/motion/ScrollProgress";
import { CtaBand } from "@/components/sections/CtaBand";
import { PostCard } from "@/components/sections/EntryCards";
import { PlaybookCard2 } from "@/components/sections/PlaybookLibrary";
import { BookCover } from "@/components/mockups/BookCover";
import { Embed } from "@/components/blog/Embed";

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
        <header className="relative overflow-hidden pb-10 pt-24 sm:pb-12 sm:pt-40">
          <div className="grain absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,#000_10%,transparent_60%)]" aria-hidden="true" />
          <div className={`container-x relative ${kind === "playbooks" ? "grid max-w-6xl items-center gap-10 lg:grid-cols-[1.1fr_1fr]" : "max-w-4xl"}`}>
            <div>
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
                {kind === "playbooks" && entry.pages ? (
                  <span>
                    {entry.pages} {t.playbooks.pages}
                  </span>
                ) : (
                  <span>
                    {entry.readingMinutes} {t.blog.minutes}
                  </span>
                )}
                {entry.updated && entry.updated !== entry.date && (
                  <span className="text-subtle">
                    · {t.blog.updated} {formatDate(entry.updated, locale)}
                  </span>
                )}
              </div>
              <h1 className={`display mt-5 text-[1.85rem] sm:mt-6 sm:text-5xl ${kind === "blog" ? "lg:text-6xl" : ""}`}>{entry.title}</h1>
              <p className="mt-4 text-base leading-relaxed text-muted sm:mt-6 sm:text-xl">{entry.description}</p>
              {entry.pdf && (
                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <a href={entry.pdf} target="_blank" rel="noopener" className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-brand px-6 font-semibold text-white transition-colors hover:bg-brand-strong">
                    <FileText className="size-4" aria-hidden="true" /> {t.playbookPage.readPdf}
                  </a>
                  <a href={entry.pdf} download className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-line bg-elev px-6 font-semibold transition-colors hover:border-fg/30">
                    <Download className="size-4" aria-hidden="true" /> {t.playbookPage.downloadPdf}
                  </a>
                </div>
              )}
            </Reveal>
            </div>
            {kind === "playbooks" && (
              <Reveal delay={0.2} y={30} className="overflow-hidden rounded-[1.75rem]">
                <a href={entry.pdf ?? "#"} target="_blank" rel="noopener" className="group block" aria-label={t.playbookPage.readPdf}>
                  <BookCover entry={entry} size="lg" />
                </a>
              </Reveal>
            )}
            {kind === "blog" && entry.image && (
              <Reveal delay={0.2} y={30} className="mt-8 overflow-hidden rounded-[1.5rem] border border-line bg-sunken sm:mt-10">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={entry.image} alt="" className="aspect-[16/9] w-full object-cover" />
              </Reveal>
            )}
          </div>
        </header>

        {kind === "playbooks" && (entry.summary?.length || entry.toc?.length) && (
          <section className="container-x max-w-6xl pb-12">
            <div className="grid gap-4 lg:grid-cols-[1.1fr_1fr]">
              {entry.summary?.length ? (
                <div className="rounded-[1.5rem] border border-line bg-elev p-6 sm:p-8">
                  <h2 className="text-lg font-extrabold tracking-tight">{t.playbookPage.summary}</h2>
                  <ul className="mt-4 grid gap-3">
                    {entry.summary.map((x) => (
                      <li key={x} className="flex gap-3 text-[15px] leading-relaxed text-muted">
                        <span className="mt-2 size-1.5 shrink-0 rounded-full bg-brand" aria-hidden="true" />
                        {x}
                      </li>
                    ))}
                  </ul>
                  {entry.keyTakeaway && (
                    <div className="mt-6 rounded-2xl bg-tint-orange p-5">
                      <p className="flex items-center gap-2 text-sm font-bold text-brand">
                        <Sparkles className="size-4" aria-hidden="true" /> {t.playbookPage.takeaway}
                      </p>
                      <p className="mt-2 font-semibold leading-relaxed">{entry.keyTakeaway}</p>
                    </div>
                  )}
                </div>
              ) : null}
              {entry.toc?.length ? (
                <div className="rounded-[1.5rem] bg-sunken/70 p-6 sm:p-8">
                  <h2 className="text-lg font-extrabold tracking-tight">{t.playbookPage.inside}</h2>
                  <ol className="mt-4 grid gap-1">
                    {entry.toc.map((it) => (
                      <li key={it.id} className="flex gap-3 rounded-xl px-2 py-2">
                        <span className="w-6 shrink-0 font-mono text-sm font-bold text-brand">{it.id}</span>
                        <span>
                          <span className="block text-[15px] font-semibold">{it.title}</span>
                          {it.description && <span className="block text-sm text-muted">{it.description}</span>}
                        </span>
                      </li>
                    ))}
                  </ol>
                </div>
              ) : null}
            </div>
          </section>
        )}

        <div className="container-x grid max-w-6xl gap-12 lg:grid-cols-[1fr_220px]">
          <div className="prose prose-dt max-w-none min-w-0 sm:prose-lg prose-headings:font-extrabold prose-a:font-semibold prose-img:rounded-2xl">
            {entry.parts.map((part, i) =>
              part.type === "html" ? <div key={i} dangerouslySetInnerHTML={{ __html: part.html }} /> : <Embed key={i} name={part.name} locale={locale} />,
            )}
          </div>
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
        <section className="container-x py-12 sm:py-20">
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
      <CtaBand t={t.cta} primaryHref={localePath(locale, "/booking/")} secondaryHref={localePath(locale, "/playbooks/")} />
    </>
  );
}
