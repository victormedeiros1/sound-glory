import { createSlice } from "@reduxjs/toolkit";
import { Song } from "../types/song";
import song1 from "/src/assets/audios/Nossa Toca - Não Temos Tempo.mp3";
import { songs } from "./songs";

const initialState: Song = {
  id: 0,
  title: "Não Temos Tempo",
  description: "Nossa Toca",
  audio: new Audio(song1),
  isPlaying: false,
};

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
