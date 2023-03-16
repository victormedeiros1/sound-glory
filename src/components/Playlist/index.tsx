import { useAppSelector } from "../../hooks/useAppSelector";
import Controls from "../Controls";
import Header from "./Header";
import Song from "./Song";
import { PlaylistStyles, Songs } from "./styles";
import { songs } from "../../helpers/songs";
import Empty from "./Empty";

import { v4 as uuid } from "uuid";

const Playlist: React.FC = () => {
  const playlists = useAppSelector((state) => state.playlists);

  const playlistDefault = {
    id: uuid(),
    name: "Home",
    songs,
    selected: true,
  };

  const playlistSelected =
    playlists.find((playlist) => playlist.selected) ?? playlistDefault;
  return (
    <PlaylistStyles>
      <Header name={playlistSelected.name} songs={playlistSelected.songs} />
      {playlistSelected.songs.length > 0 ? (
        playlistSelected.songs.map((song, index) => (
          <Song key={song.id} song={song} index={index} />
        ))
      ) : (
        <Empty />
      )}
    </PlaylistStyles>
  );
};

export default Playlist;
