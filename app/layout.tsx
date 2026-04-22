import type { Metadata } from "next";
import Link from "next/link";
import { cookies } from "next/headers";
import "./globals.css";
import { DEMO_PERSONAS } from "@/lib/personas";
import { getCountry } from "@/lib/countries";
import PersonaSwitcher, { type EnrichedPersona } from "@/app/PersonaSwitcher";

export const metadata: Metadata = {
  title: "Turnout — From Support to Votes",
  description:
    "A non-partisan, privacy-first platform that helps diaspora voters turn intent into action.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Read the active persona from cookie (server-side, no client round-trip)
  const cookieStore = await cookies();
  const activeCommitId = cookieStore.get("turnout_uid")?.value;

  // Build enriched persona list for the switcher (flag from country rules)
  const enrichedPersonas: EnrichedPersona[] = DEMO_PERSONAS.map((p) => {
    // Derive the country code from the commitId convention: persona-{cc}-{city}
    // but for accuracy we look it up from the persona's commit country stored in the meta.
    // Since PersonaMeta doesn't carry a country code, we derive it from commitId slug:
    //   persona-mt-london → MT, persona-ch-berlin → CH, etc.
    const parts = p.commitId.split("-"); // ["persona","mt","london"]
    const countryCode = parts[1]?.toUpperCase() ?? "";
    const countryRules = getCountry(countryCode);
    const flag = countryRules?.flag ?? "🌍";
    const firstName = p.displayName.split(" ")[0]; // "Maria", "Lukas", …
    return { ...p, flag, firstName };
  });

  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-white text-zinc-900">
        <header className="border-b border-zinc-200">
          <div className="mx-auto flex max-w-full items-center justify-between px-6 py-4 sm:px-10">
            <div className="flex items-center gap-3">
              {/* Persona switcher sits left of the logo for visual distinction */}
              <PersonaSwitcher
                personas={enrichedPersonas}
                activeCommitId={activeCommitId}
              />
              <Link href="/" className="font-semibold tracking-tight">
                <span className="text-indigo-600">●</span> Turnout
              </Link>
            </div>
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
