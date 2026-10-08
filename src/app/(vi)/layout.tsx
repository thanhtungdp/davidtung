import { SiteShell } from "@/components/layout/SiteShell";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("vi", "/");

export default function Layout({ children }: { children: React.ReactNode }) {
  return <SiteShell locale={"vi"}>{children}</SiteShell>;
}
