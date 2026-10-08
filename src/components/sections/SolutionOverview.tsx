import { localePath, type Locale } from "@/i18n/config";
import { solutionsPage } from "@/content/solutions";
import { Reveal } from "@/components/motion/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { SolutionGrid } from "./SolutionGrid";

/** The Lattice-platform bento of solutions inside a large rounded container. */
export function SolutionOverview({ locale }: { locale: Locale }) {
  const s = solutionsPage[locale];
  return (
    <section id="solutions" className="scroll-mt-20 px-2 sm:px-4">
      <div className="mx-auto max-w-[90rem] rounded-[2.5rem] bg-sunken/70 px-2 py-14 sm:px-6 sm:py-20 lg:px-10">
        <div className="container-x !px-2 sm:!px-4">
          <div className="grid gap-6 lg:grid-cols-2 lg:items-end">
            <Reveal>
              <span className="inline-flex rounded-full bg-tint-orange px-3 py-1 text-xs font-bold uppercase tracking-widest text-brand">{s.overview}</span>
              <h2 className="display mt-5 text-[1.85rem] sm:text-5xl lg:text-[3.5rem]">{s.overviewTitle}</h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-base leading-relaxed sm:text-lg text-muted lg:text-xl">{s.overviewLede}</p>
            </Reveal>
          </div>
          <div className="mt-8 sm:mt-12">
            <SolutionGrid locale={locale} />
          </div>
          <Reveal className="mt-8 sm:mt-12 flex justify-center">
            <ButtonLink href={localePath(locale, "/booking/")}>{s.tour}</ButtonLink>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
