import type { Chunk } from "./retrieve";
import type { Resume } from "../../data/resume";

export function buildChunksFromResume(resume: Resume): Chunk[] {
  const chunks: Chunk[] = [];

  chunks.push({
    id: "identity",
    title: "Identity",
    text: `${resume.name} is a ${resume.title} based in ${resume.location}.`,
    sourcePath: "About",
  });

  chunks.push({
    id: "about",
    title: "About",
    text: resume.about,
    sourcePath: "About",
  });

  chunks.push({
    id: "working-style",
    title: "Working Style",
    text: resume.workingStyle,
    sourcePath: "Working Style",
  });

  for (const exp of resume.experience) {
    chunks.push({
      id: `exp-${exp.company}-${exp.role}`,
      title: `${exp.role} at ${exp.company}`,
      text: exp.highlights.join(" "),
      sourcePath: `Experience > ${exp.company}`,
    });
  }

  for (const p of resume.projects) {
    chunks.push({
      id: `proj-${p.name}`,
      title: p.name,
      text: `${p.description} ${p.highlights.join(" ")}`,
      sourcePath: `Projects > ${p.name}`,
    });
  }

  chunks.push({
    id: "skills",
    title: "Skills",
    text: resume.skills.join(" "),
    sourcePath: "Skills",
  });

  chunks.push({
    id: "education",
    title: "Education",
    text: resume.education
      .map((e: any) => `${e.school} ${e.degree} ${e.years}`)
      .join(" "),
    sourcePath: "Education",
  });

  return chunks;
}
