import styled from "styled-components";
import defaultImg from "../images/view.jpeg";

const StyledHero = styled.header`
  min-height: calc(100vh - 66px);
  background: linear-gradient(180deg, transparent 0, #202020),
    url(${props => (props.img ? props.img : defaultImg)}) center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export default StyledHero;
