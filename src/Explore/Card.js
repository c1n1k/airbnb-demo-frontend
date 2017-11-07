import React from "react";
import styled from "styled-components";
import Card from "./Card";

const Card = styled.div``;

const CardFig = styled.figure`
  margin-bottom: 5px;
  overflow: hidden;
  border-radius: 2px;
`;

const CardPrice = styled.span`display: inline-block;`;
const CardAbout = styled.div`margin-bottom: 3px;`;

export default props => {
  return (
    <Card>
      <CardFig>
        <img src="{props.img}" alt="{props.name}" />
      </CardFig>
      <CardAbout>
        <CardPrice>{props.price}</CardPrice>
        {props.name}
      </CardAbout>
    </Card>
  );
};
