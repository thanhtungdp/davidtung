import type { Dictionary } from "@/i18n";
import type { Locale } from "@/i18n/config";
import { Counter } from "@/components/motion/Counter";
import { Stagger, StaggerItem } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/ui/Button";

export function Stats({ t, locale }: { t: Dictionary["stats"]; locale: Locale }) {
  return (
    <section className="container-x py-12 sm:py-28">
      <SectionHeading title={t.title} align="center" />
      <Stagger className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-[1.75rem] border border-line bg-line lg:grid-cols-4">
        {t.items.map((s, i) => (
          <StaggerItem key={s.label} className="group relative bg-elev p-6 sm:p-10">
            <p className="display text-5xl sm:text-6xl">
              <span className={i === 0 ? "text-brand" : ""}>
                <Counter to={s.value} suffix={s.suffix} locale={locale} />
              </span>
            </p>
            <p className="mt-3 text-sm text-muted sm:text-base">{s.label}</p>
            <span className="absolute bottom-0 left-0 h-1 w-0 bg-brand transition-all duration-500 group-hover:w-full" aria-hidden="true" />
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}
