import Controls from "../Controls";
import Header from "./Header";
import Song from "./Song";
import { PlaylistStyles, Songs } from "./styles";
import { useDispatch } from "react-redux";
import { Song as ISong } from "../../store/types/song";
import { setSong } from "../../store/ducks/song";
import { useAppSelector } from "../../hooks/useAppSelector";
import { useState } from "react";
import { store } from "../../store";

const Playlist: React.FC = () => {
  const dispatch = useDispatch();
  const songs = [
    {
      id: 0,
      title: "Não Temos Tempo",
      description: "Nossa Toca",
      path: "/src/assets/audios/Nossa Toca - Não Temos Tempo.mp3",
      isPlaying: false,
    },
    {
      id: 1,
      title: "Super Herói",
      description: "Hungria Hip Hop",
      path: "/src/assets/audios/Hungria Hip Hop - Super Herói.mp3",
      isPlaying: false,
    },
    {
      id: 2,
      title: "Hayya Hayya (Better Together) - FIFA World Cup 2022",
      description: "Trindad Cordona, Davido, Aisha, FIFA Sound",
      path: "/src/assets/audios/Hayya Hayya (Better Together) - FIFA World Cup 2022.mp3",
      isPlaying: false,
    },
  ];
  const [previousSong, setPreviousSong] = useState<HTMLAudioElement>(
    new Audio()
  );

  const playSong = (songToPlay: ISong) => {
    const { id, title, description, path, isPlaying } = songToPlay;

    if (!previousSong) {
      const audio = new Audio(path);
      audio.play();

      setPreviousSong(audio);

      dispatch(setSong({ id, title, description, path, isPlaying: true }));
    } else {
      previousSong.pause();

      const audio = new Audio(path);
      audio.play();

      dispatch(setSong({ id, title, description, path, isPlaying: true }));
      setPreviousSong(audio);
      console.log(store.getState());
    }
  };

  return (
    <PlaylistStyles>
      <Header />

      <Songs>
        {songs.map((song) => (
          <li key={song.id}>
            <Song song={song} playSong={playSong} />
          </li>
        ))}
      </Songs>

      {/* <Controls
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        setPreviousSong={setPreviousSong}
        previousSong={previousSong}
      /> */}
    </PlaylistStyles>
  );
};

export default Playlist;
