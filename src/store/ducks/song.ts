import { createSlice } from "@reduxjs/toolkit";
import { Song } from "../../types/song";
import { songs } from "../../helpers/songs";

const initialState: Song = songs[0];

const songSlice = createSlice({
  name: "song",
  initialState,
  reducers: {
    setSong: (state, { payload }) => {
      return { ...state, ...payload };
    },
    playSong: (state) => {
      state.audio.play(), (state.isPlaying = true);
    },
    pauseSong: (state) => {
      state.audio.pause(), (state.isPlaying = false);
    },
    setTime: (state, { payload }) => {
      state.audio.currentTime = payload;
    },
    restartSong: (state) => {
      (state.audio.currentTime = 0), (state.isPlaying = true);
    },
  },
});

export default songSlice.reducer;
export const { setSong, playSong, pauseSong, setTime, restartSong } =
  songSlice.actions;
