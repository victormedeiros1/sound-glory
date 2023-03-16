import { useDispatch } from "react-redux";
import { EmptyStyles, Image, Title } from "./styles";
import { setPlaylist } from "../../../store/ducks/playlists";
import notFound from "/src/assets/images/404.svg";
import Button from "../../Button";

const Empty = () => {
  const dispatch = useDispatch();
  const changeToAllSongs = () => {
    dispatch(setPlaylist(0));
  };

  return (
    <EmptyStyles>
      <Title>NÃO HÁ MÚSICAS NESSA PLAYLIST</Title>
      <Image src={notFound} alt="nada encontrado" />
      <Button onClick={changeToAllSongs}>ADICIONAR MÚSICAS</Button>
    </EmptyStyles>
  );
};

export default Empty;
