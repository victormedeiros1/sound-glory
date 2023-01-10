import { useState, useEffect, useRef } from "react";
import * as Slider from "@radix-ui/react-slider";
import "./styles.css";

interface Props {
  audio: HTMLAudioElement;
  isPlaying: boolean;
}

const ProgressBar: React.FC<Props> = ({ audio, isPlaying }) => {
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
    console.log("CHANGE");
    setTimeout(() => {
      setCurrentTime(e);
      audio.currentTime = e;
    }, 100);
  };

  return (
    <div className="progress-wrapper">
      <span className="current-time">{convertToTime(currentTime)}</span>
      <Slider.Root
        className="SliderRoot"
        defaultValue={[currentTime]}
        min={0}
        max={duration}
        step={1}
        onValueCommit={handleRange}
        aria-label="Volume"
      >
        <Slider.Track className="SliderTrack">
          <Slider.Range className="SliderRange" />
        </Slider.Track>
        <Slider.Thumb className="SliderThumb" />
      </Slider.Root>
      <span className="duration">{convertToTime(duration)}</span>
    </div>
  );
};

export default ProgressBar;
