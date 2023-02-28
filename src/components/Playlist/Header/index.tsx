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
  const songs = useAppSelector((state) => state.songs);
  const [totalDuration, setTotalDuration] = useState<number>(0);

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
      <Thumbnail src="https://picsum.photos/200/200" />
      <Infos>
        <Title>FOR LISTEN DURING THE BETA</Title>
        <Details>
          <DetailsItem>{songs.length} songs</DetailsItem>
          <Circle size={6} weight="fill" color="#a36238" />
          <DetailsItem>
            {secondsToMinutes(totalDuration)} de duração
          </DetailsItem>
        </Details>
      </Infos>
    </HeaderStyles>
  );
};

export default Header;
