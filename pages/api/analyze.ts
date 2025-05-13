// pages/api/analyze.ts
import type { NextApiRequest, NextApiResponse } from "next";
import OpenAI from "openai";

// initialize with your env var
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).end();     // only POST
  const { idea } = req.body;
  if (!idea) return res.status(400).json({ error: "Missing idea" });

  try {
    const response = await openai.chat.completions.create({     // call OpenAI
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: "You analyze startup ideas." },
        {
          role: "user",
          content: `Analyze: "${idea}"\n\n1. Market summary\n2. Top 3 competitors\n3. High-level roadmap`
        }
      ],
    });
    const result = response.choices[0].message?.content || "";
    res.status(200).json({ result });                           // return text
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "OpenAI request failed" });
  }
}
