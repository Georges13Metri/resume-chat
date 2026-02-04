import { NextResponse } from "next/server";
import { resume } from "../../../data/resume";
import { buildChunksFromResume } from "../../../lib/chat/buildIndex";
import { retrieveTopChunks } from "@/lib/chat/retrieve";
import { buildAnswer } from "@/lib/chat/answer";

export async function POST(req : Request) {
  const { question } = await req.json();

  if (!question || typeof question !== "string") {
    return NextResponse.json(
      { error: "Invalid question provided." },
      { status: 400 }
    );
  }

  const chunks = buildChunksFromResume(resume);
  const top = retrieveTopChunks(question, chunks, 4);
  const result = buildAnswer(question, top);

  return NextResponse.json({  result });
}