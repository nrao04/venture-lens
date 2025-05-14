// pages/api/analyze.ts
import type { NextApiRequest, NextApiResponse } from "next";
import OpenAI from "openai";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ result?: string; error?: string }>
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { idea } = req.body;
  if (!idea || typeof idea !== "string") {
    return res.status(400).json({ error: "Missing or invalid `idea`" });
  }

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: "You analyze startup ideas." },
        {
          role: "user",
          content: `Analyze: "${idea}"
  
1. Market summary
2. Top 3 competitors
3. High-level roadmap`
        },
      ],
      temperature: 0.7,
    });

    const content = response.choices?.[0]?.message?.content;
    if (!content) {
      throw new Error("No content returned from OpenAI");
    }

    // Always return { result: string } on success
    return res.status(200).json({ result: content });
  } catch (err: any) {
    console.error("OpenAI error:", err);
    // Return the error message so the front-end can display it
    return res
      .status(500)
      .json({ error: err.message || "OpenAI request failed" });
  }
}
