"use client";

import { motion } from "motion/react";
import { useMemo, useState } from "react";
import type { Locale } from "@/i18n/config";
import type { Entry } from "@/lib/content";
import { PostCard } from "./EntryCards";

export function BlogList({ posts, locale, labels }: { posts: Entry[]; locale: Locale; labels: { all: string; read: string; minutes: string } }) {
  const tags = useMemo(() => Array.from(new Set(posts.flatMap((p) => p.tags))), [posts]);
  const [tag, setTag] = useState<string | null>(null);
  const shown = tag ? posts.filter((p) => p.tags.includes(tag)) : posts;

  return (
    <>
      <div className="flex flex-wrap gap-2" role="group">
        {[null, ...tags].map((x) => {
          const on = x === tag;
          return (
            <button
              key={x ?? "all"}
              type="button"
              aria-pressed={on}
              onClick={() => setTag(x)}
              className={`relative h-10 rounded-full px-4 text-sm font-semibold transition-colors ${on ? "text-invert-fg" : "border border-line text-muted hover:text-fg"}`}
            >
              {on && <motion.span layoutId="blog-tag" className="absolute inset-0 rounded-full bg-invert" transition={{ type: "spring", stiffness: 400, damping: 34 }} />}
              <span className="relative">{x ?? labels.all}</span>
            </button>
          );
        })}
      </div>
      <motion.div layout className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {shown.map((post, i) => (
          <motion.div key={post.slug} layout transition={{ duration: 0.4 }}>
            <PostCard post={post} locale={locale} readLabel={labels.read} minutesLabel={labels.minutes} i={i} />
          </motion.div>
        ))}
      </motion.div>
    </>
  );
}
