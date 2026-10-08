import type { MetadataRoute } from "next";
import { locales, localePath, siteUrl, type Locale } from "@/i18n/config";
import { projects } from "@/content/projects";
import { getSlugs } from "@/lib/content";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["/", "/blog/", "/playbooks/", "/hermes/", "/about/", "/booking/", ...projects.map((p) => `/projects/${p.slug}/`)];
  const entry = (path: string, available: readonly Locale[]) =>
    available.map((l) => ({
      url: siteUrl + localePath(l, path),
      alternates: { languages: Object.fromEntries(available.map((x) => [x, siteUrl + localePath(x, path)])) },
    }));

  const collection = (kind: "blog" | "playbooks") => {
    const slugs = new Set(locales.flatMap((l) => getSlugs(kind, l)));
    return [...slugs].flatMap((slug) => entry(`/${kind}/${slug}/`, locales.filter((l) => getSlugs(kind, l).includes(slug))));
  };

  return [...pages.flatMap((p) => entry(p, locales)), ...collection("blog"), ...collection("playbooks")];
}
