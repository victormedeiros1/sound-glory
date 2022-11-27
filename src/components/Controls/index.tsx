import {
  Shuffle,
  Rewind,
  Play,
  Pause,
  FastForward,
  Repeat,
} from 'phosphor-react';
import { useState } from 'react';
import { ControlsStyles } from './styles';

interface Props {
  isPlaying: boolean;
  setIsPlaying: (isPlaying: boolean) => void;
  songThatWasPlaying: HTMLAudioElement;
  setSongThatWasPlaying: (songThatWasPlaying: HTMLAudioElement) => void;
}

const Controls: React.FC<Props> = ({
  isPlaying,
  setIsPlaying,
  songThatWasPlaying,
}) => {
  const [timePaused, setTimePaused] = useState<number>(0);

  const pauseSong = () => {
    setIsPlaying(!isPlaying);
    songThatWasPlaying.pause();
    setTimePaused(songThatWasPlaying.currentTime);
  };

  const playSong = () => {
    setIsPlaying(!isPlaying);
    songThatWasPlaying.play();
    songThatWasPlaying.currentTime = timePaused;
  };

  return (
    <ControlsStyles>
      <Shuffle size={32} />
      <Rewind size={32} />
      {isPlaying ? (
        <Pause onClick={pauseSong} size={32} />
      ) : (
        <Play onClick={playSong} size={32} />
      )}

      <FastForward size={32} />
      <Repeat size={32} />
    </ControlsStyles>
  );
};

export default Controls;
