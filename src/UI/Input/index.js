import React from "react";
import styled from "styled-components";

const Input = styled.input`
  position: relative;
  padding: 0 15px;
  width: 100%;
  height: 48px;
  border: 1px solid #d8d8d8;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(72, 72, 72, 0.08);

  ${props =>
    props.size === "s" &&
    `
        height: 40px;
        border-radius: 0;
      `};

  &:focus {
    z-index: 1;
  }
`;

export default props => {
  return (
    <Input
      className={props.className}
      size={props.size}
      placeholder={props.placeholder}
    />
  );
};
