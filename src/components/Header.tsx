import React from 'react';

interface HeaderProps {
  name: string;
  title: string;
  imageUrl: string;
}

export const Header: React.FC<HeaderProps> = ({ name, title, imageUrl }) => {
  return (
    <header className="bg-linear-to-br from-indigo-600 to-violet-600 text-white p-8 flex flex-col md:flex-row items-center gap-6 border-0">
      <img src={imageUrl} alt={name} className="size-32 rounded-3xl border-6 border-white/20 object-cover" />
      <div>
        <h1 className="text-5xl m-0 font-extrabold leading-tight">{name}</h1>
        <p className="text-lg opacity-90 mt-2.5 m-0">{title}</p>
      </div>
    </header>
  );
};
