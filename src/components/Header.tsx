import React from 'react';

interface HeaderProps {
  name: string;
  title: string;
  imageUrl?: string;
}

const resolveAssetUrl = (url: string): string => {
  if (url.startsWith("http") || url.startsWith("//")) {
    return url;
  }
  return import.meta.env.BASE_URL + url.replace(/^\//, "");
};

export const Header: React.FC<HeaderProps> = ({ name, title, imageUrl }) => {
  const image = resolveAssetUrl(imageUrl || "/placeholder-avatar.svg");
  return (
    <header className="relative bg-linear-to-br from-indigo-600 to-violet-600 text-white p-8 flex flex-col md:flex-row items-center gap-6 border-0">
      <img src={image} alt={name} className="size-32 rounded-3xl border-6 border-white/20 object-cover" />
      <div>
        <h1 className="text-5xl m-0 font-extrabold leading-tight">{name}</h1>
        <p className="text-lg opacity-90 mt-2.5 m-0">{title}</p>
      </div>
      <button
        onClick={() => window.print()}
        title="Print"
        className="absolute top-4 right-4 bg-white/20 hover:bg-white/40 text-white rounded-full p-2.5 shadow transition-colors print:hidden"
        aria-label="Print"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="6 9 6 2 18 2 18 9" />
          <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
          <rect x="6" y="14" width="12" height="8" />
        </svg>
      </button>
    </header>
  );
};

