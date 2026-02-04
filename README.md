# Digital Resume + Resume-Only Chat Assistant

A simple digital resume website built with **Next.js** and **Tailwind CSS**, featuring a **chat assistant** that answers questions using **only the resume content**.

## Live Demo
- **Live link:** https://resume-chat-rouge.vercel.app/

## Repository
- **GitHub repo:** https://github.com/Georges13Metri/resume-chat.git

---

## Features
- Resume sections: **About**, **Working Style**, **Experience**, **Projects**, **Skills**, **Education**
- **Resume-only chat assistant**
  - Uses lightweight retrieval from the resume content
  - Refuses to answer if the information is not present in the resume
  - Returns short, concise responses
  - Includes sources (sections used)

---

## How the Chat Works (Resume-Only)
1. Resume data is stored in a single source of truth: `src/data/resume.ts`
2. The server builds searchable chunks from resume sections
3. A simple keyword-overlap retrieval selects the most relevant chunks
4. The assistant answers **only** from those chunks; otherwise it responds:
   > "I don’t have that information in the resume."

API route:
- `POST /api/chat` with body:
```json
{ "question": "..." }
