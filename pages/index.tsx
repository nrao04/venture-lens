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

      if (!res.ok) {
        throw new Error(body.error || res.statusText);
      }

      setAnalysis(body.result);
    } catch (err: any) {
      console.error(err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
      <h1 className="text-5xl font-bold text-indigo-600 mb-8">🚀 VentureLens</h1>
      <form
        onSubmit={submit}
        className="w-full max-w-xl bg-white rounded-2xl shadow-lg p-8 space-y-4"
      >
        <textarea
          rows={4}
          className="w-full p-4 rounded-xl border-2 border-gray-200 focus:border-indigo-500 transition"
          placeholder="Describe your startup idea…"
          value={idea}
          onChange={(e) => setIdea(e.target.value)}
        />
        <button
          type="submit"
          disabled={loading || !idea.trim()}
          className="w-full py-3 bg-indigo-600 disabled:bg-indigo-300 text-white font-semibold rounded-xl hover:bg-indigo-700 transition"
        >
          {loading ? "Analyzing…" : "Analyze"}
        </button>
      </form>

      {error && (
        <div className="mt-6 text-red-600 font-medium">Error: {error}</div>
      )}

      {analysis && (
        <div className="mt-8 w-full max-w-xl bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-indigo-600 mb-4">
            Analysis Result
          </h2>
          <pre className="whitespace-pre-wrap text-gray-800">{analysis}</pre>
        </div>
      )}
    </div>
  );
}