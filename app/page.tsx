import { Header } from "@/components/Header";
import { Section } from "@/components/Section";
import { ExperienceCard } from "@/components/ExperienceCard";
import { ProjectCard } from "@/components/ProjectCard";
import { SkillPills } from "@/components/SkillPills";
import { ChatWidget } from "@/components/ChatWidget/ChatWidget";
import { resume } from "@/data/resume";

export default function Page() {
  return (
    <div>
      <Header />

      <main className="mx-auto max-w-5xl px-4 py-10">
        <div className="rounded-3xl border bg-white p-6 shadow-sm">
          <p className="text-sm text-zinc-600">{resume.location}</p>
          <h1 className="mt-1 text-2xl font-semibold tracking-tight">
            {resume.name}
          </h1>
          <p className="mt-1 text-sm text-zinc-700">{resume.title}</p>

          <div className="mt-4 grid gap-2 text-sm text-zinc-700 md:grid-cols-3">
            <a
              className="rounded-xl border px-3 py-2 hover:bg-zinc-50"
              href={`mailto:${resume.email}`}
            >
              {resume.email}
            </a>
            <a
              className="rounded-xl border px-3 py-2 hover:bg-zinc-50"
              href={`tel:${resume.phone}`}
            >
              {resume.phone}
            </a>
            <a
              className="rounded-xl border px-3 py-2 hover:bg-zinc-50"
              href={`https://${resume.linkedin}`}
              target="_blank"
            >
              {resume.linkedin}
            </a>
          </div>
        </div>

        <Section id="about" title="About">
          <p>{resume.about}</p>
        </Section>

        <Section id="working-style" title="Working Style">
          <p>{resume.workingStyle}</p>
        </Section>

        <Section id="experience" title="Experience">
          <div className="grid gap-4">
            {resume.experience.map((e) => (
              <ExperienceCard
                key={`${e.company}-${e.role}-${e.start}`}
                {...e}
              />
            ))}
          </div>
        </Section>

        <Section id="projects" title="Projects">
          <div className="grid gap-4 md:grid-cols-2">
            {resume.projects.map((p) => (
              <ProjectCard key={p.name} {...p} />
            ))}
          </div>
        </Section>

        <Section id="skills" title="Skills">
          <SkillPills skills={resume.skills} />
        </Section>

        <Section id="education" title="Education">
          <div className="grid gap-4 md:grid-cols-2">
            {resume.education.map((e) => (
              <div
                key={e.id}
                className="rounded-2xl border bg-white p-5 shadow-sm"
              >
                <p className="text-sm font-semibold">{e.school}</p>
                <p className="mt-1 text-sm text-zinc-700">{e.degree}</p>
                <p className="mt-1 text-xs text-zinc-600">{e.years}</p>
              </div>
            ))}
          </div>
        </Section>
      </main>

      <ChatWidget />
    </div>
  );
}
