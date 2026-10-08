import { hermesPage } from "@/content/pages";
import { pageMetadata } from "@/lib/seo";
import { HermesView } from "@/views/HermesView";

export const metadata = pageMetadata("en", "/hermes/", { title: "Hermes AI Agent", description: hermesPage["en"].lede });

export default function Page() {
  return <HermesView locale={"en"} />;
}
