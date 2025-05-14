
// pages/index.tsx
import { useState } from "react";
import { Section } from "../components/Section";

type Analysis = {
  market: string[];
  competitors: string[];
  roadmap: string[];
};

export default function Home() {
  const [idea, setIdea] = useState("");
  const [data, setData] = useState<Analysis | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setData(null);

    try {
      const res = await fetch("/api/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ idea }),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || res.statusText);
      setData(json);
    } catch (e: any) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <h1 className="text-6xl font-extrabold text-white text-center mb-12 drop-shadow-lg">
      Venture Lens 🔍
      </h1>

      <form
        onSubmit={submit}
        className="backdrop-blur rounded-3xl border border-white/20 bg-white/10 shadow-xl p-8 mb-8 space-y-6"
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

      {data && (
        <div className="space-y-6">
          <Section icon="" title="Market Summary" items={data.market} />
          <Section
            icon=""
            title="Top Competitors"
            items={data.competitors}
          />
          <Section icon="" title="High-Level Roadmap" items={data.roadmap} />
        </div>
      )}
    </div>
  );
}