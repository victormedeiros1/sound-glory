import {
  Shuffle,
  SkipBack,
  Play,
  Pause,
  SkipForward,
  Repeat,
} from "phosphor-react";
import { ControlsStyles } from "./styles";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../hooks/useAppSelector";
import { RootState } from "../../store";
import {
  nextSong,
  pauseSong,
  playSong,
  restartSong,
} from "../../store/ducks/song";

const Controls: React.FC = () => {
  const dispatch = useDispatch();
  const { id, isPlaying } = useAppSelector((state: RootState) => state.song);

  const songs = useAppSelector((state) => state.songs);

  const handleNextSong = () => {
    dispatch(pauseSong());
    dispatch(restartSong());
    dispatch(nextSong(songs[id + 1]));
    dispatch(playSong());
  };

  const handlePreviousSong = () => {
    dispatch(pauseSong());
    dispatch(restartSong());
    dispatch(nextSong(songs[id - 1]));
    dispatch(playSong());
  };

  return (
    <ControlsStyles>
      <Shuffle size={24} color="#111111" />
      <SkipBack size={24} color="#111111" onClick={handlePreviousSong} />

      {isPlaying ? (
        <Pause
          size={24}
          color="#111111"
          onClick={() => dispatch(pauseSong())}
        />
      ) : (
        <Play size={24} color="#111111" onClick={() => dispatch(playSong())} />
      )}

      <SkipForward size={24} color="#111111" onClick={handleNextSong} />
      <Repeat size={24} color="#111111" />
    </ControlsStyles>
  );
};

export default Controls;
