import { Song } from "./song";

export interface Playlist {
  id: string;
  name: string;
  songs: Song[];
}
