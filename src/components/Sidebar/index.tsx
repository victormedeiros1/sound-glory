import { useState } from "react";
import { CaretRight, Circle } from "phosphor-react";
import { useAppSelector } from "../../hooks/useAppSelector";
import Divider from "../Divider";
import Logo from "../Logo";
import { Nav, NavArrow, NavContent, NavItem, ToggleNav } from "./styles";
import { useDispatch } from "react-redux";
import { setPlaylist } from "../../store/ducks/playlists";

interface Props {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const Sidebar: React.FC<Props> = ({ open, setOpen }) => {
  const dispatch = useDispatch();
  const { playlists } = useAppSelector((state) => state);
  const [navbarIsOpen, setNavbarIsOpen] = useState(false);

  const changePlaylist = (id: string) => {
    dispatch(setPlaylist(id));
  };

  const changeToAllSongs = () => {
    dispatch(setPlaylist(0));
  };

  return (
    <>
      <Nav navbarIsOpen={navbarIsOpen}>
        <NavContent>
          <Logo />
          <NavItem htmlFor="home-radio" onClick={changeToAllSongs}>
            HOME{" "}
            <input
              id="home-radio"
              defaultChecked
              type="radio"
              name="itemSelected"
            />
          </NavItem>
          <NavItem onClick={() => setOpen(!open)}>CREATE PLAYLIST</NavItem>
          <Divider />
          {playlists.map(({ id, name }) => (
            <NavItem htmlFor={id} onClick={() => changePlaylist(id)} key={id}>
              {name}
              <input id={id} type="radio" name="itemSelected" />
            </NavItem>
          ))}
        </NavContent>

        <ToggleNav navbarIsOpen={navbarIsOpen}>
          <NavArrow onClick={() => setNavbarIsOpen(!navbarIsOpen)}>
            <CaretRight size={16} color="var(--dark-1)" />
          </NavArrow>
        </ToggleNav>
      </Nav>
    </>
  );
};

export default Sidebar;
