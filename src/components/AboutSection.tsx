import React from 'react';

interface AboutSectionProps {
  greeting: string;
  summary: string;
  highlights: string;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ greeting, summary, highlights }) => {
  return (
    <section className="mb-8">
      <h2 className="text-slate-800 text-3xl mb-6 flex items-center after:content-[''] after:flex-1 after:h-0.5 after:bg-slate-100 after:ml-5 font-bold">About Me</h2>
      <div className="bg-white p-6 rounded-2xl shadow-md mb-6">
        <p><strong>{greeting}</strong></p>
        <p>{summary} {highlights}</p>
      </div>
    </section>
  );
};
