import { createSlice } from "@reduxjs/toolkit";
import { Playlist } from "../../types/playlist";
import { v4 as uuid } from "uuid";

const initialState: Playlist[] = [
  {
    id: uuid(),
    name: "COPA DO MUNDO",
    songs: [],
  },
  {
    id: uuid(),
    name: "POST MALONE",
    songs: [],
  },
];

const playlistsSlice = createSlice({
  initialState,
  name: "playlists",
  reducers: {
    addPlaylist: (state, action) => {
      return [...state, { id: uuid(), name: action.payload }];
    },
    addSongToPlaylist: (state, action) => {
      console.log("STATE |", state);
      console.log("ACTION |", action);
    },
  },
});

export default playlistsSlice.reducer;
export const { addPlaylist, addSongToPlaylist } = playlistsSlice.actions;
