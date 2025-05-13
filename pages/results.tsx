// pages/results.tsx
import { useRouter } from "next/router";
import Link from "next/link";

export default function Results() {
  const { query } = useRouter();
  const idea = decodeURIComponent(query.idea as string || "");
  const raw  = decodeURIComponent(query.result as string || "");
  const [market, competitors, roadmap] = raw.split("\n\n");    // split by blank line

  const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
    <div className="bg-white rounded-2xl shadow-lg p-6 mb-6 hover:shadow-xl transition">
      <h2 className="text-2xl font-semibold text-indigo-600 mb-2">{title}</h2>
      <div className="prose prose-indigo">{children}</div>
    </div>
  );

  return (
    <div className="max-w-3xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold text-indigo-600 mb-8">
        Insights for “{idea}”
      </h1>
      <Section title="Market Summary">{market}</Section>
      <Section title="Top Competitors">{competitors}</Section>
      <Section title="Roadmap">{roadmap}</Section>
      <Link href="/">
        <a className="inline-block mt-4 text-indigo-600 hover:underline">
          ← Analyze another idea
        </a>
      </Link>
    </div>
  );
}
