"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

export type Story = { href: string; name: string; role: string; tag: string; summary: string; value: string; label: string; tint: string };

export function StoryCarousel({ stories, labels }: { stories: Story[]; labels: { story: string; prev: string; next: string } }) {
  const track = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const go = useCallback((i: number) => {
    const el = track.current;
    const card = el?.children[i] as HTMLElement | undefined;
    if (!el || !card) return;
    el.scrollTo({ left: card.offsetLeft - el.offsetLeft - (el.clientWidth - card.clientWidth) / 2, behavior: "smooth" });
  }, []);

  useEffect(() => {
    const el = track.current;
    if (!el) return;
    const onScroll = () => {
      const center = el.scrollLeft + el.clientWidth / 2;
      let best = 0;
      let bestDist = Infinity;
      Array.from(el.children).forEach((c, i) => {
        const card = c as HTMLElement;
        const d = Math.abs(card.offsetLeft - el.offsetLeft + card.clientWidth / 2 - center);
        if (d < bestDist) {
          bestDist = d;
          best = i;
        }
      });
      setActive(best);
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div>
      <div
        ref={track}
        className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth px-4 pb-4 [scrollbar-width:none] sm:px-[max(1.5rem,calc((100vw-80rem)/2+2rem))] [&::-webkit-scrollbar]:hidden"
      >
        {stories.map((s, i) => (
          <motion.article
            key={s.href}
            animate={{ opacity: i === active ? 1 : 0.55, scale: i === active ? 1 : 0.97 }}
            transition={{ duration: 0.4 }}
            className={`grid w-[85vw] shrink-0 snap-center gap-6 rounded-[1.75rem] p-6 sm:w-[44rem] sm:grid-cols-[1.4fr_1fr] sm:p-9 ${s.tint}`}
          >
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-brand">{s.tag}</p>
              <h3 className="mt-3 text-2xl font-extrabold tracking-tight">{s.name}</h3>
              <p className="text-sm font-semibold text-muted">{s.role}</p>
              <p className="mt-5 text-lg leading-relaxed">{s.summary}</p>
            </div>
            <div className="flex flex-col justify-between gap-6 border-line sm:border-l sm:pl-8">
              <div>
                <p className="display text-5xl text-brand sm:text-6xl">{s.value}</p>
                <p className="mt-2 text-sm text-muted">{s.label}</p>
              </div>
              <Link href={s.href} className="group inline-flex h-11 w-fit items-center gap-2 rounded-full bg-elev px-5 text-sm font-semibold shadow-sm">
                {labels.story}
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </Link>
            </div>
          </motion.article>
        ))}
      </div>
      <div className="container-x mt-6 flex items-center justify-center gap-4">
        <button type="button" aria-label={labels.prev} onClick={() => go(Math.max(0, active - 1))} className="grid size-10 place-items-center rounded-full border border-line hover:bg-sunken disabled:opacity-40" disabled={active === 0}>
          <ArrowLeft className="size-4" />
        </button>
        <div className="flex items-center gap-1.5">
          {stories.map((s, i) => (
            <button key={s.href} type="button" aria-label={`${i + 1}`} aria-current={i === active} onClick={() => go(i)} className="relative h-2.5 w-2.5 rounded-full bg-line">
              {i === active && <motion.span layoutId="story-dot-active" className="absolute -inset-x-2 inset-y-0 rounded-full bg-brand" transition={{ type: "spring", stiffness: 400, damping: 32 }} />}
            </button>
          ))}
        </div>
        <button type="button" aria-label={labels.next} onClick={() => go(Math.min(stories.length - 1, active + 1))} className="grid size-10 place-items-center rounded-full border border-line hover:bg-sunken disabled:opacity-40" disabled={active === stories.length - 1}>
          <ArrowRight className="size-4" />
        </button>
      </div>
    </div>
  );
}
