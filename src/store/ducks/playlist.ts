import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Song {
  title: string;
  description: string;
  path: string;
}

interface Playlist {
  name: string;
  songs?: Song[];
}

// interface IINITIAL_STATE {
//   playlists: Playlist[];
// }

const INITIAL_STATE: Playlist[] = [];

const slicePlaylists = createSlice({
  name: 'playlist',
  initialState: INITIAL_STATE,
  reducers: {
    addPlaylist(state, { payload }: PayloadAction<string>) {
      return [...state, { name: payload }];
    },
  },
});

export default slicePlaylists.reducer;
export const { addPlaylist } = slicePlaylists.actions;
export const usePlaylists = (state: any) => {
  return state.playlists as Playlist[];
};
