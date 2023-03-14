import styled from "styled-components";
import { X } from "phosphor-react";

interface Props {
  open: boolean;
}

export const Pelicle = styled.div<Props>`
  display: ${(props) => (props.open ? "initial" : "none")};
  z-index: 10000;

  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  background-color: var(--transparent);
`;

export const ModalStyles = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;

  display: flex;
  flex-direction: column;
  gap: var(--g-4);
  transform: translate(-50%, -50%);
  background-color: var(--dark-1);
  box-shadow: var(--shadow);

  width: 100%;
  max-width: 25rem;
  border-radius: 0.5rem;

  padding: var(--p-32);
`;
export const Close = styled(X)`
  position: absolute;
  top: 1rem;
  right: 1rem;
  cursor: pointer;
  color: var(--gray);
`;
export const Title = styled.span`
  width: 100%;
  text-align: center;
  color: var(--primaryMain);
  font-size: var(--fs-16);
  font-weight: 600;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: var(--g-24);
`;
export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--g-4);
`;
export const Label = styled.label`
  color: var(--primaryMain);
  font-size: var(--fs-12);
  font-weight: 600;
`;
export const Input = styled.input`
  color: var(--primaryMain);
  font-size: var(--f-16);
  font-weight: 700;
  padding: var(--p-10);
  background-color: var(--dark-1);
  border: 1px solid var(--primaryMain);
  border-radius: 0.25rem;
`;
export const Submit = styled.button`
  background: none;
  border: 1px solid var(--primaryMain);
  border-radius: 0.25rem;
  font-size: var(--fs-12);
  font-weight: 700;
  color: var(--primaryMain);
  padding: 0.75rem 1.375rem;

  &:hover {
    background-color: var(--primaryMain);
    color: var(--light);
  }
`;
