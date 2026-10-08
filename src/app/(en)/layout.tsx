import { SiteShell } from "@/components/layout/SiteShell";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("en", "/");

export default function Layout({ children }: { children: React.ReactNode }) {
  return <SiteShell locale={"en"}>{children}</SiteShell>;
}
