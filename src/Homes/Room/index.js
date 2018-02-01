import React, { Component } from "react";
import styled from "styled-components";
import Header from "../../Header";
import Footer from "../../Footer";
import Main from "../../UI/Main";
import InnerGrid from "../../UI/Inner/InnerGrid";
import { Helmet } from "react-helmet";
import Text from "../../UI/Text";
import Section from "./Section";
import Summary from "./Summary";
import Review from "./Review";
import Owner from "./Owner";
import Neighborhood from "./Neighborhood";
import Location from "./Location";
import Similar from "./Similar";
import Other from "./Other";
import Book from "./Book/";
import imgRoom from "./room.png";
import { Sticky, StickyContainer } from "react-sticky";
import {
  LinkPage,
  Wrap,
  Figure,
  FigureActionsTop,
  FigureActionsBottom,
  FigureButton,
  ImgRoom,
  Content,
  Aside,
  Bar,
  BarLink,
  Details,
  ContentLink,
  Feature,
  FeatureItem,
  List,
  ListItem,
  Separator
} from "./styled";

export const RoomLocation = styled(Location)`
  grid-column: 1 / -1;
`;

export const SimilarRooms = styled(Similar)`
  grid-column: 1 / -1;
`;

export const Explore = styled(Other)`
  grid-column: 1 / -1;
`;

export default class Room extends Component {
  render() {
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
                    Pacific Ocean in a family home in the UNESCO Heritage city
                    of Valparaiso, Chile, South America. We are close to the
                    city center and most attractive touristic sites and we have
                    good connectivity with local transport. Be guest in a lovely
                    old house that has more than 100 years of history and that
                    is the home of four generations with different
                    nationalities.
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
                    <br /> Cancel within 48 hours of booking to get a full
                    refund
                  </p>
                  <Separator />
                  <p>Flexible</p>
                  <p>
                    Cancel up to 24 hours before chech in and get a full refund
                    (minus service fees). Cancel within 24 hours of your trip
                    and the firs… <ContentLink href="">Read more</ContentLink>
                  </p>
                </Text>
              </Section>
              <Review />
              <Owner />
              <Neighborhood />
            </Content>
            <Aside>
              <StickyContainer
                style={{
                  height: 100 + "%"
                }}
              >
                <Sticky>
                  {({
                    style

                    // the following are also available but unused in this example
                  }) => {
                    return (
                      <div
                        style={{
                          ...style
                        }}
                      >
                        <Book />
                      </div>
                    );
                  }}
                </Sticky>
              </StickyContainer>
            </Aside>
            <RoomLocation />
            <SimilarRooms />
            <Explore />
          </InnerGrid>
        </Main>
        <Footer isHiddble={false} />
      </Wrap>
    );
  }
}
