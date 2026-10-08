"use client";

import { motion } from "motion/react";
import {
  Bot,
  Check,
  CircleDot,
  GraduationCap,
  MessageCircle,
  Play,
  Radio,
  Send,
  Sparkles,
  Target,
  TrendingUp,
} from "lucide-react";
import type { SolutionArt as ArtKey } from "@/content/solutions";

const ease = [0.16, 1, 0.3, 1] as const;
const view = { once: true, margin: "-40px" } as const;

/** Fades children up when the card scrolls into view. */
export function In({ children, className, delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  return (
    <motion.div
      className={`h-full ${className ?? ""}`}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={view}
      transition={{ duration: 0.7, ease, delay }}
    >
      {children}
    </motion.div>
  );
}

/** White app panel that bleeds off the bottom of the card, like Lattice. */
export function Panel({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`rounded-t-2xl border border-b-0 border-black/5 bg-elev p-4 shadow-[0_20px_50px_-20px_rgb(0_0_0/0.25)] dark:border-white/10 ${className}`}>
      {children}
    </div>
  );
}

export function Bar({ value, delay = 0 }: { value: number; delay?: number }) {
  return (
    <div className="h-1.5 overflow-hidden rounded-full bg-sunken">
      <motion.div
        className="h-full rounded-full bg-brand"
        initial={{ width: 0 }}
        whileInView={{ width: `${value}%` }}
        viewport={view}
        transition={{ duration: 1.2, ease, delay }}
      />
    </div>
  );
}

