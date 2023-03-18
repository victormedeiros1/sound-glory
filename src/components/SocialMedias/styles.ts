import styled from "styled-components";

export const SocialMediasStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--g-8);
  margin-top: var(--m-24);

  a svg:hover * {
    stroke: var(--primaryMain);
  }
`;
