import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Dictionary } from "@/i18n";
import { localePath, type Locale } from "@/i18n/config";
import { projects } from "@/content/projects";
import { ProjectVisualFor } from "@/components/mockups/Visuals";
import { Reveal } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/ui/Button";

const spans = ["lg:col-span-7", "lg:col-span-5", "lg:col-span-5", "lg:col-span-7"];

export function CaseGrid({ t, locale, exclude, title }: { t: Dictionary["cases"]; locale: Locale; exclude?: string; title?: string }) {
  const list = projects.filter((p) => p.slug !== exclude);
  return (
    <section id="cases" className="container-x scroll-mt-28 py-20 sm:py-28">
      <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
        <SectionHeading eyebrow={t.eyebrow} title={title ?? t.title} lede={exclude ? undefined : t.lede} />
      </div>
      <div className="mt-14 grid gap-5 lg:grid-cols-12">
        {list.map((p, i) => {
          const c = p.copy[locale];
          return (
            <Reveal key={p.slug} delay={(i % 2) * 0.1} className={exclude ? "lg:col-span-4" : spans[i]}>
              <Link
                href={localePath(locale, `/projects/${p.slug}/`)}
                className="card group flex h-full flex-col overflow-hidden p-2 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_30px_60px_-30px_rgb(0_0_0/0.35)]"
              >
                <div className="grain relative h-60 overflow-hidden rounded-[1.1rem] bg-sunken transition-colors duration-500 group-hover:bg-brand-soft">
                  <ProjectVisualFor visual={p.visual} locale={locale} />
                  <span className="absolute left-4 top-4 rounded-full bg-elev px-3 py-1 text-xs font-bold shadow-sm">{c.tag}</span>
                </div>
                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <p className="text-xs font-semibold uppercase tracking-wider text-subtle">{c.role}</p>
                  <h3 className="mt-2 text-2xl font-extrabold tracking-tight">{c.name}</h3>
                  <p className="mt-2 leading-relaxed text-muted">{c.summary}</p>
                  <div className="mt-auto flex items-center justify-between pt-6">
                    <span className="rounded-full bg-brand-soft px-3 py-1.5 text-sm font-bold text-brand">{c.metric}</span>
                    <span className="flex items-center gap-1 text-sm font-semibold">
                      {t.cta}
                      <span className="grid size-8 place-items-center rounded-full bg-invert text-invert-fg transition-transform duration-500 group-hover:rotate-45">
                        <ArrowUpRight className="size-4" aria-hidden="true" />
                      </span>
                    </span>
                  </div>
                </div>
              </Link>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
