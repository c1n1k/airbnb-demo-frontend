import React from "react";
import styled from "styled-components";
import Icon from "../Icon";

const Select = styled.span`
  position: relative;
  display: block;
`;

const SelectIcon = styled.span`
  position: absolute;
  z-index: 1;
  top: 13px;
  right: 8px;
  display: inline-block;
  pointer-events: none;

  @media (min-width: 768px) {
    top: 15px;
    right: 15px;
  }
`;

const SelectIconDown = props => {
  return (
    <SelectIcon>
      <Icon icon="down" width="16" height="9" fill="#484848" />
    </SelectIcon>
  );
};

const Control = styled.select`
  padding: 0 30px 0 10px;
  width: 100%;
  height: 40px;
  font-weight: 300;
  font-size: 14px;
  line-height: 40px;
  appearance: none;
  border: 1px solid #d8d8d8;
  border-radius: 4px;

  @media (min-width: 768px) {
    padding: 0 40px 0 15px;
    height: 48px;
    line-height: 48px;
    font-size: 18px;
  }
`;

export default props => {
  const items = props.options.map(item => {
    return (
      <option key={item.value} value={item.value}>
        {item.text}
      </option>
    );
  });
  return (
    <Select>
      <Control>{items}</Control>
      <SelectIconDown />
    </Select>
  );
};
