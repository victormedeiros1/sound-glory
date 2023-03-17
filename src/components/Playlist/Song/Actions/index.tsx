import { CaretRight, DotsThreeVertical } from "phosphor-react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { Playlist } from "../../../../types/playlist";
import {
  DotsButton,
  DropdownMenuArrow,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  RightSlot,
} from "./styles";
import { useDispatch } from "react-redux";
import { addSongToPlaylist } from "../../../../store/ducks/playlists";
import { Song } from "../../../../types/song";

export interface Props {
  playlists: Playlist[];
  song: Song;
}

const Actions: React.FC<Props> = ({ playlists, song }) => {
  const dispatch = useDispatch();

  const addToPlaylist = (playlistId: string) => {
    dispatch(addSongToPlaylist({ playlistId, song }));
  };

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger disabled={playlists.length === 0} asChild>
        <DotsButton havePlaylist={playlists.length}>
          <DotsThreeVertical
            size={24}
            color="var(--lightGray)"
            weight="light"
          />
        </DotsButton>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenuContent sideOffset={5}>
          <DropdownMenu.Sub>
            <DropdownMenuSubTrigger>
              Add to playlist
              <RightSlot>
                <CaretRight size={14} />
              </RightSlot>
            </DropdownMenuSubTrigger>
            <DropdownMenu.Portal>
              <DropdownMenuSubContent sideOffset={8} alignOffset={-8}>
                {playlists.map(({ id, name }) => (
                  <DropdownMenuItem onClick={() => addToPlaylist(id)} key={id}>
                    {name}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuSubContent>
            </DropdownMenu.Portal>
          </DropdownMenu.Sub>
          <DropdownMenuArrow />
        </DropdownMenuContent>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

export default Actions;
