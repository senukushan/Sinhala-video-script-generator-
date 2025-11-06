
import React from 'react';
import type { Scene } from '../types';
import { ClockIcon } from './icons/ClockIcon';
import { VideoIcon } from './icons/VideoIcon';
import { MicIcon } from './icons/MicIcon';
import { MusicIcon } from './icons/MusicIcon';

interface SceneCardProps {
  scene: Scene | any; // Use any for final scene flexibility
  isFinalScene?: boolean;
}

export const SceneCard: React.FC<SceneCardProps> = ({ scene, isFinalScene = false }) => {
  return (
    <div className="bg-slate-800/60 rounded-2xl overflow-hidden border border-slate-700 shadow-md transition-all duration-300 hover:shadow-cyan-500/20 hover:border-cyan-800">
      <div className="p-6 bg-slate-900/50 flex flex-col md:flex-row justify-between md:items-center gap-4">
        <h3 className="text-2xl font-bold text-white font-sinhala">
          {isFinalScene ? '' : <span className="text-cyan-400 mr-3">Scene {scene.sceneNumber}:</span>}
          {scene.title}
        </h3>
        <div className="flex items-center gap-2 text-cyan-300 bg-slate-700/50 px-3 py-1 rounded-full text-sm font-semibold">
          <ClockIcon />
          <span className="font-sinhala">{scene.duration}</span>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {scene.music_cue && (
             <div className="flex items-start gap-4 p-4 bg-slate-700/30 rounded-lg">
                <div className="flex-shrink-0 text-yellow-400 mt-1"> <MusicIcon /> </div>
                <div>
                  <h4 className="font-semibold text-yellow-400">Music Cue</h4>
                  <p className="text-gray-300 font-sinhala">{scene.music_cue}</p>
                </div>
              </div>
        )}
        {isFinalScene && scene.music && (
             <div className="flex items-start gap-4 p-4 bg-slate-700/30 rounded-lg">
                <div className="flex-shrink-0 text-yellow-400 mt-1"> <MusicIcon /> </div>
                <div>
                  <h4 className="font-semibold text-yellow-400">Music</h4>
                  <p className="text-gray-300 font-sinhala">{scene.music}</p>
                </div>
              </div>
        )}

        {/* Visuals */}
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 text-green-400 mt-1"><VideoIcon /></div>
          <div className="flex-grow">
            <h4 className="font-semibold text-green-400">Visuals</h4>
            <ul className="mt-2 space-y-3">
              {scene.visuals.map((visual: any, index: number) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="font-mono text-sm bg-slate-700 text-green-300 rounded px-2 py-0.5 mt-0.5">{visual.timestamp}</span>
                  <p className="text-gray-300 font-sinhala flex-1">{visual.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Voiceover */}
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 text-blue-400 mt-1"><MicIcon /></div>
          <div className="flex-grow">
            <h4 className="font-semibold text-blue-400">Voiceover</h4>
            <p className="mt-2 text-gray-200 font-sinhala italic bg-slate-900/40 p-4 rounded-lg border-l-4 border-blue-500">{scene.voiceover}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
