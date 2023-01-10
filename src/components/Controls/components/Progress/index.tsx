import { useState, useEffect, useRef } from "react";
import {
  ProgressWrapper,
  SliderRange,
  SliderRoot,
  SliderThumb,
  SliderTrack,
} from "./styles";

interface Props {
  audio: HTMLAudioElement;
  isPlaying: boolean;
}

const Progress: React.FC<Props> = ({ audio, isPlaying }) => {
  const inputEl = useRef(null);
  const [currentTime, setCurrentTime] = useState(0);
  let duration = !Math.round(audio.duration) ? 0 : Math.round(audio.duration);

  const convertToTime = (seconds: number) => {
    const min = Math.floor(seconds / 60);
    const sec = Math.floor(seconds % 60);
    return `${min}:${sec < 10 ? "0" + sec : sec}`;
  };

  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setCurrentTime(Math.round(audio.currentTime));
        convertToTime(duration);
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [isPlaying]);

  const handleRange = (e: any) => {
    setTimeout(() => {
      setCurrentTime(e);
      audio.currentTime = e;
    }, 100);
  };

  return (
    <ProgressWrapper>
      <span>{convertToTime(currentTime)}</span>
      <SliderRoot
        className="SliderRoot"
        defaultValue={[currentTime]}
        min={0}
        max={duration}
        step={1}
        onValueCommit={handleRange}
        aria-label="Volume"
      >
        <SliderTrack className="SliderTrack">
          <SliderRange className="SliderRange" />
        </SliderTrack>
        <SliderThumb className="SliderThumb" />
      </SliderRoot>
      <span>{convertToTime(duration)}</span>
    </ProgressWrapper>
  );
};

export default Progress;
