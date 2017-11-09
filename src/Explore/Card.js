import React from "react";
import styled from "styled-components";

const Card = styled.a`
  overflow: hidden;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: inherit;
  border-radius: 4px;
  box-shadow: inset 0 0 0 1px rgba(72, 72, 72, 0.2),
    0 2px 4px rgba(72, 72, 72, 0.08);
  @supports (display: grid) {
    grid-column: span 4;
  }
`;

const Fig = styled.figure``;

const About = styled.h3`
  margin: 0;
  padding: 0 25px;
  flex-grow: 1;
  font-size: 17px;
  line-height: 1.17647;
`;

export default props => {
  return (
    <Card href={props.href}>
      <Fig>
        <img src={props.img} alt={props.name} />
      </Fig>
      <About>{props.name}</About>
    </Card>
  );
};
