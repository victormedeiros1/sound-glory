import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addPlaylist } from "../../store/ducks/playlists";
import {
  Pelicle,
  ModalStyles,
  Form,
  FormGroup,
  Label,
  Input,
  Title,
  Close,
} from "./styles";
import Button from "../Button";

interface Props {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const Modal: React.FC<Props> = ({ open, setOpen }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState<string>("");

  const handleForm = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(addPlaylist(name));
    setOpen(false);
  };

  return (
    <Pelicle open={open}>
      <ModalStyles>
        <Close onClick={() => setOpen(!open)} size={16} />
        <Title>NOVA PLAYLIST</Title>
        <Form onSubmit={handleForm}>
          <FormGroup>
            <Label htmlFor="input-playlist-name">Nome</Label>
            <Input
              id="input-playlist-name"
              name="name"
              type="text"
              onChange={(e) => setName(e.target.value)}
            />
          </FormGroup>

          <Button>CRIAR</Button>
        </Form>
      </ModalStyles>
    </Pelicle>
  );
};

export default Modal;
