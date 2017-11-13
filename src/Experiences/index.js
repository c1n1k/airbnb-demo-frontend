import React from "react";
import styled from "styled-components";
import Section from "../UI/Section";
import Inner from "../UI/Inner";
import Title from "../UI/Title";
import LinkMore from "../UI/LinkMore";
import Card from "./Card";
import Track from "../UI/Track";
import tile from "./tile";

const CardWrap = styled.div`
  padding: 0 8px 30px;
  width: 50%;
  flex-shrink: 0;

  @media (min-width: 768px) {
    width: 33.3333%;
  }

  @media (min-width: 980px) {
    padding-bottom: 0;
    width: 25%;
    flex-shrink: 0;
    flex-grow: 1;
  }
`;

export default () => {
  return (
    <Section>
      <Inner>
        <Title>Experiences</Title>
        <LinkMore text="See all" to="" />
      </Inner>
      <Inner>
        <Track hasPager>
          <CardWrap>
            <Card
              name="Forest therapy"
              href=""
              price="29"
              img={tile.forest}
              reviewCount="44"
            />
          </CardWrap>
          <CardWrap>
            <Card
              name="Whale watching"
              href=""
              price="69"
              img={tile.whale}
              reviewCount="46"
            />
          </CardWrap>
          <CardWrap>
            <Card
              name="Table Mountain Summit Cable Car Down"
              href=""
              price="47"
              img={tile.mountain}
              reviewCount="57"
            />
          </CardWrap>
          <CardWrap>
            <Card
              name="Salsa Night"
              href=""
              price="50"
              img={tile.salsa}
              reviewCount="39"
            />
          </CardWrap>
        </Track>
      </Inner>
    </Section>
  );
};
