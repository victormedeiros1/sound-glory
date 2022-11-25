import { HeaderStyles, Thumbnail, Title } from './styles';

const Header: React.FC = () => {
  return (
    <HeaderStyles>
      <Thumbnail src="/src/assets/images/thumbnail.jpg" />
      <Title>GERAL</Title>
    </HeaderStyles>
  );
};

export default Header;
