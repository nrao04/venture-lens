// pages/results.tsx
import { useRouter } from "next/router";
import Link from "next/link";

export default function Results() {
  const { query } = useRouter();
  const idea = decodeURIComponent((query.idea as string) || "");
  const raw = decodeURIComponent((query.result as string) || "");

  // If API failed or no result, show a retry
  if (!raw) {
    return (
      <div className="
        min-h-screen flex items-center justify-center
        bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700
        p-6
      ">
        <div className="
          bg-[rgba(255,255,255,0.1)] backdrop-blur-lg
          border border-white/20 rounded-3xl
          p-8 text-center
          shadow-neon
        ">
          <p className="text-red-400 mb-6">Oops, something went wrong.</p>
          <Link
            href="/"
            className="inline-block px-6 py-2 bg-gradient-to-r from-primary to-accent text-white rounded-xl shadow-neon hover:from-indigo-600 hover:to-pink-600 transition"
          >
            ← Try Again
          </Link>
        </div>
      </div>
    );
  }

  // Split the LLM output into sections
  const [market, competitors, roadmap] = raw.split("\n\n");

  const Section = ({
    title,
    children,
  }: {
    title: string;
    children: React.ReactNode;
  }) => (
    <div className="
      bg-[rgba(255,255,255,0.1)] backdrop-blur-md
      border border-white/20 rounded-3xl
      p-6 mb-8
      shadow-neon
    ">
      <h3 className="text-2xl font-semibold text-white mb-3">{title}</h3>
      <div className="prose prose-white text-gray-200">
        {children}
      </div>
    </div>
  );

  return (
    <div className="
      min-h-screen flex flex-col items-center
      bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700
      p-6
    ">
      <div className="w-full max-w-3xl">
        <h1 className="text-5xl font-extrabold text-white mb-10 drop-shadow-lg">
          Insights for “{idea}”
        </h1>
        <Section title="Market Summary">
          {market.split("\n").map((line, i) => (
            <p key={i}>{line}</p>
          ))}
        </Section>
        <Section title="Top Competitors">
          {competitors.split("\n").map((line, i) => (
            <p key={i}>{line}</p>
          ))}
        </Section>
        <Section title="Roadmap">
          {roadmap.split("\n").map((line, i) => (
            <p key={i}>{line}</p>
          ))}
        </Section>
        <div className="text-center">
          <Link
            href="/"
            className="inline-block px-6 py-2 bg-gradient-to-r from-primary to-accent text-white rounded-xl shadow-neon hover:from-indigo-600 hover:to-pink-600 transition"
          >
            ← Analyze Another Idea
          </Link>
        </div>
      </div>
    </div>
  );
}