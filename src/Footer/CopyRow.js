import React from "react";
import styled from "styled-components";
import Icon from "../UI/Icon";
import Inner from "../UI/Inner";

const CopyRow = Inner.extend`
  padding-top: 5px;
  padding-bottom: 5px;
  height: 80px;
  flex-wrap: wrap;
  align-items: center;
  font-size: 15px;
  color: #767676;
  border-top: 1px solid rgba(72, 72, 72, 0.2);

  @media (min-width: 768px) {
    height: 90px;
    flex-wrap: no-wrap;
  }
`;

const Logo = styled.span`
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

const Copy = () => {
  return (
    <div>
      <LogoIcon /> © Airbnb Inc.
    </div>
  );
};

const Links = styled.div`
  font-size: 14px;
  margin-left: -11px;

  @media (min-width: 768px) {
    margin-left: 0;
  }
`;

const Link = styled.a`
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
    <CopyRow>
      <Copy />
      <Links>
        <Link href="">Terms</Link>
        <Link href="">Privacy</Link>
        <Link href="">Site map</Link>
        <LinkSocialFb href="" />
        <LinkSocialTwi href="" />
      </Links>
    </CopyRow>
  );
};
