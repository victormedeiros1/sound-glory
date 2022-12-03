import { ISong } from '../../helpers/types';
import { Action } from 'redux';
export interface IPLaylistsTypes {
  ADD_SONG: string;
}

export type AddPlaylistsAction = Action<string>;

export interface IPlaylistsCreators {
  add: (song: ISong) => AddPlaylistsAction;
}
