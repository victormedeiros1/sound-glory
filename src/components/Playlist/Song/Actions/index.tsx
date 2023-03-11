import { CaretRight, DotsThreeVertical } from "phosphor-react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { Playlist } from "../../../../types/playlist";
import {
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

  const addToPlaylist = () => {
    dispatch(addSongToPlaylist({ song }));
  };

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button aria-label="Customise options">
          <DotsThreeVertical size={24} color="#a3a3a3" weight="light" />
        </button>
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
                  <DropdownMenuItem onClick={addToPlaylist} key={id}>
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
