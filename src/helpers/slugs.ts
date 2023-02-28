import { Song } from "../types/song";
import song1 from "/src/assets/audios/Nossa Toca - Não Temos Tempo.mp3";
import song2 from "/src/assets/audios/Hungria Hip Hop - Super Herói.mp3";
import song3 from "/src/assets/audios/Hayya Hayya (Better Together) - FIFA World Cup 2022.mp3";
import song4 from "/src/assets/audios/Lowz - Libertina.mp3";
import song5 from "/src/assets/audios/Dani Black - A Vida É Cheia Dessas Coisas.mp3";

export const songs: Song[] = [
  {
    id: 0,
    title: "Não Temos Tempo",
    description: "Nossa Toca",
    audio: new Audio(song1),
    duration: 363,
    isPlaying: false,
  },
  {
    id: 1,
    title: "Super Herói",
    description: "Hungria Hip Hop",
    audio: new Audio(song2),
    duration: 202,
    isPlaying: false,
  },
  {
    id: 2,
    title: "Hayya Hayya (Better Together) - FIFA World Cup 2022",
    description: "Trindad Cordona, Davido, Aisha, FIFA Sound",
    audio: new Audio(song3),
    duration: 216,
    isPlaying: false,
  },
  {
    id: 3,
    title: "Libertina",
    description: "Lowz",
    audio: new Audio(song4),
    duration: 190,
    isPlaying: false,
  },
  {
    id: 4,
    title: "A vida é cheia dessas coisas",
    description: "Dani Black",
    audio: new Audio(song5),
    duration: 227,
    isPlaying: false,
  },
];
