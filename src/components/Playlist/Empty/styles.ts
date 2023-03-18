import styled from "styled-components";

export const EmptyStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: var(--g-24);
  padding: var(--p-24);
  margin: auto;
`;

export const Title = styled.h2`
  color: var(--primaryMain);
  font-size: var(--fs-48);
  font-weight: 900;

  @media (max-width: 576px) {
    font-size: var(--fs-32);
  }
`;

export const Image = styled.img`
  width: 100%;
  max-width: 20.375rem;
`;
