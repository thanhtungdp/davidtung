import { getDictionary } from "@/i18n";
import { pageMetadata } from "@/lib/seo";
import { BlogIndexView } from "@/views/BlogIndexView";

const t = getDictionary("vi");
export const metadata = pageMetadata("vi", "/blog/", { title: t.blog.title, description: t.blog.lede });

export default function Page() {
  return <BlogIndexView locale={"vi"} />;
}
