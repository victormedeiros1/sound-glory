import styled from 'styled-components';

export const Nav = styled.nav`
  max-width: 12.5rem;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  position: absolute;
  top: 0;
  left: 0;

  background-color: var(--dark);
  box-shadow: var(--shadow);
  padding: var(--p-32);
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
  gap: 0.5rem;

  :hover {
    color: var(--light);
  }
`;
