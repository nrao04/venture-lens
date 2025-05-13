// pages/index.tsx
import { useState } from "react";

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
      if (!res.ok) throw new Error(body.error || res.statusText);
      setAnalysis(body.result);
    } catch (err: any) {
      console.error(err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="
      min-h-screen flex flex-col items-center justify-center
      bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700
      p-6
    ">
      {/* ─── Form Card ───────────────────────────────────────────────────── */}
      <div className="
        w-full max-w-2xl
        bg-[rgba(255,255,255,0.1)] backdrop-blur-lg
        border border-white/20 rounded-3xl
        p-8 mb-8
        shadow-neon
      ">
        <h1 className="text-6xl font-extrabold text-white mb-6 drop-shadow-lg">
          🚀 VentureLens
        </h1>
        <p className="mb-6 text-gray-300">
          Instant market snapshot, competitors & roadmap for your idea.
        </p>

        <form onSubmit={submit} className="space-y-4">
          <textarea
            rows={4}
            value={idea}
            onChange={(e) => setIdea(e.target.value)}
            placeholder="Describe your startup idea…"
            className="
              w-full p-4
              bg-white/20 text-white placeholder-gray-400
              border border-white/30 rounded-xl
              focus:outline-none focus:ring-2 focus:ring-primary
              transition
            "
          />
          <button
            type="submit"
            disabled={loading || !idea.trim()}
            className="
              w-full py-3 font-semibold
              bg-gradient-to-r from-primary to-accent
              disabled:from-gray-500 disabled:to-gray-500
              text-white rounded-xl
              hover:from-indigo-600 hover:to-pink-600
              transition shadow-neon
            "
          >
            {loading ? "Analyzing…" : "Analyze"}
          </button>
        </form>
      </div>

      {/* ─── Error Message ───────────────────────────────────────────────── */}
      {error && (
        <div className="text-red-400 font-medium mb-6">
          Error: {error}
        </div>
      )}

      {/* ─── Analysis Result ──────────────────────────────────────────────── */}
      {analysis && (
        <div className="
          w-full max-w-2xl
          bg-[rgba(255,255,255,0.1)] backdrop-blur-md
          border border-white/20 rounded-3xl
          p-8
          shadow-neon
        ">
          <h2 className="text-3xl font-semibold text-white mb-4">
            Analysis Result
          </h2>
          <pre className="whitespace-pre-wrap text-gray-200">
            {analysis}
          </pre>
        </div>
      )}
    </div>
  );
}