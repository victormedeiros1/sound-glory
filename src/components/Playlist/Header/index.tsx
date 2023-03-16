import {
  Details,
  DetailsItem,
  HeaderStyles,
  Infos,
  Thumbnail,
  Title,
} from "./styles";
import { secondsToMinutes } from "../../../utils";
import { Circle } from "phosphor-react";

import thumbnail128x128 from "/src/assets/images/thumb-128x128.jpg";
import { Song } from "../../../types/song";

interface Props {
  name: string;
  songs: Song[];
}

const Header: React.FC<Props> = ({ name, songs }) => {
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
    </HeaderStyles>
  );
};

export default Header;
