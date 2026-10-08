import type { Metadata } from "next";
import { Be_Vietnam_Pro } from "next/font/google";
import { themeScript } from "@/components/layout/ThemeToggle";
import "./globals.css";

const font = Be_Vietnam_Pro({ subsets: ["latin", "vietnamese"], weight: ["400", "800"], variable: "--font-be-vietnam" });

export const metadata: Metadata = { title: "404 — David Tung" };

export default function GlobalNotFound() {
  return (
    <html lang="vi" className={font.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="grid min-h-dvh place-items-center px-4">
        <div className="grain fixed inset-0 [mask-image:radial-gradient(circle,#000_10%,transparent_60%)]" aria-hidden="true" />
        <main className="relative text-center">
          <p className="display text-[clamp(6rem,24vw,14rem)] italic text-brand">404</p>
          <svg viewBox="0 0 600 120" className="mx-auto -mt-6 h-10 w-72" fill="none" aria-hidden="true">
            <path d="M6 104 C 150 98, 330 70, 594 10" stroke="var(--brand)" strokeWidth="16" strokeLinecap="round" strokeDasharray="40 30" />
          </svg>
          <h1 className="display mt-8 text-3xl sm:text-4xl">Đường này chưa được trải nhựa.</h1>
          <p className="mt-3 text-muted">This road hasn&apos;t been paved yet.</p>
          <div className="mt-10 flex justify-center gap-3">
            <a href="/" className="inline-flex h-12 items-center rounded-full bg-brand px-6 font-semibold text-white">
              Về trang chủ
            </a>
            <a href="/en/" className="inline-flex h-12 items-center rounded-full border border-line px-6 font-semibold">
              English home
            </a>
          </div>
        </main>
      </body>
    </html>
  );
}
