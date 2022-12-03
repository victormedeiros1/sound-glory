import { IPlaylistsCreators, IPLaylistsTypes } from '../types/playlists';
import { createActions, createReducer } from 'reduxsauce';

export const { Types: PlaylistsTypes, Creators } = createActions<
  IPLaylistsTypes,
  IPlaylistsCreators
>({
  addSong: ['song'],
});

const INITIAL_STATE: any[] = [];

const add = (state = INITIAL_STATE, action: {}) => [...state, { ...action }];

export default createReducer(INITIAL_STATE, {
  [PlaylistsTypes.ADD_SONG]: add,
});
