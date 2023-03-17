import {
  Details,
  DetailsItem,
  HeaderStyles,
  Infos,
  Thumbnail,
  Title,
} from "./styles";
import { secondsToMinutes } from "../../../utils";
import { Circle, Trash } from "phosphor-react";

import thumbnail128x128 from "/src/assets/images/thumb-128x128.jpg";
import { Song } from "../../../types/song";
import Button from "../../Button";
import { useDispatch } from "react-redux";
import { deletePlaylist } from "../../../store/ducks/playlists";

interface Props {
  name: string;
  songs: Song[];
  playlistId: string;
}

const Header: React.FC<Props> = ({ playlistId, name, songs }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deletePlaylist(playlistId));
  };

  const sumAllDurations = () => {
    if (songs.length > 0) {
      const allDurations = songs.map(({ duration }) => duration);
      const allDurationsSummed = allDurations.reduce((total, i) => total + i);

      return allDurationsSummed;
    } else {
      return 0;
    }
  };

  return (
    <HeaderStyles>
      <Thumbnail src={thumbnail128x128} alt="Playlist thumbnail" />
      <Infos>
        <Title>{name}</Title>
        <Details>
          <DetailsItem>{songs.length} songs</DetailsItem>
          <Circle size={4} weight="fill" color="#a36238" />
          <DetailsItem>{secondsToMinutes(sumAllDurations(), true)}</DetailsItem>
        </Details>
      </Infos>
      <Button onClick={handleDelete}>
        <Trash size={16} />
      </Button>
    </HeaderStyles>
  );
};

export default Header;
