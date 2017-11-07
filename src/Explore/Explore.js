import React from "react";
import styled from "styled-components";
import Section from "../Section/Section";
import Inner from "../Inner/Inner";
import Title from "../Title/Title";

const SectionTitle = styled(Title)`
  @supports (display: grid) {
    grid-column: 1 / 11;
  }
`;

export default () => {
  return (
    <Section>
      <Inner>
        <SectionTitle>Explore Airbnb</SectionTitle>
      </Inner>
    </Section>
  );
};
