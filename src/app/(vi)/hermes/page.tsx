import { hermesPage } from "@/content/pages";
import { pageMetadata } from "@/lib/seo";
import { HermesView } from "@/views/HermesView";

export const metadata = pageMetadata("vi", "/hermes/", { title: "Hermes AI Agent", description: hermesPage["vi"].lede });

export default function Page() {
  return <HermesView locale={"vi"} />;
}
