import React from "react";
import { Logo, HeaderContainer } from "./styles";

const Header = () => (
  <HeaderContainer>
    <a href="/">
      <Logo title="Shelf Care logo" />
    </a>
  </HeaderContainer>
);

export default Header;
