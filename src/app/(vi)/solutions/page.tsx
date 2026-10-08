import { solutionsPage } from "@/content/solutions";
import { pageMetadata } from "@/lib/seo";
import { SolutionsView } from "@/views/SolutionsView";

export const metadata = pageMetadata("vi", "/solutions/", { title: solutionsPage.vi.title, description: solutionsPage.vi.lede });

export default function Page() {
  return <SolutionsView locale="vi" />;
}
