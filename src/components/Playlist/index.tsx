import { useAppSelector } from "../../hooks/useAppSelector";
import Controls from "../Controls";
import Header from "./Header";
import Song from "./Song";
import { PlaylistStyles, Songs } from "./styles";
import { songs } from "../../helpers/songs";
import Empty from "./Empty";

const Playlist: React.FC = () => {
  const playlists = useAppSelector((state) => state.playlists);
  const playlistSelected = playlists.find((playlist) => playlist.selected);

  return (
    <PlaylistStyles>
      <Header />

      <Songs>
        {playlistSelected ? (
          playlistSelected.songs.length > 0 ? (
            playlistSelected.songs.map((song, index) => (
              <Song key={song.id} song={song} index={index} />
            ))
          ) : (
            <Empty />
          )
        ) : (
          songs.map((song, index) => (
            <Song key={song.id} song={song} index={index} />
          ))
        )}
      </Songs>
      <Controls />
    </PlaylistStyles>
  );
};

export default Playlist;
