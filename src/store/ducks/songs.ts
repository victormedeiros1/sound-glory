import { createSlice } from "@reduxjs/toolkit";
import { Song } from "../types/song";

const initialState: Song[] = [
  {
    id: 0,
    title: "Não Temos Tempo",
    description: "Nossa Toca",
    path: "/src/assets/audios/Nossa Toca - Não Temos Tempo.mp3",
    audio: new Audio("/src/assets/audios/Nossa Toca - Não Temos Tempo.mp3"),
    isPlaying: false,
  },
  {
    id: 1,
    title: "Super Herói",
    description: "Hungria Hip Hop",
    path: "/src/assets/audios/Hungria Hip Hop - Super Herói.mp3",
    audio: new Audio("/src/assets/audios/Hungria Hip Hop - Super Herói.mp3"),
    isPlaying: false,
  },
  {
    id: 2,
    title: "Hayya Hayya (Better Together) - FIFA World Cup 2022",
    description: "Trindad Cordona, Davido, Aisha, FIFA Sound",
    path: "/src/assets/audios/Hayya Hayya (Better Together) - FIFA World Cup 2022.mp3",
    audio: new Audio(
      "/src/assets/audios/Hayya Hayya (Better Together) - FIFA World Cup 2022.mp3"
    ),
    isPlaying: false,
  },
];

const songsSlice = createSlice({
  name: "songs",
  initialState,
  reducers: {
    listSongs: (state) => state,
  },
});

export default songsSlice.reducer;
