import styled from "styled-components";
import { Pill } from "../../styles";
import { ReactComponent as MagnifyIcon } from "../../assets/search.svg";

export const SearchContainer = styled(Pill)`
  width: ${({ $showOnDesktop }) => ($showOnDesktop ? "420px" : "20px")};
  transition: 300ms;
  justify-content: space-around;

  @media (max-width: 800px) {
    width: 85%;
  }

  input,
  button {
    display: ${({ $showOnDesktop }) => ($showOnDesktop ? "block" : "none")};

    @media (max-width: 800px) {
      display: block;
    }
  }
`;

export const Input = styled.input`
  font-family: "Inconsolata", monospace;
  font-weight: 700;
  font-size: 18px;
  background: inherit;
  border: none;
  padding: 6px;
`;

export const Icon = styled(MagnifyIcon)`
  width: 20px;
  cursor: pointer;
`;

export const Wrapper = styled.div`
  @media (max-width: 800px) {
    background: #eddea4;
    border-top: 2px solid #172a3a;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 64px;
    width: 100vw;
    left: 0;
    bottom: 0;
    position: fixed;
    z-index: 1;
  }
`;
