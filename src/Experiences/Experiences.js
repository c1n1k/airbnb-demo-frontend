import React from "react";
// import styled from "styled-components";
import Section from "../Section/Section";
import Inner from "../Inner/Inner";
import InnerGrid from "../Inner/InnerGrid";
import Title from "../Title/Title";
import LinkMore from "../LinkMore/LinkMore";
import Card from "./Card";
import NextPage from "../NextPage/NextPage";
import forest from "./forest.png";
import whale from "./whale.png";
import mountain from "./mountain.png";
import salsa from "./salsa.png";

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
        <NextPage href="" />
      </InnerGrid>
    </Section>
  );
};
