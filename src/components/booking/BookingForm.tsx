"use client";

import { AnimatePresence, motion } from "motion/react";
import { AlertTriangle, ArrowRight, Check, ChevronDown, ChevronUp, Clock, Pencil } from "lucide-react";
import Link from "next/link";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { booking, type Question } from "@/content/booking";
import { contact } from "@/content/pages";
import { localePath, type Locale } from "@/i18n/config";
import { Swoosh } from "@/components/motion/Swoosh";

type Answers = Record<string, string | string[]>;

const STORAGE_KEY = "dt-booking-draft";
const ENDPOINT = process.env.NEXT_PUBLIC_BOOKING_ENDPOINT;
const CALENDAR_URL = process.env.NEXT_PUBLIC_CALENDAR_URL;
const LETTERS = "ABCDEFGHIJ";
const ease = [0.16, 1, 0.3, 1] as const;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function asText(v: string | string[] | undefined) {
  return Array.isArray(v) ? v.join(", ") : (v ?? "");
}

/**
 * Typeform-style booking survey: one question per screen, Enter to continue,
 * letter keys for choices, progress bar, draft kept in localStorage.
 * Submits JSON to NEXT_PUBLIC_BOOKING_ENDPOINT (e.g. Formspree); without one
 * it falls back to a pre-filled email.
 */
