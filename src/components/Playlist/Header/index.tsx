import { Circle } from "phosphor-react";
import {
  Details,
  DetailsItem,
  HeaderStyles,
  Infos,
  Thumbnail,
  Title,
} from "./styles";
import { useAppSelector } from "../../../hooks/useAppSelector";

const Header: React.FC = () => {
  const songs = useAppSelector((state) => state.songs);

  return (
    <HeaderStyles>
      <Thumbnail src="https://picsum.photos/200/200" />
      <Infos>
        <Title>FOR LISTEN DURING THE BETA</Title>
        <Details>
          <DetailsItem>{songs.length} songs</DetailsItem>
          {/* <Circle size={6} weight="fill" color="#a36238" /> */}
          {/* <DetailsItem>10min 15s</DetailsItem> */}
        </Details>
      </Infos>
    </HeaderStyles>
  );
};

export default Header;
