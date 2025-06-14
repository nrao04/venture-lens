// pages/api/analyze.ts
import type { NextApiRequest, NextApiResponse } from "next";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

type AnalyzeResponse = {
  market: string[];
  competitors: string[];
  roadmap: string[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<AnalyzeResponse | { error: string }>
) {
  if (req.method !== "POST") return res.status(405).end();
  const { idea } = req.body;
  if (!idea || typeof idea !== "string") {
    return res.status(400).json({ error: "Missing or invalid idea" });
  }

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      temperature: 0.7,
      messages: [
        {
          role: "system",
          content:
            `
            You are a startup analyst and hiring coach. Output only a JSON object with three arrays: market, competitors, roadmap. (Include 5-6 bullets) 
            -- Example input: “smart recipe generator”  
            -- Example output:
            {
              "market": [
                "50M+ home cooks seeking personalized meal plans",
                "Growing NLP interest for food‐tech personalization",
                "Increasing API adoption for recipe databases"
              ],
              "competitors": [
                "Edamam API: widely used recipe database with REST endpoints",
                "Spoonacular: strong ML tagging for dietary filters",
                "Yummly: personalized UI but closed source"
              ],
              "roadmap": [
                "Prototype GPT‐4 dietary filter plugin (demo in 2 weeks)",
                "Integrate nutrition API & show real‐time macros UI",
                "Open‐source on GitHub to attract developer feedback"
              ]
            }
            Do not include any extra text. Now analyze: "${idea}"
            `,
        },
        {
          role: "user",
          content: `Analyze this startup idea: "${idea}"`,
        },
      ],
    });

    // raw content from GPT
    let raw = completion.choices[0].message?.content ?? "";

    // strip any accidental code fences or backticks
    raw = raw.trim().replace(/^```json\s*/, "").replace(/```$/, "").trim();

    // parse JSON
    const payload: AnalyzeResponse = JSON.parse(raw);

    // basic validation
    if (
      !Array.isArray(payload.market) ||
      !Array.isArray(payload.competitors) ||
      !Array.isArray(payload.roadmap)
    ) {
      throw new Error("Invalid JSON shape");
    }

    return res.status(200).json(payload);
  } catch (err: unknown) {
  console.error("analyze.ts error:", err);
  if (err instanceof Error) {
    return res.status(500).json({ error: err.message });
  }
  return res.status(500).json({ error: "OpenAI request failed" });
  }
}