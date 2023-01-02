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
  setCurrentSong: (path: HTMLAudioElement) => void;
}

const Song: React.FC<Props> = ({ song, setCurrentSong }) => {
  const playlists = useSelector((state: RootState) => state.playlists);

  return (
    <SongStyles onClick={() => setCurrentSong(new Audio(song.path))}>
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
