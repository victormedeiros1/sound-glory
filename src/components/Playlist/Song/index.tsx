import React from 'react';
import { Description, SongStyles, Title } from './styles';

interface Props {
  title: string;
  description: string;
}

const Song: React.FC<Props> = ({ title, description }) => {
  return (
    <SongStyles>
      <Title>{title}</Title>
      <Description>{description} </Description>
    </SongStyles>
  );
};

export default Song;
