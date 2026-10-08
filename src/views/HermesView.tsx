import { Check, Clock, Repeat, Zap, X } from "lucide-react";
import { getDictionary } from "@/i18n";
import { localePath, type Locale } from "@/i18n/config";
import { hermesPage } from "@/content/pages";
import type { CaseArtKey } from "@/components/mockups/CaseArt";
import { HermesHero } from "@/components/mockups/HermesArt";
import { Marquee } from "@/components/motion/Marquee";
import { Reveal, SplitWords, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { Swoosh } from "@/components/motion/Swoosh";
import { Tilt } from "@/components/motion/Tilt";
import { CtaBand } from "@/components/sections/CtaBand";
import { FeatureStack } from "@/components/sections/FeatureStack";
import { ButtonLink } from "@/components/ui/Button";

const agentArts: CaseArtKey[] = ["hermesSales", "hermesFunnel", "hermesVoice", "hermesVisual", "hermesDaily"];
const pillarIcons = [Zap, Repeat, Clock];
const pillarTints = ["bg-tint-orange", "bg-tint-lilac", "bg-tint-mint"];

/** Hermes page on the same product-page layout as the case studies. */
export function HermesView({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const h = hermesPage[locale];
  const booking = localePath(locale, "/booking/");

  return (
    <>
      {/* Split hero with a live Telegram prototype */}
      <section className="relative overflow-hidden pb-14 pt-32 sm:pt-36 lg:pt-40">
        <div className="grain absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,#000_15%,transparent_65%)]" aria-hidden="true" />
        <div className="container-x relative grid items-center gap-12 lg:grid-cols-[1fr_1fr]">
          <div>
            <Reveal y={10}>
              <p className="eyebrow">
                <span className="h-[3px] w-6 -skew-x-[30deg] rounded-full bg-brand" aria-hidden="true" />
                {h.eyebrow}
              </p>
            </Reveal>
            <h1 className="display mt-6 text-[2.5rem] sm:text-5xl xl:text-6xl">
              <SplitWords text={h.titleA} />{" "}
              <span className="relative inline-block">
                <SplitWords text={h.titleHighlight} className="slant pr-[0.08em]" delay={0.15} />
                <Swoosh variant="underline" className="absolute -bottom-[0.08em] left-0 h-[0.22em] w-full" delay={0.6} />
              </span>{" "}
              <SplitWords text={h.titleB} delay={0.3} />
            </h1>
            <Reveal delay={0.4}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">{h.lede}</p>
            </Reveal>
            <Reveal delay={0.5} className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <ButtonLink href={booking}>{h.cta}</ButtonLink>
              <ButtonLink href="#agents" variant="ghost" arrow={false} className="!border-transparent bg-tint-lilac">
                {h.see}
              </ButtonLink>
            </Reveal>
          </div>
          <Reveal delay={0.3} y={40}>
            <div className="rounded-[1.75rem] bg-tint-lilac p-4 sm:p-8">
              <Tilt max={4}>
                <HermesHero vi={locale === "vi"} />
              </Tilt>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Pillars */}
      <section className="container-x pb-16">
        <Stagger className="grid gap-4 md:grid-cols-3">
          {h.pillars.map((p, i) => {
            const Icon = pillarIcons[i];
            return (
              <StaggerItem key={p.title} className="flex gap-4 rounded-[1.5rem] border border-line bg-elev p-6">
                <span className={`grid size-11 shrink-0 place-items-center rounded-2xl ${pillarTints[i]}`}>
                  <Icon className="size-5 text-brand" aria-hidden="true" />
                </span>
                <div>
                  <h2 className="text-lg font-extrabold tracking-tight">{p.title}</h2>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{p.body}</p>
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>
      </section>

      {/* Five agents, each with its own prototype */}
      <section id="agents" className="scroll-mt-20 px-2 sm:px-4">
        <div className="mx-auto max-w-[90rem] rounded-[2.5rem] bg-sunken/70 py-14 sm:py-20">
          <div className="container-x">
            <FeatureStack
              title={h.agentsTitle}
              lede={h.agentsLede}
              steps={h.agents.map((a) => ({ kicker: a.dept, title: a.name, body: `${a.role} — ${a.body}` }))}
              arts={agentArts}
              locale={locale}
            />
          </div>
        </div>
      </section>

      {/* Tools in, outcomes out */}
      <section className="py-20 sm:py-28">
        <div className="container-x grid gap-6 lg:grid-cols-2 lg:items-end">
          <Reveal>
            <span className="inline-flex rounded-full bg-tint-mint px-3 py-1 text-xs font-bold uppercase tracking-widest">Hermes Core</span>
            <h2 className="display mt-5 text-4xl sm:text-5xl">{h.toolsTitle}</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-lg leading-relaxed text-muted">{h.toolsBody}</p>
          </Reveal>
        </div>
        <Marquee className="mt-12" duration={30}>
          {h.tools.map((x) => (
            <span key={x} className="mx-2 rounded-2xl border border-line bg-elev px-6 py-4 text-lg font-bold">
              {x}
            </span>
          ))}
        </Marquee>
        <div className="my-6 flex justify-center" aria-hidden="true">
          <span className="relative grid size-16 place-items-center rounded-2xl bg-invert text-lg font-extrabold italic text-brand shadow-xl">
            <span className="absolute inset-0 animate-ping rounded-2xl bg-brand/20" style={{ animationDuration: "2.4s" }} />H
          </span>
        </div>
        <Marquee duration={30} className="[&>div]:[animation-direction:reverse]">
          {h.outcomes.map((x) => (
            <span key={x} className="mx-2 rounded-2xl bg-tint-orange px-6 py-4 text-lg font-bold text-brand">
              {x}
            </span>
          ))}
        </Marquee>
      </section>

      {/* Before / after + cost of doing it all */}
      <section className="container-x pb-12">
        <h2 className="display max-w-3xl text-4xl sm:text-5xl">{h.compareTitle}</h2>
        <div className="mt-12 grid gap-4 md:grid-cols-2">
          <Reveal className="rounded-[1.5rem] border border-line bg-elev p-8">
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

      <CtaBand t={t.cta} primaryHref={booking} secondaryHref={localePath(locale, "/playbooks/")} />
    </>
  );
}
