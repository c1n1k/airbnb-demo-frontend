import React from "react";
import styled from "styled-components";
import Icon from "../Icon";
import Picture from "../Picture";

const Card = styled.a`
  text-decoration: none;
  color: inherit;
`;

const Fig = styled.figure`margin-bottom: 8px;`;

const About = styled.div`
  margin: 0 0 5px;
  font-size: 15px;
  line-height: 1.2;
`;

const Meta = styled.p`
  margin-bottom: 5px;
  font-size: 15px;
  font-weight: 300;
`;

const Price = styled.span`
  margin-right: 5px;
  font-weight: bold;
`;

const Name = styled.h3`
  display: inline;
  font-weight: bold;
  font-size: inherit;
`;

const Review = styled.div``;

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
      <Meta>
        {props.mastery} &#183; {props.beds} {props.beds > 1 ? "beds" : "bed"}
      </Meta>
      <Review>
        <CardIconStar />
        <CardIconStar />
        <CardIconStar />
        <CardIconStar />
        <CardIconStar />
        <ReviewCount>
          {props.reviewCount} &#183; {props.hosterStatus}
        </ReviewCount>
      </Review>
    </Card>
  );
};
