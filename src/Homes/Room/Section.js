import React from "react";
import styled from "styled-components";

const Section = styled.section`
  margin-bottom: 24px;
  padding: 0 0 24px;
  font-size: 16px;
  line-height: 1.16667;
  border-bottom: 1px solid rgba(118, 118, 118, 0.2);
`;

const Title = styled.h3`
  font-weight: bold;
  margin-bottom: 16px;
`;

export default props => {
  return (
    <Section>
      {props.title && <Title>{props.title}</Title>}
      {props.children}
    </Section>
  );
};
