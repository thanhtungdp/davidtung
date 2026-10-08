import { getDictionary } from "@/i18n";
import { localePath, type Locale } from "@/i18n/config";
import { getEntries } from "@/lib/content";
import { CaseStories } from "@/components/sections/CaseStories";
import { CtaBand } from "@/components/sections/CtaBand";
import { PostCard } from "@/components/sections/EntryCards";
import { PlaybookCard2 } from "@/components/sections/PlaybookLibrary";
import { Reveal } from "@/components/motion/Reveal";
import { Hero } from "@/components/sections/Hero";
import { HermesBand } from "@/components/sections/HermesBand";
import { Process } from "@/components/sections/Process";
import { SolutionOverview } from "@/components/sections/SolutionOverview";
import { Stats } from "@/components/sections/Stats";
import { TrustBar } from "@/components/sections/TrustBar";
import { ButtonLink, SectionHeading } from "@/components/ui/Button";

export function HomeView({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const p = (path: string) => localePath(locale, path);
  const posts = getEntries("blog", locale).slice(0, 3);
  const playbooks = getEntries("playbooks", locale).slice(0, 3);

  return (
    <>
      <Hero t={t} casesHref="#cases" bookingHref={p("/booking/")} />
      <TrustBar label={t.trust.label} />
      <SolutionOverview locale={locale} />
      <Stats t={t.stats} locale={locale} />
      <CaseStories locale={locale} />
      <Process t={t.process} />
      <HermesBand t={t.hermes} href={p("/hermes/")} />

      <section className="container-x py-12 sm:py-28">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading title={t.playbooks.title} lede={t.playbooks.lede} />
          <ButtonLink href={p("/playbooks/")} variant="ghost">
            {t.playbooks.cta}
          </ButtonLink>
        </div>
        <div className="mt-8 sm:mt-12 grid gap-5 md:grid-cols-3">
          {playbooks.map((pb, i) => (
            <Reveal key={pb.slug} delay={i * 0.08} className="h-full">
              <PlaybookCard2 pb={pb} locale={locale} pagesLabel={t.playbooks.pages} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-x pb-12">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading title={t.notes.title} />
          <ButtonLink href={p("/blog/")} variant="ghost">
            {t.notes.cta}
          </ButtonLink>
        </div>
        <div className="mt-8 sm:mt-12 grid gap-5 md:grid-cols-3">
          {posts.map((post, i) => (
            <PostCard key={post.slug} post={post} locale={locale} readLabel={t.notes.read} minutesLabel={t.blog.minutes} i={i} />
          ))}
        </div>
      </section>

      <CtaBand t={t.cta} primaryHref={localePath(locale, "/booking/")} secondaryHref={p("/playbooks/")} />
    </>
  );
}
