import { useRouter } from "next/router";
import { IdeaForm } from "../components/IdeaForm";

export default function Home() {
  const router = useRouter();

  const analyze = async (idea: string) => {
    const res = await fetch("/api/analyze", {      // call API route
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ idea }),
    });
    const { result } = await res.json();           // extract response
    router.push({                                  // navigate to /results
      pathname: "/results",
      query: {
        idea: encodeURIComponent(idea),
        result: encodeURIComponent(result),
      },
    });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
      <h1 className="text-5xl font-bold text-indigo-600 mb-8">
        🚀 VentureLens
      </h1>
      <div className="w-full max-w-xl bg-white rounded-2xl shadow-lg p-8">
        <p className="text-center text-gray-700 mb-4">
          Instant market snapshot, competitors & roadmap for your idea.
        </p>
        <IdeaForm onSubmit={analyze} />             {/* wire form */}
      </div>
    </div>
  );
}