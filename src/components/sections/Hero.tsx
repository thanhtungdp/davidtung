import type { Dictionary } from "@/i18n";
import { HeroDashboard } from "@/components/mockups/HeroDashboard";
import { Reveal, SplitWords } from "@/components/motion/Reveal";
import { Swoosh } from "@/components/motion/Swoosh";
import { Tilt } from "@/components/motion/Tilt";
import { ButtonLink } from "@/components/ui/Button";

export function Hero({ t, casesHref, bookingHref }: { t: Dictionary; casesHref: string; bookingHref: string }) {
  const h = t.hero;
  return (
    <section className="relative overflow-hidden pb-16 pt-24 sm:pt-36 lg:pb-24 lg:pt-40">
      {/* Background: dot grid + warm glow behind the prototype */}
      <div className="grain absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,#000_20%,transparent_70%)]" aria-hidden="true" />
      <div
        className="absolute right-[-10%] top-[-10%] h-[50rem] w-[50rem] rounded-full bg-[radial-gradient(circle,color-mix(in_oklab,var(--brand)_20%,transparent),transparent_60%)] blur-2xl"
        aria-hidden="true"
      />

      <div className="container-x relative grid items-center gap-14 lg:grid-cols-[1fr_1.08fr] lg:gap-12">
        <div>
          <Reveal y={12}>
            <span className="inline-flex items-center gap-2 rounded-full border border-line bg-elev/70 px-4 py-1.5 text-[13px] font-semibold text-muted backdrop-blur">
              <span className="relative flex size-2">
                <span className="absolute inset-0 animate-ping rounded-full bg-emerald-500/60" />
                <span className="relative size-2 rounded-full bg-emerald-500" />
              </span>
              {h.eyebrow}
            </span>
          </Reveal>

          {/* Exactly two lines from sm up: titleA / highlight + titleB. Phones wrap naturally. */}
          <h1 className="display mt-5 text-[2.1rem] min-[400px]:text-[2.4rem] sm:text-5xl lg:text-[2.6rem] xl:text-[3.3rem]">
            <span className="block sm:whitespace-nowrap">
              <SplitWords text={h.titleA} />
            </span>
            <span className="block sm:whitespace-nowrap">
              <span className="relative sm:inline-block sm:whitespace-nowrap">
                <SplitWords text={h.titleHighlight} className="slant pr-[0.08em]" delay={0.2} />
                <Swoosh variant="underline" className="absolute -bottom-[0.1em] left-0 hidden h-[0.22em] w-full sm:block" delay={0.7} />
              </span>{" "}
              <SplitWords text={h.titleB} delay={0.35} />
            </span>
          </h1>

          <Reveal delay={0.5}>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">{h.lede}</p>
          </Reveal>
          <Reveal delay={0.65} className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <ButtonLink href={bookingHref}>{h.primary}</ButtonLink>
            <ButtonLink href={casesHref} variant="ghost" arrow={false}>
              {h.secondary}
            </ButtonLink>
          </Reveal>
        </div>

        <Reveal delay={0.35} y={40}>
          <div className="relative rounded-[1.75rem] bg-gradient-to-br from-brand/90 via-[#ff8a3d] to-[#ffc79a] p-3 sm:p-6 dark:from-brand/80 dark:via-[#7a2e00] dark:to-[#1b1815]">
            <div className="grain absolute inset-0 rounded-[1.75rem] opacity-40" aria-hidden="true" />
            <Tilt className="relative" max={5}>
              <HeroDashboard t={t.mockup} />
            </Tilt>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
