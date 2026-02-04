import { Chunk } from "./retrieve.js";

export function buildAnswer(
  question: string,
  top: { chunk: Chunk; score: number }[],
) {
  const best = top[0];
  if (best.score === 0) {
    return `I'm sorry, I don't have enough information to answer that question.`;
  }
  const totalScore = top.reduce((sum, item) => sum + item.score, 0);

  if (!best || best.score < 2 || totalScore < 4) {
    return {
      answer: "I don’t have that information in the resume.",
      sources: [] as string[],
    };
  }

  const sentences: string[] = [];
  for (const { chunk } of top) {
    const parts = chunk.text
      .split(/(?<=[.!?])\s+/)
      .map((s) => s.trim())
      .filter(Boolean);

    for (const s of parts) {
      if (sentences.length >= 2) break;
      if (s.length >= 30) sentences.push(s);
    }
    if (sentences.length >= 2) break;
  }

  const answer = sentences.join(" ").slice(0, 350);
  const sources = top.filter((x) => x.score > 0).map((x) => x.chunk.sourcePath);

  return { answer, sources: Array.from(new Set(sources)).slice(0, 3) };
}
