import { useAppSelector } from "../../hooks/useAppSelector";
import Controls from "../Controls";
import Header from "./Header";
import Song from "./Song";
import { PlaylistStyles, Songs } from "./styles";
import { songs } from "../../helpers/songs";
import song from "../../store/ducks/song";

const Playlist: React.FC = () => {
  const playlists = useAppSelector((state) => state.playlists);
  const playlistSelected = playlists.find((playlist) => playlist.selected);
  console.log("PS |", playlistSelected);

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
            <h1>Não há músicas nessa playlist</h1>
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
