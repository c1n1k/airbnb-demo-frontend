import React from "react";
// import styled from "styled-components";
import Main from "../UI/Main";
import Explore from "../Explore";
import Experiences from "../Experiences";
import Homes from "../Homes/SectionForIndex";
import Popular from "../Popular";
import Destination from "../Destination";

const IndexMain = Main.extend`
  margin-top: 36px;
  @media (min-width: 768px) {
    margin-top: 45px;
  }
`;

export default () => {
  return (
    <IndexMain>
      <Explore />
      <Experiences />
      <Homes />
      <Popular />
      <Destination />
    </IndexMain>
  );
};
