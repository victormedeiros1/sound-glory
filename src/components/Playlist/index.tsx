import { useAppSelector } from "../../hooks/useAppSelector";
import Controls from "../Controls";
import Header from "./Header";
import Song from "./Song";
import { PlaylistStyles, Songs } from "./styles";
import { songs as allSongs } from "../../helpers/songs";
import Empty from "./Empty";

import { v4 as uuid } from "uuid";

const Playlist: React.FC = () => {
  const playlists = useAppSelector((state) => state.playlists);

  const playlistDefault = {
    id: uuid(),
    name: "HOME",
    songs: allSongs,
    selected: false,
  };

  const { id, name, songs, selected } =
    playlists.find((playlist) => playlist.selected) ?? playlistDefault;
  return (
    <PlaylistStyles>
      <Header name={name} songs={songs} playlistId={id} selected={selected} />
      <Songs>
        {songs.length > 0 ? (
          songs.map((song, index) => (
            <Song key={id + index} song={song} index={index} />
          ))
        ) : (
          <Empty />
        )}
      </Songs>
      <Controls />
    </PlaylistStyles>
  );
};

export default Playlist;
