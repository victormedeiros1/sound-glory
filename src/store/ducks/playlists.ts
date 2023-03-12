import { createSlice } from "@reduxjs/toolkit";
import { Playlist } from "../../types/playlist";
import { v4 as uuid } from "uuid";
import { songs } from "../../helpers/slugs";

const initialState: Playlist[] = [
  {
    id: uuid(),
    name: "EXPERIMENTE",
    songs,
    selected: true,
  },
];

const playlistsSlice = createSlice({
  initialState,
  name: "playlists",
  reducers: {
    setPlaylist: (state, action) => {
      return state.map((playlist) => {
        return { ...playlist, selected: playlist.id === action.payload };
      });
    },
    addPlaylist: (state, action) => {
      return [
        ...state,
        { id: uuid(), name: action.payload, songs: [], selected: false },
      ];
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
export const { addPlaylist, addSongToPlaylist, setPlaylist } =
  playlistsSlice.actions;
