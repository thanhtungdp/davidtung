"use client";

import { motion, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { CaseArt, type CaseArtKey } from "@/components/mockups/CaseArt";

type Step = { kicker: string; title: string; body: string };

const tints = ["bg-tint-orange", "bg-tint-lilac", "bg-tint-mint", "bg-tint-butter", "bg-tint-sky", "bg-tint-rose"];

function StackCard({ step, art, index, locale, onActive }: { step: Step; art: CaseArtKey; index: number; locale: string; onActive: (i: number) => void }) {
  const ref = useRef<HTMLLIElement>(null);
  const inView = useInView(ref, { margin: "-45% 0px -45% 0px" });
  useEffect(() => {
    if (inView) onActive(index);
  }, [inView, index, onActive]);

  return (
    <li ref={ref} id={`step-${index + 1}`} className="scroll-mt-28 overflow-hidden rounded-[1.75rem] border border-line bg-elev p-2">
      <div className={`relative h-72 overflow-hidden rounded-[1.4rem] sm:h-80 ${tints[index % tints.length]}`}>
        <CaseArt art={art} locale={locale} />
      </div>
      <div className="flex flex-col gap-3 p-5 sm:flex-row sm:items-end sm:justify-between sm:p-6">
        <div className="max-w-md">
          <h3 className="text-xl font-extrabold tracking-tight sm:text-2xl">{step.title}</h3>
          <p className="mt-1.5 leading-relaxed text-muted">{step.body}</p>
        </div>
        <span className={`w-fit shrink-0 rounded-full px-3 py-1.5 text-xs font-bold ${tints[index % tints.length]}`}>{step.kicker}</span>
      </div>
    </li>
  );
}

/**
 * Lattice "platform/performance" pattern: a sticky left column (title, lede,
 * step list with a progress rail) beside a stack of prototype cards.
 */
export function FeatureStack({ title, lede, steps, arts, locale }: { title: string; lede: string; steps: Step[]; arts: CaseArtKey[]; locale: string }) {
  const [active, setActive] = useState(0);
  return (
    <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
      <div className="lg:sticky lg:top-32 lg:h-fit">
        <h2 className="display text-[1.85rem] sm:text-5xl">{title}</h2>
        <p className="mt-5 text-base leading-relaxed sm:text-lg text-muted">{lede}</p>
        <ol className="relative mt-10 hidden gap-1 border-l-2 border-line pl-6 lg:grid">
          <motion.span
            className="absolute -left-0.5 top-0 w-0.5 bg-brand"
            animate={{ height: `${((active + 1) / steps.length) * 100}%` }}
            transition={{ type: "spring", stiffness: 160, damping: 26 }}
            aria-hidden="true"
          />
          {steps.map((s, i) => (
            <li key={s.title}>
              <a
                href={`#step-${i + 1}`}
                className={`block py-2 text-lg font-medium transition-colors duration-300 ${i === active ? "text-fg" : "text-subtle hover:text-muted"}`}
              >
                {s.title}
              </a>
            </li>
          ))}
        </ol>
      </div>
      <ol className="grid gap-6">
        {steps.map((s, i) => (
          <StackCard key={s.title} step={s} art={arts[i]} index={i} locale={locale} onActive={setActive} />
        ))}
      </ol>
    </div>
  );
}
