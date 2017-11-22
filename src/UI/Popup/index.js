import React, { Component } from "react";
import styled from "styled-components";

const Wrap = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 100vh;
  overflow-y: auto;
  white-space: normal;
  background-color: #fff;
  transform: translate3D(0, 100%, 0);
  transition: transform 0.3s ease-in-out;
  z-index: 50;

  @media (min-width: 768px) {
    position: absolute;
    top: 100%;
    left: -9999px;
    right: auto;
    margin-top: 8px;
    min-width: 326px;
    height: auto;
    overflow: hidden;
    border: 1px solid rgba(72, 72, 72, 0.2);
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(72, 72, 72, 0.08);
    transition: none;
    transform: none;
  }

  ${props => {
    if (props.isOpen) {
      return `
        transform: translate3D(0, 0, 0);

        @media (min-width: 768px) {
          left: 0;
        }
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
      <Wrap
        className={this.props.className}
        isOpen={this.props.isOpen}
        openFilter={this.props.openedFilter}
      >
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
