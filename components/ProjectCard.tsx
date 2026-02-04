export function ProjectCard({
  name,
  description,
  stack,
  highlights,
  link,
}: {
  name: string;
  description: string;
  stack: string[];
  highlights: string[];
  link?: string;
}) {
  return (
    <div className="rounded-2xl border bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-sm font-semibold">{name}</p>
          <p className="mt-1 text-sm text-zinc-700">{description}</p>
        </div>
        {link ? (
          <a
            href={link}
            target="_blank"
            className="rounded-xl border px-3 py-1.5 text-xs hover:bg-zinc-50"
          >
            Link
          </a>
        ) : null}
      </div>

      <div className="mt-3 flex flex-wrap gap-2">
        {stack.map((t) => (
          <span
            key={t}
            className="rounded-full border bg-zinc-50 px-3 py-1 text-xs text-zinc-700"
          >
            {t}
          </span>
        ))}
      </div>

      <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-zinc-700">
        {highlights.map((h) => (
          <li key={h}>{h}</li>
        ))}
      </ul>
    </div>
  );
}
