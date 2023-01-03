import styled from "styled-components";

export const ContainerStyles = styled.div`
  display: flex;
  gap: 1rem;

  background-color: var(--dark-1);
  width: 100%;
  height: 100vh;
  position: relative;
  padding: var(--p-16) var(--p-16) 0 var(--p-16);
  margin: 0 auto;

  @media (max-width: 1200px) {
    padding: var(--p-16) var(--p-16) 0 var(--p-48);
  }
`;
