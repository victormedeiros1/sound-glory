import Controls from '../Controls';
import Header from './Header';
import Song from './Song';
import { PlaylistStyles, Songs } from './styles';

const Playlist: React.FC = () => {
  return (
    <PlaylistStyles>
      <Header />

      <Songs>
        <Song title="Não Temos Tempo" description="Nossa Toca" />
        <Song title="Não Temos Tempo" description="Nossa Toca" />
        <Song title="Não Temos Tempo" description="Nossa Toca" />
        <Song title="Não Temos Tempo" description="Nossa Toca" />
        <Song title="Não Temos Tempo" description="Nossa Toca" />
        <Song title="Não Temos Tempo" description="Nossa Toca" />
        <Song title="Não Temos Tempo" description="Nossa Toca" />
        <Song title="Não Temos Tempo" description="Nossa Toca" />
        <Song title="Não Temos Tempo" description="Nossa Toca" />
        <Song title="Não Temos Tempo" description="Nossa Toca" />
        <Song title="Não Temos Tempo" description="Nossa Toca" />
      </Songs>

      <Controls />
    </PlaylistStyles>
  );
};

export default Playlist;
