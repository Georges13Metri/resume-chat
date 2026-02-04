export function SkillPills({ skills }: { skills: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {skills.map((s) => (
        <span
          key={s}
          className="rounded-full border bg-white px-3 py-1 text-xs text-zinc-800 shadow-sm"
        >
          {s}
        </span>
      ))}
    </div>
  );
}
