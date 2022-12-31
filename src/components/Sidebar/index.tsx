import { Circle } from "phosphor-react";
import Divider from "../Divider";
import Logo from "../Logo";
import { Nav, NavItem } from "./styles";
import { useAppSelector } from "../../hooks/useAppSelector";

interface Props {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const Sidebar: React.FC<Props> = ({ open, setOpen }) => {
  const { playlists } = useAppSelector((state) => state);

  const songs = [
    {
      id: 0,
      title: "Não Temos Tempo",
      description: "Nossa Toca",
      path: "/src/assets/audios/Nossa Toca - Não Temos Tempo.mp3",
    },
    {
      id: 1,
      title: "Super Herói",
      description: "Hungria Hip Hop",
      path: "/src/assets/audios/Hungria Hip Hop - Super Herói.mp3",
    },
    {
      id: 2,
      title: "Hayya Hayya (Better Together) - FIFA World Cup 2022",
      description: "Trindad Cordona, Davido, Aisha, FIFA Sound",
      path: "/src/assets/audios/Hayya Hayya (Better Together) - FIFA World Cup 2022.mp3",
    },
  ];

  return (
    <Nav>
      <Logo />
      <NavItem style={{ color: "#fff" }}>
        <Circle size={6} weight="fill" color="#fff" />
        HOME
        <Circle size={6} weight="fill" color="#fff" />
      </NavItem>
      <NavItem onClick={() => setOpen(!open)}>CREATE PLAYLIST</NavItem>
      <Divider />
      {playlists.map(({ id, name }) => (
        <NavItem key={id}>{name}</NavItem>
      ))}
    </Nav>
  );
};

export default Sidebar;
