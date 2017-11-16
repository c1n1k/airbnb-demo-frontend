import React from "react";
import styled from "styled-components";
import Main from "../UI/Main";
import Explore from "../Explore";
import Experiences from "../Experiences";
import Homes from "../Homes/SectionForIndex";
import Popular from "../Popular";
import Destination from "../Destination";
import Header from "../Header";
import Footer from "../Footer";

const IndexWrap = styled.div``;
const IndexMain = Main.extend`
  margin-top: 36px;

  @media (min-width: 768px) {
    margin-top: 45px;
  }
`;

export default () => {
  return (
    <IndexWrap>
      <Header />
      <IndexMain>
        <Explore />
        <Experiences />
        <Homes />
        <Popular />
        <Destination />
      </IndexMain>
      <Footer />
    </IndexWrap>
  );
};
