import {
  Shuffle,
  Rewind,
  Play,
  Pause,
  FastForward,
  Repeat,
} from "phosphor-react";
import { useState } from "react";
import { ControlsStyles } from "./styles";

interface Props {
  currentSong: HTMLAudioElement;
}

const Controls: React.FC<Props> = ({ currentSong }) => {
  const [previousSong, setPreviousSong] = useState<HTMLAudioElement>(
    new Audio()
  );

  const [isPlaying, setIsPlaying] = useState(false);

  const play = () => {
    setIsPlaying(true);

    if (!previousSong) {
      currentSong.play();
      setPreviousSong(currentSong);
    } else {
      previousSong.pause();
      currentSong.play();
      setPreviousSong(currentSong);
    }
  };

  const pause = () => {
    setIsPlaying(false);
    currentSong.pause();
  };

  return (
    <ControlsStyles>
      <Shuffle size={32} />
      <Rewind size={32} />

      {isPlaying ? (
        <Pause onClick={pause} size={32} />
      ) : (
        <Play onClick={play} size={32} />
      )}

      <FastForward size={32} />
      <Repeat size={32} />
    </ControlsStyles>
  );
};

export default Controls;
