import React from 'react';
import { useDispatch } from 'react-redux';
import { addPlaylist } from '../../store/ducks/playlist';
import {
  Pelicle,
  ModalStyles,
  Form,
  FormGroup,
  Label,
  Input,
  Submit,
  Title,
  Close,
} from './styles';

interface Props {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const Modal: React.FC<Props> = ({ open, setOpen }) => {
  const dispatch = useDispatch();

  const handleForm = (e: any) => {
    e.preventDefault();
    const name = e.target.elements.name.value;

    dispatch(addPlaylist(name));
  };

  return (
    <Pelicle open={open}>
      <ModalStyles>
        <Close onClick={() => setOpen(!open)} size={16} />
        <Title>Nova playlist</Title>
        <Form onSubmit={handleForm}>
          <FormGroup>
            <Label htmlFor="input-playlist-name">Nome</Label>
            <Input id="input-playlist-name" name="name" type="text" />
          </FormGroup>

          <Submit>CRIAR</Submit>
        </Form>
      </ModalStyles>
    </Pelicle>
  );
};

export default Modal;
