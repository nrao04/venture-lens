// pages/results.tsx
import { useRouter } from "next/router";
import Link from "next/link";

export default function Results() {
  const { query } = useRouter();
  const idea = decodeURIComponent((query.idea as string) || "");
  const raw  = decodeURIComponent((query.result as string) || "");

  if (!raw) {
    return (
      <div className="text-center text-white">
        <p className="mb-4 text-xl">Oops, no data returned.</p>
        <Link href="/">
          <a className="underline text-secondary">Go back</a>
        </Link>
      </div>
    );
  }

  const [market, competitors, roadmap] = raw.split("\n\n");

  const Section = ({ title, children }: any) => (
    <section className="backdrop-blur rounded-3xl border border-white/20 bg-white/10 
                        shadow-xl p-6 mb-6 text-white">
      <h3 className="text-2xl font-bold mb-2 text-secondary">{title}</h3>
      <div className="prose prose-white">{children}</div>
    </section>
  );

  return (
    <div className="w-full max-w-2xl text-white">
      <h1 className="text-5xl font-extrabold text-center mb-12 drop-shadow-xl">
        Insights for “{idea}”
      </h1>

      <Section title="Market Summary">{market}</Section>
      <Section title="Top Competitors">{competitors}</Section>
      <Section title="Roadmap">{roadmap}</Section>

      <div className="text-center mt-8">
        <Link href="/">
          <a className="text-secondary underline">← Analyze another idea</a>
        </Link>
      </div>
    </div>
  );
}