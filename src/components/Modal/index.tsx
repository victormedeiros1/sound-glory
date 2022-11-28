import React from 'react';
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
  return (
    <Pelicle open={open}>
      <ModalStyles>
        <Close onClick={() => setOpen(!open)} size={16} />
        <Title>Nova playlist</Title>
        <Form>
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
