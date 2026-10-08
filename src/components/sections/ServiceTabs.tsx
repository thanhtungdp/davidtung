"use client";

import { AnimatePresence, motion } from "motion/react";
import { Bot, Check, Compass, Flag, LineChart } from "lucide-react";
import { useEffect, useState } from "react";
import type { Dictionary } from "@/i18n";
import { AgentVisual, DashboardVisual } from "@/components/mockups/Visuals";
import { SectionHeading } from "@/components/ui/Button";

const ease = [0.16, 1, 0.3, 1] as const;
const icons = { ops: LineChart, ai: Bot, coaching: Compass, delivery: Flag } as const;
const AUTO_MS = 7000;

function Panel({ k, locale }: { k: string; locale: string }) {
  if (k === "ops") return <DashboardVisual />;
  if (k === "ai") return <AgentVisual locale={locale} />;
  if (k === "coaching")
    return (
      <div className="grid h-full content-center gap-3 p-6">
        {["Focus", "Decide", "Delegate to AI"].map((x, i) => (
          <motion.div
            key={x}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 + i * 0.12, duration: 0.6, ease }}
            className="flex items-center gap-3 rounded-2xl border border-line bg-elev p-4"
          >
            <span className={`grid size-8 place-items-center rounded-full ${i === 2 ? "bg-brand text-white" : "bg-sunken"}`}>{i + 1}</span>
            <span className="font-semibold">{x}</span>
          </motion.div>
        ))}
      </div>
    );
  const weeks = locale === "vi" ? ["Tuần 1", "Tuần 4", "Tuần 8", "Tuần 12"] : ["Week 1", "Week 4", "Week 8", "Week 12"];
  return (
    <div className="flex h-full flex-col justify-center gap-4 p-6">
      {weeks.map((w, i) => (
        <motion.div key={w} className="flex items-center gap-3" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.15 }}>
          <span className="w-16 text-xs font-bold text-subtle">{w}</span>
          <div className="h-3 flex-1 overflow-hidden rounded-full bg-fg/10">
            <motion.div
              className="h-full rounded-full bg-brand"
              initial={{ width: 0 }}
              animate={{ width: `${25 * (i + 1)}%` }}
              transition={{ delay: 0.2 + i * 0.15, duration: 0.9, ease }}
            />
          </div>
          {i === 3 && <Check className="size-4 text-emerald-600" aria-hidden="true" />}
        </motion.div>
      ))}
    </div>
  );
}

export function ServiceTabs({ t, locale }: { t: Dictionary["services"]; locale: string }) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const item = t.items[active];

  useEffect(() => {
    if (paused) return;
    const id = setTimeout(() => setActive((a) => (a + 1) % t.items.length), AUTO_MS);
    return () => clearTimeout(id);
  }, [active, paused, t.items.length]);

  return (
    <section className="bg-invert py-20 text-invert-fg sm:py-28">
      <div className="container-x">
        <SectionHeading eyebrow={t.eyebrow} title={t.title} lede={t.lede} align="center" className="[&_p:last-child]:text-invert-fg/60" />

        <div
          role="tablist"
          aria-label={t.title}
          className="mx-auto mt-12 flex w-fit max-w-full gap-1 overflow-x-auto rounded-full border border-invert-fg/15 p-1.5"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {t.items.map((it, i) => {
            const Icon = icons[it.key as keyof typeof icons];
            const on = i === active;
            return (
              <button
                key={it.key}
                role="tab"
                id={`tab-${it.key}`}
                aria-selected={on}
                aria-controls={`panel-${it.key}`}
                onClick={() => {
                  setActive(i);
                  setPaused(true);
                }}
                className={`relative flex h-11 shrink-0 items-center gap-2 rounded-full px-4 text-sm font-semibold transition-colors sm:px-5 ${
                  on ? "text-white" : "text-invert-fg/60 hover:text-invert-fg"
                }`}
              >
                {on && (
                  <motion.span layoutId="tab-pill" className="absolute inset-0 rounded-full bg-brand" transition={{ type: "spring", stiffness: 380, damping: 32 }} />
                )}
                <Icon className="relative size-4" aria-hidden="true" />
                <span className="relative">{it.tab}</span>
                {on && !paused && (
                  <motion.span
                    key={`progress-${active}`}
                    className="absolute inset-x-4 bottom-1 h-0.5 origin-left rounded-full bg-white/60"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: AUTO_MS / 1000, ease: "linear" }}
                  />
                )}
              </button>
            );
          })}
        </div>

        <div
          id={`panel-${item.key}`}
          role="tabpanel"
          aria-labelledby={`tab-${item.key}`}
          className="mt-10 grid items-center gap-8 rounded-[2rem] border border-invert-fg/10 bg-invert-fg/[0.04] p-4 sm:p-8 lg:grid-cols-2 lg:gap-14 lg:p-12"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={item.key}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.45, ease }}
              className="p-2"
            >
              <h3 className="display text-3xl sm:text-4xl">{item.title}</h3>
              <p className="mt-5 text-lg leading-relaxed text-invert-fg/70">{item.body}</p>
              <ul className="mt-7 grid gap-3">
                {item.bullets.map((b) => (
                  <li key={b} className="flex items-center gap-3 font-medium">
                    <span className="grid size-6 place-items-center rounded-full bg-brand text-white">
                      <Check className="size-3.5" aria-hidden="true" />
                    </span>
                    {b}
                  </li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>
          <div className="relative h-80 overflow-hidden rounded-[1.5rem] bg-bg text-fg">
            <AnimatePresence mode="wait">
              <motion.div
                key={item.key}
                className="grain absolute inset-0"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.02 }}
                transition={{ duration: 0.5, ease }}
              >
                <Panel k={item.key} locale={locale} />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
