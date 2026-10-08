import { getDictionary } from "@/i18n";
import type { Locale } from "@/i18n/config";
import { getEntries } from "@/lib/content";
import { BlogList } from "@/components/sections/BlogList";
import { PageHero } from "@/components/sections/PageHero";

export function BlogIndexView({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  return (
    <>
      <PageHero title={t.blog.title} lede={t.blog.lede} />
      <section className="container-x pb-12">
        <BlogList posts={getEntries("blog", locale)} locale={locale} labels={{ all: t.blog.all, read: t.notes.read, minutes: t.blog.minutes, more: t.blog.more }} />
      </section>
    </>
  );
}
