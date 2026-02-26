import React from 'react';

interface SkillsListProps {
  skills: string[];
}

export const SkillsList: React.FC<SkillsListProps> = ({ skills }) => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-md mb-6">
      <h3 className="mt-0 text-slate-800 text-xl border-b-2 border-slate-100 pb-2.5 mb-5 font-bold">Skills</h3>
      <div className="flex flex-wrap gap-2.5">
        {skills.map((skill, index) => (
          <span key={index} className="bg-indigo-50 text-indigo-600 px-3.5 py-1.5 rounded-full text-sm font-semibold">{skill}</span>
        ))}
      </div>
    </div>
  );
};
