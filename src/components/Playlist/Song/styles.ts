import styled from 'styled-components';

export const SongStyles = styled.li`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  border-radius: 0.5rem;
  border: 1px solid var(--dark);

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
  color: var(--lightGray);
`;
