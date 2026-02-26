import React, { useContext } from 'react';
import { GreetingContext } from '../context/CVContext';
import { Header } from '../components/Header';
import { ContactInfo } from '../components/ContactInfo';
import { SkillsList } from '../components/SkillsList';
import { AboutSection } from '../components/AboutSection';
import { ExperienceSection } from '../components/ExperienceSection';
import { EducationSection } from '../components/EducationSection';

export const MainPage = () => {
  const { name, greeting, imageUrl, title, email, phone, skills, experience, education, text1, text2 } = useContext(GreetingContext);

  return (
    <div className="max-w-6xl mx-auto my-5 bg-slate-50 font-sans text-left">
      <Header name={name} title={title} imageUrl={imageUrl} />

      <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8 p-8">
        <aside>
          <ContactInfo email={email} phone={phone} />
          <SkillsList skills={skills} />
        </aside>

        <main>
          <AboutSection greeting={greeting} text1={text1} text2={text2} />
          <ExperienceSection experience={experience} />
          <EducationSection education={education} />
        </main>
      </div>
    </div>
  );
};
 