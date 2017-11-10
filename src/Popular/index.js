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
        <Title>Popular reservations around the world</Title>
        <LinkMore text="See all" href="" />
      </Inner>
      <Inner>
        <Track hasPager>
          <CardWrap>
            <Card
              img={tile.chumley}
              type="Speakeasy"
              name="Chumley’s"
              href=""
              price="60"
            />
          </CardWrap>
          <CardWrap>
            <Card
              img={tile.hanjan}
              type="Korean gastropub"
              name="Hanjan"
              href=""
              price="50"
            />
          </CardWrap>
          <CardWrap>
            <Card
              img={tile.meats}
              type="German american"
              name="Prime Meats"
              href=""
              price="55"
            />
          </CardWrap>
          <CardWrap>
            <Card
              img={tile.seaprice}
              type="Fine seafood"
              name="Seaprice"
              href=""
              price="50"
            />
          </CardWrap>
        </Track>
      </Inner>
    </Section>
  );
};
