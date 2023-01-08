import { useState, useEffect } from "react";
import {
  Shuffle,
  SkipBack,
  Play,
  Pause,
  SkipForward,
  Repeat,
} from "phosphor-react";
import { ControlsStyles, Progress, ProgressBar } from "./styles";
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
  const [currentTime, setCurrentTime] = useState(0);
  const { id, isPlaying, audio } = useAppSelector(
    (state: RootState) => state.song
  );
  let duration = Math.round(audio.duration);
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

  useEffect(() => {
    console.log(isPlaying);
    if (isPlaying) {
      const interval = setInterval(() => {
        setCurrentTime(Math.round(audio.currentTime));
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [isPlaying]);
  // setTimeout(() => {
  //   clearInterval(interval);
  // }, 5000);

  return (
    <ControlsStyles>
      <Progress>
        {currentTime}
        <ProgressBar type="range" min={0} max={duration} />
        {duration}
      </Progress>

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
