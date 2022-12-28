import React from "react";
import { Description, Infos, SongStyles, Title } from "./styles";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import Dropdown from "../../Dropdown";

interface Props {
  title: string;
  description: string;
  path: string;
  playSong: (path: string) => void;
}

const Song: React.FC<Props> = ({ title, description, path, playSong }) => {
  const playlists = useSelector((state: RootState) => state.playlists);

  return (
    <SongStyles>
      <Infos onClick={() => playSong(path)}>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </Infos>

      <Dropdown playlists={playlists} />
    </SongStyles>
  );
};

export default Song;
