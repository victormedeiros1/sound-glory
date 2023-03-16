import { EmptyStyles, Image, Title } from "./styles";
import notFound from "/src/assets/images/404.svg";

const Empty = () => {
  return (
    <EmptyStyles>
      <Title>NÃO HÁ MÚSICAS NESSA PLAYLIST</Title>
      <Image src={notFound} alt="nada encontrado" />
    </EmptyStyles>
  );
};

export default Empty;
