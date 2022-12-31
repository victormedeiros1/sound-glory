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
import { Song as ISong } from "../../../store/types/song";
interface Props {
  song: ISong;
  playSong: (song: ISong) => void;
}

const Song: React.FC<Props> = ({ song, playSong }) => {
  const playlists = useSelector((state: RootState) => state.playlists);

  return (
    <SongStyles onClick={() => playSong(song)}>
      <Count>{song.id + 1}</Count>
      <Thumbnail src="https://picsum.photos/48/48" />
      <Infos>
        <Title>{song.title}</Title>
        <Description>{song.description}</Description>
      </Infos>

      <Dropdown playlists={playlists} />
    </SongStyles>
  );
};

export default Song;
