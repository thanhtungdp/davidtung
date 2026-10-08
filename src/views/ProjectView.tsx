import Link from "next/link";
import { ArrowRight, ChevronRight, Layers, ShieldCheck, Sparkles } from "lucide-react";
import { getDictionary } from "@/i18n";
import { localePath, type Locale } from "@/i18n/config";
import { getEntries } from "@/lib/content";
import type { Project } from "@/content/projects";
import { CaseHeroArt } from "@/components/mockups/CaseHeroArt";
import { Reveal, SplitWords, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { Tilt } from "@/components/motion/Tilt";
import { CtaBand } from "@/components/sections/CtaBand";
import { PostCard } from "@/components/sections/EntryCards";
import { FeatureStack } from "@/components/sections/FeatureStack";
import { PlaybookCard2 } from "@/components/sections/PlaybookLibrary";
import { tintBg } from "@/components/sections/SolutionGrid";
import { CaseStories } from "@/components/sections/CaseStories";
import { ButtonLink } from "@/components/ui/Button";

const miniTints = ["bg-tint-orange", "bg-tint-mint", "bg-tint-lilac"];
const miniIcons = [Sparkles, ShieldCheck, Layers];

/** Case study laid out like lattice.com/platform/performance. */
export function ProjectView({ project, locale }: { project: Project; locale: Locale }) {
  const t = getDictionary(locale);
  const c = project.copy[locale];

  const playbooks = getEntries("playbooks", locale).slice(0, 2);
  const post = getEntries("blog", locale)[0];

  return (
    <>
      {/* 1 · Split hero with the product prototype */}
      <section className="relative overflow-hidden pb-12 pt-24 sm:pt-36 lg:pb-16 lg:pt-40">
        <div className="container-x grid items-center gap-12 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <Reveal y={8}>
              <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-sm text-subtle">
                <Link href={`${localePath(locale, "/")}#cases`} className="hover:text-fg">
                  {t.project.crumb}
                </Link>
                <ChevronRight className="size-3.5" aria-hidden="true" />
                <span className="text-fg">{c.name}</span>
              </nav>
            </Reveal>
            <h1 className="display mt-6 text-[2.1rem] sm:text-5xl xl:text-6xl">
              <SplitWords text={c.headline} />
            </h1>
            <Reveal delay={0.3}>
              <p className="mt-6 max-w-xl text-base leading-relaxed sm:text-lg text-muted">{c.lede}</p>
            </Reveal>
            <Reveal delay={0.4} className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <ButtonLink href={localePath(locale, "/booking/")}>{t.project.discuss}</ButtonLink>
              <ButtonLink href="#how" variant="ghost" arrow={false} className={`!border-transparent ${tintBg[project.tint]}`}>
                {t.project.how}
              </ButtonLink>
            </Reveal>
            <Reveal delay={0.5}>
              <p className="mt-6 text-sm text-subtle">
                {t.project.role}: <span className="font-semibold text-fg">{c.role}</span>
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.3} y={40}>
            <div className={`relative rounded-[1.75rem] p-4 sm:p-8 ${tintBg[project.tint]}`}>
              <Tilt max={4}>
                <CaseHeroArt visual={project.visual} locale={locale} mockup={t.mockup} />
              </Tilt>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 2 · Proof strip */}
      <section className="container-x pb-16">
        <Stagger className="grid grid-cols-2 gap-y-8 border-y border-line py-8 lg:grid-cols-4">
          {c.stats.map((st) => (
            <StaggerItem key={st.label} className="px-2 text-center">
              <p className="display text-3xl text-fg/80 sm:text-4xl">{st.value}</p>
              <p className="mx-auto mt-1 max-w-[14rem] text-sm text-subtle">{st.label}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* 3 · Sticky list + stacked prototypes */}
      <section id="how" className="scroll-mt-20 px-2 sm:px-4">
        <div className="mx-auto max-w-[90rem] rounded-[2.5rem] bg-sunken/70 py-14 sm:py-20">
          <div className="container-x">
            <FeatureStack title={c.storyTitle} lede={c.storyLede} steps={c.story} arts={project.storyArt} locale={locale} />
          </div>
        </div>
      </section>

      {/* 4 · Highlights, like Lattice's "Habits" row */}
      <section className="container-x py-12 sm:py-28">
        <div className="grid gap-6 lg:grid-cols-2 lg:items-end">
          <Reveal>
            <span className={`inline-flex rounded-full px-3 py-1 text-xs font-bold uppercase tracking-widest ${tintBg[project.tint]}`}>{c.name}</span>
            <h2 className="display mt-5 text-[1.85rem] sm:text-5xl">{c.highlightsTitle}</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-base leading-relaxed sm:text-lg text-muted">
              <span className="font-bold text-fg">{c.closingTitle}</span> {c.closingBody}
            </p>
            <a href={localePath(locale, "/booking/")} className="mt-4 inline-flex items-center gap-1.5 border-b-2 border-brand pb-0.5 font-semibold">
              {t.project.learnMore} <ArrowRight className="size-4" aria-hidden="true" />
            </a>
          </Reveal>
        </div>
        <Stagger className="mt-8 sm:mt-12 grid gap-4 md:grid-cols-3">
          {c.highlights.map((h, i) => {
            const Icon = miniIcons[i % miniIcons.length];
            return (
              <StaggerItem key={h.title} className="overflow-hidden rounded-[1.5rem] border border-line bg-elev p-2">
                <div className={`grid h-40 place-items-center rounded-[1.1rem] ${miniTints[i % miniTints.length]}`}>
                  <div className="w-44 rounded-xl bg-elev p-3 shadow-[0_16px_40px_-16px_rgb(0_0_0/0.3)]">
                    <div className="flex items-center gap-2">
                      <span className="grid size-7 place-items-center rounded-lg bg-brand text-white">
                        <Icon className="size-4" aria-hidden="true" />
                      </span>
                      <span className="min-w-0 flex-1 truncate text-[11px] font-bold">{h.title}</span>
                    </div>
                    <span className="mt-3 block h-2 w-full rounded-full bg-sunken" />
                    <span className="mt-1.5 block h-2 w-2/3 rounded-full bg-sunken" />
                    <span className="mt-2.5 flex items-center gap-1 text-[10px] font-bold text-emerald-600">
                      <span className="size-1.5 rounded-full bg-emerald-500" /> {locale === "vi" ? "Đang vận hành" : "Running"}
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-extrabold tracking-tight">{h.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{h.body}</p>
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>
      </section>

      {/* 5 · Other case studies */}
      <div className="-mt-20 sm:-mt-28">
        <CaseStories locale={locale} exclude={project.slug} title={t.project.others} />
      </div>

      {/* 6 · Resources */}
      <section className="container-x pb-12">
        <div className="grid gap-6 lg:grid-cols-2 lg:items-end">
          <Reveal>
            <span className="inline-flex rounded-full bg-sunken px-3 py-1 text-xs font-bold uppercase tracking-widest text-muted">{t.project.resourcesPill}</span>
            <h2 className="display mt-5 text-[1.85rem] sm:text-5xl">{t.project.resources}</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-base leading-relaxed sm:text-lg text-muted">{t.project.resourcesLede}</p>
          </Reveal>
        </div>
        <div className="mt-8 sm:mt-12 grid gap-4 md:grid-cols-3">
          {playbooks.map((pb, i) => (
            <Reveal key={pb.slug} delay={i * 0.08} className="h-full">
              <PlaybookCard2 pb={pb} locale={locale} pagesLabel={t.playbooks.pages} />
            </Reveal>
          ))}
          {post && <PostCard post={post} locale={locale} readLabel={t.notes.read} minutesLabel={t.blog.minutes} i={2} />}
        </div>
      </section>

      <CtaBand t={t.cta} primaryHref={localePath(locale, "/booking/")} secondaryHref={localePath(locale, "/playbooks/")} />
    </>
  );
}
