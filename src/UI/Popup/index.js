import React, { Component } from "react";
import styled from "styled-components";

const Wrap = styled.div`
  position: absolute;
  margin-top: 8px;
  left: -9999px;
  top: 100%;
  background-color: #fff;

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
        left: 0;
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

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Button = styled.button`
  padding: 0 32px;
  height: 64px;
  font-size: 16px;
  line-height: 64px;
  cursor: pointer;
  border: 0;
  background-color: #fff;
  color: ${props => (props.primary ? "#008489" : "#636363")};
`;

class Popup extends Component {
  render() {
    const closePopup = this.props.forClose;

    return (
      <Wrap className={this.props.className} isOpen={this.props.isOpen}>
        <Body>{this.props.children}</Body>
        <Footer>
          <Button onClick={closePopup} type="button">
            Cancel
          </Button>
          <Button primary type="button">
            Apply
          </Button>
        </Footer>
      </Wrap>
    );
  }
}

export default Popup;
