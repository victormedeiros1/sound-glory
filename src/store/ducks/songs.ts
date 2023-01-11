import { createSlice } from "@reduxjs/toolkit";
import { Song } from "../types/song";
import song1 from "/src/assets/audios/Nossa Toca - Não Temos Tempo.mp3";
import song2 from "/src/assets/audios/Hungria Hip Hop - Super Herói.mp3";
import song3 from "/src/assets/audios/Hayya Hayya (Better Together) - FIFA World Cup 2022.mp3";

export const songs: Song[] = [
  {
    id: 0,
    title: "Não Temos Tempo",
    description: "Nossa Toca",
    audio: new Audio(song1),
    isPlaying: false,
  },
  {
    id: 1,
    title: "Super Herói",
    description: "Hungria Hip Hop",
    audio: new Audio(song2),
    isPlaying: false,
  },
  {
    id: 2,
    title: "Hayya Hayya (Better Together) - FIFA World Cup 2022",
    description: "Trindad Cordona, Davido, Aisha, FIFA Sound",
    audio: new Audio(song3),
    isPlaying: false,
  },
];

const songsSlice = createSlice({
  name: "songs",
  initialState: songs,
  reducers: {
    listSongs: (state) => state,
  },
});

export default songsSlice.reducer;