export function BookingForm({ locale }: { locale: Locale }) {
  const c = booking[locale];
  const qs = c.questions;
  const REVIEW = qs.length;
  const DONE = qs.length + 1;

  const [step, setStep] = useState(-1);
  const [dir, setDir] = useState(1);
  const [answers, setAnswers] = useState<Answers>({});
  const [error, setError] = useState<string | null>(null);
  const [errorKey, setErrorKey] = useState(0);
  const [status, setStatus] = useState<"idle" | "sending" | "failed">("idle");
  const [viaMail, setViaMail] = useState(false);
  const [reviewed, setReviewed] = useState(false);
  const answersRef = useRef<Answers>({});
  answersRef.current = answers;
  const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement | null>(null);
  /** Hidden input that holds focus between questions so iOS keeps the keyboard open. */
  const keeperRef = useRef<HTMLInputElement>(null);
  const fieldRef = useCallback((el: HTMLInputElement | HTMLTextAreaElement | null) => {
    inputRef.current = el;
    el?.focus({ preventScroll: true });
  }, []);
  const autoNext = useRef<ReturnType<typeof setTimeout>>(undefined);

  // Restore / persist draft
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setAnswers(JSON.parse(raw));
    } catch {}
  }, []);
  useEffect(() => {
    if (step === DONE) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(answers));
    } catch {}
  }, [answers, step, DONE]);

  const name = asText(answers.name).trim().split(/\s+/).pop() ?? "";
  const fill = useCallback(
    (s: string) => (name ? s.replace("{name}", name) : s.replace(/,?\s*\{name\}/, "")),
    [name],
  );

  const validate = useCallback(
    (q: Question, from: Answers = answersRef.current): string | null => {
      const v = from[q.id];
      const empty = Array.isArray(v) ? v.length === 0 : !String(v ?? "").trim();
      if (q.required && empty) return c.required;
      if (q.type === "email" && !empty && !EMAIL_RE.test(String(v).trim())) return c.invalidEmail;
      return null;
    },
    [c],
  );

  const go = useCallback(
    (to: number) => {
      clearTimeout(autoNext.current);
      inputRef.current = null;
      // Must run synchronously inside the tap/keypress so mobile browsers allow it:
      // park focus on the keeper when the next screen has a text field, otherwise
      // drop focus so the keyboard closes for choice questions.
      const nextQ = qs[to];
      if (nextQ && !("options" in nextQ)) keeperRef.current?.focus({ preventScroll: true });
      else (document.activeElement as HTMLElement | null)?.blur();
      setDir(to > step ? 1 : -1);
      setError(null);
      if (to === REVIEW) setReviewed(true);
      setStep(to);
      // Long screens (review) leave the page scrolled; start each step at the top.
      if (window.scrollY > 0) window.scrollTo({ top: 0, behavior: "instant" });
    },
    [step, REVIEW, qs],
  );

  /** After answering, continue — or return to the review if editing from there. */
  const advance = useCallback(
    (from: number) => (reviewed && qs.every((qq) => !validate(qq)) ? REVIEW : from + 1),
    [reviewed, qs, validate, REVIEW],
  );

  const next = useCallback(() => {
    if (step >= 0 && step < qs.length) {
      const err = validate(qs[step]);
      if (err) {
        setError(err);
        setErrorKey((k) => k + 1);
        return;
      }
      go(advance(step));
      return;
    }
    go(step + 1);
  }, [step, qs, validate, go, advance]);

  const prev = useCallback(() => step > -1 && step < DONE && go(step - 1), [step, go, DONE]);

  const setAnswer = (id: string, v: string | string[]) => {
    answersRef.current = { ...answersRef.current, [id]: v };
    setAnswers(answersRef.current);
    setError(null);
  };

  const choose = useCallback(
    (q: Question, opt: string) => {
      if (q.type === "multi") {
        const cur = (answersRef.current[q.id] as string[] | undefined) ?? [];
        setAnswer(q.id, cur.includes(opt) ? cur.filter((x) => x !== opt) : [...cur, opt]);
      } else {
        setAnswer(q.id, opt);
        clearTimeout(autoNext.current);
        autoNext.current = setTimeout(() => go(advance(step)), 450);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [step, go, advance],
  );

  const submit = useCallback(async () => {
    const missing = qs.findIndex((q) => validate(q));
    if (missing !== -1) {
      go(missing);
      return;
    }
    const payload = Object.fromEntries(qs.map((q) => [q.id, asText(answers[q.id])]));
    setStatus("sending");
    try {
      if (ENDPOINT) {
        const res = await fetch(ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({ ...payload, locale, _subject: `Booking · ${payload.name} · ${payload.company}` }),
        });
        if (!res.ok) throw new Error(String(res.status));
      } else {
        const body = qs.map((q) => `${fill(q.title)}\n→ ${payload[q.id] || "—"}`).join("\n\n");
        const href = `mailto:${contact.email}?subject=${encodeURIComponent(`${c.title} · ${payload.name}`)}&body=${encodeURIComponent(body)}`;
        setViaMail(true);
        window.location.href = href;
      }
      try {
        localStorage.removeItem(STORAGE_KEY);
      } catch {}
      setStatus("idle");
      go(DONE);
    } catch {
      setStatus("failed");
    }
  }, [qs, validate, go, answers, locale, fill, c.title, DONE]);

  // Keyboard: Enter to continue, letters to pick choices
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement;
      const typing = target.tagName === "INPUT" || target.tagName === "TEXTAREA";
      if (e.key === "Enter" && !e.shiftKey && !e.isComposing) {
        if (target.tagName === "BUTTON" || target.tagName === "A") return;
        // Phones have no Shift+Enter: let Return add a line in the long answer, use OK to continue.
        if (target.tagName === "TEXTAREA" && window.matchMedia("(pointer: coarse)").matches) return;
        e.preventDefault();
        if (step === REVIEW) void submit();
        else if (step < REVIEW) next();
        return;
      }
      if (typing || e.metaKey || e.ctrlKey || e.altKey) return;
      if (e.key === " " && target.tagName !== "BUTTON") e.preventDefault();
      const q = qs[step];
      if (q && (q.type === "choice" || q.type === "multi")) {
        const i = LETTERS.indexOf(e.key.toUpperCase());
        if (i >= 0 && i < q.options.length) choose(q, q.options[i]);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [step, next, submit, choose, qs, REVIEW]);


  const progress = step < 0 ? 0 : Math.min(1, step / qs.length);
  const q = step >= 0 && step < qs.length ? qs[step] : null;

  const variants = useMemo(
    () => ({
      enter: (d: number) => ({ opacity: 0, y: d * 60 }),
      center: { opacity: 1, y: 0 },
      exit: (d: number) => ({ opacity: 0, y: d * -40, transition: { duration: 0.18, ease } }),
    }),
    [],
  );

  return (
    <section className="relative isolate min-h-[100dvh] overflow-x-clip">
      <div className="grain absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_center,#000_10%,transparent_70%)]" aria-hidden="true" />
      <Swoosh className="pointer-events-none absolute -bottom-10 -left-20 -z-10 h-56 w-[70rem] max-w-none opacity-60" />

      <input
        ref={keeperRef}
        aria-hidden="true"
        tabIndex={-1}
        className="pointer-events-none fixed left-0 top-0 h-px w-px opacity-0"
        style={{ fontSize: 16 }}
      />

      {/* Progress */}
      <div className="fixed inset-x-0 top-0 z-[60] h-1 bg-line/60" aria-hidden="true">
        <motion.div className="h-full origin-left bg-brand" animate={{ scaleX: step === DONE ? 1 : progress }} transition={{ type: "spring", stiffness: 120, damping: 24 }} />
      </div>

      <div className="mx-auto grid min-h-[100dvh] w-full max-w-2xl items-start px-4 pb-16 pt-24 sm:items-center sm:px-6 sm:pb-28 sm:pt-28">
        <AnimatePresence mode="wait" custom={dir} initial={false}>
          <motion.div
            key={step}
            custom={dir}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.45, ease }}
            className="w-full"
          >
            {/* Welcome */}
            {step === -1 && (
              <div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-tint-orange px-3 py-1 text-xs font-bold uppercase tracking-widest text-brand">
                  <Clock className="size-3.5" aria-hidden="true" /> {c.duration}
                </span>
                <h1 className="display mt-6 text-4xl sm:text-6xl">{c.title}</h1>
                <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">{c.lede}</p>
                <div className="mt-10 flex items-center gap-4">
                  <button type="button" onClick={() => go(0)} className="group inline-flex h-14 items-center gap-2 rounded-full bg-brand px-8 text-lg font-semibold text-white shadow-[0_10px_30px_-10px_var(--brand)] transition-transform active:scale-95">
                    {c.start}
                    <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </button>
                  <span className="hidden text-sm text-subtle sm:inline">{c.pressEnter}</span>
                </div>
              </div>
            )}

            {/* Question */}
            {q && (
              <div>
                <p className="flex items-center gap-1.5 text-sm font-bold text-brand">
                  {step + 1}
                  <ArrowRight className="size-3.5" aria-hidden="true" />
                  <span className="font-medium text-subtle">/ {qs.length}</span>
                </p>
                <h2 className="mt-3 text-2xl font-extrabold leading-snug tracking-tight sm:text-4xl" id={`q-${q.id}`}>
                  {fill(q.title)}
                  {q.required && <span className="text-brand">&nbsp;*</span>}
                </h2>
                {(q.help || !q.required) && <p className={`mt-2 text-muted ${q.type === "textarea" ? "pointer-coarse:hidden" : ""}`}>{q.help ?? c.optional}</p>}

                {(q.type === "text" || q.type === "email" || q.type === "tel") && (
                  <input
                    ref={fieldRef}
                    aria-labelledby={`q-${q.id}`}
                    type={q.type}
                    enterKeyHint="next"
                    inputMode={q.type === "tel" ? "tel" : q.type === "email" ? "email" : undefined}
                    autoComplete={q.id === "name" ? "name" : q.type === "email" ? "email" : q.type === "tel" ? "tel" : "organization-title"}
                    value={asText(answers[q.id])}
                    onChange={(e) => setAnswer(q.id, e.target.value)}
                    placeholder={q.placeholder}
                    className="mt-8 w-full border-b-2 border-line bg-transparent pb-3 text-2xl outline-none transition-colors placeholder:text-fg/25 focus:border-brand sm:text-3xl"
                  />
                )}

                {q.type === "textarea" && (
                  <textarea
                    ref={fieldRef}
                    aria-labelledby={`q-${q.id}`}
                    rows={3}
                    value={asText(answers[q.id])}
                    onChange={(e) => setAnswer(q.id, e.target.value)}
                    placeholder={q.placeholder}
                    className="mt-8 w-full resize-none border-b-2 border-line bg-transparent pb-3 text-xl leading-relaxed outline-none transition-colors placeholder:text-fg/25 focus:border-brand sm:text-2xl"
                  />
                )}

                {(q.type === "choice" || q.type === "multi") && (
                  <div role={q.type === "multi" ? "group" : "radiogroup"} aria-labelledby={`q-${q.id}`} className={`mt-8 grid gap-2 ${q.options.length > 5 ? "sm:grid-cols-2" : "max-w-md"}`}>
                    {q.options.map((opt, i) => {
                      const v = answers[q.id];
                      const on = Array.isArray(v) ? v.includes(opt) : v === opt;
                      return (
                        <motion.button
                          key={opt}
                          type="button"
                          role={q.type === "multi" ? "checkbox" : "radio"}
                          aria-checked={on}
                          onClick={() => choose(q, opt)}
                          whileTap={{ scale: 0.97 }}
                          animate={on && q.type === "choice" ? { opacity: [1, 0.5, 1, 0.5, 1] } : { opacity: 1 }}
                          transition={{ duration: 0.4 }}
                          className={`flex items-center gap-3 rounded-xl border-2 px-3 py-3 text-left text-[15px] font-medium transition-colors ${
                            on ? "border-brand bg-tint-orange" : "border-line bg-elev/70 hover:border-fg/30"
                          }`}
                        >
                          <span className={`grid size-7 shrink-0 place-items-center rounded-md border text-xs font-bold ${on ? "border-brand bg-brand text-white" : "border-line text-muted"}`}>
                            {on ? <Check className="size-4" aria-hidden="true" /> : LETTERS[i]}
                          </span>
                          <span className="flex-1">{opt}</span>
                        </motion.button>
                      );
                    })}
                  </div>
                )}

                <AnimatePresence>
                  {error && (
                    <motion.p
                      key={errorKey}
                      role="alert"
                      initial={{ opacity: 0, x: 0 }}
                      animate={{ opacity: 1, x: [0, -8, 8, -5, 5, 0] }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.4 }}
                      className="mt-4 inline-flex items-center gap-2 rounded-lg bg-rose-500/10 px-3 py-2 text-sm font-semibold text-rose-600"
                    >
                      <AlertTriangle className="size-4" aria-hidden="true" /> {error}
                    </motion.p>
                  )}
                </AnimatePresence>

                <div
                  className={`mt-8 flex items-center gap-3 ${
                    q.type === "multi" ? "sticky bottom-0 -mx-4 bg-gradient-to-t from-bg via-bg to-transparent px-4 pb-[max(1rem,env(safe-area-inset-bottom))] pt-6 sm:static sm:mx-0 sm:bg-none sm:p-0" : ""
                  }`}
                >
                  {q.type !== "choice" && (
                    <button type="button" onClick={next} className="inline-flex h-12 items-center gap-2 rounded-xl bg-brand px-6 font-semibold text-white active:scale-95">
                      {c.ok} <Check className="size-4" aria-hidden="true" />
                    </button>
                  )}
                  <span className="hidden text-sm text-subtle sm:inline">{q.type !== "choice" && c.pressEnter}</span>
                  <MobileBack onClick={prev} label={c.back} />
                </div>
              </div>
            )}

            {/* Review */}
            {step === REVIEW && (
              <div>
                <h2 className="display text-3xl sm:text-5xl">{c.reviewTitle}</h2>
                <p className="mt-3 text-muted">{c.reviewLede}</p>
                <ul className="mt-8 grid gap-2">
                  {qs.map((qq, i) => (
                    <li key={qq.id}>
                      <button type="button" onClick={() => go(i)} className="group flex w-full items-start gap-3 rounded-xl border border-line bg-elev/80 px-4 py-3 text-left transition-colors hover:border-brand">
                        <span className="mt-0.5 text-xs font-bold text-brand">{i + 1}</span>
                        <span className="flex-1">
                          <span className="block text-xs text-subtle">{fill(qq.title)}</span>
                          <span className="mt-0.5 block font-semibold">{asText(answers[qq.id]) || "—"}</span>
                        </span>
                        <Pencil className="mt-1 size-4 text-subtle opacity-0 transition-opacity group-hover:opacity-100" aria-label={c.edit} />
                      </button>
                    </li>
                  ))}
                </ul>
                {status === "failed" && (
                  <p role="alert" className="mt-4 inline-flex items-center gap-2 rounded-lg bg-rose-500/10 px-3 py-2 text-sm font-semibold text-rose-600">
                    <AlertTriangle className="size-4" aria-hidden="true" /> {c.error}
                  </p>
                )}
                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <button
                    type="button"
                    disabled={status === "sending"}
                    onClick={() => void submit()}
                    className="group inline-flex h-14 items-center gap-2 rounded-full bg-brand px-8 text-lg font-semibold text-white shadow-[0_10px_30px_-10px_var(--brand)] transition-transform active:scale-95 disabled:opacity-60"
                  >
                    {status === "sending" ? c.sending : c.submit}
                    <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </button>
                  <span className="hidden text-sm text-subtle sm:inline">{c.pressEnter}</span>
                  <MobileBack onClick={prev} label={c.back} />
                </div>
              </div>
            )}

            {/* Done */}
            {step === DONE && (
              <div className="text-center">
                <motion.span className="mx-auto grid size-20 place-items-center rounded-full bg-brand text-white shadow-[0_20px_50px_-10px_var(--brand)]" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 260, damping: 14 }}>
                  <svg viewBox="0 0 24 24" className="size-10" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <motion.path d="M5 12.5l4.5 4.5L19 7.5" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.3, duration: 0.5 }} />
                  </svg>
                </motion.span>
                <h2 className="display mt-8 text-4xl sm:text-5xl">{c.doneTitle.replace("{name}", name || "bạn")}</h2>
                <p className="mx-auto mt-4 max-w-lg text-lg text-muted">{viaMail ? c.doneMailto : c.doneBody}</p>
                <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
                  {CALENDAR_URL && (
                    <a href={CALENDAR_URL} target="_blank" rel="noreferrer" className="inline-flex h-12 items-center gap-2 rounded-full bg-brand px-6 font-semibold text-white">
                      {c.calendar} <ArrowRight className="size-4" aria-hidden="true" />
                    </a>
                  )}
                  <Link href={localePath(locale, "/")} className="inline-flex h-12 items-center rounded-full border border-line px-6 font-semibold">
                    {c.home}
                  </Link>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Up / down navigation, Typeform-style */}
      {step >= 0 && step <= REVIEW && (
        <div className="fixed bottom-[max(1rem,env(safe-area-inset-bottom))] right-6 z-40 hidden items-center gap-2 sm:flex">
          <span className="glass rounded-full px-3 py-2 text-xs font-bold tabular-nums">
            {Math.min(step + 1, qs.length)}/{qs.length}
          </span>
          <div className="glass flex overflow-hidden rounded-full">
            <button type="button" onClick={prev} aria-label={c.back} className="grid size-10 place-items-center hover:bg-fg/5">
              <ChevronUp className="size-5" />
            </button>
            <span className="w-px bg-line" />
            <button type="button" onClick={next} aria-label={c.next} disabled={step === REVIEW} className="grid size-10 place-items-center hover:bg-fg/5 disabled:opacity-30">
              <ChevronDown className="size-5" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

/** Phone-only "previous question" control, inline so it never covers answers. */
function MobileBack({ onClick, label }: { onClick: () => void; label: string }) {
  return (
    <button type="button" onClick={onClick} className="ml-auto inline-flex h-12 items-center gap-1.5 rounded-xl border border-line px-4 text-sm font-semibold text-muted active:scale-95 sm:hidden">
      <ChevronUp className="size-4" aria-hidden="true" /> {label}
    </button>
  );
}
