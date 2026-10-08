import { Marquee } from "@/components/motion/Marquee";
import { stack, trustNames } from "@/content/pages";

export function TrustBar({ label }: { label: string }) {
  return (
    <section className="py-10" aria-label={label}>
      <p className="container-x text-center text-sm font-medium text-subtle">{label}</p>
      <Marquee className="mt-7" duration={45}>
        {trustNames.map((n) => (
          <span key={n} className="mx-8 whitespace-nowrap text-xl font-extrabold tracking-tight text-fg/35 transition-colors hover:text-fg sm:text-2xl">
            {n}
          </span>
        ))}
      </Marquee>
      <Marquee className="mt-5" duration={35}>
        {stack.map((n) => (
          <span key={n} className="mx-2 whitespace-nowrap rounded-full border border-line bg-elev px-4 py-2 text-sm font-semibold text-muted">
            {n}
          </span>
        ))}
      </Marquee>
    </section>
  );
}
