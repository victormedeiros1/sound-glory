import styled from "styled-components";

interface Props {
  navbarIsOpen: boolean;
}

export const Nav = styled.nav<Props>`
  position: relative;
  max-width: 12.5rem;
  z-index: 9999;
  min-height: 100vh;

  display: flex;
  flex-direction: row;

  background-color: var(--dark-1);
  box-shadow: var(--shadow);
  padding: var(--p-32);

  transition: 0.5s;

  @media (max-width: 1200px) {
    padding: var(--p-16);
    position: absolute;
    top: 0;
    left: ${(props) => (props.navbarIsOpen ? 0 : -9.5)}rem;
  }
`;

export const NavContent = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--g-8);
`;

export const H1 = styled.h1`
  position: absolute;
  top: -1000px;
  opacity: 0;
`;

export const NavItem = styled.label`
  max-width: 136px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: block;
  position: relative;
  background-color: transparent;
  align-items: center;
  border: none;
  color: var(--lightGray);
  font-size: var(--fs-12);
  font-weight: 700;
  text-align: center;
  letter-spacing: 1px;
  cursor: pointer;
  gap: var(--g-8);

  :hover {
    color: var(--light);
  }
  input {
    display: none;
  }

  :has(input:checked) {
    color: var(--light);
  }
`;

export const ToggleNav = styled.div<Props>`
  display: none;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: -0.5rem;
  transform: ${(props) =>
    props.navbarIsOpen ? "rotate(180deg)" : "rotate(0deg)"};
  transition: 0.5s;
  user-select: none;

  @media (max-width: 1200px) {
    display: initial;
  }
`;

export const NavArrow = styled.span`
  display: flex;
  align-items: center;
  height: 100%;
  cursor: pointer;
  user-select: none;
  border-radius: 1000px;
  background-color: var(--gray);

  &:hover {
    background-color: var(--lightGray);
  }
`;
