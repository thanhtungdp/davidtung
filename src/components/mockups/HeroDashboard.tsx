"use client";

import { motion } from "motion/react";
import { Bot, Radio, Sun, Target, TrendingUp } from "lucide-react";
import type { Dictionary } from "@/i18n";
import { Parallax } from "@/components/motion/Parallax";

const ease = [0.16, 1, 0.3, 1] as const;

function Float({ children, className, delay = 0, offset = 40 }: { children: React.ReactNode; className: string; delay?: number; offset?: number }) {
  return (
    <Parallax offset={offset} className={`absolute z-20 ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.92 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay, duration: 0.9, ease }}
      >
        <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay }}>
          {children}
        </motion.div>
      </motion.div>
    </Parallax>
  );
}

export function HeroDashboard({ t }: { t: Dictionary["mockup"] }) {
  const spark = "M0 70 C 30 66, 50 52, 80 56 S 130 34, 160 38 S 210 18, 240 22 S 290 6, 320 4";
  return (
    <div className="relative">
      {/* App window */}
      <div className="relative z-10 overflow-hidden rounded-[1.25rem] border border-line bg-elev shadow-[0_40px_120px_-30px_rgb(0_0_0/0.35)]">
        <div className="flex items-center gap-2 border-b border-line px-4 py-3">
          <span className="size-2.5 rounded-full bg-[#ff5f57]" />
          <span className="size-2.5 rounded-full bg-[#febc2e]" />
          <span className="size-2.5 rounded-full bg-[#28c840]" />
          <span className="ml-3 text-xs font-semibold text-muted">{t.app}</span>
          <span className="ml-auto rounded-full bg-sunken px-2.5 py-1 text-[11px] font-semibold text-muted">{t.period}</span>
        </div>
        <div className="grid grid-cols-[52px_1fr] sm:grid-cols-[180px_1fr]">
          <aside className="border-r border-line p-3">
            {[Target, TrendingUp, Bot, Radio].map((Icon, i) => (
              <div key={i} className={`mb-1.5 flex items-center gap-2 rounded-lg p-2 ${i === 0 ? "bg-brand-soft text-brand" : "text-subtle"}`}>
                <Icon className="size-4 shrink-0" aria-hidden="true" />
                <span className={`hidden h-2 rounded-full sm:block ${i === 0 ? "w-20 bg-brand/40" : "w-16 bg-line"}`} />
              </div>
            ))}
          </aside>
          <div className="grid gap-4 p-4 sm:p-6 md:grid-cols-[1.4fr_1fr]">
            <div className="rounded-2xl border border-line p-4 sm:p-5">
              <p className="text-sm font-bold">{t.okrTitle}</p>
              <ul className="mt-4 grid gap-4">
                {t.okrs.map((o, i) => (
                  <li key={o.label}>
                    <div className="flex items-center justify-between gap-3 text-xs sm:text-[13px]">
                      <span className="truncate text-muted">{o.label}</span>
                      <span className="font-bold tabular-nums">{o.value}%</span>
                    </div>
                    <div className="mt-2 h-2 overflow-hidden rounded-full bg-sunken">
                      <motion.div
                        className="h-full rounded-full bg-gradient-to-r from-brand to-[#ff9a3d]"
                        initial={{ width: 0 }}
                        animate={{ width: `${o.value}%` }}
                        transition={{ delay: 0.8 + i * 0.15, duration: 1.4, ease }}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl bg-invert p-4 text-invert-fg sm:p-5">
              <p className="text-xs font-semibold opacity-60">{t.kpiTitle}</p>
              <div className="mt-1 flex items-baseline gap-2">
                <span className="text-3xl font-extrabold tracking-tight">{t.kpiValue}</span>
                <span className="rounded-full bg-brand px-2 py-0.5 text-[11px] font-bold text-white">{t.kpiDelta}</span>
              </div>
              <svg viewBox="0 0 320 80" className="mt-4 h-20 w-full" fill="none" aria-hidden="true">
                <defs>
                  <linearGradient id="spark-fill" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0" stopColor="var(--brand)" stopOpacity="0.35" />
                    <stop offset="1" stopColor="var(--brand)" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <motion.path
                  d={`${spark} L320 80 L0 80 Z`}
                  fill="url(#spark-fill)"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.6, duration: 1 }}
                />
                <motion.path
                  d={spark}
                  stroke="var(--brand)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ delay: 0.9, duration: 1.6, ease: [0.65, 0, 0.35, 1] }}
                />
              </svg>
              <div className="mt-3 grid grid-cols-7 items-end gap-1.5">
                {[40, 55, 35, 70, 60, 85, 95].map((h, i) => (
                  <motion.span
                    key={i}
                    className="block rounded-sm bg-white/15"
                    initial={{ height: 0 }}
                    animate={{ height: h * 0.4 }}
                    transition={{ delay: 1 + i * 0.06, duration: 0.8, ease }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating chips */}
      <Float className="-left-3 top-[58%] sm:-left-10" delay={1.2} offset={50}>
        <div className="flex items-center gap-3 rounded-2xl border border-line bg-elev/95 p-3 pr-5 shadow-xl backdrop-blur">
          <span className="grid size-10 place-items-center rounded-xl bg-brand text-white">
            <Bot className="size-5" aria-hidden="true" />
          </span>
          <div>
            <p className="text-[13px] font-bold">{t.aiChip}</p>
            <p className="text-xs text-muted">{t.aiChipMeta}</p>
          </div>
        </div>
      </Float>
      <Float className="-top-16 right-6 hidden sm:block lg:-right-8" delay={1.45} offset={24}>
        <div className="flex items-center gap-2.5 rounded-full border border-line bg-elev/95 py-2 pl-2 pr-4 shadow-xl backdrop-blur">
          <span className="relative grid size-8 place-items-center rounded-full bg-emerald-500/15 text-emerald-600">
            <span className="absolute inset-0 animate-ping rounded-full bg-emerald-500/30" />
            <Radio className="size-4" aria-hidden="true" />
          </span>
          <p className="text-[13px] font-semibold">
            <span className="font-extrabold">1,000+</span> {t.iotChip}
          </p>
        </div>
      </Float>
      <Float className="-bottom-6 right-6 hidden md:block" delay={1.7} offset={30}>
        <div className="flex items-center gap-2 rounded-full bg-invert py-2.5 pl-3 pr-4 text-invert-fg shadow-xl">
          <Sun className="size-4 text-brand" aria-hidden="true" />
          <p className="text-[13px] font-semibold">{t.briefChip}</p>
        </div>
      </Float>
    </div>
  );
}
