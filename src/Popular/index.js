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
        <Title>Popular reservations around the world</Title>
        <LinkMore text="See all" to="" />
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
