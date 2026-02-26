import React, { useContext } from 'react';
import { GreetingContext } from '../context/CVContext';
import { Header } from '../components/Header';
import { ContactInfo } from '../components/ContactInfo';
import { SkillsList } from '../components/SkillsList';
import { AboutSection } from '../components/AboutSection';
import { ExperienceSection } from '../components/ExperienceSection';
import { EducationSection } from '../components/EducationSection';

export const MainPage = () => {
  const { name, greeting, imageUrl, title, email, phone, skills, experience, education, summary, highlights } = useContext(GreetingContext);

  return (
    <div className="max-w-6xl mx-auto bg-slate-50 font-sans text-left">
      <Header name={name} title={title} imageUrl={imageUrl} />

      <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8 p-8">
        <aside>
          <ContactInfo email={email} phone={phone} />
          <SkillsList skills={skills} />
        </aside>

        <main>
          <AboutSection greeting={greeting} summary={summary} highlights={highlights} />
          <ExperienceSection experience={experience} />
          <EducationSection education={education} />
        </main>
      </div>
    </div>
  );
};
 