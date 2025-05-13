// pages/results.tsx
import { useRouter } from "next/router";
import Link from "next/link";

export default function Results() {
  const { query } = useRouter();
  const idea = decodeURIComponent((query.idea as string) || "");
  const raw = decodeURIComponent((query.result as string) || "");

  if (!raw) {
    return (
      <div className="text-center py-24">
        <p className="text-red-600 mb-4">Oops, something went wrong.</p>
        <Link href="/" className="text-primary hover:underline">
          ← Try again
        </Link>
      </div>
    );
  }

  const [market, competitors, roadmap] = raw.split("\n\n");
  const Section = ({ title, children }: any) => (
    <div className="bg-white rounded-2xl shadow-glass p-6 mb-8">
      <h2 className="text-2xl font-semibold text-primary mb-3">{title}</h2>
      <div className="prose prose-primary text-grayText">{children}</div>
    </div>
  );

  return (
    <div className="max-w-3xl mx-auto py-24 px-4">
      <h1 className="text-5xl font-extrabold text-primary mb-12">
        Insights for “{idea}”
      </h1>

      <Section title="Market Summary">{market}</Section>
      <Section title="Top Competitors">{competitors}</Section>
      <Section title="Roadmap">{roadmap}</Section>

      <Link href="/" className="inline-block text-primary hover:underline">
        ← Analyze another idea
      </Link>
    </div>
  );
}