// pages/index.tsx
import { useRouter } from "next/router";
import { IdeaForm } from "../components/IdeaForm";

export default function Home() {
  const router = useRouter();
  const analyze = async (idea: string) => {
    const res = await fetch("/api/analyze", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ idea }),
    });
    const { result } = await res.json();
    router.push({
      pathname: "/results",
      query: {
        idea: encodeURIComponent(idea),
        result: encodeURIComponent(result),
      },
    });
  };

  return (
    <div className="flex flex-col items-center justify-center py-24 px-4">
      <h1 className="text-6xl font-extrabold text-primary mb-12 drop-shadow-sm">
        🚀 VentureLens
      </h1>

      <div
        className="
          w-full max-w-xl
          bg-cardBg backdrop-blur-sm
          rounded-3xl shadow-glass
          border border-white/50
          p-8
        "
      >
        <p className="text-center text-grayText mb-6">
          Instant market snapshot, competitors & roadmap for your idea.
        </p>
        <IdeaForm onSubmit={analyze} />
      </div>
    </div>
  );
}