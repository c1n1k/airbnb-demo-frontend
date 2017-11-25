import React from "react";
import styled from "styled-components";
import Badge from "./Badge";
import Text from "../UI/Text";
import Link from "../UI/Link";
import imgOwner from "./owner.png";

const Wrap = styled.section`
  margin-bottom: 48px;
  font-size: 18px;
`;

const Head = styled.div`
  @supports (display: grid) {
    width: auto;
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-column-gap: 16px;
  }
`;

const HeadData = styled.div`
  grid-column: span 6;
`;

const HeadBadge = styled.div`
  grid-column: span 2;
`;

const Title = styled.h2`
  margin: 0 0 10px;
  font-size: 28px;
`;

const Place = styled.div`
  font-weight: 300;
`;

const Achive = styled.ul`
  padding: 16px 0;
  margin: 0 -15px;
  list-style: none;
  font-size: 0;
`;

const AchiveItem = styled.li`
  display: inline-block;
  margin: 0 15px;
  font-size: 18px;
  font-weight: 300;
`;

const Count = styled.span`
  margin-right: 12px;
  padding: 0 10px;
  display: inline-block;
  height: 35px;
  line-height: 35px;
  font-weight: bold;
  color: #fff;
  border-radius: 4px;
  background-image: linear-gradient(
    to bottom right,
    rgba(255, 195, 51, 0.8) 0%,
    #ffc333 49.52%,
    #ffb400 49.62%,
    #ffb400 100%
  );
`;

const ContentLink = styled.a`
  font-size: 16px;
  text-decoration: none;
  color: #0f7276;
`;

const LinkPage = styled(Link)`
  padding: 5px 12px;
  display: inline-block;
  font-size: 14px;
  font-weight: normal;
  border: 1px solid;
  border-radius: 4px;
`;

const Feature = styled.dl`
  margin: 0;
  padding: 0;
  list-style: none;
  font-weight: 300;
`;

const FeatureRow = styled.div`
  margin-bottom: 3px;
`;

const FeatureTerm = styled.dt`
  display: inline;
  margin-right: 5px;
`;

const FeatureDesc = styled.dd`
  margin: 0;
  display: inline;
  font-weight: normal;
`;

export default props => {
  return (
    <Wrap>
      <Head>
        <HeadData>
          <Title>Hosted by Yudy & Victoria</Title>
          <Place>
            Santa Ana, California, United States &#903; Joined in August 2017
          </Place>
          <Achive>
            <AchiveItem>
              <Count>152</Count>
              Reviews
            </AchiveItem>
            <AchiveItem>Verified</AchiveItem>
          </Achive>
        </HeadData>
        <HeadBadge>
          <Badge to="" img={imgOwner} size={88} />
        </HeadBadge>
      </Head>
      <Text>
        <p>
          Yudy and I (Victoria) are sisters-in law. Yudy lives in Colombia and
          would be your hostess on the property. I live in California and am the
          owner of the property. It is my goal to create a "boutique eco-resort"
          on the approximately 5 acre farm we have in the coffee growing region
          in the Andean mountains. We have tried to create a retreat that will
          soothe your soul and rejuvenate your spirit. Yudy speaks fluent
          Spanish and some English, punctuated with laughter and hand gestures.
          She is warm, friendly, capable and a very good cook! Yudy will help
          you arrange transportation, reservations, tours, and anything you may
          need. <ContentLink href="">Read more</ContentLink>
        </p>
        <p>
          <LinkPage to="">Contact host</LinkPage>
        </p>
        <Feature>
          <FeatureRow>
            <FeatureTerm>Languages:</FeatureTerm>
            <FeatureDesc>English, Español</FeatureDesc>
          </FeatureRow>
          <FeatureRow>
            <FeatureTerm>Response rate:</FeatureTerm>
            <FeatureDesc>100%</FeatureDesc>
          </FeatureRow>
          <FeatureRow>
            <FeatureTerm>Response time:</FeatureTerm>
            <FeatureDesc>within a few hours</FeatureDesc>
          </FeatureRow>
        </Feature>
      </Text>
    </Wrap>
  );
};
