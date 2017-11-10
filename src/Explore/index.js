import React from "react";
import styled from "styled-components";
import Section from "../Section";
import Inner from "../Inner";
import Title from "../Title";
import Card from "./Card";
import Track from "../Track";
import tile from "./tile";

const CardWrap = styled.div`
  padding: 0 8px 30px;
  width: 50%;
  flex-shrink: 0;

  @media (min-width: 400px) {
    width: 60%;
  }

  @media (min-width: 768px) {
    width: 40%;
  }

  @media (min-width: 980px) {
    padding-bottom: 0;
    width: 33%;
    flex-shrink: 0;
    flex-grow: 1;
  }
`;

export default () => {
  return (
    <Section>
      <Inner>
        <Title>Explore Airbnb</Title>
      </Inner>
      <Inner>
        <Track>
          <CardWrap>
            <Card name="Homes" href="" img={tile.homes} />
          </CardWrap>
          <CardWrap>
            <Card name="Experiences" href="" img={tile.experiences} />
          </CardWrap>
          <CardWrap>
            <Card name="Restaurants" href="" img={tile.restaurants} />
          </CardWrap>
        </Track>
      </Inner>
    </Section>
  );
};
