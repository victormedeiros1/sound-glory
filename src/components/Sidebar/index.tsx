import React from 'react';
import Divider from '../Divider';
import Logo from '../Logo';
import { Nav, NavItem } from './styles';

const Sidebar: React.FC = () => {
  return (
    <Nav>
      <Logo />
      <NavItem>HOME</NavItem>
      <NavItem>CREATE PLAYLIST</NavItem>
      <Divider />
      <NavItem>COPA DO MUNDO</NavItem>
      <NavItem>FORRÓZIN</NavItem>
    </Nav>
  );
};

export default Sidebar;
