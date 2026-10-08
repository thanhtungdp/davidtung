import { Reveal, SplitWords } from "@/components/motion/Reveal";
import { Swoosh } from "@/components/motion/Swoosh";

export function PageHero({ title, lede, children }: { title: string; lede?: string; children?: React.ReactNode }) {
  return (
    <section className="relative overflow-hidden pb-14 pt-24 sm:pt-44">
      <div className="grain absolute inset-0 [mask-image:radial-gradient(ellipse_at_top_left,#000_10%,transparent_60%)]" aria-hidden="true" />
      <Swoosh className="pointer-events-none absolute -right-20 top-24 h-40 w-[40rem] opacity-80 max-sm:hidden" delay={0.3} />
      <div className="container-x relative">
        <h1 className="display max-w-4xl text-[2.2rem] sm:text-6xl lg:text-7xl">
          <SplitWords text={title} />
        </h1>
        {lede && (
          <Reveal delay={0.3}>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-xl">{lede}</p>
          </Reveal>
        )}
        {children}
      </div>
    </section>
  );
}
