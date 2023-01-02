export interface Song {
  id: number;
  title: string;
  description: string;
  path: string;
  audio: HTMLAudioElement;
  isPlaying: boolean;
}
