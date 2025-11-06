
import React from 'react';
import { VideoIcon } from './icons/VideoIcon';
import { MicIcon } from './icons/MicIcon';

export const WelcomeScreen: React.FC = () => {
  return (
    <div className="text-center p-8 bg-slate-800/50 rounded-2xl border border-dashed border-slate-600">
      <div className="flex justify-center items-center gap-4 text-cyan-400">
        <VideoIcon className="w-12 h-12" />
        <MicIcon className="w-12 h-12" />
      </div>
      <h2 className="mt-6 text-2xl font-bold text-white">Welcome to the Script Generator</h2>
      <p className="mt-2 max-w-2xl mx-auto text-gray-400">
        Enter a topic related to Sri Lankan history, culture, or landmarks above to generate a professional documentary-style video script.
      </p>
      <div className="mt-6 text-left max-w-md mx-auto bg-slate-900/50 p-4 rounded-lg">
        <h4 className="font-semibold text-white">Example Topics:</h4>
        <ul className="list-disc list-inside mt-2 text-gray-300 font-sinhala space-y-1">
          <li>දළදා මාලිගාව (Temple of the Tooth)</li>
          <li>සිංහල අලුත් අවුරුද්ද (Sinhala New Year)</li>
          <li>කොළඹ නගරය (City of Colombo)</li>
        </ul>
      </div>
    </div>
  );
};
