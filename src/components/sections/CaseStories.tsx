import { localePath, type Locale } from "@/i18n/config";
import { projects } from "@/content/projects";
import { solutionsPage } from "@/content/solutions";
import { Reveal } from "@/components/motion/Reveal";
import { tintBg } from "./SolutionGrid";
import { StoryCarousel, type Story } from "./StoryCarousel";

/** Case-study carousel ("Trusted by top performers" in Lattice). */
export function CaseStories({ locale, exclude, title }: { locale: Locale; exclude?: string; title?: string }) {
  const s = solutionsPage[locale];
  const stories: Story[] = projects
    .filter((p) => p.slug !== exclude)
    .map((p) => {
      const c = p.copy[locale];
      return {
        href: localePath(locale, `/projects/${p.slug}/`),
        name: c.name,
        role: c.role,
        tag: c.tag,
        summary: c.summary,
        value: c.stats[0].value,
        label: c.stats[0].label,
        tint: tintBg[p.tint],
      };
    });
  return (
    <section id="cases" className="scroll-mt-20 py-20 sm:py-28">
      <div className="container-x">
        <Reveal>
          <span className="inline-flex rounded-full bg-tint-mint px-3 py-1 text-xs font-bold uppercase tracking-widest">{s.storiesPill}</span>
          <h2 className="display mt-5 text-4xl sm:text-5xl">{title ?? s.storiesTitle}</h2>
        </Reveal>
      </div>
      <div className="mt-12">
        <StoryCarousel stories={stories} labels={{ story: s.story, prev: s.prev, next: s.next }} />
      </div>
    </section>
  );
}
