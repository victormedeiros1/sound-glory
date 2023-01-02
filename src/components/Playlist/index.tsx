import { useAppSelector } from "../../hooks/useAppSelector";
import Controls from "../Controls";
import Header from "./Header";
import Song from "./Song";
import { PlaylistStyles, Songs } from "./styles";

const Playlist: React.FC = () => {
  const songs = useAppSelector((state) => state.songs);

  return (
    <PlaylistStyles>
      <Header />

      <Songs>
        {songs.map((song) => (
          <li key={song.id}>
            <Song song={song} />
          </li>
        ))}
      </Songs>

      <Controls />
    </PlaylistStyles>
  );
};

export default Playlist;
