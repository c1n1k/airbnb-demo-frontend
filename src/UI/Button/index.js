// import React from "react";
import styled from "styled-components";

export default styled.button`
  padding: 0 16px;
  display: inline-block;
  height: 32px;
  cursor: pointer;
  color: #383838;
  background-color: #fff;
  border: 1px solid rgba(72, 72, 72, 0.2);
  border-radius: 4px;

  ${props => {
    if (props.primary)
      return `
        height: 40px;
        font-weight: bold;
        color: #fff;
        background-color: #FF5A5F;
        border-color: transparent;
      `;
  }};
`;
