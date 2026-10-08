import Link from "next/link";
import { ArrowRight, BarChart3, Bot, Compass, GraduationCap, Radio, Repeat, Sparkles, Target } from "lucide-react";
import { localePath, type Locale } from "@/i18n/config";
import { solutions, type SolutionArt, type Tint } from "@/content/solutions";
import { SolutionArtFor } from "@/components/mockups/SolutionArt";
import { Reveal } from "@/components/motion/Reveal";

const icons: Record<SolutionArt, typeof Target> = {
  goals: Target,
  agent: Bot,
  hermes: Sparkles,
  iot: Radio,
  analytics: BarChart3,
  rhythm: Repeat,
  coaching: Compass,
  learning: GraduationCap,
};

export const tintBg: Record<Tint, string> = {
  orange: "bg-tint-orange",
  mint: "bg-tint-mint",
  lilac: "bg-tint-lilac",
  butter: "bg-tint-butter",
  sky: "bg-tint-sky",
  rose: "bg-tint-rose",
};

/** Lattice-platform-style bento: tinted cards, each with its own live UI illustration. */
export function SolutionGrid({ locale }: { locale: Locale }) {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {solutions.map((s, i) => {
        const c = s.copy[locale];
        const Icon = icons[s.art];
        const href = s.href.startsWith("/") ? localePath(locale, s.href) : s.href;
        return (
          <Reveal key={s.key} delay={(i % 3) * 0.08} className={s.wide ? "md:col-span-2" : ""}>
            <Link
              href={href}
              className={`group relative flex h-full flex-col overflow-hidden rounded-[1.75rem] ${tintBg[s.tint]} transition-transform duration-500 hover:-translate-y-1`}
            >
              <div className="p-6 pb-4 sm:p-7 sm:pb-5">
                <div className="flex items-center gap-2.5">
                  <Icon className="size-5 text-brand" aria-hidden="true" />
                  <h3 className="text-xl font-extrabold tracking-tight">{c.name}</h3>
                  <span className="ml-auto grid size-8 place-items-center rounded-full bg-brand text-white transition-transform duration-500 group-hover:translate-x-1">
                    <ArrowRight className="size-4" aria-hidden="true" />
                  </span>
                </div>
                <p className="mt-2 leading-relaxed text-muted">
                  <span className="font-bold text-fg">{c.tagline}</span> {c.body}
                </p>
              </div>
              <div className="relative mt-auto h-56 overflow-hidden">
                <div className="absolute inset-x-0 bottom-0 top-0 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-2">
                  <SolutionArtFor art={s.art} locale={locale} />
                </div>
              </div>
            </Link>
          </Reveal>
        );
      })}
    </div>
  );
}
