import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body {
        font-family: 'Inconsolata', monospace;
        margin: 0;
        padding: 0;
        -webkit-font-smoothing: antialiased;
        text-rendering: optimizeLegibility;
    }
`;

export const Pill = styled.div`
  background: #a7bbec;
  border: 2px solid #172a3a;
  border-radius: 30px;
  height: 20px;
  width: 20px;
  padding: 8px;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  display: flex;
`;

export const Close = styled.button`
  background: none;
  border: 0;
  cursor: pointer;
  height: 22px;
  width: 22px;
  padding: 0;
  position: relative;

  &::before,
  &::after {
    background-color: #172a3a;
    content: "";
    height: 24px;
    width: 2px;
    position: absolute;
    top: 0;
    left: 9px;
  }

  &::before {
    transform: rotate(45deg);
  }

  &::after {
    transform: rotate(-45deg);
  }
`;
