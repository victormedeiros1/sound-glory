import { createSlice } from "@reduxjs/toolkit";
import { Song } from "../types/song";

const initialState: Song = {
  id: 0,
  title: "Não Temos Tempo",
  description: "Nossa Toca",
  path: "/src/assets/audios/Nossa Toca - Não Temos Tempo.mp3",
  audio: new Audio("/src/assets/audios/Nossa Toca - Não Temos Tempo.mp3"),
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
    restartSong: (state) => {
      (state.audio.currentTime = 0), (state.isPlaying = true);
    },
  },
});

export default songSlice.reducer;
export const { setSong, playSong, pauseSong, restartSong } = songSlice.actions;
