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

  @media (max-width: 576px) {
    gap: var(--g-2);
  }

  div {
    width: 0.25rem;
    height: 0px;
    background-color: var(--primaryMain);

    @media (max-width: 576px) {
      width: 0.125rem;
    }

    &:nth-child(1) {
      height: 2rem;
      animation: ${(props) =>
        props.isActive && "animate 1.1s alternate ease infinite"};

      @media (max-width: 576px) {
        height: 1rem;
      }
    }
    &:nth-child(2) {
      height: 1.75rem;
      animation: ${(props) =>
        props.isActive && "animate 1.4s alternate ease-in infinite"};

      @media (max-width: 576px) {
        height: 0.875rem;
      }
    }
    &:nth-child(3) {
      height: 1.5rem;
      animation: ${(props) =>
        props.isActive && "animate 2s alternate ease-in-out infinite"};

      @media (max-width: 576px) {
        height: 0.75rem;
      }
    }
    &:nth-child(4) {
      height: 1.25rem;
      animation: ${(props) =>
        props.isActive && "animate 0.9s alternate infinite"};

      @media (max-width: 576px) {
        height: 0.625rem;
      }
    }
    &:nth-child(5) {
      height: 1rem;
      animation: ${(props) =>
        props.isActive && "animate 0.8s alternate ease infinite"};

      @media (max-width: 576px) {
        height: 0.5rem;
      }
    }

    @keyframes animate {
      50% {
        height: 0;
      }
      to {
        height: 100%;
      }
    }
  }
`;
