import Link from "next/link";
import { getDictionary } from "@/i18n";
import { localePath, type Locale } from "@/i18n/config";
import { getEntries } from "@/lib/content";
import { Reveal, SplitWords } from "@/components/motion/Reveal";
import { BlogLibrary } from "@/components/sections/BlogLibrary";
import { CtaBand } from "@/components/sections/CtaBand";

/** lattice.com/blog layout: centered hero with section tabs, then the filterable library. */
export function BlogIndexView({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const p = (path: string) => localePath(locale, path);
  const tabs = [
    { href: p("/blog/"), label: t.nav.blog, active: true },
    { href: p("/playbooks/"), label: t.nav.playbooks },
    { href: `${p("/")}#cases`, label: t.nav.cases },
  ];
  const pt = t.playbookPage;

  return (
    <>
      <section className="pb-8 pt-24 text-center sm:pt-40">
        <div className="container-x">
          <h1 className="display mx-auto max-w-4xl text-[2.2rem] sm:text-6xl lg:text-7xl">
            <SplitWords text={t.blog.title} />
          </h1>
          <Reveal delay={0.25}>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted sm:mt-5 sm:text-xl">{t.blog.lede}</p>
          </Reveal>
          <Reveal delay={0.35}>
            <nav aria-label={t.blog.title} className="mt-8 flex justify-center gap-1 overflow-x-auto sm:mt-10 sm:gap-4">
              {tabs.map((tab) => (
                <Link
                  key={tab.href}
                  href={tab.href}
                  aria-current={tab.active ? "page" : undefined}
                  className={`whitespace-nowrap border-b-2 px-3 pb-2.5 text-[15px] font-semibold transition-colors ${
                    tab.active ? "border-brand text-fg" : "border-transparent text-muted hover:text-fg"
                  }`}
                >
                  {tab.label}
                </Link>
              ))}
            </nav>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-line bg-sunken/40 py-10 sm:py-14">
        <div className="container-x">
          <BlogLibrary
            posts={getEntries("blog", locale)}
            locale={locale}
            t={{ ...t.blog, of: pt.of, results: pt.results, reset: pt.reset, filters: pt.filters, empty: pt.empty, emptyHint: pt.emptyHint }}
          />
        </div>
      </section>

      <CtaBand t={t.cta} primaryHref={p("/booking/")} secondaryHref={p("/playbooks/")} />
    </>
  );
}
