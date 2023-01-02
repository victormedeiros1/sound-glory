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
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../hooks/useAppSelector";
import { RootState } from "../../store";
import { pauseSong, playSong } from "../../store/ducks/song";

const Controls: React.FC = () => {
  const dispatch = useDispatch();
  const { isPlaying } = useAppSelector((state: RootState) => state.song);

  return (
    <ControlsStyles>
      <Shuffle size={32} />
      <Rewind size={32} />

      {isPlaying ? (
        <Pause onClick={() => dispatch(pauseSong())} size={32} />
      ) : (
        <Play onClick={() => dispatch(playSong())} size={32} />
      )}

      <FastForward size={32} />
      <Repeat size={32} />
    </ControlsStyles>
  );
};

export default Controls;
