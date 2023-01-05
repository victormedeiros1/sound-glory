import { CaretRight, Circle } from "phosphor-react";
import Divider from "../Divider";
import Logo from "../Logo";
import { Nav, NavArrow, NavContent, NavItem, ToggleNav } from "./styles";
import { useAppSelector } from "../../hooks/useAppSelector";
import { useState } from "react";

interface Props {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const Sidebar: React.FC<Props> = ({ open, setOpen }) => {
  const { playlists } = useAppSelector((state) => state);
  const [navbarIsOpen, setNavbarIsOpen] = useState(false);

  return (
    <>
      <Nav navbarIsOpen={navbarIsOpen}>
        <NavContent>
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
        </NavContent>

        <ToggleNav navbarIsOpen={navbarIsOpen}>
          <NavArrow onClick={() => setNavbarIsOpen(!navbarIsOpen)}>
            <CaretRight size={16} color="#fff" />
          </NavArrow>
        </ToggleNav>
      </Nav>
    </>
  );
};

export default Sidebar;
