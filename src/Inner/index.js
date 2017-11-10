// import React from "react";
import styled from "styled-components";

export default styled.div`
  position: relative;
  margin: 0 auto;
  padding: 0 8px;
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: space-between;
  align-items: baseline;

  @media (min-width: 980px) {
    max-width: 962px;
    padding-left: 0;
    padding-right: 0;
  }
`;
