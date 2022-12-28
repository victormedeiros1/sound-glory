import { useState } from "react";
import Controls from "../Controls";
import Header from "./Header";
import Song from "./Song";
import { PlaylistStyles, Songs } from "./styles";

const Playlist: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [songThatWasPlaying, setSongThatWasPlaying] =
    useState<HTMLAudioElement>(new Audio());

  const songs = [
    {
      id: 0,
      title: "Não Temos Tempo",
      description: "Nossa Toca",
      path: "/src/assets/audios/Nossa Toca - Não Temos Tempo.mp3",
    },
    {
      id: 1,
      title: "Super Herói",
      description: "Hungria Hip Hop",
      path: "/src/assets/audios/Hungria Hip Hop - Super Herói.mp3",
    },
    {
      id: 2,
      title: "Hayya Hayya (Better Together) - FIFA World Cup 2022",
      description: "Trindad Cordona, Davido, Aisha, FIFA Sound",
      path: "/src/assets/audios/Hayya Hayya (Better Together) - FIFA World Cup 2022.mp3",
    },
  ];
  const playSong = (path: string) => {
    if (!songThatWasPlaying) {
      const audio = new Audio(path);
      audio.play();
      setIsPlaying(true);

      setSongThatWasPlaying(audio);
    } else {
      songThatWasPlaying.pause();

      const audio = new Audio(path);
      audio.play();
      setIsPlaying(true);

      setSongThatWasPlaying(audio);
    }
  };

  return (
    <PlaylistStyles>
      <Header />

      <Songs>
        {songs.map(({ id, title, description, path }) => (
          <li key={id}>
            <Song
              title={title}
              description={description}
              path={path}
              playSong={playSong}
            />
          </li>
        ))}
      </Songs>

      <Controls
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        setSongThatWasPlaying={setSongThatWasPlaying}
        songThatWasPlaying={songThatWasPlaying}
      />
    </PlaylistStyles>
  );
};

export default Playlist;
