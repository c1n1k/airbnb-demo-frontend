import styled from "styled-components";

export const Wrap = styled.div`
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
    padding-bottom: 0;
    min-width: 326px;
    height: auto;
    overflow: hidden;
    border: 1px solid rgba(72, 72, 72, 0.2);
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(72, 72, 72, 0.08);
    transition: none;
    transform: none;
  }

  ${props =>
    props.isOpen &&
    `
      transform: translate3D(0, 0, 0);

      @media (min-width: 768px) {
        left: 0;
      }
    `};

  ${props =>
    props.bodyLike &&
    `

        @media (min-width: 768px) {
          margin-top: 13px;
          width: 100%;
          height: ${props.height}px;
          padding-bottom: 64px;
          border: none;
          border-radius: 0;
          box-shadow: none;
        }

        @media (min-width: 980px) {
          width: calc(100% / 3 * 2)
        }
      `};
`;

export const Body = styled.div`
  height: 100%;

  @media (min-width: 768px) {
    height: auto;
  }

  ${props =>
    props.bodyLike &&
    `
        @media (min-width: 768px) {
          height:100%;
        }
      `};
`;

export const Inner = styled.div`
  padding: 20px 8px;
  height: 100%;
  overflow-y: auto;

  @media (min-width: 768px) {
    padding: 24px 16px 0;
    height: auto;
    overflow: visible;
  }

  ${props =>
    props.bodyLike &&
    `
        @media (min-width: 768px) {
          height: 100%;
          overflow-y: auto;
          padding-left: 0;
          padding-right: 0;
        }
      `}
  };
`;

export const Footer = styled.div`
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

  ${props =>
    props.bodyLike &&
    `
        @media (min-width: 768px) {
          position: absolute;
          right: 0;
          left: 0;
          bottom: 0;
          display: flex;
          justify-content: flex-end;
          border-top: 1px solid rgba(72, 72, 72, 0.3);
        }
      `};
`;

export const Header = styled.div`
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

export const Button = styled.button`
  padding: 0 32px;
  height: 64px;
  font-size: 16px;
  line-height: 64px;
  cursor: pointer;
  border: 0;
  background-color: #fff;
  color: ${props => (props.primary ? "#008489" : "#636363")};
`;

export const MobileClose = styled.button`
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

export const MobileReset = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  padding: 0 10px;
  height: 48px;
  font-weight: 300;
  line-height: 48px;
  color: #0f7276;
  background-color: transparent;
  border: none;
`;
