import { aboutPage } from "@/content/pages";
import { pageMetadata } from "@/lib/seo";
import { AboutView } from "@/views/AboutView";

export const metadata = pageMetadata("en", "/about/", { title: aboutPage["en"].eyebrow, description: aboutPage["en"].lede });

export default function Page() {
  return <AboutView locale={"en"} />;
}
