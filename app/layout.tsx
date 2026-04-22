import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Turnout — From Support to Votes",
  description:
    "A non-partisan, privacy-first platform that helps diaspora voters turn intent into action.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-white text-zinc-900">
        <header className="border-b border-zinc-200">
          <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
            <Link href="/" className="font-semibold tracking-tight">
              <span className="text-indigo-600">●</span> Turnout
            </Link>
            <nav className="flex items-center gap-5 text-sm text-zinc-600">
              <Link href="/momentum" className="hover:text-zinc-900">
                Momentum
              </Link>
              <Link href="/elections" className="hover:text-zinc-900">
                Elections
              </Link>
              <Link href="/topics" className="hover:text-zinc-900">
                Topics
              </Link>
              <Link href="/dashboard" className="hover:text-zinc-900">
                My plan
              </Link>
              <Link href="/inbox" className="hover:text-zinc-900">
                Inbox
              </Link>
              <Link href="/admin" className="hover:text-zinc-900">
                Admin
              </Link>
              <Link
                href="/commit"
                className="rounded-md bg-zinc-900 px-3 py-1.5 text-white hover:bg-zinc-700"
              >
                Commit
              </Link>
            </nav>
          </div>
        </header>
        <main className="flex-1">{children}</main>
        <footer className="border-t border-zinc-200 py-6 text-center text-xs text-zinc-500">
          Non-partisan · Privacy-first · Prototype — hackathon demo
        </footer>
      </body>
    </html>
  );
}
