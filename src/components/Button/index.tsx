import { ButtonStyles } from "./styles";

interface Props {
  children: string | JSX.Element;
  onClick?: () => void;
}

const Button: React.FC<Props> = ({ children, onClick }) => {
  return <ButtonStyles onClick={onClick}>{children}</ButtonStyles>;
};

export default Button;
