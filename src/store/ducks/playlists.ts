import { createSlice } from "@reduxjs/toolkit";
import { Playlist } from "../../types/playlist";
import { v4 as uuid } from "uuid";

const initialState: Playlist[] = [];

const playlistsSlice = createSlice({
  initialState,
  name: "playlists",
  reducers: {
    setPlaylist: (state, action) =>
      state.map((playlist) => ({
        ...playlist,
        selected: action.payload === playlist.id,
      })),
    addPlaylist: (state, action) => {
      return [
        ...state,
        { id: uuid(), name: action.payload, songs: [], selected: false },
      ];
    },
    deletePlaylist: (state, action) => {
      return (state = state.filter(
        (playlist) => playlist.id !== action.payload
      ));
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
export const { addPlaylist, deletePlaylist, addSongToPlaylist, setPlaylist } =
  playlistsSlice.actions;
