import React from "react";
import styled from "styled-components";
import Text from "../../UI/Text";

const Wrap = styled.section`
  margin-bottom: 16px;
  font-size: 18px;
`;

const Title = styled.h2`
  margin: 0 0 16px;
  font-size: 28px;
`;

const ContentLink = styled.a`
  font-size: 16px;
  text-decoration: none;
  color: #0f7276;
`;

export default props => {
  return (
    <Wrap>
      <Title>The neighborhood</Title>
      <Text>
        <p>Yudy & Victoria’s home located in Armenia, Quindio, Colombia</p>
        <p>
          We are situated in the heart of the coffee region in the Andean
          mountains in Colombia. We are in "Vereda La Pradera" neighborhood,
          near the small town of "El Caimo", 20 minutes from Armenia and 20
          minutes from the airport, by car. Close enough for comfort and easy
          access, far enough from the hustle of traffic and city noise that you
          can commune with nature. Sleep to the sound of the crickets and awaken
          to the sound of{" "}
        </p>
        <p>
          <ContentLink href="">Read more about neighborhood</ContentLink>
        </p>
      </Text>
    </Wrap>
  );
};
