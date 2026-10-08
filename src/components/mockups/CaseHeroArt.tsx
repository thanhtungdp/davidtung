"use client";

import { motion } from "motion/react";
import { Bot, Check, ImageIcon, Play, Radio, Send, User } from "lucide-react";
import type { Dictionary } from "@/i18n";
import type { ProjectVisual } from "@/content/projects";
import { HeroDashboard } from "./HeroDashboard";

const ease = [0.16, 1, 0.3, 1] as const;

function Window({ title, children, right }: { title: string; children: React.ReactNode; right?: React.ReactNode }) {
  return (
    <div className="overflow-hidden rounded-[1.25rem] border border-line bg-elev shadow-[0_40px_100px_-30px_rgb(0_0_0/0.35)]">
      <div className="flex items-center gap-2 border-b border-line px-4 py-3">
        <span className="size-2.5 rounded-full bg-[#ff5f57]" />
        <span className="size-2.5 rounded-full bg-[#febc2e]" />
        <span className="size-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-3 text-xs font-semibold text-muted">{title}</span>
        <span className="ml-auto">{right}</span>
      </div>
      {children}
    </div>
  );
}

function AgentHero({ vi }: { vi: boolean }) {
  const msgs = [
    { me: true, node: <span className="flex items-center gap-1.5"><ImageIcon className="size-3.5" /> {vi ? "Ảnh công trình · 2.4m × 3m" : "Site photo · 2.4m × 3m"}</span> },
    { me: false, node: vi ? "Đề xuất 3 phương án. Khuyên dùng: lá cách nhiệt + mô-tơ 300kg." : "3 options. Recommended: insulated slats + 300kg motor." },
    { me: true, node: vi ? "Chốt phương án 2, giá đại lý cấp 1" : "Go with option 2, C1 pricing" },
    { me: false, node: vi ? "Đã tạo báo giá #BG-204 và đơn SO-88213 ✓" : "Quote #BG-204 and order SO-88213 created ✓" },
  ];
  return (
    <Window title="ADG Sale AI" right={<span className="text-[11px] font-bold text-emerald-600">● 2,000 {vi ? "đại lý" : "dealers"}</span>}>
      <div className="grid sm:grid-cols-[1.3fr_1fr]">
        <div className="grid content-end gap-2.5 p-4 text-[12px] sm:min-h-72">
          {msgs.map((m, i) => (
            <motion.div
              key={i}
              className={`flex max-w-[90%] items-start gap-2 rounded-2xl px-3 py-2 ${m.me ? "self-end justify-self-end rounded-br-md bg-invert text-invert-fg" : "rounded-bl-md border border-line"}`}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + i * 0.45, duration: 0.5, ease }}
            >
              {m.me ? <User className="mt-0.5 size-3.5 shrink-0" /> : <Bot className="mt-0.5 size-3.5 shrink-0 text-brand" />}
              {m.node}
            </motion.div>
          ))}
          <div className="mt-1 flex items-center gap-2 rounded-full border border-line px-3 py-2 text-[11px] text-subtle">
            {vi ? "Nhập yêu cầu…" : "Type a request…"} <Send className="ml-auto size-3.5" />
          </div>
        </div>
        <div className="hidden border-l border-line bg-sunken/60 p-4 sm:block">
          <p className="text-[11px] font-semibold text-subtle">{vi ? "Báo giá" : "Quote"} #BG-204</p>
          <motion.p className="mt-1 text-2xl font-extrabold text-brand" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.6 }}>
            {vi ? "14.2tr" : "$568"}
          </motion.p>
          <ul className="mt-3 grid gap-2 text-[11px]">
            {(vi ? ["Danh mục và tồn kho", "Chính sách đại lý", "Bảng giá cấp 1", "Đồng bộ SAP"] : ["Catalogue & stock", "Dealer policy", "C1 price list", "SAP sync"]).map((x, i) => (
              <motion.li key={x} className="flex items-center gap-2" initial={{ opacity: 0, x: 8 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1 + i * 0.25 }}>
                <span className="grid size-4 place-items-center rounded-full bg-brand text-white">
                  <Check className="size-2.5" />
                </span>
                {x}
              </motion.li>
            ))}
          </ul>
          <p className="mt-4 rounded-lg bg-elev px-2.5 py-2 text-[11px] font-bold">⏱ 58s</p>
        </div>
      </div>
    </Window>
  );
}

