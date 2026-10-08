import { notFound } from "next/navigation";
import { getProject, projects } from "@/content/projects";
import { pageMetadata } from "@/lib/seo";
import { ProjectView } from "@/views/ProjectView";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const p = getProject(slug);
  return p ? pageMetadata("en", `/projects/${slug}/`, { title: p.copy["en"].name, description: p.copy["en"].summary }) : {};
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  return <ProjectView project={project} locale={"en"} />;
}
