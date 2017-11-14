import React from "react";
import styled from "styled-components";
import Main from "../UI/Main";
import Row from "../UI/Row";
import Inner from "../UI/Inner";
import InnerGrid from "../UI/Inner/InnerGrid";
import Pagination from "../UI/Pagination";
import Track from "../UI/Track";
import GoogleMap from "google-map-react";
import Filter from "./Filter";
import Card from "./Card";
import data from "./data";

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const HomesMain = styled(Main)`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const Content = styled.div`
  @media (min-width: 980px) {
    width: calc(100% * (2 / 3));
  }

  @supports (display: grid) {
    width: auto;
    grid-column: 1 / -1;

    @media (min-width: 980px) {
      grid-column: span 8;
    }
  }
`;

const HomesContent = styled.div`
  position: relative;
  flex-grow: 1;
`;

const List = styled.ul`
  margin: 24px -8px 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  list-style: none;

  @supports (display: grid) {
    margin-left: 0;
    margin-right: 0;

    @media (min-width: 768px) {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-column-gap: 16px;
    }
  }
`;

const ListItem = styled.li`
  margin: 0 0 40px;
  padding: 0 8px;
  width: 100%;

  @media (min-width: 768px) {
    width: 50%;
  }

  @supports (display: grid) {
    padding: 0;
    width: auto;
  }
`;

const Remark = styled.p`
  margin-top: 40px;
  font-size: 16px;
  text-align: center;
  color: #636363;
`;

const Map = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: calc((100% - 980px + 16px) / 2);
  bottom: 0;
  margin-left: calc((980px / 3) * 2);
  display: none;

  @media (min-width: 980px) {
    display: block;
  }
`;

export default () => {
  const items = data.map(item => {
    return (
      <ListItem key={item.key}>
        <Card
          name={item.name}
          to={item.to}
          price={item.price}
          img={item.img}
          mastery={item.mastery}
          beds={item.beds}
          hosterStatus={item.hosterStatus}
          reviewCount={item.reviewCount}
        />
      </ListItem>
    );
  });
  return (
    <Wrap>
      <HomesMain>
        <Row>
          <Inner>
            <Track>
              <Filter />
            </Track>
          </Inner>
        </Row>
        <HomesContent>
          <InnerGrid>
            <Content>
              <List>{items}</List>
              <Pagination all="300+" />
              <Remark>
                Enter dates to see full pricing. Additional fees apply. Taxes
                may be added.
              </Remark>
            </Content>
          </InnerGrid>
          <Map>
            <GoogleMap
              apiKey="AIzaSyB77kaIrkclfyBpsyUh8glSGHkhICQDuOs"
              center={[59.938043, 30.337157]}
              zoom={9}
            />
          </Map>
        </HomesContent>
      </HomesMain>
    </Wrap>
  );
};
