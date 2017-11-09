import React from "react";
import styled from "styled-components";

const Card = styled.a`
  grid-column: span 2;
  text-decoration: none;
  color: inherit;
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
        <img src={props.img} alt={props.name} />
      </Fig>
      <About>
        <Name>{props.name}</Name>
      </About>
    </Card>
  );
};
