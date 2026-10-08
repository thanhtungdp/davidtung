import { getDictionary } from "@/i18n";
import { pageMetadata } from "@/lib/seo";
import { BlogIndexView } from "@/views/BlogIndexView";

const t = getDictionary("en");
export const metadata = pageMetadata("en", "/blog/", { title: t.blog.title, description: t.blog.lede });

export default function Page() {
  return <BlogIndexView locale={"en"} />;
}
