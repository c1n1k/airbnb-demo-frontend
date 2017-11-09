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
  top: 15px;
  right: 15px;
  display: inline-block;
  pointer-events: none;
`;

const SelectIconDown = props => {
  return (
    <SelectIcon>
      <Icon icon="down" width="16" height="9" fill="#484848" />
    </SelectIcon>
  );
};

const Control = styled.select`
  padding: 0 40px 0 15px;
  width: 100%;
  height: 48px;
  font-weight: 300;
  font-size: 18px;
  line-height: 48px;
  appearance: none;
  border: 1px solid #d8d8d8;
  border-radius: 4px;
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
