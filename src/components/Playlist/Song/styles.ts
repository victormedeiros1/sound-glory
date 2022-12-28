import styled from "styled-components";

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
    border: 1px solid var(--dark-3);
  }
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

export const DropDown = styled.div`
  width: max-content;

  display: flex;
  flex-direction: column;

  background-color: var(--dark-3);
  color: var(--lightGray);
  list-style: none;

  position: absolute;
  right: 2.25rem;

  border-radius: 0.25rem;
  box-shadow: var(--shadow);
`;

export const Infos = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.span`
  color: var(--lightGray);
`;

export const Description = styled.span`
  font-size: var(--fs-12);
  color: var(--lightGray);
`;

export const SubMenuSection = styled.ul``;
export const SubMenuItem = styled.li`
  border-radius: 0.25rem;
  font-size: var(--fs-12);
  padding: 0.5rem;

  &:hover {
    background-color: var(--dark-2);
  }
`;
