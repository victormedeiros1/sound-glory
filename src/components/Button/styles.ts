import styled from "styled-components";

export const ButtonStyles = styled.button`
  background: none;
  border: 1px solid var(--primaryMain);
  border-radius: 0.25rem;
  font-size: var(--fs-12);
  font-weight: 700;
  color: var(--primaryMain);
  letter-spacing: 1px;
  padding: 0.75rem 1.375rem;

  &:hover {
    background-color: var(--primaryMain);
    color: var(--light);
  }
`;
