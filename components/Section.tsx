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

  //const clean = items.map((i) => i.replace(/^[\-\d\.\s]+/, "").trim());

  return (
    <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-6 mb-6 space-y-4">
      <div className="flex items-center space-x-3">
        <span className="text-3xl">{icon}</span>
        <h2 className="text-3xl font-semibold text-white">{title}</h2>
      </div>
      <ul className="list-disc list-inside space-y-2 text-white">
        {items.map((item, i) => (
          <li key={i} className="text-lg leading-relaxed">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

