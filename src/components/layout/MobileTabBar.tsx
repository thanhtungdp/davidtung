"use client";

import { AnimatePresence, motion, useMotionValueEvent, useScroll, type PanInfo } from "motion/react";
import { ArrowUpRight, BookOpen, Bot, Ellipsis, House, Moon, Newspaper, Sun } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { localePath, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n";
import { LanguageSwitch } from "./LanguageSwitch";
import type { NavProject } from "./Header";

const spring = { type: "spring", stiffness: 520, damping: 38, mass: 0.9 } as const;

/**
 * iOS 26-style floating "liquid glass" tab bar (below lg).
 * - Glass lens slides between tabs with a springy stretch.
 * - Collapses to icons while scrolling down, expands on scroll up.
 * - "More" opens a glass bottom sheet with drag-to-dismiss.
 */
export function MobileTabBar({ locale, t, projects }: { locale: Locale; t: Dictionary["nav"]; projects: NavProject[] }) {
  const pathname = usePathname() || "/";
  const [sheet, setSheet] = useState(false);
  const [compact, setCompact] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => {
    const prev = scrollY.getPrevious() ?? 0;
    if (y < 80) setCompact(false);
    else if (y - prev > 6) setCompact(true);
    else if (prev - y > 6) setCompact(false);
  });

  useEffect(() => setSheet(false), [pathname]);
  useEffect(() => {
    document.documentElement.style.overflow = sheet ? "hidden" : "";
  }, [sheet]);

  const p = (path: string) => localePath(locale, path);
  const home = p("/");
  const tabs = [
    { href: home, label: t.home, icon: House },
    { href: p("/playbooks/"), label: t.playbooks, icon: BookOpen },
    { href: p("/blog/"), label: t.blog, icon: Newspaper },
    { href: p("/hermes/"), label: t.hermes, icon: Bot },
  ];
  const activeIndex = sheet
    ? tabs.length
    : (() => {
        const i = tabs.findIndex((tab) => tab.href !== home && pathname.startsWith(tab.href));
        if (i >= 0) return i;
        return pathname === home ? 0 : tabs.length; // other pages live under "More"
      })();

  // The booking survey has its own bottom navigation
  if (/\/booking\/?$/.test(pathname)) return null;

  const items = [...tabs.map((tab) => ({ ...tab, onClick: undefined as (() => void) | undefined })), { href: "", label: t.more, icon: Ellipsis, onClick: () => setSheet((v) => !v) }];

  return (
    <>
      <nav aria-label="Tab bar" className="pointer-events-none fixed inset-x-0 bottom-0 z-50 flex justify-center px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] lg:hidden">
        <motion.div
          layout
          transition={spring}
          className={`glass pointer-events-auto flex items-center rounded-full ${compact ? "gap-0 p-1" : "w-full max-w-md justify-between p-1"}`}
        >
          {items.map((item, i) => {
            const active = i === activeIndex;
            const Icon = item.icon;
            const inner = (
              <>
                {active && (
                  <motion.span
                    layoutId="tab-lens"
                    transition={spring}
                    className="absolute inset-0"
                  >
                    {/* liquid stretch each time the lens lands */}
                    <motion.span
                      key={activeIndex}
                      className="absolute inset-0 rounded-full bg-[color-mix(in_oklab,var(--brand)_16%,transparent)] shadow-[inset_0_1px_0_var(--glass-shine),inset_0_0_0_1px_color-mix(in_oklab,var(--brand)_25%,transparent)]"
                      initial={{ scaleX: 1.22, scaleY: 0.86 }}
                      animate={{ scaleX: 1, scaleY: 1 }}
                      transition={{ type: "spring", stiffness: 320, damping: 11 }}
                    />
                  </motion.span>
                )}
                <motion.span layout="position" className="relative flex flex-col items-center gap-0.5">
                  <Icon className={`size-[22px] transition-colors ${active ? "text-brand" : "text-fg/75"}`} strokeWidth={active ? 2.4 : 2} aria-hidden="true" />
                  <AnimatePresence initial={false}>
                    {!compact && (
                      <motion.span
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className={`max-w-full overflow-hidden truncate text-[10px] font-semibold leading-tight ${active ? "text-brand" : "text-fg/70"}`}
                      >
                        {item.label}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </motion.span>
              </>
            );
            const cls = `relative grid w-full place-items-center rounded-full outline-none ${compact ? "h-11 w-12" : "h-[3.25rem] px-1"}`;
            return item.onClick ? (
              <motion.button key="more" type="button" whileTap={{ scale: 0.88 }} onClick={item.onClick} aria-expanded={sheet} aria-label={item.label} className={`${cls} ${compact ? "" : "min-w-0 flex-1"}`}>
                {inner}
              </motion.button>
            ) : (
              <motion.div key={item.href} whileTap={{ scale: 0.88 }} className={compact ? "" : "min-w-0 flex-1"}>
                <Link href={item.href} aria-current={active ? "page" : undefined} aria-label={item.label} className={cls}>
                  {inner}
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </nav>

      <AnimatePresence>
        {sheet && (
          <>
            <motion.div
              className="fixed inset-0 z-40 bg-black/30 backdrop-blur-[2px] lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSheet(false)}
            />
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label={t.more}
              className="glass fixed inset-x-2 [--glass-bg:color-mix(in_oklab,var(--bg-elev)_88%,transparent)] bottom-[calc(max(0.75rem,env(safe-area-inset-bottom))+4.75rem)] z-50 max-h-[70dvh] overflow-y-auto rounded-[2rem] p-4 lg:hidden"
              initial={{ y: 40, opacity: 0, scale: 0.96 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 40, opacity: 0, scale: 0.96 }}
              transition={spring}
              drag="y"
              dragConstraints={{ top: 0, bottom: 0 }}
              dragElastic={{ top: 0.05, bottom: 0.6 }}
              onDragEnd={(_: unknown, info: PanInfo) => {
                if (info.offset.y > 80 || info.velocity.y > 500) setSheet(false);
              }}
            >
              <div className="mx-auto mb-3 h-1.5 w-10 rounded-full bg-fg/20" aria-hidden="true" />
              <p className="px-2 text-xs font-semibold uppercase tracking-widest text-subtle">{t.cases}</p>
              <ul className="mt-2 grid grid-cols-2 gap-2">
                {projects.map((pr, i) => (
                  <motion.li key={pr.slug} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.04 * i }}>
                    <Link href={p(`/projects/${pr.slug}/`)} className="block h-full rounded-2xl bg-elev/70 p-3 active:scale-[0.98]">
                      <p className="text-[11px] font-semibold text-subtle">{pr.tag}</p>
                      <p className="mt-0.5 font-bold leading-tight">{pr.name}</p>
                      <p className="mt-1 text-xs font-bold text-brand">{pr.metric}</p>
                    </Link>
                  </motion.li>
                ))}
              </ul>
              <div className="mt-3 grid gap-2">
                {[{ href: p("/about/"), label: t.about }].map((l) => (
                  <Link key={l.href} href={l.href} className="flex h-12 items-center justify-center rounded-2xl bg-elev/70 font-semibold active:scale-[0.98]">
                    {l.label}
                  </Link>
                ))}
              </div>
              <div className="mt-3 flex items-center gap-2">
                <LanguageSwitch locale={locale} label={t.language} />
                <button
                  type="button"
                  onClick={() => {
                    const dark = document.documentElement.classList.toggle("dark");
                    try {
                      localStorage.setItem("theme", dark ? "dark" : "light");
                    } catch {}
                  }}
                  className="flex h-10 items-center gap-2 rounded-full border border-line px-3 text-sm font-semibold"
                  aria-label={t.theme}
                >
                  <Sun className="size-4 dark:hidden" aria-hidden="true" />
                  <Moon className="hidden size-4 dark:block" aria-hidden="true" />
                  {t.theme2}
                </button>
              </div>
              <Link href={p("/booking/")} className="mt-3 flex h-12 items-center justify-center gap-1.5 rounded-full bg-brand font-semibold text-white">
                {t.contact}
                <ArrowUpRight className="size-4" aria-hidden="true" />
              </Link>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
