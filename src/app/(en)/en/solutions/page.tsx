import { solutionsPage } from "@/content/solutions";
import { pageMetadata } from "@/lib/seo";
import { SolutionsView } from "@/views/SolutionsView";

export const metadata = pageMetadata("en", "/solutions/", { title: solutionsPage.en.title, description: solutionsPage.en.lede });

export default function Page() {
  return <SolutionsView locale="en" />;
}
