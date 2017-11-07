// import React from "react";
import styled from "styled-components";

export default styled.div`
  margin: 0 auto;
  padding: 0;
  display: flex;
  max-width: 962px;
  width: 100%;
  height: 100%;

  @supports (display: grid) {
    display: grid;
    grid-template-columns: repeat(13, 1fr);
    grid-column-gap: 16px;
  }
`;
