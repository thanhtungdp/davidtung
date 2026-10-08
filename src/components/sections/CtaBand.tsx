import type { Dictionary } from "@/i18n";
import { Reveal } from "@/components/motion/Reveal";
import { Swoosh } from "@/components/motion/Swoosh";
import { ButtonLink } from "@/components/ui/Button";
import { contact } from "@/content/pages";

export function CtaBand({ t, secondaryHref, primaryHref = contact.mailto }: { t: Dictionary["cta"]; secondaryHref: string; primaryHref?: string }) {
  return (
    <section className="container-x pt-12">
      <Reveal>
        <div className="relative overflow-hidden rounded-[2rem] bg-neutral-950 px-6 py-16 text-center text-white sm:px-12 sm:py-24">
          <Swoosh inView className="absolute -bottom-6 left-[-10%] h-40 w-[120%] opacity-90 [--bg:#0a0a0a]" delay={0.1} />
          <div
            className="absolute left-1/2 top-0 h-80 w-[40rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgb(249_91_0/0.35),transparent_65%)] blur-2xl"
            aria-hidden="true"
          />
          <div className="relative">
            <h2 className="display mx-auto max-w-3xl text-[1.85rem] sm:text-6xl">{t.title}</h2>
            <p className="mx-auto mt-5 max-w-xl text-lg text-white/70">{t.body}</p>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <ButtonLink href={primaryHref}>{t.primary}</ButtonLink>
              <ButtonLink href={secondaryHref} variant="light" arrow={false}>
                {t.secondary}
              </ButtonLink>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
