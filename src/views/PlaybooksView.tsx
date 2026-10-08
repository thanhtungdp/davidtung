import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";
import { getDictionary } from "@/i18n";
import { localePath, type Locale } from "@/i18n/config";
import { getEntries } from "@/lib/content";
import { BookCover } from "@/components/mockups/BookCover";
import { Reveal, SplitWords } from "@/components/motion/Reveal";
import { CtaBand } from "@/components/sections/CtaBand";
import { PlaybookLibrary } from "@/components/sections/PlaybookLibrary";

/** Lattice Ebooks-style library: breadcrumb, NEW banner, featured row, filterable grid. */
export function PlaybooksView({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const pt = t.playbookPage;
  const list = getEntries("playbooks", locale);
  const featured = list.find((e) => e.featured) ?? list[0];
  const side = list.filter((e) => e.slug !== featured.slug).slice(0, 3);
  const href = (slug: string) => localePath(locale, `/playbooks/${slug}/`);

  return (
    <>
      <section className="relative pb-14 pt-32 text-center sm:pt-40">
        <div className="container-x">
          <Reveal y={8}>
            <nav aria-label="Breadcrumb" className="flex items-center justify-center gap-1.5 text-sm text-subtle">
              <Link href={localePath(locale, "/")} className="hover:text-fg">
                {pt.library}
              </Link>
              <ChevronRight className="size-3.5" aria-hidden="true" />
              <span className="text-fg">{pt.title}</span>
            </nav>
          </Reveal>
          <Reveal delay={0.1}>
            <Link href={href(list[0].slug)} className="group mx-auto mt-7 inline-flex max-w-full items-center gap-2 rounded-full bg-tint-orange py-1.5 pl-1.5 pr-2 text-sm font-semibold">
              <span className="rounded-full bg-brand px-2.5 py-0.5 text-xs font-bold text-white">{pt.newBadge}</span>
              <span className="truncate">{list[0].title}</span>
              <span className="grid size-6 shrink-0 place-items-center rounded-full bg-brand text-white transition-transform group-hover:translate-x-0.5">
                <ArrowRight className="size-3.5" aria-hidden="true" />
              </span>
            </Link>
          </Reveal>
          <h1 className="display mx-auto mt-6 max-w-4xl text-5xl sm:text-6xl lg:text-7xl">
            <SplitWords text={pt.title2} delay={0.15} />
          </h1>
          <Reveal delay={0.35}>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">{pt.lede}</p>
          </Reveal>
        </div>
      </section>

      {/* Featured: one large + three stacked */}
      <section className="container-x grid gap-4 pb-20 lg:grid-cols-[1.15fr_1fr]">
        <Reveal y={30}>
          <Link href={href(featured.slug)} className="group block h-full overflow-hidden rounded-[1.75rem] border border-line bg-elev p-2 transition-shadow duration-500 hover:shadow-[0_30px_60px_-30px_rgb(0_0_0/0.35)]">
            <div className="overflow-hidden rounded-[1.3rem]">
              <BookCover entry={featured} size="lg" />
            </div>
            <div className="grid gap-4 p-5 sm:grid-cols-[1.2fr_1fr] sm:p-6">
              <div>
                {featured.topic && <span className="rounded-full bg-tint-mint px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider">{featured.topic}</span>}
                <h2 className="mt-3 text-2xl font-extrabold leading-tight tracking-tight sm:text-3xl">{featured.title}</h2>
              </div>
              <p className="leading-relaxed text-muted">{featured.description}</p>
            </div>
          </Link>
        </Reveal>
        <div className="grid gap-4">
          {side.map((e, i) => (
            <Reveal key={e.slug} delay={0.1 + i * 0.08}>
              <Link href={href(e.slug)} className="group grid h-full grid-cols-[42%_1fr] items-center gap-4 overflow-hidden rounded-[1.5rem] border border-line bg-elev p-2 transition-shadow duration-500 hover:shadow-[0_20px_50px_-25px_rgb(0_0_0/0.35)]">
                <div className="overflow-hidden rounded-[1.1rem]">
                  <BookCover entry={e} />
                </div>
                <div className="pr-3">
                  {e.topic && <span className="rounded-full bg-tint-mint px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider">{e.topic}</span>}
                  <h3 className="mt-2 text-base font-bold leading-snug tracking-tight transition-colors group-hover:text-brand sm:text-lg">{e.title}</h3>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t border-line bg-sunken/40 py-16 sm:py-20">
        <div className="container-x">
          <PlaybookLibrary list={list} locale={locale} t={{ ...pt, pages: t.playbooks.pages }} />
        </div>
      </section>

      <CtaBand t={t.cta} primaryHref={localePath(locale, "/booking/")} secondaryHref={localePath(locale, "/blog/")} />
    </>
  );
}
