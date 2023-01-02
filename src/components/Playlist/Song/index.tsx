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
import {
  pauseSong,
  playSong,
  restartSong,
  setSong,
} from "../../../store/ducks/song";
import { useDispatch } from "react-redux";
interface Props {
  song: ISong;
}

const Song: React.FC<Props> = ({ song }) => {
  const dispatch = useDispatch();
  const playlists = useSelector((state: RootState) => state.playlists);
  const { id, isPlaying, audio } = useSelector(
    (state: RootState) => state.song
  );

  const handleClick = () => {
    if (isPlaying) {
      if (id === song.id) {
        dispatch(pauseSong());
      } else {
        dispatch(pauseSong());
        dispatch(restartSong());
        dispatch(setSong(song));
        dispatch(playSong());
      }
    } else {
      dispatch(setSong(song));
      dispatch(playSong());
    }
  };

  return (
    <SongStyles onClick={handleClick}>
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
