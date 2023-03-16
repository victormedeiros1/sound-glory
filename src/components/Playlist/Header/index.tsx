import { useEffect, useState } from "react";
import { useAppSelector } from "../../../hooks/useAppSelector";
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

const Header: React.FC = () => {
  const songs = useAppSelector((state) => state.songs);
  const [totalDuration, setTotalDuration] = useState<number>(0);
  const playlists = useAppSelector((state) => state.playlists);
  const playlistSelected = playlists.find((playlist) => playlist.selected);

  const sumAllDurations = () => {
    const allDurations = songs.map(({ duration }) => duration);
    const allDurationsSummed = allDurations.reduce((total, i) => total + i);

    setTotalDuration(allDurationsSummed);
  };

  useEffect(() => {
    sumAllDurations();
  }, []);

  return (
    <HeaderStyles>
      <Thumbnail src={thumbnail128x128} alt="Playlist thumbnail" />
      <Infos>
        <Title>{playlistSelected ? playlistSelected.name : "HOME"}</Title>
        <Details>
          <DetailsItem>{songs.length} songs</DetailsItem>
          <Circle size={4} weight="fill" color="#a36238" />
          <DetailsItem>{secondsToMinutes(totalDuration, true)}</DetailsItem>
        </Details>
      </Infos>
    </HeaderStyles>
  );
};

export default Header;
