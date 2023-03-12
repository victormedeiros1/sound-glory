import { useAppSelector } from "../../hooks/useAppSelector";
import Controls from "../Controls";
import Header from "./Header";
import Song from "./Song";
import { PlaylistStyles, Songs } from "./styles";
import { songs } from "../../helpers/songs";

const Playlist: React.FC = () => {
  const playlists = useAppSelector((state) => state.playlists);
  const playlistSelected = playlists.filter((playlist) => playlist.selected);

  return (
    <PlaylistStyles>
      <Header />

      <Songs>
        {playlists.length > 0
          ? playlists.map(({ selected }) =>
              selected === true ? (
                playlistSelected[0].songs.length > 0 ? (
                  playlistSelected[0].songs.map((song, index) => (
                    <Song key={song.id} song={song} index={index} />
                  ))
                ) : (
                  <h2>Não há músicas</h2>
                )
              ) : (
                songs.map((song, index) => (
                  <Song key={song.id} song={song} index={index} />
                ))
              )
            )
          : songs.map((song, index) => (
              <Song key={song.id} song={song} index={index} />
            ))}
      </Songs>
      <Controls />
    </PlaylistStyles>
  );
};

export default Playlist;
