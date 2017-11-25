import React, { Component } from "react";
import styled from "styled-components";

const Wrap = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding-top: 48px;
  padding-bottom: 64px;
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
    padding-top: 0;
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

  ${props => {
    if (props.bodyLike) {
      return `

        @media (min-width: 768px) {
          margin-top: 13px;
          width: 100%;
          border: none;
          border-radius: 0;
          box-shadow: none;
        }

        @media (min-width: 980px) {
          width: calc(100% / 3 * 2)
        }
      `;
    }
  }};
`;

const Body = styled.div`
  padding: 20px 8px;

  @media (min-width: 768px) {
    padding: 24px 16px;
  }
`;

const Footer = styled.div`
  position: absolute;
  right: 0;
  left: 0;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  border-top: 1px solid rgba(72, 72, 72, 0.3);

  @media (min-width: 768px) {
    position: relative;
    bottom: auto;
    left: auto;
    right: auto;
    border-top: none;
  }
`;

const Header = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  height: 48px;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid rgba(72, 72, 72, 0.3);

  @media (min-width: 768px) {
    display: none;
    border-bottom: none;
  }
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

const MobileClose = styled.button`
  position: absolute;
  top: 0;
  left: 0;
  width: 48px;
  height: 48px;
  color: #484848;
  background-color: transparent;
  border: none;

  &:before,
  &:after {
    position: absolute;
    top: 50%;
    left: 50%;
    margin: -1px 0 0 -11px;
    width: 22px;
    height: 2px;
    content: "";
    transform-origin: 50%;
    background-color: currentColor;
    border-radius: 1px;
  }

  &:before {
    transform: rotate(-45deg);
  }

  &:after {
    transform: rotate(45deg);
  }
`;

const MobileReset = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  padding: 0 10px;
  height: 48px;
  font-weight: 300;
  line-height: 48px;
  color: #0F7276;
  background-color: transparent;
  border: none;
`;

class Popup extends Component {
  render() {
    const closePopup = this.props.forClose;

    return (
      <Wrap
        className={this.props.className}
        isOpen={this.props.isOpen}
        openFilter={this.props.openedFilter}
        bodyLike={this.props.bodyLike}
      >
        <Header>
          <MobileClose onClick={closePopup} type="button" />
          <MobileReset type="button">Reset</MobileReset>
        </Header>
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
