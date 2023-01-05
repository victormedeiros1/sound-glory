import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { CaretRight, DotsThreeVertical } from "phosphor-react";
import "./styles.css";
import { Playlist } from "../../store/types/playlist";

export interface Props {
  playlists: Playlist[];
}

const Dropdown: React.FC<Props> = ({ playlists }) => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button className="IconButton" aria-label="Customise options">
          <DotsThreeVertical size={24} color="#a3a3a3" weight="light" />
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content className="dropdown-menu-content" sideOffset={5}>
          <DropdownMenu.Sub>
            <DropdownMenu.SubTrigger className="dropdown-menu-sub-trigger">
              Adicionar à playlist
              <div className="right-slot">
                <CaretRight size={14} />
              </div>
            </DropdownMenu.SubTrigger>
            <DropdownMenu.Portal>
              <DropdownMenu.SubContent
                className="dropdown-menu-sub-content"
                sideOffset={8}
                alignOffset={-8}
              >
                {playlists.map(({ id, name }) => (
                  <DropdownMenu.Item className="dropdown-menu-item" key={id}>
                    {name}
                  </DropdownMenu.Item>
                ))}
              </DropdownMenu.SubContent>
            </DropdownMenu.Portal>
          </DropdownMenu.Sub>

          <DropdownMenu.Separator className="dropdown-menu-separator" />

          <DropdownMenu.Arrow className="dropdown-menu-arrow" />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

export default Dropdown;
