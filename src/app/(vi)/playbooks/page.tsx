import { getDictionary } from "@/i18n";
import { pageMetadata } from "@/lib/seo";
import { PlaybooksView } from "@/views/PlaybooksView";

const t = getDictionary("vi");
export const metadata = pageMetadata("vi", "/playbooks/", { title: t.playbookPage.title, description: t.playbookPage.lede });

export default function Page() {
  return <PlaybooksView locale={"vi"} />;
}
