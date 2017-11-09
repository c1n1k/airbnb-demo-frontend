import React from "react";
import styled from "styled-components";
import Section from "../Section";
import Inner from "../Inner";
import InnerGrid from "../Inner/InnerGrid";
import Title from "../Title";
import Card from "./Card";
import NextPage from "../NextPage";
import paris from "./paris.png";
import miami from "./miami.png";
import tokio from "./tokio.png";
import capetown from "./capetown.png";
import seoul from "./seoul.png";
import losangeles from "./losangeles.png";

const Pager = styled.span`
  position: absolute;
  top: 50%;
  right: -20px;
  margin-top: -30px;
  display: none;
  width: 40px;
  height: 40px;

  @media (min-width: 980px) {
    display: block
  }
`;

export default () => {
  return (
    <Section>
      <Inner>
        <Title>Featured destinations</Title>
      </Inner>
      <InnerGrid>
        <Card img={paris} name="Paris" href="" />
        <Card img={miami} name="Miami" href="" />
        <Card img={tokio} name="Tokyo" href="" />
        <Card img={capetown} name="Cape Town" href="" />
        <Card img={seoul} name="Seoul" href="" />
        <Card img={losangeles} name="Los Angeles" href="" />
        <Pager>
          <NextPage href="" />
        </Pager>
      </InnerGrid>
    </Section>
  );
};
