import React from "react";
import styled from "styled-components";
import Header from "../Header";
import Footer from "../Footer";
import Main from "../UI/Main";
import Button from "../UI/Button";
import Inner from "../UI/Inner";
import InnerGrid from "../UI/Inner/InnerGrid";
import { Helmet } from "react-helmet";
import Link from "../UI/Link";
import Text from "../UI/Text";
import Section from "./Section";
import Summary from "./Summary";
import Review from "./Review";
import Owner from "./Owner";
import Neighborhood from "./Neighborhood";
import Location from "./Location";
import Similar from "./Similar";
import Other from "./Other";
import Book from "./Book";
import imgRoom from "./room.png";

const LinkPage = styled(Link)`
  font-size: 16px;
  font-weight: normal;
`;

const Wrap = styled.div`
  padding-bottom: 45px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const Figure = styled.figure`
  position: relative;
  height: 440px;
`;

const FigureActionsTop = styled(Inner)`
  position: absolute;
  top: 16px;
  left: 50%;
  height: auto;
  font-size: 14px;
  justify-content: flex-end;
  transform: translateX(-50%);
`;

const FigureActionsBottom = styled(Inner)`
  position: absolute;
  bottom: 16px;
  left: 50%;
  height: auto;
  font-size: 14px;
  font-weight: bold;
  justify-content: flex-start;
  transform: translateX(-50%);
`;

const FigureButton = styled(Button)`
  margin-left: 16px;
  font-weight: inherit;

  &:first-child {
    margin-left: 0;
  }
`;

const ImgRoom = styled.img`
  height: 440px;
  width: 100%;
  object-fit: cover;
`;

const Content = styled.div`
  width: calc(100% / 3 * 2 - 16px);

  @supports (display: grid) {
    width: auto;
    grid-column: span 8;
  }
`;

const Aside = styled.div`
  width: calc(100% / 3 - 16px);

  @supports (display: grid) {
    width: auto;
    grid-column: span 4;
  }
`;

const Bar = styled.div`
  margin-bottom: 24px;
  padding: 16px 0;
  font-size: 18px;
  border-bottom: 1px solid rgba(118, 118, 118, 0.2);
`;

const BarLink = styled.a`
  padding: 0 5px;
  font-size: 14px;
  text-decoration: none;
  color: #0f7276;
`;

const Details = styled.div`
  font-size: 18px;
  font-weight: 300;
  line-height: 1.16667;
`;

const ContentLink = styled.a`
  font-size: 16px;
  text-decoration: none;
  color: #0f7276;
`;

const Feature = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  list-style: none;
`;

const FeatureItem = styled.li`
  width: 50%;
  margin-bottom: 24px;
  font-weight: 300;
`;

const List = styled.ul`
  margin: 0 0 16px;
  padding: 0;
  list-style: none;
`;

const ListItem = styled.li`
  margin-top: 4px;
  font-weight: 300;

  &:first-child {
    margin-top: 0;
  }
`;

const Separator = styled.hr`
  margin: 20px 0;
  width: 80px;
  height: 1px;
  background-color: rgba(118, 118, 118, 0.2);
  border: none;
`;

const RoomLocation = styled(Location)`
  grid-column: 1 / -1;
`;

const SimilarRooms = styled(Similar)`
  grid-column: 1 / -1;
`;

const Explore = styled(Other)`
  grid-column: 1 / -1;
`;

export default () => {
  return (
    <Wrap>
      <Helmet>
        <title>Romantic Cabana with view</title>
      </Helmet>
      <Header />
      <Figure>
        <FigureActionsTop>
          <FigureButton>Share</FigureButton>
          <FigureButton>Save</FigureButton>
        </FigureActionsTop>
        <FigureActionsBottom>
          <FigureButton>View Photos</FigureButton>
        </FigureActionsBottom>
        <ImgRoom src={imgRoom} alt="Romantic Cabana with view" />
      </Figure>
      <Main>
        <InnerGrid>
          <Content>
            <Bar>
              <BarLink href="">Overview</BarLink>
              &#903;
              <BarLink href="">Reviews</BarLink>
              &#903;
              <BarLink href="">The Host</BarLink>
              &#903;
              <BarLink href="">Location</BarLink>
            </Bar>
            <Section>
              <Summary />
              <Details>
                <p>
                  We offer a beautiful and romantic Suite with view to the
                  Pacific Ocean in a family home in the UNESCO Heritage city of
                  Valparaiso, Chile, South America. We are close to the city
                  center and most attractive touristic sites and we have good
                  connectivity with local transport. Be guest in a lovely old
                  house that has more than 100 years of history and that is the
                  home of four generations with different nationalities.
                </p>
                <p>
                  <ContentLink href="">Read more about the space</ContentLink>
                </p>
                <LinkPage to="">Contact host</LinkPage>
              </Details>
            </Section>
            <Section title="Amenities">
              <Feature>
                <FeatureItem>Internet</FeatureItem>
                <FeatureItem>Family/kid friendly</FeatureItem>
                <FeatureItem>Wireless Internet</FeatureItem>
                <FeatureItem>Free parking on prem</FeatureItem>
              </Feature>
              <ContentLink href="">Show all amenities</ContentLink>
            </Section>
            <Section title="Always communicate through Airbnb">
              <Text>
                <p>
                  To protect your payment, never transfer money or communicate
                  outside of the Airbnb website or app
                </p>
                <LinkPage to="">Learn more</LinkPage>
              </Text>
            </Section>
            <Section title="House Rules">
              <List>
                <ListItem>Check-in is anytime after 1PM</ListItem>
                <ListItem>Check out by 11AM</ListItem>
              </List>
              <ContentLink href="">Read all rules</ContentLink>
            </Section>
            <Section title="Cancellations">
              <Text>
                <p>
                  <strong>Free cancellation</strong>
                  <br /> Cancel within 48 hours of booking to get a full refund
                </p>
                <Separator />
                <p>Flexible</p>
                <p>
                  Cancel up to 24 hours before chech in and get a full refund
                  (minus service fees). Cancel within 24 hours of your trip and
                  the firs… <ContentLink href="">Read more</ContentLink>
                </p>
              </Text>
            </Section>
            <Review />
            <Owner />
            <Neighborhood />
          </Content>
          <Aside>
            <Book />
          </Aside>
          <RoomLocation />
          <SimilarRooms />
          <Explore />
        </InnerGrid>
      </Main>
      <Footer isHiddble={false} />
    </Wrap>
  );
};
