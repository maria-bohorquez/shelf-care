import styled from "styled-components";
import { ReactComponent as LogoSVG } from "../../assets/shelfcarelogo.svg";

export const Logo = styled(LogoSVG)`
  height: 40px;
  width: 230px;
  display: block;

  @media (max-width: 800px) {
    height: 33px;
    width: 180px;
  }
`;

export const HeaderContainer = styled.header`
  background: #eddea4;
  border-bottom: 2px solid #172a3a;
  padding: 20px 40px;
  box-sizing: border-box;
  align-items: center;
  justify-content: space-between;
  width: 100vw;
  display: flex;
  position: fixed;
  z-index: 3;

  @media (max-width: 800px) {
    padding: 20px;
  }
`;
