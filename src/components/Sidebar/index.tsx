import { Circle } from 'phosphor-react';
import Divider from '../Divider';
import Logo from '../Logo';
import { Nav, NavItem } from './styles';

interface Props {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const Sidebar: React.FC<Props> = ({ open, setOpen }) => {
  return (
    <Nav>
      <Logo />
      <NavItem style={{ color: '#fff' }}>
        <Circle size={6} weight="fill" color="#fff" />
        HOME
        <Circle size={6} weight="fill" color="#fff" />
      </NavItem>
      <NavItem onClick={() => setOpen(!open)}>CREATE PLAYLIST</NavItem>
      <Divider />
      {/* <NavItem>COPA DO MUNDO</NavItem>
      <NavItem>FORRÓZIN</NavItem> */}
    </Nav>
  );
};

export default Sidebar;
