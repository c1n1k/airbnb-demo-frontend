import React from "react";
import styled from "styled-components";
import Section from "../Section";
import Inner from "../Inner";
import Title from "../Title";
import LinkMore from "../LinkMore";
import Card from "./Card";
import Track from "../Track";
import tile from "./tile";

const CardWrap = styled.div`
  padding: 0 8px 30px;
  width: 66%;
  flex-shrink: 0;

  @media (min-width: 768px) {
    width: 40%;
  }

  @media (min-width: 980px) {
    padding-bottom: 0;
    width: 33.3333%;
    flex-shrink: 0;
    flex-grow: 1;
  }
`;

export default () => {
  return (
    <Section>
      <Inner>
        <Title>Homes</Title>
        <LinkMore text="See all" href="" />
      </Inner>
      <Inner>
        <Track hasPager>
          <CardWrap>
            <Card
              name="La Salentina, see, nature & relax"
              href=""
              price="82"
              img={tile.salentina}
              mastery="Entire house"
              beds="9"
              hosterStatus="Superhost"
              reviewCount="97"
            />
          </CardWrap>
          <CardWrap>
            <Card
              name="Your private 3 bedr. riad and exclusi…"
              href=""
              price="82"
              img={tile.riad}
              mastery="Entire house"
              beds="5"
              hosterStatus="Superhost"
              reviewCount="161"
            />
          </CardWrap>
          <CardWrap>
            <Card
              name="Dreamy Tropical Tree House"
              href=""
              price="200"
              img={tile.tropic}
              mastery="Entire treehouse"
              beds="1"
              hosterStatus="Superhost"
              reviewCount="364"
            />
          </CardWrap>
        </Track>
      </Inner>
    </Section>
  );
};
