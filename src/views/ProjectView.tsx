import { getDictionary } from "@/i18n";
import { localePath, type Locale } from "@/i18n/config";
import type { Project } from "@/content/projects";
import { contact } from "@/content/pages";
import { ProjectVisualFor } from "@/components/mockups/Visuals";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { Tilt } from "@/components/motion/Tilt";
import { CaseGrid } from "@/components/sections/CaseGrid";
import { CtaBand } from "@/components/sections/CtaBand";
import { PageHero } from "@/components/sections/PageHero";
import { StickyStory } from "@/components/sections/StickyStory";
import { ButtonLink } from "@/components/ui/Button";

export function ProjectView({ project, locale }: { project: Project; locale: Locale }) {
  const t = getDictionary(locale);
  const c = project.copy[locale];

  return (
    <>
      <PageHero eyebrow={`${c.tag} · ${c.name}`} title={c.headline} lede={c.lede}>
        <Reveal delay={0.4} className="mt-8 flex flex-wrap items-center gap-3">
          <ButtonLink href={contact.mailto}>{t.project.discuss}</ButtonLink>
          <span className="rounded-full border border-line px-4 py-2.5 text-sm font-semibold text-muted">
            {t.project.role}: <span className="text-fg">{c.role}</span>
          </span>
        </Reveal>
      </PageHero>

      <section className="container-x">
        <Reveal y={50}>
          <div className="rounded-[2rem] bg-gradient-to-br from-brand via-[#ff8a3d] to-[#ffc79a] p-3 sm:p-8 dark:via-[#7a2e00] dark:to-[#1b1815]">
            <Tilt max={3}>
              <div className="grain relative h-80 overflow-hidden rounded-[1.4rem] bg-bg sm:h-[26rem]">
                <div className="relative mx-auto h-full max-w-xl">
                  <ProjectVisualFor visual={project.visual} locale={locale} />
                </div>
              </div>
            </Tilt>
          </div>
        </Reveal>
        <Stagger className="mt-5 grid grid-cols-2 gap-px overflow-hidden rounded-[1.5rem] border border-line bg-line lg:grid-cols-4">
          {c.stats.map((s) => (
            <StaggerItem key={s.label} className="bg-elev p-6 sm:p-8">
              <p className="display text-4xl text-brand sm:text-5xl">{s.value}</p>
              <p className="mt-2 text-sm text-muted">{s.label}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <StickyStory title={c.storyTitle} lede={c.storyLede} steps={c.story} />

      <section className="bg-invert py-20 text-invert-fg sm:py-28">
        <div className="container-x">
          <h2 className="display max-w-3xl text-4xl sm:text-5xl">{c.highlightsTitle}</h2>
          <Stagger className="mt-12 grid gap-5 md:grid-cols-3">
            {c.highlights.map((h, i) => (
              <StaggerItem key={h.title} className="rounded-[1.5rem] border border-invert-fg/10 bg-invert-fg/[0.04] p-7">
                <span className="display text-5xl italic text-brand">0{i + 1}</span>
                <h3 className="mt-6 text-xl font-extrabold">{h.title}</h3>
                <p className="mt-2 leading-relaxed text-invert-fg/65">{h.body}</p>
              </StaggerItem>
            ))}
          </Stagger>
          <Reveal className="mt-16 max-w-3xl border-l-4 border-brand pl-6">
            <p className="text-2xl font-extrabold tracking-tight sm:text-3xl">{c.closingTitle}</p>
            <p className="mt-3 text-lg leading-relaxed text-invert-fg/70">{c.closingBody}</p>
          </Reveal>
        </div>
      </section>

      <CaseGrid t={t.cases} locale={locale} exclude={project.slug} title={t.project.others} />
      <CtaBand t={t.cta} secondaryHref={localePath(locale, "/playbooks/")} />
    </>
  );
}
