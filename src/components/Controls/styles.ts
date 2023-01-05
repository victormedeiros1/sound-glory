import styled from "styled-components";

export const ControlsStyles = styled.div`
  display: flex;
  justify-content: center;
  gap: var(--g-8);
  background-image: var(--primaryGradient);
  padding: var(--p-32);

  @media (max-width: 576px) {
    padding: var(--p-16);
  }
`;
