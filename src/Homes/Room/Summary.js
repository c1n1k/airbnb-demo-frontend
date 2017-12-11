import React from "react";
import styled from "styled-components";
import Badge from "./Badge";
import imgOwner from "./owner.png";

const Summary = styled.div`
  margin-bottom: 32px;
  display: flex;

  @supports (display: grid) {
    width: auto;
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-column-gap: 16px;
  }
`;

const SummaryText = styled.div`
  width: calc(100% / 8 * 6);

  @supports (display: grid) {
    width: auto;
    grid-column: span 6;
  }
`;
const SummaryOwner = styled.div`
  padding-top: 16px;
  width: calc(100% / 8 * 2);

  @supports (display: grid) {
    width: auto;
    grid-column: span 2;
    text-align: center;
  }
`;
const SummaryMeta = styled.div`
  font-size: 16px;
  font-weight: 300;
`;

const SummaryFeature = styled.ul`
  margin: 48px 0 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  font-size: 14px;
  font-weight: 300;
`;

const SummaryFeatureItem = styled.li`
  margin-right: 30px;
`;

const Title = styled.h1`
  margin: 0 0 5px;
  font-size: 36px;
  line-height: 1.16667;
`;

export default props => {
  return (
    <Summary>
      <SummaryText>
        <Title>Romantic Cabana with view</Title>
        <SummaryMeta>Entire cabin &#903; Armen</SummaryMeta>
        <SummaryFeature>
          <SummaryFeatureItem>2 guests</SummaryFeatureItem>
          <SummaryFeatureItem>Studio</SummaryFeatureItem>
          <SummaryFeatureItem>2 beds</SummaryFeatureItem>
          <SummaryFeatureItem>1 bath</SummaryFeatureItem>
        </SummaryFeature>
      </SummaryText>
      <SummaryOwner>
        <Badge to="" img={imgOwner} name="Yudi & Victoria" size={64} />
      </SummaryOwner>
    </Summary>
  );
};
