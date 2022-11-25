import { Play } from 'phosphor-react';
import { CTA, H1, H2, Picture, Main, Content } from './styles';

const Landing: React.FC = () => {
  return (
    <Content>
      <Main>
        <H1>
          SOUND <br />
          GLORY
        </H1>
        <H2>
          Simples rápido, fácil, bonito e <br />
          intuitivo, o seu player de música!
        </H2>
        <CTA>
          <Play size={32} color="#fff" />
        </CTA>
      </Main>
      <Picture>
        <source
          srcSet="/src/assets/images/logo-bg.png"
          media="(min-width: 768px)"
        />
        <source
          srcSet="/src/assets/images/logo-bg-mobile.svg"
          media="(max-width: 768px)"
        />
        <img src="/src/assets/images/logo-bg.png" />
      </Picture>
    </Content>
  );
};

export default Landing;
