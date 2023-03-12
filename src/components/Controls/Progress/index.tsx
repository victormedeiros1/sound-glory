import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { secondsToMinutes } from "../../../utils";
import { useAppSelector } from "../../../hooks/useAppSelector";
import { playSong, setSong, setTime } from "../../../store/ducks/song";
import {
  CurrentTime,
  Duration,
  ProgressWrapper,
  SliderRange,
  SliderRoot,
  SliderThumb,
  SliderTrack,
} from "./styles";

interface Props {
  songIndex: number;
  audio: HTMLAudioElement;
}

const Progress: React.FC<Props> = ({ songIndex, audio }) => {
  const dispatch = useDispatch();
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const songs = useAppSelector((state) => state.songs);

  useEffect(() => {
    !audio.duration
      ? (audio.onloadeddata = () => setDuration(audio.duration))
      : setDuration(audio.duration);
  }, [audio]);

  audio.ontimeupdate = () => setCurrentTime(Math.round(audio.currentTime));
  audio.onended = () => {
    songIndex === songs.length - 1
      ? dispatch(setSong(songs[0]))
      : dispatch(setSong(songs[songIndex + 1]));

    dispatch(playSong());
    setDuration(audio.duration);
  };

  const handleRange = (e: any) => {
    setCurrentTime(e);
    dispatch(setTime(e));
  };

  return (
    <ProgressWrapper>
      <CurrentTime>{secondsToMinutes(currentTime)}</CurrentTime>
      <SliderRoot
        min={0}
        value={[currentTime]}
        max={duration}
        step={1}
        onValueChange={handleRange}
        aria-label="Song time"
      >
        <SliderTrack>
          <SliderRange />
        </SliderTrack>
        <SliderThumb />
      </SliderRoot>
      <Duration>{secondsToMinutes(duration)}</Duration>
    </ProgressWrapper>
  );
};

export default Progress;
