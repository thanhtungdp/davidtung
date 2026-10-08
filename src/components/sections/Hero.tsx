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
    <section className="relative overflow-hidden pb-20 pt-36 sm:pt-44">
      {/* Background: dot grid + warm glow */}
      <div className="grain absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,#000_20%,transparent_70%)]" aria-hidden="true" />
      <div
        className="absolute left-1/2 top-[-20%] h-[60rem] w-[60rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,color-mix(in_oklab,var(--brand)_22%,transparent),transparent_60%)] blur-2xl"
        aria-hidden="true"
      />

      <div className="container-x relative text-center">
        <Reveal y={12}>
          <span className="inline-flex items-center gap-2 rounded-full border border-line bg-elev/70 px-4 py-1.5 text-[13px] font-semibold text-muted backdrop-blur">
            <span className="relative flex size-2">
              <span className="absolute inset-0 animate-ping rounded-full bg-emerald-500/60" />
              <span className="relative size-2 rounded-full bg-emerald-500" />
            </span>
            {h.eyebrow}
          </span>
        </Reveal>

        <h1 className="display mx-auto mt-7 max-w-5xl text-[2.35rem] min-[400px]:text-[2.6rem] sm:text-6xl lg:text-[5.25rem]">
          <SplitWords text={h.titleA} />{" "}
          <span className="relative inline-block whitespace-nowrap">
            <SplitWords text={h.titleHighlight} className="slant pr-[0.08em]" delay={0.2} />
            <Swoosh variant="underline" className="absolute -bottom-[0.1em] left-0 h-[0.22em] w-full" delay={0.7} />
          </span>{" "}
          <SplitWords text={h.titleB} delay={0.35} />
        </h1>

        <Reveal delay={0.5}>
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">{h.lede}</p>
        </Reveal>
        <Reveal delay={0.65} className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <ButtonLink href={contact.mailto}>{h.primary}</ButtonLink>
          <ButtonLink href={casesHref} variant="ghost" arrow={false}>
            {h.secondary}
          </ButtonLink>
        </Reveal>
      </div>

      <div className="container-x relative mt-16 sm:mt-20">
        <Reveal delay={0.4} y={60}>
          <div className="relative rounded-[2rem] bg-gradient-to-b from-brand/90 via-[#ff8a3d] to-[#ffc79a] p-3 sm:p-8 lg:p-12 dark:from-brand/80 dark:via-[#7a2e00] dark:to-[#1b1815]">
            <div className="grain absolute inset-0 rounded-[2rem] opacity-40" aria-hidden="true" />
            <Tilt className="relative mx-auto max-w-5xl" max={4}>
              <HeroDashboard t={t.mockup} />
            </Tilt>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
