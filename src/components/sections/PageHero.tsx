import { Reveal, SplitWords } from "@/components/motion/Reveal";
import { Swoosh } from "@/components/motion/Swoosh";

export function PageHero({ eyebrow, title, lede, children }: { eyebrow: string; title: string; lede?: string; children?: React.ReactNode }) {
  return (
    <section className="relative overflow-hidden pb-14 pt-36 sm:pt-44">
      <div className="grain absolute inset-0 [mask-image:radial-gradient(ellipse_at_top_left,#000_10%,transparent_60%)]" aria-hidden="true" />
      <Swoosh className="pointer-events-none absolute -right-20 top-24 h-40 w-[40rem] opacity-80 max-sm:hidden" delay={0.3} />
      <div className="container-x relative">
        <Reveal y={10}>
          <p className="eyebrow">
            <span className="h-[3px] w-6 -skew-x-[30deg] rounded-full bg-brand" aria-hidden="true" />
            {eyebrow}
          </p>
        </Reveal>
        <h1 className="display mt-5 max-w-4xl text-5xl sm:text-6xl lg:text-7xl">
          <SplitWords text={title} />
        </h1>
        {lede && (
          <Reveal delay={0.3}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">{lede}</p>
          </Reveal>
        )}
        {children}
      </div>
    </section>
  );
}
