import { Bot, Mail, MessageCircle, Sheet, Sparkles } from "lucide-react";
import type { Dictionary } from "@/i18n";
import { Reveal } from "@/components/motion/Reveal";
import { ButtonLink } from "@/components/ui/Button";

export function HermesBand({ t, href }: { t: Dictionary["hermes"]; href: string }) {
  const orbit = [MessageCircle, Mail, Sheet, Sparkles];
  return (
    <section className="container-x py-12">
      <Reveal>
        <div className="relative grid items-center gap-10 overflow-hidden rounded-[2rem] bg-brand p-8 text-white sm:p-12 lg:grid-cols-[1.3fr_1fr] lg:p-16">
          <div className="grain absolute inset-0 opacity-30" aria-hidden="true" />
          <div className="relative">
            <p className="text-sm font-bold uppercase tracking-widest text-white/80">{t.eyebrow}</p>
            <h2 className="display mt-4 text-[1.85rem] sm:text-5xl">{t.title}</h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed sm:text-lg text-white/85">{t.body}</p>
            <ButtonLink href={href} variant="light" className="mt-8">
              {t.cta}
            </ButtonLink>
          </div>
          {/* Orbiting tools around the Hermes core */}
          <div className="relative mx-auto aspect-square w-full max-w-xs" aria-hidden="true">
            <div className="absolute inset-0 rounded-full border border-dashed border-white/40" />
            <div className="absolute inset-[18%] rounded-full border border-white/25" />
            <div className="absolute inset-0 animate-[spin_24s_linear_infinite] motion-reduce:animate-none">
              {orbit.map((Icon, i) => {
                const a = (i / orbit.length) * Math.PI * 2;
                return (
                  <span
                    key={i}
                    className="absolute grid size-12 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-2xl bg-white text-neutral-900 shadow-lg"
                    style={{ left: `${50 + 50 * Math.cos(a)}%`, top: `${50 + 50 * Math.sin(a)}%` }}
                  >
                    <Icon className="size-5 animate-[spin_24s_linear_infinite_reverse] motion-reduce:animate-none" />
                  </span>
                );
              })}
            </div>
            <div className="absolute inset-[34%] grid place-items-center rounded-full bg-neutral-950 text-white shadow-2xl">
              <Bot className="size-10 text-brand" />
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
