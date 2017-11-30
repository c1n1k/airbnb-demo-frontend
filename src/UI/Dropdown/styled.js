import React from "react";
import styled from "styled-components";

export const Wrap = styled.div`
  position: relative;
  width: 100%;
`;

export const Switcher = styled.button`
  height: 40px;
  width: 100%;
  padding: 0 15px;
  font-weight: 300;
  line-height: 38px;
  text-align: inherit;
  background-color: transparent;
  border: 1px solid #d8d8d8;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(72, 72, 72, 0.08);

  ${props => {
    if (props.isOpen)
      return `
      border-radius: 4px 4px 0 0;
    `;
  }};
`;

const DropdownWrap = styled.div`
  position: absolute;
  z-index: 100;
  top: 100%;
  left: 0;
  margin-top: -1px;
  min-width: 100%;
  overflow: hidden;
  max-height: 0;
  background-color: #fff;
  border: 1px solid transparent;
  border-radius: 4px;
  visibility: hidden;
  transition: max-height 0.3s ease-in-out;

  ${props => {
    if (props.isOpen)
      return `
      max-height: 1000px;
      visibility: visible;
      border-radius: 0 0 4px 4px;
      border-color: #d8d8d8;
      box-shadow: 0 2px 4px rgba(72, 72, 72, 0.08);
    `;
  }};
`;

const Inner = styled.div`
  padding: 15px;
`;

export const Dropdown = props => {
  return (
    <DropdownWrap {...props}>
      <Inner>{props.children}</Inner>
    </DropdownWrap>
  );
};
