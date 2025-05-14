// components/Section.tsx
import React from "react";

type SectionProps = {
  icon: React.ReactNode;      // now allow any node (emoji, svg, etc.)
  title: string;
  items?: string[];           // make items optional
};

export const Section: React.FC<SectionProps> = ({
  icon,
  title,
  items = [],                 // default to empty array
}) => {
  if (items.length === 0) {
    // if there's nothing to render, you can either return null
    // or still render the header with a "no data" message
    return null;
  }

  return (
    <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-6">
      <div className="flex items-center space-x-3 mb-4">
        <span className="text-2xl">{icon}</span>
        <h2 className="text-2xl font-semibold text-white">{title}</h2>
      </div>
      <ul className="list-disc list-inside space-y-2 text-white/90">
        {items.map((item, i) => (
          <li key={i} className="leading-relaxed text-lg">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

