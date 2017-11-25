import React from "react";
import styled from "styled-components";
import Icon from "../UI/Icon";
import Input from "../UI/Input";

const Wrap = styled.div`
  padding: 15px 24px;
  border: 1px solid rgba(118, 118, 118, 0.2);
`;

const Header = styled.div`
  margin-bottom: 15px;
  padding-bottom: 24px;
  border-bottom: 1px solid rgba(118, 118, 118, 0.2);
`;

const Price = styled.div`
  margin-bottom: 10px;
  font-size: 10px;
`;

const Value = styled.span`
  margin-right: 5px;
  display: inine-block;
  font-size: 24px;
  font-weight: bold;
`;

const Review = styled.div`
  font-size: 12px;
`;

const Star = styled.span`
  position: relative;
  top: 1px;
  margin-right: 3px;
  display: inline-block;
  width: 12px;
  height: 12px;
`;

const ReviewStar = props => {
  return (
    <Star>
      <Icon icon="star" fill="#008489" />
    </Star>
  );
};

const ReviewCount = styled.span`
  margin-left: 5px;
  display: inline-block;
`;

const Body = styled.form`
  margin-bottom: 15px;
  padding-bottom: 24px;
  border-bottom: 1px solid rgba(118, 118, 118, 0.2);
`;

const Row = styled.div`
  margin-bottom: 15px;
  display: flex;
`;

const Label = styled.label`
  margin-bottom: 3px;
  display: block;
  width: 100%;
  font-size: 12px;
`;

const Col = styled.div`
  width: 50%;
  &:first-child {
    margin-right: -1px;
  }
`;

export default props => {
  return (
    <Wrap>
      <Header>
        <Price>
          <Value>$41</Value>
          per night
        </Price>
        <Review>
          <ReviewStar />
          <ReviewStar />
          <ReviewStar />
          <ReviewStar />
          <ReviewStar />
          <ReviewCount>111</ReviewCount>
        </Review>
      </Header>
      <Body>
        <Row>
          <Col>
            <Label>Check In</Label>
            <Input size="s" />
          </Col>
          <Col>
            <Label>Check Out</Label>
            <Input size="s" />
          </Col>
        </Row>
        <Row>
          <Label>Guests</Label>
        </Row>
      </Body>
    </Wrap>
  );
};
