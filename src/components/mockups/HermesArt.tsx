"use client";

import { motion } from "motion/react";
import { Bot, Calendar, Check, CheckCheck, Clapperboard, FileText, Image as ImageIcon, Mail, MessageCircle, Mic, Send, Sheet, Sparkles, Sun, TrendingUp } from "lucide-react";
import { Panel } from "./SolutionArt";

const ease = [0.16, 1, 0.3, 1] as const;
const view = { once: true, margin: "-60px" } as const;
type P = { vi: boolean };

function Pop({ children, className, delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  return (
    <motion.div className={className} initial={{ opacity: 0, y: 10, scale: 0.97 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={view} transition={{ duration: 0.55, ease, delay }}>
      {children}
    </motion.div>
  );
}

function Head({ icon: Icon, title, right }: { icon: typeof Bot; title: string; right?: React.ReactNode }) {
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

export function HermesSalesArt({ vi }: P) {
  return (
    <Panel className="h-full">
      <Head icon={Mail} title="Gmail · Hermès Sales" right={<span className="text-[10px] font-bold text-emerald-600">{vi ? "Đã gửi" : "Sent"}</span>} />
      <div className="mt-3 grid gap-1 text-[11px]">
        <p>
          <span className="text-subtle">{vi ? "Tới:" : "To:"}</span> minh@acme.vn
        </p>
        <p className="font-semibold">{vi ? "Báo giá gói Pro — Hợp đồng 12 tháng (#BG-204)" : "Pro plan quote — 12-month contract (#BG-204)"}</p>
      </div>
      <Pop delay={0.15} className="mt-3 rounded-xl bg-sunken p-3 text-[11px] leading-relaxed text-muted">
        {vi ? "Chào anh Minh, em gửi báo giá gói Pro theo trao đổi sáng nay. Tổng 32,4tr/năm, đã gồm hướng dẫn sử dụng…" : "Hi Minh, attached is the Pro plan quote we discussed this morning. Total $1,296/yr including onboarding…"}
      </Pop>
      <Pop delay={0.35} className="mt-3 flex items-center gap-2 rounded-xl border border-line p-2.5 text-[11px]">
        <FileText className="size-4 text-brand" aria-hidden="true" />
        <span className="flex-1 font-semibold">BG-204.pdf</span>
        <span className="text-subtle">128 KB</span>
      </Pop>
      <Pop delay={0.55} className="mt-2 flex items-center gap-1.5 text-[11px] font-semibold text-emerald-600">
        <Sheet className="size-3.5" aria-hidden="true" /> {vi ? "Đã cập nhật CRM: “Đã báo giá”" : "CRM updated · status “Quoted”"}
      </Pop>
    </Panel>
  );
}

export function HermesFunnelArt({ vi }: P) {
  const rows = vi
    ? [
        ["Anh Sơn · Vela", "Nóng", "48.5tr", "rose"],
        ["Anh Minh · ACME", "Đã báo giá", "32.4tr", "brand"],
        ["Chị Hà · Bloom", "Nhắc sau 3 ngày", "12.0tr", "amber"],
        ["Chị Lan · Koi", "Mới", "—", "subtle"],
      ]
    : [
        ["Son · Vela", "Hot", "$1.9K", "rose"],
        ["Minh · ACME", "Quoted", "$1.3K", "brand"],
        ["Ha · Bloom", "Follow-up 3d", "$480", "amber"],
        ["Lan · Koi", "New", "—", "subtle"],
      ];
  const color: Record<string, string> = { rose: "bg-rose-500/15 text-rose-600", brand: "bg-tint-orange text-brand", amber: "bg-amber-500/15 text-amber-700 dark:text-amber-400", subtle: "bg-sunken text-subtle" };
  return (
    <Panel className="h-full">
      <Head icon={Sheet} title={vi ? "Google Sheets · Khách tiềm năng" : "Google Sheets · Pipeline"} />
      <table className="mt-2 w-full text-[11px]">
        <tbody>
          {rows.map(([n, s, v, c], i) => (
            <motion.tr key={n} className="border-b border-line last:border-0" initial={{ opacity: 0, x: 8 }} whileInView={{ opacity: 1, x: 0 }} viewport={view} transition={{ delay: 0.1 + i * 0.1 }}>
              <td className="py-2 font-semibold">{n}</td>
              <td className="py-2">
                <span className={`rounded-full px-2 py-0.5 text-[10px] font-bold ${color[c]}`}>{s}</span>
              </td>
              <td className="py-2 text-right tabular-nums">{v}</td>
            </motion.tr>
          ))}
        </tbody>
      </table>
      <Pop delay={0.6} className="mt-2 flex items-center gap-2 rounded-xl bg-tint-orange px-3 py-2 text-[11px] font-semibold">
        <Calendar className="size-3.5 text-brand" aria-hidden="true" /> {vi ? "Đã hẹn gọi anh Sơn 10:30 mai" : "Call with Son booked tomorrow 10:30"}
      </Pop>
    </Panel>
  );
}

export function HermesVoiceArt({ vi }: P) {
  return (
    <Panel className="h-full">
      <Head icon={Mic} title={vi ? "Hermès Voice · Bản nháp" : "Hermès Voice · Draft"} right={<span className="rounded-full bg-sunken px-2 py-0.5 text-[10px] font-bold">Facebook</span>} />
      <Pop delay={0.1} className="mt-3 text-[12px] font-bold leading-snug">
        {vi ? "3 sai lầm khiến CEO kẹt mãi ở vai trò “người làm”" : "3 mistakes that keep CEOs stuck as the “doer”"}
      </Pop>
      <div className="mt-2 grid gap-1.5">
        {[100, 92, 96, 60].map((w, i) => (
          <motion.span key={i} className="block h-2 rounded-full bg-sunken" initial={{ width: 0 }} whileInView={{ width: `${w}%` }} viewport={view} transition={{ delay: 0.2 + i * 0.12, duration: 0.6, ease }} />
        ))}
      </div>
      <Pop delay={0.7} className="mt-3 flex items-center gap-3 text-[11px] text-subtle">
        <span className="flex items-center gap-1">
          <Sparkles className="size-3.5 text-brand" aria-hidden="true" /> {vi ? "Giọng thương hiệu 96%" : "Brand voice 96%"}
        </span>
        <span className="flex items-center gap-1">
          <Calendar className="size-3.5" aria-hidden="true" /> 19:00
        </span>
      </Pop>
      <Pop delay={0.85} className="mt-3 flex gap-2">
        <span className="flex-1 rounded-lg bg-invert py-2 text-center text-[11px] font-bold text-invert-fg">{vi ? "Duyệt và lên lịch" : "Approve & schedule"}</span>
        <span className="rounded-lg border border-line px-3 py-2 text-[11px] font-bold">{vi ? "Sửa" : "Edit"}</span>
      </Pop>
    </Panel>
  );
}

export function HermesVisualArt({ vi }: P) {
  const frames = ["from-orange-400 to-rose-500", "from-violet-500 to-sky-500", "from-emerald-400 to-teal-600", "from-amber-300 to-orange-500"];
  return (
    <Panel className="h-full">
      <Head icon={Clapperboard} title={vi ? "Video ngắn · 90 giây" : "Short video · 90 seconds"} right={<span className="text-[10px] font-bold text-subtle">4 {vi ? "cảnh" : "scenes"}</span>} />
      <div className="mt-3 grid grid-cols-4 gap-1.5">
        {frames.map((f, i) => (
          <motion.div key={f} className={`relative aspect-[9/16] overflow-hidden rounded-lg bg-gradient-to-br ${f}`} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={view} transition={{ delay: 0.1 + i * 0.12, duration: 0.5, ease }}>
            <ImageIcon className="absolute left-1/2 top-1/2 size-4 -translate-x-1/2 -translate-y-1/2 text-white/70" aria-hidden="true" />
            <span className="absolute bottom-1 left-1 rounded bg-black/40 px-1 text-[8px] font-bold text-white">0{i + 1}</span>
          </motion.div>
        ))}
      </div>
      <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-sunken">
        <motion.div className="h-full rounded-full bg-brand" initial={{ width: 0 }} whileInView={{ width: "100%" }} viewport={view} transition={{ delay: 0.5, duration: 1.6, ease }} />
      </div>
      <p className="mt-2 flex items-center gap-1.5 text-[11px] font-semibold text-emerald-600">
        <Check className="size-3.5" aria-hidden="true" /> {vi ? "Dựng xong · đã gửi Telegram chờ duyệt" : "Rendered · sent to Telegram for approval"}
      </p>
    </Panel>
  );
}

export function HermesDailyArt({ vi }: P) {
  const items = vi
    ? ["3 lead nóng cần phản hồi trước trưa.", "2 báo giá quá hạn — Funnel đã nhắc.", "Post Facebook 19h chờ anh duyệt.", "Doanh thu tuần: +18% so tuần trước."]
    : ["3 hot leads need a reply before noon.", "2 overdue quotes — Funnel sent reminders.", "7pm Facebook post awaiting approval.", "Weekly revenue: +18% vs last week."];
  return (
    <Panel className="h-full">
      <Head icon={Sun} title={vi ? "Bản tin sáng · 7:00" : "Morning briefing · 7:00"} right={<span className="flex items-center gap-1 text-[10px] font-bold text-emerald-600"><span className="size-1.5 animate-pulse rounded-full bg-emerald-500" />LIVE</span>} />
      <ul className="mt-3 grid gap-2">
        {items.map((it, i) => (
          <Pop key={it} delay={0.1 + i * 0.12}>
            <li className="flex items-start gap-2 rounded-xl bg-sunken px-3 py-2 text-[11px]">
              {i === 3 ? <TrendingUp className="mt-0.5 size-3.5 shrink-0 text-emerald-600" /> : <Check className="mt-0.5 size-3.5 shrink-0 text-brand" />}
              {it}
            </li>
          </Pop>
        ))}
      </ul>
    </Panel>
  );
}

/** Telegram-style chat: one command, the agents get to work. */
export function HermesHero({ vi }: P) {
  const msgs: { me: boolean; text: string; meta?: string }[] = vi
    ? [
        { me: true, text: "Gửi báo giá gói Pro cho anh Minh, rồi lên bài FB tối nay về case ACME" },
        { me: false, text: "Hermès Sales: đã tạo #BG-204 và gửi email cho anh Minh ✓", meta: "12s" },
        { me: false, text: "Hermès Voice: bản nháp bài “3 sai lầm…” — duyệt để đăng 19:00?", meta: "41s" },
        { me: true, text: "Duyệt 👍" },
        { me: false, text: "Đã lên lịch. Funnel nhắc 2 báo giá quá hạn sáng mai 8:00.", meta: "2s" },
      ]
    : [
        { me: true, text: "Send Minh the Pro quote, then schedule tonight's FB post on the ACME case" },
        { me: false, text: "Hermès Sales: created #BG-204 and emailed Minh ✓", meta: "12s" },
        { me: false, text: "Hermès Voice: draft “3 mistakes…” — approve for 7pm?", meta: "41s" },
        { me: true, text: "Approve 👍" },
        { me: false, text: "Scheduled. Funnel will chase 2 overdue quotes at 8am.", meta: "2s" },
      ];
  return (
    <div className="overflow-hidden rounded-[1.5rem] border border-line bg-elev shadow-[0_40px_100px_-30px_rgb(0_0_0/0.35)]">
      <div className="flex items-center gap-3 border-b border-line bg-sunken/50 px-4 py-3">
        <span className="grid size-9 place-items-center rounded-full bg-invert text-brand">
          <Bot className="size-5" aria-hidden="true" />
        </span>
        <div>
          <p className="text-sm font-bold">Hermes Core</p>
          <p className="text-[11px] text-emerald-600">● {vi ? "5 trợ lý AI đang chạy" : "5 agents active"}</p>
        </div>
        <MessageCircle className="ml-auto size-4 text-subtle" aria-hidden="true" />
      </div>
      <div className="grid gap-2.5 bg-[radial-gradient(circle_at_1px_1px,var(--line)_1px,transparent_0)] bg-[length:18px_18px] p-4 text-[12px] sm:min-h-80">
        {msgs.map((m, i) => (
          <motion.div
            key={i}
            className={`max-w-[85%] rounded-2xl px-3 py-2 shadow-sm ${m.me ? "justify-self-end rounded-br-md bg-brand text-white" : "rounded-bl-md bg-elev"}`}
            initial={{ opacity: 0, y: 12, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.5 + i * 0.6, duration: 0.45, ease }}
          >
            {m.text}
            <span className={`ml-2 inline-flex items-center gap-0.5 align-bottom text-[9px] ${m.me ? "text-white/70" : "text-subtle"}`}>
              {m.meta ?? ""} {m.me ? <CheckCheck className="size-3" /> : null}
            </span>
          </motion.div>
        ))}
        <motion.div className="flex w-fit items-center gap-1 rounded-2xl bg-elev px-3 py-2.5 shadow-sm" initial={{ opacity: 0 }} animate={{ opacity: [0, 1, 1, 0] }} transition={{ delay: 3.6, duration: 2.4, repeat: Infinity, repeatDelay: 1 }}>
          {[0, 1, 2].map((d) => (
            <motion.span key={d} className="size-1.5 rounded-full bg-subtle" animate={{ y: [0, -3, 0] }} transition={{ duration: 0.6, repeat: Infinity, delay: d * 0.15 }} />
          ))}
        </motion.div>
      </div>
      <div className="flex items-center gap-2 border-t border-line px-4 py-3 text-[12px] text-subtle">
        {vi ? "Ra lệnh cho Hermes…" : "Message Hermes…"}
        <span className="ml-auto grid size-8 place-items-center rounded-full bg-brand text-white">
          <Send className="size-4" aria-hidden="true" />
        </span>
      </div>
    </div>
  );
}

export const hermesArts = {
  hermesSales: HermesSalesArt,
  hermesFunnel: HermesFunnelArt,
  hermesVoice: HermesVoiceArt,
  hermesVisual: HermesVisualArt,
  hermesDaily: HermesDailyArt,
};

