import {
  Shuffle,
  SkipBack,
  Play,
  Pause,
  SkipForward,
  Repeat,
} from "phosphor-react";
import { Buttons, ControlsStyles } from "./styles";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../hooks/useAppSelector";
import { RootState } from "../../store";
import {
  pauseSong,
  playSong,
  restartSong,
  setSong,
} from "../../store/ducks/song";
import Progress from "./components/Progress";
import Volume from "./components/Volume";

const Controls: React.FC = () => {
  const dispatch = useDispatch();

  const { id, isPlaying, audio } = useAppSelector(
    (state: RootState) => state.song
  );
  const songs = useAppSelector((state) => state.songs);

  const handleNextSong = () => {
    dispatch(pauseSong());
    dispatch(restartSong());
    id === songs.length - 1
      ? dispatch(setSong(songs[0]))
      : dispatch(setSong(songs[id + 1]));

    dispatch(playSong());
  };

  const handlePreviousSong = () => {
    dispatch(pauseSong());
    dispatch(restartSong());
    dispatch(setSong(songs[id - 1]));
    dispatch(playSong());
  };

  return (
    <ControlsStyles>
      <Progress id={id} audio={audio} isPlaying={isPlaying} />

      <Buttons>
        <Shuffle size={24} color="#111111" />
        <SkipBack size={24} color="#111111" onClick={handlePreviousSong} />

        {isPlaying ? (
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
        <Volume audio={audio} isPlaying={isPlaying} />
      </Buttons>
    </ControlsStyles>
  );
};

export default Controls;
