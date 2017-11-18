import React from "react";
import styled from "styled-components";
import Picture from "../UI/Picture";
import { Link } from "react-router-dom";

const Card = styled(Link)`
  overflow: hidden;
  display: flex;
  width: 100%;
  flex-direction: column;
  text-decoration: none;
  color: inherit;
  border-radius: 4px;
  box-shadow: inset 0 0 0 1px rgba(72, 72, 72, 0.2),
    0 2px 4px rgba(72, 72, 72, 0.08);

  @media (min-width: 400px) {
    flex-direction: row;
    align-items: center;
    height: 100%;
  }
`;

const Fig = styled.figure`@media (min-width: 400px) {width: 96px;}`;

const About = styled.h3`
  margin: 0;
  padding: 10px;
  flex-grow: 1;
  font-size: 17px;
  line-height: 1.17647;
  text-align: center;

  @media (min-width: 400px) {
    padding: 0 15px;
    text-align: left;
  }

  @media (min-width: 768px) {
    padding: 0 25px;
  }
`;

export default props => {
  return (
    <Card to={props.to}>
      <Fig>
        <Picture img={props.img} alt={props.name} />
      </Fig>
      <About>{props.name}</About>
    </Card>
  );
};
