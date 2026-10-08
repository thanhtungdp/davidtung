import { getDictionary } from "@/i18n";
import type { Locale } from "@/i18n/config";
import { getEntries } from "@/lib/content";
import { PlaybookCard } from "@/components/sections/EntryCards";
import { PageHero } from "@/components/sections/PageHero";

export function PlaybooksView({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const list = getEntries("playbooks", locale);
  return (
    <>
      <PageHero eyebrow={`${list.length} playbook${locale === "en" && list.length > 1 ? "s" : ""}`} title={t.playbookPage.title} lede={t.playbookPage.lede} />
      <section className="container-x grid gap-5 pb-12 md:grid-cols-2 lg:grid-cols-3">
        {list.map((pb, i) => (
          <PlaybookCard key={pb.slug} pb={pb} locale={locale} readLabel={t.playbooks.read} pagesLabel={t.playbooks.pages} i={i} />
        ))}
      </section>
    </>
  );
}
