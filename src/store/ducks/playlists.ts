import { createSlice } from "@reduxjs/toolkit";
import { Playlist } from "../../types/playlist";
import { v4 as uuid } from "uuid";
import { playSong } from "./song";

const initialState: Playlist[] = [
  {
    id: uuid(),
    name: "COPA DO MUNDO",
    songs: [],
  },
];

const playlistsSlice = createSlice({
  initialState,
  name: "playlists",
  reducers: {
    addPlaylist: (state, action) => {
      return [...state, { id: uuid(), name: action.payload, songs: [] }];
    },
    addSongToPlaylist: (state, action) => {
      const { playlistId, song } = action.payload;

      return (state = state.map((playlist) =>
        playlist.id === playlistId
          ? { ...playlist, songs: [...playlist.songs, song] }
          : playlist
      ));
    },
  },
});

export default playlistsSlice.reducer;
export const { addPlaylist, addSongToPlaylist } = playlistsSlice.actions;
