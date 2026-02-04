export function ExperienceCard({
  role,
  company,
  start,
  end,
  location,
  highlights,
}: {
  role: string;
  company: string;
  start: string;
  end: string;
  location?: string;
  highlights: string[];
}) {
  return (
    <div className="rounded-2xl border bg-white p-5 shadow-sm">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <div>
          <p className="text-sm font-semibold">
            {role} <span className="text-zinc-500">•</span> {company}
          </p>
          {location && <p className="text-xs text-zinc-600">{location}</p>}
        </div>
        <p className="text-xs text-zinc-600">
          {start} — {end}
        </p>
      </div>

      <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-zinc-700">
        {highlights.map((h) => (
          <li key={h}>{h}</li>
        ))}
      </ul>
    </div>
  );
}
