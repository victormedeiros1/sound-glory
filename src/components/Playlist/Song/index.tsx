import React from "react";
import {
  Count,
  Description,
  Infos,
  SongStyles,
  Thumbnail,
  Title,
} from "./styles";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import Dropdown from "../../Dropdown";

interface Props {
  id: number;
  title: string;
  description: string;
  path: string;
  playSong: (path: string) => void;
}

const Song: React.FC<Props> = ({ id, title, description, path, playSong }) => {
  const playlists = useSelector((state: RootState) => state.playlists);

  return (
    <SongStyles>
      <Count>{id + 1}</Count>
      <Thumbnail src="https://picsum.photos/48/48" />
      <Infos onClick={() => playSong(path)}>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </Infos>

      <Dropdown playlists={playlists} />
    </SongStyles>
  );
};

export default Song;
