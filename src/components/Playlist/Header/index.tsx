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

const Header: React.FC = () => {
  const [totalTime, setTotalTime] = useState<number>(0);
  const songs = useAppSelector((state) => state.songs);
  const audios = songs.map(({ audio }) => audio);

  const sumTotalSongTime = () => {
    audios.forEach((audio) => {
      audio.onloadeddata = () =>
        setTotalTime(totalTime + Math.round(audio.duration));
    });
  };

  useEffect(() => {
    sumTotalSongTime();
  });

  return (
    <HeaderStyles>
      <Thumbnail src="https://picsum.photos/200/200" />
      <Infos>
        <Title>FOR LISTEN DURING THE BETA</Title>
        <Details>
          <DetailsItem>{songs.length} songs</DetailsItem>
          <Circle size={6} weight="fill" color="#a36238" />
          <DetailsItem>{secondsToMinutes(totalTime)} de duração</DetailsItem>
        </Details>
      </Infos>
    </HeaderStyles>
  );
};

export default Header;
