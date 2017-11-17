import React, { Component } from "react";
import styled from "styled-components";

const Wrap = styled.div`
  position: absolute;
  width: 100%;
  background-color: #fff;
  display: none;

  @media (min-width: 768px) {
    min-width: 326px;
    overflow: hidden;
    border: 1px solid rgba(72, 72, 72, 0.2);
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(72, 72, 72, 0.08);
  }

  ${props => {
    if (props.isOpen) {
      return `
        display: block;
      `;
    }
  }};
`;

const Body = styled.div`
  padding: 40px 8px;

  @media (min-width: 768px) {
    padding: 24px 16px;
  }
`;

const Footer = styled.div``;

const Button = styled.button`
  padding: 0 32px;
  height: 64px;
  font-size: 16px;
  line-height: 64px;
  border: 0;
  background-color: #fff;
  color: ${props => (props.primary ? "#008489" : "#636363")};
`;

class Popup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  render() {
    return (
      <Wrap className={this.props.className} isOpen={this.state.isOpen}>
        <Body>{this.props.children}</Body>
        <Footer>
          <Button>Cancel</Button>
          <Button primary>Apply</Button>
        </Footer>
      </Wrap>
    );
  }
}

export default Popup;
