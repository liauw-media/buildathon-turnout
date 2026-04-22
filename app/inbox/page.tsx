import Link from "next/link";
import { cookies } from "next/headers";
import { getCommit } from "@/lib/store";
import { getCountry } from "@/lib/countries";
import { buildMessagesFor, buildSampleMessages, type Message } from "@/lib/messages";
import { formatDate } from "@/lib/timeline";

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default async function InboxPage({
  searchParams,
}: {
  searchParams: Promise<{ id?: string }>;
}) {
  const cookieStore = await cookies();
  const uid = cookieStore.get("turnout_uid")?.value;
  const user = uid ? await getCommit(uid) : undefined;

  const params = await searchParams;
  const selectedId = params.id;

  const isSample = !user;

  // Resolve country — fall back to Moldova for the sample view
  const countryCode = user?.country ?? "MD";
  const country = getCountry(countryCode);

  if (!country) {
    return (
      <div className="mx-auto max-w-2xl px-6 py-20 text-center text-rose-700">
        Country configuration error. Please recommit.
      </div>
    );
  }

  const messages = isSample
    ? buildSampleMessages(country)
    : buildMessagesFor(user!, country);

  const selectedMsg = messages.find((m) => m.id === selectedId) ?? messages[0] ?? null;

  return (
    <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
      {/* Commit banner for unauthenticated visitors */}
      {isSample && (
        <div className="mb-6 flex items-center justify-between rounded-lg border border-indigo-200 bg-indigo-50 px-5 py-3">
          <p className="text-sm text-indigo-800">
            <span className="font-semibold">Sample inbox</span> — this is what Moldova diaspora
            voters receive. Commit to see your personalized messages.
          </p>
          <Link
            href="/commit"
            className="ml-4 shrink-0 rounded-md bg-indigo-600 px-4 py-1.5 text-sm font-medium text-white hover:bg-indigo-700"
          >
            Commit to see yours →
          </Link>
        </div>
      )}

      <div className="flex items-baseline justify-between">
        <h1 className="text-2xl font-semibold tracking-tight">
          {isSample ? "Sample inbox" : "Your inbox"}
        </h1>
        <span className="text-xs text-zinc-500">{messages.length} messages</span>
      </div>
      <p className="mt-1 text-sm text-zinc-500">
        {isSample
          ? "Showing messages for a Moldova voter in Berlin."
          : `Messages for ${user!.name.split(" ")[0]} · ${country.flag} ${country.name} diaspora in ${user!.city}.`}
      </p>

      {/* Two-pane layout */}
      <div className="mt-5 flex gap-5">
        {/* Left: message list */}
        <aside className="hidden w-80 shrink-0 md:block">
          <MessageList messages={messages} selectedId={selectedMsg?.id ?? null} />
        </aside>

        {/* Right: message body */}
        <section className="min-w-0 flex-1">
          {selectedMsg ? (
            <MessageView message={selectedMsg} />
          ) : (
            <div className="flex h-64 items-center justify-center rounded-lg border border-zinc-200 text-sm text-zinc-400">
              Select a message to read it.
            </div>
          )}

          {/* Mobile: stacked message list below body */}
          <div className="mt-6 md:hidden">
            <p className="mb-2 text-xs font-medium uppercase tracking-wide text-zinc-500">
              All messages
            </p>
            <MessageList messages={messages} selectedId={selectedMsg?.id ?? null} />
          </div>
        </section>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Message list (left column)
// ---------------------------------------------------------------------------

function MessageList({
  messages,
  selectedId,
}: {
  messages: Message[];
  selectedId: string | null;
}) {
  return (
    <ul className="divide-y divide-zinc-100 rounded-lg border border-zinc-200 bg-white overflow-hidden">
      {messages.map((msg) => {
        const isSelected = msg.id === selectedId;
        const isPast = msg.status === "sent";
        return (
          <li key={msg.id}>
            <Link
              href={`/inbox?id=${msg.id}`}
              className={`block px-4 py-3 transition-colors hover:bg-zinc-50 ${
                isSelected ? "bg-indigo-50 border-l-2 border-l-indigo-500" : ""
              }`}
            >
              <div className="flex items-center justify-between gap-2">
                <span
                  className={`truncate text-sm font-medium ${
                    isSelected ? "text-indigo-700" : "text-zinc-900"
                  }`}
                >
                  {msg.subject}
                </span>
                <ChannelBadge channel={msg.channel} />
              </div>
              <p className="mt-0.5 truncate text-xs text-zinc-500">
                {formatDate(msg.date.slice(0, 10))}
              </p>
              <p
                className={`mt-0.5 truncate text-xs ${
                  isPast ? "text-zinc-400" : "text-amber-700"
                }`}
              >
                {isPast ? `Sent · ${formatDate(msg.date.slice(0, 10))}` : `Scheduled for ${formatDate(msg.date.slice(0, 10))}`}
              </p>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

// ---------------------------------------------------------------------------
// Message view (right column)
// ---------------------------------------------------------------------------

function MessageView({ message }: { message: Message }) {
  if (message.channel === "email") {
    return <EmailView message={message} />;
  }
  return <SmsView message={message} />;
}

function EmailView({ message }: { message: Message }) {
  const isPast = message.status === "sent";
  const paragraphs = message.body.split("\n\n");

  return (
    <div className="rounded-lg border border-zinc-200 bg-white">
      {/* Email header */}
      <div className="border-b border-zinc-200 px-6 py-4">
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1 min-w-0">
            <h2 className="text-base font-semibold text-zinc-900 leading-snug">
              {message.subject}
            </h2>
            <div className="mt-2 space-y-0.5 text-xs text-zinc-500">
              <p>
                <span className="font-medium text-zinc-700">From:</span> {message.from}
              </p>
              <p>
                <span className="font-medium text-zinc-700">To:</span> {message.to}
              </p>
              <p>
                <span className="font-medium text-zinc-700">Date:</span>{" "}
                {formatDate(message.date.slice(0, 10))}
              </p>
            </div>
          </div>
          <div className="flex flex-col items-end gap-1.5 shrink-0">
            <ChannelBadge channel={message.channel} />
            <span
              className={`text-xs ${isPast ? "text-zinc-400" : "text-amber-700 font-medium"}`}
            >
              {isPast
                ? `Sent · ${formatDate(message.date.slice(0, 10))}`
                : `Scheduled for ${formatDate(message.date.slice(0, 10))}`}
            </span>
          </div>
        </div>
      </div>

      {/* Email body */}
      <div className="px-6 py-5 space-y-3 text-[15px] leading-relaxed text-zinc-800">
        {paragraphs.map((para, i) => {
          // Detect bullet lists (lines starting with •)
          if (para.includes("\n•") || para.startsWith("•")) {
            const lines = para.split("\n");
            return (
              <div key={i} className="space-y-1">
                {lines.map((line, j) =>
                  line.startsWith("•") ? (
                    <p key={j} className="flex gap-2">
                      <span className="text-indigo-400 shrink-0">•</span>
                      <span>{line.slice(1).trim()}</span>
                    </p>
                  ) : line.match(/^\d+\./) ? (
                    <p key={j} className="flex gap-2">
                      <span className="font-medium text-zinc-500 shrink-0">{line.split(".")[0]}.</span>
                      <span>{line.slice(line.indexOf(".") + 1).trim()}</span>
                    </p>
                  ) : (
                    <p key={j} className={line === "" ? "h-1" : ""}>
                      {line}
                    </p>
                  )
                )}
              </div>
            );
          }

          // Detect numbered list items in a paragraph
          if (/^\d+\.\s/.test(para) || para.includes("\n1. ") || para.includes("\n2. ")) {
            const lines = para.split("\n");
            return (
              <div key={i} className="space-y-1">
                {lines.map((line, j) =>
                  line.match(/^\d+\.\s/) ? (
                    <p key={j} className="flex gap-2">
                      <span className="font-medium text-zinc-500 shrink-0">
                        {line.match(/^(\d+)\./)?.[1]}.
                      </span>
                      <span>{line.replace(/^\d+\.\s/, "")}</span>
                    </p>
                  ) : (
                    <p key={j}>{line}</p>
                  )
                )}
              </div>
            );
          }

          // Links (lines starting with →)
          if (para.startsWith("→")) {
            return (
              <p key={i} className="text-indigo-600 underline underline-offset-2">
                {para}
              </p>
            );
          }

          // Greeting / sign-off
          if (para.startsWith("Hi ") || para.startsWith("— ")) {
            return (
              <p key={i} className={para.startsWith("— ") ? "text-zinc-500 mt-4" : ""}>
                {para}
              </p>
            );
          }

          return <p key={i}>{para}</p>;
        })}
      </div>
    </div>
  );
}

function SmsView({ message }: { message: Message }) {
  const isPast = message.status === "sent";

  return (
    <div className="rounded-lg border border-zinc-200 bg-white p-6">
      {/* SMS meta header */}
      <div className="mb-4 flex items-start justify-between">
        <div>
          <p className="text-xs font-medium uppercase tracking-wide text-zinc-500">
            {message.from}
          </p>
          <p className="mt-0.5 text-sm font-semibold text-zinc-900">{message.subject}</p>
        </div>
        <div className="flex flex-col items-end gap-1.5">
          <ChannelBadge channel={message.channel} />
          <span className={`text-xs ${isPast ? "text-zinc-400" : "text-amber-700 font-medium"}`}>
            {isPast
              ? `Sent · ${formatDate(message.date.slice(0, 10))}`
              : `Scheduled for ${formatDate(message.date.slice(0, 10))}`}
          </span>
        </div>
      </div>

      {/* Phone-frame container */}
      <div className="flex justify-start">
        <div className="max-w-xs rounded-2xl border border-zinc-200 bg-zinc-50 p-4 font-mono text-sm text-zinc-900">
          <p className="mb-2 text-[10px] font-semibold uppercase tracking-widest text-zinc-400">
            {message.from}
          </p>
          {/* Speech bubble */}
          <div className="rounded-2xl rounded-bl-md bg-white border border-zinc-200 p-3 text-sm leading-relaxed">
            {message.body}
          </div>
          <p className="mt-2 text-right text-[10px] text-zinc-400">
            {formatDate(message.date.slice(0, 10))}
          </p>
        </div>
      </div>

      <p className="mt-6 text-xs text-zinc-400">
        This SMS would be delivered to the phone number on file.
      </p>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Shared components
// ---------------------------------------------------------------------------

function ChannelBadge({ channel }: { channel: Message["channel"] }) {
  if (channel === "sms") {
    return (
      <span className="inline-flex shrink-0 items-center rounded-full bg-amber-100 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-amber-800">
        SMS
      </span>
    );
  }
  return (
    <span className="inline-flex shrink-0 items-center rounded-full bg-zinc-100 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-zinc-700">
      EMAIL
    </span>
  );
}
