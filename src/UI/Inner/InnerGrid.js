// import React from "react";
// import styled from "styled-components";
import Inner from "./index";

export default Inner.extend`
  @supports (display: grid) {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-column-gap: 16px;
  }
`;
