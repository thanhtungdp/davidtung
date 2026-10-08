import { SiteShell } from "@/components/layout/SiteShell";
import { pageMetadata } from "@/lib/seo";

export const viewport = {
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fbf8f4" },
    { media: "(prefers-color-scheme: dark)", color: "#0b0a09" },
  ],
} as const;

export const metadata = pageMetadata("vi", "/");

export default function Layout({ children }: { children: React.ReactNode }) {
  return <SiteShell locale={"vi"}>{children}</SiteShell>;
}
