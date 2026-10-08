import { Be_Vietnam_Pro } from "next/font/google";
import { getDictionary } from "@/i18n";
import type { Locale } from "@/i18n/config";
import { projects } from "@/content/projects";
import { MotionProvider } from "@/components/motion/MotionProvider";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { themeScript } from "./ThemeToggle";
import "@/app/globals.css";

const font = Be_Vietnam_Pro({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  variable: "--font-be-vietnam",
  display: "swap",
});

/** Root <html> for one locale. Each locale route group renders its own root layout. */
export function SiteShell({ locale, children }: { locale: Locale; children: React.ReactNode }) {
  const t = getDictionary(locale);
  const navProjects = projects.map((p) => ({
    slug: p.slug,
    name: p.copy[locale].name,
    tag: p.copy[locale].tag,
    summary: p.copy[locale].summary,
    metric: p.copy[locale].metric,
  }));

  return (
    <html lang={locale} className={font.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-dvh overflow-x-clip">
        <MotionProvider>
          <Header locale={locale} t={t.nav} projects={navProjects} />
          <main id="main">{children}</main>
          <Footer locale={locale} t={t} />
        </MotionProvider>
      </body>
    </html>
  );
}
