import styled from "styled-components";

interface Props {
  navbarIsOpen: boolean;
}

export const Nav = styled.nav<Props>`
  position: relative;
  max-width: 12.5rem;
  width: 100%;
  min-height: 100vh;

  display: flex;
  flex-direction: row;

  background-color: var(--dark-1);
  box-shadow: var(--shadow);
  padding: var(--p-32);

  transition: 0.5s;

  @media (max-width: 1200px) {
    position: absolute;
    left: ${(props) => (props.navbarIsOpen ? 0 : -10.5)}rem;
  }
`;

export const NavContent = styled.ul`
  display: flex;
  flex-direction: column;
  gap: var(--g-8);
`;

export const NavItem = styled.button`
  display: flex;
  background-color: transparent;
  align-items: center;
  justify-content: center;
  border: none;
  color: var(--lightGray);
  font-size: var(--fs-12);
  font-weight: 700;
  letter-spacing: 1px;
  gap: var(--g-8);

  :hover {
    color: var(--light);
  }
`;

export const ToggleNav = styled.div<Props>`
  display: none;
  position: absolute;
  top: 0;
  right: 0.25rem;
  height: 100%;
  transform: ${(props) =>
    props.navbarIsOpen ? "rotate(180deg)" : "rotate(0deg)"};
  transition: 0.5s;
  user-select: none;

  @media (max-width: 1200px) {
    display: initial;
  }
`;

export const NavArrow = styled.li`
  display: flex;
  align-items: center;
  height: 100%;
  cursor: pointer;
  user-select: none;

  svg {
    user-select: none;
  }
`;
