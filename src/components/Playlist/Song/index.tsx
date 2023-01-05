import React from "react";
import {
  Count,
  Description,
  Infos,
  SongStyles,
  Thumbnail,
  Title,
} from "./styles";
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
import { useAppSelector } from "../../../hooks/useAppSelector";
import Bars from "../../Bars";
interface Props {
  song: ISong;
}

const Song: React.FC<Props> = ({ song }) => {
  const dispatch = useDispatch();
  const playlists = useAppSelector((state: RootState) => state.playlists);
  const { id, isPlaying } = useAppSelector((state: RootState) => state.song);

  const widthScreen = window.screen.width;

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
      {<Bars isActive={isPlaying && id === song.id} />}
      <Infos>
        <Title>
          {widthScreen < 576 && song.title.length > 24
            ? song.title.slice(0, 24) + "..."
            : song.title}
        </Title>
        <Description>
          {widthScreen < 576 && song.description.length > 24
            ? song.description.slice(0, 24) + "..."
            : song.description}
        </Description>
      </Infos>

      <Dropdown playlists={playlists} />
    </SongStyles>
  );
};

export default Song;
