const STOP = new Set([
  "the",
  "a",
  "an",
  "and",
  "or",
  "to",
  "of",
  "in",
  "for",
  "with",
  "on",
  "at",
  "by",
  "from",
  "is",
  "are",
  "was",
  "were",
  "be",
  "been",
  "it",
  "this",
  "that",
  "as",
  "i",
  "you",
  "your",
]);

export function tokenize(input: string) {
  return input
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .split(/\s+/)
    .filter(Boolean)
    .filter((w) => !STOP.has(w));
}

export type Chunk = {
  id: string;
  title: string;
  text: string;
  sourcePath: string;
};

export function retrieveTopChunks(question: string, chunks: Chunk[], k = 4) {
  const questionTokens = new Set(tokenize(question));

  const scoredChunks = chunks
    .map((chunk) => {
      const words = tokenize(`${chunk.title} ${chunk.text}`);
      let score = 0;
      for (const w of words) if (questionTokens.has(w)) score++;
      return { chunk, score };
    })
    .sort((a, b) => b.score - a.score);

  return scoredChunks.slice(0, k);
}
