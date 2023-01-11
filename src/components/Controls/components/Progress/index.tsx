import { useState, useEffect, useRef } from "react";
import {
  CurrentTime,
  Duration,
  ProgressWrapper,
  SliderRange,
  SliderRoot,
  SliderThumb,
  SliderTrack,
} from "./styles";
import { secondsToMinutes } from "../../../../utils/utils";
import { useDispatch } from "react-redux";
import {
  pauseSong,
  playSong,
  restartSong,
  setSong,
  setTime,
} from "../../../../store/ducks/song";
import { useAppSelector } from "../../../../hooks/useAppSelector";

interface Props {
  id: number;
  audio: HTMLAudioElement;
  isPlaying: boolean;
}

const Progress: React.FC<Props> = ({ id, audio }) => {
  const dispatch = useDispatch();
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const songs = useAppSelector((state) => state.songs);

  useEffect(() => {
    if (!audio.duration) {
      audio.onloadeddata = () => setDuration(audio.duration);
    } else {
      setDuration(audio.duration);
    }
  }, [audio]);

  audio.ontimeupdate = () => setCurrentTime(Math.round(audio.currentTime));
  audio.onended = () => {
    dispatch(pauseSong());
    dispatch(restartSong());

    id === songs.length - 1
      ? dispatch(setSong(songs[0]))
      : dispatch(setSong(songs[id + 1]));

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
