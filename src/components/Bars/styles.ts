import styled from "styled-components";

interface Props {
  isActive: boolean;
}

export const BarsStyles = styled.div<Props>`
  display: flex;
  flex-direction: row;
  align-items: end;
  height: 2rem;
  gap: var(--g-4);

  div {
    width: 0.25rem;
    height: 0px;
    background-color: var(--primaryMain);

    &:nth-child(1) {
      height: 2rem;
      animation: ${(props) =>
        props.isActive && "animate 1.1s alternate ease infinite"};
    }
    &:nth-child(2) {
      height: 1.75rem;
      animation: ${(props) =>
        props.isActive && "animate 1.4s alternate ease-in infinite"};
    }
    &:nth-child(3) {
      height: 1.5rem;
      animation: ${(props) =>
        props.isActive && "animate 2s alternate ease-in-out infinite"};
    }
    &:nth-child(4) {
      height: 1.25rem;
      animation: ${(props) =>
        props.isActive && "animate 0.9s alternate infinite"};
    }
    &:nth-child(5) {
      height: 1rem;
      animation: ${(props) =>
        props.isActive && "animate 0.8s alternate ease infinite"};
    }

    @keyframes animate {
      50% {
        height: 0;
      }
      to {
        height: 2rem;
      }
    }
  }
`;