function IotHero({ vi }: { vi: boolean }) {
  const pts = [
    [22, 28], [30, 44], [38, 36], [46, 58], [54, 30], [60, 70], [68, 48], [74, 22], [80, 62], [34, 74], [52, 46], [64, 38],
  ];
  return (
    <Window title="iLotusLand · Environment On Cloud" right={<span className="text-[11px] font-bold text-emerald-600">● 1.024 {vi ? "trạm đang chạy" : "online"}</span>}>
      <div className="grid sm:grid-cols-[1.4fr_1fr]">
        <div className="relative h-64 bg-sunken/60 sm:h-72">
          <div className="grain absolute inset-0 opacity-60" />
          {pts.map(([x, y], i) => (
            <motion.span key={i} className="absolute -translate-x-1/2 -translate-y-1/2" style={{ left: `${x}%`, top: `${y}%` }} initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.4 + i * 0.05 }}>
              <span className="absolute inset-0 animate-ping rounded-full bg-brand/40" style={{ animationDelay: `${i * 0.25}s`, animationDuration: "2.6s" }} />
              <span className={`relative block size-2.5 rounded-full ${i === 5 ? "bg-rose-500" : "bg-brand"}`} />
            </motion.span>
          ))}
          <motion.div className="absolute left-[60%] top-[70%] ml-3 -translate-y-full rounded-lg bg-elev px-2.5 py-1.5 text-[10px] font-semibold shadow-lg" initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.4 }}>
            <span className="text-rose-600">NH4+ 9.8</span> · KCN 07
          </motion.div>
        </div>
        <div className="border-l border-line p-4">
          <p className="flex items-center gap-1.5 text-[11px] font-bold">
            <Radio className="size-3.5 text-brand" /> {vi ? "Trạm theo tỉnh" : "Stations by province"}
          </p>
          <ul className="mt-3 grid gap-2.5 text-[11px]">
            {[
              ["Bình Dương", 372],
              ["Quảng Ninh", 163],
              ["Nam Định", 34],
              ["Formosa HT", 27],
              ["Trà Vinh", 25],
            ].map(([n, v], i) => (
              <li key={n as string}>
                <div className="flex justify-between">
                  <span>{n}</span>
                  <span className="font-bold tabular-nums">{v}</span>
                </div>
                <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-sunken">
                  <motion.div className="h-full rounded-full bg-brand" initial={{ width: 0 }} animate={{ width: `${((v as number) / 372) * 100}%` }} transition={{ delay: 0.6 + i * 0.1, duration: 1, ease }} />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Window>
  );
}

function EduHero({ vi }: { vi: boolean }) {
  return (
    <Window title={vi ? "Bài giảng Pascal" : "Pascal lessons"} right={<span className="text-[11px] font-bold text-brand">{vi ? "1 triệu+ lượt xem" : "1M+ views"}</span>}>
      <div className="grid sm:grid-cols-[1.5fr_1fr]">
        <div className="relative grid h-60 place-items-center bg-neutral-950 sm:h-72">
          <pre className="absolute left-4 top-4 font-mono text-[11px] leading-relaxed text-emerald-300/80">
            {`program Hello;\nvar i: integer;\nbegin\n  for i := 1 to 3 do\n    writeln('X10');\nend.`}
          </pre>
          <motion.span className="relative grid size-16 place-items-center rounded-full bg-brand text-white shadow-[0_0_40px_var(--brand)]" initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ type: "spring", stiffness: 220, damping: 14, delay: 0.6 }}>
            <Play className="size-7 translate-x-0.5 fill-current" />
          </motion.span>
          <div className="absolute inset-x-4 bottom-4 h-1 overflow-hidden rounded-full bg-white/20">
            <motion.div className="h-full bg-brand" initial={{ width: 0 }} animate={{ width: "38%" }} transition={{ delay: 1, duration: 1.4, ease }} />
          </div>
        </div>
        <ol className="grid content-start gap-1 border-l border-line p-3 text-[11px]">
          {(vi ? ["Giới thiệu", "Biến & kiểu", "Vòng lặp for", "Mảng", "Sắp xếp"] : ["Intro", "Variables", "For loops", "Arrays", "Sorting"]).map((x, i) => (
            <motion.li key={x} className={`flex items-center gap-2 rounded-lg px-2 py-2 ${i === 2 ? "bg-tint-orange font-semibold" : ""}`} initial={{ opacity: 0, x: 8 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 + i * 0.1 }}>
              <span className={`grid size-5 place-items-center rounded-full text-[9px] font-bold ${i < 2 ? "bg-brand text-white" : "border border-line"}`}>{i < 2 ? <Check className="size-3" /> : i + 1}</span>
              {x}
            </motion.li>
          ))}
        </ol>
      </div>
    </Window>
  );
}

export function CaseHeroArt({ visual, locale, mockup }: { visual: ProjectVisual; locale: string; mockup: Dictionary["mockup"] }) {
  const vi = locale === "vi";
  switch (visual) {
    case "dashboard":
      return <HeroDashboard t={mockup} />;
    case "agent":
      return <AgentHero vi={vi} />;
    case "iot":
      return <IotHero vi={vi} />;
    case "education":
      return <EduHero vi={vi} />;
  }
}
