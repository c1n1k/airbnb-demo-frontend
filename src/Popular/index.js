import React from "react";
// import styled from "styled-components";
import Section from "../Section";
import Inner from "../Inner";
import InnerGrid from "../Inner/InnerGrid";
import Title from "../Title";
import LinkMore from "../LinkMore";
import Card from "./Card";
import NextPage from "../NextPage";
import chumley from "./chumley.png";
import hanjan from "./hanjan.png";
import meats from "./meats.png";
import seaprice from "./seaprice.png";

export default () => {
  return (
    <Section>
      <Inner>
        <Title>Popular reservations around the world</Title>
        <LinkMore text="See all" href="" />
      </Inner>
      <InnerGrid>
        <Card
          img={chumley}
          type="Speakeasy"
          name="Chumley’s"
          href=""
          price="60"
        />
        <Card
          img={hanjan}
          type="Korean gastropub"
          name="Hanjan"
          href=""
          price="50"
        />
        <Card
          img={meats}
          type="German american"
          name="Prime Meats"
          href=""
          price="55"
        />
        <Card
          img={seaprice}
          type="Fine seafood"
          name="Seaprice"
          href=""
          price="50"
        />
        <NextPage href="" />
      </InnerGrid>
    </Section>
  );
};
