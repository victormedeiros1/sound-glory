import { useState } from "react";
import {
  Shuffle,
  SkipBack,
  Play,
  Pause,
  SkipForward,
  Repeat,
} from "phosphor-react";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../hooks/useAppSelector";
import {
  pauseSong,
  playSong,
  restartSong,
  setSong,
} from "../../store/ducks/song";
import Progress from "./Progress";
import Volume from "./Volume";
import { Buttons, ControlsStyles } from "./styles";
import { songs } from "../../helpers/songs";

const Controls: React.FC = () => {
  const dispatch = useDispatch();
  const [random, setRandom] = useState<boolean>(false);
  const [repeat, setRepeat] = useState<boolean>(false);

  const { song } = useAppSelector((state) => state);
  const songsIndexes = songs.map(({ id }) => id);
  const songIndex = songsIndexes.indexOf(song.id);

  const handleNextSong = () => {
    dispatch(pauseSong());
    dispatch(restartSong());
    if (songIndex === songs.length - 1) {
      dispatch(setSong(songs[0]));
    } else if (random) {
      const randomNumber = Math.floor(Math.random() * songs.length);
      dispatch(setSong(songs[randomNumber]));
    } else {
      dispatch(setSong(songs[songIndex + 1]));
    }

    dispatch(playSong());
  };

  const handlePreviousSong = () => {
    dispatch(pauseSong());
    dispatch(restartSong());
    dispatch(setSong(songs[songIndex - 1]));
    dispatch(playSong());
  };

  return (
    <ControlsStyles>
      <Buttons>
        <Shuffle
          size={24}
          color={random ? "var(--light)" : "var(--dark-1)"}
          onClick={() => setRandom(!random)}
        />
        <SkipBack
          size={24}
          color="var(--dark-1)"
          onClick={handlePreviousSong}
        />

        {song.isPlaying ? (
          <Pause
            size={24}
            color="var(--dark-1)"
            onClick={() => dispatch(pauseSong())}
          />
        ) : (
          <Play
            size={24}
            color="var(--dark-1)"
            onClick={() => dispatch(playSong())}
          />
        )}

        <SkipForward size={24} color="var(--dark-1)" onClick={handleNextSong} />
        <Repeat
          size={24}
          color={repeat ? "var(--light)" : "var(--dark-1)"}
          onClick={() => setRepeat(!repeat)}
        />
        <Volume audio={song.audio} isPlaying={song.isPlaying} />
      </Buttons>
      <Progress
        audio={song.audio}
        songIndex={songIndex}
        repeatIsOn={repeat}
        randomIsOn={random}
      />
    </ControlsStyles>
  );
};

export default Controls;
