import {
  Shuffle,
  SkipBack,
  Play,
  Pause,
  SkipForward,
  Repeat,
} from "phosphor-react";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../hooks/useAppSelector";
import {
  pauseSong,
  playSong,
  restartSong,
  setSong,
} from "../../store/ducks/song";
import Progress from "./Progress";
import Volume from "./Volume";
import { Buttons, ControlsStyles } from "./styles";

const Controls: React.FC = () => {
  const dispatch = useDispatch();

  const { songs } = useAppSelector((state) => state);
  const { song } = useAppSelector((state) => state);
  const songIndex = songs.indexOf(song);

  const handleNextSong = () => {
    dispatch(pauseSong());
    dispatch(restartSong());
    songIndex === songs.length - 1
      ? dispatch(setSong(songs[0]))
      : dispatch(setSong(songs[songIndex + 1]));

    dispatch(playSong());
  };

  const handlePreviousSong = () => {
    dispatch(pauseSong());
    dispatch(restartSong());
    dispatch(setSong(songs[songIndex - 1]));
    dispatch(playSong());
  };

  return (
    <ControlsStyles>
      <Progress songIndex={songIndex} audio={song.audio} />

      <Buttons>
        <Shuffle size={24} color="#111111" />
        <SkipBack size={24} color="#111111" onClick={handlePreviousSong} />

        {song.isPlaying ? (
          <Pause
            size={24}
            color="#111111"
            onClick={() => dispatch(pauseSong())}
          />
        ) : (
          <Play
            size={24}
            color="#111111"
            onClick={() => dispatch(playSong())}
          />
        )}

        <SkipForward size={24} color="#111111" onClick={handleNextSong} />
        <Repeat size={24} color="#111111" />
        <Volume audio={song.audio} isPlaying={song.isPlaying} />
      </Buttons>
    </ControlsStyles>
  );
};

export default Controls;
