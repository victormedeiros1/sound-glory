import { Song } from "../types/song";
import { v4 as uuid } from "uuid";
import song1 from "/src/assets/audios/Post Malone - A Thousand Bad Times.mp3";
import song2 from "/src/assets/audios/Post Malone - Waiting For Never.mp3";
import song3 from "/src/assets/audios/Post Malone - Wasting Angels.mp3";
import song4 from "/src/assets/audios/Social Distortion - Story of My Life.mp3";
import song5 from "/src/assets/audios/Heart - Barracuda.mp3";
import song6 from "/src/assets/audios/The Rolling Stones - Paint It, Black.mp3";
import song7 from "/src/assets/audios/Orange Stick - I Found Peace.mp3";
import song8 from "/src/assets/audios/Pedros - Ventos de Netuno.mp3";
import song9 from "/src/assets/audios/Breno Miranda - Sede Pra Te Ver.mp3";
import song10 from "/src/assets/audios/Dr. Peacock - Trip to Valhalla.mp3";

export const songs: Song[] = [
  {
    id: uuid(),
    title: "A Thousand Bad Times",
    description: "Post Malone",
    audio: new Audio(song1),
    duration: 222,
    isPlaying: false,
  },
  {
    id: uuid(),
    title: "Waiting For Never",
    description: "Post Malone",
    audio: new Audio(song2),
    duration: 197,
    isPlaying: false,
  },
  {
    id: uuid(),
    title: "Wasting Angels",
    description: "Post Malone",
    audio: new Audio(song3),
    duration: 243,
    isPlaying: false,
  },
  {
    id: uuid(),
    title: "Story of My Life",
    description: "Social Distortion",
    audio: new Audio(song4),
    duration: 285,
    isPlaying: false,
  },
  {
    id: uuid(),
    title: "Barracuda",
    description: "Heart",
    audio: new Audio(song5),
    duration: 263,
    isPlaying: false,
  },
  {
    id: uuid(),
    title: "Paint It, Black",
    description: "The Rolling Stones",
    audio: new Audio(song6),
    duration: 226,
    isPlaying: false,
  },
  {
    id: uuid(),
    title: "I Found Peace",
    description: "Orange Stick",
    audio: new Audio(song7),
    duration: 118,
    isPlaying: false,
  },
  {
    id: uuid(),
    title: "Ventos de Netuno",
    description: "Pedros",
    audio: new Audio(song8),
    duration: 188,
    isPlaying: false,
  },
  {
    id: uuid(),
    title: "Sede Pra Te Ver",
    description: "Breno Miranda",
    audio: new Audio(song9),
    duration: 190,
    isPlaying: false,
  },
  {
    id: uuid(),
    title: "Trip to Valhalla",
    description: "Dr. Peacock",
    audio: new Audio(song10),
    duration: 213,
    isPlaying: false,
  },
];
