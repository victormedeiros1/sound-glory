import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";
import { Playlist } from "../../types/playlist";

const initialState: Playlist[] = [];

const playlistsSlice = createSlice({
  name: "playlist",
  initialState,
  reducers: {
    addPlaylist: (state, action) => {
      return [...state, { id: uuid(), name: action.payload }];
    },
  },
});

export default playlistsSlice.reducer;
export const { addPlaylist } = playlistsSlice.actions;
