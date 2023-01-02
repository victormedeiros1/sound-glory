import Controls from "../Controls";
import Header from "./Header";
import Song from "./Song";
import { PlaylistStyles, Songs } from "./styles";
import { useDispatch } from "react-redux";
import { Song as ISong } from "../../store/types/song";
import { setSong } from "../../store/ducks/song";
import { useState } from "react";

const Playlist: React.FC = () => {
  const songs = [
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

  const dispatch = useDispatch();

  return (
    <PlaylistStyles>
      <Header />

      <Songs>
        {songs.map((song) => (
          <li key={song.id}>
            <Song song={song} />
          </li>
        ))}
      </Songs>

      {/* <Controls /> */}
    </PlaylistStyles>
  );
};

export default Playlist;
