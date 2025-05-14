// // pages/index.tsx
// import { useState } from "react";
// import { Section } from "../components/Section";

// type Analysis = {
//   market: string[];
//   competitors: string[];
//   roadmap: string[];
// };

// export default function Home() {
//   const [idea, setIdea] = useState("");
//   const [analysis, setAnalysis] = useState<Analysis | null>(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState<string | null>(null);

//   const submit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!idea.trim()) return;
//     setLoading(true);
//     setError(null);
//     setAnalysis(null);

//     try {
//       const res = await fetch("/api/analyze", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ idea }),
//       });
//       const body = await res.json();
//       console.log("API response:", body);

//       if (!res.ok) {
//         // there might be an { error: string } here
//         throw new Error(body.error || res.statusText);
//       }

//       const raw: string = body.result;
//       if (typeof raw !== "string") {
//         throw new Error("Invalid API response format");
//       }

//       // split into 3 sections by blank line
//       const parts = raw.split(/\n\s*\n/);

//       const market = parts[0]
//         .split("\n")
//         .map((l) => l.replace(/^\d+\.\s*/, "").trim())
//         .filter(Boolean);

//       const competitors = (parts[1] || "")
//         .split("\n")
//         .map((l) => l.replace(/^[a-z]\.\s*/, "").trim())
//         .filter(Boolean);

//       const roadmap = (parts[2] || "")
//         .split("\n")
//         .map((l) => l.replace(/^[-\d\.\s]*/, "").trim())
//         .filter(Boolean);

//       setAnalysis({ market, competitors, roadmap });
//     } catch (err: any) {
//       console.error(err);
//       setError(err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="flex flex-col items-center justify-start min-h-screen bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-700 p-6">
//       <h1 className="text-6xl font-extrabold text-white mb-8 drop-shadow-lg">
//         Venture Lens
//       </h1>

//       <form
//         onSubmit={submit}
//         className="w-full max-w-3xl backdrop-blur rounded-3xl border border-white/20 bg-white/10 shadow-xl p-8 mb-12 space-y-6"
//       >
//         <label className="block text-white font-semibold">
//           Describe your startup idea
//         </label>
//         <textarea
//           rows={4}
//           className="w-full p-4 rounded-xl bg-white/30 placeholder-white/70 text-white
//                      focus:outline-none focus:ring-2 focus:ring-accent transition"
//           placeholder="e.g. a protein-infused toothpaste…"
//           value={idea}
//           onChange={(e) => setIdea(e.target.value)}
//         />

//         <button
//           type="submit"
//           disabled={loading || !idea.trim()}
//           className="w-full py-3 text-lg font-bold rounded-xl
//                      bg-gradient-to-r from-accent to-secondary text-white
//                      hover:from-secondary hover:to-accent disabled:opacity-50 transition"
//         >
//           {loading ? "Analyzing…" : "Analyze"}
//         </button>

//         {error && (
//           <p className="text-sm text-red-400 mt-2 text-center">{error}</p>
//         )}
//       </form>

//       {analysis && (
//         <div className="w-full max-w-3xl space-y-6 overflow-auto">
//           <Section
//             icon="🔍"
//             title="Market Summary"
//             items={analysis.market}
//           />
//           <Section
//             icon="👥"
//             title="Top Competitors"
//             items={analysis.competitors}
//           />
//           <Section
//             icon="🗺️"
//             title="High-Level Roadmap"
//             items={analysis.roadmap}
//           />
//         </div>
//       )}
//     </div>
//   );
// }




// pages/index.tsx
import { useState } from "react";
import { Section } from "../components/Section";

export default function Home() {
  const [idea, setIdea] = useState("");
  const [analysis, setAnalysis] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setAnalysis(null);

    try {
      const res = await fetch("/api/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ idea }),
      });
      const body = await res.json();
      if (!res.ok) throw new Error(body.error ?? res.statusText);
      setAnalysis(body.result);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // parse the three blocks out of the raw newline-delimited response
  let marketLines: string[] = [];
  let competitorLines: string[] = [];
  let roadmapLines: string[] = [];
  if (analysis) {
    const [rawMarket, rawCompetitors, rawRoadmap] =
      analysis.split(/\n{2,}/);
    marketLines = rawMarket?.split("\n").slice(1).map((l) => l.trim()) ?? [];
    competitorLines =
      rawCompetitors?.split("\n").slice(1).map((l) => l.trim()) ?? [];
    roadmapLines =
      rawRoadmap?.split("\n").slice(1).map((l) => l.trim()) ?? [];
  }

  return (
    <div className="w-full max-w-2xl mx-auto">
      <h1 className="text-6xl font-extrabold text-white text-center mb-12 drop-shadow-lg">
        Venture Lens
      </h1>

      <form
        onSubmit={submit}
        className="backdrop-blur rounded-3xl border border-white/20 bg-white/10 shadow-xl p-8 mb-8 space-y-6"
      >
        <label className="block text-white font-semibold">
          Describe your startup idea!
        </label>
        <textarea
          rows={4}
          className="w-full p-4 rounded-xl bg-white/30 placeholder-white/70 text-white
                     focus:outline-none focus:ring-2 focus:ring-secondary transition"
          placeholder="e.g. a protein-infused toothpaste…"
          value={idea}
          onChange={(e) => setIdea(e.target.value)}
        />

        <button
          type="submit"
          disabled={loading || !idea.trim()}
          className="w-full py-3 text-lg font-bold rounded-xl
                     bg-gradient-to-r from-secondary to-accent text-white
                     hover:from-accent hover:to-secondary disabled:opacity-50 transition"
        >
          {loading ? "Analyzing…" : "Analyze"}
        </button>

        {error && (
          <p className="text-sm text-red-400 mt-2 text-center">{error}</p>
        )}
      </form>

      {analysis && (
        <div className="space-y-6">
          <Section
            icon="🔍"
            title="Market Summary"
            items={marketLines}
          />
          <Section
            icon="👥"
            title="Top Competitors"
            items={competitorLines}
          />
          <Section
            icon="🗺️"
            title="High-Level Roadmap"
            items={roadmapLines}
          />
        </div>
      )}
    </div>
  );
}
