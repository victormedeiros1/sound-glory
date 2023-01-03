import styled from "styled-components";

export const HeaderStyles = styled.header`
  display: flex;
  gap: 2rem;
  box-shadow: var(--shadow);
`;

export const Thumbnail = styled.img`
  width: 100%;
  max-width: 200px;
  border-radius: 8px;

  @media (max-width: 1200px) {
    max-width: 180px;
  }

  @media (max-width: 992px) {
    max-width: 160px;
  }

  @media (max-width: 576px) {
    max-width: 100px;
  }
`;

export const Title = styled.h1`
  text-shadow: var(--shadow);
  color: var(--primaryMain);
  font-size: var(--fs-64);
  line-height: var(--lh-64);
  font-weight: 900;
  margin-top: var(--m-16);
  margin-bottom: var(--m-8);

  @media (max-width: 576px) {
    font-weight: 700;
  }
`;

export const Infos = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Details = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  gap: 0.5rem;
`;

export const DetailsItem = styled.li`
  color: var(--primaryMain);
  font-size: var(--fs-16);
`;
