import styled from "styled-components";

export const PlaylistStyles = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: var(--g-16);

  @media (max-width: 576px) {
    gap: var(--g-8);
  }
`;

export const Songs = styled.ul`
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;

  border-radius: 0.5rem;
  box-shadow: var(--shadow);

  ::-webkit-scrollbar {
    width: 0.5rem;
  }

  ::-webkit-scrollbar-track {
    background: var(--lightgray);
  }

  ::-webkit-scrollbar-thumb {
    background-color: var(--gray);
    border-radius: 0.5rem;
  }
`;
