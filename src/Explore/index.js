import React from "react";
// import styled from "styled-components";
import Section from "../Section";
import Inner from "../Inner";
import InnerGrid from "../Inner/InnerGrid";
import Title from "../Title";
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
        <Card name="Homes" href="" img={homes} />
        <Card name="Experiences" href="" img={experiences} />
        <Card name="Restaurants" href="" img={restaurants} />
      </InnerGrid>
    </Section>
  );
};
