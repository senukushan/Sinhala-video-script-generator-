
import React from 'react';
import type { Script, Scene } from '../types';
import { SceneCard } from './SceneCard';
import { MusicIcon } from './icons/MusicIcon';

interface ScriptDisplayProps {
  script: Script;
}

export const ScriptDisplay: React.FC<ScriptDisplayProps> = ({ script }) => {
  return (
    <div className="space-y-12">
      <div className="text-center p-8 bg-slate-800/50 rounded-2xl border border-slate-700 shadow-lg">
        <h2 className="text-3xl md:text-4xl font-bold font-sinhala text-cyan-300">{script.videoTitle}</h2>
      </div>

      <div className="bg-slate-800/40 rounded-xl p-6 border border-slate-700">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 text-yellow-400">
            <MusicIcon />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-yellow-400">Opening Music</h3>
            <p className="mt-1 text-gray-300 font-sinhala">{script.openingMusic}</p>
          </div>
        </div>
      </div>
      
      <div className="space-y-8">
        {script.scenes.map((scene: Scene) => (
          <SceneCard key={scene.sceneNumber} scene={scene} />
        ))}
         <SceneCard scene={script.finalScene} isFinalScene={true} />
      </div>

    </div>
  );
};
