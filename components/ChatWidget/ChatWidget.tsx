"use client";

import { useMemo, useState } from "react";

type Msg = { role: "user" | "assistant"; text: string };

const QUICK = [
  "What is your typical workflow from an idea, AI prototype, to production feature?",
  "What’s your go-to stack and any tools/tech you’re interested in?",
  "What does “good” human-AI interaction look like to you?",
];

export function ChatWidget() {
  const [open, setOpen] = useState(true);
  const [input, setInput] = useState("");
  const [msgs, setMsgs] = useState<Msg[]>([
    { role: "assistant", text: "Ask me anything about this resume." },
  ]);
  const [loading, setLoading] = useState(false);

  async function ask(q: string) {
    const question = q.trim();
    if (!question) return;

    setMsgs((m) => [...m, { role: "user", text: question }]);
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question }),
      });
      const data = await res.json();

      const answer =
        data?.result?.answer ?? "I don’t have that information in the resume.";
      const sourcesArr = data?.result?.sources ?? [];
      const sources = sourcesArr.length
        ? `\n\nSources: ${sourcesArr.join(", ")}`
        : "";

      setMsgs((m) => [
        ...m,
        { role: "assistant", text: `${answer}${sources}` },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="fixed bottom-4 right-4 w-90 max-w-[calc(100vw-2rem)]">
      <div className="rounded-2xl border bg-white shadow-sm">
        <div className="flex items-center justify-between border-b px-4 py-3">
          <p className="text-sm font-medium">Resume Assistant</p>
          <button
            onClick={() => setOpen((o) => !o)}
            className="text-xs hover:cursor-pointer
             text-zinc-600 hover:text-zinc-900"
          >
            {open ? "Hide" : "Show"}
          </button>
        </div>

        {open && (
          <>
            <div className="max-h-72 overflow-auto px-4 py-3">
              <div className="flex flex-wrap gap-2 pb-3">
                {QUICK.map((p) => (
                  <button
                    key={p}
                    onClick={() => ask(p)}
                    className="rounded-full border px-3 py-1 text-xs hover:bg-zinc-50"
                  >
                    Prompt
                  </button>
                ))}
              </div>

              <div className="space-y-3">
                {msgs.map((m, idx) => (
                  <div
                    key={idx}
                    className={[
                      "rounded-xl px-3 py-2 text-sm whitespace-pre-wrap",
                      m.role === "user"
                        ? "ml-10 bg-zinc-900 text-white"
                        : "mr-10 bg-zinc-100 text-zinc-900",
                    ].join(" ")}
                  >
                    {m.text}
                  </div>
                ))}
                {loading && (
                  <div className="mr-10 rounded-xl bg-zinc-100 px-3 py-2 text-sm text-zinc-600">
                    Thinking...
                  </div>
                )}
              </div>
            </div>

            <form
              className="flex gap-2 border-t p-3"
              onSubmit={(e) => {
                e.preventDefault();
                ask(input);
                setInput("");
              }}
            >
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about experience, skills, projects..."
                className="flex-1 rounded-xl border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-zinc-200"
              />
              <button
                disabled={loading}
                className="rounded-xl bg-zinc-900 px-4 py-2 text-sm text-white disabled:opacity-60"
              >
                Send
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
