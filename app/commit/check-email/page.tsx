import Link from "next/link";

type SearchParams = Promise<{ email?: string }>;

export default async function CheckEmailPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const { email } = await searchParams;

  return (
    <div className="mx-auto max-w-lg px-6 py-20">
      <div className="rounded-lg border border-indigo-200 bg-indigo-50 p-6 text-center">
        <div className="text-4xl">✉️</div>
        <h1 className="mt-3 text-2xl font-semibold tracking-tight text-indigo-900">
          Check your inbox
        </h1>
        <p className="mt-2 text-sm text-indigo-800">
          We&apos;ve sent a magic link to{" "}
          <span className="font-medium">{email ?? "your email address"}</span>. Click the link
          to finish committing — no password needed.
        </p>
      </div>

      <div className="mt-8 text-sm text-zinc-600 space-y-3">
        <p>
          <span className="font-medium text-zinc-800">Didn&apos;t get it?</span> Check your spam
          folder, or try again in a minute.
        </p>
        <p>
          <Link href="/commit" className="text-indigo-600 hover:underline">
            ← Try a different email
          </Link>
        </p>
      </div>
    </div>
  );
}
