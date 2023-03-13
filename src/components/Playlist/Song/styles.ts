import styled from "styled-components";

export const SongWrapper = styled.div`
  display: flex;
`;

export const SongData = styled.div`
  display: flex;
  align-items: center;
  gap: var(--g-16);
  width: 100%;
  user-select: none;
  border-radius: 0.5rem;
  border: 1px solid var(--dark-1);
  cursor: pointer;
  padding: var(--p-8);
  padding-left: var(--p-12);

  &:hover {
    border: 1px solid var(--dark-3);
  }
`;

export const Infos = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.span`
  font-size: var(--fs-14);
  color: var(--lightGray);
`;

export const Description = styled.span`
  font-size: 11px;
  color: var(--lightGray);
`;

export const Index = styled.span`
  font-size: var(--fs-14);
  text-align: center;
  width: 1.4rem;
  color: var(--lightGray);
`;

export const Thumbnail = styled.img`
  width: 2rem;
  border: 1px solid var(--gray);
`;

export const Actions = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  border-radius: 0.25rem;
  border: 1px solid transparent;

  &:hover {
    border: 1px solid var(--dark-3);
  }
`;

export const Duration = styled.span`
  font-size: var(--fs-14);
  color: var(--lightGray);
`;
