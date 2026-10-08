import type { Entry } from "@/lib/content";

const tintBg = {
  orange: "bg-tint-orange",
  mint: "bg-tint-mint",
  lilac: "bg-tint-lilac",
  butter: "bg-tint-butter",
  sky: "bg-tint-sky",
  rose: "bg-tint-rose",
} as const;

/** Geometric artwork on the cover, one per playbook — the Lattice ebook look in DT orange. */
function Pattern({ kind }: { kind: NonNullable<Entry["cover"]> }) {
  const c = "var(--brand)";
  switch (kind) {
    case "arcs":
      return (
        <g fill="none" stroke={c}>
          {[0, 1, 2, 3, 4].map((i) => (
            <circle key={i} cx="100" cy="120" r={18 + i * 14} strokeWidth="7" opacity={1 - i * 0.16} />
          ))}
        </g>
      );
    case "steps":
      return (
        <g fill={c}>
          {[0, 1, 2, 3].map((i) => (
            <rect key={i} x={i * 25} y={110 - i * 22} width="25" height={30 + i * 22} opacity={0.45 + i * 0.18} />
          ))}
        </g>
      );
    case "rings":
      return (
        <g fill="none" stroke={c} strokeWidth="6">
          <circle cx="30" cy="90" r="26" />
          <circle cx="70" cy="90" r="26" opacity="0.7" />
          <circle cx="50" cy="56" r="26" opacity="0.45" />
        </g>
      );
    case "grid":
      return (
        <g fill={c}>
          {Array.from({ length: 16 }).map((_, i) => (
            <rect key={i} x={(i % 4) * 25 + 3} y={Math.floor(i / 4) * 25 + 40} width="19" height="19" rx="4" opacity={[1, 0.3, 0.6, 0.85][(i * 7) % 4]} />
          ))}
        </g>
      );
    case "waves":
      return (
        <g fill="none" stroke={c} strokeWidth="7" strokeLinecap="round">
          {[0, 1, 2, 3].map((i) => (
            <path key={i} d={`M0 ${70 + i * 18} C 25 ${55 + i * 18}, 50 ${85 + i * 18}, 100 ${66 + i * 18}`} opacity={1 - i * 0.2} />
          ))}
        </g>
      );
    case "dots":
      return (
        <g fill={c}>
          {Array.from({ length: 25 }).map((_, i) => (
            <circle key={i} cx={(i % 5) * 20 + 10} cy={Math.floor(i / 5) * 20 + 40} r={3 + ((i * 3) % 5)} opacity={0.4 + ((i * 7) % 6) / 10} />
          ))}
        </g>
      );
  }
}

/**
 * A tinted backdrop with a tilted "book" on it showing the playbook title.
 * Scales with its container; hover lifts the book (parent needs `group`).
 */
export function BookCover({ entry, size = "md" }: { entry: Entry; size?: "md" | "lg" }) {
  const tint = tintBg[entry.tint ?? "orange"];
  const lg = size === "lg";
  return (
    <div className={`relative grid place-items-center overflow-hidden ${tint} ${lg ? "aspect-[16/10]" : "aspect-[16/9]"}`}>
      {lg && (
        <>
          <div className="absolute inset-y-[12%] left-[4%] w-[26%] rounded-xl bg-elev/40" aria-hidden="true" />
          <div className="absolute inset-y-[12%] right-[4%] w-[26%] rounded-xl bg-elev/40" aria-hidden="true" />
        </>
      )}
      <div
        className={`relative flex flex-col overflow-hidden rounded-md bg-white shadow-[0_18px_40px_-14px_rgb(0_0_0/0.45)] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-1.5 group-hover:-rotate-1 ${
          lg ? "h-[82%] w-[36%]" : "h-[86%] w-[34%]"
        }`}
      >
        <div className="p-[8%] pb-0">
          <p className="text-[clamp(5px,0.6vw,8px)] font-extrabold italic text-brand">DT · PLAYBOOK</p>
          <p className={`mt-1 line-clamp-3 font-extrabold leading-tight text-neutral-900 ${lg ? "text-[clamp(8px,1.2vw,15px)]" : "text-[clamp(6px,0.75vw,10px)]"}`}>{entry.title}</p>
        </div>
        <svg viewBox="0 0 100 150" preserveAspectRatio="xMidYMax slice" className="mt-auto h-[58%] w-full" aria-hidden="true">
          <Pattern kind={entry.cover ?? "arcs"} />
        </svg>
        <span className="absolute inset-y-0 left-0 w-[4%] bg-black/10" aria-hidden="true" />
      </div>
    </div>
  );
}
