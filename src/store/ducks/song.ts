import { createSlice } from "@reduxjs/toolkit";
import { Song } from "../types/song";

const initialState: Song = {
  id: 0,
  title: "Não Temos Tempo",
  description: "Nossa Toca",
  path: "/src/assets/audios/Nossa Toca - Não Temos Tempo.mp3",
};

const songSlice = createSlice({
  name: "song",
  initialState,
  reducers: {
    setSong: (state, { payload }) => {
      return { ...state, ...payload };
    },
  },
});

export default songSlice.reducer;
export const { setSong } = songSlice.actions;
