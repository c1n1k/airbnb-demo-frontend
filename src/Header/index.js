import React from "react";
import styled from "styled-components";
import InnerGrid from "../UI/Inner/InnerGrid";
import Logo from "../UI/Logo";
import Search from "../UI/Search";
import Nav from "../Nav";

const Header = styled.header`
  height: 80px;
  border-bottom: 1px solid rgba(72, 72, 72, 0.2);
`;

const HeaderLogo = styled.div`
  align-self: center;

  @media (min-width: 980px) {
    width: 5%;
    margin-right: 16px;
  }

  @supports (display: grid) {
    width: auto;
    grid-column: span 2;
    height: 100%;
    align-self: center;

    @media (min-width: 768px) {
      grid-column: span 1;
    }

    @media (min-width: 980px) {
      width: auto;
      grid-column: span 1;
      margin-right: 0;
    }
  }
`;

const HeaderSearch = styled.div`
  align-self: center;

  @media (min-width: 980px) {
    width: 40%;
  }

  @supports (display: grid) {
    grid-column: span 10;
    align-self: center;

    @media (min-width: 768px) {
      grid-column: span 7;
    }

    @media (min-width: 980px) {
      grid-column: span 5;
      width: auto;
    }
  }
`;

const HeaderNav = styled.div`
  position: absolute;
  z-index: 50;
  top: 100%;
  left: 0;
  right: 0;
  margin-top: 1px;
  overflow: hidden;
  height: 0;
  background-color: #fff;

  @media (min-width: 980px) {
    position: relative;
    top: auto;
    right: auto;
    left: auto;
    margin-top: 0;
    overflow: visible;
    height: auto;
    flex-grow: 1;
    align-self: center;
    display: flex;
    justify-content: flex-end;
  }

  @supports (display: grid) {
    @media (min-width: 980px) {
      grid-column: -1 / -6;
      justify-self: end;
    }
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
