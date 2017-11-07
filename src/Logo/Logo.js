import React from "react";
import styled from "styled-components";
import logo from "./logo.svg";

const Logo = styled.a`
  display: flex;
  height: 100%;
  align-items: center;
`;

export default () => {
  return (
    <Logo href="/">
      <img src={logo} alt="AirBnBFake" />
    </Logo>
  );
};
