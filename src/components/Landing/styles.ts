import styled from 'styled-components';

export const Content = styled.main`
  width: 100%;
  height: 100vh;
  max-width: 80vw;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;

  @media (max-width: 768px) {
    justify-content: center;
    flex-direction: column-reverse;
  }
`;

export const Main = styled.main`
  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const H1 = styled.h1`
  font-family: 'Barlow', sans-serif;
  font-weight: 300;
  color: var(--secondaryMain);
  font-size: 7vw;
  line-height: 7vw;
  text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  margin-bottom: var(--m-8);

  @media (max-width: 768px) {
    font-size: 20vw;
    line-height: 20vw;
  }
`;
export const H2 = styled.h2`
  font-family: 'Barlow', sans-serif;
  font-weight: 400;
  color: var(--light);
  font-size: 1.6vw;
  margin-bottom: var(--m-24);

  @media (max-width: 768px) {
    font-size: 5vw;
  }
`;
export const CTA = styled.button`
  width: 100%;
  max-width: 20vw;

  background-color: var(--secondaryMain);
  box-shadow: 0 8px 0 var(--secondaryDark);

  cursor: pointer;
  border: none;
  border-radius: 100px;
  padding: 1vw;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    max-width: 50vw;
    padding: 0.75rem;
  }

  &:active {
    transform: translateY(8px);
    box-shadow: 0 0 0 var(--secondaryDark);
  }
`;
export const Picture = styled.picture`
  source,
  img {
    width: 19vw;

    @media (max-width: 768px) {
      width: 40vw;
    }
  }
`;
