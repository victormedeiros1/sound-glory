import { Shuffle, Rewind, Play, FastForward, Repeat } from 'phosphor-react';
import { ControlsStyles } from './styles';

const Controls: React.FC = () => {
  return (
    <ControlsStyles>
      <Shuffle size={32} />
      <Rewind size={32} />
      <Play size={32} />
      <FastForward size={32} />
      <Repeat size={32} />
    </ControlsStyles>
  );
};

export default Controls;
