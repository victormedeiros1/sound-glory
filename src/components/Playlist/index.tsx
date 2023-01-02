import { useAppSelector } from "../../hooks/useAppSelector";
import Controls from "../Controls";
import Header from "./Header";
import Song from "./Song";
import { PlaylistStyles, Songs } from "./styles";

const Playlist: React.FC = () => {
  const songs2 = [
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
  const songs = useAppSelector((state) => state.songs);

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

      <Controls />
    </PlaylistStyles>
  );
};

export default Playlist;
