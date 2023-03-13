import styled from "styled-components";

export const ControlsStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: var(--primaryGradient);
  padding: var(--p-8) var(--p-16);

  @media (max-width: 576px) {
    padding: var(--p-16);
  }

  svg {
    transition-duration: 0.1s;
    cursor: pointer;

    &:hover {
      transform: scale(1.3);
    }
  }
`;

export const Buttons = styled.div`
  position: relative;
  display: flex;
  gap: var(--g-8);
`;
