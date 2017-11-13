// import React from "react";
import styled from "styled-components";

export default styled.button`
  padding: 0 16px;
  margin: 0 6px;
  display: inline-block;
  height: 32px;
  cursor: pointer;
  background-color: #fff;
  border: 1px solid rgba(72, 72, 72, 0.2);
  border-radius: 4px;

  &:first-child {
    margin-left: 0;
  }

  &:last-child {
    margin-right: 0;
  }
`;
