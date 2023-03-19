import logo from "/src/assets/images/logo.svg";
import { LogoStyles } from "./styles";

const Logo: React.FC = () => {
  return <LogoStyles src={logo} alt="Sound Glory logo" />;
};

export default Logo;
