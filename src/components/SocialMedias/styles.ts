import styled from "styled-components";

export const SocialMediasStyles = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--g-8);
  margin-top: var(--m-24);

  a svg:hover * {
    stroke: var(--primaryMain);
  }
`;
