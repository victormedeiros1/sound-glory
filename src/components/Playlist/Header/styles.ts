import styled from "styled-components";

export const HeaderStyles = styled.header`
  display: flex;
  box-shadow: var(--shadow);
`;

export const Thumbnail = styled.img`
  max-width: 8rem;

  @media (max-width: 576px) {
    max-width: 6rem;
  }
`;

export const Title = styled.h1`
  text-shadow: var(--shadow);
  color: var(--primaryMain);
  font-size: var(--fs-48);
  font-weight: 900;
  margin-top: -0.9rem;
`;

export const Infos = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: var(--p-16);

  @media (max-width: 576px) {
    padding: var(--p-8);
  }
`;

export const Details = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  gap: var(--g-8);
`;

export const DetailsItem = styled.li`
  color: var(--primaryMain);
  font-size: var(--fs-14);
`;
