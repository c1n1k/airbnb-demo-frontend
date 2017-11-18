import React from "react";
import styled from "styled-components";
import Icon from "../UI/Icon";
import Inner from "../UI/Inner";
import { Link } from "react-router-dom";

const CopyrightRow = Inner.extend`
  padding-top: 15px;
  padding-bottom: 15px;
  flex-wrap: wrap;
  align-items: center;
  font-size: 15px;
  color: #767676;
  border-top: 1px solid rgba(72, 72, 72, 0.2);

  @media (min-width: 768px) {
    padding-top: 34px;
    padding-bottom: 50px;
    flex-wrap: no-wrap;
  }

  @media (min-width: 980px) {
    padding-bottom: 50px;
  }
`;

const Logo = styled.div`
  position: relative;
  top: 5px;
  display: inline-block;
  margin-right: 10px;
`;

const LogoIcon = () => {
  return (
    <Logo>
      <Icon icon="logo" width="21" height="24" fill="#767676" />
    </Logo>
  );
};

const CopyText = styled.div`@media (min-width: 768px) {margin-top: -10px;}`;

const Nav = styled.div`
  font-size: 14px;
  margin-left: -11px;

  @media (min-width: 768px) {
    margin-left: 0;
  }
`;

const NavLink = styled(Link)`
  padding: 5px 11px;
  display: inline-block;
  font-size: 12px;
  text-decoration: none;
  color: inherit;

  @media (min-width: 768px) {
    font-size: 14px;
  }
`;

const LinkSocial = styled.a`
  position: relative;
  top: 4px;
  margin-left: 15px;
  display: inline-block;
  text-decoration: none;
`;

const LinkSocialFb = props => {
  return (
    <LinkSocial href={props.href}>
      <Icon icon="facebook" width="20" height="20" fill="#767676" />
    </LinkSocial>
  );
};

const LinkSocialTwi = props => {
  return (
    <LinkSocial href={props.href}>
      <Icon icon="twitter" width="19" height="17" fill="#767676" />
    </LinkSocial>
  );
};

export default () => {
  return (
    <CopyrightRow>
      <CopyText>
        <LogoIcon /> © Airbnb Inc.
      </CopyText>
      <Nav>
        <NavLink to="">Terms</NavLink>
        <NavLink to="">Privacy</NavLink>
        <NavLink to="">Site map</NavLink>
        <LinkSocialFb href="" />
        <LinkSocialTwi href="" />
      </Nav>
    </CopyrightRow>
  );
};
