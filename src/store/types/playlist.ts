import { Action } from "redux";

export interface ISong {
  id: string;
  title: string;
  description: string;
  path: string;
}

interface Song {
  title: string;
  description: string;
  path: string;
}

export interface Playlist {
  id: string;
  name: string;
  songs?: Song[];
}

export interface IPLaylistTypes {
  ADD_PLAYLIST: string;
}

export interface AddPlaylistAction extends Action<string> {
  title: string;
}

export interface IPlaylistCreators {
  addPlaylist: (name: string) => AddPlaylistAction;
}
