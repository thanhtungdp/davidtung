import Link from "next/link";
import { localePath, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n";
import { contact } from "@/content/pages";
import { projects } from "@/content/projects";
import { Logo } from "./Logo";

export function Footer({ locale, t }: { locale: Locale; t: Dictionary }) {
  const p = (path: string) => localePath(locale, path);
  const cols = [
    {
      title: t.footer.explore,
      links: [
        { href: p("/playbooks/"), label: t.nav.playbooks },
        { href: p("/blog/"), label: t.nav.blog },
        { href: p("/hermes/"), label: t.nav.hermes },
        { href: p("/about/"), label: t.nav.about },
      ],
    },
    {
      title: t.footer.work,
      links: projects.map((pr) => ({ href: p(`/projects/${pr.slug}/`), label: pr.copy[locale].name })),
    },
    {
      title: t.footer.connect,
      links: [
        { href: contact.mailto, label: contact.email },
        { href: "https://simplamo.com", label: "Simplamo" },
      ],
    },
  ];

  return (
    <footer className="relative mt-24 overflow-hidden border-t border-line bg-elev">
      <div className="container-x grid gap-12 py-16 lg:grid-cols-[1.2fr_2fr]">
        <div>
          <Logo className="h-10 w-auto" />
          <p className="mt-5 max-w-sm text-muted">{t.footer.tagline}</p>
          <p className="mt-2 text-sm text-subtle">{t.footer.location}</p>
        </div>
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
          {cols.map((c) => (
            <div key={c.title}>
              <p className="text-xs font-semibold uppercase tracking-widest text-subtle">{c.title}</p>
              <ul className="mt-4 grid gap-2.5">
                {c.links.map((l) => (
                  <li key={l.href}>
                    {/^(https?:|mailto:)/.test(l.href) ? (
                      <a href={l.href} className="break-all text-[15px] text-muted transition-colors hover:text-brand">
                        {l.label}
                      </a>
                    ) : (
                      <Link href={l.href} className="text-[15px] text-muted transition-colors hover:text-brand">
                        {l.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="container-x" aria-hidden="true">
        <p className="display select-none whitespace-nowrap text-[clamp(2.25rem,9.5vw,9rem)] italic leading-[0.8] text-fg/[0.06]">
          Simple &amp; More <span className="text-brand/40">X10</span>
        </p>
      </div>

      <div className="border-t border-line">
        <div className="container-x flex flex-col gap-2 py-6 text-sm text-subtle sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} David Tung Phan. {t.footer.rights}
          </p>
          <p>davidtung.net</p>
        </div>
      </div>
    </footer>
  );
}
