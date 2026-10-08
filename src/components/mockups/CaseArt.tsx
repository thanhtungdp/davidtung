"use client";

import { motion } from "motion/react";
import {
  AlertTriangle,
  ArrowRight,
  Bot,
  Camera,
  Check,
  CheckCircle2,
  Clock,
  Database,
  FileText,
  ImageIcon,
  Layers,
  ListChecks,
  MessageSquare,
  Monitor,
  Play,
  Radio,
  RefreshCw,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  Wifi,
} from "lucide-react";
import { hermesArts } from "./HermesArt";
import { Bar, In, Panel } from "./SolutionArt";

const ease = [0.16, 1, 0.3, 1] as const;
const view = { once: true, margin: "-60px" } as const;

export type CaseArtKey =
  | "goalTree"
  | "execDashboard"
  | "aiAssistant"
  | "meetingAgenda"
  | "integrations"
  | "photoIntake"
  | "optionCompare"
  | "quoteDoc"
  | "orderSync"
  | "adoption"
  | "sensorList"
  | "dataStream"
  | "alertConsole"
  | "publicAqi"
  | "lessonOutline"
  | "quizFeedback"
  | "viewsChart"
  | keyof typeof hermesArts;

type P = { vi: boolean };

function Pop({ children, className, delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  return (
    <motion.div className={className} initial={{ opacity: 0, y: 10, scale: 0.97 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={view} transition={{ duration: 0.55, ease, delay }}>
      {children}
    </motion.div>
  );
}

function Head({ icon: Icon, title, right }: { icon: typeof Target; title: string; right?: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2 border-b border-line pb-3">
      <span className="grid size-7 place-items-center rounded-lg bg-tint-orange text-brand">
        <Icon className="size-4" aria-hidden="true" />
      </span>
      <p className="text-sm font-bold">{title}</p>
      <div className="ml-auto">{right}</div>
    </div>
  );
}

/* ---------------- Simplamo ---------------- */

function GoalTree({ vi }: P) {
  const tree = vi
    ? [
        { t: "Công ty · Tăng trưởng doanh thu 30%", v: 78, d: 0, o: "CEO" },
        { t: "Kinh doanh · Mở 120 đại lý mới", v: 64, d: 1, o: "KD" },
        { t: "Marketing · 3.000 lead chất lượng", v: 82, d: 1, o: "MK" },
        { t: "Đội miền Bắc · 40 đại lý", v: 55, d: 2, o: "MB" },
        { t: "Đội miền Nam · 80 đại lý", v: 71, d: 2, o: "MN" },
      ]
    : [
        { t: "Company · Grow revenue 30%", v: 78, d: 0, o: "CEO" },
        { t: "Sales · Open 120 new dealers", v: 64, d: 1, o: "SL" },
        { t: "Marketing · 3,000 qualified leads", v: 82, d: 1, o: "MK" },
        { t: "North team · 40 dealers", v: 55, d: 2, o: "N" },
        { t: "South team · 80 dealers", v: 71, d: 2, o: "S" },
      ];
  return (
    <Panel className="h-full">
      <Head icon={Target} title={vi ? "Cây mục tiêu · Q4" : "Goal tree · Q4"} right={<span className="rounded-full bg-tint-orange px-2 py-0.5 text-[10px] font-bold text-brand">OKR</span>} />
      <ul className="mt-3 grid gap-2.5">
        {tree.map((r, i) => (
          <Pop key={r.t} delay={0.1 + i * 0.08}>
            <li className="relative flex items-center gap-2.5" style={{ paddingLeft: r.d * 18 }}>
              {r.d > 0 && <span className="absolute top-1/2 h-px w-3 bg-line" style={{ left: r.d * 18 - 12 }} aria-hidden="true" />}
              <span className="grid size-6 shrink-0 place-items-center rounded-full bg-invert text-[9px] font-bold text-invert-fg">{r.o}</span>
              <div className="min-w-0 flex-1">
                <div className="flex justify-between gap-2 text-[11px]">
                  <span className="truncate">{r.t}</span>
                  <span className="font-bold tabular-nums">{r.v}%</span>
                </div>
                <div className="mt-1">
                  <Bar value={r.v} delay={0.3 + i * 0.08} />
                </div>
              </div>
            </li>
          </Pop>
        ))}
      </ul>
    </Panel>
  );
}

function ExecDashboard({ vi }: P) {
  const kpis = [
    { k: vi ? "Doanh thu" : "Revenue", v: vi ? "4,2 tỷ" : "$168K", d: "+12%" },
    { k: "OKR", v: "78%", d: "+6" },
    { k: "KPI", v: "92%", d: "+3" },
  ];
  const line = "M0 60 C 30 55, 50 40, 80 44 S 130 22, 160 26 S 210 10, 240 6";
  return (
    <Panel className="h-full">
      <Head icon={TrendingUp} title={vi ? "Dashboard điều hành" : "Executive dashboard"} right={<span className="text-[10px] font-semibold text-subtle">{vi ? "Tuần 6" : "Week 6"}</span>} />
      <div className="mt-3 grid grid-cols-3 gap-2">
        {kpis.map((k, i) => (
          <Pop key={k.k} delay={0.1 + i * 0.08} className="rounded-xl bg-sunken p-2.5">
            <p className="text-[10px] text-subtle">{k.k}</p>
            <p className="text-base font-extrabold tracking-tight">{k.v}</p>
            <p className="text-[10px] font-bold text-emerald-600">{k.d}</p>
          </Pop>
        ))}
      </div>
      <svg viewBox="0 0 240 66" className="mt-3 h-20 w-full" fill="none" aria-hidden="true">
        {[16, 33, 50].map((y) => (
          <line key={y} x1="0" x2="240" y1={y} y2={y} stroke="var(--line)" strokeDasharray="3 4" />
        ))}
        <motion.path d={line} stroke="var(--brand)" strokeWidth="3" strokeLinecap="round" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={view} transition={{ duration: 1.5, ease }} />
      </svg>
      <div className="mt-2 flex items-center gap-2 rounded-lg bg-rose-500/10 px-2.5 py-1.5 text-[11px] font-semibold text-rose-600">
        <AlertTriangle className="size-3.5" aria-hidden="true" /> {vi ? "Miền Bắc chậm 9% so với kế hoạch" : "North region 9% behind plan"}
      </div>
    </Panel>
  );
}

function AiAssistant({ vi }: P) {
  const sugg = vi ? ["Tăng tỷ lệ chốt đơn đại lý lên 35%", "Giảm thời gian báo giá xuống < 60s", "Đào tạo 100% đại lý dùng Sale AI"] : ["Raise dealer close rate to 35%", "Cut quote time below 60s", "Train 100% of dealers on Sale AI"];
  return (
    <Panel className="h-full">
      <Head icon={Sparkles} title={vi ? "AI gợi ý mục tiêu" : "AI goal assistant"} />
      <Pop delay={0.1} className="mt-3 rounded-xl bg-sunken px-3 py-2 text-[11px] text-muted">
        {vi ? "“Mục tiêu Q4 cho đội Kinh doanh, bám chiến lược kênh đại lý”" : "“Q4 goals for Sales, aligned with the dealer-channel strategy”"}
      </Pop>
      <ul className="mt-3 grid gap-2">
        {sugg.map((s, i) => (
          <Pop key={s} delay={0.35 + i * 0.15}>
            <li className="flex items-center gap-2 rounded-xl border border-line px-3 py-2 text-[11px]">
              <Sparkles className="size-3.5 shrink-0 text-brand" aria-hidden="true" />
              <span className="flex-1">{s}</span>
              <span className="rounded-md bg-brand px-1.5 py-0.5 text-[9px] font-bold text-white">{vi ? "Thêm" : "Add"}</span>
            </li>
          </Pop>
        ))}
      </ul>
    </Panel>
  );
}

function MeetingAgenda({ vi }: P) {
  const items = vi
    ? [
        { t: "Review scoreboard tuần", s: "done" },
        { t: "3 mục tiêu đang đỏ — nguyên nhân", s: "done" },
        { t: "Gỡ vướng: kho miền Bắc", s: "now" },
        { t: "Cam kết tuần tới (mỗi người 1–3)", s: "next" },
      ]
    : [
        { t: "Weekly scoreboard review", s: "done" },
        { t: "3 red goals — root causes", s: "done" },
        { t: "Unblock: northern warehouse", s: "now" },
        { t: "Next-week commitments (1–3 each)", s: "next" },
      ];
  return (
    <Panel className="h-full">
      <Head icon={ListChecks} title={vi ? "Họp WIG · Thứ Hai 8:30" : "WIG meeting · Mon 8:30"} right={<span className="flex items-center gap-1 text-[10px] font-semibold text-subtle"><Clock className="size-3" /> 30'</span>} />
      <ol className="mt-3 grid gap-2">
        {items.map((it, i) => (
          <Pop key={it.t} delay={0.1 + i * 0.12}>
            <li className={`flex items-center gap-2.5 rounded-xl px-3 py-2 text-[11px] ${it.s === "now" ? "bg-tint-orange font-semibold" : "bg-sunken"}`}>
              <span className={`grid size-5 shrink-0 place-items-center rounded-full text-[9px] font-bold ${it.s === "done" ? "bg-brand text-white" : it.s === "now" ? "border-2 border-brand text-brand" : "border border-line text-subtle"}`}>
                {it.s === "done" ? <Check className="size-3" /> : i + 1}
              </span>
              {it.t}
            </li>
          </Pop>
        ))}
      </ol>
      <div className="mt-3 flex -space-x-1.5">
        {["bg-brand", "bg-fg/70", "bg-emerald-500", "bg-sky-500"].map((c, i) => (
          <span key={i} className={`size-6 rounded-full border-2 border-elev ${c}`} />
        ))}
        <span className="pl-3 text-[11px] text-muted">{vi ? "4 owner đã cập nhật" : "4 owners updated"}</span>
      </div>
    </Panel>
  );
}

function Integrations({ vi }: P) {
  const apps = ["Excel", "Odoo", "HubSpot", "Teams", "Slack", "SAP"];
  return (
    <Panel className="h-full">
      <Head icon={Layers} title={vi ? "Kết nối dữ liệu" : "Data connections"} />
      <div className="relative mt-4 grid grid-cols-[1fr_auto_1fr] items-center gap-3">
        <div className="grid gap-1.5">
          {apps.slice(0, 3).map((a, i) => (
            <Pop key={a} delay={0.1 + i * 0.08} className="rounded-lg border border-line px-2.5 py-1.5 text-center text-[11px] font-semibold">
              {a}
            </Pop>
          ))}
        </div>
        <motion.div className="grid size-16 place-items-center rounded-2xl bg-invert text-center text-[10px] font-extrabold leading-tight text-invert-fg" initial={{ scale: 0.6, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={view} transition={{ type: "spring", stiffness: 240, damping: 16, delay: 0.3 }}>
          Simplamo
          <br />
          OS
        </motion.div>
        <div className="grid gap-1.5">
          {apps.slice(3).map((a, i) => (
            <Pop key={a} delay={0.2 + i * 0.08} className="rounded-lg border border-line px-2.5 py-1.5 text-center text-[11px] font-semibold">
              {a}
            </Pop>
          ))}
        </div>
      </div>
      <p className="mt-4 flex items-center gap-1.5 text-[11px] font-semibold text-emerald-600">
        <RefreshCw className="size-3.5" aria-hidden="true" /> {vi ? "Đồng bộ 2 phút trước · 1.284 chỉ số" : "Synced 2 min ago · 1,284 metrics"}
      </p>
    </Panel>
  );
}

/* ---------------- Sale AI ---------------- */

function PhotoIntake({ vi }: P) {
  return (
    <Panel className="h-full">
      <Head icon={Camera} title={vi ? "Nhận bối cảnh" : "Capture context"} right={<span className="text-[10px] font-bold text-subtle">0:12</span>} />
      <div className="mt-3 grid grid-cols-[1fr_1.1fr] gap-3">
        <Pop delay={0.1} className="relative grid aspect-[4/5] place-items-center overflow-hidden rounded-xl bg-gradient-to-br from-stone-300 to-stone-500 dark:from-stone-600 dark:to-stone-800">
          <ImageIcon className="size-8 text-white/70" aria-hidden="true" />
          <motion.span className="absolute inset-x-3 top-1/3 h-0.5 bg-brand shadow-[0_0_12px_var(--brand)]" initial={{ y: 0 }} whileInView={{ y: [0, 60, 0] }} viewport={view} transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }} />
          <span className="absolute bottom-2 left-2 rounded bg-black/50 px-1.5 py-0.5 text-[9px] font-bold text-white">2.4m × 3.0m</span>
        </Pop>
        <div className="grid content-start gap-2 text-[11px]">
          {(vi
            ? [
                ["Loại", "Cửa cuốn"],
                ["Kích thước", "2.4 × 3.0m"],
                ["Ngân sách", "15tr"],
                ["Sử dụng", "Nhà phố"],
              ]
            : [
                ["Type", "Roller door"],
                ["Size", "2.4 × 3.0m"],
                ["Budget", "$600"],
                ["Usage", "Townhouse"],
              ]
          ).map(([k, v], i) => (
            <Pop key={k} delay={0.25 + i * 0.1} className="rounded-lg border border-line px-2.5 py-1.5">
              <p className="text-[9px] text-subtle">{k}</p>
              <p className="font-semibold">{v}</p>
            </Pop>
          ))}
        </div>
      </div>
    </Panel>
  );
}

function OptionCompare({ vi }: P) {
  const opts = [
    { n: vi ? "Tiêu chuẩn" : "Standard", p: vi ? "11.8tr" : "$470", s: 72 },
    { n: vi ? "Khuyên dùng" : "Recommended", p: vi ? "14.2tr" : "$568", s: 94, best: true },
    { n: vi ? "Cao cấp" : "Premium", p: vi ? "19.5tr" : "$780", s: 81 },
  ];
  return (
    <Panel className="h-full">
      <Head icon={Bot} title={vi ? "Đề xuất cấu hình" : "Recommended configs"} />
      <div className="mt-3 grid grid-cols-3 gap-2">
        {opts.map((o, i) => (
          <Pop key={o.n} delay={0.1 + i * 0.12} className={`rounded-xl p-2.5 text-center ${o.best ? "bg-invert text-invert-fg ring-2 ring-brand" : "bg-sunken"}`}>
            <p className="text-[10px] font-semibold opacity-70">{o.n}</p>
            <p className="mt-1 text-sm font-extrabold">{o.p}</p>
            <p className={`mt-1 text-[10px] font-bold ${o.best ? "text-brand" : "text-subtle"}`}>{o.s}% {vi ? "phù hợp" : "fit"}</p>
          </Pop>
        ))}
      </div>
      <Pop delay={0.5} className="mt-3 rounded-xl border border-line p-2.5 text-[11px] text-muted">
        <span className="font-semibold text-fg">{vi ? "Lý do: " : "Why: "}</span>
        {vi ? "khổ 3m cần mô-tơ 300kg, nhà phố mặt tiền hướng Tây — chọn lá nan cách nhiệt." : "3m span needs a 300kg motor; west-facing frontage — insulated slats recommended."}
      </Pop>
    </Panel>
  );
}

function QuoteDoc({ vi }: P) {
  const rows = vi
    ? [
        ["Lá cửa cách nhiệt 7.2m²", "9.4tr"],
        ["Mô-tơ 300kg + lưu điện", "3.6tr"],
        ["Lắp đặt", "1.2tr"],
      ]
    : [
        ["Insulated slats 7.2m²", "$376"],
        ["300kg motor + UPS", "$144"],
        ["Installation", "$48"],
      ];
  return (
    <Panel className="h-full">
      <Head icon={FileText} title={vi ? "Báo giá #BG-204" : "Quote #BG-204"} right={<span className="rounded-full bg-emerald-500/15 px-2 py-0.5 text-[10px] font-bold text-emerald-600">{vi ? "Giá đại lý C1" : "C1 pricing"}</span>} />
      <table className="mt-3 w-full text-[11px]">
        <tbody>
          {rows.map(([k, v], i) => (
            <motion.tr key={k} className="border-b border-dashed border-line" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={view} transition={{ delay: 0.15 + i * 0.12 }}>
              <td className="py-2">{k}</td>
              <td className="py-2 text-right font-semibold tabular-nums">{v}</td>
            </motion.tr>
          ))}
        </tbody>
      </table>
      <div className="mt-3 flex items-center justify-between">
        <span className="text-xs font-bold">{vi ? "Tổng" : "Total"}</span>
        <span className="text-lg font-extrabold text-brand">{vi ? "14.2tr" : "$568"}</span>
      </div>
      <Pop delay={0.6} className="mt-3 flex gap-2">
        <span className="flex-1 rounded-lg bg-invert py-2 text-center text-[11px] font-bold text-invert-fg">{vi ? "Gửi khách" : "Send"}</span>
        <span className="flex-1 rounded-lg border border-line py-2 text-center text-[11px] font-bold">PDF</span>
      </Pop>
    </Panel>
  );
}

function OrderSync({ vi }: P) {
  const steps = vi ? ["Báo giá đã duyệt", "Tạo đơn hàng", "Đồng bộ SAP", "Xác nhận đại lý"] : ["Quote approved", "Create order", "Sync to SAP", "Dealer confirmed"];
  return (
    <Panel className="h-full">
      <Head icon={Database} title={vi ? "Lên đơn · SO-88213" : "Place order · SO-88213"} right={<span className="text-[10px] font-bold text-subtle">1:58</span>} />
      <ol className="relative mt-4 grid gap-3 pl-6">
        <span className="absolute bottom-2 left-[9px] top-2 w-0.5 bg-line" aria-hidden="true" />
        <motion.span className="absolute left-[9px] top-2 w-0.5 origin-top bg-brand" style={{ height: "calc(100% - 1rem)" }} initial={{ scaleY: 0 }} whileInView={{ scaleY: 1 }} viewport={view} transition={{ duration: 1.4, ease }} aria-hidden="true" />
        {steps.map((s, i) => (
          <Pop key={s} delay={0.2 + i * 0.3}>
            <li className="relative flex items-center gap-2 text-[11px] font-semibold">
              <span className="absolute -left-6 grid size-5 place-items-center rounded-full bg-brand text-white">
                <Check className="size-3" aria-hidden="true" />
              </span>
              {s}
              <span className="ml-auto text-[10px] font-normal text-subtle">{["0s", "8s", "21s", "58s"][i]}</span>
            </li>
          </Pop>
        ))}
      </ol>
    </Panel>
  );
}

function Adoption({ vi }: P) {
  const bars = [32, 45, 51, 63, 70, 78, 86];
  return (
    <Panel className="h-full">
      <Head icon={Users} title={vi ? "Adoption theo tuần" : "Weekly adoption"} right={<span className="text-[11px] font-bold text-emerald-600">86%</span>} />
      <div className="mt-4 flex h-28 items-end gap-2">
        {bars.map((h, i) => (
          <motion.div key={i} className={`flex-1 rounded-t-md ${i === bars.length - 1 ? "bg-brand" : "bg-brand/30"}`} initial={{ height: 0 }} whileInView={{ height: `${h}%` }} viewport={view} transition={{ delay: 0.1 + i * 0.07, duration: 0.8, ease }} />
        ))}
      </div>
      <div className="mt-3 grid grid-cols-3 gap-2 text-center text-[10px]">
        {(vi ? [["Phản hồi", "42s"], ["Chuyển đổi", "+19%"], ["Cần người", "7%"]] : [["Response", "42s"], ["Conversion", "+19%"], ["Human", "7%"]]).map(([k, v]) => (
          <div key={k} className="rounded-lg bg-sunken py-1.5">
            <p className="text-subtle">{k}</p>
            <p className="font-bold">{v}</p>
          </div>
        ))}
      </div>
    </Panel>
  );
}

/* ---------------- iLotusLand ---------------- */

function SensorList({ vi }: P) {
  const rows = [
    { n: "pH", v: "7.2", ok: true },
    { n: "COD", v: "68 mg/L", ok: true },
    { n: "TSS", v: "41 mg/L", ok: true },
    { n: vi ? "Lưu lượng" : "Flow", v: "312 m³/h", ok: true },
    { n: "NH4+", v: "9.8 mg/L", ok: false },
  ];
  return (
    <Panel className="h-full">
      <Head icon={Radio} title={vi ? "Trạm nước thải · KCN 07" : "Wastewater · IP-07"} right={<span className="flex items-center gap-1 text-[10px] font-bold text-emerald-600"><span className="size-1.5 animate-pulse rounded-full bg-emerald-500" />LIVE</span>} />
      <ul className="mt-2 divide-y divide-line">
        {rows.map((r, i) => (
          <Pop key={r.n} delay={0.08 * i}>
            <li className="flex items-center justify-between py-2 text-[11px]">
              <span className="font-semibold">{r.n}</span>
              <span className={`tabular-nums ${r.ok ? "" : "font-bold text-rose-600"}`}>{r.v}</span>
              <span className={`size-2 rounded-full ${r.ok ? "bg-emerald-500" : "bg-rose-500"}`} />
            </li>
          </Pop>
        ))}
      </ul>
    </Panel>
  );
}

function DataStream({ vi }: P) {
  return (
    <Panel className="h-full">
      <Head icon={Wifi} title="Datalogger" right={<span className="text-[10px] font-semibold text-subtle">{vi ? "mỗi 5 phút" : "every 5 min"}</span>} />
      <div className="mt-4 flex items-center gap-2">
        {[Radio, Database, Monitor].map((Icon, i) => (
          <div key={i} className="contents">
            <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-sunken">
              <Icon className="size-5 text-brand" aria-hidden="true" />
            </span>
            {i < 2 && (
              <div className="relative h-1 flex-1 overflow-hidden rounded-full bg-sunken">
                <motion.span className="absolute inset-y-0 w-6 rounded-full bg-brand" animate={{ x: ["-1.5rem", "6rem"] }} transition={{ duration: 1.4, repeat: Infinity, ease: "linear", delay: i * 0.7 }} />
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="mt-4 rounded-xl bg-invert p-3 font-mono text-[10px] leading-relaxed text-invert-fg/80">
        {["10:05 pH=7.2 COD=68 ✓", "10:10 pH=7.1 COD=70 ✓", "10:15 buffer→resend 3 ✓"].map((l, i) => (
          <motion.p key={l} initial={{ opacity: 0, x: -6 }} whileInView={{ opacity: 1, x: 0 }} viewport={view} transition={{ delay: 0.3 + i * 0.3 }}>
            {l}
          </motion.p>
        ))}
      </div>
    </Panel>
  );
}

function AlertConsole({ vi }: P) {
  const alerts = vi
    ? [
        { t: "NH4+ vượt ngưỡng 1.2×", s: "KCN 07", c: "rose" },
        { t: "Mất kết nối 6 phút", s: "Trạm QN-12", c: "amber" },
        { t: "Đã xử lý · hiệu chuẩn", s: "Trạm BD-31", c: "emerald" },
      ]
    : [
        { t: "NH4+ over limit 1.2×", s: "IP-07", c: "rose" },
        { t: "Link lost for 6 min", s: "Station QN-12", c: "amber" },
        { t: "Resolved · calibrated", s: "Station BD-31", c: "emerald" },
      ];
  const color = { rose: "bg-rose-500", amber: "bg-amber-500", emerald: "bg-emerald-500" } as const;
  return (
    <Panel className="h-full">
      <Head icon={AlertTriangle} title={vi ? "Cảnh báo & sự cố" : "Alerts & incidents"} right={<span className="rounded-full bg-rose-500/15 px-2 py-0.5 text-[10px] font-bold text-rose-600">2</span>} />
      <ul className="mt-3 grid gap-2">
        {alerts.map((a, i) => (
          <Pop key={a.t} delay={0.12 * i}>
            <li className="flex items-center gap-2.5 rounded-xl border border-line px-3 py-2 text-[11px]">
              <span className={`size-2 shrink-0 rounded-full ${color[a.c as keyof typeof color]}`} />
              <span className="flex-1 font-semibold">{a.t}</span>
              <span className="text-subtle">{a.s}</span>
            </li>
          </Pop>
        ))}
      </ul>
      <Pop delay={0.5} className="mt-3 flex items-center gap-2 rounded-xl bg-tint-orange px-3 py-2 text-[11px] font-semibold">
        <MessageSquare className="size-3.5 text-brand" aria-hidden="true" /> {vi ? "Đã gửi SMS + email cho 3 người phụ trách" : "SMS + email sent to 3 owners"}
      </Pop>
    </Panel>
  );
}

function PublicAqi({ vi }: P) {
  return (
    <Panel className="h-full">
      <Head icon={Monitor} title={vi ? "Công khai dữ liệu · LED" : "Public data · LED board"} />
      <div className="mt-3 grid grid-cols-[auto_1fr] items-center gap-4">
        <div className="relative size-24">
          <svg viewBox="0 0 100 100" className="size-full -rotate-90" aria-hidden="true">
            <circle cx="50" cy="50" r="42" fill="none" stroke="var(--line)" strokeWidth="10" />
            <motion.circle cx="50" cy="50" r="42" fill="none" stroke="#10b981" strokeWidth="10" strokeLinecap="round" initial={{ pathLength: 0 }} whileInView={{ pathLength: 0.42 }} viewport={view} transition={{ duration: 1.4, ease }} />
          </svg>
          <div className="absolute inset-0 grid place-items-center text-center">
            <div>
              <p className="text-xl font-extrabold">42</p>
              <p className="text-[9px] font-bold text-emerald-600">AQI</p>
            </div>
          </div>
        </div>
        <div className="rounded-xl bg-neutral-950 p-3 font-mono text-[11px] leading-relaxed text-amber-300">
          <p>{vi ? "CHẤT LƯỢNG KK: TỐT" : "AIR QUALITY: GOOD"}</p>
          <p>PM2.5 12 µg/m³</p>
          <p>NO2 18 µg/m³</p>
        </div>
      </div>
      <p className="mt-3 text-[11px] text-muted">{vi ? "Cập nhật real-time trên website Sở và bảng LED cổng KCN" : "Real-time on the agency website and the park's LED board"}</p>
    </Panel>
  );
}

/* ---------------- Education ---------------- */

function LessonOutline({ vi }: P) {
  const ls = vi ? ["Biến và kiểu dữ liệu", "Vòng lặp for", "Mảng một chiều", "Thuật toán sắp xếp"] : ["Variables & types", "For loops", "Arrays", "Sorting algorithms"];
  return (
    <Panel className="h-full">
      <Head icon={ListChecks} title={vi ? "Lộ trình Pascal" : "Pascal track"} right={<span className="text-[10px] font-semibold text-subtle">12'/bài</span>} />
      <ol className="mt-3 grid gap-2">
        {ls.map((l, i) => (
          <Pop key={l} delay={0.1 * i}>
            <li className="flex items-center gap-2.5 rounded-xl bg-sunken px-3 py-2 text-[11px]">
              <span className={`grid size-5 place-items-center rounded-full text-[9px] font-bold ${i < 2 ? "bg-brand text-white" : "border border-line"}`}>{i < 2 ? <Check className="size-3" /> : i + 1}</span>
              <span className="flex-1">{l}</span>
              <Play className="size-3 text-subtle" aria-hidden="true" />
            </li>
          </Pop>
        ))}
      </ol>
    </Panel>
  );
}

function QuizFeedback({ vi }: P) {
  const opts = ["for i := 1 to n do", "while i < n", "repeat … until"];
  return (
    <Panel className="h-full">
      <Head icon={CheckCircle2} title={vi ? "Bài tập nhanh" : "Quick exercise"} />
      <p className="mt-3 text-[11px] font-semibold">{vi ? "Vòng lặp nào chạy đúng n lần?" : "Which loop runs exactly n times?"}</p>
      <ul className="mt-2 grid gap-1.5 font-mono text-[11px]">
        {opts.map((o, i) => (
          <Pop key={o} delay={0.1 + i * 0.1}>
            <li className={`flex items-center justify-between rounded-lg px-3 py-2 ${i === 0 ? "bg-emerald-500/15 font-bold text-emerald-700 dark:text-emerald-400" : "bg-sunken"}`}>
              {o}
              {i === 0 && <Check className="size-3.5" aria-hidden="true" />}
            </li>
          </Pop>
        ))}
      </ul>
      <Pop delay={0.5} className="mt-3 flex items-center gap-2 text-[11px] font-semibold text-brand">
        <Sparkles className="size-3.5" aria-hidden="true" /> {vi ? "Chính xác! +10 điểm · chuỗi 5 ngày" : "Correct! +10 pts · 5-day streak"}
      </Pop>
    </Panel>
  );
}

function ViewsChart({ vi }: P) {
  const path = "M0 70 C 40 68, 70 62, 100 52 S 160 26, 200 14 S 240 4, 260 2";
  return (
    <Panel className="h-full">
      <Head icon={TrendingUp} title={vi ? "Lượt xem tích luỹ" : "Cumulative views"} />
      <p className="mt-3 text-3xl font-extrabold tracking-tight">1,000,000+</p>
      <svg viewBox="0 0 260 74" className="mt-2 h-20 w-full" fill="none" aria-hidden="true">
        <motion.path d={path} stroke="var(--brand)" strokeWidth="3" strokeLinecap="round" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={view} transition={{ duration: 1.6, ease }} />
      </svg>
      <p className="flex items-center gap-1 text-[11px] text-muted">
        {vi ? "Một bài giảng tốt chạy thay bạn" : "A great lesson runs for you"} <ArrowRight className="size-3" aria-hidden="true" /> ×1M
      </p>
    </Panel>
  );
}

const map: Record<CaseArtKey, (p: P) => React.ReactElement> = {
  goalTree: GoalTree,
  execDashboard: ExecDashboard,
  aiAssistant: AiAssistant,
  meetingAgenda: MeetingAgenda,
  integrations: Integrations,
  photoIntake: PhotoIntake,
  optionCompare: OptionCompare,
  quoteDoc: QuoteDoc,
  orderSync: OrderSync,
  adoption: Adoption,
  sensorList: SensorList,
  dataStream: DataStream,
  alertConsole: AlertConsole,
  publicAqi: PublicAqi,
  lessonOutline: LessonOutline,
  quizFeedback: QuizFeedback,
  viewsChart: ViewsChart,
  ...hermesArts,
};

/** A product prototype for one step of a case study, bleeding off the bottom of its tinted frame. */
export function CaseArt({ art, locale }: { art: CaseArtKey; locale: string }) {
  const Comp = map[art];
  return (
    <div className="mx-auto h-full w-full max-w-md px-5 pt-6 sm:px-8 sm:pt-8">
      <In>
        <Comp vi={locale === "vi"} />
      </In>
    </div>
  );
}
