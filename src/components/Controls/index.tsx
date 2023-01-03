import {
  Shuffle,
  Rewind,
  Play,
  Pause,
  FastForward,
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
      <Shuffle size={32} />
      <Rewind onClick={handlePreviousSong} size={32} />

      {isPlaying ? (
        <Pause onClick={() => dispatch(pauseSong())} size={32} />
      ) : (
        <Play onClick={() => dispatch(playSong())} size={32} />
      )}

      <FastForward onClick={handleNextSong} size={32} />
      <Repeat size={32} />
    </ControlsStyles>
  );
};

export default Controls;
