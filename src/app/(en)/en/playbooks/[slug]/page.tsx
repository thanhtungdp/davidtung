import { notFound } from "next/navigation";
import { getEntry, getSlugs } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";
import { ArticleView } from "@/views/ArticleView";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return getSlugs("playbooks", "en").map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const entry = getEntry("playbooks", "en", slug);
  return entry ? pageMetadata("en", `/playbooks/${slug}/`, { title: entry.title, description: entry.description }) : {};
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const entry = getEntry("playbooks", "en", slug);
  if (!entry) notFound();
  return <ArticleView entry={entry} locale={"en"} kind="playbooks" />;
}
