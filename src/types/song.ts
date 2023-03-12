export interface Song {
  id: string;
  title: string;
  description: string;
  audio: HTMLAudioElement;
  duration: number;
  isPlaying: boolean;
}
