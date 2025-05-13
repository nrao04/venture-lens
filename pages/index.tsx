// pages/index.tsx
import { useState } from "react";

export default function Home() {
  const [idea, setIdea] = useState("");
  const [analysis, setAnalysis] = useState<string|null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string|null>(null);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setAnalysis(null);
    setError(null);
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

  return (
    <div className="w-full max-w-2xl">
      <h1 className="text-6xl font-extrabold text-white text-center mb-12 drop-shadow-lg">
        🚀 VentureLens
      </h1>

      <form
        onSubmit={submit}
        className="backdrop-blur rounded-3xl border border-white/20 bg-white/10 
                   shadow-xl p-8 mb-8 space-y-6"
      >
        <label className="block text-white font-semibold">
          Describe your startup idea
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
        <div className="backdrop-blur rounded-3xl border border-white/20 bg-white/10 
                        shadow-xl p-8 space-y-6 overflow-auto max-h-[60vh] text-white">
          <h2 className="text-3xl font-bold drop-shadow-sm">Analysis Result</h2>
          <pre className="whitespace-pre-wrap text-sm leading-relaxed">
            {analysis}
          </pre>
        </div>
      )}
    </div>
  );
}