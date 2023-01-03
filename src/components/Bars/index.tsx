import { BarsStyles } from "./styles";

interface Props {
  isActive: boolean;
}

const Bars: React.FC<Props> = ({ isActive }) => {
  return (
    <BarsStyles isActive={isActive}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </BarsStyles>
  );
};

export default Bars;
