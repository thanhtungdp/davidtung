import { Bot, Check, Mail, X } from "lucide-react";
import { getDictionary } from "@/i18n";
import { localePath, type Locale } from "@/i18n/config";
import { contact, hermesPage } from "@/content/pages";
import { Marquee } from "@/components/motion/Marquee";
import { Reveal, SplitWords, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { Swoosh } from "@/components/motion/Swoosh";
import { Tilt } from "@/components/motion/Tilt";
import { CtaBand } from "@/components/sections/CtaBand";
import { ButtonLink } from "@/components/ui/Button";

export function HermesView({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const h = hermesPage[locale];

  return (
    <>
      <section className="relative overflow-hidden pb-16 pt-36 sm:pt-44">
        <div className="grain absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,#000_15%,transparent_65%)]" aria-hidden="true" />
        <div className="container-x relative grid items-center gap-14 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <Reveal y={10}>
              <p className="eyebrow">
                <span className="h-[3px] w-6 -skew-x-[30deg] rounded-full bg-brand" aria-hidden="true" />
                {h.eyebrow}
              </p>
            </Reveal>
            <h1 className="display mt-6 text-5xl sm:text-6xl lg:text-7xl">
              <SplitWords text={h.titleA} />{" "}
              <span className="relative inline-block">
                <SplitWords text={h.titleHighlight} className="slant pr-[0.08em]" delay={0.15} />
                <Swoosh variant="underline" className="absolute -bottom-[0.08em] left-0 h-[0.22em] w-full" delay={0.6} />
              </span>{" "}
              <SplitWords text={h.titleB} delay={0.3} />
            </h1>
            <Reveal delay={0.4}>
              <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted">{h.lede}</p>
            </Reveal>
            <Reveal delay={0.5} className="mt-9">
              <ButtonLink href={contact.mailto}>{h.cta}</ButtonLink>
            </Reveal>
          </div>

          {/* Briefing mockup */}
          <Reveal delay={0.3} y={40}>
            <Tilt max={5}>
              <div className="rounded-[1.75rem] bg-gradient-to-br from-brand to-[#ffb37a] p-3 dark:to-[#7a2e00]">
                <div className="rounded-[1.3rem] bg-elev p-6 shadow-2xl">
                  <div className="flex items-center gap-3">
                    <span className="grid size-10 place-items-center rounded-xl bg-invert text-brand">
                      <Mail className="size-5" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="text-sm font-bold">Hermès Daily</p>
                      <p className="text-xs text-muted">{h.briefTitle} · 7:00</p>
                    </div>
                    <span className="ml-auto flex items-center gap-1.5 rounded-full bg-emerald-500/15 px-2.5 py-1 text-[11px] font-bold text-emerald-600">
                      <span className="size-1.5 animate-pulse rounded-full bg-emerald-500" /> LIVE
                    </span>
                  </div>
                  <Stagger className="mt-6 grid gap-2.5">
                    {h.brief.map((b) => (
                      <StaggerItem key={b} className="flex items-start gap-3 rounded-xl bg-sunken p-3.5 text-sm">
                        <Check className="mt-0.5 size-4 shrink-0 text-brand" aria-hidden="true" />
                        {b}
                      </StaggerItem>
                    ))}
                  </Stagger>
                </div>
              </div>
            </Tilt>
          </Reveal>
        </div>
      </section>

      <section className="container-x py-12">
        <Stagger className="grid gap-5 md:grid-cols-3">
          {h.pillars.map((p, i) => (
            <StaggerItem key={p.title} className="card p-7">
              <span className="display text-5xl italic text-brand/25">0{i + 1}</span>
              <h2 className="mt-4 text-xl font-extrabold tracking-tight">{p.title}</h2>
              <p className="mt-2 leading-relaxed text-muted">{p.body}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <section className="py-20">
        <div className="container-x text-center">
          <h2 className="display text-4xl sm:text-5xl">{h.toolsTitle}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted">{h.toolsBody}</p>
        </div>
        <Marquee className="mt-12" duration={30}>
          {h.tools.map((x) => (
            <span key={x} className="mx-2 rounded-2xl border border-line bg-elev px-6 py-4 text-lg font-bold">
              {x}
            </span>
          ))}
        </Marquee>
        <div className="my-6 flex justify-center" aria-hidden="true">
          <span className="grid size-16 place-items-center rounded-2xl bg-invert text-brand shadow-xl">
            <Bot className="size-8" />
          </span>
        </div>
        <Marquee duration={30} className="[&>div]:[animation-direction:reverse]">
          {h.outcomes.map((x) => (
            <span key={x} className="mx-2 rounded-2xl bg-brand-soft px-6 py-4 text-lg font-bold text-brand">
              {x}
            </span>
          ))}
        </Marquee>
      </section>

      <section className="bg-invert py-20 text-invert-fg sm:py-28">
        <div className="container-x">
          <h2 className="display text-4xl sm:text-5xl">{h.agentsTitle}</h2>
          <p className="mt-4 max-w-2xl text-lg text-invert-fg/65">{h.agentsLede}</p>
          <Stagger className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {h.agents.map((a) => (
              <StaggerItem key={a.name} className="group rounded-[1.5rem] border border-invert-fg/10 bg-invert-fg/[0.04] p-6 transition-colors hover:border-brand">
                <p className="text-xs font-bold uppercase tracking-widest text-brand">{a.dept}</p>
                <h3 className="mt-4 text-lg font-extrabold">{a.name}</h3>
                <p className="text-sm font-semibold text-invert-fg/60">{a.role}</p>
                <p className="mt-3 text-sm leading-relaxed text-invert-fg/70">{a.body}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="container-x py-20 sm:py-28">
        <h2 className="display max-w-3xl text-4xl sm:text-5xl">{h.compareTitle}</h2>
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          <Reveal className="card p-8">
            <p className="text-sm font-bold uppercase tracking-widest text-subtle">{h.before.label}</p>
            <ul className="mt-6 grid gap-4">
              {h.before.items.map((x) => (
                <li key={x} className="flex gap-3 text-muted">
                  <X className="mt-0.5 size-5 shrink-0 text-subtle" aria-hidden="true" />
                  {x}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.1} className="rounded-[1.5rem] bg-brand p-8 text-white">
            <p className="text-sm font-bold uppercase tracking-widest text-white/80">{h.after.label}</p>
            <ul className="mt-6 grid gap-4">
              {h.after.items.map((x) => (
                <li key={x} className="flex gap-3 font-semibold">
                  <Check className="mt-0.5 size-5 shrink-0" aria-hidden="true" />
                  {x}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <h2 className="display mt-24 max-w-3xl text-3xl sm:text-4xl">{h.costTitle}</h2>
        <Stagger className="mt-10 grid gap-px overflow-hidden rounded-[1.5rem] border border-line bg-line sm:grid-cols-3">
          {h.costs.map((c) => (
            <StaggerItem key={c.label} className="bg-elev p-8">
              <p className="display text-6xl text-brand">{c.value}</p>
              <p className="mt-3 text-muted">{c.label}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <CtaBand t={t.cta} secondaryHref={localePath(locale, "/playbooks/")} />
    </>
  );
}
