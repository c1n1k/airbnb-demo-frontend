import React from "react";
import styled from "styled-components";

const Checkbox = styled.label`
  position: relative;
  padding-left: 36px;
  padding-top: 4px;
  display: block;

  input {
    position: absolute;
    z-index: -1;
    margin: 0;
    opacity: 0;
  }
`;

const Text = styled.span`
  display: block;
  font-size: 16px;
  font-weight: 300;

  &:before {
    position: absolute;
    left: 0;
    top: 0;
    width: 24px;
    height: 24px;
    content: "";
    border: 1px solid rgba(72, 72, 72, 0.3);
    border-radius: 4px;
  }

  &:after {
    position: absolute;
    left: 5px;
    top: 8px;
    width: 14px;
    height: 6px;
    content: "";
    border-bottom: solid 2px rgba(72, 72, 72, 0.7);
    border-left: solid 2px rgba(72, 72, 72, 0.7);
    transform: rotate(-45deg);
    opacity: 0;
  }

  input:checked + &:after {
    opacity: 1;
  }

  span {
    margin-top: 7px;
    display: block;
    font-size: 12px;
  }
`;

export default props => {
  return (
    <Checkbox className={props.className}>
      <input type="checkbox" name={props.name} />
      <Text>{props.children}</Text>
    </Checkbox>
  );
};
