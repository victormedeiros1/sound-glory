export interface Song {
  id: number;
  title: string;
  description: string;
  audio: HTMLAudioElement;
  isPlaying: boolean;
}
