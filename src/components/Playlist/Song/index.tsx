import React from "react";
import { Song as ISong } from "../../../types/song";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../../hooks/useAppSelector";
import {
  pauseSong,
  playSong,
  restartSong,
  setSong,
} from "../../../store/ducks/song";
import Actions from "./Actions";
import Bars from "../../Bars";
import {
  Count,
  Description,
  Duration,
  Infos,
  SongWrapper,
  Thumbnail,
  Title,
  SongData,
} from "./styles";
import { secondsToMinutes } from "../../../utils";
interface Props {
  song: ISong;
}

const Song: React.FC<Props> = ({ song }) => {
  const dispatch = useDispatch();
  const playlists = useAppSelector((state) => state.playlists);
  const { id, isPlaying } = useAppSelector((state) => state.song);

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
    <SongWrapper onClick={handleClick}>
      <SongData>
        <Count>{song.id + 1}</Count>
        <Thumbnail src="https://picsum.photos/48/48" />
        <Bars isActive={isPlaying && id === song.id} />
        <Infos>
          <Title>
            {window.screen.width < 576 && song.title.length > 24
              ? song.title.slice(0, 24) + "..."
              : song.title}
          </Title>
          <Description>
            {window.screen.width < 576 && song.description.length > 24
              ? song.description.slice(0, 24) + "..."
              : song.description}
          </Description>
        </Infos>
        <Duration>{secondsToMinutes(song.duration)}</Duration>
      </SongData>

      <Actions playlists={playlists} song={song} />
    </SongWrapper>
  );
};

export default Song;
