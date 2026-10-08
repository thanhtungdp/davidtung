import { notFound } from "next/navigation";
import { getEntry, getSlugs } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";
import { ArticleView } from "@/views/ArticleView";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return getSlugs("blog", "en").map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const entry = getEntry("blog", "en", slug);
  const locales = getSlugs("blog", "vi").includes(slug) ? (["vi", "en"] as const) : (["en"] as const);
  return entry ? pageMetadata("en", `/blog/${slug}/`, { title: entry.title, description: entry.description, image: entry.image, locales }) : {};
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const entry = getEntry("blog", "en", slug);
  if (!entry) notFound();
  return <ArticleView entry={entry} locale={"en"} kind="blog" />;
}
