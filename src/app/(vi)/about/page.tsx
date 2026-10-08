import { aboutPage } from "@/content/pages";
import { pageMetadata } from "@/lib/seo";
import { AboutView } from "@/views/AboutView";

export const metadata = pageMetadata("vi", "/about/", { title: aboutPage["vi"].eyebrow, description: aboutPage["vi"].lede });

export default function Page() {
  return <AboutView locale={"vi"} />;
}
