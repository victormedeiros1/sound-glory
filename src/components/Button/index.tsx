import { ButtonStyles } from "./styles";

interface Props {
  children: string;
  onClick?: () => void;
}

const Button: React.FC<Props> = ({ children, onClick }) => {
  return <ButtonStyles onClick={onClick}>{children}</ButtonStyles>;
};

export default Button;
