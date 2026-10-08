"use client";

import { motion, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";

type Step = { kicker: string; title: string; body: string };

function StepItem({ step, index, onActive }: { step: Step; index: number; onActive: (i: number) => void }) {
  const ref = useRef<HTMLLIElement>(null);
  const inView = useInView(ref, { margin: "-45% 0px -45% 0px" });
  useEffect(() => {
    if (inView) onActive(index);
  }, [inView, index, onActive]);
  return (
    <li ref={ref} className="card p-7 sm:p-9">
      <p className="text-sm font-bold uppercase tracking-widest text-brand">{step.kicker}</p>
      <h3 className="mt-3 text-2xl font-extrabold tracking-tight sm:text-3xl">{step.title}</h3>
      <p className="mt-3 text-lg leading-relaxed text-muted">{step.body}</p>
    </li>
  );
}

/** Left column pins while steps scroll past on the right (Lattice-style storytelling). */
export function StickyStory({ title, lede, steps }: { title: string; lede: string; steps: Step[] }) {
  const [active, setActive] = useState(0);
  return (
    <section className="container-x grid gap-10 py-20 sm:py-28 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
      <div className="lg:sticky lg:top-32 lg:h-fit">
        <h2 className="display text-4xl sm:text-5xl">{title}</h2>
        <p className="mt-5 text-lg leading-relaxed text-muted">{lede}</p>
        <ol className="mt-10 hidden gap-2 lg:grid" aria-hidden="true">
          {steps.map((s, i) => (
            <li key={s.title} className="flex items-center gap-4">
              <span className="relative grid size-9 shrink-0 place-items-center rounded-full border border-line text-sm font-bold">
                {i === active && (
                  <motion.span layoutId="story-dot" className="absolute inset-0 rounded-full bg-brand" transition={{ type: "spring", stiffness: 300, damping: 30 }} />
                )}
                <span className={`relative ${i === active ? "text-white" : "text-subtle"}`}>{i + 1}</span>
              </span>
              <span className={`font-semibold transition-colors ${i === active ? "text-fg" : "text-subtle"}`}>{s.title}</span>
            </li>
          ))}
        </ol>
      </div>
      <ol className="grid gap-5">
        {steps.map((s, i) => (
          <StepItem key={s.title} step={s} index={i} onActive={setActive} />
        ))}
      </ol>
    </section>
  );
}
