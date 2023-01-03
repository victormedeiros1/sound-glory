import { Circle } from "phosphor-react";
import {
  Details,
  DetailsItem,
  HeaderStyles,
  Infos,
  Thumbnail,
  Title,
} from "./styles";

const Header: React.FC = () => {
  return (
    <HeaderStyles>
      <Thumbnail src="https://picsum.photos/200/200" />
      <Infos>
        <Title>PRA OUVIR NO BETA</Title>
        <Details>
          <DetailsItem>3 músicas</DetailsItem>
          <Circle size={6} weight="fill" color="#a36238" />
          <DetailsItem>10min 15s</DetailsItem>
        </Details>
      </Infos>
    </HeaderStyles>
  );
};

export default Header;
