import { getDictionary } from "@/i18n";
import { pageMetadata } from "@/lib/seo";
import { PlaybooksView } from "@/views/PlaybooksView";

const t = getDictionary("en");
export const metadata = pageMetadata("en", "/playbooks/", { title: t.playbookPage.title, description: t.playbookPage.lede });

export default function Page() {
  return <PlaybooksView locale={"en"} />;
}
