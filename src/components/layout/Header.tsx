"use client";

import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import { ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { localePath, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n";
import { contact } from "@/content/pages";
import { LanguageSwitch } from "./LanguageSwitch";
import { Logo } from "./Logo";
import { ThemeToggle } from "./ThemeToggle";

export type NavProject = { slug: string; name: string; tag: string; summary: string; metric: string };

const ease = [0.16, 1, 0.3, 1] as const;

export function Header({ locale, t, projects }: { locale: Locale; t: Dictionary["nav"]; projects: NavProject[] }) {
  const pathname = usePathname() || "/";
  const [scrolled, setScrolled] = useState(false);
  const [mega, setMega] = useState(false);
  const [mobile, setMobile] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout>>(undefined);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 12));

  useEffect(() => {
    setMega(false);
    setMobile(false);
  }, [pathname]);

  useEffect(() => {
    document.documentElement.style.overflow = mobile ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && (setMega(false), setMobile(false));
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [mobile]);

  const p = (path: string) => localePath(locale, path);
  const links = [
    { href: p("/playbooks/"), label: t.playbooks },
    { href: p("/blog/"), label: t.blog },
    { href: p("/hermes/"), label: t.hermes },
    { href: p("/about/"), label: t.about },
  ];
  const isActive = (href: string) => pathname.startsWith(href);

  const openMega = () => {
    clearTimeout(closeTimer.current);
    setMega(true);
  };
  const closeMega = () => {
    closeTimer.current = setTimeout(() => setMega(false), 120);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-4">
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-brand focus:px-4 focus:py-2 focus:text-white">
        {t.skip}
      </a>
      <div
        className={`mx-auto flex h-16 max-w-7xl items-center gap-2 rounded-full border pl-5 pr-2 transition-all duration-500 ${
          scrolled || mega ? "border-line bg-elev/80 shadow-[0_8px_40px_-12px_rgb(0_0_0/0.18)] backdrop-blur-xl" : "border-transparent bg-transparent"
        }`}
      >
        <Link href={p("/")} className="mr-4 shrink-0" aria-label="David Tung — Home">
          <Logo className="h-8 w-auto" />
        </Link>

        <nav className="hidden flex-1 items-center gap-1 lg:flex" aria-label="Main">
          <div className="relative" onMouseEnter={openMega} onMouseLeave={closeMega}>
            <button
              type="button"
              aria-expanded={mega}
              aria-controls="mega-cases"
              onClick={() => setMega((v) => !v)}
              className={`flex h-10 items-center gap-1 rounded-full px-4 text-[15px] font-medium transition-colors hover:bg-sunken ${
                isActive(p("/projects/")) ? "text-brand" : ""
              }`}
            >
              {t.cases}
              <ChevronDown className={`size-4 transition-transform duration-300 ${mega ? "rotate-180" : ""}`} aria-hidden="true" />
            </button>
          </div>
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`relative flex h-10 items-center rounded-full px-4 text-[15px] font-medium transition-colors hover:bg-sunken ${
                isActive(l.href) ? "text-brand" : ""
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-1.5">
          <div className="hidden sm:block">
            <LanguageSwitch locale={locale} label={t.language} />
          </div>
          <ThemeToggle label={t.theme} />
          <a
            href={contact.mailto}
            className="hidden h-11 items-center gap-1.5 rounded-full bg-brand px-5 text-sm font-semibold text-white transition-colors hover:bg-brand-strong md:inline-flex"
          >
            {t.contact}
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </a>
          <button
            type="button"
            className="grid size-11 place-items-center rounded-full bg-invert text-invert-fg lg:hidden"
            aria-label={mobile ? t.close : t.menu}
            aria-expanded={mobile}
            onClick={() => setMobile((v) => !v)}
          >
            {mobile ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {/* Mega menu */}
      <AnimatePresence>
        {mega && (
          <motion.div
            id="mega-cases"
            onMouseEnter={openMega}
            onMouseLeave={closeMega}
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.35, ease }}
            className="absolute inset-x-3 top-[5.25rem] mx-auto hidden max-w-7xl origin-top overflow-hidden rounded-[1.75rem] border border-line bg-elev/95 p-3 shadow-[0_30px_80px_-20px_rgb(0_0_0/0.3)] backdrop-blur-xl sm:inset-x-4 lg:block"
          >
            <div className="grid grid-cols-[1fr_2.4fr] gap-3">
              <div className="flex flex-col justify-between rounded-2xl bg-invert p-6 text-invert-fg">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-brand">{t.cases}</p>
                  <p className="mt-3 text-2xl font-extrabold leading-tight tracking-tight">{t.casesLead}</p>
                </div>
                <svg viewBox="0 0 200 60" className="mt-6 h-12 w-full" aria-hidden="true">
                  <path d="M2 56 C 60 52, 120 36, 198 4" stroke="var(--brand)" strokeWidth="8" fill="none" strokeLinecap="round" />
                </svg>
              </div>
              <ul className="grid grid-cols-2 gap-1">
                {projects.map((pr, i) => (
                  <motion.li
                    key={pr.slug}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 + i * 0.04, duration: 0.4, ease }}
                  >
                    <Link href={p(`/projects/${pr.slug}/`)} className="group block h-full rounded-2xl p-5 transition-colors hover:bg-sunken">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-semibold uppercase tracking-wider text-subtle">{pr.tag}</span>
                        <span className="rounded-full bg-brand-soft px-2.5 py-1 text-xs font-bold text-brand">{pr.metric}</span>
                      </div>
                      <p className="mt-3 flex items-center gap-1 text-lg font-bold">
                        {pr.name}
                        <ArrowUpRight className="size-4 -translate-x-1 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" aria-hidden="true" />
                      </p>
                      <p className="mt-1 line-clamp-2 text-sm leading-relaxed text-muted">{pr.summary}</p>
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobile && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease }}
            className="absolute inset-x-3 top-[5.25rem] max-h-[calc(100dvh-6rem)] overflow-y-auto rounded-[1.75rem] border border-line bg-elev p-4 shadow-2xl lg:hidden"
          >
            <p className="px-3 pt-2 text-xs font-semibold uppercase tracking-widest text-subtle">{t.cases}</p>
            <ul className="mt-2 grid gap-1">
              {projects.map((pr) => (
                <li key={pr.slug}>
                  <Link href={p(`/projects/${pr.slug}/`)} className="flex items-center justify-between rounded-2xl px-3 py-3 hover:bg-sunken">
                    <span className="font-semibold">{pr.name}</span>
                    <span className="text-xs font-bold text-brand">{pr.metric}</span>
                  </Link>
                </li>
              ))}
            </ul>
            <div className="my-3 h-px bg-line" />
            <ul className="grid gap-1">
              {links.map((l, i) => (
                <motion.li key={l.href} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.05 * i }}>
                  <Link href={l.href} className="block rounded-2xl px-3 py-3 text-2xl font-bold tracking-tight hover:bg-sunken">
                    {l.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
            <div className="mt-4 flex items-center justify-between gap-3">
              <LanguageSwitch locale={locale} label={t.language} />
              <a href={contact.mailto} className="inline-flex h-11 flex-1 items-center justify-center gap-1.5 rounded-full bg-brand px-5 text-sm font-semibold text-white">
                {t.contact}
                <ArrowUpRight className="size-4" aria-hidden="true" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
