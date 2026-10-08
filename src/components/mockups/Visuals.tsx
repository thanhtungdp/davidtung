"use client";

import { motion } from "motion/react";
import { Bot, CheckCircle2, ImageIcon, Play, User } from "lucide-react";
import type { ProjectVisual } from "@/content/projects";

const ease = [0.16, 1, 0.3, 1] as const;
const view = { once: true, margin: "-40px" } as const;

/** Goal tree + bars — Simplamo. */
export function DashboardVisual() {
  const bars = [62, 80, 45, 92, 70];
  return (
    <div className="flex h-full flex-col justify-end gap-3 p-6">
      <div className="flex items-end gap-2.5">
        {bars.map((h, i) => (
          <motion.div
            key={i}
            className={`flex-1 rounded-t-lg ${i === 3 ? "bg-brand" : "bg-fg/10"}`}
            initial={{ height: 0 }}
            whileInView={{ height: h * 1.2 }}
            viewport={view}
            transition={{ delay: 0.1 * i, duration: 1, ease }}
          />
        ))}
      </div>
      <div className="flex gap-2">
        {["OKR", "KPI", "BSC", "4DX"].map((x) => (
          <span key={x} className="rounded-full border border-line bg-elev px-2.5 py-1 text-[11px] font-bold">
            {x}
          </span>
        ))}
      </div>
    </div>
  );
}

/** Chat flow — Sale AI. */
export function AgentVisual({ locale = "vi" }: { locale?: string }) {
  const vi = locale === "vi";
  const msgs = [
    { me: true, icon: ImageIcon, text: vi ? "2.4m × 3m · cửa cuốn" : "2.4m × 3m · roller door" },
    { me: false, icon: Bot, text: vi ? "3 phương án phù hợp · báo giá #BG-204" : "3 matching options · quote #BG-204" },
    { me: true, icon: User, text: vi ? "Chốt phương án 2" : "Go with option 2" },
  ];
  return (
    <div className="flex h-full flex-col justify-end gap-2.5 p-6">
      {msgs.map((m, i) => (
        <motion.div
          key={i}
          className={`flex max-w-[85%] items-center gap-2 rounded-2xl px-3.5 py-2.5 text-[13px] font-medium ${
            m.me ? "self-end rounded-br-md bg-invert text-invert-fg" : "self-start rounded-bl-md border border-line bg-elev"
          }`}
          initial={{ opacity: 0, y: 14, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={view}
          transition={{ delay: 0.25 + i * 0.35, duration: 0.6, ease }}
        >
          <m.icon className={`size-4 shrink-0 ${m.me ? "" : "text-brand"}`} aria-hidden="true" />
          {m.text}
        </motion.div>
      ))}
      <motion.div
        className="flex items-center gap-1.5 self-start text-xs font-bold text-emerald-600"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={view}
        transition={{ delay: 1.4 }}
      >
        <CheckCircle2 className="size-4" aria-hidden="true" /> SAP · 58s
      </motion.div>
    </div>
  );
}

/** Pulsing station map — iLotusLand. */
export function IotVisual() {
  const pts = [
    [18, 30], [32, 52], [46, 24], [58, 64], [70, 38], [82, 58], [26, 74], [64, 18], [40, 80], [88, 26],
  ];
  return (
    <div className="relative h-full min-h-48">
      <svg viewBox="0 0 100 100" className="absolute inset-0 size-full" preserveAspectRatio="none" aria-hidden="true">
        {pts.slice(1).map(([x, y], i) => (
          <motion.line
            key={i}
            x1={pts[i][0]}
            y1={pts[i][1]}
            x2={x}
            y2={y}
            stroke="var(--line)"
            strokeWidth="0.5"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={view}
            transition={{ delay: i * 0.08, duration: 0.8 }}
          />
        ))}
      </svg>
      {pts.map(([x, y], i) => (
        <span key={i} className="absolute -translate-x-1/2 -translate-y-1/2" style={{ left: `${x}%`, top: `${y}%` }}>
          <span className="absolute inset-0 animate-ping rounded-full bg-brand/40" style={{ animationDelay: `${i * 0.3}s`, animationDuration: "2.4s" }} />
          <span className={`relative block size-2.5 rounded-full ${i % 3 === 0 ? "bg-brand" : "bg-fg/60"}`} />
        </span>
      ))}
    </div>
  );
}

/** Play + view counter — Education. */
export function EducationVisual() {
  return (
    <div className="flex h-full items-center justify-center p-6">
      <motion.div
        className="relative grid size-24 place-items-center rounded-full bg-brand text-white shadow-[0_20px_50px_-10px_var(--brand)]"
        initial={{ scale: 0.6, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={view}
        transition={{ duration: 0.8, ease }}
      >
        <span className="absolute inset-0 animate-ping rounded-full bg-brand/30" style={{ animationDuration: "2.6s" }} />
        <Play className="relative size-9 translate-x-0.5 fill-current" aria-hidden="true" />
      </motion.div>
      <motion.span
        className="absolute bottom-6 right-6 rounded-full bg-invert px-3 py-1.5 text-xs font-bold text-invert-fg"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={view}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        1,000,000+ views
      </motion.span>
    </div>
  );
}

export function ProjectVisualFor({ visual, locale }: { visual: ProjectVisual; locale?: string }) {
  switch (visual) {
    case "dashboard":
      return <DashboardVisual />;
    case "agent":
      return <AgentVisual locale={locale} />;
    case "iot":
      return <IotVisual />;
    case "education":
      return <EducationVisual />;
  }
}
