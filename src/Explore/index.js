import React from "react";
import styled from "styled-components";
import Section from "../UI/Section";
import Inner from "../UI/Inner";
import Title from "../UI/Title";
import Card from "./Card";
import Track from "../UI/Track";
import tile from "./tile";

const CardWrap = styled.div`
  padding: 0 8px;
  width: 50%;
  flex-shrink: 0;

  @media (min-width: 400px) {
    width: 60%;
  }

  @media (min-width: 768px) {
    width: 40%;
  }

  @media (min-width: 980px) {
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
            <Card name="Homes" to="homes" img={tile.homes} />
          </CardWrap>
          <CardWrap>
            <Card name="Experiences" to="" img={tile.experiences} />
          </CardWrap>
          <CardWrap>
            <Card name="Restaurants" to="" img={tile.restaurants} />
          </CardWrap>
        </Track>
      </Inner>
    </Section>
  );
};
