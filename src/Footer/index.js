import React, { Component } from "react";
import styled from "styled-components";
import InnerGrid from "../UI/Inner/InnerGrid";
import LinkGroup from "../UI/LinkGroup";
import CopyRow from "./CopyRow";
import Select from "../UI/Select";
import Button from "../UI/Button";
import linksAirbnb from "./linksAirbnb";
import linksDiscover from "./linksDiscover";
import linksHosting from "./linksHosting";
import optionLang from "./optionLang";
import optionCurrency from "./optionCurrency";
import { withRouter } from "react-router-dom";

const Wrap = styled.div``;

const FooterInner = styled.footer`
  margin-top: 48px;
  padding-top: 15px;
  background-color: #fff;
  border-top: 1px solid rgba(72, 72, 72, 0.2);
  transition: transform 0.2s ease-out;

  @media (min-width: 768px) {
    padding-top: 48px;
  }

  ${props => {
    if (props.isHiddble) {
      return `
        position: fixed;
        right: 0;
        left: 0;
        bottom: 0;
        margin-top: 0;
        transform: translate3D(0, 100%, 0);
      `;
    }
  }};

  ${props => {
    if (props.hideFooter) {
      return `
        transform: translate3D(0, 0, 0);
      `;
    }
  }};
`;

const Toggler = Button.extend`
  position: fixed;
  z-index: 55;
  left: 15px;
  bottom: 15px;

  @media (min-width: 980px) {
    right: 15px;
    left: auto;
  }

  ${props => {
    if (!props.isHiddble) {
      return `
        display: none;
      `;
    }
  }};
`;

const Nav = styled.nav`
  margin-bottom: 15px;

  @media (min-width: 768px) {
    margin-bottom: 48px;
  }
`;

const Col = styled.div`
  width: calc(100% / 6);
  padding-left: 16px;

  @supports (display: grid) {
    grid-column: span 2;
    align-self: start;
    width: auto;
    padding-left: 0;
  }
`;

const ColSelect = Col.extend`
  width: calc(100% / 4);
  padding-left: 0;

  @supports (display: grid) {
    grid-column: 1 / -1;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 16px;
    width: auto;

    @media (min-width: 768px) {
      display: block;
      grid-column: span 3;
    }
  }
`;

const ColAirbnb = Col.extend`
  display: none;

  @media (min-width: 768px) {
    display: block;

    @supports (display: grid) {
      grid-column: 5 / span 2;
    }
  }
`;

const ColDiscover = Col.extend`
  display: none;

  @media (min-width: 768px) {
    display: block;

    @supports (display: grid) {
      grid-column: 8 / span 2;
    }
  }
`;

const ColHosting = Col.extend`
  display: none;

  @media (min-width: 768px) {
    display: block;

    @supports (display: grid) {
      grid-column: 11 / span 2;
    }
  }
`;

const FooterSelect = styled.div`
  font-size: 14px;

  @media (min-width: 768px) {
    margin-bottom: 16px;
    width: auto;
  }
`;

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      isHiddble: true
    };
    // this.toggle = this.toggle.bind(this);
  }

  componentWillMount() {
    const pathname = this.props.location.pathname;
    const check = pathname === "/homes";

    this.setState({ isHiddble: check });
  }

  toggle = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }));
  };

  render() {
    return (
      <Wrap>
        <FooterInner
          isHiddble={this.state.isHiddble}
          hideFooter={this.state.isOpen}
        >
          <Nav>
            <InnerGrid>
              <ColSelect>
                <FooterSelect>
                  <Select options={optionLang} />
                </FooterSelect>
                <FooterSelect>
                  <Select options={optionCurrency} />
                </FooterSelect>
              </ColSelect>
              <ColAirbnb>
                <LinkGroup name="Airbnb" group={linksAirbnb} />
              </ColAirbnb>
              <ColDiscover>
                <LinkGroup name="Discover" group={linksDiscover} />
              </ColDiscover>
              <ColHosting>
                <LinkGroup name="Hosting" group={linksHosting} />
              </ColHosting>
            </InnerGrid>
          </Nav>
          <CopyRow />
        </FooterInner>
        <Toggler isHiddble={this.state.isHiddble} onClick={this.toggle}>
          Lang and currency
        </Toggler>
      </Wrap>
    );
  }
}

export default withRouter(Footer);
