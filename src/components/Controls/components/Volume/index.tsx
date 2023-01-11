import { useState } from "react";
import {
  VolumeWrapper,
  SliderRange,
  SliderRoot,
  SliderThumb,
  SliderTrack,
} from "./styles";

interface Props {
  audio: HTMLAudioElement;
  isPlaying: boolean;
}

const Volume: React.FC<Props> = ({ audio }) => {
  return (
    <VolumeWrapper>
      <SliderRoot
        min={0}
        max={100}
        defaultValue={[100]}
        step={1}
        onValueCommit={(e: any) => (audio.volume = e / 100)}
        aria-label="Volume"
      >
        <SliderTrack>
          <SliderRange />
        </SliderTrack>
        <SliderThumb />
      </SliderRoot>
    </VolumeWrapper>
  );
};

export default Volume;
