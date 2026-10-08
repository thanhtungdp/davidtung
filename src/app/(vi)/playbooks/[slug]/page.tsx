import { notFound } from "next/navigation";
import { getEntry, getSlugs } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";
import { ArticleView } from "@/views/ArticleView";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return getSlugs("playbooks", "vi").map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const entry = getEntry("playbooks", "vi", slug);
  const locales = getSlugs("playbooks", "en").includes(slug) ? (["vi", "en"] as const) : (["vi"] as const);
  return entry ? pageMetadata("vi", `/playbooks/${slug}/`, { title: entry.title, description: entry.description, image: entry.image, locales }) : {};
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const entry = getEntry("playbooks", "vi", slug);
  if (!entry) notFound();
  return <ArticleView entry={entry} locale={"vi"} kind="playbooks" />;
}
