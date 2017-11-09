import React from "react";
import styled from "styled-components";
import Inner from "../Inner";
import InnerGrid from "../Inner/InnerGrid";
import LinkGroup from "../LinkGroup";
import Icon from "../Icon";
import Select from "../Select";
import linksAirbnb from "./linksAirbnb";
import linksDiscover from "./linksDiscover";
import linksHosting from "./linksHosting";
import optionLang from "./optionLang.js";
import optionCurrency from "./optionCurrency.js";

const Footer = styled.footer`
  margin-top: 48px;
  padding-top: 48px;
  border-top: 1px solid rgba(72, 72, 72, 0.2);
`;

const Nav = styled.nav`margin-bottom: 48px;`;

const Col = styled.div`
  @supports (display: block) {
    grid-column: span 2;
    align-self: start;

    &:first-child {
      grid-column: span 3;
    }

    &:nth-child(2) {
      grid-column: 5 / span 2;
    }

    &:nth-child(3) {
      grid-column: 8 / span 2;
    }

    &:nth-child(4) {
      grid-column: 11 / span 2;
    }
  }
`;

const FooterSelect = styled.div`margin-bottom: 16px;`;

const CopyRow = Inner.extend`
  height: 90px;
  align-items: center;
  font-size: 15px;
  color: #767676;
  border-top: 1px solid rgba(72, 72, 72, 0.2);
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

const Links = styled.div``;

const Link = styled.a`
  padding: 5px 11px;
  display: inline-block;
  font-size: 14px;
  text-decoration: none;
  color: inherit;
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
    <Footer>
      <Nav>
        <InnerGrid>
          <Col>
            <FooterSelect>
              <Select options={optionLang} />
            </FooterSelect>
            <FooterSelect>
              <Select options={optionCurrency} />
            </FooterSelect>
          </Col>
          <Col>
            <LinkGroup name="Airbnb" group={linksAirbnb} />
          </Col>
          <Col>
            <LinkGroup name="Discover" group={linksDiscover} />
          </Col>
          <Col>
            <LinkGroup name="Hosting" group={linksHosting} />
          </Col>
        </InnerGrid>
      </Nav>
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
    </Footer>
  );
};
