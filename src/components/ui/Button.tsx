import Link from "next/link";
import { ArrowRight } from "lucide-react";

type Variant = "brand" | "ink" | "ghost" | "light";

const styles: Record<Variant, string> = {
  brand: "bg-brand text-white hover:bg-brand-strong shadow-[0_10px_30px_-10px_var(--brand)]",
  ink: "bg-invert text-invert-fg hover:opacity-90",
  ghost: "border border-line bg-elev/60 text-fg hover:border-fg/30 backdrop-blur",
  light: "bg-white text-neutral-950 hover:bg-neutral-100",
};

export function ButtonLink({
  href,
  children,
  variant = "brand",
  arrow = true,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  arrow?: boolean;
  className?: string;
}) {
  const external = /^(https?:|mailto:)/.test(href);
  const cls = `group inline-flex h-12 shrink-0 items-center whitespace-nowrap justify-center gap-2 rounded-full px-6 text-[15px] font-semibold transition-all duration-300 active:scale-[0.97] ${styles[variant]} ${className}`;
  const inner = (
    <>
      {children}
      {arrow && <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />}
    </>
  );
  return external ? (
    <a href={href} className={cls}>
      {inner}
    </a>
  ) : (
    <Link href={href} className={cls}>
      {inner}
    </Link>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  lede,
  align = "left",
  className = "",
}: {
  eyebrow?: string;
  title: React.ReactNode;
  lede?: string;
  align?: "left" | "center";
  className?: string;
}) {
  const center = align === "center";
  return (
    <div className={`${center ? "mx-auto text-center" : ""} max-w-3xl ${className}`}>
      {eyebrow && (
        <p className="eyebrow">
          <span className="h-[3px] w-6 -skew-x-[30deg] rounded-full bg-brand" aria-hidden="true" />
          {eyebrow}
        </p>
      )}
      <h2 className="display mt-4 text-4xl sm:text-5xl lg:text-[3.5rem]">{title}</h2>
      {lede && <p className={`mt-5 text-lg leading-relaxed text-muted ${center ? "mx-auto" : ""} max-w-2xl`}>{lede}</p>}
    </div>
  );
}
