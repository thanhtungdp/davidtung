import { getDictionary } from "@/i18n";
import { localePath, type Locale } from "@/i18n/config";
import { contact } from "@/content/pages";
import { projects } from "@/content/projects";
import { solutionsPage } from "@/content/solutions";
import { Reveal, SplitWords } from "@/components/motion/Reveal";
import { CtaBand } from "@/components/sections/CtaBand";
import { SolutionGrid } from "@/components/sections/SolutionGrid";
import { StoryCarousel, type Story } from "@/components/sections/StoryCarousel";
import { TrustBar } from "@/components/sections/TrustBar";
import { ButtonLink } from "@/components/ui/Button";

const storyTints = ["bg-tint-orange", "bg-tint-mint", "bg-tint-sky", "bg-tint-lilac"];

export function SolutionsView({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const s = solutionsPage[locale];
  const stories: Story[] = projects.map((p, i) => {
    const c = p.copy[locale];
    return {
      href: localePath(locale, `/projects/${p.slug}/`),
      name: c.name,
      role: c.role,
      tag: c.tag,
      summary: c.summary,
      value: c.stats[0].value,
      label: c.stats[0].label,
      tint: storyTints[i % storyTints.length],
    };
  });

  return (
    <>
      <section className="relative overflow-hidden pb-6 pt-36 text-center sm:pt-44">
        <div className="grain absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,#000_10%,transparent_60%)]" aria-hidden="true" />
        <div className="container-x relative">
          <h1 className="display mx-auto max-w-4xl text-[2.4rem] sm:text-6xl lg:text-7xl">
            <SplitWords text={s.title} />
          </h1>
          <Reveal delay={0.3}>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">{s.lede}</p>
          </Reveal>
          <Reveal delay={0.45} className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <ButtonLink href={contact.mailto}>{s.primary}</ButtonLink>
            <ButtonLink href="#stories" variant="ghost" arrow={false} className="!bg-tint-orange !border-transparent">
              {s.secondary}
            </ButtonLink>
          </Reveal>
        </div>
      </section>

      <TrustBar label={t.trust.label} />

      {/* Platform overview container */}
      <section className="px-2 sm:px-4">
        <div className="mx-auto max-w-[90rem] rounded-[2.5rem] bg-sunken/70 px-2 py-14 sm:px-6 sm:py-20 lg:px-10">
          <div className="container-x !px-2 sm:!px-4">
            <div className="grid gap-6 lg:grid-cols-2 lg:items-end">
              <Reveal>
                <span className="inline-flex rounded-full bg-tint-orange px-3 py-1 text-xs font-bold uppercase tracking-widest text-brand">{s.overview}</span>
                <h2 className="display mt-5 text-4xl sm:text-5xl lg:text-[3.5rem]">{s.overviewTitle}</h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="text-lg leading-relaxed text-muted lg:text-xl">{s.overviewLede}</p>
              </Reveal>
            </div>
            <div className="mt-12">
              <SolutionGrid locale={locale} />
            </div>
            <Reveal className="mt-12 flex justify-center">
              <ButtonLink href={contact.mailto}>{s.tour}</ButtonLink>
            </Reveal>
          </div>
        </div>
      </section>

      <section id="stories" className="scroll-mt-24 py-20 sm:py-28">
        <div className="container-x">
          <Reveal>
            <span className="inline-flex rounded-full bg-tint-mint px-3 py-1 text-xs font-bold uppercase tracking-widest">{s.storiesPill}</span>
            <h2 className="display mt-5 text-4xl sm:text-5xl">{s.storiesTitle}</h2>
          </Reveal>
        </div>
        <div className="mt-12">
          <StoryCarousel stories={stories} labels={{ story: s.story, prev: s.prev, next: s.next }} />
        </div>
      </section>

      <CtaBand t={t.cta} secondaryHref={localePath(locale, "/playbooks/")} />
    </>
  );
}
