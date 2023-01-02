import { HeaderStyles, Thumbnail, Title } from "./styles";

const Header: React.FC = () => {
  return (
    <HeaderStyles>
      <Thumbnail src="https://picsum.photos/200/200" />
      <Title>COPA DO MUNDO DO CATAR</Title>
    </HeaderStyles>
  );
};

export default Header;
