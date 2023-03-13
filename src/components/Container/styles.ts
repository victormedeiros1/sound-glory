import styled from "styled-components";

export const ContainerStyles = styled.div`
  display: flex;
  gap: var(--g-8);

  background-color: var(--dark-1);
  width: 100%;
  height: 100vh;
  height: calc(var(--resize-for-mobile, 1vh) * 100);
  position: relative;
  padding: var(--p-8) var(--p-8) 0 var(--p-8);
  margin: 0 auto;

  @media (max-width: 1200px) {
    padding: var(--p-8) var(--p-8) 0 var(--p-24);
  }
`;
