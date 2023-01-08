import styled from "styled-components";

export const ControlsStyles = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  gap: var(--g-8);
  background-image: var(--primaryGradient);
  padding: var(--p-32);

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

export const Progress = styled.div`
  display: flex;
  gap: var(--g-16);
  padding: 0 var(--p-8);

  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
`;

export const ProgressBar = styled.input`
  width: 100%;
`;
