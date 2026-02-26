import React, { useContext } from 'react';
import { GreetingContext } from '../context/CVContext';
 
export const MainPage = () => {
  const { name, greeting, imageUrl, title, email, phone, skills, experience, education, text1, text2 } = useContext(GreetingContext);

  return (
    <div className="max-w-6xl mx-auto my-5 bg-slate-50 font-sans text-left">
      <header className="bg-linear-to-br from-indigo-600 to-violet-600 text-white p-8 flex flex-col md:flex-row items-center gap-6 border-0">
        <img src={imageUrl} alt={name} className="size-32 rounded-3xl border-6 border-white/20 object-cover" />
        <div>
          <h1 className="text-5xl m-0 font-extrabold leading-tight">{name}</h1>
          <p className="text-lg opacity-90 mt-2.5 m-0">{title}</p>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8 p-8">
        <aside>
          <div className="bg-white p-6 rounded-2xl shadow-md mb-6">
            <h3 className="mt-0 text-slate-800 text-xl border-b-2 border-slate-100 pb-2.5 mb-5 font-bold">Contact</h3>
            <ul className="list-none p-0">
              <li className="mb-3 text-sm text-slate-600">📧 {email}</li>
              <li className="mb-3 text-sm text-slate-600">📱 {phone}</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md mb-6">
            <h3 className="mt-0 text-slate-800 text-xl border-b-2 border-slate-100 pb-2.5 mb-5 font-bold">Skills</h3>
            <div className="flex flex-wrap gap-2.5">
              {skills.map((skill, index) => (
                <span key={index} className="bg-indigo-50 text-indigo-600 px-3.5 py-1.5 rounded-full text-sm font-semibold">{skill}</span>
              ))}
            </div>
          </div>
        </aside>

        <main>
          <section className="mb-8">
            <h2 className="text-slate-800 text-3xl mb-6 flex items-center after:content-[''] after:flex-1 after:h-0.5 after:bg-slate-100 after:ml-5 font-bold">About Me</h2>
            <div className="bg-white p-6 rounded-2xl shadow-md mb-6">
              <p><strong>{greeting}</strong></p>
              <p>{text1} {text2}</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-slate-800 text-3xl mb-6 flex items-center after:content-[''] after:flex-1 after:h-0.5 after:bg-slate-100 after:ml-5 font-bold">Experience</h2>
            {experience.map((exp, index) => (
              <div key={index} className="relative pl-8 mb-8 border-l-2 border-slate-200 before:content-[''] before:absolute before:-left-1.75 before:top-0 before:size-3 before:rounded-full before:bg-violet-600 before:border-2 before:border-white">
                <div className="mb-2.5">
                  <h4 className="m-0 text-xl text-slate-800 font-bold">{exp.role}</h4>
                  <span className="text-sm text-violet-600 font-semibold">{exp.period}</span>
                </div>
                <div className="text-slate-500 mb-2.5">{exp.company}</div>
                <p>{exp.description}</p>
              </div>
            ))}
          </section>

          <section className="mb-8">
            <h2 className="text-slate-800 text-3xl mb-6 flex items-center after:content-[''] after:flex-1 after:h-0.5 after:bg-slate-100 after:ml-5 font-bold">Education</h2>
            {education.map((edu, index) => (
              <div key={index} className="relative pl-8 mb-8 border-l-2 border-slate-200 before:content-[''] before:absolute before:-left-1.75 before:top-0 before:size-3 before:rounded-full before:bg-violet-600 before:border-2 before:border-white">
                <div className="mb-2.5">
                  <h4 className="m-0 text-xl text-slate-800 font-bold">{edu.degree}</h4>
                  <span className="text-sm text-violet-600 font-semibold">{edu.year}</span>
                </div>
                <div className="text-slate-500">{edu.school}</div>
              </div>
            ))}
          </section>
        </main>
      </div>
    </div>
  );
};
 