import React from "react";
import styled from "styled-components";
import Main from "../UI/Main";
import Row from "../UI/Row";
import Inner from "../UI/Inner";
import InnerGrid from "../UI/Inner/InnerGrid";
import Pagination from "../UI/Pagination";
import GoogleMap from "google-map-react";
import Filter from "./Filter";
import Card from "./Card";
import data from "./data";

const Content = styled.div`
  width: calc(100% * (2 / 3));

  @supports (display: grid) {
    grid-column: span 8;
    width: auto;
  }
`;

const HomesContent = styled.div`position: relative;`;

const List = styled.ul`
  margin: 24px -8px 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  list-style: none;

  @supports (display: grid) {
    margin-left: 0;
    margin-right: 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 16px;
  }
`;

const ListItem = styled.li`
  margin: 0 0 40px;
  padding: 0 8px;
  width: 50%;
  flex-basis: 50%;

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
  left: 62.7%;
  bottom: 0;
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
    <Main>
      <Row>
        <Inner>
          <Filter />
        </Inner>
      </Row>
      <HomesContent>
        <InnerGrid>
          <Content>
            <List>{items}</List>
            <Pagination all="300+" />
            <Remark>
              Enter dates to see full pricing. Additional fees apply. Taxes may
              be added.
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
    </Main>
  );
};
