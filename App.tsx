
import React, { useState, useCallback } from 'react';
import { Header } from './components/Header';
import { ScriptInput } from './components/ScriptInput';
import { ScriptDisplay } from './components/ScriptDisplay';
import { LoadingSpinner } from './components/LoadingSpinner';
import { ErrorDisplay } from './components/ErrorDisplay';
import { generateScript } from './services/geminiService';
import type { Script } from './types';
import { WelcomeScreen } from './components/WelcomeScreen';

const App: React.FC = () => {
  const [script, setScript] = useState<Script | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerateScript = useCallback(async (topic: string) => {
    if (!topic) {
      setError('Please enter a topic to generate a script.');
      return;
    }
    setIsLoading(true);
    setScript(null);
    setError(null);

    try {
      const generatedScript = await generateScript(topic);
      setScript(generatedScript);
    } catch (err) {
      console.error(err);
      setError(err instanceof Error ? err.message : 'An unknown error occurred.');
    } finally {
      setIsLoading(false);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 text-white">
      <Header />
      <main className="container mx-auto px-4 py-8 md:py-12">
        <ScriptInput onGenerate={handleGenerateScript} isLoading={isLoading} />
        
        <div className="mt-12">
          {isLoading && <LoadingSpinner />}
          {error && <ErrorDisplay message={error} />}
          {script && <ScriptDisplay script={script} />}
          {!isLoading && !error && !script && <WelcomeScreen />}
        </div>
      </main>
      <footer className="text-center py-6 text-gray-500 text-sm">
        <p>Powered by Google Gemini. Designed for creative storytelling.</p>
      </footer>
    </div>
  );
};

export default App;
