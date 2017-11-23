import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Icon from "../Icon";
import logo from "./logo.svg";

const Logo = styled(Link)`
  display: flex;
  height: 100%;
  align-items: center;
`;

const IconWrap = styled.span`
  display: inline-block;
  width: 6px;
  height: 10px;
  margin-left: 15px;
  transform: rotate(90deg);

  @media (min-width: 980px) {
    display: none;
  }
`;

const DropIcon = () => {
  return (
    <IconWrap>
      <Icon icon="rightSmall" width="6" height="10" fill="#767676" />
    </IconWrap>
  );
};

export default () => {
  return (
    <Logo to="/">
      <img src={logo} alt="AirBnBFake" />
      <DropIcon />
    </Logo>
  );
};
