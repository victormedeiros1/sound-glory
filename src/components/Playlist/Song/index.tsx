import { DotsThreeVertical } from 'phosphor-react';
import { useState } from 'react';
import { Actions, Description, Left, Right, SongStyles, Title } from './styles';

interface Props {
  title: string;
  description: string;
  path: string;
  playSong: (path: string) => void;
}

const Song: React.FC<Props> = ({ title, description, path, playSong }) => {
  const [isActionsOpen, setIsActionsOpen] = useState(false);

  return (
    <SongStyles>
      <Left>
        <DotsThreeVertical
          onClick={() => setIsActionsOpen(!isActionsOpen)}
          size={32}
          color="#a3a3a3"
          weight="light"
        />
        {isActionsOpen && (
          <Actions>
            <li>Copa do Mundo</li>
          </Actions>
        )}
      </Left>
      <Right onClick={() => playSong(path)}>
        <Title>{title}</Title>
        <Description>{description} </Description>
      </Right>
    </SongStyles>
  );
};

export default Song;
