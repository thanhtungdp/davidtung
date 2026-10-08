import type { MetadataRoute } from "next";
import { locales, localePath, siteUrl } from "@/i18n/config";
import { projects } from "@/content/projects";
import { getEntries } from "@/lib/content";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "/",
    "/blog/",
    "/playbooks/",
    "/hermes/",
    "/about/",
    ...projects.map((p) => `/projects/${p.slug}/`),
    ...getEntries("blog", "vi").map((e) => `/blog/${e.slug}/`),
    ...getEntries("playbooks", "vi").map((e) => `/playbooks/${e.slug}/`),
  ];
  return paths.flatMap((path) =>
    locales.map((l) => ({
      url: siteUrl + localePath(l, path),
      alternates: { languages: Object.fromEntries(locales.map((x) => [x, siteUrl + localePath(x, path)])) },
    })),
  );
}
