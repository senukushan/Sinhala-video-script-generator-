
import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="bg-gray-900/50 backdrop-blur-sm sticky top-0 z-10 border-b border-slate-700">
      <div className="container mx-auto px-4 py-4 flex items-center justify-center">
        <h1 className="text-2xl md:text-3xl font-bold text-center tracking-tight">
          <span className="font-sinhala">සිංහල වීඩියෝ පිටපත් රචකය</span>
          <span className="block text-sm md:text-base text-cyan-400 font-semibold tracking-wider mt-1">
            Sinhala Video Script Generator
          </span>
        </h1>
      </div>
    </header>
  );
};
