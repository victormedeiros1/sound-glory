import styled from 'styled-components';

export const HeaderStyles = styled.header`
  display: flex;
  align-items: center;
  gap: 1rem;
  box-shadow: var(--shadow);
`;

export const Thumbnail = styled.img`
  width: 100%;
  max-width: 200px;
  border-radius: 8px;
`;

export const Title = styled.h1`
  text-shadow: var(--shadow);
  color: var(--primaryMain);
  font-size: var(--fs-128);
  line-height: var(--lh-128);
  font-weight: 900;
  margin-bottom: var(--m-16);
`;
