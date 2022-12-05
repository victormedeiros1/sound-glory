import styled from 'styled-components';

export const SongStyles = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  user-select: none;

  gap: 1rem;

  border-radius: 0.5rem;
  border: 1px solid var(--dark-1);

  cursor: pointer;
  padding: var(--p-16);

  &:hover {
    border: 1px solid #222;
  }
`;

export const Title = styled.span`
  color: var(--lightGray);
`;

export const Description = styled.span`
  font-size: var(--fs-12);
  color: var(--lightGray);
`;

export const Left = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

export const Right = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Actions = styled.ul`
  list-style: none;
  width: max-content;
  background-color: var(--dark-3);

  color: var(--lightGray);

  display: flex;
  flex-direction: column;

  position: absolute;
  left: 2rem;

  border-radius: 0.25rem;
  box-shadow: var(--shadow);

  li {
    border-radius: 0.25rem;
    font-size: var(--fs-12);
    padding: 0.5rem;
  }

  li:hover {
    background-color: var(--dark-2);
  }
`;
