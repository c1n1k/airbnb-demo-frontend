import React from "react";
// import styled from "styled-components";
import Section from "../Section/Section";
import Inner from "../Inner/Inner";
import InnerGrid from "../Inner/InnerGrid";
import Title from "../Title/Title";
import Card from "./Card";
import homes from "./homes.png";
import experiences from "./experiences.png";
import restaurants from "./restaurants.png";

export default () => {
  return (
    <Section>
      <Inner>
        <Title>Explore Airbnb</Title>
      </Inner>
      <InnerGrid>
        <Card name="Homes" to="" img={homes} />
        <Card name="Experiences" to="" img={experiences} />
        <Card name="Restaurants" to="" img={restaurants} />
      </InnerGrid>
    </Section>
  );
};
