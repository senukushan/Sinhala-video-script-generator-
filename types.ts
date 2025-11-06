
export interface VisualDetail {
  timestamp: string;
  description: string;
}

export interface Scene {
  sceneNumber: number;
  title: string;
  duration: string;
  visuals: VisualDetail[];
  voiceover: string;
  music_cue?: string;
}

export interface Script {
  videoTitle: string;
  openingMusic: string;
  scenes: Scene[];
  finalScene: {
    title: string;
    duration: string;
    music: string;
    visuals: VisualDetail[];
    voiceover: string;
  }
}
