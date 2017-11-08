import React from "react";
import styled from "styled-components";
import Icon from "../Icon/Icon";

const Card = styled.a`
  grid-column: span 3;
  text-decoration: none;
  color: inherit;
`;

const CardFig = styled.figure`margin-bottom: 8px;`;

const CardAbout = styled.div`
  margin: 0 0 3px;
  font-size: 15px;
  line-height: 1.2;
`;

const CardPrice = styled.span`
  margin-right: 5px;
  font-weight: bold;
`;

const CardName = styled.h3`
  display: inline;
  font-weight: 300;
  font-size: inherit;
`;

const CardReview = styled.div``;

const CardIcon = styled.span`
  position: relative;
  top: 1px;
  margin-right: 3px;
  display: inline-block;
`;

const CardIconStar = props => {
  return (
    <CardIcon>
      <Icon icon="star" width="12" height="13" fill="#008489" />
    </CardIcon>
  );
};

const CardReviewCount = styled.span`
  margin-left: 5px;
  display: inline-block;
  vertical-align: top;
  font-size: 12px;
  line-height: 1.6667;
`;

export default props => {
  return (
    <Card href={props.href}>
      <CardFig>
        <img src={props.img} alt={props.name} />
      </CardFig>
      <CardAbout>
        <CardPrice>${props.price}</CardPrice>
        <CardName>{props.name}</CardName>
      </CardAbout>
      <CardReview>
        <CardIconStar />
        <CardIconStar />
        <CardIconStar />
        <CardIconStar />
        <CardIconStar />
        <CardReviewCount>{props.reviewCount} reviews</CardReviewCount>
      </CardReview>
    </Card>
  );
};
