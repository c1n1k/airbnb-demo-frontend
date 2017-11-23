import React from "react";
import styled from "styled-components";
import Link from "../UI/Link";
import imgOwner from "./owner.png";

const Summary = styled.div`
  margin-bottom: 32px;

  @supports (display: grid) {
    width: auto;
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-column-gap: 16px;
  }
`;

const SummaryText = styled.div`
  @supports (display: grid) {
    width: auto;
    grid-column: span 6;
  }
`;
const SummaryOwner = styled.div`
  padding-top: 16px;

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

const Badge = styled(Link)`
  text-decoration: none;
`;

const BadgePhoto = styled.div`
  margin: 0 auto 10px;
  width: 64px;
  height: 64px;
  overflow: hidden;
  border-radius: 50%;
`;

const BadgeName = styled.span`
  font-size: 18px;
  font-weight: 300;
  color: #767676;
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
        <Badge to="">
          <BadgePhoto>
            <img src={imgOwner} alt="Yudi & Victoria" />
          </BadgePhoto>
          <BadgeName>Yudi & Victoria</BadgeName>
        </Badge>
      </SummaryOwner>
    </Summary>
  );
};
