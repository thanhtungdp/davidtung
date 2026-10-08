import { getDictionary } from "@/i18n";
import { localePath, type Locale } from "@/i18n/config";
import { aboutPage, contact } from "@/content/pages";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { CtaBand } from "@/components/sections/CtaBand";
import { PageHero } from "@/components/sections/PageHero";
import { Stats } from "@/components/sections/Stats";

export function AboutView({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const a = aboutPage[locale];
  return (
    <>
      <PageHero title={a.title} lede={a.lede}>
        <Reveal delay={0.4}>
          <p className="mt-6 text-sm font-semibold text-subtle">
            {t.footer.location} ·{" "}
            <a href={contact.mailto} className="text-brand hover:underline">
              {contact.email}
            </a>
          </p>
        </Reveal>
      </PageHero>

      <section className="container-x grid gap-12 py-12 lg:grid-cols-2">
        <div>
          <h2 className="display text-3xl sm:text-4xl">{a.topicsTitle}</h2>
          <Stagger className="mt-8 grid gap-3">
            {a.topics.map((x, i) => (
              <StaggerItem key={x} className="card flex items-start gap-4 p-5">
                <span className="grid size-8 shrink-0 place-items-center rounded-full bg-brand-soft text-sm font-bold text-brand">{i + 1}</span>
                <span className="pt-1 text-lg">{x}</span>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
        <div>
          <h2 className="display text-3xl sm:text-4xl">{a.timelineTitle}</h2>
          <Stagger as="li" className="relative mt-8 grid gap-8 border-l-2 border-line pl-8">
            {a.timeline.map((x) => (
              <StaggerItem as="li" key={x.title} className="relative">
                <span className="absolute -left-[2.6rem] top-1 size-4 rounded-full border-4 border-bg bg-brand" aria-hidden="true" />
                <p className="text-xs font-bold uppercase tracking-widest text-brand">{x.label}</p>
                <h3 className="mt-1 text-xl font-extrabold">{x.title}</h3>
                <p className="mt-1 text-muted">{x.body}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <Stats t={t.stats} locale={locale} />

      <section className="container-x">
        <Reveal className="rounded-[2rem] bg-invert p-10 text-invert-fg sm:p-16">
          <p className="display text-4xl italic sm:text-6xl">
            Simple &amp; More <span className="text-brand">X10</span>
          </p>
          <p className="mt-6 max-w-2xl text-base leading-relaxed sm:text-lg text-invert-fg/70">{a.principleBody}</p>
        </Reveal>
      </section>

      <CtaBand t={t.cta} primaryHref={localePath(locale, "/booking/")} secondaryHref={localePath(locale, "/blog/")} />
    </>
  );
}
