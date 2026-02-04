import Link from "next/link";
import { resume } from "@/data/resume";

const NAV = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold">{resume.name}</p>
          <p className="truncate text-xs text-zinc-600">{resume.title}</p>
        </div>

        <nav className="hidden gap-4 md:flex">
          {NAV.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className="text-sm text-zinc-700 hover:text-zinc-900"
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href={`mailto:${resume.email}`}
            className="rounded-xl border px-3 py-1.5 text-xs hover:bg-zinc-50"
          >
            Email
          </Link>
          <Link
            href={`https://${resume.linkedin}`}
            target="_blank"
            className="rounded-xl bg-zinc-900 px-3 py-1.5 text-xs text-white hover:opacity-90"
          >
            LinkedIn
          </Link>
        </div>
      </div>
    </header>
  );
}
