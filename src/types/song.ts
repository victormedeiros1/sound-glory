export interface Song {
  id: number;
  title: string;
  description: string;
  audio: HTMLAudioElement;
  duration: number;
  isPlaying: boolean;
}
