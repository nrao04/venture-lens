// components/IdeaForm.tsx
import { useState } from "react";

export function IdeaForm({ onSubmit }: { onSubmit: (idea: string) => void }) {
  const [idea, setIdea] = useState("");
  return (
    <form
      className="space-y-5"
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(idea);
      }}
    >
      <textarea
        rows={4}
        className="
          w-full p-4
          rounded-xl 
          border-2 border-gray-200
          focus:border-primary focus:ring-primary/30
          transition 
          text-grayText placeholder-gray-400
        "
        placeholder="Describe your startup idea…"
        value={idea}
        onChange={(e) => setIdea(e.target.value)}
      />

      <button
        type="submit"
        className="
          w-full py-3 
          bg-primary text-white font-medium
          rounded-xl 
          hover:bg-primary/90
          transition
        "
      >
        Analyze →
      </button>
    </form>
  );
}