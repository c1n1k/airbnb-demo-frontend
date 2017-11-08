import React from "react";
// import styled from "styled-components";
import Section from "../Section/Section";
import Inner from "../Inner/Inner";
import InnerGrid from "../Inner/InnerGrid";
import Title from "../Title/Title";
import LinkMore from "../LinkMore/LinkMore";
import Card from "./Card";
import NextPage from "../NextPage/NextPage";
import salentina from "./salentina.png";
import riad from "./riad.png";
import tropic from "./tropic.png";

export default () => {
  return (
    <Section>
      <Inner>
        <Title>Homes</Title>
        <LinkMore text="See all" href="" />
      </Inner>
      <InnerGrid>
        <Card
          name="La Salentina, see, nature & relax"
          href=""
          price="82"
          img={salentina}
          mastery="Entire house"
          beds="9"
          hosterStatus="Superhost"
          reviewCount="97"
        />
        <Card
          name="Your private 3 bedr. riad and exclusi…"
          href=""
          price="82"
          img={riad}
          mastery="Entire house"
          beds="5"
          hosterStatus="Superhost"
          reviewCount="161"
        />
        <Card
          name="Dreamy Tropical Tree House"
          href=""
          price="200"
          img={tropic}
          mastery="Entire treehouse"
          beds="1"
          hosterStatus="Superhost"
          reviewCount="364"
        />
        <NextPage href="" />
      </InnerGrid>
    </Section>
  );
};
