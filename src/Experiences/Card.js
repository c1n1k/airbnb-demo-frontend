import React from "react";
import styled from "styled-components";
import Picture from "../UI/Picture";
import Icon from "../UI/Icon";

const Card = styled.a`
  text-decoration: none;
  color: inherit;
`;

const Fig = styled.figure`
  margin-bottom: 8px;
`;

const About = styled.div`
  margin: 0 0 3px;
  font-size: 15px;
  line-height: 1.2;
`;

const Price = styled.span`
  margin-right: 5px;
  font-weight: bold;
`;

const Name = styled.h3`
  display: inline;
  font-weight: 300;
  font-size: inherit;
`;

const Review = styled.div``;

const CardIcon = styled.span`
  position: relative;
  top: 0px;
  margin-right: 3px;
  width: 12px;
  height: 13px;
  display: inline-block;
`;

const CardIconStar = props => {
  return (
    <CardIcon>
      <Icon icon="star" fill="#008489" />
    </CardIcon>
  );
};

const ReviewCount = styled.span`
  margin-left: 5px;
  display: inline-block;
  vertical-align: top;
  font-size: 12px;
  line-height: 1.6667;
`;

export default props => {
  return (
    <Card href={props.href}>
      <Fig>
        <Picture img={props.img} alt={props.name} />
      </Fig>
      <About>
        <Price>${props.price}</Price>
        <Name>{props.name}</Name>
      </About>
      <Review>
        <CardIconStar />
        <CardIconStar />
        <CardIconStar />
        <CardIconStar />
        <CardIconStar />
        <ReviewCount>{props.reviewCount} reviews</ReviewCount>
      </Review>
    </Card>
  );
};
