import React from "react";
import styled from "styled-components";
import Section from "../Section";
import Inner from "../Inner";
import InnerGrid from "../Inner/InnerGrid";
import Title from "../Title";
import LinkMore from "../LinkMore";
import Card from "./Card";
import NextPage from "../NextPage";
import forest from "./forest.png";
import whale from "./whale.png";
import mountain from "./mountain.png";
import salsa from "./salsa.png";

const Pager = styled.span`
  position: absolute;
  top: 50%;
  right: -20px;
  margin-top: -50px;
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
        <Title>Experiences</Title>
        <LinkMore text="See all" href="" />
      </Inner>
      <InnerGrid>
        <Card
          name="Forest therapy"
          href=""
          price="29"
          img={forest}
          reviewCount="44"
        />
        <Card
          name="Whale watching"
          href=""
          price="69"
          img={whale}
          reviewCount="46"
        />
        <Card
          name="Table Mountain Summit Cable Car Down"
          href=""
          price="47"
          img={mountain}
          reviewCount="57"
        />
        <Card
          name="Salsa Night"
          href=""
          price="50"
          img={salsa}
          reviewCount="39"
        />
        <Pager>
          <NextPage href="" />
        </Pager>
      </InnerGrid>
    </Section>
  );
};
