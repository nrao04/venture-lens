import { useState } from "react";

export function IdeaForm({ onSubmit }: { onSubmit: (idea: string) => void }) {
  const [idea, setIdea] = useState("");
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        onSubmit(idea);
      }}
      className="space-y-4"
    >
      <textarea
        rows={4}
        className="w-full p-4 rounded-xl border-2 border-gray-200 focus:border-primary transition"
        placeholder="Describe your startup idea…"
        value={idea}
        onChange={e => setIdea(e.target.value)}
      />
      <button
        type="submit"
        className="w-full py-3 bg-primary text-white font-semibold rounded-xl hover:opacity-90 transition"
      >
        Analyze &rarr;
      </button>
    </form>
  );
}