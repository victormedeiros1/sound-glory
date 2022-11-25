import styled from 'styled-components';

export const Nav = styled.nav`
  max-width: 12.5rem;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  box-shadow: var(--shadow);
  padding: var(--p-32);
`;

export const NavItem = styled.button`
  background-color: transparent;
  border: none;
  color: var(--lightGray);
  font-size: var(--fs-12);
  font-weight: 700;
  letter-spacing: 1px;

  :hover {
    color: var(--light);
  }
`;
