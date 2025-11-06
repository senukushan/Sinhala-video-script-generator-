
import React, { useState } from 'react';

interface ScriptInputProps {
  onGenerate: (topic: string) => void;
  isLoading: boolean;
}

export const ScriptInput: React.FC<ScriptInputProps> = ({ onGenerate, isLoading }) => {
  const [topic, setTopic] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onGenerate(topic);
  };

  return (
    <div className="max-w-2xl mx-auto bg-slate-800/50 rounded-2xl p-6 md:p-8 shadow-2xl border border-slate-700">
      <form onSubmit={handleSubmit}>
        <label htmlFor="topic-input" className="block text-lg font-semibold text-cyan-300 mb-3">
          වීඩියෝව සඳහා මාතෘකාව ඇතුලත් කරන්න (Enter Topic for Video)
        </label>
        <div className="flex flex-col sm:flex-row gap-4">
          <input
            id="topic-input"
            type="text"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            placeholder="e.g., සීගිරිය (Sigiriya), පොළොන්නරුව (Polonnaruwa)"
            className="flex-grow bg-slate-900 border-2 border-slate-600 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all duration-300"
            disabled={isLoading}
          />
          <button
            type="submit"
            className="bg-cyan-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-cyan-500 disabled:bg-slate-600 disabled:cursor-not-allowed transition-all duration-300 shadow-lg hover:shadow-cyan-500/50 flex items-center justify-center"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Processing...
              </>
            ) : (
              'Generate Script'
            )}
          </button>
        </div>
      </form>
    </div>
  );
};
