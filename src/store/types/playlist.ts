import { Action } from 'redux';

export interface ISong {
  id: number;
  title: string;
  description: string;
  path: string;
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
