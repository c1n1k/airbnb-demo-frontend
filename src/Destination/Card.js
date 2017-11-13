import React from "react";
import styled from "styled-components";
import Picture from "../UI/Picture";

const Card = styled.a`
  text-decoration: none;
  color: inherit;

  @supports (display: grid) {
    grid-column: span 2;
  }
`;

const Fig = styled.figure`margin-bottom: 10px;`;

const About = styled.div`
  margin: 0;
  font-size: 15px;
  font-weight: 300;
  line-height: 1.2;
`;

const Name = styled.h3`
  margin: 0;
  font-weight: bold;
  font-size: inherit;
`;

export default props => {
  return (
    <Card href={props.href}>
      <Fig>
        <Picture img={props.img} alt={props.name} />
      </Fig>
      <About>
        <Name>{props.name}</Name>
      </About>
    </Card>
  );
};
