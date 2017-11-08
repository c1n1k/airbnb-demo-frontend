import React from "react";
import styled from "styled-components";
import InnerGrid from "../Inner/InnerGrid";
import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import Nav from "../Nav/Nav";

const Header = styled.header`
  margin-bottom: 45px;
  height: 80px;
  border-bottom: 1px solid rgba(72, 72, 72, 0.2);
`;

const HeaderLogo = styled.div`@supports (display: grid) {grid-column: 1 / 2;}`;

const HeaderSearch = styled.div`
  @supports (display: grid) {
    grid-column: 2 / span 5;
    align-self: center;
  }
`;

const HeaderNav = styled.div`
  @supports (display: grid) {
    grid-column: -1 / -6;
    align-self: center;
    justify-self: end;
  }
`;

export default () => {
  return (
    <Header>
      <InnerGrid>
        <HeaderLogo>
          <Logo />
        </HeaderLogo>
        <HeaderSearch>
          <Search />
        </HeaderSearch>
        <HeaderNav>
          <Nav />
        </HeaderNav>
      </InnerGrid>
    </Header>
  );
};