function Goals({ vi }: { vi: boolean }) {
  const rows = vi
    ? [
        { t: "Tăng trưởng doanh thu 30%", v: 78, lvl: 0 },
        { t: "Mở rộng kênh đại lý miền Bắc", v: 64, lvl: 1 },
        { t: "Triển khai Sale AI cho 2.000 đại lý", v: 91, lvl: 1 },
        { t: "Chuẩn hoá nhịp họp 4DX", v: 52, lvl: 2 },
      ]
    : [
        { t: "Grow revenue 30%", v: 78, lvl: 0 },
        { t: "Expand northern dealer channel", v: 64, lvl: 1 },
        { t: "Roll out Sale AI to 2,000 dealers", v: 91, lvl: 1 },
        { t: "Standardize 4DX meetings", v: 52, lvl: 2 },
      ];
  return (
    <div className="grid h-full grid-cols-1 gap-3 px-5 pt-2 sm:grid-cols-[1.5fr_1fr]">
      <In>
        <Panel className="h-full">
          <div className="flex items-center justify-between">
            <p className="text-sm font-bold">{vi ? "Cây mục tiêu · Q4" : "Goal tree · Q4"}</p>
            <span className="rounded-full bg-tint-orange px-2 py-0.5 text-[10px] font-bold text-brand">OKR</span>
          </div>
          <ul className="mt-3 grid gap-3">
            {rows.map((r, i) => (
              <li key={r.t} style={{ paddingLeft: r.lvl * 14 }}>
                <div className="flex items-center gap-2 text-xs">
                  <Target className={`size-3.5 shrink-0 ${r.lvl === 0 ? "text-brand" : "text-subtle"}`} aria-hidden="true" />
                  <span className="min-w-0 flex-1 truncate">{r.t}</span>
                  <span className="font-bold tabular-nums">{r.v}%</span>
                </div>
                <div className="mt-1.5 pl-5">
                  <Bar value={r.v} delay={0.2 + i * 0.1} />
                </div>
              </li>
            ))}
          </ul>
        </Panel>
      </In>
      <In delay={0.15} className="hidden sm:block">
        <Panel className="h-full">
          <p className="text-[11px] font-semibold text-subtle">{vi ? "Nhịp họp tuần" : "Weekly meeting"}</p>
          <div className="mt-3 grid gap-2">
            {(vi ? ["Review chỉ số", "Gỡ vướng mắc", "Cam kết tuần tới"] : ["Review metrics", "Clear blockers", "Commit next week"]).map((x, i) => (
              <motion.div
                key={x}
                className="flex items-center gap-2 rounded-lg bg-sunken px-2.5 py-2 text-xs"
                initial={{ opacity: 0, x: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={view}
                transition={{ delay: 0.4 + i * 0.15 }}
              >
                <span className={`grid size-4 place-items-center rounded-full ${i < 2 ? "bg-brand text-white" : "border border-line"}`}>
                  {i < 2 && <Check className="size-2.5" aria-hidden="true" />}
                </span>
                {x}
              </motion.div>
            ))}
          </div>
          <div className="mt-3 flex items-center gap-1.5 rounded-lg bg-tint-orange px-2.5 py-2 text-[11px] font-semibold text-brand">
            <Sparkles className="size-3.5" aria-hidden="true" /> {vi ? "AI: 2 mục tiêu có rủi ro" : "AI: 2 goals at risk"}
          </div>
        </Panel>
      </In>
    </div>
  );
}

function Agent({ vi }: { vi: boolean }) {
  return (
    <div className="mx-auto h-full max-w-[19rem] px-5 pt-2">
      <In>
        <Panel className="h-full">
          <div className="flex items-center gap-2 border-b border-line pb-2.5">
            <span className="grid size-6 place-items-center rounded-full bg-brand text-white">
              <Bot className="size-3.5" aria-hidden="true" />
            </span>
            <p className="text-xs font-bold">Sale AI</p>
            <span className="ml-auto text-[10px] font-semibold text-emerald-600">● online</span>
          </div>
          <div className="mt-3 grid gap-2 text-[11px]">
            <motion.p className="ml-auto max-w-[80%] rounded-xl rounded-br-sm bg-invert px-2.5 py-1.5 text-invert-fg" initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={view} transition={{ delay: 0.2 }}>
              {vi ? "Cửa cuốn 2.4m × 3m, ngân sách 15tr" : "Roller door 2.4m × 3m, $600 budget"}
            </motion.p>
            <motion.div className="max-w-[88%] rounded-xl rounded-bl-sm border border-line px-2.5 py-1.5" initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={view} transition={{ delay: 0.6 }}>
              <p className="font-semibold">{vi ? "Báo giá #BG-204" : "Quote #BG-204"}</p>
              <div className="mt-1 flex justify-between text-muted">
                <span>{vi ? "Phương án 2" : "Option 2"}</span>
                <span className="font-bold text-fg">14.2tr</span>
              </div>
            </motion.div>
            <motion.p className="flex items-center gap-1 font-bold text-emerald-600" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={view} transition={{ delay: 1 }}>
              <Check className="size-3" aria-hidden="true" /> SAP · 58s
            </motion.p>
          </div>
        </Panel>
      </In>
    </div>
  );
}

function Hermes({ vi }: { vi: boolean }) {
  const agents = ["Sales", "Funnel", "Voice", "Visual", "Daily"];
  return (
    <div className="mx-auto h-full max-w-[19rem] px-5 pt-2">
      <In>
        <Panel className="h-full">
          <div className="flex items-center gap-2 rounded-xl bg-sunken px-3 py-2 text-[11px]">
            <MessageCircle className="size-3.5 text-brand" aria-hidden="true" />
            <span className="flex-1 truncate">{vi ? "Gửi báo giá cho anh Minh" : "Send the quote to Minh"}</span>
            <Send className="size-3.5 text-subtle" aria-hidden="true" />
          </div>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {agents.map((a, i) => (
              <motion.span
                key={a}
                className={`rounded-full px-2.5 py-1 text-[10px] font-bold ${i === 0 ? "bg-brand text-white" : "bg-tint-lilac text-fg"}`}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={view}
                transition={{ delay: 0.2 + i * 0.08 }}
              >
                Hermès {a}
              </motion.span>
            ))}
          </div>
          <motion.div className="mt-3 rounded-xl border border-line p-2.5 text-[11px]" initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={view} transition={{ delay: 0.8 }}>
            <p className="font-semibold">{vi ? "✓ Đã gửi email + đồng bộ CRM" : "✓ Email sent + CRM synced"}</p>
            <p className="mt-0.5 text-muted">{vi ? "Hermès Sales · 12 giây" : "Hermès Sales · 12 seconds"}</p>
          </motion.div>
        </Panel>
      </In>
    </div>
  );
}

function Iot({ vi }: { vi: boolean }) {
  const pts = [
    [15, 35], [30, 60], [44, 28], [58, 70], [70, 40], [84, 62], [24, 82], [64, 18], [88, 24],
  ];
  return (
    <div className="mx-auto h-full max-w-[19rem] px-5 pt-2">
      <In>
        <Panel className="h-full">
          <div className="flex items-center justify-between text-[11px]">
            <span className="flex items-center gap-1.5 font-bold">
              <Radio className="size-3.5 text-brand" aria-hidden="true" /> {vi ? "Trạm trực tuyến" : "Stations online"}
            </span>
            <span className="font-bold tabular-nums text-emerald-600">1,024</span>
          </div>
          <div className="relative mt-3 h-28 rounded-xl bg-sunken">
            {pts.map(([x, y], i) => (
              <span key={i} className="absolute -translate-x-1/2 -translate-y-1/2" style={{ left: `${x}%`, top: `${y}%` }}>
                <span className="absolute inset-0 animate-ping rounded-full bg-brand/40" style={{ animationDelay: `${i * 0.35}s`, animationDuration: "2.4s" }} />
                <span className={`relative block size-2 rounded-full ${i === 3 ? "bg-rose-500" : i % 2 ? "bg-fg/50" : "bg-brand"}`} />
              </span>
            ))}
          </div>
          <p className="mt-2 flex items-center gap-1.5 text-[11px] font-semibold text-rose-600">
            <CircleDot className="size-3" aria-hidden="true" /> {vi ? "COD vượt ngưỡng · Trạm KCN 07" : "COD over threshold · Station IP-07"}
          </p>
        </Panel>
      </In>
    </div>
  );
}

function Analytics({ vi }: { vi: boolean }) {
  const line = "M0 50 C 20 46, 35 30, 55 34 S 90 16, 110 20 S 150 6, 180 4";
  return (
    <div className="mx-auto h-full max-w-[19rem] px-5 pt-2">
      <In>
        <Panel className="h-full">
          <div className="flex items-baseline justify-between">
            <p className="text-[11px] font-semibold text-subtle">{vi ? "Doanh thu tuần" : "Weekly revenue"}</p>
            <span className="flex items-center gap-0.5 text-[11px] font-bold text-emerald-600">
              <TrendingUp className="size-3" aria-hidden="true" /> 18%
            </span>
          </div>
          <p className="mt-0.5 text-2xl font-extrabold tracking-tight">{vi ? "142tr" : "$5.6K"}</p>
          <svg viewBox="0 0 180 56" className="mt-2 h-14 w-full" fill="none" aria-hidden="true">
            <motion.path d={line} stroke="var(--brand)" strokeWidth="2.5" strokeLinecap="round" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={view} transition={{ duration: 1.4, ease }} />
          </svg>
          <div className="mt-2 grid grid-cols-3 gap-1.5 text-center text-[10px]">
            {[
              ["OKR", "78%"],
              ["KPI", "92%"],
              ["NPS", "61"],
            ].map(([k, v]) => (
              <div key={k} className="rounded-lg bg-sunken py-1.5">
                <p className="text-subtle">{k}</p>
                <p className="font-bold">{v}</p>
              </div>
            ))}
          </div>
        </Panel>
      </In>
    </div>
  );
}

function Rhythm({ vi }: { vi: boolean }) {
  const weeks = vi ? ["T1", "T2", "T3", "T4", "T5", "T6", "T7", "T8"] : ["W1", "W2", "W3", "W4", "W5", "W6", "W7", "W8"];
  const done = [1, 1, 1, 1, 1, 0.6, 0, 0];
  return (
    <div className="mx-auto h-full max-w-[19rem] px-5 pt-2">
      <In>
        <Panel className="h-full">
          <p className="text-xs font-bold">{vi ? "Lộ trình triển khai" : "Rollout roadmap"}</p>
          <div className="mt-3 grid grid-cols-8 gap-1">
            {weeks.map((w, i) => (
              <div key={w} className="text-center">
                <motion.div
                  className={`h-14 rounded-md ${done[i] === 1 ? "bg-brand" : done[i] > 0 ? "bg-brand/40" : "bg-sunken"}`}
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={view}
                  style={{ originY: 1 }}
                  transition={{ delay: 0.1 + i * 0.06, duration: 0.6, ease }}
                />
                <p className="mt-1 text-[9px] font-semibold text-subtle">{w}</p>
              </div>
            ))}
          </div>
          <div className="mt-3 flex items-center gap-2 text-[11px]">
            <span className="flex -space-x-1.5">
              {["A", "B", "C"].map((x, i) => (
                <span key={x} className={`grid size-5 place-items-center rounded-full border-2 border-elev text-[9px] font-bold text-white ${["bg-brand", "bg-fg/70", "bg-emerald-500"][i]}`}>
                  {x}
                </span>
              ))}
            </span>
            <span className="text-muted">{vi ? "3 owner · 12 chỉ số" : "3 owners · 12 metrics"}</span>
          </div>
        </Panel>
      </In>
    </div>
  );
}

function Coaching({ vi }: { vi: boolean }) {
  const qs = vi ? ["Điều gì quan trọng nhất tuần này?", "Việc nào giao cho AI?", "Quyết định nào đang bị treo?"] : ["What matters most this week?", "What can AI take over?", "Which decision is stuck?"];
  return (
    <div className="mx-auto h-full max-w-[19rem] px-5 pt-2">
      <In>
        <Panel className="h-full">
          <p className="text-xs font-bold">1:1 · CEO</p>
          <ul className="mt-3 grid gap-2">
            {qs.map((q, i) => (
              <motion.li
                key={q}
                className="flex items-start gap-2 rounded-xl bg-sunken px-2.5 py-2 text-[11px]"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={view}
                transition={{ delay: 0.15 + i * 0.15 }}
              >
                <span className="grid size-4 shrink-0 place-items-center rounded-full bg-brand text-[9px] font-bold text-white">{i + 1}</span>
                {q}
              </motion.li>
            ))}
          </ul>
        </Panel>
      </In>
    </div>
  );
}

function Learning({ vi }: { vi: boolean }) {
  return (
    <div className="mx-auto h-full max-w-[19rem] px-5 pt-2">
      <In>
        <Panel className="h-full">
          <div className="relative grid h-24 place-items-center overflow-hidden rounded-xl bg-invert">
            <motion.span
              className="grid size-11 place-items-center rounded-full bg-brand text-white"
              initial={{ scale: 0.6 }}
              whileInView={{ scale: 1 }}
              viewport={view}
              transition={{ type: "spring", stiffness: 260, damping: 14, delay: 0.2 }}
            >
              <Play className="size-5 translate-x-px fill-current" aria-hidden="true" />
            </motion.span>
            <span className="absolute bottom-2 right-2 rounded bg-white/15 px-1.5 py-0.5 text-[9px] font-bold text-white">12:40</span>
          </div>
          <div className="mt-3 flex items-center gap-2 text-[11px]">
            <GraduationCap className="size-4 text-brand" aria-hidden="true" />
            <span className="flex-1 font-semibold">{vi ? "Bài 1 · Tư duy thuật toán" : "Lesson 1 · Algorithmic thinking"}</span>
          </div>
          <div className="mt-2">
            <Bar value={72} delay={0.4} />
          </div>
          <p className="mt-2 text-[11px] font-bold">1,000,000+ {vi ? "lượt xem" : "views"}</p>
        </Panel>
      </In>
    </div>
  );
}

export function SolutionArtFor({ art, locale }: { art: ArtKey; locale: string }) {
  const vi = locale === "vi";
  switch (art) {
    case "goals":
      return <Goals vi={vi} />;
    case "agent":
      return <Agent vi={vi} />;
    case "hermes":
      return <Hermes vi={vi} />;
    case "iot":
      return <Iot vi={vi} />;
    case "analytics":
      return <Analytics vi={vi} />;
    case "rhythm":
      return <Rhythm vi={vi} />;
    case "coaching":
      return <Coaching vi={vi} />;
    case "learning":
      return <Learning vi={vi} />;
  }
}
