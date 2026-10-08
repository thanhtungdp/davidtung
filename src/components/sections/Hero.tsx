import type { Dictionary } from "@/i18n";
import { HeroDashboard } from "@/components/mockups/HeroDashboard";
import { Reveal, SplitWords } from "@/components/motion/Reveal";
import { Swoosh } from "@/components/motion/Swoosh";
import { Tilt } from "@/components/motion/Tilt";
import { ButtonLink } from "@/components/ui/Button";
import { contact } from "@/content/pages";

export function Hero({ t, casesHref }: { t: Dictionary; casesHref: string }) {
  const h = t.hero;
  return (
    <section className="relative overflow-hidden pb-16 pt-32 sm:pt-36 lg:pb-24 lg:pt-40">
      {/* Background: dot grid + warm glow behind the prototype */}
      <div className="grain absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,#000_20%,transparent_70%)]" aria-hidden="true" />
      <div
        className="absolute right-[-10%] top-[-10%] h-[50rem] w-[50rem] rounded-full bg-[radial-gradient(circle,color-mix(in_oklab,var(--brand)_20%,transparent),transparent_60%)] blur-2xl"
        aria-hidden="true"
      />

      <div className="container-x relative grid items-center gap-14 lg:grid-cols-[1fr_1.08fr] lg:gap-12">
        <div className="text-center lg:text-left">
          <Reveal y={12}>
            <span className="inline-flex items-center gap-2 rounded-full border border-line bg-elev/70 px-4 py-1.5 text-[13px] font-semibold text-muted backdrop-blur">
              <span className="relative flex size-2">
                <span className="absolute inset-0 animate-ping rounded-full bg-emerald-500/60" />
                <span className="relative size-2 rounded-full bg-emerald-500" />
              </span>
              {h.eyebrow}
            </span>
          </Reveal>

          <h1 className="display mx-auto mt-6 max-w-2xl text-[2.35rem] min-[400px]:text-[2.6rem] sm:text-5xl lg:mx-0 xl:text-[3.75rem]">
            <SplitWords text={h.titleA} />{" "}
            <span className="relative inline-block whitespace-nowrap">
              <SplitWords text={h.titleHighlight} className="slant pr-[0.08em]" delay={0.2} />
              <Swoosh variant="underline" className="absolute -bottom-[0.1em] left-0 h-[0.22em] w-full" delay={0.7} />
            </span>{" "}
            <SplitWords text={h.titleB} delay={0.35} />
          </h1>

          <Reveal delay={0.5}>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted lg:mx-0">{h.lede}</p>
          </Reveal>
          <Reveal delay={0.65} className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:flex-wrap sm:justify-center lg:justify-start">
            <ButtonLink href={contact.mailto}>{h.primary}</ButtonLink>
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
